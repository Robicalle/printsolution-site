/**
 * Comprehensive translation of ALL Italian text in the website.
 * For each file: wraps Italian text with {locale === 'it' ? 'IT' : 'EN'} ternaries.
 * Converts specs arrays to getSpecs(l) functions.
 * Adds titleEn/descEn to feature arrays and updates rendering.
 */

import fs from 'fs';
import path from 'path';

const BASE = 'src/app/[locale]';
function readF(p) { return fs.readFileSync(path.join(BASE, p), 'utf-8'); }
function writeF(p, c) { fs.writeFileSync(path.join(BASE, p), c, 'utf-8'); console.log(`✓ ${p}`); }

// Replace with CRLF awareness
function rep(content, old, newText) {
  if (content.includes(old)) return content.replace(old, newText);
  const oldCRLF = old.replace(/\n/g, '\r\n');
  if (content.includes(oldCRLF)) return content.replace(oldCRLF, newText.replace(/(?<!\r)\n/g, '\r\n'));
  console.log(`  WARN: "${old.substring(0, 70).replace(/\n/g, '\\n')}..."`);
  return content;
}

function repAll(content, old, newText) {
  return content.split(old).join(newText);
}

// Convert specs array to function
function convertSpecs(c, enSpecs) {
  const m = c.match(/const specs = \[([\s\S]*?)\n\];/);
  if (!m) { console.log('  WARN: no specs array found'); return c; }
  const itBlock = m[1];
  const nl = c.includes('\r\n') ? '\r\n' : '\n';
  const enLines = enSpecs.map(([l,v]) => `  ["${l}", "${v}"]`).join(`,${nl}`);
  c = c.replace(m[0], `function getSpecs(l: string) { return l === 'it' ? [${itBlock}${nl}] : [${nl}${enLines},${nl}]; }`);
  c = repAll(c, '{specs.map(', '{getSpecs(locale).map(');
  return c;
}

// Convert specsData (for dc350 which has different format)
function convertSpecsData(c, enSpecs) {
  const m = c.match(/const specsData = \[([\s\S]*?)\n\];/);
  if (!m) return c;
  const itBlock = m[1];
  const nl = c.includes('\r\n') ? '\r\n' : '\n';
  const enLines = enSpecs.map(s => `  { label: "${s.label}", dc250: "${s.dc250}", dc350: "${s.dc350}" }`).join(`,${nl}`);
  c = c.replace(m[0], `function getSpecsData(l: string) { return l === 'it' ? [${itBlock}${nl}] : [${nl}${enLines},${nl}]; }`);
  c = repAll(c, '{specsData.map(', '{getSpecsData(locale).map(');
  return c;
}

// Add English translations to features array
function translateFeatures(c, feats) {
  for (const [tIt, tEn, dIt, dEn] of feats) {
    if (tIt && tEn) c = rep(c, `title: "${tIt}",`, `title: "${tIt}", titleEn: "${tEn}",`);
    if (dIt && dEn) c = rep(c, `desc: "${dIt}",`, `desc: "${dIt}", descEn: "${dEn}",`);
  }
  // Update rendering
  c = repAll(c, '{f.title}</h3>', "{locale === 'it' ? f.title : (f.titleEn || f.title)}</h3>");
  c = repAll(c, '{f.desc}</p>', "{locale === 'it' ? f.desc : (f.descEn || f.desc)}</p>");
  return c;
}

// Wrap JSX Italian text with locale ternary
function wrapJsx(c, pairs) {
  for (const [it, en] of pairs) {
    const itEsc = it.includes("'") && it.includes('"') ? `\`${it}\`` : it.includes("'") ? `"${it}"` : `'${it}'`;
    const enEsc = en.includes("'") && en.includes('"') ? `\`${en}\`` : en.includes("'") ? `"${en}"` : `'${en}'`;
    c = rep(c, it, `{locale === 'it' ? ${itEsc} : ${enEsc}}`);
  }
  return c;
}

