const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

const updates = [
  {
    id: 'blog-stampante-etichette-colori-bobina-guida',
    title_en: 'Colour Label Printer on Roll: Buyer\'s Guide',
    excerpt_en: 'How to choose the right roll-fed colour label printer: Memjet, laser, inkjet technologies compared. Speeds, resolutions, running costs and the models worth considering.',
  },
  {
    id: 'blog-box-maker-produzione-automatica-scatole',
    title_en: 'Box Maker: What It Is and How Automatic Box Production Works',
    excerpt_en: 'Discover how an automatic box maker like the Anypack AB2500 reduces packaging costs, eliminates stock and lets you produce the exact box size on demand.',
  },
  {
    id: 'blog-stampante-inkjet-industriale-come-scegliere',
    title_en: 'Industrial Inkjet Printer: How to Choose the Right One',
    excerpt_en: 'A practical guide to choosing an industrial inkjet printer: single-pass vs multi-pass, substrate compatibility, print speed and total cost of ownership.',
  },
  {
    id: 'blog-tendenze-packaging-2026',
    title_en: 'Packaging Trends 2026: What to Expect',
    excerpt_en: 'The key packaging trends for 2026: sustainability, on-demand production, smart packaging and digital printing. What will shape the industry in the coming year.',
  },
  {
    id: 'blog-come-ridurre-costi-packaging',
    title_en: 'How to Reduce Packaging Costs',
    excerpt_en: 'Practical strategies to cut packaging costs: optimise formats, eliminate stock, reduce void fill and take control of production with on-demand solutions.',
  },
  {
    id: 'blog-stampa-cartone-ondulato-guida-completa',
    title_en: 'Corrugated Cardboard Printing: Complete Guide',
    excerpt_en: 'Available technologies, a comparison between digital and flexographic printing, costs and how to choose the right solution for your corrugated packaging production.',
  },
  {
    id: 'blog-hot-foil-stamping-cose-quando-usarlo',
    title_en: 'Hot Foil Stamping: What It Is and When to Use It',
    excerpt_en: 'What is hot foil stamping, how it works and when it\'s the right choice for premium packaging. Digital vs traditional hot foil: key differences explained.',
  },
  {
    id: 'blog-etichette-adesive-materiali-finiture',
    title_en: 'Self-Adhesive Labels: Materials and Finishes',
    excerpt_en: 'A complete guide to materials and finishes for self-adhesive labels: paper, polypropylene, polyester, lamination, varnishes and special effects for any application.',
  },
  {
    id: 'blog-stampa-digitale-vs-offset-piccoli-lotti',
    title_en: 'Digital Printing vs Offset for Short Runs',
    excerpt_en: 'When does digital printing beat offset? A cost and quality comparison for short to medium runs, with guidance on which technology fits your production volumes.',
  },
  {
    id: 'blog-packaging-personalizzato-vantaggi-pmi',
    title_en: 'Custom Packaging: Benefits for SMEs',
    excerpt_en: 'Why custom packaging is a strategic investment for small and medium businesses: brand perception, customer experience and competitive advantages explained.',
  },
  {
    id: 'blog-come-scegliere-stampante-etichette-colori',
    title_en: 'How to Choose a Colour Label Printer',
    excerpt_en: 'A practical guide to technologies, evaluation criteria and the best models for colour label printing. Find the right printer for your production volumes and label types.',
  },
  {
    id: 'blog-stampa-digitale-cartone-ondulato-vs-flessografia',
    title_en: 'Digital Printing on Corrugated Board: Advantages vs Flexography',
    excerpt_en: 'Why more and more companies are switching from flexography to single-pass digital printing for corrugated board: quality, flexibility, cost per run and speed compared.',
  },
];

async function run() {
  for (const u of updates) {
    await client.patch(u.id)
      .set({ title_en: u.title_en, excerpt_en: u.excerpt_en })
      .commit();
    console.log('✓', u.id);
  }
  console.log('\nDone! ' + updates.length + ' posts updated.');
}

run().catch(console.error);
