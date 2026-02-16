import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Soluzioni Packaging On-Demand",
  description:
    "Soluzioni packaging on-demand: box maker automatici, stampanti single-pass per cartone ondulato, stampa UV e hot foil. Packaging digitale personalizzato.",
  keywords: [
    "soluzioni packaging on-demand",
    "packaging digitale",
    "box maker automatico",
    "stampa cartone ondulato",
    "packaging personalizzato",
  ],
  openGraph: {
    title: "Soluzioni Packaging On-Demand | Print Solution",
    description:
      "Box maker automatici, stampanti single-pass e soluzioni digitali per packaging personalizzato on-demand.",
    images: ["/images/hero-packaging.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/soluzioni/packaging" },
};

const products = [
  {
    name: "Anypack AB2500",
    subtitle: "Box Maker Automatico", subtitleEn: "Automatic Box Maker",
    desc: "Macchina all-in-one per la creazione di scatole in cartone ondulato: taglio, scanalatura, cordonatura, rifilatura, fustellatura, punzonatura maniglie e incollaggio in un'unica operazione. Progettata per varietà multiple e piccoli ordini.",
    descEn: "All-in-one machine for creating corrugated cardboard boxes: cutting, slotting, creasing, trimming, die-cutting, handle punching and gluing in a single operation. Designed for multiple varieties and small orders.",
    specs: [
      "500–600 pezzi/ora",
      "Cambio formato in 10 secondi",
      "100+ modelli Fefco precaricati",
      "20.000 record memorizzabili",
      "Foglio fino a 2500 mm",
      "Spessore cartone 1,5–10 mm",
      "1 solo operatore necessario",
      "Componenti Keyence e Panasonic",
    ],
    specsEn: [
      "500–600 pieces/hour",
      "Format change in 10 seconds",
      "100+ preloaded Fefco templates",
      "20,000 storable records",
      "Sheet up to 2500 mm",
      "Cardboard thickness 1.5–10 mm",
      "Only 1 operator needed",
      "Keyence and Panasonic components",
    ],
    gradient: "from-cyan-500 to-cyan-600",
    icon: "📦",
    image: "/images/products/ab2500-hero-nobg.png",
    href: "/prodotti/ab2500",
    brand: "Anypack",
    brandHref: "/brand/anypack",
  },
  {
    name: "EDM-650X",
    subtitle: "Stampante Single-Pass per Cartone", subtitleEn: "Single-Pass Cardboard Printer",
    desc: "Stampa digitale diretta su cartone ondulato e materiali rigidi con tecnologia single-pass HP Pagewide. Velocità industriale, qualità fotografica, inchiostri a base acqua eco-friendly.",
    descEn: "Direct digital printing on corrugated cardboard and rigid materials with HP Pagewide single-pass technology. Industrial speed, photographic quality, eco-friendly water-based inks.",
    specs: [
      "Fino a 30 m/min",
      "Risoluzione 1200 × 1200 dpi",
      "CMYK — inchiostri a base acqua",
      "Larghezza stampa 650 mm",
      "Spessore fino a 80 mm",
      "Dati variabili: barcode, QR",
      "Da 1 a 8 testine (scalabile)",
      "Piano aspirato per stabilità",
    ],
    specsEn: [
      "Up to 30 m/min",
      "Resolution 1200 × 1200 dpi",
      "CMYK — water-based inks",
      "Print width 650 mm",
      "Thickness up to 80 mm",
      "Variable data: barcode, QR",
      "1 to 8 printheads (scalable)",
      "Vacuum table for stability",
    ],
    gradient: "from-magenta-500 to-magenta-600",
    icon: "🖨️",
    image: "/images/products/edm-650x-2hd-nobg-v4.png",
    href: "/prodotti/edm-650x",
    brand: "Print Solution",
    brandHref: null,
  },
  {
    name: "GreenBox EVO",
    subtitle: "Stampante Single-Pass per Packaging", subtitleEn: "Single-Pass Packaging Printer",
    desc: "Sistema digitale CMYK single-pass per stampa diretta su cartone, carta e juta. Testina HP Pagewide a 30 m/min con inchiostri pigmentati a base acqua. Ideale per scatole, buste, shopper e packaging personalizzato in piccole e medie tirature.",
    descEn: "CMYK single-pass digital system for direct printing on cardboard, paper and jute. HP Pagewide printhead at 30 m/min with pigmented water-based inks. Ideal for boxes, envelopes, shoppers and custom packaging in short and medium runs.",
    specs: [
      "Fino a 30 m/min",
      "Risoluzione 1200 × 1200 dpi",
      "CMYK — inchiostri a base acqua",
      "Larghezza stampa fino a 30 cm",
      "Supporto fino a 70 cm",
      "Spessore fino a 15 cm",
      "Taniche 3L per colore",
      "Alimentatore automatico opzionale",
    ],
    specsEn: [
      "Up to 30 m/min",
      "Resolution 1200 × 1200 dpi",
      "CMYK — water-based inks",
      "Print width up to 30 cm",
      "Media up to 70 cm",
      "Thickness up to 15 cm",
      "3L tanks per colour",
      "Optional automatic feeder",
    ],
    gradient: "from-green-500 to-green-600",
    icon: "🖨️",
    image: "/images/products/greenbox-evo-front-nobg.png",
    href: "/prodotti/greenbox-evo",
    brand: "Print Solution",
    brandHref: null,
  },
  {
    name: "PackPrinter UV",
    subtitle: "Stampante UV Single-Pass", subtitleEn: "UV Single-Pass Printer",
    desc: "Stampa digitale UV ad alta velocità su materiali porosi e non porosi, incluso vetro, PVC, legno, ceramica e materiali sintetici. 9 configurazioni disponibili dalla compatta all'industriale.",
    descEn: "High-speed UV digital printing on porous and non-porous materials, including glass, PVC, wood, ceramics and synthetic materials. 9 configurations available from compact to industrial.",
    specs: [
      "Fino a 50 m/min",
      "CMYK + Bianco (5 colori)",
      "Risoluzione 600 × 1200 dpi",
      "Luce stampa da 12 a 118 cm",
      "Stampa su vetro e ceramica",
      "Testine S3200 U3, 3200 ugelli",
      "Asciugatura UV istantanea",
      "9 configurazioni disponibili",
    ],
    specsEn: [
      "Up to 50 m/min",
      "CMYK + White (5 colours)",
      "Resolution 600 × 1200 dpi",
      "Print width from 12 to 118 cm",
      "Prints on glass and ceramics",
      "S3200 U3 printheads, 3200 nozzles",
      "Instant UV curing",
      "9 configurations available",
    ],
    gradient: "from-yellow-500 to-yellow-600",
    icon: "✨",
    image: "/images/products/packprinter-uv.avif",
    href: "/prodotti/packprinter-uv",
    brand: "Print Solution",
    brandHref: null,
  },
];

