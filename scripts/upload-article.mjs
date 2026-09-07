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
import { readFileSync } from 'node:fs'
import { createClient } from '@sanity/client'

const [mdPath, metaPath, ...flags] = process.argv.slice(2)
if (!mdPath || !metaPath) {
  console.error('Uso: node scripts/upload-article.mjs <articolo.md> <articolo.meta.json> [--publish]')
  process.exit(1)
}
const PUBLISH = flags.includes('--publish')

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

const body = []
for (let raw of md.split('\n')) {
  const l = raw.trim()
  if (!l) continue
  if (/^###\s+/.test(l)) body.push(block('h3', l.replace(/^###\s+/, '')))
  else if (/^##\s+/.test(l)) body.push(block('h2', l.replace(/^##\s+/, '')))
  else if (/^#\s+/.test(l)) body.push(block('h2', l.replace(/^#\s+/, '')))
  else if (/^[-*]\s+/.test(l)) body.push(listItem(l.replace(/^[-*]\s+/, '')))
  else if (/^>\s?/.test(l)) body.push(block('blockquote', l.replace(/^>\s?/, '')))
  else if (/^[-*_]{3,}$/.test(l)) { /* hr: ignora */ }
  else body.push(block('normal', l.replace(/^\*(.+)\*$/, '$1')))
}

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
  publishedAt: meta.publishedAt || new Date().toISOString(),
  seo: meta.seo ? { title: meta.seo.title, description: meta.seo.description, keywords: meta.seo.keywords || [] } : undefined,
}

const res = await client.createOrReplace(doc)
console.log((PUBLISH ? 'PUBBLICATO' : 'BOZZA CREATA') + ':', res._id)
console.log('Blocchi body:', body.length, '| FAQ:', faq.length, '| relatedProducts:', relatedProducts.length)
console.log('Preview:', 'https://www.printsolutionsrl.it/blog/' + meta.slug)
