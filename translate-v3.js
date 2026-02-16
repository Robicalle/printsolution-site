const fs = require('fs');
const path = require('path');
const base = 'src/app/[locale]';

function rep(content, old, nw) {
  while (content.includes(old)) {
    content = content.replace(old, nw);
  }
  return content;
}

// Process HomePageClient
let hp = fs.readFileSync(path.join(base, 'HomePageClient.tsx'), 'utf8');

// Add useLocale to inner functions
const fns = ['Hero', 'Solutions', 'FeaturedProducts', 'WhyUs', 'Testimonial', 'DemoCTA'];
for (const fn of fns) {
  const pat = `function ${fn}() {\n`;
  if (hp.includes(pat) && !hp.includes(`function ${fn}() {\n  const locale = useLocale();`)) {
    hp = hp.replace(pat, `function ${fn}() {\n  const locale = useLocale();\n`);
  }
}

// Hero translations
hp = rep(hp, 'Soluzioni Digitali per{" "}', '{locale === "it" ? "Soluzioni Digitali per" : "Digital Solutions for"}{" "}');
hp = rep(hp, '>Stampa e Packaging<', '>{locale === "it" ? "Stampa e Packaging" : "Printing & Packaging"}<');
hp = rep(hp, 'Scatole personalizzate, etichette professionali: tecnologia, competenza e assistenza per la tua azienda.', '{locale === "it" ? "Scatole personalizzate, etichette professionali: tecnologia, competenza e assistenza per la tua azienda." : "Custom boxes, professional labels: technology, expertise and support for your business."}');
hp = rep(hp, '>Le Nostre Soluzioni →<', '>{locale === "it" ? "Le Nostre Soluzioni →" : "Our Solutions →"}<');
hp = rep(hp, '>Scopri<', '>{locale === "it" ? "Scopri" : "Discover"}<');

// Solutions
hp = rep(hp, '>Cosa facciamo<', '>{locale === "it" ? "Cosa facciamo" : "What We Do"}<');
hp = rep(hp, '>Le Nostre Soluzioni<', '>{locale === "it" ? "Le Nostre Soluzioni" : "Our Solutions"}<');
hp = rep(hp, 'title: "Etichette"', 'title: locale === "it" ? "Etichette" : "Labels"');
hp = rep(hp, 'title: "Shopper & Packaging di Lusso"', 'title: locale === "it" ? "Shopper & Packaging di Lusso" : "Shoppers & Luxury Packaging"');
hp = rep(hp, 'title: "Labbratura Libri"', 'title: locale === "it" ? "Labbratura Libri" : "Book Edge Printing"');
hp = rep(hp, 'title: "Consumabili"', 'title: locale === "it" ? "Consumabili" : "Consumables"');

// Solution descriptions
hp = rep(hp, 'desc: "Box maker automatici, stampanti single-pass per cartone ondulato, sistemi di fustellatura e incollaggio digitale."', 'desc: locale === "it" ? "Box maker automatici, stampanti single-pass per cartone ondulato, sistemi di fustellatura e incollaggio digitale." : "Automatic box makers, single-pass printers for corrugated cardboard, die-cutting and digital gluing systems."');
hp = rep(hp, 'desc: "Stampanti per etichette in bobina e a foglio con tecnologia inkjet e laser a colori per ogni esigenza produttiva."', 'desc: locale === "it" ? "Stampanti per etichette in bobina e a foglio con tecnologia inkjet e laser a colori per ogni esigenza produttiva." : "Roll and sheet label printers with inkjet and color laser technology for every production need."');
hp = rep(hp, 'desc: "Stampa hot foil e digitale per shopper e packaging premium con finiture metalliche."', 'desc: locale === "it" ? "Stampa hot foil e digitale per shopper e packaging premium con finiture metalliche." : "Hot foil and digital printing for shoppers and premium packaging with metallic finishes."');
hp = rep(hp, 'desc: "Stampa digitale sui bordi di libri, quaderni e block notes per personalizzazioni uniche e di alta qualit\u00e0."', 'desc: locale === "it" ? "Stampa digitale sui bordi di libri, quaderni e block notes per personalizzazioni uniche e di alta qualit\u00e0." : "Digital printing on book edges, notebooks and notepads for unique, high-quality customization."');
hp = rep(hp, 'desc: "Inchiostri, testine di stampa, nastri e materiali di consumo originali per tutte le stampanti distribuite."', 'desc: locale === "it" ? "Inchiostri, testine di stampa, nastri e materiali di consumo originali per tutte le stampanti distribuite." : "Inks, print heads, ribbons and original consumables for all distributed printers."');