// ============================================================
// PRODUCT: AB2500
// ============================================================
function doAB2500() {
  let c = readF('prodotti/ab2500/page.tsx');
  
  c = convertSpecs(c, [
    ["Machine type", "All-in-one automatic box maker"],
    ["Operations", "Cutting, creasing, scoring, gluing"],
    ["Throughput", "500-600 boxes/hour"],
    ["Format changeover", "10 seconds"],
    ["Cardboard thickness", "From 1 to 7 mm"],
    ["Gluing", "Hot and cold"],
    ["Automation", "Fully automatic"],
  ]);

  c = translateFeatures(c, [
    ["Alta Produttività", "High Throughput",
     "500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.",
     "500-600 boxes per hour: industrial production with a single compact and versatile machine."],
    ["Cambio Formato in 10 secondi", "Format Change in 10 Seconds",
     "Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.",
     "Instant switchover between different formats without downtime. Maximum production flexibility."],
    ["All-in-One", "All-in-One",
     "Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.",
     "Cutting, creasing, scoring and gluing in a single automatic operation. Zero manual steps."],
    ["Cartone da 1 a 7mm", "Cardboard 1 to 7mm",
     "Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.",
     "Works with a wide range of thicknesses, from lightweight cardboard up to 7mm for heavy-duty packaging."],
    ["Doppio Incollaggio", "Dual Gluing",
     "Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.",
     "Hot and cold gluing system to adapt to any type of cardboard and application."],
    ["ROI Rapido", "Quick ROI",
     "L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.",
     "Full automation reduces labor costs and increases productivity. Quick return on investment."],
  ]);

  c = wrapJsx(c, [
    ["Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio\n              in un&apos;unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi.",
     "All-in-one automatic box maker. Cutting, creasing, scoring and gluing in a single machine. 500-600 boxes/hour with format change in 10 seconds."],
    ["L&apos;Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura\n            e incollaggio in un&apos;unica operazione. Progettato per la produzione industriale di scatole in cartone\n            ondulato, garantisce una produttività di 500-600 scatole all&apos;ora.",
     "The Anypack AB2500 is a fully automatic box maker that performs cutting, creasing, scoring and gluing in a single operation. Designed for industrial corrugated box production, it delivers a throughput of 500-600 boxes per hour."],
    ["Il cambio formato avviene in soli 10 secondi, eliminando i tempi morti e massimizzando l&apos;efficienza\n            produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri\n            che a scatole per spedizioni pesanti.",
     "Format changeover takes just 10 seconds, eliminating downtime and maximizing production efficiency. The machine handles cardboard from 1 to 7mm thick, adapting to both lightweight packaging and heavy-duty shipping boxes."],
    ["Il sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione.\n            L&apos;AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di\n            produzione on-demand di imballaggi personalizzati.",
     "The hot and cold gluing system allows working with any type of cardboard and application. The AB2500 is the ideal solution for box manufacturers, logistics centers and companies that need on-demand customized packaging production."],
    ["Scopri come l&apos;AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo.",
     "Discover how the AB2500 can revolutionize your production line. Come see it in our demo room."],
  ]);

  writeF('prodotti/ab2500/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA L901
// ============================================================
function doL901() {
  let c = readF('prodotti/afinia-l901/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Memjet Waterfall Inkjet"],
    ["Resolution", "1600 dpi full-color"],
    ["Inks", "CMYKK (dual black)"],
    ["Max print width", "216 mm (8.5 inches)"],
    ["Printhead", "User-replaceable"],
    ["Display", "Built-in touchscreen"],
    ["Cartridges", "High capacity"],
    ["Mode", "Standalone or inline with DLP-2200"],
    ["Maintenance", "Zero downtime"],
  ]);

  c = translateFeatures(c, [
    ["Alta Produttività", "High Productivity",
     "Motore di stampa Memjet Waterfall per produzioni professionali continue con qualità costante a 1600 dpi.",
     "Memjet Waterfall print engine for continuous professional production with consistent quality at 1600 dpi."],
    ["Doppio Nero CMYKK", "Dual Black CMYKK",
     "Configurazione a 5 canali con doppio nero per neri più profondi, testi più nitidi e maggiore autonomia di stampa.",
     "5-channel configuration with dual black for deeper blacks, sharper text and greater print autonomy."],
    ["Testina Sostituibile", "Replaceable Printhead",
     "Testina di stampa sostituibile dall'utente senza fermare la produzione. Zero downtime, massima continuità operativa.",
     "User-replaceable printhead without stopping production. Zero downtime, maximum operational continuity."],
    ["Standalone o In Linea", "Standalone or Inline",
     "Utilizzabile come stampante standalone o integrata nella DLP-2200 per un sistema stampa + finitura completo.",
     "Use as a standalone printer or integrated with the DLP-2200 for a complete print + finishing system."],
    ["Touchscreen Integrato", "Built-in Touchscreen",
     "Display touchscreen per gestione intuitiva dei lavori di stampa, monitoraggio stato e configurazione rapida.",
     "Touchscreen display for intuitive job management, status monitoring and quick configuration."],
    ["Manutenzione Semplificata", "Simplified Maintenance",
     "Manutenzione senza fermo macchina grazie alla testina e alle cartucce sostituibili dall'operatore in pochi secondi.",
     "Zero-downtime maintenance thanks to the printhead and cartridges replaceable by the operator in seconds."],
  ]);

  c = wrapJsx(c, [
    ["Stampanti Etichette", "Label Printers"],
    ["Stampante etichette a colori professionale con tecnologia Memjet Waterfall.\n                Doppio nero per neri più profondi, testina sostituibile dall&apos;utente e possibilità\n                di integrazione in linea con la DLP-2200.",
     "Professional color label printer with Memjet Waterfall technology. Dual black for deeper blacks, user-replaceable printhead and inline integration capability with the DLP-2200."],
    ["Prestazioni Professionali con Tecnologia Memjet Waterfall",
     "Professional Performance with Memjet Waterfall Technology"],
    ["La Afinia L901 è una stampante etichette a colori professionale progettata per produzioni continue ad alta qualità. Equipaggiata con il motore di stampa Memjet Waterfall, raggiunge una risoluzione di 1600 dpi full-color con una configurazione a 5 canali CMYKK (doppio nero) che garantisce neri più profondi, testi più nitidi e una maggiore autonomia di stampa rispetto ai sistemi CMYK tradizionali.",
     "The Afinia L901 is a professional color label printer designed for continuous high-quality production. Equipped with the Memjet Waterfall print engine, it achieves 1600 dpi full-color resolution with a 5-channel CMYKK (dual black) configuration that delivers deeper blacks, sharper text and greater print autonomy compared to traditional CMYK systems."],
    ["La caratteristica distintiva della L901 è la testina di stampa sostituibile dall&apos;utente: in caso di necessità, l&apos;operatore può sostituirla in pochi secondi senza fermare la produzione, eliminando completamente i tempi di fermo macchina. Il display touchscreen integrato consente una gestione intuitiva dei lavori, il monitoraggio dello stato e la configurazione rapida dei parametri di stampa.",
     "The distinctive feature of the L901 is the user-replaceable printhead: when needed, the operator can replace it in seconds without stopping production, completely eliminating downtime. The built-in touchscreen display enables intuitive job management, status monitoring and quick configuration of print parameters."],
    ["Versatile e modulare, la L901 può essere utilizzata come stampante standalone per produzioni indipendenti oppure integrata nella Afinia DLP-2200 per creare un sistema completo stampa + finitura. Questa flessibilità la rende la scelta ideale per aziende che cercano una soluzione scalabile, in grado di crescere insieme alle esigenze produttive.",
     "Versatile and modular, the L901 can be used as a standalone printer for independent production or integrated with the Afinia DLP-2200 to create a complete print + finishing system. This flexibility makes it the ideal choice for companies looking for a scalable solution that grows with their production needs."],
    ["L901 in Azione", "L901 in Action"],
    ["Stampa Etichette Professionali In-House", "Professional In-House Label Printing"],
    ["Scopri come la L901 può trasformare la tua produzione di etichette. Contattaci per una consulenza o vieni a provarla.",
     "Discover how the L901 can transform your label production. Contact us for a consultation or come try it."],
    ["Stampante etichette entry level Memjet", "Entry-level Memjet label printer"],
    ["Digital Label Press completa", "Complete Digital Label Press"],
    ["Stampante roll-to-roll alta velocità", "High-speed roll-to-roll printer"],
  ]);

  writeF('prodotti/afinia-l901/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA DC350
// ============================================================
function doDC350() {
  let c = readF('prodotti/afinia-dc350/page.tsx');

  c = convertSpecsData(c, [
    { label: "Semi-rotary speed", dc250: "Up to 30 m/min", dc350: "Up to 30 m/min" },
    { label: "Max web width", dc250: '250 mm (9.84")', dc350: '350 mm (13.78")' },
    { label: "Min web width", dc250: "100 mm", dc350: "100 mm" },
    { label: "Max die-cut width", dc250: "230 mm", dc350: "330 mm" },
    { label: "Max die-cut length", dc250: "360 mm", dc350: "360 mm" },
    { label: "Input roll diameter", dc250: "500 mm", dc350: "500 mm" },
    { label: "Roll holder", dc250: 'Mechanical (3")', dc350: 'Pneumatic (3")' },
    { label: "Lamination", dc250: "Yes — self-wound and with liner", dc350: "Yes — self-wound and with liner" },
    { label: "Max laminate diameter", dc250: "250 mm", dc350: "250 mm" },
    { label: "UV varnish module", dc250: "Yes", dc350: "Yes" },
    { label: "Dies", dc250: "Flexible steel, 130×360 mm", dc350: "Flexible steel, 130×360 mm" },
    { label: "Magnetic cylinder", dc250: '18" - 2144 mod. 1/8', dc350: '18" - 2144 mod. 1/8' },
    { label: "Register sensor", dc250: "Laser, 4×4 mm", dc350: "Laser, 4×4 mm" },
    { label: "Label rewinding", dc250: "Max 400 mm", dc350: "Max 400 mm" },
    { label: "Waste rewinding", dc250: "Max 300 mm", dc350: "Max 300 mm" },
    { label: "Slitting blades", dc250: "Up to 12", dc350: "Up to 15" },
    { label: "Dimensions", dc250: "283 × 72 × 165 cm", dc350: "283 × 100 × 165 cm" },
    { label: "Power supply", dc250: "100-240V, ~1kW, 50/60Hz", dc350: "100-240V, ~1kW, 50/60Hz" },
  ]);

  c = translateFeatures(c, [
    ["Laminazione Avanzata", "Advanced Lamination",
     "Protegge le etichette da usura, graffi e condizioni ambientali. Supporta laminati self-wound e su liner per una finitura premium e duratura.",
     "Protects labels from wear, scratches and environmental conditions. Supports self-wound and liner laminates for a premium, long-lasting finish."],
    ["Fustellatura Semi-Rotativa", "Semi-Rotary Die-Cutting",
     "Cilindri magnetici con fustelle flessibili in acciaio: economiche, veloci da produrre e sostituire. Cambio lavoro rapidissimo per massima produttività.",
     "Magnetic cylinders with flexible steel dies: economical, quick to produce and replace. Ultra-fast job changeover for maximum productivity."],
    ["Rimozione Sfrido Automatica", "Automatic Waste Removal",
     "Il sistema integrato elimina automaticamente il materiale in eccesso dopo la fustellatura, lasciando etichette perfettamente sagomate.",
     "The integrated system automatically removes excess material after die-cutting, leaving perfectly shaped labels."],
    ["Slitting e Riavvolgimento", "Slitting and Rewinding",
     "Trasforma bobine larghe in bobine più strette pronte per l'applicazione. Fino a 15 lame di slitting per creare più formati da una singola tiratura.",
     "Converts wide rolls into narrower rolls ready for application. Up to 15 slitting blades to create multiple formats from a single run."],
    ["Velocità fino a 30 m/min", "Speed up to 30 m/min",
     "Produzione ad alta velocità per gestire tirature medio-grandi con efficienza. Ideale per etichettifici che richiedono volumi costanti e tempi rapidi.",
     "High-speed production for efficient handling of medium-to-large runs. Ideal for label producers requiring consistent volumes and quick turnaround."],
    ["Cambio Lavoro Rapido", "Quick Job Changeover",
     "Setup minimo tra un lavoro e l'altro grazie ai cilindri magnetici intercambiabili. Riduci i tempi morti e massimizza la produttività quotidiana.",
     "Minimal setup between jobs thanks to interchangeable magnetic cylinders. Reduce downtime and maximize daily productivity."],
  ]);

  c = wrapJsx(c, [
    ["Fustellatura Semi-Rotativa", "Semi-Rotary Die-Cutting"],
    ["Fustellatori semi-rotativi professionali con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a <strong className=\"text-white\">30 m/min</strong>.",
     "Professional semi-rotary die-cutters with lamination, flexible steel die-cutting, waste removal, slitting and rewinding. Up to <strong className=\"text-white\">30 m/min</strong>."],
    ["Richiedi Informazioni", "Request Information"],
    ["DC350 in Azione", "DC350 in Action"],
    ["Confronto", "Comparison"],
    ["Specifica", "Specification"],
    ["Fustellatori digitali plotter (senza fustelle)", "Digital plotter die-cutters (no physical dies)"],
    ["Stampante etichette professionale Memjet", "Professional Memjet label printer"],
    ["Digital Label Press completa", "Complete Digital Label Press"],
    ["Vuoi Vedere DC250/DC350 in Azione?", "Want to See DC250/DC350 in Action?"],
    ["Contattaci per una demo dal vivo nella nostra sala demo a Sesto San Giovanni.",
     "Contact us for a live demo in our showroom in Sesto San Giovanni."],
    ["Prenota una Demo", "Book a Demo"],
  ]);

  writeF('prodotti/afinia-dc350/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA DLF
// ============================================================
function doDLF() {
  let c = readF('prodotti/afinia-dlf/page.tsx');

  c = convertSpecs(c, [
    ["Cutting technology", "Digital plotter (no physical dies)"],
    ["Web width (DLF-220L)", '220 mm (8.6")'],
    ["Web width (DLF-350L)", '350 mm (13.75")'],
    ["Inline lamination", "Yes (L models)"],
    ["Shape cutting", "Any shape from digital file"],
    ["Waste removal", "Automatic integrated"],
    ["Slitting", "Integrated"],
    ["Rewinding", "Finished rolls ready for application"],
    ["Ideal for", "Short runs, prototypes, on-demand"],
  ]);

  c = translateFeatures(c, [
    ["Taglio Senza Fustelle", "Die-Free Cutting",
     "Tecnologia plotter che taglia qualsiasi forma direttamente da file digitale. Nessuna fustella fisica da acquistare, nessun tempo di attesa per la produzione degli utensili.",
     "Plotter technology that cuts any shape directly from digital file. No physical dies to purchase, no waiting time for tooling production."],
    ["Laminazione Integrata", "Integrated Lamination",
     'I modelli "L" includono laminazione in linea per proteggere le etichette e garantire una finitura professionale resistente a graffi e umidità.',
     'The "L" models include inline lamination to protect labels and ensure a professional finish resistant to scratches and moisture.'],
    ["Processo Completo in Uno", "Complete Process in One",
     "Svolgi, lamina, taglia, rimuovi sfrido, slitting e riavvolgimento è tutto in un unico passaggio. Etichette pronte per l'applicazione in uscita.",
     "Unwind, laminate, cut, waste removal, slitting and rewinding — all in a single pass. Labels ready for application at the output."],
    ["Ideale per Tirature Brevi", "Ideal for Short Runs",
     "Perfetto per piccole tirature, prototipi e stampa on-demand. Permette ai tipografi di gestire internamente lavori brevi con tempi di consegna rapidi e qualità elevata.",
     "Perfect for short runs, prototypes and on-demand printing. Allows printers to handle short jobs in-house with quick turnaround and high quality."],
    ["Nessun Costo Utensili", "No Tooling Costs",
     "Elimina completamente i costi delle fustelle tradizionali. Ogni forma diversa è solo un file: cambi design in pochi click senza attendere la produzione di nuovi utensili.",
     "Completely eliminates the cost of traditional dies. Every different shape is just a file: change designs in a few clicks without waiting for new tooling."],
    ["Cambio Lavoro Istantaneo", "Instant Job Changeover",
     "Passa da un design all'altro in secondi: basta caricare il nuovo file di taglio. Zero setup meccanico, zero tempi morti tra una commessa e l'altra.",
     "Switch between designs in seconds: just load the new cutting file. Zero mechanical setup, zero downtime between jobs."],
  ]);

  c = wrapJsx(c, [
    ["Fustellatura Digitale", "Digital Die-Cutting"],
    ["Fustellatori digitali a plotter: tagliano <strong className=\"text-white\">qualsiasi forma</strong> da file digitale, senza fustelle fisiche. Laminazione, rimozione sfrido, slitting e riavvolgimento in un unico passaggio.",
     "Digital plotter die-cutters: cut <strong className=\"text-white\">any shape</strong> from digital file, with no physical dies. Lamination, waste removal, slitting and rewinding in a single pass."],
    ["Richiedi Informazioni", "Request Information"],
    ["DLF in Azione", "DLF in Action"],
    ["Dettagli", "Details"],
    ["Specifiche Tecniche", "Technical Specifications"],
    ["Fustellatori semi-rotativi per alti volumi", "Semi-rotary die-cutters for high volumes"],
    ["Stampante etichette professionale Memjet", "Professional Memjet label printer"],
    ["Stampante roll-to-roll alta Velocità", "High-speed roll-to-roll printer"],
    ["Vuoi Vedere la DLF in Azione?", "Want to See the DLF in Action?"],
    ["Contattaci per una demo o per ricevere campioni di etichette fustellate con i tuoi file.",
     "Contact us for a demo or to receive sample labels die-cut with your files."],
    ["Prenota una Demo", "Book a Demo"],
  ]);

  writeF('prodotti/afinia-dlf/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA DLP-2200
// ============================================================
function doDLP2200() {
  let c = readF('prodotti/afinia-dlp2200/page.tsx');

  c = convertSpecs(c, [
    ["System", "L901 + DLF-220L integrated"],
    ["Technology", "Memjet Waterfall + digital plotter"],
    ["Print resolution", "1600 dpi full-color"],
    ["Inks", "CMYKK (dual black)"],
    ["Max print width", "216 mm (8.5 inches)"],
    ["Inline lamination", "Self-wound and with liner"],
    ["Die-cutting", "Digital plotter (no physical dies)"],
    ["Waste removal", "Automatic"],
    ["Slitting and rewinding", "Integrated, rolls ready for use"],
    ["Throughput", "25,000+ labels/hour"],
    ["User-replaceable printhead", "Yes — zero downtime"],
  ]);

  c = translateFeatures(c, [
    ["Dalla Bobina all'Etichetta Finita", "From Roll to Finished Label",
     "Un unico sistema integrato che gestisce stampa, laminazione, fustellatura, rimozione sfrido, slitting e riavvolgimento. Nessun passaggio manuale intermedio.",
     "A single integrated system that handles printing, lamination, die-cutting, waste removal, slitting and rewinding. No intermediate manual steps."],
    ["25.000+ Etichette/Ora", "25,000+ Labels/Hour",
     "Produttività industriale con motore Memjet Waterfall e processo continuo. Ideale per tirature medio-grandi senza compromessi sulla qualità.",
     "Industrial productivity with Memjet Waterfall engine and continuous process. Ideal for medium-to-large runs without compromising on quality."],
    ["Fustellatura Senza Fustelle", "Die-Free Die-Cutting",
     "La sezione DLF-220L taglia qualsiasi forma da file digitale. Zero costi per fustelle fisiche, cambio design istantaneo.",
     "The DLF-220L section cuts any shape from digital file. Zero costs for physical dies, instant design change."],
    ["Laminazione in Linea", "Inline Lamination",
     "Protegge automaticamente le etichette con laminato self-wound o su liner. Finitura premium senza processi aggiuntivi.",
     "Automatically protects labels with self-wound or liner laminate. Premium finish without additional processes."],
    ["Testina Sostituibile dall'Utente", "User-Replaceable Printhead",
     "La testina Memjet è sostituibile dall'operatore in pochi secondi, senza fermare la produzione. Massima continuità operativa.",
     "The Memjet printhead is replaceable by the operator in seconds, without stopping production. Maximum operational continuity."],
    ["Scalabilità Modulare", "Modular Scalability",
     "L901 e DLF-220L possono funzionare anche separatamente. Investimento modulare che cresce con le tue esigenze.",
     "L901 and DLF-220L can also work separately. Modular investment that grows with your needs."],
  ]);

  c = wrapJsx(c, [
    ["Digital Label Press", "Digital Label Press"],
    ["Sistema completo dalla bobina bianca all&apos;etichetta finita. Stampa,\n                laminazione, fustellatura, rimozione sfridi, slitting e riavvolgimento in un unico flusso continuo.\n                Più di 25.000 etichette/ora.",
     "Complete system from blank roll to finished label. Printing, lamination, die-cutting, waste removal, slitting and rewinding in a single continuous flow. More than 25,000 labels/hour."],
    ["Il Sistema Completo per Etichette Professionali",
     "The Complete System for Professional Labels"],
    ["La Afinia DLP-2200 è la Digital Label Press che unisce la stampante Afinia L901 con il fustellatore digitale DLF-220L in un unico sistema integrato. Dalla bobina bianca all&apos;etichetta finita, la DLP-2200 gestisce l&apos;intero processo: stampa a 1600 dpi con doppio nero CMYKK, laminazione protettiva, fustellatura digitale senza fustelle fisiche, rimozione automatica dello sfrido, slitting e riavvolgimento su bobine pronte per l&apos;applicazione.",
     "The Afinia DLP-2200 is the Digital Label Press that combines the Afinia L901 printer with the DLF-220L digital die-cutter in a single integrated system. From blank roll to finished label, the DLP-2200 handles the entire process: 1600 dpi printing with dual black CMYKK, protective lamination, digital die-cutting without physical dies, automatic waste removal, slitting and rewinding onto application-ready rolls."],
    ["Con una produttività di oltre 25.000 etichette all&apos;ora e la flessibilità del taglio plotter, la DLP-2200 è la soluzione ideale per etichettifici e aziende che vogliono portare in-house la produzione completa di etichette professionali, eliminando la dipendenza da fornitori esterni e riducendo drasticamente tempi e costi.",
     "With a throughput of over 25,000 labels per hour and the flexibility of plotter cutting, the DLP-2200 is the ideal solution for label producers and companies that want to bring complete professional label production in-house, eliminating dependence on external suppliers and drastically reducing time and costs."],
    ["DLP-2200 in Azione", "DLP-2200 in Action"],
    ["Porta la Produzione Etichette In-House",
     "Bring Label Production In-House"],
    ["Scopri come la DLP-2200 può rivoluzionare la tua produzione di etichette con un sistema completo e scalabile.",
     "Discover how the DLP-2200 can revolutionize your label production with a complete and scalable system."],
    ["Stampante etichette professionale Memjet", "Professional Memjet label printer"],
    ["Fustellatore digitale per etichette", "Digital label die-cutter"],
    ["Stampante roll-to-roll alta velocità", "High-speed roll-to-roll printer"],
  ]);

  writeF('prodotti/afinia-dlp2200/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA LT5C
// ============================================================
function doLT5C() {
  let c = readF('prodotti/afinia-lt5c/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Electrophotographic LED laser, 5 colors"],
    ["Colors", "CMYK + White"],
    ["Resolution", "1200 × 1200 dpi"],
    ["Print speed", "Up to 5 m/min"],
    ["Max media width", "220 mm (8.66 inches)"],
    ["Media thickness", "0.08-0.3 mm (with liner)"],
    ["Compatible media", "PP, PE, PET, vinyl, paper"],
    ["Toner cartridges", "CMYKW – individual replacement"],
    ["Monthly duty cycle", "Up to 120,000 labels"],
    ["Connectivity", "USB, Ethernet, Wi-Fi"],
    ["Integrated finisher", "Optional DLF / DC die-cutters"],
    ["Dimensions", "440 × 495 × 505 mm"],
  ]);

  c = translateFeatures(c, [
    ["5 Colori con Bianco", "5 Colors with White",
     "Stampa su materiali trasparenti e colorati grazie al toner bianco. CMYK + W per etichette impossibili con stampanti tradizionali.",
     "Print on transparent and colored materials thanks to white toner. CMYK + W for labels impossible with traditional printers."],
    ["Toner Durevole", "Durable Toner",
     "Le stampe a toner resistono ad acqua, graffi, oli e temperature estreme. Etichette professionali che durano nel tempo.",
     "Toner prints resist water, scratches, oils and extreme temperatures. Professional labels that last over time."],
    ["Materiali Versatili", "Versatile Media",
     "Stampa su PP, PE, PET, vinile e carta. Compatibile con un'ampia gamma di materiali autoadesivi in bobina.",
     "Print on PP, PE, PET, vinyl and paper. Compatible with a wide range of self-adhesive roll materials."],
    ["Qualità 1200 dpi", "1200 dpi Quality",
     "Risoluzione nativa 1200 × 1200 dpi per testi nitidi, codici a barre leggibili e colori vividi su ogni tipo di supporto.",
     "Native 1200 × 1200 dpi resolution for sharp text, readable barcodes and vivid colors on any media type."],
    ["Costi Contenuti", "Low Running Costs",
     "Cartucce toner individuali CMYKW: sostituisci solo il colore esaurito. Costo per etichetta tra i più bassi della categoria.",
     "Individual CMYKW toner cartridges: replace only the depleted color. Cost per label among the lowest in its class."],
    ["Integrazione Completa", "Complete Integration",
     "Collegabile ai fustellatori DLF e DC per un sistema stampa + finitura completo. Etichette pronte per l'applicazione.",
     "Connectable to DLF and DC die-cutters for a complete print + finishing system. Labels ready for application."],
  ]);

  c = wrapJsx(c, [
    ["Stampanti Etichette", "Label Printers"],
    ["Stampante etichette laser a 5 colori con bianco. Stampa su PP, PET, vinile\n                e carta con risoluzione 1200 dpi e toner resistente ad acqua e graffi.",
     "5-color laser label printer with white. Print on PP, PET, vinyl and paper with 1200 dpi resolution and toner resistant to water and scratches."],
    ["Stampa Laser a 5 Colori per Etichette Professionali",
     "5-Color Laser Printing for Professional Labels"],
    ["La Afinia LT5C è una stampante laser a 5 colori (CMYK + Bianco) progettata specificamente per la produzione di etichette professionali in bobina. Il toner bianco permette di stampare su materiali trasparenti e colorati, aprendo possibilità creative impossibili con le stampanti a 4 colori tradizionali.",
     "The Afinia LT5C is a 5-color laser printer (CMYK + White) designed specifically for professional roll label production. The white toner allows printing on transparent and colored materials, opening creative possibilities impossible with traditional 4-color printers."],
    ["Con una risoluzione nativa di 1200 × 1200 dpi, la LT5C garantisce testi perfettamente nitidi, codici a barre sempre leggibili e colori vividi su ogni tipo di supporto. Le stampe a toner sono resistenti ad acqua, graffi, oli e temperature estreme, garantendo etichette che mantengono la loro qualità nel tempo.",
     "With a native resolution of 1200 × 1200 dpi, the LT5C delivers perfectly sharp text, always-readable barcodes and vivid colors on any media. Toner prints are resistant to water, scratches, oils and extreme temperatures, ensuring labels that maintain their quality over time."],
    ["Versatile e compatta, la LT5C stampa su PP, PE, PET, vinile e carta, ed è integrabile con i fustellatori della serie DLF e DC per creare un sistema completo stampa + finitura. Le cartucce toner individuali CMYKW permettono di sostituire solo il colore esaurito, ottimizzando i costi operativi.",
     "Versatile and compact, the LT5C prints on PP, PE, PET, vinyl and paper, and is integrable with DLF and DC series die-cutters to create a complete print + finishing system. Individual CMYKW toner cartridges allow replacing only the depleted color, optimizing operating costs."],
    ["LT5C in Azione", "LT5C in Action"],
    ["Stampa Etichette Professionali con Toner Bianco",
     "Print Professional Labels with White Toner"],
    ["Scopri come la LT5C può ampliare le tue possibilità di stampa con il toner bianco e la finitura integrata.",
     "Discover how the LT5C can expand your printing possibilities with white toner and integrated finishing."],
    ["Stampante etichette professionale Memjet", "Professional Memjet label printer"],
    ["Fustellatore digitale plotter", "Digital plotter die-cutter"],
    ["Digital Label Press completa", "Complete Digital Label Press"],
  ]);

  writeF('prodotti/afinia-lt5c/page.tsx', c);
}

// ============================================================
// PRODUCT: AFINIA X350
// ============================================================
function doX350() {
  let c = readF('prodotti/afinia-x350/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Memjet Waterfall Inkjet"],
    ["Resolution", "1600 × 1600 dpi"],
    ["Inks", "CMYK pigmented water-based"],
    ["Max media width", "Min 50 mm × Max 350 mm"],
    ["Media thickness", "Min 0.05 mm × Max 0.35 mm"],
    ["Max speed", "Up to 45 m/min"],
    ["Ink capacity", "2 liters per color × 8 liters total"],
    ["Nozzle redundancy", "2× for zero banding"],
    ["Display", '21" touchscreen + remote connectivity'],
    ["Printhead", "User-replaceable"],
    ["Dimensions", "Approx. 1 m² footprint"],
  ]);

  c = translateFeatures(c, [
    ["45 m/min di Velocità", "45 m/min Speed",
     "La più veloce della gamma Afinia. Ideale per tirature medie e grandi con qualità costante fino a 1600 dpi.",
     "The fastest in the Afinia range. Ideal for medium and large runs with consistent quality up to 1600 dpi."],
    ["Inchiostri Pigmentati", "Pigmented Inks",
     "Inchiostri a base acqua CMYK pigmentati per stampe resistenti all'acqua, alla luce e alle condizioni ambientali più severe.",
     "CMYK pigmented water-based inks for prints resistant to water, light and the harshest environmental conditions."],
    ["Ridondanza Ugelli 2×", "2× Nozzle Redundancy",
     "Doppia ridondanza degli ugelli per eliminare completamente le strisce di stampa. Qualità costante anche su tirature lunghissime.",
     "Double nozzle redundancy to completely eliminate print banding. Consistent quality even on very long runs."],
    ["Touchscreen 21 Pollici", '21-Inch Touchscreen',
     "Display touchscreen da 21 pollici con opzioni avanzate e connettività remota per gestione della stampa ovunque.",
     "21-inch touchscreen display with advanced options and remote connectivity for print management from anywhere."],
    ["Testina Sostituibile", "Replaceable Printhead",
     "Testina di stampa sostituibile dall'utente senza fermare la produzione. Zero downtime, massima continuità operativa.",
     "User-replaceable printhead without stopping production. Zero downtime, maximum operational continuity."],
    ["Versatilità Totale", "Total Versatility",
     "Stampa su un'ampia gamma di supporti in bobina fino a 350 mm di larghezza. Design compatto con ingombro ridotto.",
     "Print on a wide range of roll media up to 350 mm wide. Compact design with reduced footprint."],
  ]);

  c = wrapJsx(c, [
    ["Stampanti Etichette Roll-to-Roll", "Roll-to-Roll Label Printers"],
    ["Stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati a base acqua.\n                Fino a 45 m/min, 1600 dpi e ridondanza ugelli 2× per stampe perfette. Design compatto\n                da circa 1 m² di ingombro.",
     "High-speed digital roll-to-roll printer with pigmented water-based inks. Up to 45 m/min, 1600 dpi and 2× nozzle redundancy for perfect prints. Compact design with approx. 1 m² footprint."],
    ["Velocità Industriale con Qualità Senza Compromessi",
     "Industrial Speed with Uncompromising Quality"],
    ["La Afinia X350 è una stampante digitale roll-to-roll progettata per la produzione industriale di etichette ad alta velocità. Con una velocità massima di 45 m/min e una risoluzione di 1600 × 1600 dpi, la X350 offre il perfetto equilibrio tra produttività e qualità.",
     "The Afinia X350 is a digital roll-to-roll printer designed for industrial high-speed label production. With a maximum speed of 45 m/min and 1600 × 1600 dpi resolution, the X350 offers the perfect balance between productivity and quality."],
    ["Equipaggiata con inchiostri pigmentati a base acqua CMYK, la X350 produce stampe resistenti all&apos;acqua, alla luce e alle condizioni ambientali più severe. La ridondanza ugelli 2× elimina completamente le strisce di stampa, garantendo qualità costante anche sulle tirature più lunghe.",
     "Equipped with CMYK pigmented water-based inks, the X350 produces prints resistant to water, light and the harshest environmental conditions. The 2× nozzle redundancy completely eliminates print banding, ensuring consistent quality even on the longest runs."],
    ["Il display touchscreen da 21 pollici con connettività remota permette la gestione della stampa da qualsiasi postazione. La testina di stampa sostituibile dall&apos;utente garantisce zero downtime, mentre il design compatto con ingombro di circa 1 m² la rende installabile in qualsiasi ambiente produttivo.",
     "The 21-inch touchscreen display with remote connectivity allows print management from any workstation. The user-replaceable printhead ensures zero downtime, while the compact design with approx. 1 m² footprint makes it installable in any production environment."],
    ["X350 in Azione", "X350 in Action"],
    ["Produzione Etichette ad Alta Velocità",
     "High-Speed Label Production"],
    ["Scopri come la X350 può accelerare la tua produzione di etichette mantenendo la massima qualità.",
     "Discover how the X350 can accelerate your label production while maintaining the highest quality."],
    ["Stampante etichette professionale Memjet", "Professional Memjet label printer"],
    ["Fustellatore digitale per etichette", "Digital label die-cutter"],
    ["Digital Label Press completa", "Complete Digital Label Press"],
  ]);

  writeF('prodotti/afinia-x350/page.tsx', c);
}

// ============================================================
// PRODUCT: GREENBOX EVO
// ============================================================
function doGreenboxEvo() {
  let c = readF('prodotti/greenbox-evo/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "HP Pagewide single-pass inkjet"],
    ["Resolution", "1200 × 1200 dpi"],
    ["Colors", "CMYK"],
    ["Max print width", "310 mm"],
    ["Max speed", "Up to 30 m/min"],
    ["Inks", "Pigmented water-based"],
    ["Compatible media", "Cardboard, paper, kraft, jute"],
    ["Head maintenance", "Automatic"],
  ]);

  c = translateFeatures(c, [
    ["Stampa Single-Pass", "Single-Pass Printing",
     "Tecnologia single-pass che stampa in un unico passaggio per produttività imbattibile. Nessuna attesa tra le copie.",
     "Single-pass technology that prints in one pass for unbeatable productivity. No waiting between copies."],
    ["Testina HP Pagewide", "HP Pagewide Printhead",
     "Testina HP Pagewide da 30 cm per copertura totale in un singolo passaggio. Qualità costante e velocità senza compromessi.",
     "30 cm HP Pagewide printhead for full coverage in a single pass. Consistent quality and speed without compromise."],
    ["30 m/min di Velocità", "30 m/min Speed",
     "Velocità di stampa fino a 30 metri al minuto per gestire anche le tirature più impegnative con efficienza.",
     "Print speed up to 30 meters per minute to handle even the most demanding runs efficiently."],
    ["Inchiostri a Base Acqua", "Water-Based Inks",
     "Inchiostri pigmentati a base acqua per stampe eco-friendly resistenti e brillanti. Ideali per packaging alimentare.",
     "Pigmented water-based inks for eco-friendly, durable and vibrant prints. Ideal for food packaging."],
    ["1200 dpi di Risoluzione", "1200 dpi Resolution",
     "Risoluzione 1200×1200 dpi per dettagli fini, testi nitidi e colori vividi su cartone e carta.",
     "1200×1200 dpi resolution for fine details, sharp text and vivid colors on cardboard and paper."],
    ["Manutenzione Automatica", "Automatic Maintenance",
     "Sistema di pulizia e manutenzione automatica della testina per prestazioni costanti e minimo intervento operatore.",
     "Automatic head cleaning and maintenance system for consistent performance and minimal operator intervention."],
  ]);

  c = wrapJsx(c, [
    ["Stampanti Packaging", "Packaging Printers"],
    ["Stampante inkjet CMYK single-pass per cartone, carta e juta. Testina HP\n                Pagewide da 30 cm, raggiunge velocità fino a 30 metri al minuto con risoluzione 1200×1200 dpi.",
     "CMYK single-pass inkjet printer for cardboard, paper and jute. 30 cm HP Pagewide printhead, reaching speeds up to 30 meters per minute at 1200×1200 dpi resolution."],
    ["Stampa Digitale ad Alta Velocità per il Packaging",
     "High-Speed Digital Printing for Packaging"],
    ["La GreenBox EVO è una stampante digitale inkjet single-pass progettata per la stampa diretta su cartone ondulato, carta, kraft e juta. Equipaggiata con testina HP Pagewide da 30 cm, raggiunge velocità fino a 30 metri al minuto con risoluzione 1200×1200 dpi.",
     "The GreenBox EVO is a single-pass inkjet digital printer designed for direct printing on corrugated cardboard, paper, kraft and jute. Equipped with a 30 cm HP Pagewide printhead, it reaches speeds up to 30 meters per minute at 1200×1200 dpi resolution."],
    ["Gli inchiostri pigmentati a base acqua CMYK garantiscono stampe brillanti, resistenti e compatibili con il contatto alimentare. La tecnologia single-pass assicura che ogni foglio venga stampato in un unico passaggio, eliminando i tempi di attesa e massimizzando la produttività.",
     "CMYK pigmented water-based inks deliver vibrant, durable prints compatible with food contact. Single-pass technology ensures every sheet is printed in one pass, eliminating wait times and maximizing productivity."],
    ["Il sistema di manutenzione automatica della testina garantisce prestazioni costanti nel tempo con minimo intervento dell&apos;operatore. La GreenBox EVO è la scelta ideale per scatolifici, aziende di packaging e stampatori che vogliono portare la stampa digitale nella loro produzione.",
     "The automatic head maintenance system ensures consistent performance over time with minimal operator intervention. The GreenBox EVO is the ideal choice for box manufacturers, packaging companies and printers who want to bring digital printing into their production."],
    ["GreenBox EVO in Azione", "GreenBox EVO in Action"],
    ["Porta la Stampa Digitale nel Tuo Packaging",
     "Bring Digital Printing to Your Packaging"],
    ["Scopri come la GreenBox EVO può trasformare la tua produzione di packaging. Vieni a vederla nella nostra sala demo.",
     "Discover how the GreenBox EVO can transform your packaging production. Come see it in our demo room."],
    ["Box maker automatico", "Automatic box maker"],
    ["Stampante single-pass grande formato", "Large format single-pass printer"],
    ["Stampa a caldo digitale per foil", "Digital hot foil stamping"],
  ]);

  writeF('prodotti/greenbox-evo/page.tsx', c);
}

// ============================================================
// PRODUCT: EDM-650X
// ============================================================
function doEDM650X() {
  let c = readF('prodotti/edm-650x/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "HP Pagewide single-pass inkjet"],
    ["Resolution", "1200 × 1200 dpi"],
    ["Colors", "CMYK"],
    ["Max print width", "650 mm"],
    ["Max speed", "Up to 30 m/min"],
    ["Inks", "Pigmented water-based"],
    ["Compatible media", "Cardboard, paper, kraft, jute"],
    ["Configuration", "Customizable (dual head available)"],
  ]);

  c = translateFeatures(c, [
    ["Larghezza Stampa 650mm", "650mm Print Width",
     "Larghezza di stampa fino a 650 mm per coprire formati grandi senza compromessi. Ideale per scatole, display e packaging di grandi dimensioni.",
     "Print width up to 650 mm to cover large formats without compromise. Ideal for boxes, displays and large packaging."],
    ["Testina HP Pagewide", "HP Pagewide Printhead",
     "Tecnologia HP Pagewide single-pass per copertura totale in un unico passaggio. Stessa qualità della GreenBox EVO su formato più ampio.",
     "HP Pagewide single-pass technology for full coverage in one pass. Same quality as GreenBox EVO on a wider format."],
    ["30 m/min di Velocità", "30 m/min Speed",
     "Velocità di stampa fino a 30 metri al minuto anche sul formato largo. Produttività industriale senza compromessi.",
     "Print speed up to 30 meters per minute even on wide format. Industrial productivity without compromise."],
    ["Configurazione Dual Head", "Dual Head Configuration",
     "Disponibile in configurazione a doppia testina per raddoppiare la copertura o aumentare la velocità. Massima flessibilità.",
     "Available in dual head configuration to double coverage or increase speed. Maximum flexibility."],
    ["Inchiostri Eco-Friendly", "Eco-Friendly Inks",
     "Inchiostri pigmentati a base acqua CMYK per stampe resistenti e compatibili con il contatto alimentare.",
     "CMYK pigmented water-based inks for durable prints compatible with food contact."],
    ["Formato Personalizzabile", "Customizable Format",
     "Configurazione personalizzabile in base alle esigenze produttive. Dalla singola alla doppia testina, si adatta al tuo flusso.",
     "Customizable configuration based on production needs. From single to dual head, it adapts to your workflow."],
  ]);

  c = wrapJsx(c, [
    ["Stampanti Packaging Grande Formato", "Large Format Packaging Printers"],
    ["Stampante single-pass per packaging grande formato fino a 650mm.\n                Stessa qualità di stampa a 1200×1200 dpi in un formato pensato per grandi tirature.",
     "Single-pass printer for large format packaging up to 650mm. Same print quality at 1200×1200 dpi in a format designed for large runs."],
    ["Stampa Grande Formato per il Packaging Industriale",
     "Large Format Printing for Industrial Packaging"],
    ["Scopri come la EDM-650X può ampliare le possibilità della tua produzione di packaging con stampa digitale su grande formato.",
     "Discover how the EDM-650X can expand your packaging production capabilities with large format digital printing."],
    ["EDM-650X in Azione", "EDM-650X in Action"],
    ["Stampa Packaging su Grande Formato",
     "Large Format Packaging Printing"],
    ["Stampante single-pass per packaging", "Single-pass printer for packaging"],
    ["Box maker automatico", "Automatic box maker"],
    ["Stampa a caldo digitale per foil", "Digital hot foil stamping"],
  ]);

  // Handle the description paragraphs - need to check actual content
  writeF('prodotti/edm-650x/page.tsx', c);
}

// ============================================================
// PRODUCT: ROBOTJET
// ============================================================
function doRobotjet() {
  let c = readF('prodotti/robotjet/page.tsx');

  c = convertSpecs(c, [
    ["Production capacity", "Approx. 400 pcs/hour, 3200 pcs/day"],
    ["Print resolution", "1200 dpi"],
    ["Colors", "4 colors CMYK"],
    ["Print technology", "Pigmented water-based inkjet"],
    ["Printheads", "HP A3 / Epson I3200"],
    ["Book height", "From 90 to 350 mm"],
    ["Print width", "From 5 to 218 mm"],
    ["Print speed", "0-15 m/min (adjustable)"],
    ["Ink tanks", "1 liter per color"],
    ["Image formats", "JPG, PDF"],
    ["Operating systems", "Windows 7 / 10 / 11"],
    ["Operating temperature", "0°-45°C, humidity 20%-80%"],
    ["Power consumption", "480 W, AC 110V/220V, 50/60 Hz"],
    ["Dimensions (L×W×H)", "190 × 120 × 165 cm"],
    ["Weight", "450 kg"],
  ]);

  c = translateFeatures(c, [
    ["400 Pezzi all\u2019Ora", "400 Pieces per Hour",
     "Produttività elevata con fino a 3200 libri personalizzati al giorno. Ideale per ordini piccoli e grandi.",
     "High productivity with up to 3200 personalized books per day. Ideal for both small and large orders."],
    ["1200 DPI di Risoluzione", "1200 DPI Resolution",
     "Fondi pieni, sovrastampe e sfumature con precisione assoluta. Qualità di stampa senza eguali nel settore.",
     "Solid fills, overprints and gradients with absolute precision. Unmatched print quality in the industry."],
    ["Adattamento Intelligente", "Smart Adaptation",
     "Si adatta automaticamente alla forma e allo spessore del libro. Angoli tondi e squadrati, con piastra guida per libri alti.",
     "Automatically adapts to the shape and thickness of the book. Round and square corners, with guide plate for tall books."],
    ["Teste di Stampa HP A3", "HP A3 Printheads",
     "Tecnologia inkjet a base acqua CMYK con stampa 4 colori in singolo passaggio per design complessi e vivaci.",
     "Water-based CMYK inkjet technology with 4-color single-pass printing for complex and vibrant designs."],
    ["Pulizia Automatica", "Automatic Cleaning",
     "Spazzola rotante e aspirapolvere integrati puliscono i libri prima della stampa. Manutenzione automatica della testina.",
     "Rotating brush and integrated vacuum cleaner clean books before printing. Automatic printhead maintenance."],
    ["Costi Stampa Ridotti", "Low Printing Costs",
     "Taniche da 1 litro per colore garantiscono altissime prestazioni e costi di produzione contenuti.",
     "1-liter tanks per color ensure excellent performance and low production costs."],
  ]);

  c = wrapJsx(c, [
    ["Stampante digitale rivoluzionaria per la labbratura di libri, quaderni, agende e block notes. \n                400 pezzi/ora, CMYK single-pass con teste HP A3, risoluzione fino a 1200 dpi.",
     "Revolutionary digital printer for book edge printing on books, notebooks, planners and notepads. 400 pcs/hour, CMYK single-pass with HP A3 heads, resolution up to 1200 dpi."],
    ["La Rivoluzione nella Labbratura dei Libri",
     "The Revolution in Book Edge Printing"],
    ["Robotjet Book Edge Digital Printer è la stampante digitale che rende unici libri, quaderni, agende \n            e block notes attraverso la tecnica della labbratura. Sfruttando la tecnologia inkjet a base acqua \n            CMYK con teste di stampa HP A3, offre risultati di stampa mai visti prima.",
     "Robotjet Book Edge Digital Printer is the digital printer that makes books, notebooks, planners and notepads unique through the book edge printing technique. Leveraging CMYK water-based inkjet technology with HP A3 printheads, it delivers printing results never seen before."],
    ["La sua particolarità risiede nella capacità di stampare fondi pieni, sovrastampe e sfumature con \n            precisione assoluta grazie alla risoluzione di 1200 dpi. Con 400 pezzi/ora e 3200 pezzi/giorno, \n            consente di evadere ordini sia piccoli che grandi con estrema facilità.",
     "Its uniqueness lies in the ability to print solid fills, overprints and gradients with absolute precision thanks to 1200 dpi resolution. With 400 pcs/hour and 3200 pcs/day, it fulfills both small and large orders with extreme ease."],
    ["Dotata di un sistema intelligente di adattamento, si regola automaticamente alla forma (angoli tondi \n            o squadrati) e allo spessore del libro. La spazzola rotante e l&apos;aspirapolvere integrati puliscono \n            i libri prima della stampa, proteggendo la testina da danni accidentali e garantendo risultati \n            sempre perfetti.",
     "Equipped with an intelligent adaptation system, it automatically adjusts to the shape (round or square corners) and thickness of the book. The rotating brush and integrated vacuum clean books before printing, protecting the printhead from accidental damage and ensuring consistently perfect results."],
    ["Robotjet in Azione", "Robotjet in Action"],
    ["Scopri Robotjet dal Vivo", "See Robotjet Live"],
    ["Vieni nella nostra sala demo a Sesto San Giovanni e scopri come la labbratura digitale può aprire nuove opportunità per il tuo business.",
     "Visit our demo room in Sesto San Giovanni and discover how digital book edge printing can open new opportunities for your business."],
    ["Chiamaci Ora", "Call Us Now"],
    ["Labbratura digitale libri", "Digital book edge printing"],
  ]);

  writeF('prodotti/robotjet/page.tsx', c);
}

// ============================================================
// PRODUCT: GREENBOX PRINT BOOK
// ============================================================
function doGreenboxPrintBook() {
  let c = readF('prodotti/greenbox-print-book/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Digital inkjet single-pass"],
    ["Resolution", "1200 × 600 dpi"],
    ["Colors", "CMYK"],
    ["Printing width", "Up to 310 mm"],
    ["Speed", "Up to 30 m/min"],
    ["Book height", "From 5 to 50 cm"],
    ["Inks", "Water-based"],
    ["Formats", "JPG, PDF, TIFF"],
  ]);

  c = translateFeatures(c, [
    ["Labbratura Digitale", "Digital Book Edge Printing",
     "Stampa diretta sul bordo delle pagine di libri, quaderni e agende con tecnologia inkjet a colori CMYK.",
     "Direct printing on the page edges of books, notebooks and planners with CMYK color inkjet technology."],
    ["30 m/min di Velocità", "30 m/min Speed",
     "Produttività elevata grazie alla tecnologia single-pass. Ideale per piccoli e grandi volumi.",
     "High productivity thanks to single-pass technology. Ideal for both small and large volumes."],
    ["1200 dpi di Risoluzione", "1200 dpi Resolution",
     "Dettagli precisi e colori vividi per personalizzazioni uniche che rendono ogni libro speciale.",
     "Precise details and vivid colors for unique customizations that make every book special."],
    ["Inchiostri a Base Acqua", "Water-Based Inks",
     "Inchiostri sicuri e rispettosi dell'ambiente per risultati brillanti e duraturi nel tempo.",
     "Safe and environmentally friendly inks for brilliant and long-lasting results."],
    ["Setup Semplice", "Simple Setup",
     "Interfaccia intuitiva per caricamento file, regolazione parametri e avvio stampa in pochi passaggi.",
     "Intuitive interface for file loading, parameter adjustment and starting the print in a few steps."],
    ["Versatilità Formati", "Format Versatility",
     "Adatta a libri di diverse altezze e spessori. Personalizza ogni formato con facilità.",
     "Suitable for books of different heights and thicknesses. Customize every format with ease."],
  ]);

  c = wrapJsx(c, [
    ["Labbratura Libri", "Book Edge Printing"],
  ]);

  writeF('prodotti/greenbox-print-book/page.tsx', c);
}

// ============================================================
// PRODUCT: ANY-002
// ============================================================
function doANY002() {
  let c = readF('prodotti/any-002/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Electrophotographic toner LED"],
    ["Resolution", "1200 × 600 dpi"],
    ["Colors", "4 colors (CMYK)"],
    ["Max print width", "104 mm"],
    ["Throughput", "Up to 5,000 labels in 2 hours"],
    ["Die-cutting", "Integrated semi-rotary"],
    ["Lamination", "Optional inline"],
    ["Rewinding", "Integrated"],
    ["Toner", "CMYK – K 11,000 pag / CMY 11,500 pag (5% A4 coverage)"],
    ["Media types", "Paper, PP, PE, polyester"],
    ["Power supply", "220-240V, 50/60Hz, 4.5A (max 1,300W)"],
    ["Operating environment", "10-32°C, humidity 20-80%"],
    ["Dimensions", "180 × 480 × 600 mm"],
  ]);

  c = translateFeatures(c, [
    ["Stampa + Fustella in Uno", "Print + Die-Cut in One",
     "Sistema 2-in-1 che stampa e fustellla le etichette in un unico passaggio. Dalla bobina bianca all'etichetta finita.",
     "2-in-1 system that prints and die-cuts labels in a single pass. From blank roll to finished label."],
    ["Toner Resistente", "Durable Toner",
     "Stampe a toner resistenti all'acqua, alle temperature e alle abrasioni. Qualità duratura senza trattamenti aggiuntivi.",
     "Toner prints resistant to water, temperature and abrasion. Long-lasting quality without additional treatments."],
    ["Fustellatura Semi-Rotativa", "Semi-Rotary Die-Cutting",
     "Fustellatura integrata con cilindro magnetico per etichette di qualsiasi forma. Cambio formato rapido e preciso.",
     "Integrated die-cutting with magnetic cylinder for labels of any shape. Quick and precise format changeover."],
    ["On-Demand Senza Sprechi", "On-Demand Without Waste",
     "Stampate qualsiasi quantità, dalla singola etichetta a migliaia. Zero sprechi di materiale grazie alla produzione on-demand.",
     "Print any quantity, from a single label to thousands. Zero material waste thanks to on-demand production."],
    ["Materiali Versatili", "Versatile Media",
     "Compatibile con carta, PP, PE e poliestere. Adatta a etichette per alimenti, cosmetici, farmaceutici e industriali.",
     "Compatible with paper, PP, PE and polyester. Suitable for food, cosmetic, pharmaceutical and industrial labels."],
    ["Compatta e Autonoma", "Compact and Autonomous",
     "Dimensioni contenute per installarla in qualsiasi ufficio o laboratorio. Sistema completo senza accessori aggiuntivi.",
     "Compact dimensions to install in any office or lab. Complete system without additional accessories."],
  ]);

  c = wrapJsx(c, [
    ["Stampa + Fustella Etichette", "Print + Die-Cut Labels"],
  ]);

  writeF('prodotti/any-002/page.tsx', c);
}

// ============================================================
// PRODUCT: ANY-PRESS
// ============================================================
function doAnyPress() {
  let c = readF('prodotti/any-press/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "LED laser electrophotographic"],
    ["Colors", "5 colors – CMYKW (including white)"],
    ["Resolution", "1,200 × 1,200 dpi"],
    ["Max media width", "330 mm"],
    ["Speed", "Up to 5 m/min"],
    ["Compatible media", "Roll labels, flexible packaging, pouches"],
    ["Laminator", "Optional – cold or hot"],
    ["White toner", "Yes – opacity adjustable"],
    ["Power supply", "Single-phase 220-240V / 6A"],
    ["Dimensions", "L 1350 × D 1090 × H 1615 mm"],
  ]);

  c = translateFeatures(c, [
    ["5 Colori con Bianco", "5 Colors with White",
     "CMYK + Bianco per stampare su materiali trasparenti, metallizzati e colorati. Opacità del bianco regolabile.",
     "CMYK + White to print on transparent, metallic and colored materials. Adjustable white opacity."],
    ["Etichette e Packaging", "Labels and Packaging",
     "Soluzione 2-in-1: stampa sia etichette in bobina che imballaggi flessibili come buste e pouches.",
     "2-in-1 solution: prints both roll labels and flexible packaging such as bags and pouches."],
    ["Toner Resistente", "Durable Toner",
     "Il toner laser LED garantisce resistenza all'acqua, ai raggi UV, ai graffi e alle condizioni ambientali più severe.",
     "LED laser toner ensures resistance to water, UV rays, scratches and the harshest environmental conditions."],
    ["Laminazione Opzionale", "Optional Lamination",
     "Laminatore a freddo o a caldo integrabile per una protezione aggiuntiva delle stampe.",
     "Integrable cold or hot laminator for additional print protection."],
    ["1200 dpi di Qualità", "1200 dpi Quality",
     "Risoluzione 1200×1200 dpi per testi nitidi, codici a barre perfetti e colori vividi.",
     "1200×1200 dpi resolution for sharp text, perfect barcodes and vivid colors."],
    ["Compatta e Versatile", "Compact and Versatile",
     "Formato compatto adatto a qualsiasi ambiente produttivo. Dalla prototipazione alla produzione in serie.",
     "Compact format suitable for any production environment. From prototyping to series production."],
  ]);

  c = wrapJsx(c, [
    ["Stampante Laser LED CMYK+Bianco", "LED Laser Printer CMYK+White"],
    ["La Any-Press di Anytron è una stampante laser LED a 5 colori (CMYK + Bianco) progettata per la produzione\n            di etichette in bobina e imballaggi flessibili. Il toner bianco consente di stampare su materiali trasparenti,\n            metallizzati e colorati con opacità regolabile.",
     "The Any-Press by Anytron is a 5-color LED laser printer (CMYK + White) designed for roll label and flexible packaging production. The white toner allows printing on transparent, metallic and colored materials with adjustable opacity."],
    ["Soluzione 2-in-1 unica nel suo genere, la Any-Press stampa sia etichette in bobina che imballaggi flessibili\n            come buste e pouches, con una risoluzione di 1200×1200 dpi e resistenza del toner ad acqua, UV, graffi\n            e condizioni ambientali severe.",
     "A unique 2-in-1 solution, the Any-Press prints both roll labels and flexible packaging such as bags and pouches, with 1200×1200 dpi resolution and toner resistance to water, UV, scratches and harsh environmental conditions."],
  ]);

  writeF('prodotti/any-press/page.tsx', c);
}

// ============================================================
// PRODUCT: AURUMPRESS
// ============================================================
function doAurumPress() {
  let c = readF('prodotti/aurumpress/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "Digital thermal foil stamping"],
    ["Resolution", "1200 × 1200 dpi"],
    ["Max print width", "330 mm (A3+)"],
    ["Speed", "Up to 5 m/min"],
    ["Foils", "Gold, silver, colors, holographic"],
    ["Compatible media", "Paper, cardboard, labels"],
    ["Software", "Included (design + RIP)"],
  ]);

  c = translateFeatures(c, [
    ["Stampa a Caldo Digitale", "Digital Hot Foil Stamping",
     "Applica foil metallizzati e olografici direttamente da file digitale. Nessuna lastra, nessun cliché.",
     "Apply metallic and holographic foils directly from digital file. No plates, no clichés."],
    ["Foil Gold, Silver e Colori", "Gold, Silver and Color Foils",
     "Ampia gamma di foil disponibili: oro, argento, colori, olografici e personalizzati per ogni esigenza.",
     "Wide range of available foils: gold, silver, colors, holographic and customized for every need."],
    ["1200 dpi di Precisione", "1200 dpi Precision",
     "Risoluzione 1200×1200 dpi per dettagli fini, loghi nitidi e testi precisi anche in dimensioni ridotte.",
     "1200×1200 dpi resolution for fine details, sharp logos and precise text even in small sizes."],
    ["On-Demand Senza Minimi", "On-Demand with No Minimums",
     "Stampa anche un singolo foglio. Ideale per prototipi, edizioni limitate e personalizzazioni.",
     "Print even a single sheet. Ideal for prototypes, limited editions and customizations."],
    ["Packaging Premium", "Premium Packaging",
     "Aggiungi valore al tuo packaging con finiture metalliche che catturano l'attenzione sullo scaffale.",
     "Add value to your packaging with metallic finishes that catch attention on the shelf."],
    ["Software Incluso", "Software Included",
     "Software di design e RIP incluso per gestire il flusso di lavoro completo dalla progettazione alla stampa.",
     "Design and RIP software included to manage the complete workflow from design to print."],
  ]);

  c = wrapJsx(c, [
    ["Stampa a Caldo Digitale", "Digital Hot Foil Stamping"],
  ]);

  writeF('prodotti/aurumpress/page.tsx', c);
}

// ============================================================
// PRODUCT: PACKPRINTER UV
// ============================================================
function doPackPrinterUV() {
  let c = readF('prodotti/packprinter-uv/page.tsx');

  c = convertSpecs(c, [
    ["Technology", "UV inkjet single-pass"],
    ["Resolution", "600 × 1200 dpi"],
    ["Colors", "CMYKW (4 colors + White)"],
    ["Curing", "UV LED"],
    ["Max print width", "200 mm"],
    ["Printhead size", "150.4 mm × 30 mm × 52 mm"],
    ["Speed", "Up to 50 m/min"],
    ["Compatible media", "Cardboard, plastic, metal, wood"],
  ]);

  c = translateFeatures(c, [
    ["Inchiostri UV", "UV Inks",
     "Inchiostri UV che polimerizzano istantaneamente per stampe resistenti e brillanti su qualsiasi materiale.",
     "UV inks that cure instantly for durable and vibrant prints on any material."],
    ["Bianco Coprente", "Opaque White",
     "Toner bianco per stampa su superfici scure e colorate. Massima opacità e copertura.",
     "White toner for printing on dark and colored surfaces. Maximum opacity and coverage."],
    ["50 m/min di Velocità", "50 m/min Speed",
     "Velocità di stampa industriale fino a 50 metri al minuto per le produzioni più esigenti.",
     "Industrial print speed up to 50 meters per minute for the most demanding productions."],
    ["Multi-Materiale", "Multi-Material",
     "Stampa su cartone, plastica, metallo e legno. Versatilità totale per applicazioni diverse.",
     "Print on cardboard, plastic, metal and wood. Total versatility for diverse applications."],
    ["Polimerizzazione LED", "LED Curing",
     "Sistema di polimerizzazione UV LED a basso consumo energetico e lunga durata.",
     "Low energy consumption UV LED curing system with long lifespan."],
    ["Qualità 600×1200 dpi", "600×1200 dpi Quality",
     "Risoluzione elevata per dettagli precisi e colori vibranti su ogni tipo di supporto.",
     "High resolution for precise details and vibrant colors on any media type."],
  ]);

  writeF('prodotti/packprinter-uv/page.tsx', c);
}

// ============================================================
// RUN ALL PRODUCT TRANSLATIONS
// ============================================================
console.log('=== Translating product pages ===\n');

doAB2500();
doL901();
doDC350();
doDLF();
doDLP2200();
doLT5C();
doX350();
doGreenboxEvo();
doEDM650X();
doRobotjet();
doGreenboxPrintBook();
doANY002();
doAnyPress();
doAurumPress();
doPackPrinterUV();

console.log('\n=== Product pages done ===');
