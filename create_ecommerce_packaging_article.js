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

const body = [
  block('normal', 'Per un e-commerce, il packaging è spesso la seconda voce di costo operativo dopo il prodotto stesso. Eppure la maggior parte delle aziende lo gestisce in modo passivo: si scelgono due o tre formati standard, si ordinano 1.000 pezzi alla volta, e si usa ciò che c\'è. Il risultato? Si paga molto più del necessario — non sulla fattura del fornitore, ma sul costo totale di ogni spedizione. Questo articolo mette i numeri in fila.', 'p1'),

  block('h2', 'Il vero costo di una spedizione: non è quello che pensi', 'h1'),
  block('normal', 'Prendiamo un esempio concreto. Un e-commerce vende prodotti di dimensioni variabili e usa una scatola standard 40×30×20 cm per tutto, acquistata a €0,42 al pezzo. Sembra un costo controllato. Ma calcoliamo il peso volumetrico con la formula standard dei corrieri (L×W×H/5000):', 'p2'),
  block('normal', '40 × 30 × 20 / 5000 = 4,8 kg volumetrici. Se il prodotto pesa 1,5 kg reali, il corriere fattura 4,8 kg — oltre tre volte il peso effettivo. Se si usasse invece una scatola su misura di 32×22×18 cm, il peso volumetrico scenderebbe a 2,5 kg. Su 100 spedizioni al giorno con un corriere che applica €0,30 per kg aggiuntivo, il risparmio giornaliero è di circa €69. Annuo: oltre €25.000.', 'p3'),
  block('normal', 'La scatola "economica" a €0,42 stava costando decine di migliaia di euro in peso volumetrico non necessario.', 'p4'),

  block('h2', 'I tre costi del packaging e-commerce che non appaiono in fattura', 'h2'),
  block('normal', 'Oltre al peso volumetrico, ci sono altri due costi nascosti che erodono il margine:', 'p5'),
  block('normal', 'Il primo è il materiale di riempimento. Una scatola sovradimensionata richiede pluriball, carta kraft, chips di polistirolo per proteggere il prodotto. Questi materiali costano — e pesano. Ogni grammo di void fill aggravato al peso volumetrico è un costo doppio: il materiale stesso più la spedizione aggiuntiva.', 'p6'),
  block('normal', 'Il secondo è il costo degli ordini minimi. Chi acquista scatole da un fornitore esterno ordina spesso in lotti da 500 o 1.000 pezzi per formato. Se il prodotto cambia, se si lancia una nuova linea, o se si decide di cambiare dimensione, le scatole già ordinate diventano un magazzino immobile. Il costo di mantenimento delle scorte si aggira tra il 20% e il 30% annuo del valore della giacenza.', 'p7'),

  block('h2', 'Box maker interno vs acquisto personalizzato: quando conviene cosa', 'h3'),
  block('normal', 'Esistono oggi tre approcci al packaging on-demand per e-commerce, con soglie di convenienza diverse:', 'p8'),
  block('normal', 'Il primo approccio è l\'acquisto da fornitore di scatole personalizzate, con stampa del logo o del brand. I costi vanno da €0,75 a €2,50 al pezzo per scatole stampate, con minimi d\'ordine spesso da 200 a 500 pezzi per formato. Adatto per chi ha un unico formato e volumi medio-bassi (fino a 500-1.000 spedizioni al mese).', 'p9'),
  block('normal', 'Il secondo approccio è il servizio box-on-demand esterno: alcuni fornitori producono scatole su misura per ogni ordine, addebitando un costo per pezzo superiore alla media (€0,80-1,50) ma senza minimo. Adatto per chi vuole testare il modello senza investimento iniziale.', 'p10'),
  block('normal', 'Il terzo approccio è la produzione interna con un box maker come l\'Anypack AB2500. L\'investimento iniziale è significativo (€65.000-75.000), ma il costo per scatola prodotta scende drasticamente a partire da certi volumi, e si eliminano completamente dipendenza da fornitori, minimi d\'ordine, stock e lead time. Adatto per chi supera le 3.000 spedizioni al mese con formati variabili.', 'p11'),

  block('h2', 'Il calcolo del punto di pareggio per volumi diversi', 'h4'),
  block('normal', 'Ipotizzando un risparmio complessivo (scatola + spedizione + stock) di €0,35 per spedizione passando al box maker, il break-even si raggiunge in:', 'p12'),
  block('normal', '3.000 spedizioni/mese → risparmio mensile €1.050 → break-even in circa 62 mesi (troppo lungo). 8.000 spedizioni/mese → risparmio mensile €2.800 → break-even in circa 23 mesi. 15.000 spedizioni/mese → risparmio mensile €5.250 → break-even in circa 12 mesi.', 'p13'),
  block('normal', 'Questi numeri sono conservativi: non includono il risparmio sul personale addetto alla gestione degli ordini di imballaggi, né il valore della flessibilità operativa. Aziende con prodotti ad alto valore o con molti formati tendono ad avere ritorni molto più rapidi.', 'p14'),

  block('h2', 'La domanda giusta da farsi', 'h5'),
  block('normal', 'Non è "quanto costa una scatola?" ma "quanto mi costa ogni spedizione, incluso tutto?" Cartone, riempimento, peso volumetrico, stock, ordini minimi, tempo di gestione. Solo sommando tutte queste voci si ottiene il numero reale — e spesso è molto più alto di quello che appare nella fattura del fornitore di imballaggi.', 'p15'),
  block('normal', 'Se vuoi capire qual è la soluzione più adatta al tuo volume e ai tuoi formati, contattaci per un\'analisi gratuita del tuo packaging attuale.', 'p16'),
];

const doc = {
  _id: 'blog-packaging-ecommerce-costi-reali',
  _type: 'post',
  title: 'Packaging per E-commerce: Quanto Costa Davvero Ogni Spedizione?',
  slug: { _type: 'slug', current: 'packaging-ecommerce-costi-reali' },
  category: 'packaging',
  author: 'Print Solution S.r.l.',
  publishedAt: new Date().toISOString(),
  order: 6,
  excerpt: 'Il costo reale del packaging non è €0,42 a scatola. È il peso volumetrico che paghi al corriere, il materiale di riempimento, le scatole a magazzino. Ecco i numeri per capire quanto stai spendendo davvero.',
  body: body,
  seo: {
    title: 'Packaging E-commerce: Quanto Costa Davvero Ogni Spedizione?',
    description: 'Il vero costo del packaging e-commerce non è solo la scatola: peso volumetrico, void fill, stock. Calcolo reale con esempi numerici e confronto box maker vs fornitore.',
    keywords: [
      'costo packaging e-commerce spedizione reale',
      'peso volumetrico risparmio packaging',
      'scatole su misura e-commerce convengono',
      'costo totale imballaggio spedizione italia',
      'box maker e-commerce break even',
      'ridurre costi spedizione packaging giusto',
      'void fill costo spedizione e-commerce',
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
