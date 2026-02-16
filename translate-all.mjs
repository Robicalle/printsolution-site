/**
 * Comprehensive translation script for all Italian text.
 * Handles CRLF line endings properly.
 */

import fs from 'fs';
import path from 'path';

const BASE = 'src/app/[locale]';
function readF(p) { return fs.readFileSync(path.join(BASE, p), 'utf-8'); }
function writeF(p, c) { fs.writeFileSync(path.join(BASE, p), c, 'utf-8'); console.log(`✓ ${p}`); }

function rep(content, old, newText) {
  if (!content.includes(old)) {
    // Try normalizing line endings
    const oldNorm = old.replace(/\n/g, '\r\n');
    if (content.includes(oldNorm)) {
      return content.replace(oldNorm, newText.replace(/\n/g, '\r\n'));
    }
    console.log(`  WARN: not found: "${old.substring(0, 80)}..."`);
    return content;
  }
  return content.replace(old, newText);
}

function repAll(content, old, newText) {
  return content.replaceAll(old, newText);
}

// ============================================
// TRANSLATE AB2500
// ============================================
function doAB2500() {
  let c = readF('prodotti/ab2500/page.tsx');
  const NL = c.includes('\r\n') ? '\r\n' : '\n';
  const n = NL;

  // Specs → function
  c = rep(c,
    `const specs = [${n}  ["Tipo macchina", "Box maker automatico all-in-one"],${n}  ["Operazioni", "Taglio, scanalatura, cordonatura, incollaggio"],${n}  ["Produttività", "500-600 scatole/ora"],${n}  ["Cambio formato", "10 secondi"],${n}  ["Spessore cartone", "Da 1 a 7 mm"],${n}  ["Incollaggio", "A caldo e a freddo"],${n}  ["Automazione", "Completamente automatico"],${n}];`,
    `function getSpecs(l: string) { return l === 'it' ? [${n}  ["Tipo macchina", "Box maker automatico all-in-one"],${n}  ["Operazioni", "Taglio, scanalatura, cordonatura, incollaggio"],${n}  ["Produttività", "500-600 scatole/ora"],${n}  ["Cambio formato", "10 secondi"],${n}  ["Spessore cartone", "Da 1 a 7 mm"],${n}  ["Incollaggio", "A caldo e a freddo"],${n}  ["Automazione", "Completamente automatico"],${n}] : [${n}  ["Machine type", "All-in-one automatic box maker"],${n}  ["Operations", "Cutting, creasing, scoring, gluing"],${n}  ["Throughput", "500-600 boxes/hour"],${n}  ["Format changeover", "10 seconds"],${n}  ["Cardboard thickness", "From 1 to 7 mm"],${n}  ["Gluing", "Hot and cold"],${n}  ["Automation", "Fully automatic"],${n}]; }`
  );
  c = repAll(c, '{specs.map(', '{getSpecs(locale).map(');

  // Feature title/desc translations
  const feats = [
    ['Alta Produttività', 'High Throughput',
     "500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.",
     "500-600 boxes per hour: industrial production with a single compact and versatile machine."],
    ['Cambio Formato in 10 secondi', 'Format Change in 10 Seconds',
     "Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.",
     "Instant switchover between different formats without downtime. Maximum production flexibility."],
    ['All-in-One', 'All-in-One',
     "Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.",
     "Cutting, creasing, scoring and gluing in a single automatic operation. Zero manual steps."],
    ['Cartone da 1 a 7mm', 'Cardboard 1 to 7mm',
     "Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.",
     "Works with a wide range of thicknesses, from lightweight cardboard up to 7mm for heavy-duty packaging."],
    ['Doppio Incollaggio', 'Dual Gluing',
     "Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.",
     "Hot and cold gluing system to adapt to any type of cardboard and application."],
    ['ROI Rapido', 'Quick ROI',
     "L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.",
     "Full automation reduces labor costs and increases productivity. Quick return on investment."],
  ];

  for (const [tIt, tEn, dIt, dEn] of feats) {
    c = rep(c, `title: "${tIt}",`, `title: "${tIt}", titleEn: "${tEn}",`);
    c = rep(c, `desc: "${dIt}",`, `desc: "${dIt}", descEn: "${dEn}",`);
  }
  
  // Update feature rendering
  c = rep(c, '{f.title}</h3>', "{locale === 'it' ? f.title : f.titleEn}</h3>");
  c = rep(c, '{f.desc}</p>', "{locale === 'it' ? f.desc : f.descEn}</p>");

  // Hero paragraph
  c = rep(c,
    `Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio${n}              in un&apos;unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi.`,
    `{locale === 'it' ? "Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio in un'unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi." : "All-in-one automatic box maker. Cutting, creasing, scoring and gluing in a single machine. 500-600 boxes/hour with format change in 10 seconds."}`
  );

  // Description paragraphs
  c = rep(c,
    `L&apos;Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura${n}            e incollaggio in un&apos;unica operazione. Progettato per la produzione industriale di scatole in cartone${n}            ondulato, garantisce una produttività di 500-600 scatole all&apos;ora.`,
    `{locale === 'it' ? "L'Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura e incollaggio in un'unica operazione. Progettato per la produzione industriale di scatole in cartone ondulato, garantisce una produttività di 500-600 scatole all'ora." : "The Anypack AB2500 is a fully automatic box maker that performs cutting, creasing, scoring and gluing in a single operation. Designed for industrial corrugated box production, it delivers a throughput of 500-600 boxes per hour."}`
  );
  c = rep(c,
    `Il cambio formato avviene in soli 10 secondi, eliminando i tempi morti e massimizzando l&apos;efficienza${n}            produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri${n}            che a scatole per spedizioni pesanti.`,
    `{locale === 'it' ? "Il cambio formato avviene in soli 10 secondi, eliminando i tempi morti e massimizzando l'efficienza produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri che a scatole per spedizioni pesanti." : "Format changeover takes just 10 seconds, eliminating downtime and maximizing production efficiency. The machine handles cardboard from 1 to 7mm thick, adapting to both lightweight packaging and heavy-duty shipping boxes."}`
  );
  c = rep(c,
    `Il sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione.${n}            L&apos;AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di${n}            produzione on-demand di imballaggi personalizzati.`,
    `{locale === 'it' ? "Il sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione. L'AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di produzione on-demand di imballaggi personalizzati." : "The hot and cold gluing system allows working with any type of cardboard and application. The AB2500 is the ideal solution for box manufacturers, logistics centers and companies that need on-demand customized packaging production."}`
  );

  // CTA
  c = rep(c,
    `Scopri come l&apos;AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo.`,
    `{locale === 'it' ? "Scopri come l'AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo." : "Discover how the AB2500 can revolutionize your production line. Come see it in our demo room."}`
  );

  writeF('prodotti/ab2500/page.tsx', c);
}

