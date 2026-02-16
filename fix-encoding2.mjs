import fs from 'fs';

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

// Context-based fixes for wrong × replacements
const fixes = [
  // Italian accented à (most common - word ending in tà)
  [/(\w)t×(\W)/g, '$1tà$2'],  // produttivit× → produttività
  [/(\w)t×$/gm, '$1tà'],       // end of line
  
  // Title separators: × used as dash/em-dash
  [/× Stampante/g, '– Stampante'],
  [/× Stampa /g, '– Stampa '],
  [/× Stampa$/gm, '– Stampa'],
  
  // Voltage/frequency ranges
  [/220×240V/g, '220-240V'],
  [/100×240V/g, '100-240V'],
  [/50×60Hz/g, '50/60Hz'],
  
  // Temperature ranges  
  [/10×32×C/g, '10-32°C'],
  [/0××45×C/g, '0°-45°C'],
  [/×C/g, '°C'],
  
  // Humidity ranges
  [/(\d)×(\d+%)/g, '$1-$2'],
  
  // Speed ranges
  [/0×15 m/g, '0-15 m'],
  
  // List items starting with ×
  [/<li>× /g, '<li>• '],
  
  // Area: 1 m×
  [/1 m×/g, '1 m²'],
  
  // CMYK × K → CMYK – K
  [/CMYK × K/g, 'CMYK – K'],
  
  // Toner capacity with ×
  [/CMY (\d)/g, 'CMY $1'],
  
  // Dimensions: these are LEGITIMATE × (multiplication sign) - keep them
  // "1200 × 1200", "190 × 120 × 165", "150,4 mm × 30 mm" etc.
  // These should already be correct.
  
  // Ridondanza 2× - legitimate, keep
  
  // "5 colori × CMYKW" → "5 colori – CMYKW"
  [/colori × CMYKW/g, 'colori – CMYKW'],
  
  // "Opzionale × a freddo" → "Opzionale – a freddo"
  [/Opzionale × a/g, 'Opzionale – a'],
  
  // "L×A×P" → these are legitimate multiplication signs for dimensions
  // But "Dimensioni (L×A×P)" might be wrong. Let me check... Actually L×A×P is fine.
  
  // "Monofase 220×240V" already handled above
  
  // Remaining × in desc attributes that should be à
  // (already handled by the t× pattern above)
];

for (const filePath of files) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  const before = (content.match(/×/g) || []).length;
  
  for (const [pattern, replacement] of fixes) {
    content = content.replace(pattern, replacement);
  }
  
  const after = (content.match(/×/g) || []).length;
  
  // Show remaining × for review
  if (after > 0) {
    const lines = content.split('\n');
    let shown = 0;
    lines.forEach((l, i) => {
      if (l.includes('×') && shown < 10) {
        console.log(`  ${filePath.split('/').pop()}:${i+1}: ${l.trim().substring(0, 100)}`);
        shown++;
      }
    });
  }
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`${filePath.split('/').pop()}: ${before} → ${after} ×`);
}
