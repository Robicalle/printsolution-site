const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false,
});

function faq(id, q, a) {
  return { _key: id, question: q, answer: a };
}

const articles = [
  {
    id: 'blog-automatizzare-produzione-scatole',
    faq: [
      faq('aut_1', "Cos'è l'automazione della produzione di scatole?", "L'automazione della produzione di scatole consiste nell'utilizzo di macchine box maker che, partendo da fogli di cartone ondulato, eseguono automaticamente taglio, scanalatura, cordonatura e incollaggio in un unico ciclo, senza intervento manuale."),
      faq('aut_2', "Quanto si risparmia automatizzando la produzione di scatole?", "Automatizzando la produzione si eliminano i costi di magazzino (20–30% annuo sul valore delle scorte), si riduce il peso volumetrico delle spedizioni e si azzerano i lotti minimi d'ordine."),
      faq('aut_3', "Quale macchina serve per automatizzare la produzione di scatole?", "Serve un box maker automatico come l'Anypack AB2500, che produce 500–600 scatole/ora con cambio formato in 10 secondi senza attrezzi."),
    ],
    faq_en: [
      faq('aut_en1', "What is box production automation?", "Box production automation uses box maker machines that automatically cut, slot, crease and glue corrugated board into finished boxes in a single cycle, with no manual intervention."),
      faq('aut_en2', "How much can you save by automating box production?", "Automation eliminates stock-holding costs (20–30% of inventory value per year), reduces volumetric shipping weight, and removes minimum order quantities entirely."),
      faq('aut_en3', "What machine is needed to automate box production?", "An automatic box maker such as the Anypack AB2500, which produces 500–600 boxes/hour with a tool-free format change in 10 seconds."),
    ],
  },
  {
    id: 'blog-box-maker-produzione-automatica-scatole',
    faq: [
      faq('bm_1', "Cos'è un box maker?", "Un box maker è una macchina automatica che trasforma fogli di cartone ondulato in scatole finite, eseguendo in un unico ciclo taglio, scanalatura, cordonatura e incollaggio senza intervento manuale."),
      faq('bm_2', "Come funziona un box maker automatico?", "Il box maker legge le dimensioni inserite dall'operatore, preleva il foglio di cartone, lo taglia al formato esatto, esegue le scanalature, correda i lembi e incolla automaticamente la scatola completata."),
      faq('bm_3', "Quanto costa un box maker?", "Il costo di un box maker automatico parte da circa €65.000–75.000 per modelli come l'Anypack AB2500. Il break-even rispetto all'acquisto esterno si raggiunge tipicamente in 12–24 mesi per volumi superiori alle 3.000 scatole/mese."),
    ],
    faq_en: [
      faq('bm_en1', "What is a box maker?", "A box maker is an automatic machine that transforms corrugated board sheets into finished boxes, performing cutting, slotting, creasing and gluing in a single automated cycle."),
      faq('bm_en2', "How does an automatic box maker work?", "The box maker reads the dimensions entered by the operator, picks the board sheet, cuts it to the exact size, slots and creases the flaps, and automatically glues the completed box."),
      faq('bm_en3', "How much does a box maker cost?", "An automatic box maker starts at around €65,000–75,000 for models like the Anypack AB2500. The break-even vs buying boxes externally is typically 12–24 months for volumes above 3,000 boxes/month."),
    ],
  },
  {
    id: 'blog-come-ridurre-costi-packaging',
    faq: [
      faq('crp_1', "Come si riducono i costi di packaging?", "I costi di packaging si riducono ottimizzando i formati (scatole su misura), eliminando il magazzino con la produzione on-demand e abbattendo il peso volumetrico delle spedizioni con scatole esatte per ogni prodotto."),
      faq('crp_2', "Quanto incide il peso volumetrico sui costi di spedizione?", "Una scatola sovradimensionata 40×30×20 cm vale 4,8 kg volumetrici anche per un prodotto da 1,5 kg reali. Con scatole su misura si può scendere a 2,5 kg, risparmiando oltre €25.000/anno su 100 spedizioni/giorno."),
      faq('crp_3', "Qual è il costo di mantenimento delle scorte di imballaggi?", "Il carrying cost delle scorte si aggira tra il 20% e il 30% annuo del valore delle giacenze, includendo spazio fisico, capitale immobilizzato e rischio di obsolescenza."),
    ],
    faq_en: [
      faq('crp_en1', "How can packaging costs be reduced?", "Packaging costs are reduced by optimising formats (custom-fit boxes), eliminating stock through on-demand production, and cutting volumetric shipping weight with exact-size boxes for every product."),
      faq('crp_en2', "How much does volumetric weight affect shipping costs?", "An oversized 40×30×20 cm box counts as 4.8 kg volumetric even for a 1.5 kg product. Custom-fit boxes can bring this down to 2.5 kg — a potential saving of over €25,000/year at 100 shipments/day."),
      faq('crp_en3', "What is the carrying cost of packaging stock?", "Stock carrying cost runs between 20% and 30% of inventory value per year, covering physical space, tied-up capital and the risk of obsolescence."),
    ],
  },
  {
    id: 'blog-come-scegliere-stampante-etichette-colori',
    faq: [
      faq('cse_1', "Come si sceglie una stampante per etichette a colori?", "I criteri principali sono: volume mensile (sotto 5.000 m → desktop; sopra → professionale in bobina), tecnologia (inkjet Memjet per alta velocità, laser per qualità costante), necessità del bianco, e tipo di substrato."),
      faq('cse_2', "Qual è la differenza tra stampante etichette inkjet e laser?", "Le stampanti inkjet per etichette hanno bassi costi di avviamento e sono ideali per tirature variabili. Le laser garantiscono qualità costante su substrati sintetici ma con costi di consumabili mediamente più alti."),
      faq('cse_3', "Quanto costa stampare etichette a colori in house?", "Con stampanti come Afinia L901 il costo di stampa scende a pochi centesimi per etichetta su alti volumi, rispetto ai €0,15–0,40 di un fornitore esterno per tirature brevi."),
    ],
    faq_en: [
      faq('cse_en1', "How do you choose a colour label printer?", "The main criteria are: monthly volume (under 5,000 m → desktop; above → professional roll-fed), technology (Memjet inkjet for high speed, laser for consistent quality), white ink requirement, and substrate type."),
      faq('cse_en2', "What is the difference between inkjet and laser label printers?", "Inkjet label printers have low setup costs and suit variable runs. Laser printers deliver consistent quality on synthetic substrates but typically have higher consumable costs."),
      faq('cse_en3', "How much does in-house colour label printing cost?", "With printers like the Afinia L901, the print cost drops to a few cents per label at high volumes, compared with €0.15–0.40 per label from an external supplier for short runs."),
    ],
  },
  {
    id: 'blog-etichette-adesive-materiali-finiture',
    faq: [
      faq('eam_1', "Quali materiali si usano per le etichette adesive?", "I materiali più comuni sono: carta patinata (uso interno, economica), polipropilene BOPP (impermeabile, per alimenti e bevande), poliestere PET (resistente a calore e solventi) e polietilene PE (flessibile per superfici curve)."),
      faq('eam_2', "Che differenza c'è tra etichette lucide e opache?", "Le etichette lucide esaltano colori e vivacità delle immagini, ideali per prodotti premium. Le opache danno un effetto elegante, si prestano meglio alla scrittura a penna e sono spesso scelte per farmaceutica e cosmesi."),
      faq('eam_3', "Cos'è la laminazione delle etichette?", "La laminazione è un film protettivo sulla stampa che protegge l'etichetta da graffi, umidità e agenti chimici. Può essere lucida, opaca o soft-touch."),
    ],
    faq_en: [
      faq('eam_en1', "What materials are used for self-adhesive labels?", "The most common materials are: coated paper (economical, indoor use), BOPP polypropylene (waterproof, for food and beverages), PET polyester (heat and solvent resistant) and PE polyethylene (flexible for curved surfaces)."),
      faq('eam_en2', "What is the difference between gloss and matte labels?", "Gloss labels enhance colour vibrancy and image detail, ideal for premium products. Matte labels give an elegant look, are easier to write on, and are often chosen for pharmaceutical and cosmetic applications."),
      faq('eam_en3', "What is label lamination?", "Lamination is a protective film applied over the print that shields the label from scratches, moisture and chemicals. It can be gloss, matte or soft-touch."),
    ],
  },
  {
    id: 'blog-hot-foil-stamping-cose-quando-usarlo',
    faq: [
      faq('hfs_1', "Cos'è l'hot foil stamping?", "L'hot foil stamping è una tecnica di stampa a caldo che trasferisce una pellicola metallizzata (oro, argento, olografica) su un substrato tramite pressione e calore, creando effetti lucidi e premium su packaging ed etichette."),
      faq('hfs_2', "Quando conviene usare l'hot foil stamping?", "Conviene per packaging premium, etichette di vino e spirit, cosmetici e prodotti di lusso dove l'effetto metallico aumenta sensibilmente il valore percepito del prodotto."),
      faq('hfs_3', "Qual è la differenza tra hot foil tradizionale e digitale?", "L'hot foil tradizionale richiede un cliché fisso (costo €100–500) con minimi d'ordine. L'hot foil digitale come AurumPress non richiede stampi: ogni tiratura, anche di un solo pezzo, ha lo stesso costo al pezzo."),
    ],
    faq_en: [
      faq('hfs_en1', "What is hot foil stamping?", "Hot foil stamping is a heat-transfer printing technique that applies a metallic film (gold, silver, holographic) to a substrate using pressure and heat, creating shiny premium effects on packaging and labels."),
      faq('hfs_en2', "When should hot foil stamping be used?", "It is ideal for premium packaging, wine and spirits labels, cosmetics and luxury products where a metallic effect significantly increases perceived value."),
      faq('hfs_en3', "What is the difference between traditional and digital hot foil?", "Traditional hot foil requires a physical die (€100–500) and minimum order quantities. Digital hot foil such as AurumPress needs no dies: even a single-copy run has the same unit cost."),
    ],
  },
  {
    id: 'blog-packaging-personalizzato-vantaggi-pmi',
    faq: [
      faq('ppv_1', "Quali sono i vantaggi del packaging personalizzato per le PMI?", "Il packaging personalizzato aumenta il riconoscimento del brand, migliora l'esperienza di unboxing, può ridurre i costi di spedizione con scatole ottimizzate e differenzia il prodotto dalla concorrenza."),
      faq('ppv_2', "Quanto costa il packaging personalizzato per piccole aziende?", "Con un box maker interno il costo scende al costo del cartone grezzo (€0,15–0,25 a scatola), senza minimi. Con fornitori esterni, le scatole stampate partono da €0,75–2,50 al pezzo con minimi da 200–500 pezzi."),
      faq('ppv_3', "È possibile personalizzare il packaging con volumi bassi?", "Sì. Con soluzioni digitali e box maker on-demand è possibile personalizzare il packaging a partire da 1 pezzo, senza stampi o setup, ideale per PMI con prodotti variabili o stagionali."),
    ],
    faq_en: [
      faq('ppv_en1', "What are the advantages of custom packaging for SMEs?", "Custom packaging increases brand recognition, improves the unboxing experience, can reduce shipping costs with optimised box sizes, and differentiates the product from competitors."),
      faq('ppv_en2', "How much does custom packaging cost for small businesses?", "With an in-house box maker the cost drops to the raw board price (€0.15–0.25 per box), with no minimums. External suppliers charge €0.75–2.50 per printed box with minimums of 200–500 units."),
      faq('ppv_en3', "Is it possible to customise packaging at low volumes?", "Yes. Digital printing and on-demand box makers allow packaging personalisation from a single unit, with no dies or setup — ideal for SMEs with variable or seasonal product ranges."),
    ],
  },
  {
    id: 'blog-stampa-cartone-ondulato-guida-completa',
    faq: [
      faq('sco_1', "Come si stampa su cartone ondulato?", "Il cartone ondulato si stampa principalmente con tre tecnologie: flessografia (alta velocità, grandi tirature), stampa digitale single-pass (flessibilità, zero setup, tirature variabili) e serigrafia (effetti speciali)."),
      faq('sco_2', "Qual è la migliore tecnologia per stampare su cartone ondulato?", "La stampa digitale single-pass è la scelta migliore per flessibilità, cambio grafica rapido e bassi costi per tirature variabili. La flessografia resta più economica per grandi volumi con grafica fissa."),
      faq('sco_3', "Si può stampare direttamente sul cartone ondulato senza primer?", "Sì. Con stampanti digitali single-pass come l'EDM 650X è possibile stampare direttamente su cartone ondulato fino a 12 mm di spessore con inchiostri water-based, senza pre-trattamento."),
    ],
    faq_en: [
      faq('sco_en1', "How is corrugated cardboard printed?", "Corrugated board is printed mainly with three technologies: flexography (high speed, large runs), single-pass digital printing (flexibility, zero setup, variable runs), and screen printing (special effects)."),
      faq('sco_en2', "What is the best technology for printing on corrugated cardboard?", "Single-pass digital printing is the best choice for flexibility, instant artwork changes and low costs on variable runs. Flexography remains more economical for large volumes with fixed artwork."),
      faq('sco_en3', "Can corrugated cardboard be printed directly without primer?", "Yes. Single-pass digital printers like the EDM 650X print directly on corrugated board up to 12 mm thick using water-based inks, with no pre-treatment required."),
    ],
  },
  {
    id: 'blog-stampa-digitale-cartone-ondulato-vs-flessografia',
    faq: [
      faq('sdco_1', "Qual è la differenza tra stampa digitale e flessografia su cartone ondulato?", "La flessografia richiede lastre fisiche (€200–800 per colore) ed è ottimale per grandi tirature con grafica fissa. La stampa digitale non ha costi di setup, permette cambio grafica istantaneo ed è conveniente da 1 a migliaia di pezzi."),
      faq('sdco_2', "Da quante copie conviene la stampa digitale rispetto alla flessografia?", "La stampa digitale è più conveniente fino a circa 5.000–10.000 pezzi per referenza. Oltre questa soglia, il costo ammortizzato delle lastre flessografiche rende la flessografia competitiva."),
      faq('sdco_3', "La stampa digitale su cartone ondulato ha la stessa qualità della flessografia?", "Le moderne stampanti single-pass come l'EDM 650X raggiungono 600 dpi, con qualità superiore alla flessografia standard su dettagli fini e sfumature."),
    ],
    faq_en: [
      faq('sdco_en1', "What is the difference between digital printing and flexography on corrugated board?", "Flexography requires physical plates (€200–800 per colour) and suits large runs with fixed artwork. Digital printing has no setup costs, allows instant artwork changes, and is cost-effective from 1 to thousands of units."),
      faq('sdco_en2', "From what volume does digital printing become more expensive than flexography?", "Digital printing is more cost-effective up to around 5,000–10,000 units per SKU. Beyond that threshold, the amortised plate cost makes flexography competitive."),
      faq('sdco_en3', "Does digital printing on corrugated board match flexography quality?", "Modern single-pass printers like the EDM 650X achieve 600 dpi — superior to standard flexography for fine details and gradients."),
    ],
  },
  {
    id: 'blog-stampa-digitale-vs-offset-piccoli-lotti',
    faq: [
      faq('sdof_1', "Quando conviene la stampa digitale rispetto all'offset?", "La stampa digitale conviene per tirature sotto i 500–1.000 pezzi, per stampe variabili, per consegne rapide e per eliminare i costi di avviamento (lastre, setup)."),
      faq('sdof_2', "Qual è il break-even tra stampa digitale e offset?", "Il break-even si trova generalmente tra 500 e 2.000 copie, variando per prodotto. Sotto quella soglia il digitale è più economico; sopra, l'offset ammortizza meglio il costo delle lastre."),
      faq('sdof_3', "La stampa digitale ha la stessa qualità dell'offset?", "Le moderne stampanti digitali raggiungono qualità paragonabile all'offset per la maggior parte delle applicazioni. L'offset mantiene un vantaggio su pantoni speciali e vernici a effetto."),
    ],
    faq_en: [
      faq('sdof_en1', "When does digital printing beat offset?", "Digital printing wins for runs under 500–1,000 copies, for variable-data work, for fast turnaround, and whenever you need to eliminate plate and setup costs."),
      faq('sdof_en2', "What is the break-even between digital and offset printing?", "The break-even typically falls between 500 and 2,000 copies depending on the job. Below that threshold digital is cheaper; above it, offset amortises plate costs more effectively."),
      faq('sdof_en3', "Does digital printing match offset quality?", "Modern digital presses match offset quality for most applications. Offset retains an advantage for special Pantone colours and effect varnishes."),
    ],
  },
  {
    id: 'blog-stampante-etichette-colori-bobina-guida',
    faq: [
      faq('secb_1', "Cos'è una stampante per etichette a colori in bobina?", "Una stampante per etichette in bobina stampa direttamente su materiale in rotolo (carta, PP, PET), producendo etichette finite riavvolte pronte per l'applicazione, in produzione on-demand senza minimi d'ordine."),
      faq('secb_2', "Qual è la velocità di una stampante per etichette in bobina?", "Le stampanti professionali raggiungono 8–10 m/min (Afinia X350, Afinia L901). I sistemi Memjet industriali superano i 20 m/min."),
      faq('secb_3', "Quanto costano i consumabili di una stampante etichette inkjet a colori?", "Il costo di stampa inkjet a colori varia da €0,02 a €0,08 per etichetta formato A6 su alti volumi, significativamente inferiore ai prezzi di un fornitore esterno."),
    ],
    faq_en: [
      faq('secb_en1', "What is a roll-fed colour label printer?", "A roll-fed label printer prints directly onto roll material (paper, PP, PET), producing finished labels rewound ready for application, with on-demand production and no minimum order quantities."),
      faq('secb_en2', "What speed does a roll-fed label printer reach?", "Professional printers reach 8–10 m/min (Afinia X350, Afinia L901). Industrial Memjet systems exceed 20 m/min."),
      faq('secb_en3', "What do consumables cost for a colour inkjet label printer?", "Inkjet colour printing costs range from €0.02 to €0.08 per A6-format label at high volumes — significantly lower than external supplier prices."),
    ],
  },
  {
    id: 'blog-stampante-inkjet-industriale-come-scegliere',
    faq: [
      faq('sii_1', "Cos'è una stampante inkjet industriale?", "Una stampante inkjet industriale è un sistema di stampa ad alta velocità progettato per la produzione continua su cartone ondulato, etichette e imballaggi, con produzioni da 50 a 100 metri al minuto."),
      faq('sii_2', "Qual è la differenza tra stampante inkjet single-pass e multi-pass?", "Nelle single-pass le testine sono fisse e il substrato scorre sotto una volta sola: velocità fino a 100 m/min. Nelle multi-pass il substrato passa più volte: velocità inferiori ma risoluzione più alta."),
      faq('sii_3', "Quali inchiostri usa una stampante inkjet industriale per cartone?", "Le stampanti inkjet industriali per cartone usano inchiostri water-based (base acqua), compatibili con il riciclo del cartone e spesso certificati per imballaggi alimentari indiretti."),
    ],
    faq_en: [
      faq('sii_en1', "What is an industrial inkjet printer?", "An industrial inkjet printer is a high-speed printing system designed for continuous production on corrugated board, labels and packaging, with output rates of 50 to 100 metres per minute."),
      faq('sii_en2', "What is the difference between single-pass and multi-pass inkjet printers?", "In single-pass printers the heads are fixed and the substrate passes through once — speeds up to 100 m/min. In multi-pass systems the substrate makes several passes — lower speed but higher resolution."),
      faq('sii_en3', "What inks does an industrial inkjet printer use for corrugated board?", "Industrial inkjet printers for corrugated board use water-based inks, compatible with cardboard recycling and often certified for indirect food packaging contact."),
    ],
  },
  {
    id: 'blog-tendenze-packaging-2026',
    faq: [
      faq('tp26_1', "Quali sono le principali tendenze del packaging nel 2026?", "Le principali tendenze sono: sostenibilità e materiali riciclabili, packaging on-demand per ridurre sprechi, personalizzazione digitale per e-commerce, smart packaging con QR/NFC, e stampa con inchiostri water-based a basso impatto ambientale."),
      faq('tp26_2', "Il packaging sostenibile costa di più?", "Non necessariamente. La produzione on-demand con box maker elimina gli scarti di magazzino, riduce il peso volumetrico e può abbattere i costi totali anche usando cartone riciclato FSC."),
      faq('tp26_3', "Come influisce la stampa digitale sulla sostenibilità del packaging?", "La stampa digitale riduce l'impatto ambientale eliminando i rifiuti da setup, permettendo tirature esatte senza eccedenze, e usando inchiostri water-based privi di solventi."),
    ],
    faq_en: [
      faq('tp26_en1', "What are the main packaging trends for 2026?", "The main trends are: sustainability and recyclable materials, on-demand packaging to cut waste, digital personalisation for e-commerce, smart packaging with QR/NFC, and low-impact water-based ink printing."),
      faq('tp26_en2', "Does sustainable packaging cost more?", "Not necessarily. On-demand production with a box maker eliminates stock waste, reduces volumetric weight and can cut total costs even when using FSC-certified recycled board."),
      faq('tp26_en3', "How does digital printing affect packaging sustainability?", "Digital printing reduces environmental impact by eliminating setup waste, enabling exact-quantity runs with no surplus, and using solvent-free water-based inks."),
    ],
  },
];

async function run() {
  for (const a of articles) {
    await client.patch(a.id)
      .set({ faq: a.faq, faq_en: a.faq_en })
      .commit();
    console.log(`✓ ${a.id} (${a.faq.length} FAQ IT + ${a.faq_en.length} FAQ EN)`);
  }
  console.log('\nDone!');
}

run().catch(console.error);
