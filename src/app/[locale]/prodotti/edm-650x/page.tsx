import { getLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EDM-650X - Stampante per Cartone Ondulato",
  description:
    "EDM-650X: stampante cartone ondulato inkjet single-pass, da 2 a 6 teste HP, fino a 30m/min. Stampa digitale cartone ondulato con inchiostri a base acqua.",
  keywords: [
    "stampante cartone ondulato",
    "stampa inkjet cartone",
    "stampa digitale cartone ondulato",
    "EDM-650X",
    "stampante single-pass",
  ],
  openGraph: {
    title: "EDM-650X - Stampante Single-Pass per Cartone Ondulato | Print Solution",
    description:
      "Stampante digitale inkjet single-pass per cartone ondulato. Da 2 a 6 teste HP, fino a 30m/min.",
    images: ["/images/products/edm-650x-photo.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/edm-650x" },
};

const edm650xJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EDM-650X",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Stampante digitale inkjet single-pass per carta e cartone ondulato. Da 2 a 6 teste HP, fino a 30m/min, 1200x1200 dpi. Inchiostri a base acqua.",
  image: "https://www.printsolutionsrl.it/images/products/edm-650x-2hd.jpg",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    seller: { "@type": "Organization", name: "Print Solution S.r.l." },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Prodotti", item: "https://www.printsolutionsrl.it/soluzioni/packaging" },
    { "@type": "ListItem", position: 3, name: "EDM-650X", item: "https://www.printsolutionsrl.it/prodotti/edm-650x" },
  ],
};

function getSpecs(l: string) { return l === 'it' ? [
  ["Tecnologia", "Inkjet single-pass CMYK"],
  ["Teste di stampa", "Da 2 a 6 teste HP (30 cm ciascuna)"],
  ["Risoluzione", "1200 � 1200 dpi"],
  ["Velocit� di stampa", "Fino a 30 m/min"],
  ["Larghezza stampa", "Da 60 a 180 cm"],
  ["Passaggio carta", "Da 120 a 250 cm"],
  ["Modelli disponibili", "6 configurazioni"],
  ["Inchiostri", "A base acqua CMYK, taniche 4L/colore"],
  ["Piano", "Aspirato con pompa a vuoto"],
  ["Software RIP", "Incluso"],
  ["Alimentatore", "Caricatore automatico opzionale"],
  ["Opzioni", "Stampa bobina a bobina"],
] : [
  ["Technology", "HP Pagewide single-pass inkjet"],
  ["Resolution", "1200 × 1200 dpi"],
  ["Colors", "CMYK"],
  ["Max print width", "650 mm"],
  ["Max speed", "Up to 30 m/min"],
  ["Inks", "Pigmented water-based"],
  ["Compatible media", "Cardboard, paper, kraft, jute"],
  ["Configuration", "Customizable (dual head available)"],
]; }

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    title: "Grande Formato", titleEn: "Large Format",
    desc: "Larghezza stampa fino a 180 cm e passaggio carta fino a 250 cm: ideale per cartone ondulato di grandi dimensioni.", descEn: "Print width up to 180 cm and paper pass-through up to 250 cm. Ideal for large boxes, displays and POP materials.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Velocit� Industriale",
    desc: "30 metri al minuto con tecnologia single-pass: produzione continua senza compromessi sulla qualit�.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "Inchiostri a Base Acqua", titleEn: "Water-Based Inks",
    desc: "Inchiostri CMYK a base acqua, ecologici e ad alta resa cromatica. Taniche da 4 litri per colore.", descEn: "Ecological CMYK water-based inks with high chromatic yield. Compatible with food contact per current regulations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "6 Configurazioni", titleEn: "6 Configurations",
    desc: "Da 2 a 6 teste di stampa HP: scegli la configurazione pi� adatta al tuo volume produttivo.", descEn: "From 2 to 6 HP printheads: choose the most suitable configuration for your production volumes and needs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Bobina a Bobina", titleEn: "Roll to Roll",
    desc: "Opzione stampa bobina a bobina per produzioni in continuo e massima efficienza.", descEn: "Optional roll-to-roll printing for continuous production and high-speed inline finishing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Software RIP Incluso", titleEn: "RIP Software Included",
    desc: "Software RIP professionale incluso per la gestione colore avanzata e l'ottimizzazione della produzione.", descEn: "Professional RIP software included for advanced color management and quality control on every print.",
  },
];

