import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Usato Garantito",
  description:
    "Macchine da stampa e packaging usate, revisionate e garantite 6 mesi. Occasioni su stampanti digitali per cartone, etichette e packaging.",
  keywords: [
    "stampanti usate garantite",
    "macchine packaging usate",
    "stampante etichette usata",
    "usato garantito stampa digitale",
  ],
  openGraph: {
    title: "Usato Garantito | Print Solution",
    description:
      "Macchine da stampa e packaging usate, revisionate e garantite 6 mesi.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/usato" },
};

const products = [
  {
    name: "EDM-650X Usata",
    subtitle: "Stampante Single-Pass — Usato Garantito",
    badge: "USATO GARANTITO",
    badgeColor: "bg-orange-500",
    desc: "Macchina in ottime condizioni generali, revisionata, garanzia 6 mesi. Completa di primo kit di inchiostri, testa di stampa e manuale d'uso in italiano. Acquistabile anche con possibilità di subentro noleggio lungo termine.",
    specs: [
      "Configurazione 3 teste",
      "Luce di stampa 60 cm",
      "Passaggio carta 200 cm",
      "Taniche inchiostri 3 LT",
      "Piano aspirato",
      "Caricatore automatico compreso",
      "PC e Software inclusi",
      "Costi stampa bassissimi",
    ],
    highlights: [
      "Revisionata e testata",
      "garanzia 6 mesi",
      "Subentro noleggio disponibile",
    ],
    image: "/images/products/edm-650x-usato-nobg.png",
  },
  {
    name: "NS Multi 800 Usata",
    subtitle: "Stampante Single-Pass per Packaging",
    badge: "USATO GARANTITO",
    badgeColor: "bg-orange-500",
    desc: "Macchina in ottime condizioni generali, software e firmware aggiornati, garanzia 6 mesi. Completa di primo kit di inchiostri, testa di stampa e manuale d'uso in italiano. Acquistabile anche con formula noleggio lungo termine.",
    specs: [
      "Luce di stampa 42 cm",
      "Passaggio carta 80 cm",
      "Taniche inchiostri 3 LT",
      "Piano aspirato",
      "Escursione verticale 20 cm",
      "CMYK — inchiostri a base acqua",
      "Software RIP incluso",
      "Costi stampa bassissimi",
    ],
    highlights: [
      "Revisionata e testata",
      "garanzia 6 mesi",
      "Noleggio lungo termine disponibile",
    ],
    image: "/images/products/multi800-nobg.png",
  },
  {
    name: "GreenBox 2",
    subtitle: "Stampante Digitale per Packaging",
    badge: "PROMO",
    badgeColor: "bg-cyan-500",
    desc: "Stampante digitale per packaging con inchiostri ecologici resistenti all'acqua. Ideale per stampa diretta su cartone, carta e materiali per packaging. Soluzione economica per entrare nel mondo della stampa diretta su packaging.",
    specs: [
      "CMYK — inchiostri a base acqua",
      "Stampa su cartone e carta",
      "Risoluzione fino a 1200 dpi",
      "Formato compatto",
      "Software RIP incluso",
      "Facile da usare",
      "Manutenzione minima",
      "Ideale per piccole tirature",
    ],
    highlights: [
      "Prezzo promozionale",
      "Formazione inclusa",
      "Assistenza dedicata",
    ],
    image: "/images/products/greenbox2-scont.avif",
  },
];

export default function UsatoPage() {
  return (
    <>
      <PageHero
        title="Usato Garantito"
        subtitle="Macchine da stampa e packaging usate, revisionate, testate e coperte da garanzia 6 mesi."
        breadcrumb="Usato Garantito"
        imageSrc="/images/hero-usato.jpg"
      />

      {/* Intro */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Disponibilità limitata
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Le macchine usate sono disponibili in numero limitato. Contattaci per verificare la disponibilità
              e ricevere un&apos;offerta personalizzata.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`${p.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg`}>
                        {p.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-2">
                    {p.name}
                  </h2>
                  <p className="text-cyan-500 font-semibold mb-4">{p.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Specs */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {p.specs.map((spec) => (
                      <li key={spec} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Usato&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sui%20prodotti%20usato.%0A%0AGrazie"
                    className="btn-primary inline-flex items-center !rounded-full !px-8 !py-3"
                  >
                    Richiedi Informazioni
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Hai una macchina da permutare?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Valutiamo il tuo usato per una permuta con le nostre macchine nuove.
                Contattaci per una valutazione gratuita.
              </p>
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-yellow-50 transition-all duration-300 shadow-lg text-lg">Contattaci per una Valutazione</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
