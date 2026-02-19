import { getLocale } from 'next-intl/server';
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import SpecsAccordion from "@/components/SpecsAccordion";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isIt = locale === 'it';
  return {
    title: isIt ? "Anypack AB2500 - Box Maker Automatico" : "Anypack AB2500 - Automatic Box Maker",
    description: isIt
      ? "Anypack AB2500: box maker automatico per scatole in cartone ondulato. 500-600 pezzi/ora, cambio formato in 10 sec. Print Solution"
      : "Anypack AB2500: automatic box maker for corrugated cardboard. 500-600 boxes/hour, format change in 10 sec. Print Solution",
    keywords: [
    "box maker automatico",
    "macchina produzione scatole",
    "Anypack AB2500",
    "scatole cartone ondulato",
    "box maker on-demand",
  ],
    openGraph: {
      title: isIt ? "Anypack AB2500 - Box Maker Automatico | Print Solution" : "Anypack AB2500 - Automatic Box Maker | Print Solution",
      description: isIt
        ? "Anypack AB2500: box maker automatico per scatole in cartone ondulato. 500-600 pezzi/ora, cambio formato in 10 sec. Print Solution"
        : "Anypack AB2500: automatic box maker for corrugated cardboard. 500-600 boxes/hour, format change in 10 sec. Print Solution",
      images: ["/images/products/ab2500.png"],
      type: "website",
      locale: isIt ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/prodotti/ab2500" },
  };
}

const ab2500JsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Anypack AB2500",
  brand: { "@type": "Brand", name: "Print Solution" },
  description:
    "Box maker automatico all-in-one per taglio, scanalatura, cordonatura e incollaggio di scatole in cartone ondulato. 500-600 scatole/ora.",
  image: "https://www.printsolution.it/images/products/ab2500.png",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolution.it" },
    { "@type": "ListItem", position: 2, name: "Prodotti", item: "https://www.printsolution.it/soluzioni/packaging" },
    { "@type": "ListItem", position: 3, name: "Anypack AB2500", item: "https://www.printsolution.it/prodotti/ab2500" },
  ],
};

function getSpecs(l: string) { return l === 'it' ? [
  ["Tipo macchina", "Box maker automatico all-in-one"],
  ["Operazioni", "Taglio, scanalatura, cordonatura, incollaggio"],
  ["Produttività", "500-600 scatole/ora"],
  ["Cambio formato", "10 secondi"],
  ["Spessore cartone", "Da 1 a 7 mm"],
  ["Incollaggio", "A caldo e a freddo"],
  ["Automazione", "Completamente automatico"],

] : [
  ["Machine type", "All-in-one automatic box maker"],
  ["Operations", "Cutting, creasing, scoring, gluing"],
  ["Throughput", "500-600 boxes/hour"],
  ["Format changeover", "10 seconds"],
  ["Cardboard thickness", "From 1 to 7 mm"],
  ["Gluing", "Hot and cold"],
  ["Automation", "Fully automatic"],
]; }

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Alta Produttività", titleEn: "High Throughput",
    desc: "500-600 scatole all'ora: produzione industriale con un'unica macchina compatta e versatile.", descEn: "500–600 boxes per hour: industrial production with a single compact and versatile machine.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cambio Formato in 10 secondi", titleEn: "Format Change in 10 Seconds",
    desc: "Passaggio istantaneo tra formati diversi senza fermo macchina. Massima flessibilità produttiva.", descEn: "Instant switchover between different formats without downtime. Maximum production flexibility.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "All-in-One", titleEn: "All-in-One",
    desc: "Taglio, scanalatura, cordonatura e incollaggio in un'unica operazione automatica. Zero passaggi manuali.", descEn: "Cutting, creasing, scoring and gluing in a single automatic operation. Zero manual steps.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Cartone da 1 a 7mm", titleEn: "Cardboard 1 to 7mm",
    desc: "Lavora con un ampio range di spessori, dal cartone leggero fino a 7mm per imballi pesanti.", descEn: "Works with a wide range of thicknesses, from lightweight cardboard up to 7mm for heavy-duty packaging.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Doppio Incollaggio", titleEn: "Dual Gluing",
    desc: "Sistema di incollaggio a caldo e a freddo per adattarsi a ogni tipo di cartone e applicazione.", descEn: "Hot and cold gluing system to adapt to any type of cardboard and application.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "ROI Rapido", titleEn: "Quick ROI",
    desc: "L'automazione completa riduce i costi di manodopera e aumenta la produttività. Ritorno sull'investimento in tempi brevi.", descEn: "Full automation reduces labor costs and increases productivity. Quick return on investment.",
  },
];

