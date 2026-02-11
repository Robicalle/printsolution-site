import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia LT5C — Stampante Etichette Toner LED Industriale",
  description:
    "Afinia LT5C: stampante etichette a toner LED con resistenza immediata all'acqua. Tecnologia elettrofotografica, nessuna asciugatura necessaria.",
  keywords: [
    "Afinia LT5C",
    "stampante etichette toner",
    "toner LED",
    "etichette resistenti acqua",
    "stampante etichette industriale",
  ],
  openGraph: {
    title: "Afinia LT5C — Stampante Etichette Toner LED | Print Solution",
    description:
      "Stampante etichette a toner LED industriale. Resistenza immediata all'acqua, nessuna asciugatura.",
    images: ["/images/products/afinia-lt5c.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-lt5c" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia LT5C",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Stampante etichette a toner LED con resistenza immediata all'acqua e tecnologia elettrofotografica CMYK.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-lt5c.avif",
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
    { "@type": "ListItem", position: 3, name: "Afinia LT5C", item: "https://www.printsolutionsrl.it/prodotti/afinia-lt5c" },
  ],
};

const specs = [
  ["Tecnologia", "Toner LED elettrofotografica CMYK"],
  ["Risoluzione", "1200 × 1200 dpi"],
  ["Resistenza", "Immediata all'acqua e abrasione"],
  ["Asciugatura", "Non necessaria (fusione toner)"],
  ["Alimentazione supporto", "Da rotolo"],
  ["Cartucce toner", "Alta resa CMYK"],
  ["Fusore", "Integrato per massima resistenza"],
  ["Costo stampa", "Competitivo per volumi medi"],
  ["Ambiente", "Ideale per ambienti umidi e industriali"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Resistenza Immediata",
    desc: "Le etichette escono dalla stampante già resistenti all'acqua, agli agenti chimici e all'abrasione. Nessun tempo di asciugatura.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Tecnologia Toner LED",
    desc: "Tecnologia elettrofotografica con fusore integrato: il toner viene fuso sulla superficie per una resistenza meccanica superiore.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Zero Tempi di Attesa",
    desc: "Nessuna asciugatura necessaria: le etichette possono essere applicate, laminate o fustellate immediatamente dopo la stampa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Ambienti Umidi e Industriali",
    desc: "Perfetta per ambienti dove le etichette sono esposte a umidità, condensa o contatto con liquidi. Durabilità garantita.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Costo Stampa Competitivo",
    desc: "Cartucce toner ad alta resa per un costo per etichetta competitivo, specialmente su volumi medi e produzioni regolari.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Alimentazione da Rotolo",
    desc: "Alimentazione diretta da rotolo per produzioni continue. Compatibile con i principali supporti etichetta disponibili sul mercato.",
  },
];

export default function AfiniaLT5CPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Stampanti Etichette</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia LT5C</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante etichette a toner LED con resistenza immediata all&apos;acqua. Tecnologia 
                elettrofotografica CMYK con fusore integrato: le etichette escono pronte all&apos;uso,
                senza tempi di asciugatura. Ideale per ambienti umidi e industriali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20LT5C&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20LT5C.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20LT5C&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20LT5C.%0A%0AGrazie" className="btn-secondary text-lg !px-8 !py-4">Prenota una Demo</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/afinia-lt5c.avif" alt="Afinia LT5C" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Etichette Resistenti all&apos;Acqua con Tecnologia Toner LED</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia LT5C è una stampante etichette industriale basata su tecnologia toner LED elettrofotografica CMYK. A differenza delle stampanti inkjet, il toner viene fuso direttamente sulla superficie del supporto attraverso un fusore integrato, producendo etichette immediatamente resistenti all&apos;acqua, all&apos;abrasione e agli agenti chimici senza alcun tempo di asciugatura.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Con una risoluzione di 1200 × 1200 dpi e cartucce toner ad alta resa, la LT5C offre un costo per etichetta competitivo, specialmente su volumi medi e produzioni regolari. L&apos;alimentazione diretta da rotolo consente produzioni continue senza interruzioni, mentre la tecnologia elettrofotografica garantisce una qualità di stampa costante su ogni singola etichetta.
          </p>
          <p className="text-gray-500 leading-relaxed">
            La LT5C è la scelta ideale per ambienti umidi e industriali dove le etichette sono esposte a condensa, liquidi o condizioni ambientali difficili. Le etichette possono essere applicate, laminate o fustellate immediatamente dopo la stampa, eliminando i colli di bottiglia nel flusso produttivo e accelerando il time-to-market dei prodotti etichettati.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">LT5C in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/afinia-lt5c.mp4" type="video/mp4" /></video>
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white mb-5">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Etichette Resistenti, Subito Pronte</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come la LT5C può semplificare la tua produzione con etichette immediatamente resistenti. Contattaci per una demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20LT5C&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20LT5C.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo ?</a>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20LT5C&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20LT5C.%0A%0AGrazie" className="btn-outline text-lg">Prenota una Demo</a>
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
