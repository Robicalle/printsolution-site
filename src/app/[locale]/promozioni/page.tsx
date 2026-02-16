import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Promozioni",
  description:
    "Scopri le promozioni Print Solution su macchine da stampa digitale per packaging ed etichette. Offerte speciali, prezzi scontati e occasioni su stampanti professionali.",
  keywords: [
    "promozioni stampa digitale",
    "offerte stampanti packaging",
    "promozioni print solution",
  ],
  openGraph: {
    title: "Promozioni | Print Solution",
    description:
      "Promozioni su macchine da stampa digitale per packaging ed etichette.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/promozioni" },
};

export default async function PromozioniPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        title="Promozioni"
        subtitle="Le nostre offerte speciali su macchine da stampa e packaging."
        breadcrumb="Promozioni"
        imageSrc="/images/hero-promozioni.jpg"
      />

      {/* Empty state */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6h.008v.008H6V6z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-dark-800 mb-4">
              Nessuna promozione attiva
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Al momento non ci sono promozioni attive. Contattaci per scoprire le offerte riservate
              e restare aggiornato sulle prossime opportunità.
            </p>
            <a
              href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Offerte%20Riservate&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20offerte%20in%20corso.%0A%0AGrazie"
              className="btn-primary inline-flex items-center !rounded-full !px-8 !py-3 text-lg"
            >
              Contattaci per le Offerte Riservate
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
