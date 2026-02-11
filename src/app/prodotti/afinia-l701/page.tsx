import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia L701 — Stampante Etichette Entry Level Memjet",
  description:
    "Afinia L701: stampante etichette a colori entry level con tecnologia Memjet. Risoluzione 1600 dpi, velocità 203 mm/s, 5 cartucce da 200 ml.",
  keywords: [
    "Afinia L701",
    "stampante etichette",
    "Memjet",
    "stampante etichette colori",
    "etichette in bobina",
  ],
  openGraph: {
    title: "Afinia L701 — Stampante Etichette Entry Level | Print Solution",
    description:
      "Stampante etichette a colori entry level con tecnologia Memjet. 1600 dpi, ultra compatta.",
    images: ["/images/products/afinia-l701.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-l701" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia L701",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Stampante etichette a colori entry level con tecnologia Memjet. Risoluzione 1600 dpi, velocità fino a 203 mm/s.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-l701.avif",
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
    { "@type": "ListItem", position: 3, name: "Afinia L701", item: "https://www.printsolutionsrl.it/prodotti/afinia-l701" },
  ],
};

const specs = [
  ["Tecnologia", "Memjet Dye Inkjet"],
  ["Risoluzione", "Fino a 1600 × 1600 dpi"],
  ["Velocità di stampa", "Fino a 203 mm/s (8 pollici/sec)"],
  ["Larghezza stampa max", "216 mm (8,5 pollici)"],
  ["Inchiostri", "Dye-based CMYKK (doppio nero)"],
  ["Capacità inchiostro", "5 cartucce × 200 ml = 1000 ml totali"],
  ["Taglierina", "Motorizzata integrata"],
  ["Sensori", "Gap, continuo, black mark"],
  ["Peso", "30 kg"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costo Iniziale Contenuto",
    desc: "L'entry point ideale per chi vuole iniziare a stampare etichette a colori in-house senza un grande investimento iniziale.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Qualità Professionale 1600 dpi",
    desc: "Risoluzione fino a 1600 × 1600 dpi per etichette con testi nitidi, colori vivaci e dettagli fotografici.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Veloce e Compatta",
    desc: "Stampa fino a 203 mm/s con un ingombro ridotto. Solo 30 kg di peso, perfetta per qualsiasi ambiente di lavoro.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "1000 ml di Inchiostro",
    desc: "5 cartucce da 200 ml (CMYKK) per lunghe tirature senza interruzioni. Il doppio nero garantisce neri più intensi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Taglierina Integrata",
    desc: "Taglierina motorizzata integrata per taglio automatico delle etichette a fine stampa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Sensori Multipli",
    desc: "Sensori gap, continuo e black mark per lavorare con ogni tipo di supporto etichetta.",
  },
];

export default function AfiniaL701Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Stampanti Etichette</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia L701</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante etichette a colori entry level con tecnologia Memjet. Qualità professionale
                a 1600 dpi, velocità fino a 203 mm/s e 1000 ml di inchiostro. Il punto di partenza
                ideale per la stampa etichette in-house.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L701&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L701.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L701&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L701.%0A%0AGrazie" className="btn-secondary text-lg !px-8 !py-4">Prenota una Demo</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/afinia-l701.avif" alt="Afinia L701" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Etichette a Colori In-House con la L701</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia L701 è la stampante etichette entry level ideale per chi desidera portare la produzione di etichette a colori direttamente in azienda. Basata sulla tecnologia Memjet, offre una risoluzione di stampa fino a 1600 × 1600 dpi con una velocità di 203 mm/s, garantendo risultati professionali con testi nitidi, colori vivaci e dettagli fotografici su ogni etichetta.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Dotata di 5 cartucce da 200 ml ciascuna in configurazione CMYKK (doppio nero), la L701 dispone di ben 1000 ml di inchiostro totale per lunghe tirature senza interruzioni. Il doppio canale nero garantisce neri più intensi e una maggiore autonomia. La taglierina motorizzata integrata completa il flusso di lavoro tagliando automaticamente le etichette a fine stampa.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Compatta e leggera (solo 30 kg), la L701 si adatta a qualsiasi ambiente di lavoro. I sensori multipli (gap, continuo e black mark) permettono di lavorare con ogni tipo di supporto etichetta, dai materiali fustellati ai supporti continui. È la scelta perfetta per piccole e medie produzioni, prototipi, test di mercato e tirature on-demand.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">L701 in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/afinia-l701.mp4" type="video/mp4" /></video>
            </div>
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-12 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-yellow-500 flex items-center justify-center text-white mb-5">
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
      <section className="section-padding bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">Specifiche Tecniche</h2>
          <div className="space-y-3">
            {specs.map(([label, value]) => (
              <div key={label} className="flex justify-between bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Inizia a Stampare Etichette In-House</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come la L701 può ridurre i costi e i tempi di produzione delle tue etichette. Vieni a vederla nella nostra sala demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L701&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L701.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo ?</a>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L701&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L701.%0A%0AGrazie" className="btn-outline text-lg">Prenota una Demo</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia L901", desc: "Stampante etichette professionale Memjet", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png" },
              { name: "Afinia X350", desc: "Stampante roll-to-roll alta velocità", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350.webp" },
              { name: "Afinia DLP-2200", desc: "Digital Label Press completa", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif" },
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