// "Scopri di più" in Solutions and FeaturedProducts
hp = hp.replace(/Scopri di pi\u00f9/g, '{locale === "it" ? "Scopri di più" : "Learn More"}');

// FeaturedProducts
hp = rep(hp, '>I nostri prodotti<', '>{locale === "it" ? "I nostri prodotti" : "Our Products"}<');
hp = rep(hp, '>Tecnologie di Punta<', '>{locale === "it" ? "Tecnologie di Punta" : "Cutting-Edge Technology"}<');
hp = rep(hp, 'subtitle: "Box Maker Automatico"', 'subtitle: locale === "it" ? "Box Maker Automatico" : "Automatic Box Maker"');
hp = rep(hp, 'subtitle: "Stampante Single-Pass"', 'subtitle: locale === "it" ? "Stampante Single-Pass" : "Single-Pass Printer"');
hp = rep(hp, 'subtitle: "Labbratura Digitale Libri"', 'subtitle: locale === "it" ? "Labbratura Digitale Libri" : "Digital Book Edge Printing"');

// Product descriptions
hp = rep(hp, "desc: \"Macchina all-in-one per la creazione di scatole in cartone ondulato: taglio, scanalatura, cordonatura e incollaggio in un'unica operazione.\"", 'desc: locale === "it" ? "Macchina all-in-one per la creazione di scatole in cartone ondulato: taglio, scanalatura, cordonatura e incollaggio in un\'unica operazione." : "All-in-one machine for corrugated cardboard boxes: cutting, scoring, creasing and gluing in a single operation."');
hp = rep(hp, 'desc: "Stampa digitale diretta su cartone ondulato con tecnologia single-pass. Velocit\u00e0 industriale, qualit\u00e0 fotografica."', 'desc: locale === "it" ? "Stampa digitale diretta su cartone ondulato con tecnologia single-pass. Velocità industriale, qualità fotografica." : "Direct digital printing on corrugated cardboard with single-pass technology. Industrial speed, photographic quality."');
hp = rep(hp, "desc: \"Sistema di stampa digitale per dorsi e copertine di libri. Labbratura a colori on-demand, elimina le scorte di copertine prestampate.\"", 'desc: locale === "it" ? "Sistema di stampa digitale per dorsi e copertine di libri. Labbratura a colori on-demand, elimina le scorte di copertine prestampate." : "Digital printing system for book spines and covers. On-demand color edge printing, eliminates pre-printed cover stock."');

// Product specs
hp = rep(hp, '"500-600 scatole/ora"', 'locale === "it" ? "500-600 scatole/ora" : "500-600 boxes/hour"');
hp = rep(hp, '"Cartone da 1 a 7mm"', 'locale === "it" ? "Cartone da 1 a 7mm" : "Cardboard from 1 to 7mm"');
hp = rep(hp, '"Incollaggio a caldo e freddo"', 'locale === "it" ? "Incollaggio a caldo e freddo" : "Hot and cold gluing"');
hp = rep(hp, '"Cambio formato in 10 secondi"', 'locale === "it" ? "Cambio formato in 10 secondi" : "Format change in 10 seconds"');
hp = rep(hp, '"Fino a 30m/min"', 'locale === "it" ? "Fino a 30m/min" : "Up to 30m/min"');
hp = rep(hp, '"Larghezza 650mm"', 'locale === "it" ? "Larghezza 650mm" : "650mm width"');
hp = rep(hp, '"Inchiostri a base acqua, CMYK"', 'locale === "it" ? "Inchiostri a base acqua, CMYK" : "Water-based inks, CMYK"');
hp = rep(hp, '"Stampa su cartone ondulato"', 'locale === "it" ? "Stampa su cartone ondulato" : "Printing on corrugated cardboard"');
hp = rep(hp, '"Stampa digitale a colori"', 'locale === "it" ? "Stampa digitale a colori" : "Digital color printing"');
hp = rep(hp, '"Formato fino a 350mm"', 'locale === "it" ? "Formato fino a 350mm" : "Format up to 350mm"');
hp = rep(hp, '"On-demand, zero scorte"', 'locale === "it" ? "On-demand, zero scorte" : "On-demand, zero stock"');
hp = rep(hp, '"Integrazione in linea"', 'locale === "it" ? "Integrazione in linea" : "Inline integration"');

