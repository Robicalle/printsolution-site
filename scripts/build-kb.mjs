// Script to build enriched KB from all page.tsx files and old site
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'src', 'app');

const chunks = [];

function extractTextFromTSX(content) {
  // Remove imports
  content = content.replace(/^import\s+.*$/gm, '');
  // Remove export statements but keep content
  content = content.replace(/export\s+(const\s+metadata|default\s+function|async\s+function)/, '$1');
  // Extract string literals from metadata
  const metaMatch = content.match(/export\s+const\s+metadata[^{]*(\{[\s\S]*?\n\};)/);
  let metaText = '';
  if (metaMatch) {
    const strings = metaMatch[1].match(/"([^"]{10,})"/g) || [];
    metaText = strings.map(s => s.replace(/"/g, '')).join('. ');
  }
  
  // Extract JSON-LD data
  const jsonLdMatches = content.match(/const\s+\w+JsonLd\s*=\s*(\{[\s\S]*?\n\};)/g) || [];
  let jsonLdText = '';
  for (const m of jsonLdMatches) {
    const strings = m.match(/"([^"]{10,})"/g) || [];
    jsonLdText += strings.map(s => s.replace(/"/g, '')).join('. ') + ' ';
  }

  // Extract visible text from JSX
  // Get text between > and <
  let jsxText = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' '); // Remove JSX comments
  jsxText = jsxText.replace(/className="[^"]*"/g, ''); // Remove classNames
  jsxText = jsxText.replace(/src="[^"]*"/g, '');
  jsxText = jsxText.replace(/href="[^"]*"/g, '');
  jsxText = jsxText.replace(/alt="([^"]*)"/g, '$1');
  jsxText = jsxText.replace(/<[^>]+>/g, ' '); // Remove HTML tags
  jsxText = jsxText.replace(/&apos;/g, "'");
  jsxText = jsxText.replace(/&amp;/g, '&');
  jsxText = jsxText.replace(/&quot;/g, '"');
  jsxText = jsxText.replace(/\{[^}]*\}/g, ' '); // Remove JS expressions
  jsxText = jsxText.replace(/\/\*[\s\S]*?\*\//g, ' ');
  jsxText = jsxText.replace(/\/\/.*$/gm, '');
  
  // Clean SVG paths and noise
  jsxText = jsxText.replace(/[MmLlHhVvCcSsQqTtAaZz]\d[\d.,\s]*/g, ' ');
  jsxText = jsxText.replace(/d="[^"]*"/g, '');
  jsxText = jsxText.replace(/stroke\w*="[^"]*"/g, '');
  jsxText = jsxText.replace(/fill="[^"]*"/g, '');
  
  // Combine and clean
  let text = [metaText, jsonLdText, jsxText].join(' ');
  text = text.replace(/\s+/g, ' ').trim();
  
  // Remove very short words sequences and noise
  text = text.replace(/\b[a-z]{1,2}\b/gi, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

function extractCleanContent(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  
  // Better approach: extract specific data structures and text
  const result = { title: '', description: '', features: [], specs: [], content: '' };
  
  // Extract title from metadata
  const titleMatch = raw.match(/title:\s*["`']([^"`']+)["`']/);
  if (titleMatch) result.title = titleMatch[1];
  
  // Extract description
  const descMatch = raw.match(/description:\s*["`']([^"`']+)["`']/);
  if (descMatch) result.description = descMatch[1];
  
  // Extract text content between JSX tags (visible text)
  const visibleTexts = [];
  
  // Get text from h1, h2, h3, p tags
  const tagRegex = />\s*\n?\s*([A-ZÀ-Ü][^<{]*[a-zà-ü.!?])\s*\n?\s*</g;
  let match;
  while ((match = tagRegex.exec(raw)) !== null) {
    const text = match[1].trim().replace(/&apos;/g, "'").replace(/&amp;/g, '&');
    if (text.length > 15 && !text.includes('className') && !text.includes('svg') && !text.match(/^[A-Z][a-z]+\s*$/)) {
      visibleTexts.push(text);
    }
  }
  
  // Also extract strings from template literals and string props
  const stringRegex = /["`]([A-ZÀ-Ü][^"`]{20,})["`]/g;
  while ((match = stringRegex.exec(raw)) !== null) {
    const text = match[1].trim();
    if (!text.includes('{') && !text.includes('className') && !text.includes('http') && !text.includes('import')) {
      visibleTexts.push(text);
    }
  }
  
  // Extract specs arrays
  const specsMatch = raw.match(/const\s+specs\w*\s*(?::\s*\[[^\]]*\])?\s*=\s*\[([\s\S]*?)\];/);
  if (specsMatch) {
    const specPairs = specsMatch[1].match(/\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/g) || [];
    for (const pair of specPairs) {
      const m = pair.match(/\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/);
      if (m) result.specs.push(`${m[1]}: ${m[2]}`);
    }
  }
  
  // Extract features
  const featuresMatch = raw.match(/const\s+features\s*=\s*\[([\s\S]*?)\];/);
  if (featuresMatch) {
    const titleMatches = featuresMatch[1].match(/title:\s*"([^"]+)"/g) || [];
    const descMatches = featuresMatch[1].match(/desc:\s*"([^"]+)"/g) || [];
    for (let i = 0; i < titleMatches.length; i++) {
      const t = titleMatches[i]?.match(/"([^"]+)"/)?.[1] || '';
      const d = descMatches[i]?.match(/"([^"]+)"/)?.[1] || '';
      if (t) result.features.push(`${t}: ${d}`);
    }
  }
  
  result.content = [...new Set(visibleTexts)].join(' ');
  return result;
}

function processDirectory(dir, category, sourcePrefix) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pagePath = path.join(dir, entry.name, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    
    const slug = entry.name;
    const data = extractCleanContent(pagePath);
    const source = `${sourcePrefix}/${slug}`;
    const title = data.title || slug.replace(/-/g, ' ');
    
    // Build clean content
    let content = '';
    if (data.description) content += data.description + '\n\n';
    if (data.features.length > 0) content += 'Caratteristiche: ' + data.features.join('. ') + '\n\n';
    if (data.specs.length > 0) content += 'Specifiche tecniche: ' + data.specs.join('. ') + '\n\n';
    if (data.content) content += data.content;
    
    // Trim to ~500 words
    const words = content.split(/\s+/);
    if (words.length > 500) content = words.slice(0, 500).join(' ');
    
    if (content.length > 50) {
      chunks.push({ source, title, content: content.trim(), category });
    }
  }
}

// Process all directories
processDirectory(path.join(APP, 'prodotti'), 'prodotto', '/prodotti');
processDirectory(path.join(APP, 'soluzioni'), 'soluzione', '/soluzioni');
processDirectory(path.join(APP, 'brand'), 'brand', '/brand');
processDirectory(path.join(APP, 'blog'), 'blog', '/blog');

// Process chi-siamo and contatti
for (const page of ['chi-siamo', 'contatti']) {
  const pagePath = path.join(APP, page, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    const data = extractCleanContent(pagePath);
    let content = '';
    if (data.description) content += data.description + '\n\n';
    if (data.content) content += data.content;
    const words = content.split(/\s+/);
    if (words.length > 500) content = words.slice(0, 500).join(' ');
    if (content.length > 50) {
      chunks.push({ source: `/${page}`, title: data.title || page, content: content.trim(), category: 'azienda' });
    }
  }
}

// Add manually curated company info
chunks.push({
  source: '/azienda',
  title: 'Print Solution - Chi Siamo',
  content: `Print Solution S.r.l. è un'azienda specializzata nella vendita e assistenza di macchinari per stampa digitale, etichette adesive e packaging. Sede: Via Milanese 7, 20099 Sesto San Giovanni (MI). Telefono: 02 3652 7093. Email: info@printsolutionsrl.it. 
Print Solution è distributore ufficiale dei brand Afinia Label, DTM Print, Anypack e Greenbox. Offre soluzioni complete per la produzione di etichette in bobina, packaging personalizzato, scatole in cartone ondulato e nobilitazione con hot foil.
Servizi: vendita macchinari, assistenza tecnica, sala demo per prove stampa, consulenza personalizzata, formazione, consumabili e ricambi originali.
Settori serviti: alimentare, cosmetico, farmaceutico, vino e bevande, industria, logistica, e-commerce.`,
  category: 'azienda'
});

chunks.push({
  source: '/contatti',
  title: 'Contatti Print Solution',
  content: `Per contattare Print Solution:
- Telefono: 02 3652 7093
- Email: info@printsolutionsrl.it
- Indirizzo: Via Milanese 7, 20099 Sesto San Giovanni (MI)
- Orari: Lunedì-Venerdì 9:00-18:00
- Sala Demo: disponibile su appuntamento per prove stampa gratuite
- Sito web: https://www.printsolutionsrl.it
- Richiedi preventivo o demo dal sito web nella sezione Contatti.`,
  category: 'azienda'
});

// Add product summaries for better search
const productSummaries = [
  {
    source: '/prodotti/ab2500',
    title: 'Anypack AB2500 - Box Maker Automatico',
    content: `L'Anypack AB2500 è un box maker completamente automatico per la produzione di scatole in cartone ondulato. Esegue taglio, scanalatura, cordonatura e incollaggio in un'unica operazione. Produttività: 500-600 scatole/ora. Cambio formato in 10 secondi. Lavora cartone da 1 a 7mm di spessore. Sistema di incollaggio a caldo e a freddo. Ideale per scatolifici, centri logistica e produzione on-demand di imballaggi personalizzati. Brand: Anypack. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-dc350',
    title: 'Afinia DC250 / DC350 - Fustellatori Semi-Rotativi',
    content: `Afinia DC250 e DC350 sono fustellatori semi-rotativi per etichette. Offrono laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Velocità fino a 30 m/min. Larghezza nastro: DC250 fino a 250mm, DC350 fino a 350mm. Fustelle flessibili in acciaio 130×360mm. Sensore di registro per allineamento preciso. Ideali per la finitura di etichette stampate in digitale. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-dlf',
    title: 'Afinia DLF-220L / DLF-350L - Fustellatori Digitali',
    content: `Afinia DLF-220L e DLF-350L sono fustellatori digitali plotter per etichette. Taglio a plotter di qualsiasi forma senza fustelle fisiche, direttamente da file digitale. Laminazione in linea, rimozione sfrido e slitting. Nessuna fustella da acquistare, ideale per tirature brevi, prototipi e produzione on-demand. DLF-220L: nastro fino a 220mm. DLF-350L: nastro fino a 350mm. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-dlp2200',
    title: 'Afinia DLP-2200 - Digital Label Press',
    content: `Afinia DLP-2200 è una digital label press completa per la stampa di etichette in bobina a colori. Tecnologia inkjet Memjet con testina da 222mm. Risoluzione fino a 1600x1585 DPI. Velocità fino a 18 m/min. Stampa su bobina con svolgitore e riavvolgitore integrati. Ideale per produzione interna di etichette professionali a colori. Supporta vari materiali: carta, polipropilene, poliestere. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-l901',
    title: 'Afinia L901 - Stampante Etichette Industriale',
    content: `Afinia L901 è una stampante industriale per etichette a colori con tecnologia Memjet. Velocità fino a 18 m/min. Risoluzione 1600x1585 DPI. Stampa su bobina continua. Inchiostri a base acqua resistenti. Ideale per volumi medio-alti di etichette per alimentare, cosmetica, bevande, farmaceutico. Basso costo per etichetta. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-lt5c',
    title: 'Afinia LT5C - Stampante Etichette Desktop',
    content: `Afinia LT5C è una stampante desktop per etichette a colori. Compatta e facile da usare, ideale per piccole tirature e stampa on-demand. Tecnologia inkjet a 5 colori (CMYK + bianco opzionale). Stampa su diversi materiali adesivi. Perfetta per start-up, piccole aziende, laboratori e produttori artigianali. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/afinia-x350',
    title: 'Afinia X350 - Stampante Etichette',
    content: `Afinia X350 è una stampante per etichette professionale. Stampa etichette a colori di alta qualità su bobina. Tecnologia avanzata per risultati professionali. Brand: Afinia Label. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/any-002',
    title: 'Anypack ANY-002 - Stampante Single-Pass per Packaging',
    content: `Anypack ANY-002 è una stampante single-pass per cartone ondulato e packaging. Stampa diretta su cartone con tecnologia inkjet single-pass ad alta velocità. Ideale per personalizzazione di scatole, packaging brandizzato e stampa industriale su cartone. Risoluzione elevata, velocità di produzione industriale. Brand: Anypack. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/any-press',
    title: 'Anypack ANY-PRESS - Stampante Single-Pass Grande Formato',
    content: `Anypack ANY-PRESS è una stampante single-pass grande formato per cartone ondulato. Stampa digitale diretta su cartone di grandi dimensioni. Velocità industriale con qualità elevata. Ideale per grandi produttori di packaging, scatolifici e aziende di logistica che necessitano di stampa personalizzata su cartone ondulato. Brand: Anypack. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/aurumpress',
    title: 'AurumPress - Stampatrice Hot Foil',
    content: `AurumPress è una stampatrice termica per applicazione hot foil (lamina a caldo). Permette la nobilitazione di etichette, packaging e materiali stampati con effetti metallizzati oro, argento e altri colori. Tecnologia hot foil stamping per finiture premium. Ideale per etichette di vino, cosmetici, prodotti di lusso e packaging premium. Brand: DTM Print. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/edm-650x',
    title: 'EDM-650X - Macchina da Taglio',
    content: `EDM-650X è una macchina da taglio per cartone e materiali per packaging. Precisione di taglio elevata per la produzione di scatole e imballi personalizzati. Brand: distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/greenbox-evo',
    title: 'GreenBox EVO - Box Maker',
    content: `GreenBox EVO è un box maker per la produzione di scatole in cartone ondulato. Macchina compatta e versatile per la produzione on-demand di imballaggi. Taglio, cordonatura e piegatura automatici. Ideale per e-commerce, logistica e produzione di scatole su misura. Brand: Greenbox. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/greenbox-print-book',
    title: 'GreenBox Print&Book - Box Maker con Stampa',
    content: `GreenBox Print&Book è un box maker con stampa integrata. Combina la produzione di scatole con la stampa digitale diretta sul cartone. Produzione completa di scatole personalizzate in un'unica macchina. Ideale per packaging brandizzato, e-commerce e piccole-medie tirature. Brand: Greenbox. Distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/packprinter-uv',
    title: 'PackPrinter UV - Stampante UV per Packaging',
    content: `PackPrinter UV è una stampante UV per packaging e cartone. Stampa con inchiostri UV che asciugano istantaneamente, garantendo resistenza e qualità su diversi materiali. Ideale per packaging, espositori, cartone ondulato e materiali rigidi. Brand: distribuito da Print Solution.`,
    category: 'prodotto'
  },
  {
    source: '/prodotti/robotjet',
    title: 'RobotJet - Stampante Inkjet Industriale',
    content: `RobotJet è una stampante inkjet industriale per la stampa diretta su cartone ondulato e packaging. Alta velocità e qualità di stampa per applicazioni industriali. Integrazione in linee di produzione esistenti. Brand: distribuito da Print Solution.`,
    category: 'prodotto'
  }
];

chunks.push(...productSummaries);

// Add solution summaries
const solutionSummaries = [
  {
    source: '/soluzioni/etichette',
    title: 'Soluzioni per Etichette',
    content: `Print Solution offre soluzioni complete per la stampa di etichette adesive in bobina. Stampanti inkjet a colori (Afinia L901, LT5C, DLP-2200, X350), fustellatori digitali (DLF-220L/350L) e semi-rotativi (DC250/DC350), laminazione e finitura. Ideale per etichette alimentari, cosmetiche, farmaceutiche, vino e bevande, industriali. Produzione interna di etichette professionali a colori con tirature da pochi pezzi a migliaia.`,
    category: 'soluzione'
  },
  {
    source: '/soluzioni/packaging',
    title: 'Soluzioni per Packaging',
    content: `Print Solution offre soluzioni per la produzione di packaging personalizzato. Stampanti single-pass per cartone ondulato (Anypack ANY-002, ANY-PRESS), box maker automatici (AB2500, GreenBox EVO, Print&Book), macchine da taglio e fustellatura. Produzione on-demand di scatole personalizzate, packaging brandizzato e imballi su misura.`,
    category: 'soluzione'
  },
  {
    source: '/soluzioni/labbratura',
    title: 'Soluzioni per Labbratura e Nobilitazione',
    content: `Print Solution offre soluzioni per la nobilitazione di stampe con hot foil stamping. AurumPress per applicazione di lamina a caldo (oro, argento, colori metallizzati) su etichette e packaging. Finiture premium per prodotti di lusso, vino, cosmetica.`,
    category: 'soluzione'
  },
  {
    source: '/soluzioni/consumabili',
    title: 'Consumabili e Ricambi',
    content: `Print Solution fornisce consumabili originali e compatibili per tutte le macchine distribuite: inchiostri, cartucce, testine di stampa, fustelle, laminati, foil per hot stamping, materiali per etichette (carta, polipropilene, poliestere), cartone per box maker. Assistenza tecnica e ricambi con spedizione rapida.`,
    category: 'soluzione'
  },
  {
    source: '/soluzioni/shopper',
    title: 'Soluzioni per Shopper',
    content: `Print Solution offre soluzioni per la produzione di shopper e buste personalizzate. Stampa digitale su shopper di carta con personalizzazione completa. Ideale per negozi, eventi, brand che vogliono packaging di presentazione personalizzato.`,
    category: 'soluzione'
  }
];
chunks.push(...solutionSummaries);

// Add brand summaries
const brandSummaries = [
  {
    source: '/brand/afinia-label',
    title: 'Afinia Label - Brand Stampanti Etichette',
    content: `Afinia Label è un brand specializzato in stampanti e sistemi di finitura per etichette. Print Solution è distributore ufficiale Afinia Label in Italia. Prodotti: stampanti etichette L901, LT5C, DLP-2200, X350, fustellatori DC250/DC350 e DLF-220L/DLF-350L.`,
    category: 'brand'
  },
  {
    source: '/brand/anypack',
    title: 'Anypack - Brand Macchinari Packaging',
    content: `Anypack è un brand di macchinari per la produzione di packaging e scatole. Print Solution è distributore Anypack in Italia. Prodotti: box maker AB2500, stampanti single-pass ANY-002 e ANY-PRESS per cartone ondulato.`,
    category: 'brand'
  },
  {
    source: '/brand/dtm-print',
    title: 'DTM Print - Brand Stampa e Finitura',
    content: `DTM Print è un brand di soluzioni per stampa e finitura. Print Solution distribuisce DTM Print in Italia. Prodotti principali: AurumPress per hot foil stamping e nobilitazione.`,
    category: 'brand'
  },
  {
    source: '/brand/greenbox',
    title: 'Greenbox - Brand Box Maker',
    content: `Greenbox è un brand specializzato in box maker per la produzione di scatole. Print Solution è distributore Greenbox in Italia. Prodotti: GreenBox EVO e GreenBox Print&Book per produzione on-demand di scatole in cartone ondulato.`,
    category: 'brand'
  }
];
chunks.push(...brandSummaries);

console.log(`Generated ${chunks.length} chunks`);

// Write output
const outPath = path.join(ROOT, 'src', 'data', 'kb-chunks.json');
fs.writeFileSync(outPath, JSON.stringify(chunks, null, 2), 'utf-8');
console.log(`Written to ${outPath}`);
console.log(`File size: ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB`);
