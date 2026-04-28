const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'dnhjoqwl', dataset: 'production', apiVersion: '2024-01-01',
  token: 'sks3YrmS3dSv4Eg0CPrCec0c0xy8Fh3tjNcJ8uqmGjx6CqiDTTrMYZrv7oZbHsiVuMdSrTJgaSDWaT0lkWzT6w5lyapsIKyxdzfdjvMut07HkWyjKLUoqz1b6e5nSRL31BFgABAMPNLZnl5REeBpKuOnt7OsK05tOB5KAG6hUCUAY1NcweSK',
  useCdn: false
});

const s = (key, text, marks = []) => ({ _type: 'span', _key: key, text, marks });
const b = (key, style, children, extra = {}) => ({ _type: 'block', _key: key, style, markDefs: [], children, ...extra });
const li = (key, children) => b(key, 'normal', children, { listItem: 'bullet', level: 1 });

// ─── 1. PACKAGING PERSONALIZZATO VANTAGGI PMI ────────────────────────────────
const packagingPmiEn = [
  b('b6','normal',[s('s1','For '),s('s2','small and medium-sized enterprises','strong'),s('s3',' in Italy, packaging is no longer just a container: it is the first point of contact with the customer. A '),s('s4','personalised packaging','strong'),s('s5',' communicates quality, attention to detail and brand identity. Until a few years ago, customising packaging required prohibitive investment. Today, digital technologies have democratised access.')]),
  b('b8','h2',[s('s7','Why Packaging Is Strategic')]),
  b('b10','normal',[s('s9','72% of consumers say that packaging design influences their purchasing decision. For SMEs competing with larger brands, well-crafted packaging can make the difference between being noticed or ignored. The unboxing experience, amplified by social media, turns every shipment into a marketing opportunity.')]),
  b('b12','h2',[s('s11','Concrete Benefits for SMEs')]),
  b('b14','h3',[s('s13','Strengthened Brand Identity')]),
  b('b16','normal',[s('s15','Packaging with a logo, corporate colours and custom graphics transforms an anonymous box into a brand ambassador. The customer recognises the product before even opening it, building familiarity and trust.')]),
  b('b18','h3',[s('s17','Customer Loyalty')]),
  b('b20','normal',[s('s19','The unboxing experience generates emotion. Thoughtful packaging communicates attention to detail and increases the perception of value. Satisfied customers return and, increasingly, share the experience on social media, generating organic publicity.')]),
  b('b22','h3',[s('s21','Waste Reduction')]),
  b('b24','normal',[s('s23','Producing custom-fit boxes means eliminating unnecessary filling material. A box of the right size protects the product better, reduces shipping volume and lowers logistics costs. With a box maker such as the Anypack AB2500, an SME can create boxes of any size on demand, with no minimum orders.')]),
  b('b26','h3',[s('s25','Regulatory Compliance')]),
  b('b28','normal',[s('s27','Many sectors require mandatory information on packaging. Printing in-house allows you to update texts, barcodes and regulatory information in real time, without having to dispose of stocks of obsolete packaging.')]),
  b('b30','h2',[s('s29','Technologies Accessible to SMEs')]),
  b('b32','normal',[s('s31','Customising packaging today no longer requires million-euro investments. The main accessible solutions include:')]),
  li('b35',[s('s33','Automatic box makers','strong'),s('s34','— machines like the AB2500 produce custom boxes from flat sheets, with no dies')]),
  li('b38',[s('s36','Digital printers for cardboard','strong'),s('s37','— the EDM-650X prints directly onto corrugated cardboard with photographic quality')]),
  li('b41',[s('s39','Label printers','strong'),s('s40','— the Afinia range allows you to create custom roll labels to complete the packaging')]),
  li('b44',[s('s42','Hot foil stamping','strong'),s('s43','— systems like AurumPress add metallic finishes and laminates for a premium effect')]),
  b('b46','h2',[s('s45','The ROI of Personalised Packaging')]),
  b('b48','normal',[s('s47','Investment in personalised packaging pays off quickly. Measurable benefits include:')]),
  li('b50',[s('s49','Reduced shipping costs thanks to custom-fit boxes (up to 20–30%)')]),
  li('b52',[s('s51','Elimination of pre-printed packaging stock')]),
  li('b54',[s('s53','Increased repurchase rate thanks to a better customer experience')]),
  li('b56',[s('s55','Fewer returns due to inadequate packaging damage')]),
  li('b58',[s('s57','Organic marketing through social unboxing shares')]),
  b('b60','h2',[s('s59','How to Get Started')]),
  b('b62','normal',[s('s61','The path to personalised packaging can be gradual. You can start with custom labels — a contained investment with immediate impact — and then move to custom-fit boxes when volumes justify it. The important thing is to start.')]),
  b('b64','h2',[s('s63','Conclusion')]),
  b('b66','normal',[s('s65','Personalised packaging is no longer a luxury reserved for large companies. Digital technologies have made customisation accessible even for SMEs, with proportionate investments and rapid payback times. In an increasingly competitive market, packaging is a differentiating element that no SME can afford to neglect.')]),
];

