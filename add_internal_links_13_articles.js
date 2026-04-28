const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false,
});

// Helper: crea un blocco con heading h2
function h2(key, text) {
  return {
    _type: 'block', _key: key, style: 'h2',
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text, marks: [] }],
  };
}

// Helper: crea un paragrafo con uno o più link inline
function paragraphWithLinks(key, parts) {
  // parts = array di { text, href? }
  const children = [];
  const markDefs = [];
  parts.forEach((p, i) => {
    const spanKey = key + 'sp' + i;
    if (p.href) {
      const markKey = key + 'lk' + i;
      markDefs.push({ _type: 'link', _key: markKey, href: p.href });
      children.push({ _type: 'span', _key: spanKey, text: p.text, marks: [markKey] });
    } else {
      children.push({ _type: 'span', _key: spanKey, text: p.text, marks: [] });
    }
  });
  return { _type: 'block', _key: key, style: 'normal', markDefs, children };
}

// ── Mapping articolo → CTA blocks da appendere ────────────────────────────
// Ogni articolo riceve un blocco h2 "Prodotti correlati" + 1-2 paragrafi linkati
const articles = [
  {
    id: 'blog-automatizzare-produzione-scatole',
    blocks: [
      h2('cta_h_aut', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_aut', [
        { text: 'Se stai valutando di automatizzare la produzione di scatole, scopri l\'' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ': box maker automatico all-in-one con cambio formato in 10 secondi e produzione fino a 600 scatole/ora.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_aut_en', 'Related products'),
      paragraphWithLinks('cta_p_aut_en', [
        { text: 'If you are considering automating box production, discover the ' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ': all-in-one automatic box maker with 10-second format change and output of up to 600 boxes/hour.' },
      ]),
    ],
  },
  {
    id: 'blog-box-maker-produzione-automatica-scatole',
    blocks: [
      h2('cta_h_bm', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_bm', [
        { text: 'Il box maker di riferimento per la produzione automatica è l\'' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ': taglio, scanalatura, cordonatura e incollaggio in un unico ciclo automatico.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_bm_en', 'Related products'),
      paragraphWithLinks('cta_p_bm_en', [
        { text: 'The reference box maker for automated production is the ' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ': cutting, slotting, creasing and gluing in a single automatic cycle.' },
      ]),
    ],
  },
  {
    id: 'blog-come-ridurre-costi-packaging',
    blocks: [
      h2('cta_h_crp', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_crp', [
        { text: 'Per eliminare il magazzino scatole e produrre on-demand, scopri l\'' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: '. Per la stampa su cartone ondulato senza setup costs, scopri la ' },
        { text: 'GreenBox Evo', href: '/prodotti/greenbox-evo' },
        { text: '.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_crp_en', 'Related products'),
      paragraphWithLinks('cta_p_crp_en', [
        { text: 'To eliminate box stock and produce on-demand, discover the ' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: '. For corrugated board printing with no setup costs, discover the ' },
        { text: 'GreenBox Evo', href: '/prodotti/greenbox-evo' },
        { text: '.' },
      ]),
    ],
  },
  {
    id: 'blog-come-scegliere-stampante-etichette-colori',
    blocks: [
      h2('cta_h_cse', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_cse1', [
        { text: 'Per produzioni professionali ad alto volume, la ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' è la stampante a colori in bobina con tecnologia Memjet ad alta velocità.' },
      ]),
      paragraphWithLinks('cta_p_cse2', [
        { text: 'Per un sistema desktop versatile per tirature brevi, scopri la ' },
        { text: 'Afinia X350', href: '/prodotti/afinia-x350' },
        { text: '.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_cse_en', 'Related products'),
      paragraphWithLinks('cta_p_cse1_en', [
        { text: 'For high-volume professional production, the ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' is the roll-fed colour label printer with high-speed Memjet technology.' },
      ]),
      paragraphWithLinks('cta_p_cse2_en', [
        { text: 'For a versatile desktop system for short runs, discover the ' },
        { text: 'Afinia X350', href: '/prodotti/afinia-x350' },
        { text: '.' },
      ]),
    ],
  },
  {
    id: 'blog-etichette-adesive-materiali-finiture',
    blocks: [
      h2('cta_h_eam', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_eam', [
        { text: 'Per stampare etichette adesive a colori con qualità professionale direttamente in azienda, scopri la ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ': stampa inkjet Memjet con bianco e laminazione in linea.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_eam_en', 'Related products'),
      paragraphWithLinks('cta_p_eam_en', [
        { text: 'To print professional-quality colour self-adhesive labels in-house, discover the ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ': Memjet inkjet with white ink and inline lamination.' },
      ]),
    ],
  },
  {
    id: 'blog-hot-foil-stamping-cose-quando-usarlo',
    blocks: [
      h2('cta_h_hfs', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_hfs', [
        { text: 'Per la stampa a caldo digitale senza stampi su packaging e etichette, scopri ' },
        { text: 'AurumPress', href: '/prodotti/aurumpress' },
        { text: ': hot foil digitale con effetti oro, argento e olografici a tiratura zero.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_hfs_en', 'Related products'),
      paragraphWithLinks('cta_p_hfs_en', [
        { text: 'For digital hot foil stamping on packaging and labels without dies, discover ' },
        { text: 'AurumPress', href: '/prodotti/aurumpress' },
        { text: ': digital hot foil with gold, silver and holographic effects from zero run length.' },
      ]),
    ],
  },
  {
    id: 'blog-packaging-personalizzato-vantaggi-pmi',
    blocks: [
      h2('cta_h_ppv', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_ppv', [
        { text: 'Per produrre packaging personalizzato in house senza minimi d\'ordine, l\'' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ' permette di realizzare scatole su misura a partire da 1 pezzo.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_ppv_en', 'Related products'),
      paragraphWithLinks('cta_p_ppv_en', [
        { text: 'To produce custom packaging in-house with no minimum order, the ' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ' lets you make bespoke boxes from a single unit.' },
      ]),
    ],
  },
  {
    id: 'blog-stampa-cartone-ondulato-guida-completa',
    blocks: [
      h2('cta_h_sco', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_sco1', [
        { text: 'Per la stampa digitale single-pass su cartone ondulato, scopri l\'' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ': 650mm di larghezza, fino a 100m/min, inchiostri water-based.' },
      ]),
      paragraphWithLinks('cta_p_sco2', [
        { text: 'Per soluzioni compatte ad alto impatto visivo, scopri la ' },
        { text: 'GreenBox Evo', href: '/prodotti/greenbox-evo' },
        { text: '.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_sco_en', 'Related products'),
      paragraphWithLinks('cta_p_sco1_en', [
        { text: 'For single-pass digital printing on corrugated board, discover the ' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ': 650mm width, up to 100m/min, water-based inks.' },
      ]),
      paragraphWithLinks('cta_p_sco2_en', [
        { text: 'For compact high-impact solutions, discover the ' },
        { text: 'GreenBox Evo', href: '/prodotti/greenbox-evo' },
        { text: '.' },
      ]),
    ],
  },
  {
    id: 'blog-stampa-digitale-cartone-ondulato-vs-flessografia',
    blocks: [
      h2('cta_h_sdco', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_sdco', [
        { text: 'Per passare dalla flessografia alla stampa digitale, l\'' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' è la soluzione industriale single-pass per cartone ondulato: setup zero, cambio grafica istantaneo.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_sdco_en', 'Related products'),
      paragraphWithLinks('cta_p_sdco_en', [
        { text: 'To move from flexography to digital printing, the ' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' is the industrial single-pass solution for corrugated board: zero setup, instant artwork change.' },
      ]),
    ],
  },
  {
    id: 'blog-stampa-digitale-vs-offset-piccoli-lotti',
    blocks: [
      h2('cta_h_sdof', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_sdof1', [
        { text: 'Per la stampa digitale di etichette a colori per piccoli e medi lotti, scopri la ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: '.' },
      ]),
      paragraphWithLinks('cta_p_sdof2', [
        { text: 'Per packaging e scatole in cartone, l\'' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' è la soluzione digitale ideale per lotti variabili senza costi di avviamento.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_sdof_en', 'Related products'),
      paragraphWithLinks('cta_p_sdof1_en', [
        { text: 'For digital colour label printing in short to medium runs, discover the ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: '.' },
      ]),
      paragraphWithLinks('cta_p_sdof2_en', [
        { text: 'For cardboard packaging and boxes, the ' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' is the ideal digital solution for variable runs with no setup costs.' },
      ]),
    ],
  },
  {
    id: 'blog-stampante-etichette-colori-bobina-guida',
    blocks: [
      h2('cta_h_secb', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_secb1', [
        { text: 'Per una soluzione professionale ad alta velocità, la ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' stampa fino a 10,2 m/min con bianco dedicato e laminazione in linea.' },
      ]),
      paragraphWithLinks('cta_p_secb2', [
        { text: 'Per tirature brevi e massima flessibilità, la ' },
        { text: 'Afinia LT5c', href: '/prodotti/afinia-lt5c' },
        { text: ' è la stampante inkjet termica per etichette in bobina.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_secb_en', 'Related products'),
      paragraphWithLinks('cta_p_secb1_en', [
        { text: 'For a high-speed professional solution, the ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' prints up to 10.2m/min with dedicated white and inline lamination.' },
      ]),
      paragraphWithLinks('cta_p_secb2_en', [
        { text: 'For short runs and maximum flexibility, the ' },
        { text: 'Afinia LT5c', href: '/prodotti/afinia-lt5c' },
        { text: ' is the thermal inkjet roll-label printer.' },
      ]),
    ],
  },
  {
    id: 'blog-stampante-inkjet-industriale-come-scegliere',
    blocks: [
      h2('cta_h_sii', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_sii1', [
        { text: 'Per la stampa industriale su cartone ondulato, l\'' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' è la soluzione single-pass per produzioni ad alto volume.' },
      ]),
      paragraphWithLinks('cta_p_sii2', [
        { text: 'Per la stampa inkjet su etichette in bobina, scopri la ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' con tecnologia Memjet ad alta velocità.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_sii_en', 'Related products'),
      paragraphWithLinks('cta_p_sii1_en', [
        { text: 'For industrial printing on corrugated board, the ' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' is the single-pass solution for high-volume production.' },
      ]),
      paragraphWithLinks('cta_p_sii2_en', [
        { text: 'For inkjet printing on roll labels, discover the ' },
        { text: 'Afinia L901', href: '/prodotti/afinia-l901' },
        { text: ' with high-speed Memjet technology.' },
      ]),
    ],
  },
  {
    id: 'blog-tendenze-packaging-2026',
    blocks: [
      h2('cta_h_tp26', 'Prodotti correlati'),
      paragraphWithLinks('cta_p_tp26', [
        { text: 'Per stare al passo con le tendenze del packaging 2026, scopri le nostre soluzioni: l\'' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ' per il packaging on-demand e l\'' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' per la stampa digitale su cartone ondulato.' },
      ]),
    ],
    blocks_en: [
      h2('cta_h_tp26_en', 'Related products'),
      paragraphWithLinks('cta_p_tp26_en', [
        { text: 'To keep pace with packaging trends in 2026, discover our solutions: the ' },
        { text: 'Anypack AB2500', href: '/prodotti/ab2500' },
        { text: ' for on-demand packaging and the ' },
        { text: 'EDM 650X', href: '/prodotti/edm-650x' },
        { text: ' for digital printing on corrugated board.' },
      ]),
    ],
  },
];

async function run() {
  for (const article of articles) {
    // Fetch current body + body_en
    const doc = await client.fetch(
      `*[_id == $id][0]{ body, body_en }`,
      { id: article.id }
    );

    const newBody = [...(doc.body || []), ...article.blocks];
    const newBodyEn = [...(doc.body_en || doc.body || []), ...article.blocks_en];

    await client.patch(article.id)
      .set({ body: newBody, body_en: newBodyEn })
      .commit();

    console.log(`✓ ${article.id} (+${article.blocks.length} IT blocks, +${article.blocks_en.length} EN blocks)`);
  }
  console.log('\nDone!');
}

run().catch(console.error);
