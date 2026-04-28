const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'dnhjoqwl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false,
});

function b(key, style, text) {
  return {
    _type: 'block', _key: key, style,
    markDefs: [],
    children: [{ _type: 'span', _key: key + 's', text, marks: [] }],
  };
}

function bLink(key, before, linkText, href, after) {
  const mk = key + 'lk';
  const parts = [];
  if (before) parts.push({ _type: 'span', _key: key + 'a', text: before, marks: [] });
  parts.push({ _type: 'span', _key: key + 'b', text: linkText, marks: [mk] });
  if (after) parts.push({ _type: 'span', _key: key + 'c', text: after, marks: [] });
  return {
    _type: 'block', _key: key, style: 'normal',
    markDefs: [{ _type: 'link', _key: mk, href }],
    children: parts,
  };
}

// ── Article 1 EN: Box Maker vs External Supplier ──────────────────────────
const article1En = [
  b('p1', 'normal', 'When a company evaluates buying a box maker, the first question is almost always the same: "Is it cheaper to produce boxes in-house or buy them ready-made?" It is a fair question, but framed this way it leads to an incomplete analysis. The real saving from a box maker lies not only in the cost per box — it lies in at least four cost items that most companies never calculate.'),

  b('h1', 'h2', '1. The cost per box: the direct comparison'),
  b('p2', 'normal', 'Let\'s start with the simplest numbers. A standard box purchased from an Italian supplier costs between €0.35 and €0.48 per unit at average volumes. The cost of raw corrugated board fed into a box maker is comparable — the direct saving per unit is not enormous, and in some cases is almost zero.'),
  b('p3', 'normal', 'But that is exactly the point: anyone who stops at this comparison is only looking at the tip of the iceberg. The true cost of traditional packaging is far higher than €0.40 a box.'),

  b('h2', 'h2', '2. Stock: the invisible cost nobody calculates'),
  b('p4', 'normal', 'Anyone who buys boxes from an external supplier is forced to place minimum orders — often 500, 1,000 or more units per format. Those boxes have to be stored somewhere, and storage has a cost that in logistics is called carrying cost.'),
  b('p5', 'normal', 'According to standard industry benchmarks, stock-holding cost runs between 20% and 30% of inventory value per year. This covers: warehouse rent or depreciation, tied-up capital cost, risk of obsolescence or damage, and inventory management overhead.'),
  b('p6', 'normal', 'Practical example: a company holding €5,000 worth of box stock is spending between €1,000 and €1,500 per year just to keep it there — before using a single box. With a box maker, that figure drops to zero: you produce only what you need, when you need it.'),

  b('h3', 'h2', '3. Volumetric weight: where the real shipping savings hide'),
  b('p7', 'normal', 'Carriers calculate shipping costs based on volumetric weight, not actual weight. The formula is: (length × width × height) / 5,000. A slightly oversized box can push you into a higher pricing band.'),
  b('p8', 'normal', 'Anyone using standard supplier boxes is forced to choose the nearest available format, often accepting 3–5 cm of empty space on each side. A box maker user produces the exact box for every product. The result? Less void fill, smaller boxes, and shipments that stay in the lower pricing band.'),
  b('p9', 'normal', 'At meaningful volumes — even just 100 shipments a day — the difference of one pricing band can be worth tens of thousands of euros per year.'),

  b('h4', 'h2', '4. Zero waste: no minimum order, no discarded boxes'),
  b('p10', 'normal', 'How often has a company ordered 1,000 boxes of a certain format, changed the product or dimensions, and found itself with 400 unusable boxes? With traditional packaging this is a real and frequent risk.'),
  bLink('p11', 'A box maker like the Anypack AB2500 eliminates this problem entirely. There is no minimum batch: you produce 1, 10 or 1,000 boxes with the same setup cost. Format change takes 1–3 seconds.', 'Anypack AB2500', '/prodotti/ab2500', ''),

  b('h5', 'h2', '5. Responsiveness: the advantage that never appears in spreadsheets'),
  b('p12', 'normal', 'An external supplier has lead times of 3–10 working days. A box maker produces in real time. For an e-commerce business with seasonal peaks, a company with frequent product launches, or anyone working to order, this difference is worth far more than any unit-cost saving.'),
  b('p13', 'normal', 'No longer having to plan packaging orders weeks in advance means fewer forecasting errors, less tied-up capital, and greater operational flexibility.'),

  b('h6', 'h2', 'The full calculation: when do you break even?'),
  bLink('p14', 'Adding up all the items — raw board cost, elimination of carrying cost, shipping savings, zero waste — the break-even of a box maker like the Anypack AB2500 is typically reached in 12 to 24 months for companies with medium-to-high volumes.', 'Anypack AB2500', '/prodotti/ab2500', ''),
  b('p15', 'normal', 'But the most important question is not "when do I break even?" — it is "how much am I spending today on costs I am not calculating?" For many companies, the answer is surprising.'),

  b('h7', 'h2', 'Who really benefits from a box maker?'),
  bLink('p16', 'A box maker like the Anypack AB2500 makes sense when: you manage more than 5 different box formats, monthly volumes exceed 2,000–3,000 boxes, you work with products of variable dimensions, you have unpredictable seasonal peaks, or you want to eliminate dependence on external suppliers.', 'Anypack AB2500', '/prodotti/ab2500', ''),
  b('p17', 'normal', 'If you want to understand whether a box maker is the right choice for your business, contact us for a free analysis of your current packaging costs.'),

  // CTA (internal links block added earlier — in EN)
  b('cta_h_bm2_en', 'h2', 'Related products'),
  bLink('cta_p_bm2_en', 'The reference box maker for automated box production is the ', 'Anypack AB2500', '/prodotti/ab2500', ': cutting, slotting, creasing and gluing in a single automatic cycle.'),
];

