const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

// Helper: crea un blocco con una parte linkata
function blockWithLink(text, linkText, href, key) {
  const markKey = key + 'lnk';
  const beforeLink = text.indexOf(linkText);
  const parts = [];

  if (beforeLink > 0) {
    parts.push({ _type: 'span', _key: key + 'a', text: text.slice(0, beforeLink), marks: [] });
  }
  parts.push({ _type: 'span', _key: key + 'b', text: linkText, marks: [markKey] });
  const afterText = text.slice(beforeLink + linkText.length);
  if (afterText) {
    parts.push({ _type: 'span', _key: key + 'c', text: afterText, marks: [] });
  }

  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [{ _type: 'link', _key: markKey, href }],
    children: parts,
  };
}

function block(style, text, key) {
  return {
    _type: 'block',
    _key: key,
    style: style,
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text: text, marks: [] }]
  };
}

// ── Articolo 1: Box Maker vs Fornitore Esterno ──────────────────────────────
// Aggiungiamo link a /prodotti/ab2500 dove viene menzionato AB2500
// e un CTA finale alla pagina contatti

const article1Body = [
  block('normal', 'Quando un\'azienda valuta l\'acquisto di un box maker, la prima domanda è quasi sempre la stessa: "Costa meno produrre le scatole in casa o comprarle già pronte?" È una domanda legittima, ma posta in questi termini porta a una valutazione incompleta. Il risparmio reale di un box maker non sta (solo) nel costo della singola scatola — sta in almeno quattro voci di costo che la maggior parte delle aziende non calcola mai.', 'p1'),

  block('h2', '1. Il costo per scatola: il confronto diretto', 'h1'),
  block('normal', 'Partiamo dai numeri più semplici. Una scatola standard acquistata da un fornitore in Italia costa tra €0,35 e €0,48 al pezzo, su quantità medie. Il costo del cartone ondulato grezzo in ingresso a un box maker è comparabile — il vantaggio diretto sul singolo pezzo non è enorme, e in alcuni casi è quasi nullo.', 'p2'),
  block('normal', 'Ma questo è esattamente il punto: chi si ferma a questo confronto sta guardando solo la punta dell\'iceberg. Il costo reale del packaging tradizionale è molto più alto di €0,40 a scatola.', 'p3'),

  block('h2', '2. Il magazzino: il costo invisibile che nessuno calcola', 'h2'),
  block('normal', 'Chi acquista scatole da un fornitore esterno è costretto a fare ordini minimi — spesso 500, 1.000 o più pezzi per formato. Queste scatole devono essere stoccate da qualche parte, e lo stoccaggio ha un costo che in logistica si chiama carrying cost.', 'p4'),
  block('normal', 'Secondo i parametri standard del settore, il costo di mantenimento delle scorte si aggira tra il 20% e il 30% annuo del valore delle giacenze. Questo include: affitto o ammortamento dello spazio, costo del capitale immobilizzato, rischio di obsolescenza o deterioramento, gestione amministrativa dell\'inventario.', 'p5'),
  block('normal', 'Esempio pratico: un\'azienda che tiene a magazzino scatole per un valore di €5.000 sta spendendo tra €1.000 e €1.500 all\'anno solo per tenerle lì — prima ancora di usarle. Con un box maker, quella cifra scende a zero: si produce solo quello che serve, quando serve.', 'p6'),

  block('h2', '3. Il peso volumetrico: dove si nasconde il vero risparmio nelle spedizioni', 'h3'),
  block('normal', 'I corrieri calcolano il costo di spedizione in base al peso volumetrico, non al peso reale. La formula è: (lunghezza × larghezza × altezza) / 5000. Una scatola leggermente sovradimensionata può farti saltare di fascia tariffaria.', 'p7'),
  block('normal', 'Chi usa scatole standard da fornitore è costretto a scegliere il formato più vicino a quello del prodotto, accettando spesso 3-5 cm di spazio vuoto per lato. Chi usa un box maker produce la scatola esatta per ogni prodotto. Il risultato? Meno void fill, scatole più piccole, e spedizioni che rientrano nella fascia tariffaria inferiore.', 'p8'),
  block('normal', 'Su volumi significativi — anche solo 100 spedizioni al giorno — la differenza di fascia tariffaria può valere decine di migliaia di euro all\'anno.', 'p9'),

  block('h2', '4. Zero sprechi: nessun minimo d\'ordine, nessuna scatola buttata', 'h4'),
  block('normal', 'Quante volte un\'azienda ha comprato 1.000 scatole di un certo formato, ha cambiato prodotto o dimensione, e si è ritrovata con 400 scatole inutilizzabili? Con il packaging tradizionale questo è un rischio reale e frequente.', 'p10'),
  blockWithLink(
    'Un box maker come l\'Anypack AB2500 elimina completamente questo problema. Non esiste un lotto minimo: si producono 1, 10 o 1.000 scatole con lo stesso costo di avviamento. Il cambio formato richiede 1-3 secondi.',
    'Anypack AB2500',
    '/prodotti/ab2500',
    'p11'
  ),

  block('h2', '5. La reattività: il vantaggio che non appare nei fogli Excel', 'h5'),
  block('normal', 'Un fornitore esterno ha lead time di 3-10 giorni lavorativi. Un box maker produce in tempo reale. Per un e-commerce con picchi stagionali, per un\'azienda con lanci di prodotto frequenti, o per chi lavora su commessa, questa differenza vale molto più di qualsiasi risparmio sul costo unitario.', 'p12'),
  block('normal', 'Non dover più pianificare gli ordini di imballaggi con settimane di anticipo significa meno errori di previsione, meno capitale bloccato, più flessibilità operativa.', 'p13'),

  block('h2', 'Il calcolo completo: quando si rientra dell\'investimento?', 'h6'),
  blockWithLink(
    'Mettendo insieme tutte le voci — costo del cartone grezzo, eliminazione del carrying cost, risparmio sulle spedizioni, zero sprechi — il break-even di un box maker come l\'Anypack AB2500 si raggiunge tipicamente tra i 12 e i 24 mesi per aziende con volumi medio-alti.',
    'Anypack AB2500',
    '/prodotti/ab2500',
    'p14'
  ),
  block('normal', 'Ma la domanda più importante non è "quando rientro?" — è "quanto sto spendendo oggi in costi che non sto calcolando?" Per molte aziende la risposta è sorprendente.', 'p15'),

  block('h2', 'Per chi conviene davvero un box maker?', 'h7'),
  blockWithLink(
    'Un box maker come l\'Anypack AB2500 ha senso quando: si gestiscono più di 5 formati di scatola diversi, i volumi mensili superano le 2.000-3.000 scatole, si lavora su prodotti con dimensioni variabili, si hanno picchi stagionali imprevedibili, o si vuole eliminare la dipendenza da fornitori esterni.',
    'Anypack AB2500',
    '/prodotti/ab2500',
    'p16'
  ),
  block('normal', 'Se vuoi capire se un box maker è la scelta giusta per la tua azienda, contattaci per un\'analisi gratuita dei tuoi costi di packaging attuali.', 'p17'),
];

