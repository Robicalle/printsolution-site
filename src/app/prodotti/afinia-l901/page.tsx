import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia L901 — Stampante Etichette Professionale Memjet",
  description:
    "Afinia L901: stampante etichette a colori professionale con tecnologia Memjet Waterfall. Doppio nero, testina sostituibile, usabile in linea con DLP-2200.",
  keywords: [
    "Afinia L901",
    "stampante etichette professionale",
    "Memjet Waterfall",
    "etichette colori",
    "stampa etichette industriale",
  ],
  openGraph: {
    title: "Afinia L901 — Stampante Etichette Professionale | Print Solution",
    description:
      "Stampante etichette professionale Memjet con doppio nero e testina sostituibile dall'utente.",
    images: ["/images/products/afinia-l901.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-l901" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia L901",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Stampante etichette a colori professionale con tecnologia Memjet Waterfall. 1600 dpi, doppio nero, testina sostituibile.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-l901.png",
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
    { "@type": "ListItem", position: 3, name: "Afinia L901", item: "https://www.printsolutionsrl.it/prodotti/afinia-l901" },
  ],
};

const specs = [
  ["Tecnologia", "Memjet Waterfall Inkjet"],
  ["Risoluzione", "1600 dpi full-color"],
  ["Inchiostri", "CMYKK (doppio nero)"],
  ["Larghezza stampa max", "216 mm (8,5 pollici)"],
  ["Testina", "Sostituibile dall'utente"],
  ["Display", "Touchscreen integrato"],
  ["Cartucce", "Alta capacità"],
  ["Modalità", "Standalone o in linea con DLP-2200"],
  ["Manutenzione", "Senza fermo macchina"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Alta Produttività",
    desc: "Motore di stampa Memjet Waterfall per produzioni professionali continue con qualità costante a 1600 dpi.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Doppio Nero CMYKK",
    desc: "Configurazione a 5 canali con doppio nero per neri più profondi, testi più nitidi e maggiore autonomia di stampa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385-3.079A.75.75 0 006 12.82v6.362a.75.75 0 001.035.691l5.385-2.283a.75.75 0 00.034-1.42z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.577 12.098l-5.385-3.079A.75.75 0 0014.157 9.75v6.362a.75.75 0 001.035.691l5.385-2.283a.75.75 0 00.034-1.42z" />
      </svg>
    ),
    title: "Testina Sostituibile",
    desc: "Testina di stampa sostituibile dall'utente senza fermare la produzione. Zero downtime, massima continuità operativa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Standalone o In Linea",
    desc: "Utilizzabile come stampante standalone o integrata nella DLP-2200 per un sistema stampa + finitura completo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Touchscreen Integrato",
    desc: "Display touchscreen per gestione intuitiva dei lavori di stampa, monitoraggio stato e configurazione rapida.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Manutenzione Semplificata",
    desc: "Manutenzione senza fermo macchina grazie alla testina e alle cartucce sostituibili dall'operatore in pochi secondi.",
  },
];

export default function AfiniaL901Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Stampanti Etichette</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia L901</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante etichette a colori professionale con tecnologia Memjet Waterfall. 
                Doppio nero per neri più profondi, testina sostituibile dall&apos;utente e possibilità
                di integrazione in linea con la DLP-2200.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L901&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L901.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L901&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L901.%0A%0AGrazie" className="btn-secondary text-lg !px-8 !py-4">Prenota una Demo</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/afinia-l901.png" alt="Afinia L901" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Prestazioni Professionali con Tecnologia Memjet Waterfall</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia L901 è una stampante etichette a colori professionale progettata per produzioni continue ad alta qualità. Equipaggiata con il motore di stampa Memjet Waterfall, raggiunge una risoluzione di 1600 dpi full-color con una configurazione a 5 canali CMYKK (doppio nero) che garantisce neri più profondi, testi più nitidi e una maggiore autonomia di stampa rispetto ai sistemi CMYK tradizionali.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            La caratteristica distintiva della L901 è la testina di stampa sostituibile dall&apos;utente: in caso di necessità, l&apos;operatore può sostituirla in pochi secondi senza fermare la produzione, eliminando completamente i tempi di fermo macchina. Il display touchscreen integrato consente una gestione intuitiva dei lavori, il monitoraggio dello stato e la configurazione rapida dei parametri di stampa.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Versatile e modulare, la L901 può essere utilizzata come stampante standalone per produzioni indipendenti oppure integrata nella Afinia DLP-2200 per creare un sistema completo stampa + finitura. Questa flessibilità la rende la scelta ideale per aziende che cercano una soluzione scalabile, in grado di crescere insieme alle esigenze produttive.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">L901 in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/afinia-l901.mp4" type="video/mp4" /></video>
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-magenta-500 to-cyan-500 flex items-center justify-center text-white mb-5">
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
              <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Etichette Professionali In-House</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come la L901 può trasformare la tua produzione di etichette. Contattaci per una consulenza o vieni a provarla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L901&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L901.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo ?</a>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20L901&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20L901.%0A%0AGrazie" className="btn-outline text-lg">Prenota una Demo</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia L701", desc: "Stampante etichette entry level Memjet", href: "/prodotti/afinia-l701", image: "/images/products/afinia-l701.avif" },
              { name: "Afinia DLP-2200", desc: "Digital Label Press completa", href: "/prodotti/afinia-dlp2200", image: "/images/products/afinia-dlp2200.avif" },
              { name: "Afinia X350", desc: "Stampante roll-to-roll alta velocità", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350.webp" },
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
