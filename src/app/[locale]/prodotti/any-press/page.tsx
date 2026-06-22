import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import ProductFaqSection from "@/components/ProductFaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isIt = locale === 'it';
  return {
    title: isIt ? "Any-Press | Stampante Laser LED CMYK+Bianco per Etichette e Packaging — Print Solution" : "Any-Press | LED Laser Printer CMYK+White for Labels & Flexible Packaging — Print Solution",
    description: isIt
      ? "Any-Press: stampa etichette e packaging flessibile in-house con laser LED 5 colori CMYK+Bianco. 1200 dpi, 5 m/min, zero lastre. Dal primo pezzo, senza minimi d'ordine. Scopri le specifiche."
      : "Any-Press: in-house label and flexible packaging printing with 5-colour LED laser CMYK+White. 1200 dpi, 5 m/min, no plates. From the first piece, no minimum order. Discover specs.",
    keywords: [
      "Any-Press",
      "any laser",
      "stampante laser LED",
      "stampante laser etichette",
      "CMYK bianco",
      "toner bianco etichette",
      "etichette kraft",
      "packaging flessibile",
      "stampante etichette packaging",
      "stampa etichette in-house",
    ],
    openGraph: {
      title: isIt ? "Any-Press | Stampante Laser LED CMYK+Bianco per Etichette e Packaging — Print Solution" : "Any-Press | LED Laser Printer CMYK+White for Labels & Flexible Packaging — Print Solution",
      description: isIt
        ? "Any-Press: stampa etichette e packaging flessibile in-house con laser LED 5 colori CMYK+Bianco. 1200 dpi, 5 m/min, zero lastre. Dal primo pezzo, senza minimi d'ordine."
        : "Any-Press: in-house label and flexible packaging printing with 5-colour LED laser CMYK+White. 1200 dpi, 5 m/min, no plates. From the first piece, no minimum order.",
      images: ["/images/products/any-press.avif"],
      type: "website",
      locale: isIt ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: locale === 'it' ? `https://www.printsolutionsrl.it/prodotti/any-press` : `https://www.printsolutionsrl.it/en/prodotti/any-press`,
      languages: {
        'it': `https://www.printsolutionsrl.it/prodotti/any-press`,
        'en': `https://www.printsolutionsrl.it/en/prodotti/any-press`,
        'x-default': `https://www.printsolutionsrl.it/prodotti/any-press`,
      },
    },
  };
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Any-Press",
  brand: { "@type": "Brand", name: "Anytron" },
  description:
    "Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. 1200 dpi, laminazione integrata.",
  image: "https://www.printsolutionsrl.it/images/products/any-press.avif",
  manufacturer: { "@type": "Organization", name: "Print Solution S.r.l." },
  offers: {
    "@type": "Offer",
    url: "https://www.printsolutionsrl.it/prodotti/any-press",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    seller: { "@type": "Organization", name: "Print Solution S.r.l." },
  },
};


function getSpecs(l: string) { return l === 'it' ? [
  ["Motore di stampa", "Laser digitale LED"],
  ["Colori", "5 colori – CMYKW (incluso bianco)"],
  ["Risoluzione", "1.200 × 1.200 dpi"],
  ["Velocità di stampa", "5 m/min"],
  ["Larghezza stampa max", "324 mm"],
  ["Larghezza supporto max", "330 mm"],
  ["Diametro max rotolo", "350 mm"],
  ["Laminatore", "Opzionale – a freddo o a caldo"],
  ["Software", "ANY-FLOW"],
  ["Alimentazione", "Monofase 220-240V / 6A"],
  ["Dimensioni", "L 1350 × P 1090 × H 1615 mm"],

] : [
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
]; }

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Toner Bianco CMYKW", titleEn: "White Toner CMYKW",
    desc: "Stampa a 5 colori con toner bianco per creare immagini e testi nitidi su carte colorate, kraft e supporti trasparenti.", descEn: "5-color printing with white toner to create vivid images and text on transparent, metallic and dark materials.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Etichette e Packaging Flessibile", titleEn: "Labels and Flexible Packaging",
    desc: "Soluzione 2-in-1 per etichette e imballaggi flessibili: buste piatte, stand-up pouch e bustine fino a 13 pollici di larghezza.", descEn: "2-in-1 solution for labels and flexible packaging: pouches, bags, sachets and wrappers in a single machine.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Laminazione Integrata", titleEn: "Integrated Lamination",
    desc: "Plastificatrice integrata opzionale (a freddo o a caldo) per completare stampa e laminazione in un unico passaggio.", descEn: "Optional integrated laminator (cold or hot) for additional protection and premium finish on every print.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Stampe Durevoli Senza Rivestimento", titleEn: "Durable Prints Without Coating",
    desc: "Il toner laser LED garantisce resistenza all'acqua, ai raggi UV, ai graffi e alle condizioni esterne senza necessità di rivestimenti aggiuntivi.", descEn: "LED laser toner ensures resistance to water, UV rays, scratches and the harshest environmental conditions.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costi di Produzione Ridotti", titleEn: "Reduced Production Costs",
    desc: "Toner e tamburi ad alta capacità con ampia scelta di supporti non patinati. I costi di produzione più competitivi della categoria.", descEn: "High-capacity toner and drums with a wide choice of compatible media for an optimized cost per print.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Software ANY-FLOW", titleEn: "ANY-FLOW Software",
    desc: "Sistema operativo dedicato per gestione colori, dati variabili (codici a barre, QR code), nesting e calcolo costi di produzione.", descEn: "Dedicated operating system for color management, variable data, barcodes and automated production workflow.",
  },
];

