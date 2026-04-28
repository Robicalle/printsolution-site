const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

function block(style, text, key) {
  return {
    _type: 'block',
    _key: key,
    style: style,
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text: text, marks: [] }]
  };
}

function blockWithMarks(style, parts, key) {
  // parts = array of { text, marks }
  return {
    _type: 'block',
    _key: key,
    style: style,
    markDefs: [],
    children: parts.map((p, i) => ({
      _type: 'span',
      _key: key + 's' + i,
      text: p.text,
      marks: p.marks || []
    }))
  };
}

const body = [
  block('normal', 'Quando un\'azienda valuta l\'acquisto di un box maker come l\'Anypack AB2500, la prima domanda che si pone è quasi sempre la stessa: "Costa meno produrre le scatole in casa o comprarle già pronte?" È una domanda legittima, ma posta in questi termini porta a una valutazione incompleta. Il risparmio reale di un box maker non sta (solo) nel costo della singola scatola — sta in almeno quattro voci di costo che la maggior parte delle aziende non calcola mai.', 'p1'),

  block('h2', '1. Il costo per scatola: il confronto diretto', 'h1'),
  block('normal', 'Partiamo dai numeri più semplici. Una scatola standard acquistata da un fornitore in Italia costa tra €0,35 e €0,48 al pezzo, su quantità medie. Il costo del cartone ondulato grezzo in ingresso a un box maker è comparabile — il vantaggio diretto sul singolo pezzo non è enorme, e in alcuni casi è quasi nullo.', 'p2'),
  block('normal', 'Ma questo è esattamente il punto: chi si ferma a questo confronto sta guardando solo la punta dell\'iceberg. Il costo reale del packaging tradizionale è molto più alto di €0,40 a scatola.', 'p3'),

  block('h2', '2. Il magazzino: il costo invisibile che nessuno calcola', 'h2'),
  block('normal', 'Chi acquista scatole da un fornitore esterno è costretto a fare ordini minimi — spesso 500, 1.000 o più pezzi per formato. Queste scatole devono essere stoccate da qualche parte, e lo stoccaggio ha un costo che in logistica si chiama carrying cost.', 'p4'),
  block('normal', 'Secondo i parametri standard del settore, il costo di mantenimento delle scorte si aggira tra il 20% e il 30% annuo del valore delle giacenze. Questo include: affitto o ammortamento dello spazio, costo del capitale immobilizzato, rischio di obsolescenza o deterioramento, gestione amministrativa dell\'inventario.', 'p5'),
  block('normal', 'Esempio pratico: un\'azienda che tiene a magazzino scatole per un valore di €5.000 sta spendendo tra €1.000 e €1.500 all\'anno solo per tenerle lì — prima ancora di usarle. Con un box maker, quella cifra scende a zero: si produce solo quello che serve, quando serve.', 'p6'),

  block('h2', '3. Il peso volumetrico: dove si nasconde il vero risparmio nelle spedizioni', 'h3a'),
  block('normal', 'I corrieri calcolano il costo di spedizione in base al peso volumetrico, non al peso reale. La formula è: (lunghezza × larghezza × altezza) / 5000. Una scatola leggermente sovradimensionata può farti saltare di fascia tariffaria.', 'p7'),
  block('normal', 'Chi usa scatole standard da fornitore è costretto a scegliere il formato più vicino a quello del prodotto, accettando spesso 3-5 cm di spazio vuoto per lato. Chi usa un box maker produce la scatola esatta per ogni prodotto. Il risultato? Meno void fill (carta, pluriball, polistirolo), scatole più piccole, e spedizioni che rientrano nella fascia tariffaria inferiore.', 'p8'),
  block('normal', 'Su volumi significativi — anche solo 100 spedizioni al giorno — la differenza di fascia tariffaria può valere decine di migliaia di euro all\'anno.', 'p9'),

  block('h2', '4. Zero sprechi: nessun minimo d\'ordine, nessuna scatola buttata', 'h4'),
  block('normal', 'Quante volte un\'azienda ha comprato 1.000 scatole di un certo formato, ha cambiato prodotto o dimensione, e si è ritrovata con 400 scatole inutilizzabili? Con il packaging tradizionale questo è un rischio reale e frequente.', 'p10'),
  block('normal', 'Un box maker elimina completamente questo problema. Non esiste un lotto minimo: si producono 1, 10 o 1.000 scatole con lo stesso costo di avviamento (praticamente zero — il cambio formato sull\'AB2500 richiede 1-3 secondi). Il cartone grezzo non scade, non si deteriora come le scatole già formate, e si adatta a qualsiasi formato futuro.', 'p11'),

  block('h2', '5. La reattività: il vantaggio che non appare nei fogli Excel', 'h5'),
  block('normal', 'Un fornitore esterno ha lead time di 3-10 giorni lavorativi. Un box maker produce in tempo reale. Per un e-commerce con picchi stagionali, per un\'azienda con lanci di prodotto frequenti, o per chi lavora su commessa, questa differenza vale molto più di qualsiasi risparmio sul costo unitario.', 'p12'),
  block('normal', 'Non dover più pianificare gli ordini di imballaggi con settimane di anticipo significa meno errori di previsione, meno capitale bloccato, più flessibilità operativa.', 'p13'),

  block('h2', 'Il calcolo completo: quando si rientra dell\'investimento?', 'h6'),
  block('normal', 'Mettendo insieme tutte le voci — costo del cartone grezzo, eliminazione del carrying cost, risparmio sulle spedizioni, zero sprechi — il break-even di un box maker come l\'Anypack AB2500 (investimento iniziale €65.000-75.000) si raggiunge tipicamente tra i 12 e i 24 mesi per aziende con volumi medio-alti.', 'p14'),
  block('normal', 'Ma la domanda più importante non è "quando rientro?" — è "quanto sto spendendo oggi in costi che non sto calcolando?" Per molte aziende la risposta è sorprendente.', 'p15'),

  block('h2', 'Per chi conviene davvero un box maker?', 'h7'),
  block('normal', 'Un box maker come l\'AB2500 ha senso quando: si gestiscono più di 5 formati di scatola diversi, i volumi mensili superano le 2.000-3.000 scatole, si lavora su prodotti con dimensioni variabili, si hanno picchi stagionali imprevedibili, o si vuole eliminare definitivamente la dipendenza da fornitori esterni con tempi di consegna variabili.', 'p16'),
  block('normal', 'Se vuoi capire se un box maker è la scelta giusta per la tua azienda, contattaci per un\'analisi gratuita dei tuoi costi di packaging attuali.', 'p17'),
];

