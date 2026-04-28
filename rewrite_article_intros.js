const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false,
});

function span(key, text) {
  return { _type: 'span', _key: key + '_s', text, marks: [] };
}

function introBlock(key, text) {
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [span(key, text)],
  };
}

// Nuovi testi intro — risposta diretta nelle prime 2 righe
const intros = {
  'blog-automatizzare-produzione-scatole': {
    it: "Automatizzare la produzione di scatole significa eliminare l'acquisto da fornitori esterni e produrre ogni imballaggio on-demand, con una macchina box maker che esegue taglio, scanalatura, cordonatura e incollaggio in un ciclo completamente automatico. Il risultato: zero magazzino, zero sprechi, costo per scatola ridotto al costo del cartone grezzo.",
    en: "Automating box production means eliminating external suppliers and producing every pack on demand, using a box maker machine that cuts, slots, creases and glues in a fully automatic cycle. The result: zero stock, zero waste, and a per-box cost reduced to the raw board price.",
  },
  'blog-box-maker-produzione-automatica-scatole': {
    it: "Un box maker è una macchina automatica che trasforma fogli di cartone ondulato in scatole finite — taglio, scanalatura, cordonatura e incollaggio in un unico ciclo, senza intervento manuale. Si inseriscono le dimensioni, si avvia la macchina, si raccolgono le scatole già pronte.",
    en: "A box maker is an automatic machine that turns corrugated board sheets into finished boxes — cutting, slotting, creasing and gluing in a single cycle, with no manual steps. Enter the dimensions, start the machine, collect the finished boxes.",
  },
  'blog-come-ridurre-costi-packaging': {
    it: "Il costo reale del packaging è quasi sempre più alto di quello che appare in fattura. Alle scatole si aggiungono i costi di magazzino (20–30% annuo sul valore delle scorte), il peso volumetrico in eccesso sulle spedizioni e gli sprechi da lotti minimi non usati. Ecco come calcolarli e azzerarli.",
    en: "The real cost of packaging is almost always higher than what appears on the invoice. On top of the boxes themselves come stock-holding costs (20–30% of inventory value per year), excess volumetric weight on shipments, and waste from unused minimum-order stock. Here is how to calculate and eliminate them.",
  },
  'blog-come-scegliere-stampante-etichette-colori': {
    it: "Per scegliere la stampante giusta per etichette a colori, la prima domanda è il volume mensile: sotto i 5.000 metri lineari conviene un sistema desktop; sopra, serve una soluzione professionale in bobina. La seconda è la tecnologia: inkjet Memjet per alta velocità, laser per qualità costante su substrati sintetici.",
    en: "To choose the right colour label printer, the first question is monthly volume: below 5,000 linear metres a desktop system is the right fit; above that, a professional roll-fed solution is needed. The second question is technology: Memjet inkjet for high speed, laser for consistent quality on synthetic substrates.",
  },
  'blog-etichette-adesive-materiali-finiture': {
    it: "La scelta del materiale per le etichette adesive determina la resistenza, l'aspetto e il costo del prodotto finale. Carta patinata per uso interno, polipropilene BOPP per ambienti umidi e alimentare, poliestere PET per temperature estreme: ogni applicazione ha il suo substrato ottimale.",
    en: "The choice of self-adhesive label material determines the durability, appearance and cost of the finished product. Coated paper for indoor use, BOPP polypropylene for humid and food environments, PET polyester for extreme temperatures: every application has its optimal substrate.",
  },
  'blog-hot-foil-stamping-cose-quando-usarlo': {
    it: "L'hot foil stamping è la tecnica che trasferisce pellicole metalliche — oro, argento, olografiche — su packaging ed etichette tramite calore e pressione, creando effetti premium impossibili da replicare con la stampa a inchiostro. Con il digitale, oggi è disponibile anche per tirature brevi e personalizzazioni.",
    en: "Hot foil stamping is the technique that transfers metallic films — gold, silver, holographic — onto packaging and labels using heat and pressure, creating premium effects that cannot be replicated with ink printing. With digital systems, it is now available even for short runs and personalised items.",
  },
  'blog-packaging-personalizzato-vantaggi-pmi': {
    it: "Il packaging personalizzato non è più un privilegio delle grandi aziende. Con la stampa digitale e i box maker on-demand, una PMI può produrre scatole con il proprio logo a partire da 1 pezzo, senza stampi, senza minimi d'ordine e con tempi di consegna immediati.",
    en: "Custom packaging is no longer the exclusive domain of large companies. With digital printing and on-demand box makers, an SME can produce branded boxes from a single unit — no dies, no minimum orders, and immediate lead times.",
  },
  'blog-stampa-cartone-ondulato-guida-completa': {
    it: "Stampare su cartone ondulato richiede tecnologie diverse da quelle usate per la carta: lo spessore, la rugosità e la flessibilità del materiale impongono soluzioni specifiche. Questa guida confronta flessografia, stampa digitale single-pass e serigrafia per aiutarti a scegliere la tecnologia giusta per il tuo volume e la tua grafica.",
    en: "Printing on corrugated board requires different technologies from those used for paper: the thickness, roughness and flexibility of the material demand specific solutions. This guide compares flexography, single-pass digital printing and screen printing to help you choose the right technology for your volume and artwork.",
  },
  'blog-stampa-digitale-cartone-ondulato-vs-flessografia': {
    it: "La stampa digitale su cartone ondulato non ha costi di avviamento, permette cambio grafica istantaneo ed è conveniente da 1 a migliaia di pezzi. La flessografia è più economica oltre le 5.000–10.000 copie per referenza, ma richiede lastre fisiche a €200–800 per colore. Ecco quando scegliere l'una o l'altra.",
    en: "Digital printing on corrugated board has no setup costs, allows instant artwork changes, and is cost-effective from 1 to thousands of units. Flexography is cheaper beyond 5,000–10,000 copies per SKU, but requires physical plates at €200–800 per colour. Here is when to choose each.",
  },
  'blog-stampa-digitale-vs-offset-piccoli-lotti': {
    it: "Per tirature sotto i 500–1.000 pezzi, la stampa digitale è quasi sempre la scelta giusta: nessun costo di avviamento, tempi di consegna brevi e possibilità di personalizzare ogni copia. Sopra quella soglia, l'offset recupera il vantaggio sui costi grazie all'ammortamento delle lastre.",
    en: "For runs below 500–1,000 copies, digital printing is almost always the right choice: no setup costs, short lead times, and the ability to personalise every copy. Above that threshold, offset regains its cost advantage through plate amortisation.",
  },
  'blog-stampante-etichette-colori-bobina-guida': {
    it: "Una stampante per etichette a colori in bobina stampa direttamente su materiale in rotolo, producendo etichette finite pronte per l'applicazione senza passare da un tipografo esterno. La produzione on-demand elimina i minimi d'ordine e permette di rispondere in poche ore a qualsiasi esigenza.",
    en: "A roll-fed colour label printer prints directly onto roll material, producing finished labels ready for application without going through an external print supplier. On-demand production eliminates minimum orders and allows any requirement to be met within hours.",
  },
  'blog-stampante-inkjet-industriale-come-scegliere': {
    it: "Una stampante inkjet industriale produce a velocità da 50 a 100 metri al minuto, senza contatto con il substrato e senza costi di setup per cambio grafica. La scelta tra single-pass e multi-pass, tra sistemi UV e water-based, determina il profilo di costo e la gamma di applicazioni.",
    en: "An industrial inkjet printer produces at 50 to 100 metres per minute, without substrate contact and with no setup cost for artwork changes. The choice between single-pass and multi-pass, and between UV and water-based systems, defines the cost profile and range of applications.",
  },
  'blog-tendenze-packaging-2026': {
    it: "Nel 2026 il packaging non è più solo un contenitore: è uno strumento di brand, un impegno di sostenibilità e un vantaggio operativo. Le aziende che stanno crescendo stanno adottando produzione on-demand, materiali riciclabili e stampa digitale per rispondere più velocemente al mercato con meno sprechi.",
    en: "In 2026 packaging is no longer just a container: it is a brand tool, a sustainability commitment and an operational advantage. The companies that are growing are adopting on-demand production, recyclable materials and digital printing to respond to the market faster with less waste.",
  },
};

async function run() {
  const ids = Object.keys(intros);

  // Fetch tutti i documenti in una query sola
  const docs = await client.fetch(
    `*[_id in $ids]{ _id, body, body_en }`,
    { ids }
  );

  for (const doc of docs) {
    const intro = intros[doc._id];
    if (!intro) continue;

    const originalKeyIt = doc.body?.[0]?._key || ('intro_' + doc._id.slice(-6));
    const originalKeyEn = doc.body_en?.[0]?._key || ('intro_en_' + doc._id.slice(-6));

    const newFirstIT = introBlock(originalKeyIt, intro.it);
    const newFirstEN = introBlock(originalKeyEn, intro.en);

    const newBody = [newFirstIT, ...(doc.body || []).slice(1)];
    const newBodyEn = [newFirstEN, ...(doc.body_en || doc.body || []).slice(1)];

    await client.patch(doc._id)
      .set({ body: newBody, body_en: newBodyEn })
      .commit();

    console.log(`✓ ${doc._id}`);
  }

  console.log('\nDone! ' + docs.length + ' articles updated.');
}

run().catch(console.error);
