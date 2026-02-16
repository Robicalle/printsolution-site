import fs from 'fs';
import path from 'path';

// Files with corrupted encoding
const files = [
  'src/app/[locale]/prodotti/ab2500/page.tsx',
  'src/app/[locale]/prodotti/afinia-x350/page.tsx',
  'src/app/[locale]/prodotti/any-002/page.tsx',
  'src/app/[locale]/prodotti/any-press/page.tsx',
  'src/app/[locale]/prodotti/aurumpress/page.tsx',
  'src/app/[locale]/prodotti/edm-650x/page.tsx',
  'src/app/[locale]/prodotti/greenbox-evo/page.tsx',
  'src/app/[locale]/prodotti/packprinter-uv/page.tsx',
  'src/app/[locale]/prodotti/robotjet/page.tsx',
];

// Context-based replacement patterns (what comes before/after the replacement char)
const contextReplacements = [
  // à patterns
  [/Produttivit\uFFFD/g, 'Produttività'],
  [/flessibilit\uFFFD/g, 'flessibilità'],
  [/qualit\uFFFD/g, 'qualità'],
  [/velocit\uFFFD/g, 'velocità'],
  [/capacit\uFFFD/g, 'capacità'],
  [/versatilit\uFFFD/g, 'versatilità'],
  [/densit\uFFFD/g, 'densità'],
  [/Variet\uFFFD/g, 'Varietà'],
  [/variet\uFFFD/g, 'varietà'],
  [/possibilit\uFFFD/g, 'possibilità'],
  [/sicurezza\uFFFD/g, 'sicurezza'], // probably not this
  [/operativit\uFFFD/g, 'operatività'],
  [/continuit\uFFFD/g, 'continuità'],
  [/funzionalit\uFFFD/g, 'funzionalità'],
  [/personalit\uFFFD/g, 'personalità'],
  [/durata\uFFFD/g, 'durata'],
  [/resistivit\uFFFD/g, 'resistività'],
  [/Compatibilit\uFFFD/g, 'Compatibilità'],
  [/compatibilit\uFFFD/g, 'compatibilità'],
  [/affidabilit\uFFFD/g, 'affidabilità'],
  [/luminosit\uFFFD/g, 'luminosità'],
  [/Luminosit\uFFFD/g, 'Luminosità'],
  [/intensit\uFFFD/g, 'intensità'],
  [/vivacit\uFFFD/g, 'vivacità'],
  [/precisit\uFFFD/g, 'precisità'],
  [/complessit\uFFFD/g, 'complessità'],
  [/modularit\uFFFD/g, 'modularità'],
  [/scalabilit\uFFFD/g, 'scalabilità'],
  [/Stabilit\uFFFD/g, 'Stabilità'],
  [/stabilit\uFFFD/g, 'stabilità'],
  [/umidit\uFFFD/g, 'umidità'],
  [/Umidit\uFFFD/g, 'Umidità'],
  [/Capacit\uFFFD/g, 'Capacità'],
  [/Velocit\uFFFD/g, 'Velocità'],
  [/Qualit\uFFFD/g, 'Qualità'],
  [/novit\uFFFD/g, 'novità'],
  // è patterns
  [/\uFFFD un/g, 'è un'],
  [/\uFFFD il/g, 'è il'],
  [/\uFFFD la/g, 'è la'],
  [/\uFFFD lo/g, 'è lo'],
  [/\uFFFD in/g, 'è in'],
  [/\uFFFD una/g, 'è una'],
  [/\uFFFD possibile/g, 'è possibile'],
  [/\uFFFD ideale/g, 'è ideale'],
  [/\uFFFD disponibile/g, 'è disponibile'],
  [/\uFFFD dotata/g, 'è dotata'],
  [/\uFFFD dotato/g, 'è dotato'],
  [/\uFFFD tutto/g, 'è tutto'],
  [/\uFFFD compat/g, 'è compat'],
  [/\uFFFD poss/g, 'è poss'],
  [/perch\uFFFD/g, 'perché'],
  [/Perch\uFFFD/g, 'Perché'],
  [/poich\uFFFD/g, 'poiché'],
  [/nonch\uFFFD/g, 'nonché'],
  [/bench\uFFFD/g, 'benché'],
  // ò patterns
  [/pu\uFFFD/g, 'può'],
  [/ci\uFFFD/g, 'ciò'],
  [/per\uFFFD/g, 'però'],
  // ù patterns
  [/pi\uFFFD /g, 'più '],
  [/pi\uFFFD\./g, 'più.'],
  [/pi\uFFFD,/g, 'più,'],
  [/pi\uFFFD\n/g, 'più\n'],
  [/pi\uFFFD"/g, 'più"'],
  [/pi\uFFFD$/gm, 'più'],
  // Special patterns with × and °
  [/\uFFFD/g, '×'], // fallback - might be wrong
];

// More careful approach: log remaining replacement chars
for (const filePath of files) {
  if (!fs.existsSync(filePath)) { console.log(`SKIP: ${filePath}`); continue; }
  let content = fs.readFileSync(filePath, 'utf-8');
  const before = (content.match(/\uFFFD/g) || []).length;
  
  // Apply known context replacements
  for (const [pattern, replacement] of contextReplacements) {
    content = content.replace(pattern, replacement);
  }
  
  const after = (content.match(/\uFFFD/g) || []).length;
  
  if (after > 0) {
    // Show remaining replacements needed
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('\uFFFD')) {
        console.log(`  ${filePath}:${i+1}: ${lines[i].trim()}`);
      }
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`${filePath}: ${before} → ${after} replacement chars`);
}
