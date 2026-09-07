// Audit (sola lettura) dei link interni dentro body_en: elenca gli href IT
// che sul sito inglese porterebbero il lettore sulle pagine italiane.
// Uso: node scripts/audit-en-links.mjs
import 'dotenv/config'
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

// dotenv legge .env, non .env.local: da qui il fallback esplicito.
function loadToken() {
  if (process.env.SANITY_API_READ_TOKEN) return process.env.SANITY_API_READ_TOKEN
  const raw = readFileSync(new URL('../.env.local', import.meta.url))
  const clean = Buffer.from(raw).toString('latin1').replace(/ /g, '')
  const m = clean.match(/SANITY_API_READ_TOKEN\s*=\s*(.+)/)
  if (!m) { console.error('Token Sanity non trovato: manca SANITY_API_READ_TOKEN in .env.local'); process.exit(1) }
  return m[1].trim().replace(/^["']|["']$/g, '')
}

const client = createClient({
  projectId: 'dnhjoqwl', dataset: 'production', apiVersion: '2024-01-01',
  token: loadToken(), useCdn: false,
})

const posts = await client.fetch('*[_type == "post" && defined(body_en)]{_id, "slug": slug.current, body_en}')
const enSlugs = new Set(await client.fetch('*[_type == "post" && (defined(title_en) || defined(body_en))].slug.current'))

const tally = {}
let total = 0
let external = 0

for (const p of posts) {
  for (const b of p.body_en || []) {
    for (const m of b.markDefs || []) {
      if (m._type !== 'link' || !m.href) continue
      total++
      if (!m.href.startsWith('/')) { external++; continue }
      if (m.href.startsWith('/en/')) continue
      tally[m.href] = (tally[m.href] || 0) + 1
    }
  }
}

console.log('post con body_en:', posts.length)
console.log('link totali:', total, '| esterni:', external, '| interni IT da rimappare:', Object.values(tally).reduce((a, b) => a + b, 0))
console.log('\n  n  href                                                        stato')
for (const [href, n] of Object.entries(tally).sort((a, b) => b[1] - a[1])) {
  const m = href.match(/^\/blog\/(.+)$/)
  const note = m ? (enSlugs.has(m[1]) ? 'EN disponibile' : 'EN MANCANTE -> lascio IT') : 'rotta localizzata'
  console.log(String(n).padStart(3), ' ', href.padEnd(58), note)
}