export default async function AnyPressPage() {
  const locale = await getLocale();
  const isIt = locale === 'it';
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isIt ? [
      { "@type": "Question", name: "La Any-Press stampa con il toner bianco?", acceptedAnswer: { "@type": "Answer", text: "Sì. La Any-Press include il bianco come quinto colore (CMYK+W) con opacità regolabile. Questo permette di stampare su supporti trasparenti, argentati o dorati con testo e immagini completamente opachi." } },
      { "@type": "Question", name: "Può stampare packaging flessibile come bustine e sacchetti?", acceptedAnswer: { "@type": "Answer", text: "Sì. La Any-Press è progettata per stampare sia etichette adesive in bobina che packaging flessibile come pouches, sachets e film per alimenti, purché compatibili con la tecnologia LED laser." } },
      { "@type": "Question", name: "Serve un laminatore separato?", acceptedAnswer: { "@type": "Answer", text: "Il laminatore è opzionale (cold o hot) e può essere aggiunto in linea. Per usi standard senza necessità di protezione extra, la Any-Press funziona autonomamente." } },
      { "@type": "Question", name: "Qual è la larghezza massima del supporto?", acceptedAnswer: { "@type": "Answer", text: "La larghezza massima del supporto è 330 mm (larghezza di stampa 324 mm), con diametro massimo del rotolo di 350 mm." } },
    ] : [
      { "@type": "Question", name: "Does the Any-Press print with white toner?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Any-Press includes white as a fifth colour (CMYK+W) with adjustable opacity. This enables printing on clear, silver or gold substrates with fully opaque text and images." } },
      { "@type": "Question", name: "Can it print flexible packaging such as pouches and bags?", acceptedAnswer: { "@type": "Answer", text: "Yes. The Any-Press is designed for both adhesive roll labels and flexible packaging such as pouches, sachets and food-grade film, provided they are compatible with LED laser technology." } },
      { "@type": "Question", name: "Is a separate laminator required?", acceptedAnswer: { "@type": "Answer", text: "The laminator is optional (cold or hot) and can be added inline. For standard use without extra protection needs, the Any-Press operates as a standalone system." } },
      { "@type": "Question", name: "What is the maximum media width?", acceptedAnswer: { "@type": "Answer", text: "The maximum media width is 330 mm (print width 324 mm), with a maximum roll diameter of 350 mm." } },
    ],
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
      { "@type": "ListItem", position: 2, name: isIt ? "Prodotti" : "Products", item: isIt ? "https://www.printsolutionsrl.it/prodotti" : "https://www.printsolutionsrl.it/en/prodotti" },
      { "@type": "ListItem", position: 3, name: "Any-Press", item: isIt ? "https://www.printsolutionsrl.it/prodotti/any-press" : "https://www.printsolutionsrl.it/en/prodotti/any-press" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context":"https://schema.org","@type":"VideoObject","name":"ANY-Press — Demo Stampante Packaging Digitale","description":"Demo ANY-Press: soluzione di stampa digitale per packaging. Stampa diretta su materiali da imballaggio con alta qualità.","thumbnailUrl":"https://www.printsolutionsrl.it/images/posters/any-press-1.jpg","uploadDate":"2024-01-01","contentUrl":"https://www.printsolutionsrl.it/videos/any-press-1.mp4","publisher":{"@type":"Organization","name":"Print Solution S.r.l.","url":"https://www.printsolutionsrl.it"} }
      ]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/any-press-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{locale === 'it' ? 'Stampanti Etichette' : 'Label Printers'}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Any-Press</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                {locale === 'it' ? 'Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. Stampa su carte colorate, kraft e trasparenti grazie al toner bianco. Laminazione integrata opzionale e software ANY-FLOW per dati variabili.' : '5-color LED laser printer (CMYK+White) for labels and flexible packaging. Print on colored, kraft and transparent materials with white toner. Optional integrated lamination and ANY-FLOW software for variable data.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20Any-Press&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Any-Press.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full" data-track="click_cta" data-track-label="cta_any_press">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/any-press.avif" alt="Any-Press — stampante laser LED 5 colori CMYK bianco per etichette" fill className="object-contain p-6" priority />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Stampa Laser LED a 5 Colori con Toner Bianco' : '5-Color LED Laser Printing with White Toner'}</h2>
          {locale === 'it' ? (<><p className="text-gray-500 leading-relaxed mb-4">
            La Any-Press di Anytron è una stampante laser LED a 5 colori (CMYK + Bianco) progettata per la produzione di etichette e packaging flessibile. Grazie al toner bianco, permette di stampare immagini e testi nitidi su carte colorate, kraft e supporti trasparenti, aprendo possibilità creative impossibili con le stampanti CMYK tradizionali. La risoluzione di Fino a 1200 × 1200 dpi assicura dettagli precisi e colori vivaci su ogni supporto.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Soluzione 2-in-1 unica nel suo genere, la Any-Press stampa sia etichette in bobina che imballaggi flessibili come buste piatte, stand-up pouch e bustine fino a 13 pollici di larghezza. Il toner laser LED garantisce resistenza all&apos;acqua, ai raggi UV, ai graffi e alle condizioni esterne senza necessità di rivestimenti aggiuntivi, mentre il laminatore integrato opzionale (a freddo o a caldo) completa il processo in un unico passaggio.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il software dedicato ANY-FLOW gestisce la produzione con funzionalità avanzate: gestione colori, dati variabili (codici a barre, QR code), nesting ottimizzato e calcolo dei costi di produzione. Con toner e tamburi ad alta capacità e la possibilità di utilizzare supporti non patinati a basso costo, la Any-Press offre i costi di produzione più competitivi della categoria, rendendola ideale per tirature medio-piccole e produzioni on-demand.
          </p></>) : (<><p className="text-gray-500 leading-relaxed mb-4">
            The Any-Press by Anytron is a 5-color LED laser printer (CMYK + White) designed for label and flexible packaging production. Thanks to the white toner, it prints sharp images and text on colored, kraft and transparent materials, opening creative possibilities impossible with traditional CMYK printers. Fino a 1200 × 1200 dpi resolution ensures precise details and vivid colors on any substrate.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            A unique 2-in-1 solution, the Any-Press prints both roll labels and flexible packaging such as flat pouches, stand-up pouches and sachets up to 13 inches wide. The LED laser toner ensures resistance to water, UV rays, scratches and harsh conditions without additional coatings, while the optional integrated laminator (cold or hot) completes the process in a single pass.
          </p>
          <p className="text-gray-500 leading-relaxed">
            The dedicated ANY-FLOW software manages production with advanced features: color management, variable data (barcodes, QR codes), optimised nesting and production cost calculation. With high-capacity toner and drums and the option to use low-cost uncoated media, the Any-Press delivers the most competitive production costs in its class, making it ideal for small-to-medium runs and on-demand production.
          </p></>)}
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{locale === 'it' ? 'Any-Press in Azione' : 'Any-Press in Action'}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="none" poster="/images/posters/any-press-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/any-press-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Vantaggi Principali' : 'Key Benefits'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{locale === 'it' ? f.title : (f.titleEn || f.title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{locale === 'it' ? f.desc : (f.descEn || f.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Specifiche Tecniche */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{locale === 'it' ? 'Specifiche Tecniche' : 'Technical Specifications'}</h2>
          <div className="space-y-3">
            {getSpecs(locale).map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductFaqSection items={(faqJsonLd.mainEntity as any[]).map((q: any) => ({ question: q.name, answer: q.acceptedAnswer.text }))} locale={locale} />

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Stampa Etichette con il Bianco In-House' : 'Print Labels with White In-House'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {locale === 'it' ? 'Scopri come la Any-Press può trasformare la tua produzione di etichette e packaging flessibile. Contattaci per una consulenza.' : 'Discover how the Any-Press can transform your label and flexible packaging production. Contact us for a consultation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20Any-Press&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Any-Press.%0A%0AGrazie" className="btn-primary text-lg" data-track="click_cta" data-track-label="cta_any_press">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia LT5C", desc: locale === 'it' ? 'Stampante etichette toner LED industriale' : 'Industrial LED toner label printer', href: "/prodotti/afinia-lt5c", image: "/images/products/afinia-lt5c.avif" },
              { name: "Afinia X350", desc: locale === 'it' ? 'Stampante roll-to-roll alta velocità' : 'High-speed roll-to-roll printer', href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350-site.webp" },
              { name: "Afinia DLP-2200", desc: locale === 'it' ? 'Digital Label Press completa' : 'Complete Digital Label Press', href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src={p.image} alt={`${p.name} — ${p.desc}`} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
