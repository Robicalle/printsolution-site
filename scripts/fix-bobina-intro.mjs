// Corregge il doppio cappello nella BOZZA (resta bozza, non pubblica).
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

function loadToken() {
  const raw = readFileSync(new URL('../.env.local', import.meta.url))
  const clean = Buffer.from(raw).toString('latin1').replace(/ /g, '')
  const m = clean.match(/SANITY_API_READ_TOKEN\s*=\s*(.+)/)
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : null
}

const client = createClient({
  projectId: 'dnhjoqwl', dataset: 'production', apiVersion: '2024-01-01',
  token: loadToken(), useCdn: false,
})

const ID = 'drafts.blog-stampante-etichette-colori-bobina-guida'
const NUOVO = "Una stampante per etichette in bobina stampa direttamente su materiale in rotolo a colori, producendo etichette finite pronte per l'applicazione senza passare da un tipografo esterno. La produzione on-demand elimina i minimi d'ordine e permette di rispondere in poche ore a qualsiasi esigenza."

const doc = await client.getDocument(ID)
if (!doc) { console.error('BOZZA NON TROVATA:', ID); process.exit(1) }

const firstText = (b) => (b && b.children && b.children[0] && b.children[0].text) || ''

// 1) rimuovi il blocco intro anteposto
doc.body = (doc.body || []).filter(
  (b) => !firstText(b).startsWith('Scegliere la stampante per etichette in bobina giusta significa bilanciare')
)

// 2) riscrivi lo span del blocco "Una stampante per etichette a colori in bobina..." (mantiene _key)
let sostituito = false
for (const b of doc.body) {
  if (firstText(b).startsWith('Una stampante per etichette a colori in bobina stampa direttamente')) {
    b.children[0].text = NUOVO
    sostituito = true
    break
  }
}
console.log('Blocco intro rimosso:', true, '| Span riscritto:', sostituito)

// 3) createOrReplace sulla BOZZA (nessuna pubblicazione)
delete doc._rev
await client.createOrReplace(doc)
console.log('BOZZA aggiornata:', doc._id)

// 4) stampa i primi 3 blocchi (style + testo)
const fresh = await client.getDocument(ID)
console.log('\n=== primi 3 blocchi di body ===')
fresh.body.slice(0, 3).forEach((b, i) => {
  console.log(`[${i}] (${b.style || b._type}) ${firstText(b).slice(0, 140)}`)
})
console.log('\nPrima frase contiene "stampante per etichette in bobina":',
  firstText(fresh.body[0]).includes('stampante per etichette in bobina'))
