import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anypack AB2500 — Box Maker Automatico All-in-One",
  description:
    "Anypack AB2500: box maker automatico per taglio, scanalatura, cordonatura e incollaggio. 500-600 scatole/ora, cambio formato in 3 secondi.",
  keywords: [
    "box maker automatico",
    "macchina produzione scatole",
    "Anypack AB2500",
    "scatole cartone ondulato",
    "box maker on-demand",
  ],
  openGraph: {
    title: "Anypack AB2500 — Box Maker Automatico All-in-One | Print Solution",
    description:
      "Box maker automatico per taglio, scanalatura, cordonatura e incollaggio. 500-600 scatole/ora.",
    images: ["/images/products/ab2500.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/prodotti/ab2500" },
};

const ab2500JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Anypack AB2500",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Box maker automatico all-in-one per taglio, scanalatura, cordonatura e incollaggio di scatole in cartone ondulato. 500-600 scatole/ora.",
  image: "https://www.printsolutionsrl.it/images/products/ab2500.png",
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
    { "@type": "ListItem", position: 3, name: "Anypack AB2500", item: "https://www.printsolutionsrl.it/prodotti/ab2500" },
  ],
};

const specs = [
  ["Tipo macchina", "Box maker automatico all-in-one"],
  ["Operazioni", "Taglio, scanalatura, cordonatura, incollaggio"],
  ["Produttività", "500–600 scatole/ora"],
  ["Cambio formato", "3 secondi"],
  ["Spessore cartone", "Da 1 a 7 mm"],
  ["Incollaggio", "A caldo e a freddo"],
  ["Automazione", "Completamente automatico"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Alta Produttività",
    desc: "500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cambio Formato in 3 Secondi",
    desc: "Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "All-in-One",
    desc: "Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Cartone da 1 a 7mm",
    desc: "Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Doppio Incollaggio",
    desc: "Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "ROI Rapido",
    desc: "L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.",
  },
];

export default function AB2500Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ab2500JsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Prodotti</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Anypack AB2500</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio 
                in un&apos;unica macchina. 500-600 scatole/ora con cambio formato in 3 secondi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-primary text-lg !px-8 !py-4 !rounded-full">
                  Richiedi Informazioni
                </Link>
                <Link href="/contatti" className="btn-secondary text-lg !px-8 !py-4">
                  Prenota una Demo
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/ab2500.png" alt="Anypack AB2500" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Produzione Automatica di Scatole</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            L&apos;Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura 
            e incollaggio in un&apos;unica operazione. Progettato per la produzione industriale di scatole in cartone 
            ondulato, garantisce una produttività di 500-600 scatole all&apos;ora.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Il cambio formato avviene in soli 3 secondi, eliminando i tempi morti e massimizzando l&apos;efficienza 
            produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri 
            che a scatole per spedizioni pesanti.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione. 
            L&apos;AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di 
            produzione on-demand di imballaggi personalizzati.
          </p>
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

      {/* Features */}
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

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Automatizza la Produzione di Scatole</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Scopri come l&apos;AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary text-lg">Richiedi Informazioni</Link>
            <Link href="/contatti" className="btn-outline text-lg">Prenota una Demo</Link>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GreenBox EVO", desc: "Stampante single-pass per packaging", href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo.jpeg" },
              { name: "EDM-650X", desc: "Stampante single-pass grande formato", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-nobg.png" },
              { name: "AurumPress", desc: "Stampatrice termica per foil", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
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
