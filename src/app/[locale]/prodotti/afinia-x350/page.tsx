import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Afinia X350 × Stampante Etichette Roll-to-Roll Alta Velocità",
  description:
    "Afinia X350: stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati a base acqua. Fino a 45 m/min, 1600 dpi, ridondanza ugelli 2×.",
  keywords: [
    "Afinia X350",
    "stampante etichette alta velocità",
    "roll to roll",
    "inchiostri pigmentati",
    "stampa etichette industriale",
  ],
  openGraph: {
    title: "Afinia X350 × Stampante Roll-to-Roll Alta Velocità | Print Solution",
    description:
      "Stampante digitale roll-to-roll fino a 45 m/min con inchiostri pigmentati a base acqua e ridondanza ugelli 2×.",
    images: ["/images/products/afinia-x350-full.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-x350" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia X350",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Stampante digitale roll-to-roll ad alta velocità. Fino a 45 m/min, 1600 dpi, inchiostri pigmentati a base acqua.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-x350-full.png",
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
    { "@type": "ListItem", position: 2, name: "Etichette", item: "https://www.printsolutionsrl.it/soluzioni/etichette" },
    { "@type": "ListItem", position: 3, name: "Afinia X350", item: "https://www.printsolutionsrl.it/prodotti/afinia-x350" },
  ],
};

const specs = [
  ["Tecnologia", "Inkjet pigmentato a base acqua (Memjet DuraFlex)"],
  ["Velocità di stampa", "Fino a 45 m/min"],
  ["Risoluzione", "1600 × 1600 dpi"],
  ["Larghezza stampa max", "324,4 mm"],
  ["Larghezza supporto", "Min 50 mm × Max 350 mm"],
  ["Spessore supporto", "Min 0,05 mm × Max 0,35 mm"],
  ["Inchiostri", "Pigmentati a base acqua CMYK"],
  ["Capacità inchiostro", "2 litri per colore × 8 litri totali"],
  ["Ridondanza ugelli", "2× per zero strisce"],
  ["Display", "Touchscreen 21 pollici"],
  ["RIP Software", "RIP basico incluso, moduli opzionali"],
  ["Diametro max bobina", "350 mm"],
  ["Compressore", "Ultra silenzioso, integrato"],
  ["Alimentazione", "Monofase 220V"],
  ["Applicazioni", "Etichette, packaging flessibile"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "45 Metri al Minuto",
    desc: "La più veloce della sua categoria. Produzione industriale con qualità costante a 1600 dpi anche alle massime velocità.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Inchiostri Pigmentati a Base Acqua",
    desc: "Inchiostri pigmentati resistenti all'acqua, ai raggi UV e alle sostanze chimiche. Stampe durature ed eco-sostenibili.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Ridondanza Ugelli 2×",
    desc: "Doppia ridondanza degli ugelli per eliminare le strisce e garantire colori uniformi e gradazioni omogenee su ogni stampa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Touchscreen 21 Pollici",
    desc: "Display touchscreen da 21 pollici con opzioni avanzate e connettivit× remota per gestione della stampa da qualsiasi postazione.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "8 Litri di Inchiostro",
    desc: "Taniche da 2 litri per colore (CMYK), 8 litri totali. Lunghe tirature senza interruzioni e costo stampa ridotto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Versatilit× Totale",
    desc: "Stampa su bobine, etichette fustellate, materiali di imballaggio flessibili e cartoncino. Un solo metro quadro di ingombro.",
  },
];

export default async function AfiniaX350Page() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/x350-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Stampanti Etichette</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia X350</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati a base acqua.
                Fino a 45 m/min, 1600 dpi e ridondanza ugelli 2× per stampe perfette. Design compatto
                da circa 1 m× di ingombro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20X350&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20X350.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{locale === 'it' ? 'Richiedi Demo →' : 'Request Demo →'}</a>
              </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/afinia-x350-site.webp" alt="Product photo" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Industriale Roll-to-Roll fino a 45 Metri al Minuto</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia X350 è una stampante digitale roll-to-roll progettata per la produzione industriale di etichette e packaging flessibile. Con una velocità di stampa fino a 45 m/min e una risoluzione di 1600 × 1600 dpi, rappresenta la soluzione più veloce della sua categoria, capace di mantenere una qualità costante anche alle massime velocità grazie alla tecnologia Memjet DuraFlex.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Equipaggiata con inchiostri pigmentati a base acqua CMYK, la X350 produce stampe resistenti all&apos;acqua, ai raggi UV e alle sostanze chimiche, con un approccio eco-sostenibile. La ridondanza ugelli 2× elimina completamente il problema delle strisce, garantendo colori uniformi e gradazioni omogenee su ogni stampa. Le taniche da 2 litri per colore (8 litri totali) consentono lunghe tirature senza interruzioni con un costo stampa ridotto.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il display touchscreen da 21 pollici con connettivit× remota permette la gestione della stampa da qualsiasi postazione. Con un ingombro di circa 1 m×, la X350 si adatta anche a spazi produttivi compatti. Supporta bobine fino a 350 mm di larghezza e 350 mm di diametro, rendendola ideale per etichette, materiali di imballaggio flessibili e cartoncino.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">X350 in Azione</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/afinia-x350-1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/afinia-x350-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="metadata" poster="/images/posters/afinia-x350-yt1.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/afinia-x350-yt1.mp4" type="video/mp4" />
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500 to-cyan-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
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
            {specs.map(([label, value]) => (
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Porta la Produzione al Livello Successivo</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come la X350 può rivoluzionare la tua produzione di etichette. Contattaci per una consulenza o prenota una demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20X350&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20X350.%0A%0AGrazie" className="btn-primary text-lg">{locale === 'it' ? 'Richiedi Demo →' : 'Request Demo →'}</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia DLP-2200", desc: "Digital Label Press completa", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif" },
              { name: "Afinia L901", desc: "Stampante etichette professionale Memjet", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png" },
              { name: "Afinia AF200", desc: "Applicatore etichette semiautomatico", href: "/prodotti/afinia-af200", image: "/images/products/afinia-af200-nobg.png" },
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
