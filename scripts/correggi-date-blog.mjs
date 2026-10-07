// Rimette una data di pubblicazione vera ai 13 articoli che avevano date
// "distribuite" all'indietro da /api/update-blog-dates (marzo 2025 - febbraio 2026).
// Sono stati caricati in Sanity il 18/02/2026 e sono diventati leggibili con il
// lancio del sito nuovo: 6 marzo 2026, primo giorno con impressioni su Google per
// /soluzioni/, /usato e /blog/ (dati Search Console). Non erano post del vecchio
// sito: quelli (/post/...) erano notizie ed eventi, verificato su Internet Archive.
//
//   node scripts/correggi-date-blog.mjs            -> mostra cosa cambierebbe
//   node scripts/correggi-date-blog.mjs --applica  -> scrive su Sanity
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

const DATA_LANCIO = '2026-03-06T10:00:00.000Z'
const SLUG = [
  'stampa-digitale-cartone-ondulato-vs-flessografia', 'come-scegliere-stampante-etichette-colori',
  'packaging-personalizzato-vantaggi-pmi', 'stampa-digitale-vs-offset-piccoli-lotti',
  'automatizzare-produzione-scatole', 'etichette-adesive-materiali-finiture',
  'hot-foil-stamping-cose-quando-usarlo', 'stampa-cartone-ondulato-guida-completa',
  'come-ridurre-costi-packaging', 'tendenze-packaging-2026',
  'stampante-inkjet-industriale-come-scegliere', 'box-maker-produzione-automatica-scatole',
  'stampante-etichette-colori-bobina-guida',
]

function leggiEnv(nome) {
  if (process.env[nome]) return process.env[nome]
  const testo = Buffer.from(readFileSync(new URL('../.env.local', import.meta.url))).toString('latin1')
  const m = testo.match(new RegExp(`^${nome}\\s*=\\s*"?([^"\\r\\n]+)"?`, 'm'))
  return m ? m[1].trim() : undefined
}

const client = createClient({
  projectId: leggiEnv('NEXT_PUBLIC_SANITY_PROJECT_ID'),
  dataset: leggiEnv('NEXT_PUBLIC_SANITY_DATASET'),
  apiVersion: '2024-01-01',
  token: leggiEnv('SANITY_API_READ_TOKEN'),
  useCdn: false,
})

const applica = process.argv.includes('--applica')
const post = await client.fetch(`*[_type == "post" && slug.current in $slug]{ _id, "slug": slug.current, publishedAt, _createdAt }`, { slug: SLUG })
if (post.length !== SLUG.length) {
  console.error(`Attesi ${SLUG.length} articoli, trovati ${post.length}: mi fermo.`)
  process.exit(1)
}
for (const p of post) {
  console.log(`${p.slug.padEnd(52)} ${String(p.publishedAt).slice(0, 10)} -> ${DATA_LANCIO.slice(0, 10)}`)
}
if (!applica) {
  console.log('\nProva: nessuna modifica scritta. Rilancia con --applica per salvare.')
  process.exit(0)
}
const tx = client.transaction()
for (const p of post) tx.patch(p._id, (patch) => patch.set({ publishedAt: DATA_LANCIO }))
await tx.commit()
console.log(`\nAggiornati ${post.length} articoli. Il sito li mostra entro un'ora (o subito dopo un deploy).`)
