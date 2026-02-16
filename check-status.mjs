import fs from 'fs';
const files = ['afinia-dlp2200','afinia-lt5c','afinia-x350','greenbox-evo','edm-650x','any-002','any-press','aurumpress','packprinter-uv','greenbox-print-book'];
for (const f of files) {
  const c = fs.readFileSync('src/app/[locale]/prodotti/'+f+'/page.tsx','utf8');
  const hasTitleEn = c.includes('titleEn');
  const hasGetSpecs = c.includes('getSpecs');
  const featMatch = c.match(/title: "[^"]+",\s*\r?\n\s*desc:/g);
  const featCount = featMatch ? featMatch.length : 0;
  console.log(`${f}: titleEn=${hasTitleEn} getSpecs=${hasGetSpecs} untranslatedFeats=${featCount}`);
}
