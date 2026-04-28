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
    id: 'blog-packaging-ecommerce-costi-reali',
    title_en: 'E-commerce Packaging: What Does Every Shipment Really Cost?',
    excerpt_en: 'The true cost of e-commerce packaging is rarely on the supplier invoice. Discover the hidden costs — volumetric weight, stock, minimum orders — and how to calculate the real cost per shipment.',
  },
  {
    id: 'blog-box-maker-vs-fornitore-risparmio-reale',
    title_en: 'Box Maker vs External Supplier: Savings Go Beyond the Box Cost',
    excerpt_en: 'When evaluating a box maker, most companies only look at the unit cost per box. But the real savings lie in at least four cost items that are almost never calculated.',
  },
  {
    id: 'post-gfc-stampa-edm650x',
    title_en: 'How GFC Stampa Transformed Packaging Production with the EDM 650X',
    excerpt_en: 'A real-world case study: how GFC Stampa chose the EDM 650X digital press to bring corrugated board printing in-house, cutting lead times and gaining full creative control.',
  },
];

async function run() {
  for (const u of updates) {
    await client.patch(u.id)
      .set({ title_en: u.title_en, excerpt_en: u.excerpt_en })
      .commit();
    console.log('✓', u.id);
  }
  console.log('Done!');
}

run().catch(console.error);