// ── Article 2 EN: E-commerce Packaging Real Costs ─────────────────────────
const article2En = [
  b('p1', 'normal', 'For an e-commerce business, packaging is often the second largest operational cost after the product itself. Yet most companies manage it passively: two or three standard formats are chosen, 1,000 units are ordered at a time, and whatever is available gets used. The result? Far higher costs than necessary — not on the supplier invoice, but in the total cost of every shipment.'),

  b('h1', 'h2', 'The true cost of a shipment: not what you think'),
  b('p2', 'normal', 'Take a concrete example. An e-commerce company sells products of varying dimensions and uses a standard 40×30×20 cm box for everything, purchased at €0.42 per unit. Now calculate the volumetric weight using the standard carrier formula (L×W×H/5,000):'),
  b('p3', 'normal', '40 × 30 × 20 / 5,000 = 4.8 volumetric kg. If the product weighs 1.5 kg actual, the carrier bills 4.8 kg — more than three times the real weight. If a custom box of 32×22×18 cm were used instead, the volumetric weight would drop to 2.5 kg. Over 100 shipments a day with a carrier charging €0.30 per extra kg, the daily saving is around €69. Annual: over €25,000.'),
  b('p4', 'normal', 'The "economical" €0.42 box was costing tens of thousands of euros in unnecessary volumetric weight.'),

  b('h2', 'h2', 'The three e-commerce packaging costs that never appear on invoices'),
  b('p5', 'normal', 'Beyond volumetric weight, there are two further hidden costs that erode the margin:'),
  b('p6', 'normal', 'The first is void fill material. An oversized box requires bubble wrap, kraft paper, or polystyrene chips to protect the product. These materials cost money — and add weight. Every gram of void fill increases the volumetric weight, creating a double cost: the material itself plus the extra shipping charge.'),
  b('p7', 'normal', 'The second is minimum-order cost. Anyone buying boxes from an external supplier typically orders in batches of 500 or 1,000 units per format. Stock-holding cost runs between 20% and 30% of inventory value per year.'),

  b('h3', 'h2', 'In-house box maker vs custom purchase: when does each make sense?'),
  b('p8', 'normal', 'There are currently three approaches to on-demand packaging for e-commerce, each with different break-even thresholds:'),
  b('p9', 'normal', 'The first approach is buying custom printed boxes from a supplier, with logo or brand printing. Costs range from €0.75 to €2.50 per unit for printed boxes, with minimum orders often from 200 to 500 units per format. Suitable for companies with a single format and low-to-medium volumes (up to 500–1,000 shipments per month).'),
  b('p10', 'normal', 'The second approach is an external box-on-demand service: some suppliers produce custom-size boxes for each order, charging above-average per-unit costs (€0.80–1.50) but with no minimum. Suitable for testing the model without upfront investment.'),
  bLink('p11', 'The third approach is in-house production with a box maker like the Anypack AB2500. The initial investment is significant (€65,000–75,000), but the cost per box drops dramatically at certain volumes, and supplier dependence, minimum orders, stock and lead times are entirely eliminated. Suitable for companies exceeding 3,000 shipments per month with variable formats.', 'Anypack AB2500', '/prodotti/ab2500', ''),

  b('h4', 'h2', 'The break-even calculation for different volumes'),
  b('p12', 'normal', 'Assuming a total saving (box + shipping + stock) of €0.35 per shipment by switching to a box maker, break-even is reached in:'),
  b('p13', 'normal', '3,000 shipments/month → monthly saving €1,050 → break-even in approx. 62 months. 8,000 shipments/month → monthly saving €2,800 → break-even in approx. 23 months. 15,000 shipments/month → monthly saving €5,250 → break-even in approx. 12 months.'),
  b('p14', 'normal', 'These figures are conservative: they do not include savings on staff time spent managing packaging orders, nor the value of operational flexibility.'),

  b('h5', 'h2', 'The right question to ask'),
  b('p15', 'normal', 'It is not "how much does a box cost?" but "how much does every shipment cost me, all-in?" Board, void fill, volumetric weight, stock, minimum orders, management time. Only by adding all these items do you get the real number.'),
  b('p16', 'normal', 'If you want to understand which solution best fits your volume and formats, contact us for a free analysis of your current packaging setup.'),

  // CTA (internal links)
  b('cta_h_eco_en', 'h2', 'Related products'),
  bLink('cta_p_eco_en', 'To eliminate box stock and produce on-demand, discover the ', 'Anypack AB2500', '/prodotti/ab2500', '. For corrugated board printing with no setup costs, discover the '),
];

async function run() {
  await client.patch('blog-box-maker-vs-fornitore-risparmio-reale')
    .set({ body_en: article1En })
    .commit();
  console.log('✓ blog-box-maker-vs-fornitore-risparmio-reale (' + article1En.length + ' EN blocks)');

  await client.patch('blog-packaging-ecommerce-costi-reali')
    .set({ body_en: article2En })
    .commit();
  console.log('✓ blog-packaging-ecommerce-costi-reali (' + article2En.length + ' EN blocks)');

  console.log('\nDone!');
}

run().catch(console.error);
