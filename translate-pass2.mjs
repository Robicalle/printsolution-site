/**
 * Second pass: translate remaining untranslated features and JSX text.
 * Based on actual file content from show-untranslated.mjs output.
 */

import fs from 'fs';
const BASE = 'src/app/[locale]';
function readF(p) { return fs.readFileSync(BASE+'/'+p, 'utf-8'); }
function writeF(p, c) { fs.writeFileSync(BASE+'/'+p, c, 'utf-8'); console.log('✓ '+p); }

function addFeatureTranslation(c, titleIt, titleEn, descIt, descEn) {
  // Find the exact pattern and add English translations
  const titlePattern = `title: "${titleIt}",`;
  const descPattern = `desc: "${descIt}",`;
  
  if (c.includes(titlePattern) && !c.includes(titlePattern + ` titleEn:`)) {
    c = c.replace(titlePattern, `title: "${titleIt}", titleEn: "${titleEn}",`);
  }
  if (c.includes(descPattern) && !c.includes(descPattern + ` descEn:`)) {
    c = c.replace(descPattern, `desc: "${descIt}", descEn: "${descEn}",`);
  }
  return c;
}

function wrapText(c, it, en) {
  if (!c.includes(it)) {
    // Try CRLF
    const itCR = it.replace(/\n/g, '\r\n');
    if (c.includes(itCR)) {
      const enSafe = en.includes("'") ? `"${en}"` : `'${en}'`;
      const itSafe = it.replace(/\n/g, ' ');
      const itJ = itSafe.includes("'") ? `"${itSafe}"` : `'${itSafe}'`;
      return c.replace(itCR, `{locale === 'it' ? ${itJ} : ${enSafe}}`);
    }
    return c;
  }
  const enSafe = en.includes("'") ? `"${en}"` : `'${en}'`;
  const itSafe = it.replace(/\n/g, ' ');
  const itJ = itSafe.includes("'") ? `"${itSafe}"` : `'${itSafe}'`;
  return c.replace(it, `{locale === 'it' ? ${itJ} : ${enSafe}}`);
}

// ============ DLP-2200 ============
{
  let c = readF('prodotti/afinia-dlp2200/page.tsx');
  // Read actual features from file
  const feats = [
    ["Laminazione In Linea", "Inline Lamination"],
    ["Cambio Supporto Rapido", "Quick Media Change"],
    ["Fustelle Flessibili Economiche", "Economical Flexible Dies"],
    ["Bobine da 1000 Metri", "1000-Meter Rolls"],
  ];
  // Extract actual desc text from file for each
  for (const [tIt, tEn] of feats) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    if (descIdx === -1) continue;
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    
    const descTranslations = {
      "Laminazione In Linea": "Silent integrated lamination system. Available with self-wound or liner laminate for professional protection of every label.",
      "Cambio Supporto Rapido": "Splice table for quick media changes. Minimal downtime between different label rolls.",
      "Fustelle Flessibili Economiche": "18-inch magnetic cylinder for flexible steel dies. Economical, quick to produce and easy to change. Rapid job changeover.",
      "Bobine da 1000 Metri": "Roll capacity up to 460 mm outer diameter, approximately 1000 meters. Extended autonomous production without interruptions.",
    };
    
    c = addFeatureTranslation(c, tIt, tEn, descIt, descTranslations[tIt] || descIt);
  }
  writeF('prodotti/afinia-dlp2200/page.tsx', c);
}