// ─── 2. STAMPA CARTONE ONDULATO GUIDA COMPLETA ──────────────────────────────
const stampaCartoneEn = [
  b('b4','normal',[s('s1',''),s('s2','Printing on corrugated cardboard','strong'),s('s3',' is a fundamental element of modern packaging. Whether for e-commerce boxes, point-of-sale displays or industrial packaging, print quality directly affects brand perception. But what technologies are available and how do you choose the right one?')]),
  b('b6','h2',[s('s5','Printing Technologies for Corrugated Cardboard')]),
  b('b8','h3',[s('s7','Flexography')]),
  b('b10','normal',[s('s9','Flexography is the traditional method for printing on corrugated cardboard. It uses flexible photopolymer plates mounted on rotating cylinders. It is efficient for large runs with repetitive graphics, but has significant limitations for small batches: high plate costs, long make-ready times and difficulty reproducing halftones and gradients.')]),
  b('b12','h3',[s('s11','Single-Pass Digital Inkjet')]),
  b('b14','normal',[s('s13','The most innovative technology for corrugated cardboard. A bar of inkjet printheads covers the full width of the sheet, printing in a single pass at high speed. No plates, instant setup, photographic quality. Systems such as the EDM-650X achieve resolutions of 600×600 dpi at speeds of up to 50 m/min.')]),
  b('b16','h3',[s('s15','Multi-Pass Digital Printing')]),
  b('b18','normal',[s('s17','Multi-pass flatbed printers offer excellent quality but limited speeds. The printhead moves back and forth over the stationary sheet, ensuring high resolution. Suitable for prototypes, samples and very short runs.')]),
  b('b20','h3',[s('s19','Screen Printing')]),
  b('b22','normal',[s('s21','Used for specific applications such as special colours, opaque solid backgrounds and tactile effects. Not suitable for photographic images, but excels in applications requiring a high ink thickness.')]),
  b('b24','h2',[s('s23','Direct Printing vs Pre-Print')]),
  b('b26','normal',[s('s25','Two fundamentally different approaches:')]),
  li('b29',[s('s27','Direct printing (post-print)','strong'),s('s28','— printing directly onto the already formed corrugated sheet. This is the most flexible method and the one used by the EDM-650X')]),
  li('b32',[s('s30','Pre-print','strong'),s('s31','— printing on a smooth liner that is then laminated to the flute. Offers superior quality but requires a more complex process and higher volumes')]),
  b('b34','h2',[s('s33','Challenges of Printing on Corrugated Cardboard')]),
  b('b36','normal',[s('s35','Printing on corrugated cardboard presents unique challenges compared to smooth paper:')]),
  li('b39',[s('s37','Irregular surface','strong'),s('s38','— the underlying flute creates a non-uniform surface')]),
  li('b42',[s('s40','Ink absorption','strong'),s('s41','— cardboard is porous and absorbs quickly')]),
  li('b45',[s('s43','Washboarding','strong'),s('s44','— the "washboard" effect visible in solid background areas')]),
  li('b48',[s('s46','Variable thickness','strong'),s('s47','— cardboards from 1.5 to 10 mm require adjustments')]),
  li('b51',[s('s49','Dust','strong'),s('s50','— cardboard generates particulate that can clog printheads')]),
  b('b53','h2',[s('s52','Practical Tips for Optimal Results')]),
  li('b55',[s('s54','Use cardboards with quality liner (white kraft or coated) for direct printing')]),
  li('b57',[s('s56','Avoid 100% dark solid backgrounds — prefer screened tints or patterns')]),
  li('b59',[s('s58','Allow for tolerance margins in artwork to compensate for deformations')]),
  li('b61',[s('s60','Choose inks formulated specifically for corrugated cardboard')]),
  li('b63',[s('s62','Maintain controlled temperature and humidity in the printing environment')]),
  li('b65',[s('s64','Always run print tests before production')]),
  b('b67','h2',[s('s66','When to Choose Digital')]),
  b('b69','normal',[s('s68','Digital printing on corrugated cardboard is the optimal choice when:')]),
  li('b71',[s('s70','Runs are below 1,000–2,000 pieces')]),
  li('b73',[s('s72','Graphics change frequently')]),
  li('b75',[s('s74','Variable data is needed (QR codes, numbering, personalisation)')]),
  li('b77',[s('s76','Time-to-market is critical')]),
  li('b79',[s('s78','Prototypes or customer samples are being produced')]),
  b('b81','h2',[s('s80','Conclusion')]),
  b('b83','normal',[s('s82','Printing on corrugated cardboard is in full evolution. Single-pass digital technology has opened up possibilities unimaginable just a few years ago, making quality printing accessible even for small runs. The key is to choose the right technology for your volume and type of production.')]),
];