export default async function () {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(edm650xJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <Image src="/images/products/boxes.webp" alt="Scatole stampate in quadricromia" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Prodotti</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">EDM-650X</h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Stampante digitale inkjet single-pass per carta e cartone a fogli stesi.
              Grande formato, velocit� industriale, inchiostri a base acqua CMYK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20EDM-650X&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20EDM-650X.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/edm-650x-2hd-nobg-v4.png" alt="EDM-650X 2 teste" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Industriale su Grande Formato</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La EDM-650X � la soluzione professionale per la stampa digitale inkjet su carta e cartone a fogli stesi.
            Progettata per volumi industriali, combina la tecnologia single-pass con teste di stampa HP di ultima
            generazione per garantire velocit� e qualit� senza precedenti nel settore.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Disponibile in 6 configurazioni diverse, da 2 a 6 teste di stampa HP da 30 cm ciascuna, la EDM-650X
            si adatta perfettamente alle esigenze di ogni azienda. La larghezza di stampa varia da 60 a 180 cm,
            con un passaggio carta che pu� raggiungere i 250 cm.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Gli inchiostri a base acqua CMYK garantiscono stampe di alta qualit� con colori vividi e resistenti.
            Il piano aspirato e il caricatore automatico opzionale completano una
            macchina pensata per la produzione continua ad alta efficienza.
          </p>
        </div>
      </section>

      {/* Configurazioni */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Configurazioni</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">Da 2 a 6 Teste di Stampa</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              La EDM-650X � disponibile in diverse configurazioni per adattarsi alle tue esigenze produttive.
            </p>
          </div>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-center">
            In alto la versione compatta a 2 teste. Qui sotto il dettaglio della versione da 3 a 6 teste.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden bg-surface-50">
                <Image src="/images/products/edm-650x-3hd.avif" alt="EDM-650X versione 3+ teste" fill className="object-contain p-4" />
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">EDM-650X - Versione da 3 a 6 Teste HP</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark-800 mb-4">Versione da 3 a 6 Teste</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Per volumi produttivi pi� elevati, la EDM-650X � disponibile con 3, 4, 5 o 6 teste di stampa HP.
                Larghezza di stampa fino a 180 cm con passaggio carta fino a 250 cm.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Velocit� fino a 30 m/min per produzioni industriali continue.
                Stessa qualit� di stampa a 1200�1200 dpi in un formato pensato per grandi tirature.
              </p>
              <div className="bg-surface-50 rounded-xl p-5">
                <p className="text-sm font-medium text-gray-600 mb-2">Le versioni da 3 a 6 teste offrono:</p>
                <ul className="text-sm text-dark-800 space-y-1">
                  <li>� Larghezza stampa fino a 180 cm</li>
                  <li>� Passaggio carta fino a 250 cm</li>
                  <li>� Velocit� fino a 30 m/min</li>
                  <li>� Configurazione personalizzabile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">EDM-650X in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/edm650x-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/edm650x-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/edm650x-2.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/edm650x-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/edm650x-4.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/edm650x-4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white mb-5">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">Specifiche Tecniche</h2>
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

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Scopri la EDM-650X dal Vivo</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Visita la nostra sala demo a Sesto San Giovanni e vedi la EDM-650X in azione sui tuoi materiali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20EDM-650X&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20EDM-650X.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo →</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GreenBox EVO", desc: "{locale === 'it' ? 'Stampante single-pass per packaging' : 'Single-pass printer for packaging'}", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-site-nobg.png" },
              { name: "AurumPress", desc: "Stampatrice termica per foil", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
              { name: "Anypack AB2500", desc: "{locale === 'it' ? 'Box maker automatico' : 'Automatic box maker'}", href: "/prodotti/ab2500", image: "/images/products/ab2500-hero-nobg.png" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
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
