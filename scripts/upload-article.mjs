// scripts/upload-article.mjs
// Uploader riutilizzabile: crea/aggiorna un articolo blog su Sanity partendo da
// un file Markdown (il corpo) + un file .meta.json (titolo, slug, SEO, FAQ, ecc.).
//
// USO:
//   node scripts/upload-article.mjs <articolo.md> <articolo.meta.json>            -> crea BOZZA (drafts.*)
//   node scripts/upload-article.mjs <articolo.md> <articolo.meta.json> --publish  -> pubblica
//
// SICUREZZA: di default crea SOLO una bozza (il sito live non cambia). Il token
// va preso da .env.local (NON hardcodarlo). Verifica il risultato in Preview prima
// di pubblicare.
//
// NOTA: questo script è un punto di partenza scritto senza poter girare contro il
// vostro Sanity. Eseguilo prima in modalità bozza e controlla l'output; adatta il
// converter Markdown->Portable Text se qualche blocco non ti convince.

import 'dotenv/config'
import { readFileSync, createReadStream } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { createClient } from '@sanity/client'

const [mdPath, metaPath, ...flags] = process.argv.slice(2)
if (!mdPath || !metaPath) {
  console.error('Uso: node scripts/upload-article.mjs <articolo.md> <articolo.meta.json> [--publish]')
  process.exit(1)
}
const PUBLISH = flags.includes('--publish')
const DRY = flags.includes('--dry-run')   // mostra la conversione, non scrive nulla

// Attenzione: dotenv legge .env, NON .env.local. Senza questo fallback lo
// script parte senza token e Sanity risponde "Insufficient permissions".
function loadToken() {
  const fromEnv = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN
  if (fromEnv) return fromEnv
  const raw = readFileSync(new URL('../.env.local', import.meta.url))
  const clean = Buffer.from(raw).toString('latin1').replace(/ /g, '')
  const m = clean.match(/SANITY_API_READ_TOKEN\s*=\s*(.+)/)
  if (!m) { console.error('Token Sanity non trovato: manca SANITY_API_READ_TOKEN in .env.local'); process.exit(1) }
  return m[1].trim().replace(/^["']|["']$/g, '')
}

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: loadToken(),
  useCdn: false,
})

const meta = JSON.parse(readFileSync(metaPath, 'utf8'))
let md = readFileSync(mdPath, 'utf8')

const key = (() => { let n = 0; return () => 'k' + (n++).toString(36) })()

// --- pulizia: togli il titolo H1 iniziale, la riga corsivo di categoria,
// e la sezione "Domande frequenti" (le FAQ vivono nel campo faq via meta). ---
md = md.replace(/^﻿/, '')
const lines = md.split('\n')
const out = []
let skippingFaq = false
for (let i = 0; i < lines.length; i++) {
  const l = lines[i]
  if (i === 0 && /^#\s/.test(l)) continue                 // titolo H1 -> sta in meta
  if (/^###\s+Domande frequenti/i.test(l)) { skippingFaq = true; continue }
  if (skippingFaq) {
    if (/^###\s+Fonti/i.test(l)) { skippingFaq = false; out.push(l); continue } // riprendi da Fonti
    continue
  }
  out.push(l)
}
md = out.join('\n')

// --- converter Markdown -> Portable Text (sottoinsieme: h2/h3, paragrafi,
// liste puntate, citazioni, grassetto **..**, link [t](url)). ---
function inline(text) {
  // produce children[] con marks 'strong' e link (markDefs)
  const children = []
  const markDefs = []
  const re = /(\*\*([^*]+)\*\*)|(\[([^\]]+)\]\(([^)]+)\))/g
  let last = 0, m
  const push = (t, marks) => { if (t) children.push({ _type: 'span', _key: key(), text: t, marks: marks || [] }) }
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index))
    if (m[2] != null) push(m[2], ['strong'])
    else { const mk = key(); markDefs.push({ _type: 'link', _key: mk, href: m[5] }); push(m[4], [mk]) }
    last = re.lastIndex
  }
  push(text.slice(last))
  if (!children.length) push('')
  return { children, markDefs }
}
function block(style, text) { const { children, markDefs } = inline(text); return { _type: 'block', _key: key(), style, markDefs, children } }
function listItem(text) { const { children, markDefs } = inline(text); return { _type: 'block', _key: key(), style: 'normal', level: 1, listItem: 'bullet', markDefs, children } }