// ============================================
// Generic translator for product pages
// ============================================
function translateProduct(filePath, specsEn, feats, jsxPairs) {
  let c = readF(filePath);
  const n = c.includes('\r\n') ? '\r\n' : '\n';

  // 1. Find and replace specs array with function
  const specsMatch = c.match(/const specs = \[([\s\S]*?)\];/);
  if (specsMatch && specsEn) {
    const oldBlock = specsMatch[0];
    const itLines = specsMatch[1];
    const enLines = specsEn.map(s => `  ${JSON.stringify(s)}`).join(`,${n}`);
    const newBlock = `function getSpecs(l: string) { return l === 'it' ? [${itLines}] : [${n}${enLines},${n}]; }`;
    c = c.replace(oldBlock, newBlock);
    c = repAll(c, '{specs.map(', '{getSpecs(locale).map(');
  }

  // 2. Feature translations
  if (feats) {
    for (const [tIt, tEn, dIt, dEn] of feats) {
      c = rep(c, `title: "${tIt}",`, `title: "${tIt}", titleEn: "${tEn}",`);
      if (dIt) {
        c = rep(c, `desc: "${dIt}",`, `desc: "${dIt}", descEn: "${dEn}",`);
      }
    }
    // Update rendering - handle both patterns
    c = repAll(c, '{f.title}</h3>', "{locale === 'it' ? f.title : f.titleEn}</h3>");
    c = repAll(c, '{f.desc}</p>', "{locale === 'it' ? f.desc : f.descEn}</p>");
  }

  // 3. JSX text
  if (jsxPairs) {
    for (const [it, en] of jsxPairs) {
      const itStr = it.replace(/\n/g, n);
      const enSafe = en.includes("'") ? `"${en}"` : `'${en}'`;
      const itSafe = it.replace(/\n/g, ' ').includes("'") ? `"${it.replace(/\n/g, ' ')}"` : `'${it.replace(/\n/g, ' ')}'`;
      c = rep(c, itStr, `{locale === 'it' ? ${itSafe} : ${enSafe}}`);
    }
  }

  writeF(filePath, c);
}

// ============================================
// MAIN
// ============================================

console.log('=== Translating product pages ===\n');
doAB2500();

// More products will be added below...

console.log('\n=== Build check needed ===');