export default async function () {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ab2500JsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/ab2500-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{locale === 'it' ? 'Prodotti' : 'Products'}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Anypack AB2500</h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              {locale === 'it' ? "Box maker automatico all-in-one. Taglio, scanalatura, cordonatura e incollaggio in un'unica macchina. 500-600 scatole/ora con cambio formato in 10 secondi." : "All-in-one automatic box maker. Cutting, creasing, scoring and gluing in a single machine. 500–600 boxes/hour with format change in 10 seconds."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20Anypack%20AB2500&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Anypack%20AB2500.%0A%0AGrazie" className="btn-primary text-lg !px-8 !py-4 !rounded-full">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
            <Image src="/images/products/ab2500-hero-nobg.png" alt="Anypack AB2500" fill className="object-contain p-6" />
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Produzione Automatica di Scatole' : 'Automatic Box Production'}</h2>
          {locale === 'it' ? (<><p className="text-gray-500 leading-relaxed mb-4">
            L&apos;Anypack AB2500 è un box maker completamente automatico che esegue taglio, scanalatura, cordonatura
            e incollaggio in un&apos;unica operazione. Progettato per la produzione industriale di scatole in cartone
            ondulato, garantisce una produttività di 500-600 scatole all&apos;ora.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Il cambio formato avviene in soli 10 secondi, eliminando i tempi morti e massimizzando l&apos;efficienza
            produttiva. La macchina lavora con cartone da 1 a 7mm di spessore, adattandosi sia a imballi leggeri
            che a scatole per spedizioni pesanti.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il sistema di incollaggio a caldo e a freddo consente di lavorare con ogni tipo di cartone e applicazione.
            L&apos;AB2500 è la soluzione ideale per scatolifici, centri di logistica e aziende che necessitano di
            produzione on-demand di imballaggi personalizzati.
          </p></>) : (<><p className="text-gray-500 leading-relaxed mb-4">
            The Anypack AB2500 is a fully automatic box maker that performs cutting, creasing, scoring
            and gluing in a single operation. Designed for industrial production of corrugated cardboard boxes,
            it delivers a throughput of 500–600 boxes per hour.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Format changeover takes just 10 seconds, eliminating downtime and maximising production efficiency.
            The machine handles cardboard from 1 to 7 mm thick, suiting both lightweight packaging
            and heavy-duty shipping boxes.
          </p>
          <p className="text-gray-500 leading-relaxed">
            The hot and cold gluing system works with every type of cardboard and application.
            The AB2500 is the ideal solution for box manufacturers, logistics centres and companies
            requiring on-demand production of custom packaging.
          </p></>)}
        </div>
      </section>

      {/* Video */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">{locale === 'it' ? 'AB2500 in Azione' : 'AB2500 in Action'}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video controls playsInline preload="none" poster="/images/posters/ab2500-2.jpg" className="w-full h-full rounded-2xl">
                <source src="/videos/ab2500-2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Vantaggi Principali' : 'Key Advantages'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-yellow-500 flex items-center justify-center text-white mb-5">
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
      <SpecsAccordion specs={getSpecs(locale)} locale={locale} />

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Automatizza la Produzione di Scatole' : 'Automate Your Box Production'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {locale === 'it' ? "Scopri come l'AB2500 può rivoluzionare la tua linea di produzione. Vieni a vederla nella nostra sala demo." : "Discover how the AB2500 can revolutionise your production line. Come see it in our demo room."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20Anypack%20AB2500&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Anypack%20AB2500.%0A%0AGrazie" className="btn-primary text-lg">{locale === 'it' ? 'Consulenza gratuita→' : 'Free consultation→'}</a>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">{locale === 'it' ? 'Prodotti Correlati' : 'Related Products'}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GreenBox EVO", desc: locale === 'it' ? 'Stampante single-pass per packaging' : 'Single-pass printer for packaging', href: "/prodotti/greenbox-evo", image: "/images/products/greenbox-evo-site-nobg.png" },
              { name: "EDM-650X", desc: locale === 'it' ? 'Stampante single-pass grande formato' : 'Large format single-pass printer', href: "/prodotti/edm-650x", image: "/images/products/edm-650x-2hd-nobg-v4.png" },
              { name: "AurumPress", desc: locale === 'it' ? 'Stampatrice termica per foil' : 'Thermal foil printer', href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
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
