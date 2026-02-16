import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Labbratura Libri - Stampa Bordi Libri",
  description:
    "Labbratura libri digitale: stampa personalizzata sui bordi di libri, quaderni, agende e block notes. Tecnologia inkjet CMYK single-pass, 400 pezzi/ora.",
  keywords: [
    "labbratura libri",
    "stampa bordi libri",
    "book edge printing",
    "personalizzazione libri",
    "stampante labbratura",
  ],
  openGraph: {
    title: "Labbratura Libri - Stampa Digitale Bordi | Print Solution",
    description:
      "Stampa digitale personalizzata sui bordi di libri, quaderni e agende. 400 pezzi/ora, CMYK single-pass.",
    images: ["/images/products/book-edge-printer.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/soluzioni/labbratura" },
};

const products = [
  {
    name: "GreenBox Print Book",
    subtitle: "Labbratura Digitale con Tecnologia HP PageWide", subtitleEn: "Digital Book Edge Printing with HP PageWide Technology",
    desc: "La soluzione digitale per la labbratura dei libri basata su GreenBox 2. Stampa inkjet HP PageWide single-pass a base acqua, 30 m/min, 1200\u00d71200 dpi. Industria 4.0 ready con software GreenFlow.", descEn: "The digital solution for book edge printing based on GreenBox 2. Single-pass, up to 30 m/min, HP printhead with 1200 dpi resolution. Water-based inks.",
    specs: [
      "Velocit\u00e0 fino a 30 m/min",
      "Risoluzione 1200\u00d71200 dpi",
      "CMYK \u2014 inchiostri a base acqua",
      "Testina HP PageWide single-pass",
      "Escursione verticale fino a 30 cm",
      "Piano motorizzato 180 cm",
      "Industria 4.0 ready",
      "Peso: 120 kg",
    ],
    gradient: "from-green-500 to-cyan-500",
    tag: "Print Book",
    image: "/images/products/greenbox-printbook.jpg",
    href: "/prodotti/greenbox-print-book",
    brand: "Print Solution",
  },
];

const product = {
  name: "RobotJet",
  subtitle: "Book Edge Printer - Stampa Bordi Libri", subtitleEn: "Book Edge Printer — Page Edge Printing",
  desc: "Stampante digitale per labbratura e personalizzazione del bordo delle pagine di libri, quaderni, agende e block notes. Tecnologia inkjet CMYK single-pass a base acqua pigmentata con teste HP A3. Fino a 400 pezzi/ora con risoluzione 1200 dpi.",
  descEn: "Digital printer for edge printing and customisation of book, notebook, diary and notepad page edges. CMYK single-pass inkjet technology with pigmented water-based inks and HP A3 printheads. Up to 400 pieces/hour at 1200 dpi resolution.",
  specs: [
    "Circa 400 pezzi/ora",
    "Risoluzione 1200 dpi",
    "CMYK - inchiostri pigmentati a base acqua",
    "Teste di stampa HP A3 / Epson I3200",
    "Altezza libri da 90 a 350 mm",
    "Larghezza stampa da 5 a 218 mm",
    "Velocità 0-15 m/min (regolabile)",
    "Peso: 450 kg",
  ],
  specsEn: [
    "Approx. 400 pieces/hour",
    "1200 dpi resolution",
    "CMYK — pigmented water-based inks",
    "HP A3 / Epson I3200 printheads",
    "Book height from 90 to 350 mm",
    "Print width from 5 to 218 mm",
    "Speed 0–15 m/min (adjustable)",
    "Weight: 450 kg",
  ],
  gradient: "from-violet-500 to-violet-600",
  tag: "Book Edge Printer",
  image: "/images/products/book-edge-printer.png",
  href: "/prodotti/robotjet",
  brand: "Print Solution",
};

export default async function LabbraturaPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        title={locale === 'it' ? "Labbratura Libri" : "Book Edge Printing"}
        subtitle={locale === 'it' ? "Stampa digitale personalizzata sui bordi di libri, quaderni, agende e block notes. Personalizzazioni uniche e di alta qualità." : "Custom digital printing on the edges of books, notebooks, diaries and notepads. Unique, high-quality customisations."}
        breadcrumb="Soluzioni"
        videoSrc="/videos/labbratura-hero.mp4"
      />

      {/* Product */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'Stampante Labbratura' : 'Book Edge Printer'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              {locale === 'it' ? 'La Soluzione per la Labbratura Digitale' : 'The Solution for Digital Book Edge Printing'}
            </h2>
          </div>

          <div className="card-modern overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto min-h-[400px] bg-gray-50">
                <Link href={product.href} className="block w-full h-full group/img">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                    <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                      {locale === 'it' ? 'Scopri' : 'Discover'} {product.name} →
                    </span>
                  </div>
                </Link>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${product.gradient} shadow-lg`}>
                    {product.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{locale === 'it' ? product.subtitle : product.subtitleEn}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? product.desc : product.descEn}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {(locale === 'it' ? product.specs : product.specsEn).map((spec) => (
                    <li key={spec} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20RobotJet&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20del%20RobotJet.%0A%0AGrazie" className="btn-primary text-sm">
                        {locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: GreenBox Print Book */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom">
          {products.map((p) => (
          <div key={p.name} className="card-modern overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto min-h-[400px] bg-gray-50">
                <Link href={p.href} className="block w-full h-full group/img">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                    <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                      {locale === 'it' ? 'Scopri' : 'Discover'} {p.name} &rarr;
                    </span>
                  </div>
                </Link>
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                    {p.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{locale === 'it' ? p.subtitle : ((p as any).subtitleEn || p.subtitle)}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? p.desc : ((p as any).descEn || p.desc)}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {p.specs.map((spec) => (
                    <li key={spec} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20${encodeURIComponent(p.name)}&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20${encodeURIComponent(p.name)}.%0A%0AGrazie`} className="btn-primary text-sm">
                        {locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {locale === 'it' ? 'Vuoi Vedere le Nostre Soluzioni in Azione?' : 'Want to See Our Solutions in Action?'}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                {locale === 'it' ? 'Contattaci per una consulenza gratuita o inviaci i tuoi libri per ricevere campioni di labbratura.' : 'Contact us for a free consultation or send us your books to receive edge printing samples.'}
              </p>
              <a
                href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20RobotJet%20Labbratura&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20del%20RobotJet%20per%20labbratura%20libri.%0A%0AGrazie"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg"
              >
                {locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