// ─── 3. STAMPANTE ETICHETTE COLORI BOBINA GUIDA ─────────────────────────────
const stampanteEtichetteEn = [
  b('b2','h2',[s('s1','Why Print Labels In-House?')]),
  b('b6','normal',[s('s3','Printing labels internally offers enormous advantages: '),s('s4','no minimum orders','strong'),s('s5',', zero lead times, the ability to customise every single batch and competitive cost-per-label from just a few pieces.')]),
  b('b8','normal',[s('s7','But with so many technologies available — dye inkjet, pigment inkjet, LED toner — how do you choose the right printer? In this guide we analyse the four main Afinia Label options.')]),
  b('b10','h2',[s('s9','Three Technologies Compared')]),
  b('b12','h3',[s('s11','1. Dye Inkjet (Memjet)')]),
  b('b16','normal',[s('s13','Used in the '),s('s14','Afinia L701 and L901','strong'),s('s15',', Memjet Waterfall technology offers brilliant colours and resolution up to 1,600 dpi. Water-based dye inks are eco-friendly, VOC-free and safe for multiple applications.')]),
  li('b18',[s('s17','Excellent quality on inkjet-coated papers')]),
  li('b20',[s('s19','Contained operating costs')]),
  li('b22',[s('s21','Ideal for food, beverage and cosmetics labels')]),
  li('b24',[s('s23','Not water-resistant without lamination')]),
  b('b26','h3',[s('s25','2. Pigment Inkjet')]),
  b('b30','normal',[s('s27','The '),s('s28','Afinia X350','strong'),s('s29',' uses aqueous pigmented inks, naturally resistant to water, UV and chemical agents. Record speed of 45 m/min and 2× nozzle redundancy for zero streaks.')]),
  li('b32',[s('s31','Native resistance to water and UV')]),
  li('b34',[s('s33','Water-based, eco-friendly and solvent-free')]),
  li('b36',[s('s35','Industrial speed: 45 m/min')]),
  li('b38',[s('s37','2L tanks per colour — fewer stoppages')]),
  b('b40','h3',[s('s39','3. LED Toner')]),
  b('b44','normal',[s('s41','The '),s('s42','Afinia LT5C','strong'),s('s43',' uses electrophotographic technology with LED toner. The toner is fused onto the paper, guaranteeing immediate water resistance without any need for drying or lamination.')]),
  li('b46',[s('s45','Immediate resistance without drying')]),
  li('b48',[s('s47','Ideal for humid and cold environments')]),
  li('b50',[s('s49','Competitive cost-per-page at high volumes')]),
  li('b52',[s('s51','Crystal-clear text quality')]),
  b('b54','h2',[s('s53','Comparison Table')]),
  b('b56','h2',[s('s55','How to Choose?')]),
  li('b59',[s('s57','Limited budget, small productions?','strong'),s('s58',' → Afinia L701')]),
  li('b62',[s('s60','Medium volumes, dual black needed?','strong'),s('s61',' → Afinia L901')]),
  li('b65',[s('s63','High speed, native resistance?','strong'),s('s64',' → Afinia X350')]),
  li('b68',[s('s66','Humid environments, immediate resistance?','strong'),s('s67',' → Afinia LT5C')]),
  li('b71',[s('s69','Complete print+die-cut system?','strong'),s('s70',' → Afinia DLP-2200 (with L901)')]),
  b('b73','h2',[s('s72','The Complete System: DLP-2200')]),
  b('b77','normal',[s('s74','If you are looking for a "from blank roll to finished label" solution, the '),s('s75','DLP-2200','strong'),s('s76',' integrates the L901 printer, laminator, rotary die-cutter, waste removal and rewinder. It produces over 25,000 3×4" labels per hour in full colour.')]),
  b('b79','h2',[s('s78','Conclusion')]),
  b('b81','normal',[s('s80','There is no single "best" printer: the choice depends on your volumes, materials, budget and resistance requirements. The best approach? Bring your labels to our demo room and test them on every machine.')]),
];

