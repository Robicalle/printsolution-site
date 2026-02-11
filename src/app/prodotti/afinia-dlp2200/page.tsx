import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia DLP-2200 — Digital Label Press Completa",
  description:
    "Afinia DLP-2200: sistema completo stampa + finitura dalla bobina bianca all'etichetta finita. 25.000+ etichette/ora, laminazione, fustellatura e riavvolgimento in linea.",
  keywords: [
    "Afinia DLP-2200",
    "digital label press",
    "stampa etichette completa",
    "fustellatura in linea",
    "stampante etichette industriale",
  ],
  openGraph: {
    title: "Afinia DLP-2200 — Digital Label Press Completa | Print Solution",
    description:
      "Sistema completo dalla bobina bianca all'etichetta finita. 25.000+ etichette/ora con laminazione e fustellatura in linea.",
    images: ["/images/products/afinia-dlp2200.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/afinia-dlp2200" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Afinia DLP-2200",
  brand: { "@type": "Brand", name: "Afinia Label" },
  description:
    "Digital Label Press completa: stampa, laminazione, fustellatura, rimozione sfridi, slitting e riavvolgimento in un unico sistema.",
  image: "https://www.printsolutionsrl.it/images/products/afinia-dlp2200.avif",
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
    { "@type": "ListItem", position: 3, name: "Afinia DLP-2200", item: "https://www.printsolutionsrl.it/prodotti/afinia-dlp2200" },
  ],
};

const specs = [
  ["Tipo sistema", "Digital Label Press completa (stampa + finitura)"],
  ["Stampante integrata", "Afinia L901 (Memjet Waterfall)"],
  ["Velocità di stampa", "Da 9 a 18 m/min"],
  ["Produttività", "25.000+ etichette 3×4 pollici all'ora"],
  ["Risoluzione", "1600 dpi full-color CMYKK"],
  ["Larghezza stampa max", "216 mm (8,5 pollici)"],
  ["Larghezza supporto", "100 mm — 229 mm"],
  ["Capacità bobina", "Diametro esterno max 460 mm (~1000 m)"],
  ["Anima interna", "76 mm (3 pollici)"],
  ["Laminazione", "In linea, con o senza liner"],
  ["Fustelle", "Acciaio flessibile, 140–360 mm"],
  ["Larghezza max taglio", "216 mm"],
  ["Lunghezza max taglio", "360 mm"],
  ["Sensore registro", "Laser ad alta precisione"],
  ["Riavvolgimento", "Doppio mandrino, fino a 400 mm"],
  ["Rimozione sfridi", "Automatica, fino a 300 mm"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Dalla Bobina all'Etichetta Finita",
    desc: "Un unico sistema integrato che stampa, lamina, fustella, rimuove gli sfridi, taglia e riavvolge. Zero passaggi esterni.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "25.000+ Etichette/Ora",
    desc: "Produzione ad alta velocità fino a 18 m/min. Oltre 25.000 etichette 3×4 pollici all'ora per volumi industriali.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Laminazione In Linea",
    desc: "Sistema di laminazione integrato silenzioso. Disponibile con film con liner o senza liner per massima durabilità delle etichette.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Cambio Supporto Rapido",
    desc: "Tavolo di giunzione per cambio supporto veloce. Minimo downtime tra un lavoro e l'altro, massima produttività.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Fustelle Flessibili Economiche",
    desc: "Cilindro magnetico da 18 pollici per fustelle flessibili in acciaio a basso costo. Cambio rapido tra forme diverse.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Bobine da 1000 Metri",
    desc: "Capacità bobina fino a 460 mm di diametro esterno, circa 1000 metri di materiale. Produzione continua senza interruzioni frequenti.",
  },
];

export default function AfiniaDLP2200Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-magenta-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Sistema Integrato</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Afinia DLP-2200</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Digital Label Press completa: dalla bobina bianca all&apos;etichetta finita in un unico 
                passaggio. Stampa, laminazione, fustellatura rotativa, rimozione sfridi, slitting e 
                riavvolgimento su doppio mandrino. Oltre 25.000 etichette all&apos;ora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DLP-2200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20DLP-2200.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">Richiedi Demo ?</a>
                <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DLP-2200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20DLP-2200.%0A%0AGrazie" className="btn-secondary text-lg !px-8 !py-4">Prenota una Demo</a>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/afinia-dlp2200.avif" alt="Afinia DLP-2200" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Dalla Bobina Bianca all&apos;Etichetta Finita in Un Solo Passaggio</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La Afinia DLP-2200 è una Digital Label Press completa che integra in un unico sistema tutte le fasi della produzione di etichette: stampa a colori, laminazione, fustellatura rotativa, rimozione sfridi, slitting e riavvolgimento su doppio mandrino. Partendo da una semplice bobina bianca, si ottengono etichette finite e pronte per l&apos;applicazione senza alcun passaggio esterno.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Il cuore del sistema è la stampante Afinia L901 con motore Memjet Waterfall, che garantisce una risoluzione di 1600 dpi full-color in configurazione CMYKK. La velocità di produzione va da 9 a 18 m/min, con una capacità di oltre 25.000 etichette 3×4 pollici all&apos;ora. Il sistema di laminazione silenzioso supporta film con o senza liner, mentre il cilindro magnetico da 18 pollici accetta fustelle flessibili in acciaio a basso costo con cambio rapido tra forme diverse.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Con bobine fino a 460 mm di diametro esterno (circa 1000 metri di materiale), il sensore laser ad alta precisione per il registro e il tavolo di giunzione per il cambio rapido del supporto, la DLP-2200 è progettata per produzioni industriali continue. Elimina la necessità di esternalizzare la produzione di etichette, riducendo drasticamente tempi di consegna e costi operativi.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">DLP-2200 in Azione</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls preload="metadata" className="w-full h-full object-cover"><source src="/videos/afinia-dlp2200.mp4" type="video/mp4" /></video>
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
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white mb-5">
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Produci Etichette Complete In-House</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Elimina la necessità di esternalizzare. Con la DLP-2200 produci etichette finite e pronte per l&apos;applicazione direttamente nel tuo stabilimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DLP-2200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20DLP-2200.%0A%0AGrazie" className="btn-primary text-lg">Richiedi Demo ?</a>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Afinia%20DLP-2200&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Afinia%20DLP-2200.%0A%0AGrazie" className="btn-outline text-lg">Prenota una Demo</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Afinia L901", desc: "Stampante etichette professionale (cuore della DLP-2200)", href: "/prodotti/afinia-l901", image: "/images/products/afinia-l901.png" },
              { name: "Afinia X350", desc: "Stampante roll-to-roll alta velocità", href: "/prodotti/afinia-x350", image: "/images/products/afinia-x350.webp" },
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