// ── Articolo 2: Packaging E-commerce ───────────────────────────────────────
const article2Body = [
  block('normal', 'Per un e-commerce, il packaging è spesso la seconda voce di costo operativo dopo il prodotto stesso. Eppure la maggior parte delle aziende lo gestisce in modo passivo: si scelgono due o tre formati standard, si ordinano 1.000 pezzi alla volta, e si usa ciò che c\'è. Il risultato? Si paga molto più del necessario — non sulla fattura del fornitore, ma sul costo totale di ogni spedizione.', 'p1'),

  block('h2', 'Il vero costo di una spedizione: non è quello che pensi', 'h1'),
  block('normal', 'Prendiamo un esempio concreto. Un e-commerce vende prodotti di dimensioni variabili e usa una scatola standard 40×30×20 cm per tutto, acquistata a €0,42 al pezzo. Ma calcoliamo il peso volumetrico con la formula standard dei corrieri (L×W×H/5000):', 'p2'),
  block('normal', '40 × 30 × 20 / 5000 = 4,8 kg volumetrici. Se il prodotto pesa 1,5 kg reali, il corriere fattura 4,8 kg — oltre tre volte il peso effettivo. Se si usasse invece una scatola su misura di 32×22×18 cm, il peso volumetrico scenderebbe a 2,5 kg. Su 100 spedizioni al giorno con un corriere che applica €0,30 per kg aggiuntivo, il risparmio giornaliero è di circa €69. Annuo: oltre €25.000.', 'p3'),
  block('normal', 'La scatola "economica" a €0,42 stava costando decine di migliaia di euro in peso volumetrico non necessario.', 'p4'),

  block('h2', 'I tre costi del packaging e-commerce che non appaiono in fattura', 'h2'),
  block('normal', 'Oltre al peso volumetrico, ci sono altri due costi nascosti che erodono il margine:', 'p5'),
  block('normal', 'Il primo è il materiale di riempimento. Una scatola sovradimensionata richiede pluriball, carta kraft, chips di polistirolo per proteggere il prodotto. Questi materiali costano — e pesano. Ogni grammo di void fill aggravato al peso volumetrico è un costo doppio: il materiale stesso più la spedizione aggiuntiva.', 'p6'),
  block('normal', 'Il secondo è il costo degli ordini minimi. Chi acquista scatole da un fornitore esterno ordina spesso in lotti da 500 o 1.000 pezzi per formato. Il costo di mantenimento delle scorte si aggira tra il 20% e il 30% annuo del valore della giacenza.', 'p7'),

  block('h2', 'Box maker interno vs acquisto personalizzato: quando conviene cosa', 'h3'),
  block('normal', 'Esistono oggi tre approcci al packaging on-demand per e-commerce, con soglie di convenienza diverse:', 'p8'),
  block('normal', 'Il primo approccio è l\'acquisto da fornitore di scatole personalizzate, con stampa del logo o del brand. I costi vanno da €0,75 a €2,50 al pezzo per scatole stampate, con minimi d\'ordine spesso da 200 a 500 pezzi per formato. Adatto per chi ha un unico formato e volumi medio-bassi (fino a 500-1.000 spedizioni al mese).', 'p9'),
  block('normal', 'Il secondo approccio è il servizio box-on-demand esterno: alcuni fornitori producono scatole su misura per ogni ordine, addebitando un costo per pezzo superiore alla media (€0,80-1,50) ma senza minimo. Adatto per chi vuole testare il modello senza investimento iniziale.', 'p10'),
  blockWithLink(
    'Il terzo approccio è la produzione interna con un box maker come l\'Anypack AB2500. L\'investimento iniziale è significativo (€65.000-75.000), ma il costo per scatola prodotta scende drasticamente a partire da certi volumi, e si eliminano completamente dipendenza da fornitori, minimi d\'ordine, stock e lead time. Adatto per chi supera le 3.000 spedizioni al mese con formati variabili.',
    'Anypack AB2500',
    '/prodotti/ab2500',
    'p11'
  ),

  block('h2', 'Il calcolo del punto di pareggio per volumi diversi', 'h4'),
  block('normal', 'Ipotizzando un risparmio complessivo (scatola + spedizione + stock) di €0,35 per spedizione passando al box maker, il break-even si raggiunge in:', 'p12'),
  block('normal', '3.000 spedizioni/mese → risparmio mensile €1.050 → break-even in circa 62 mesi. 8.000 spedizioni/mese → risparmio mensile €2.800 → break-even in circa 23 mesi. 15.000 spedizioni/mese → risparmio mensile €5.250 → break-even in circa 12 mesi.', 'p13'),
  block('normal', 'Questi numeri sono conservativi: non includono il risparmio sul personale addetto alla gestione degli ordini di imballaggi, né il valore della flessibilità operativa.', 'p14'),

  block('h2', 'La domanda giusta da farsi', 'h5'),
  block('normal', 'Non è "quanto costa una scatola?" ma "quanto mi costa ogni spedizione, incluso tutto?" Cartone, riempimento, peso volumetrico, stock, ordini minimi, tempo di gestione. Solo sommando tutte queste voci si ottiene il numero reale.', 'p15'),
  block('normal', 'Se vuoi capire qual è la soluzione più adatta al tuo volume e ai tuoi formati, contattaci per un\'analisi gratuita del tuo packaging attuale.', 'p16'),
];

async function run() {
  await client.patch('blog-box-maker-vs-fornitore-risparmio-reale')
    .set({ body: article1Body })
    .commit();
  console.log('✓ Articolo 1: internal links aggiunti');

  await client.patch('blog-packaging-ecommerce-costi-reali')
    .set({ body: article2Body })
    .commit();
  console.log('✓ Articolo 2: internal links aggiunti');
}

run().catch(console.error);