// ============ LT5C ============
{
  let c = readF('prodotti/afinia-lt5c/page.tsx');
  const translations = {
    "Resistenza Immediata": ["Instant Durability", "Labels come out of the printer already resistant to water, scratches, oils and extreme temperatures. No drying or additional treatment needed."],
    "Tecnologia Toner LED": ["LED Toner Technology", "Electrophotographic technology with integrated fuser: toner is fixed at high temperature for permanent, durable prints."],
    "Zero Tempi di Attesa": ["Zero Wait Times", "No drying necessary: labels can be applied, laminated or die-cut immediately after printing."],
    "Ambienti Umidi e Industriali": ["Humid and Industrial Environments", "Perfect for environments where labels are exposed to moisture, chemicals, cold or heat. Toner resistance is inherent."],
    "Costo Stampa Competitivo": ["Competitive Print Cost", "High-yield toner cartridges for a competitive cost per label. Individual replacement of each color."],
    "Alimentazione da Rotolo": ["Roll Feed", "Direct roll feed for continuous production. Compatible with a wide range of self-adhesive materials."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/afinia-lt5c/page.tsx', c);
}

// ============ X350 ============
{
  let c = readF('prodotti/afinia-x350/page.tsx');
  const translations = {
    "45 Metri al Minuto": ["45 Meters per Minute", "The fastest in its class. Industrial production with consistent quality up to 1600 dpi on every label."],
    "Inchiostri Pigmentati a Base Acqua": ["Pigmented Water-Based Inks", "Pigmented inks resistant to water, UV rays and the harshest environmental conditions. Ideal for outdoor and industrial labels."],
    "8 Litri di Inchiostro": ["8 Liters of Ink", "2-liter tanks per color (CMYK), 8 liters total. Extended autonomous production without frequent replacements."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/afinia-x350/page.tsx', c);
}

// ============ GREENBOX EVO ============
{
  let c = readF('prodotti/greenbox-evo/page.tsx');
  const translations = {
    "Velocità Industriale": ["Industrial Speed", "Up to 30 meters per minute with single-pass technology: print and immediately move to the next sheet."],
    "Materiali Versatili": ["Versatile Materials", "Print on cardboard, kraft paper, jute, shoppers, envelopes and bags. Wide range of printable substrates."],
    "RIP Flexprint Incluso": ["RIP Flexprint Included", "Professional RIP software included with integrated digital display for advanced color management and print optimization."],
    "Entry-Level Accessibile": ["Accessible Entry-Level", "Affordable investment to enter the world of direct digital printing on corrugated. High performance at a competitive price."],
    "Piano Aspirato": ["Vacuum Table", "The vacuum table with suction pump ensures perfect sheet adhesion during printing for consistently sharp results."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/greenbox-evo/page.tsx', c);
}

// ============ EDM-650X ============
{
  let c = readF('prodotti/edm-650x/page.tsx');
  const translations = {
    "Grande Formato": ["Large Format", "Print width up to 180 cm and paper pass-through up to 250 cm. Ideal for large boxes, displays and POP materials."],
    "Velocità Industriale": ["Industrial Speed", "30 meters per minute with single-pass technology: continuous production without compromise on quality."],
    "Inchiostri a Base Acqua": ["Water-Based Inks", "Ecological CMYK water-based inks with high chromatic yield. Compatible with food contact per current regulations."],
    "6 Configurazioni": ["6 Configurations", "From 2 to 6 HP printheads: choose the most suitable configuration for your production volumes and needs."],
    "Bobina a Bobina": ["Roll to Roll", "Optional roll-to-roll printing for continuous production and high-speed inline finishing."],
    "Software RIP Incluso": ["RIP Software Included", "Professional RIP software included for advanced color management and quality control on every print."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/edm-650x/page.tsx', c);
}

// ============ ANY-002 ============
{
  let c = readF('prodotti/any-002/page.tsx');
  const translations = {
    "Resistenza Professionale": ["Professional Durability", "Toner prints resistant to water, temperature and abrasion. Long-lasting quality without additional coatings."],
    "Dato Variabile Integrato": ["Integrated Variable Data", "Barcodes, QR codes and sequential serial numbers printed in real time. Perfect for traceability and identification."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/any-002/page.tsx', c);
}

// ============ ANY-PRESS ============
{
  let c = readF('prodotti/any-press/page.tsx');
  const translations = {
    "Toner Bianco CMYKW": ["White Toner CMYKW", "5-color printing with white toner to create vivid images and text on transparent, metallic and dark materials."],
    "Etichette e Packaging Flessibile": ["Labels and Flexible Packaging", "2-in-1 solution for labels and flexible packaging: pouches, bags, sachets and wrappers in a single machine."],
    "Laminazione Integrata": ["Integrated Lamination", "Optional integrated laminator (cold or hot) for additional protection and premium finish on every print."],
    "Stampe Durevoli Senza Rivestimento": ["Durable Prints Without Coating", "LED laser toner ensures resistance to water, UV rays, scratches and the harshest environmental conditions."],
    "Costi di Produzione Ridotti": ["Reduced Production Costs", "High-capacity toner and drums with a wide choice of compatible media for an optimized cost per print."],
    "Software ANY-FLOW": ["ANY-FLOW Software", "Dedicated operating system for color management, variable data, barcodes and automated production workflow."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/any-press/page.tsx', c);
}

// ============ AURUMPRESS ============
{
  let c = readF('prodotti/aurumpress/page.tsx');
  const translations = {
    "Finiture Premium": ["Premium Finishes", "Silver, gold, metallic, pastel and transparent foils for luxury finishes that enhance any product."],
    "Impressione Idraulica": ["Hydraulic Impression", "Hydraulic impression system for uniform pressure and perfect adhesion of the foil on any material."],
    "Packaging di Lusso": ["Luxury Packaging", "Perfect for enhancing boxes, gift packaging, labels and printed materials with metallic and holographic details."],
    "Personalizzazione Totale": ["Total Customization", "Print custom logos, text and graphics directly from digital file. Each piece can be unique."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/aurumpress/page.tsx', c);
}

// ============ PACKPRINTER UV ============
{
  let c = readF('prodotti/packprinter-uv/page.tsx');
  const translations = {
    "50 Metri al Minuto": ["50 Meters per Minute", "Exceptional single-pass speed for industrial production. UV curing allows immediate handling."],
    "Stampa su Qualsiasi Materiale": ["Print on Any Material", "PVC, glass, ceramic, wood, cardboard, metal, acrylic, synthetic leather and more. Total versatility."],
    "CMYK + Bianco": ["CMYK + White", "5-color printing with opaque white for transparent and dark materials. Maximum coverage and opacity."],
    "9 Configurazioni": ["9 Configurations", "Print width from 12 to 118 cm. Choose the ideal configuration for your production volumes and applications."],
    "ROI Rapido": ["Quick ROI", "High speed and material versatility allow serving multiple markets and applications. Quick return on investment."],
  };
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  writeF('prodotti/packprinter-uv/page.tsx', c);
}

// ============ GREENBOX PRINT BOOK ============
{
  let c = readF('prodotti/greenbox-print-book/page.tsx');
  const translations = {
    "30 Metri al Minuto": ["30 Meters per Minute", "Exceptional print speed thanks to the HP single-pass printhead. Full coverage in a single pass."],
    "Testa Microregolabile": ["Micro-Adjustable Head", "Micrometric adjustment with digital display. Vertical travel from 5 to 50 cm for any book format."],
    "Industria 4.0 Ready": ["Industry 4.0 Ready", "With the optional GreenFlow software, it meets Industry 4.0 requirements for tax credits and interconnection."],
    "Software GreenFlow": ["GreenFlow Software", "Color management, variable data, barcodes/QR codes, nesting, print preview and advanced settings."],
  };
  // Handle the special title with ×
  const t1200 = c.match(/title: "(1200[^"]+)"/);
  if (t1200) {
    translations[t1200[1]] = ["1200×1200 DPI", "Maximum resolution for detailed edge printing with vivid colors and sharp text on every book."];
  }
  
  for (const [tIt, [tEn, dEn]] of Object.entries(translations)) {
    const idx = c.indexOf(`title: "${tIt}"`);
    if (idx === -1) continue;
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = addFeatureTranslation(c, tIt, tEn, descIt, dEn);
  }
  
  // Also handle specs for greenbox-print-book (it doesn't have a standard specs array)
  // Check if it has specs
  if (c.includes('const specs =')) {
    const specsMatch = c.match(/const specs = \[([\s\S]*?)\n\];/);
    if (specsMatch) {
      const nl = c.includes('\r\n') ? '\r\n' : '\n';
      const enSpecs = [
        ["Technology", "Single-pass inkjet HP Pagewide"],
        ["Resolution", "1200 × 1200 dpi"],
        ["Max speed", "30 m/min"],
        ["Book height", "5 to 50 cm"],
        ["Inks", "Water-based pigmented CMYK"],
        ["Print width", "Up to 310 mm"],
        ["Industry 4.0", "Compatible with GreenFlow software"],
      ];
      const enLines = enSpecs.map(([l,v]) => `  ["${l}", "${v}"]`).join(`,${nl}`);
      c = c.replace(specsMatch[0], `function getSpecs(l: string) { return l === 'it' ? [${specsMatch[1]}${nl}] : [${nl}${enLines},${nl}]; }`);
      c = c.replaceAll('{specs.map(', '{getSpecs(locale).map(');
    }
  }
  
  writeF('prodotti/greenbox-print-book/page.tsx', c);
}

// ============ ROBOTJET - fix the special quote character ============
{
  let c = readF('prodotti/robotjet/page.tsx');
  // The title uses \u2019 (right single quotation mark)
  const robotTitle = "400 Pezzi all\u2019Ora";
  if (c.includes(`title: "${robotTitle}"`)) {
    c = c.replace(`title: "${robotTitle}",`, `title: "${robotTitle}", titleEn: "400 Pieces per Hour",`);
    // Find and add descEn
    const idx = c.indexOf(`title: "${robotTitle}"`);
    const descIdx = c.indexOf('desc: "', idx);
    const descEnd = c.indexOf('",', descIdx + 7);
    const descIt = c.substring(descIdx + 7, descEnd);
    c = c.replace(`desc: "${descIt}",`, `desc: "${descIt}", descEn: "High productivity with up to 3200 personalized books per day. Ideal for both small and large orders.",`);
  }
  writeF('prodotti/robotjet/page.tsx', c);
}

console.log('\n=== Pass 2 complete ===');
