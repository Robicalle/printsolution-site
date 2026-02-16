const fs = require('fs');
const path = require('path');

const base = 'C:/Users/Jarvis/.openclaw/workspace/website/src/app/[locale]';

function getAllTsx(dir) {
  let r = [];
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) r = r.concat(getAllTsx(fp));
    else if (f.endsWith('.tsx')) r.push(fp);
  }
  return r;
}

// Global replacements applied to ALL files
const globalReplacements = [
  // Common UI elements
  ['Richiedi Demo →', 'Request Demo →'],
  ['Richiedi Demo', 'Request Demo'],
  ['Richiedi una Demo', 'Request a Demo'],
  ['Contattaci', 'Contact Us'],
  ['Contattaci →', 'Contact Us →'],
  ['Scopri di più', 'Learn More'],
  ['Scopri di più →', 'Learn More →'],
  ['Prodotti Correlati', 'Related Products'],
  ['Vantaggi Principali', 'Key Benefits'],
  ['Specifiche Tecniche', 'Technical Specifications'],
  ['Prenota una Visita', 'Book a Visit'],
  ['Leggi →', 'Read →'],
  ['← Torna al Blog', '← Back to Blog'],
  ['Resta Aggiornato', 'Stay Updated'],
  ['Lavoriamo Insieme', "Let's Work Together"],
  // Common labels
  ['>Prodotti<', '>{locale === \'it\' ? \'Prodotti\' : \'Products\'}<'],
  ['>Video<', '>{locale === \'it\' ? \'Video\' : \'Video\'}<'],
];

// Per-file translations
const fileTranslations = {};

// Helper: create replacement pair for JSX text content
// Replaces "Italian text" with ternary
function t(it, en) {
  return [it, en];
}

// ==================== PRODUCT PAGES ====================

fileTranslations['prodotti/ab2500/page.tsx'] = [
  t('Tipo macchina', 'Machine Type'),
  t('Box maker automatico all-in-one', 'Automatic all-in-one box maker'),
  t('Operazioni', 'Operations'),
  t('Taglio, scanalatura, cordonatura, incollaggio', 'Cutting, scoring, creasing, gluing'),
  t('Produttività', 'Productivity'),
  t('500-600 scatole/ora', '500-600 boxes/hour'),
  t('Cambio formato', 'Format Change'),
  t('10 secondi', '10 seconds'),
  t('Spessore cartone', 'Cardboard Thickness'),
  t('Da 1 a 7 mm', 'From 1 to 7 mm'),
  t('Incollaggio', 'Gluing'),
  t('A caldo e a freddo', 'Hot and cold'),
  t('Automazione', 'Automation'),
  t('Completamente automatico', 'Fully automatic'),
  t('Alta Produttività', 'High Productivity'),
  t("500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.", '500-600 boxes per hour: industrial production with a single compact and versatile machine.'),
  t('Cambio Formato in 10 secondi', 'Format Change in 10 Seconds'),
  t('Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.', 'Instant switching between different formats without machine downtime. Maximum production flexibility.'),
  t('All-in-One', 'All-in-One'),
  t("Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.", 'Cutting, scoring, creasing and gluing in a single automatic operation. Zero manual steps.'),
  t('Cartone da 1 a 7mm', 'Cardboard from 1 to 7mm'),
  t('Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.', 'Works with a wide range of thicknesses, from light cardboard up to 7mm for heavy packaging.'),
  t('Doppio Incollaggio', 'Dual Gluing'),
  t('Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.', 'Hot and cold gluing system to adapt to any type of cardboard and application.'),
  t('ROI Rapido', 'Fast ROI'),
  t("L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.", 'Complete automation reduces labor costs and increases productivity. Quick return on investment.'),
  t('Produzione Automatica di Scatole', 'Automatic Box Production'),
  t('Automatizza la Produzione di Scatole', 'Automate Your Box Production'),
  t('AB2500 in Azione', 'AB2500 in Action'),
  t('Stampante single-pass per packaging', 'Single-pass printer for packaging'),
  t('Stampante single-pass grande formato', 'Large format single-pass printer'),
  t('Stampatrice termica per foil', 'Thermal foil printer'),
];

