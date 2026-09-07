// Applica una traduzione EN a un post: costruisce body_en dalla struttura IT
// (stessi _key/marks/markDefs/link, solo testo tradotto), imposta title_en/excerpt_en/seo_en/faq_en.
// Uso: node scripts/apply-translation.mjs <path-en-json>
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

const enPath = process.argv[2]
if (!enPath) { console.error('manca il path del file di traduzione'); process.exit(1) }

function loadToken() {
  const raw = readFileSync(new URL('../.env.local', import.meta.url))
  const clean = Buffer.from(raw).toString('latin1').replace(/ /g, '')
  const m = clean.match(/SANITY_API_READ_TOKEN\s*=\s*(.+)/)
  return m[1].trim().replace(/^["']|["']$/g, '')
}
const client = createClient({ projectId: 'dnhjoqwl', dataset: 'production', apiVersion: '2024-01-01', token: loadToken(), useCdn: false })
const key = () => 'e' + Math.random().toString(36).slice(2, 9)

const tr = JSON.parse(readFileSync(enPath, 'utf8'))
// La struttura di partenza e' sempre quella live su Sanity: body_en deve
// ricalcare _key, marks e markDefs del body italiano, blocco per blocco.
const src = await client.fetch('*[_type == "post" && slug.current == $slug][0]{_id, "slug": slug.current, body}', { slug: tr.slug })
if (!src) { console.error('post IT non trovato:', tr.slug); process.exit(1) }

const missing = []
for (const b of src.body || []) {
  if (b._type !== 'block') continue
  for (const ch of b.children || []) {
    if (ch._type === 'span' && ch.text && ch.text.trim() && !(ch._key in tr.spans)) missing.push(ch._key)
  }
}
if (missing.length) { console.error('SPAN NON TRADOTTI:', missing.join(', ')); process.exit(1) }

// linkMap (opzionale): rimappa gli href dei link interni sulla versione EN,
// perche' il serializer Portable Text usa <a href> puro e non aggiunge il prefisso /en.
const linkMap = tr.linkMap || {}
const remapped = []

const body_en = (src.body || []).map(b => {
  if (b._type !== 'block') return b
  const children = (b.children || []).map(ch => {
    if (ch._type === 'span' && (ch._key in tr.spans)) return { ...ch, text: tr.spans[ch._key] }
    return ch
  })
  const markDefs = (b.markDefs || []).map(m => {
    if (m._type === 'link' && m.href && linkMap[m.href]) {
      remapped.push(m.href + ' -> ' + linkMap[m.href])
      return { ...m, href: linkMap[m.href] }
    }
    return m
  })
  return { ...b, children, markDefs }
})

const faq_en = (tr.faq_en || []).map(f => ({ _type: 'faqItemEn', _key: key(), question: f.question, answer: f.answer }))

const patch = { title_en: tr.title_en, excerpt_en: tr.excerpt_en, seo_en: { title: tr.seo_en.title, description: tr.seo_en.description }, body_en, faq_en }

try {
  await client.patch(src._id).set(patch).commit()
  const chk = await client.fetch(`*[_id==$id][0]{ "t":title_en, "bodyEn":count(body_en), "faqEn":count(faq_en), "seoT":seo_en.title, "hasEn": defined(title_en) && defined(body_en) }`, { id: src._id })
  console.log('OK', tr.slug)
  console.log('   title_en:', chk.t)
  console.log('   body_en blocchi:', chk.bodyEn, '| faq_en:', chk.faqEn, '| seo_en.title:', chk.seoT, '| hasEn:', chk.hasEn)
  if (remapped.length) { console.log('   link rimappati su EN:'); remapped.forEach(r => console.log('     -', r)) }
} catch (e) { console.error('ERRORE patch:', e.message) }