export default async function PackagingPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        title={locale === 'it' ? "Soluzioni Packaging" : "Packaging Solutions"}
        subtitle={locale === 'it' ? "Box maker automatici, stampa digitale su cartone ondulato, stampa UV, hot foil stamping e soluzioni speciali per packaging personalizzato." : "Automatic box makers, digital printing on corrugated cardboard, UV printing, hot foil stamping and special solutions for custom packaging."}
        breadcrumb="Soluzioni"
        videoSrc="/videos/packaging-hero.mp4"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'La Nostra Gamma' : 'Our Range'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight mb-6">
              {locale === 'it' ? 'Tutto per il Packaging Digitale' : 'Everything for Digital Packaging'}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {locale === 'it' ? 'Dalla creazione automatica di scatole alla stampa diretta su cartone ondulato, fino alla stampa UV sulla maggior parte dei materiali: offriamo soluzioni complete per ogni esigenza di packaging.' : 'From automatic box making to direct printing on corrugated cardboard and UV printing on most materials: we offer complete solutions for every packaging need.'}
            </p>
          </div>

          {/* Product Cards */}
          <div className="space-y-12">
            {products.map((p, i) => (
              <div key={p.name} className="card-modern overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image or Placeholder */}
                  <div className={`relative h-80 lg:h-auto min-h-[400px] bg-gray-50 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {p.image && p.href ? (
                      <Link href={p.href} className="block w-full h-full group/img">
                        <Image src={p.image} alt={p.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                        <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                          <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                            {locale === 'it' ? 'Scopri' : 'Discover'} {p.name} →
                          </span>
                        </div>
                      </Link>
                    ) : p.image ? (
                      <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                        <span className="text-8xl opacity-30">{p.icon}</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                        {locale === 'it' ? p.subtitle : ((p as any).subtitleEn || p.subtitle)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-dark-800">{p.name}</h3>
                    </div>
                    {p.brand && p.brandHref && (
                      <Link href={p.brandHref} className="text-sm text-cyan-500 font-medium hover:underline mb-4 inline-block">
                        Brand: {p.brand} →
                      </Link>
                    )}
                    {p.brand && !p.brandHref && (
                      <span className="text-sm text-cyan-500 font-medium mb-4 inline-block">
                        {p.brand}
                      </span>
                    )}
                    <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? p.desc : ((p as any).descEn || p.desc)}</p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {(locale === 'it' ? p.specs : ((p as any).specsEn || p.specs)).map((spec: string) => (
                        <li key={spec} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20Packaging&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita.%0A%0AGrazie" className="btn-primary text-sm">
                        {locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {locale === 'it' ? 'Vieni a Vedere le Macchine in Azione' : 'Come See the Machines in Action'}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                {locale === 'it' ? 'La nostra sala demo a Sesto San Giovanni è attrezzata con tutti i prodotti in funzione. Porta i tuoi materiali e testa direttamente le soluzioni.' : 'Our demo room in Sesto San Giovanni is equipped with all products up and running. Bring your materials and test the solutions directly.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+390249439417" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  {locale === 'it' ? 'Chiamaci Ora' : 'Call Us Now'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