fileTranslations['prodotti/edm-650x/page.tsx'] = [
  t('Tecnologia', 'Technology'),
  t('Inkjet single-pass CMYK', 'CMYK single-pass inkjet'),
  t('Teste di stampa', 'Print Heads'),
  t('Da 2 a 6 teste HP (30 cm ciascuna)', 'From 2 to 6 HP heads (30 cm each)'),
  t('Risoluzione', 'Resolution'),
  t('Velocità di stampa', 'Print Speed'),
  t('Fino a 30 m/min', 'Up to 30 m/min'),
  t('Larghezza stampa', 'Print Width'),
  t('Da 60 a 180 cm', 'From 60 to 180 cm'),
  t('Passaggio carta', 'Paper Feed'),
  t('Da 120 a 250 cm', 'From 120 to 250 cm'),
  t('Modelli disponibili', 'Available Models'),
  t('6 configurazioni', '6 configurations'),
  t('Inchiostri', 'Inks'),
  t('A base acqua CMYK, taniche 4L/colore', 'Water-based CMYK, 4L tanks/color'),
  t('Piano', 'Table'),
  t('Aspirato con pompa a vuoto', 'Vacuum with pump'),
  t('Software RIP', 'RIP Software'),
  t('Incluso', 'Included'),
  t('Alimentatore', 'Feeder'),
  t('Caricatore automatico opzionale', 'Optional automatic feeder'),
  t('Opzioni', 'Options'),
  t('Stampa bobina a bobina', 'Roll-to-roll printing'),
  t('Grande Formato', 'Large Format'),
  t('Velocità Industriale', 'Industrial Speed'),
  t('Inchiostri a Base Acqua', 'Water-Based Inks'),
  t('6 Configurazioni', '6 Configurations'),
  t('Bobina a Bobina', 'Roll to Roll'),
  t('Software RIP Incluso', 'RIP Software Included'),
  t('Stampa Industriale su Grande Formato', 'Industrial Large Format Printing'),
  t('EDM-650X in Azione', 'EDM-650X in Action'),
  t('Configurazioni', 'Configurations'),
  t('Da 2 a 6 Teste di Stampa', 'From 2 to 6 Print Heads'),
  t('Versione da 3 a 6 Teste', 'Version with 3 to 6 Heads'),
  t('Scopri la EDM-650X dal Vivo', 'See the EDM-650X Live'),
  t('Box maker automatico', 'Automatic box maker'),
];

fileTranslations['prodotti/greenbox-evo/page.tsx'] = [
  t('Stampante single-pass per packaging', 'Single-pass printer for packaging'),
  t('Stampatrice termica per foil', 'Thermal foil printer'),
  t('Box maker automatico', 'Automatic box maker'),
];

fileTranslations['prodotti/packprinter-uv/page.tsx'] = [
  t('Stampante single-pass per packaging', 'Single-pass printer for packaging'),
  t('Stampatrice termica per foil', 'Thermal foil printer'),
  t('Box maker automatico', 'Automatic box maker'),
];

fileTranslations['prodotti/aurumpress/page.tsx'] = [
  t('Stampante single-pass per packaging', 'Single-pass printer for packaging'),
  t('Box maker automatico', 'Automatic box maker'),
];

fileTranslations['prodotti/robotjet/page.tsx'] = [
  t('Stampante single-pass per packaging', 'Single-pass printer for packaging'),
  t('Stampatrice termica per foil', 'Thermal foil printer'),
];

// ==================== SOLUZIONI ====================

fileTranslations['soluzioni/page.tsx'] = [
  t('Le Nostre Soluzioni', 'Our Solutions'),
  t('Non sai quale soluzione fa per te?', "Not sure which solution is right for you?"),
];

// ==================== SHOP ====================

fileTranslations['shop/page.tsx'] = [
  t('Spedizione Rapida', 'Fast Shipping'),
  t('Prodotti Originali', 'Original Products'),
  t('Pagamento Sicuro', 'Secure Payment'),
  t('Seleziona il tuo modello di stampante', 'Select your printer model'),
];

// ==================== CHI SIAMO ====================

fileTranslations['chi-siamo/page.tsx'] = [
  t('La Nostra Storia', 'Our Story'),
  t('Oltre 15 Anni di Esperienza', 'Over 15 Years of Experience'),
  t('I Nostri Valori', 'Our Values'),
  t('Competenza', 'Expertise'),
  t('Partnership', 'Partnership'),
  t('Innovazione', 'Innovation'),
  t('Il Nostro Spazio', 'Our Space'),
  t('Sala Demo', 'Demo Room'),
  t('Il Nostro Team', 'Our Team'),
  t('Anno di fondazione', 'Year founded'),
  t('Anni di esperienza', 'Years of experience'),
  t('Clienti serviti', 'Clients served'),
  t('Brand distribuiti', 'Brands distributed'),
  t('Commerciale', 'Sales'),
  t('Tecnico', 'Technical'),
  t('Assistenza', 'Support'),
];

console.log("Translation Phase 2: This approach is too granular.");
console.log("Switching to full-file rewrite approach for reliability.");