const doc = {
  _id: 'blog-box-maker-vs-fornitore-risparmio-reale',
  _type: 'post',
  title: 'Box Maker vs Fornitore: Il Risparmio Non È Solo nel Costo della Scatola',
  slug: { _type: 'slug', current: 'box-maker-vs-fornitore-risparmio-reale' },
  category: 'packaging',
  author: 'Print Solution S.r.l.',
  publishedAt: new Date().toISOString(),
  order: 5,
  excerpt: 'Il vero risparmio di un box maker non sta nel costo della singola scatola. Sta nel magazzino eliminato, nelle spedizioni ottimizzate, negli sprechi azzerati. Ecco i numeri reali.',
  body: body,
  seo: {
    title: 'Box Maker vs Fornitore Esterno: Dove Si Nasconde il Vero Risparmio',
    description: 'Il risparmio di un box maker non è solo nel costo della scatola: carrying cost 20-30%, peso volumetrico, zero sprechi. Calcolo reale del ROI con Anypack AB2500.',
    keywords: [
      'box maker vs acquisto scatole fornitore',
      'risparmio reale box maker azienda',
      'costo packaging on demand vs tradizionale',
      'anypack ab2500 roi calcolo',
      'eliminare stock scatole cartone',
      'peso volumetrico spedizione risparmio packaging',
      'just in time packaging vantaggi',
    ]
  }
};

async function run() {
  try {
    await client.createOrReplace(doc);
    console.log('✓ Articolo creato:', doc._id);
  } catch (e) {
    console.error('✗ Errore:', e.message);
  }
}

run();