// Tabelle: righe consecutive che iniziano e finiscono con "|". La riga di
// separazione |---|---| si salta, la prima riga fa da intestazione. Le celle
// sono testo semplice (il blocco table non ha grassetti ne' link).
// Immagini: ![alt](percorso "didascalia"), percorso relativo al file .md;
// vengono caricate su Sanity al momento dell'upload.
const cella = (c) => c.trim().replace(/\*\*([^*]+)\*\*/g, '$1')
const body = []
const immagini = []
let tabella = null
function chiudiTabella() {
  if (tabella) body.push({ _type: 'table', _key: key(), hasHeader: true, rows: tabella.map(cells => ({ _type: 'row', _key: key(), cells })) })
  tabella = null
}
for (let raw of md.split('\n')) {
  const l = raw.trim()
  if (/^\|.*\|$/.test(l)) {
    if (/^\|[\s:|-]+\|$/.test(l)) continue
    if (!tabella) tabella = []
    tabella.push(l.slice(1, -1).split('|').map(cella))
    continue
  }
  chiudiTabella()
  if (!l) continue
  const img = l.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/)
  if (img) {
    const b = { _type: 'image', _key: key(), alt: img[1], caption: img[3] || undefined, file: resolve(dirname(mdPath), img[2]) }
    immagini.push(b)
    body.push(b)
  }
  else if (/^###\s+/.test(l)) body.push(block('h3', l.replace(/^###\s+/, '')))
  else if (/^##\s+/.test(l)) body.push(block('h2', l.replace(/^##\s+/, '')))
  else if (/^#\s+/.test(l)) body.push(block('h2', l.replace(/^#\s+/, '')))
  else if (/^[-*]\s+/.test(l)) body.push(listItem(l.replace(/^[-*]\s+/, '')))
  else if (/^>\s?/.test(l)) body.push(block('blockquote', l.replace(/^>\s?/, '')))
  else if (/^[-*_]{3,}$/.test(l)) { /* hr: ignora */ }
  else body.push(block('normal', l.replace(/^\*(.+)\*$/, '$1')))
}
chiudiTabella()

// --- FAQ e relatedProducts dal meta ---
const faq = (meta.faq || []).map(f => ({ _type: 'faqItem', _key: key(), question: f.question, answer: f.answer }))
const relatedProducts = (meta.relatedProducts || []).map(p => ({ _type: 'relatedProduct', _key: key(), ...p }))

const baseId = 'blog-' + meta.slug
const doc = {
  _id: PUBLISH ? baseId : 'drafts.' + baseId,
  _type: 'post',
  title: meta.title,
  slug: { _type: 'slug', current: meta.slug },
  category: meta.category,
  author: meta.author || 'Print Solution S.r.l.',
  excerpt: meta.excerpt,
  body,
  faq,
  relatedProducts,
  // data ancora da decidere ([[...]]): per la bozza vale oggi
  publishedAt: meta.publishedAt && !meta.publishedAt.includes('[[') ? meta.publishedAt : new Date().toISOString(),
  seo: meta.seo ? { title: meta.seo.title, description: meta.seo.description, keywords: meta.seo.keywords || [] } : undefined,
}

// Segnaposto [[...]] ancora nel testo o nel meta: la bozza si puo' creare per
// vederla in anteprima, la pubblicazione no.
const segnaposto = (JSON.stringify(doc) + (meta.publishedAt || '')).match(/\[\[[^\]]*\]\]/g) || []
if (segnaposto.length) {
  console.log('Segnaposto ancora da compilare:', segnaposto.length)
  for (const s of [...new Set(segnaposto)].slice(0, 15)) console.log('   ', s.slice(0, 80))
  if (PUBLISH) { console.error('Pubblicazione bloccata: compila i segnaposto e riprova.'); process.exit(1) }
}

if (DRY) {
  const conta = {}
  for (const b of body) { const t = b._type === 'block' ? (b.listItem ? 'lista' : b.style) : b._type; conta[t] = (conta[t] || 0) + 1 }
  console.log('DRY-RUN, nessuna scrittura. Blocchi:', body.length, JSON.stringify(conta))
  for (const b of body.filter(x => x._type === 'table')) {
    console.log('Tabella', b.rows.length, 'righe x', b.rows[0].cells.length, 'colonne')
    for (const r of b.rows) console.log('   | ' + r.cells.map(c => c.slice(0, 22).padEnd(22)).join(' | '))
  }
  for (const b of immagini) console.log('Immagine:', basename(b.file), '| alt:', b.alt, '| didascalia:', b.caption || '-')
  process.exit(0)
}

// Sanity: in caso di errore si stampa solo il messaggio, mai la richiesta
// (conterrebbe il token).
let res
try {
  for (const b of immagini) {
    const asset = await client.assets.upload('image', createReadStream(b.file), { filename: basename(b.file) })
    b.asset = { _type: 'reference', _ref: asset._id }
    console.log('Immagine caricata:', basename(b.file), '->', asset.metadata.dimensions.width + 'x' + asset.metadata.dimensions.height)
    delete b.file
  }
  res = await client.createOrReplace(doc)
} catch (e) {
  console.error('Errore Sanity:', e.message)
  process.exit(1)
}
console.log((PUBLISH ? 'PUBBLICATO' : 'BOZZA CREATA') + ':', res._id)
console.log('Blocchi body:', body.length, '| FAQ:', faq.length, '| relatedProducts:', relatedProducts.length)
console.log('Preview:', 'https://www.printsolutionsrl.it/blog/' + meta.slug)
