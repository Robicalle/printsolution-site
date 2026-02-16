import fs from 'fs';
const files = ['afinia-dlp2200','afinia-lt5c','afinia-x350','greenbox-evo','edm-650x','any-002','any-press','aurumpress','packprinter-uv','greenbox-print-book','robotjet','ab2500','afinia-l901','afinia-dc350','afinia-dlf'];
for (const f of files) {
  const c = fs.readFileSync('src/app/[locale]/prodotti/'+f+'/page.tsx','utf8');
  
  // Find untranslated features (title without titleEn)
  const re = /title: "([^"]+)",\s*\r?\n\s*desc: "([^"]+)",/g;
  let m;
  const untranslated = [];
  while ((m = re.exec(c)) !== null) {
    // Check if this title already has titleEn right after
    const afterMatch = c.substring(m.index + m[0].length, m.index + m[0].length + 30);
    if (!afterMatch.includes('titleEn') && !c.substring(m.index, m.index + m[0].length + 100).includes('titleEn')) {
      untranslated.push({ title: m[1], desc: m[2].substring(0, 60) });
    }
  }

  // Find Italian paragraph text in JSX (text between > and < that's clearly Italian)
  // Check for common Italian words that indicate untranslated text
  const lines = c.split('\n');
  let italianParas = 0;
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip metadata, jsonld, imports, attributes
    if (trimmed.startsWith('//') || trimmed.startsWith('import') || trimmed.startsWith('export const metadata') || 
        trimmed.startsWith('"') || trimmed.startsWith("'") || trimmed.includes('className=') ||
        trimmed.startsWith('const ') || trimmed.startsWith('function ') || trimmed.includes('href=') ||
        trimmed.includes('locale ===')) continue;
    // Check for Italian text that's NOT in a ternary
    if (/[A-Z][a-zàèéìòù]+ (di|del|della|delle|dei|per|con|che|una|nel|nella|sul|dalla|alla) /i.test(trimmed) &&
        !trimmed.includes("locale === 'it'") && !trimmed.includes("titleEn") && !trimmed.includes("descEn")) {
      italianParas++;
    }
  }
  
  if (untranslated.length > 0 || italianParas > 0) {
    console.log(`\n=== ${f} === (${untranslated.length} feats, ~${italianParas} IT lines)`);
    for (const u of untranslated) {
      console.log(`  FEAT: "${u.title}" → "${u.desc}..."`);
    }
  }
}