// WhyUs
hp = rep(hp, '>Perch\u00e9 sceglierci<', '>{locale === "it" ? "Perché sceglierci" : "Why Choose Us"}<');
hp = rep(hp, 'Numeri che <span', '{locale === "it" ? "Numeri che " : "Numbers that "}<span');
hp = rep(hp, '>parlano<', '>{locale === "it" ? "parlano" : "speak"}<');
hp = rep(hp, 'label: "Clienti soddisfatti"', 'label: locale === "it" ? "Clienti soddisfatti" : "Satisfied clients"');
hp = rep(hp, 'label: "Anni di esperienza"', 'label: locale === "it" ? "Anni di esperienza" : "Years of experience"');
hp = rep(hp, 'label: "Paesi serviti"', 'label: locale === "it" ? "Paesi serviti" : "Countries served"');
hp = rep(hp, 'label: "Prodotti a catalogo"', 'label: locale === "it" ? "Prodotti a catalogo" : "Products in catalog"');

// DemoCTA
hp = rep(hp, '>Prenota una Visita<', '>{locale === "it" ? "Prenota una Visita" : "Book a Visit"}<');
hp = rep(hp, '>in Sala Demo<', '>{locale === "it" ? "in Sala Demo" : "to Our Demo Room"}<');
hp = rep(hp, '>Richiedi Demo \u2192<', '>{locale === "it" ? "Richiedi Demo →" : "Request Demo →"}<');
hp = rep(hp, 'Richiedi Demo \u2192', '{locale === "it" ? "Richiedi Demo →" : "Request Demo →"}');
hp = rep(hp, '>Chiamaci Ora<', '>{locale === "it" ? "Chiamaci Ora" : "Call Us Now"}<');

// Testimonials
hp = rep(hp, '"Non pensavo che una stampante potesse aprirmi cos\u00ec tante opportunit\u00e0. La personalizzazione del packaging \u00e8 richiesta da qualunque azienda produttrice."', 'locale === "it" ? "Non pensavo che una stampante potesse aprirmi così tante opportunità. La personalizzazione del packaging è richiesta da qualunque azienda produttrice." : "I never thought a printer could open so many opportunities for me. Packaging customization is demanded by every manufacturing company."');
hp = rep(hp, '"Assistenza impeccabile e tempi di risposta rapidissimi. Con la EDM-650X abbiamo triplicato la produzione mantenendo una qualit\u00e0 eccellente."', 'locale === "it" ? "Assistenza impeccabile e tempi di risposta rapidissimi. Con la EDM-650X abbiamo triplicato la produzione mantenendo una qualità eccellente." : "Impeccable support and very fast response times. With the EDM-650X we tripled production while maintaining excellent quality."');
hp = rep(hp, '"Cercavamo una soluzione per etichette in piccoli lotti e Print Solution ci ha guidato nella scelta perfetta. Collaborazione che dura da 5 anni."', 'locale === "it" ? "Cercavamo una soluzione per etichette in piccoli lotti e Print Solution ci ha guidato nella scelta perfetta. Collaborazione che dura da 5 anni." : "We were looking for a solution for small batch labels and Print Solution guided us to the perfect choice. A collaboration lasting 5 years."');

fs.writeFileSync(path.join(base, 'HomePageClient.tsx'), hp, 'utf8');
console.log('OK HomePageClient.tsx');

console.log('Phase 2 HomePageClient done.');