// ─── 4. TENDENZE PACKAGING 2026 ──────────────────────────────────────────────
const tendenzeEn = [
  b('b4','normal',[s('s1','The world of packaging is in constant evolution, driven by changes in consumer habits, increasingly stringent environmental regulations and technological innovations. Here are the '),s('s2','2026 packaging trends','strong'),s('s3',' that are redefining the sector.')]),
  b('b6','h2',[s('s5','1. Sustainability at the Centre')]),
  b('b8','normal',[s('s7','Sustainability is no longer an option but a requirement. The European PPWR regulation (Packaging and Packaging Waste Regulation) sets ambitious recyclability and packaging reduction targets. In 2026, companies are accelerating the transition towards:')]),
  li('b11',[s('s9','Mono-materials','strong'),s('s10','— packaging made from a single material to facilitate recycling')]),
  li('b14',[s('s12','Corrugated cardboard','strong'),s('s13','— 83% recyclable, it is the sustainable material par excellence')]),
  li('b17',[s('s15','Eliminating plastic','strong'),s('s16','— replacing plastic padding with paper-based solutions')]),
  li('b20',[s('s18','Right-sizing','strong'),s('s19','— custom-fit boxes that eliminate material waste')]),
  b('b22','h2',[s('s21','2. Mass Personalisation')]),
  b('b24','normal',[s('s23','Consumers expect personalised experiences, and packaging is no exception. Digital printing makes it possible to create unique packaging for every customer, campaign or season with no additional set-up costs.')]),
  b('b26','normal',[s('s25','Campaigns like "Share a Coke" have demonstrated the power of personalisation. In 2026, this trend extends to SMEs as well, thanks to accessible digital printers such as the EDM-650X for cardboard and the Afinia range for labels.')]),
  b('b28','h2',[s('s27','3. Smart Packaging and Connectivity')]),
  b('b30','normal',[s('s29','Packaging is becoming interactive thanks to technologies such as:')]),
  li('b33',[s('s31','Dynamic QR codes','strong'),s('s32','— linking the physical product to digital content, traceability and promotions')]),
  li('b36',[s('s34','NFC','strong'),s('s35','— tags integrated into packaging for authentication and interaction')]),
  li('b39',[s('s37','Augmented reality','strong'),s('s38','— immersive experiences activatable from the packaging')]),
  li('b42',[s('s40','Smart indicators','strong'),s('s41','— temperature, freshness and opening sensors')]),
  b('b44','normal',[s('s43','Digital printing facilitates the integration of unique QR codes on every package, enabling individual traceability.')]),
  b('b46','h2',[s('s45','4. Minimalism and Essential Design')]),
  b('b48','normal',[s('s47','The "less is more" trend is consolidating. Clean designs, essential typography and reduced colour palettes communicate authenticity and transparency. Minimal packaging uses less ink, less material and is more easily recyclable.')]),
  b('b50','normal',[s('s49','Premium finishes such as hot foil (applicable with systems like AurumPress) allow a luxury element to be added even to the most essential designs, with a simple metallic detail.')]),
  b('b52','h2',[s('s51','5. E-Commerce Packaging')]),
  b('b54','normal',[s('s53','With e-commerce continuing to grow, shipping packaging is becoming a fundamental touchpoint. Trends include:')]),
  li('b56',[s('s55','Custom-fit boxes to reduce void and filling material')]),
  li('b58',[s('s57','Frustration-free packaging that is easy to open')]),
  li('b60',[s('s59','Designs conceived for unboxing and social sharing')]),
  li('b62',[s('s61','Return systems integrated into the packaging')]),
  b('b64','h2',[s('s63','6. Automation and Industry 4.0')]),
  b('b66','normal',[s('s65','Packaging production automation is extending across the entire supply chain. Automatic box makers such as the AB2500 integrate with WMS systems to produce the right box at the right moment, on command from the management software. The goal is "lot size one": producing batches of a single piece with the same efficiency as mass production.')]),
  b('b68','h2',[s('s67','7. Smart Labels and Transparency')]),
  b('b70','normal',[s('s69','Consumers are demanding transparency on the origin, composition and environmental impact of products. Labels must communicate more information in less space. Solutions include multi-level labels, QR codes linking to information pages and digital product passports.')]),
  b('b72','h2',[s('s71','Conclusion')]),
  b('b74','normal',[s('s73','The packaging of 2026 is sustainable, personalised, connected and automated. Companies that embrace these trends not only respond to consumer expectations and regulations, but gain a concrete competitive advantage. The technologies to do so are already available and accessible.')]),
];

async function run() {
  const updates = [
    { id: 'blog-packaging-personalizzato-vantaggi-pmi', body_en: packagingPmiEn },
    { id: 'blog-stampa-cartone-ondulato-guida-completa', body_en: stampaCartoneEn },
    { id: 'blog-stampante-etichette-colori-bobina-guida', body_en: stampanteEtichetteEn },
    { id: 'blog-tendenze-packaging-2026', body_en: tendenzeEn },
  ];

  for (const u of updates) {
    try {
      await client.patch(u.id).set({ body_en: u.body_en }).commit();
      console.log(`✓ ${u.id} (${u.body_en.length} blocks EN)`);
    } catch(e) {
      console.error(`✗ ${u.id}:`, e.message);
    }
  }
  console.log('\nDone!');
}

run();
