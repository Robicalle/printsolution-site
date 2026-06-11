import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === 'it';
  return {
    title: it ? "Promozioni" : "Promotions",
    description: it
      ? "Scopri le promozioni Print Solution su macchine da stampa digitale per packaging ed etichette. Offerte speciali, prezzi scontati e occasioni su stampanti professionali."
      : "Discover Print Solution promotions on digital printing machines for packaging and labels. Special offers, discounted prices and deals on professional printers.",
    keywords: it
      ? ["promozioni stampa digitale", "offerte stampanti packaging", "promozioni print solution"]
      : ["digital printing promotions", "packaging printer offers", "print solution deals"],
    openGraph: {
      title: it ? "Promozioni | Print Solution" : "Promotions | Print Solution",
      description: it
        ? "Promozioni su macchine da stampa digitale per packaging ed etichette."
        : "Promotions on digital printing machines for packaging and labels.",
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: it ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: locale === 'it' ? `https://www.printsolutionsrl.it/promozioni` : `https://www.printsolutionsrl.it/en/promozioni` },
  };
}

export default async function PromozioniPage() {
  const locale = await getLocale();
  const it = locale === 'it';
  return (
    <>
      <PageHero
        title={it ? "Promozioni" : "Promotions"}
        subtitle={it ? "Le nostre offerte speciali su macchine da stampa e packaging." : "Our special offers on printing and packaging machines."}
        breadcrumb={it ? "Promozioni" : "Promotions"}
        imageSrc="/images/hero-promozioni.jpg"
      />

      {/* Intro banner */}
      <section className="py-10 bg-gradient-to-r from-green-50 to-cyan-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.008v.008H6V6z" />
              </svg>
              {it ? 'Offerta a tempo limitato' : 'Limited time offer'}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {it
                ? 'Approfitta del prezzo di lancio su ThunderBox, la nuova stampante per scatole e shopper entry level di Print Solution. Offerta valida fino a esaurimento disponibilità.'
                : 'Take advantage of the launch price on ThunderBox, the new entry-level box and shopper printer by Print Solution. Offer valid while stocks last.'}
            </p>
          </div>
        </div>
      </section>

      {/* ThunderBox promo card */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <Link href="/prodotti/thunderbox" className="block">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group bg-gray-50">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/images/products/thunderbox-machine.jpg"
                      alt="ThunderBox"
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {it ? 'PREZZO LANCIO' : 'LAUNCH PRICE'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                      {it ? 'Scopri ThunderBox →' : 'Discover ThunderBox →'}
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-2">Print Solution</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-2">ThunderBox</h2>
              <p className="text-gray-500 font-medium mb-6">
                {it ? 'Stampante per Scatole e Shopper Single-Pass CMYK — Entry Level' : 'Single-Pass CMYK Box & Shopper Printer — Entry Level'}
              </p>

              {/* Price */}
              <div className="inline-flex items-baseline gap-3 bg-gradient-to-r from-green-50 to-cyan-50 border border-green-200 rounded-2xl px-6 py-4 mb-6">
                <span className="text-4xl font-extrabold text-green-700">€ 29.600</span>
                <span className="text-base text-green-600 font-semibold">+ IVA</span>
                <span className="text-sm text-gray-400 font-normal">{it ? '· prezzo lancio' : '· launch price'}</span>
              </div>

              <p className="text-gray-500 leading-relaxed mb-6">
                {it
                  ? 'La stampante per scatole e shopper entry level di Print Solution: ideale per le PMI che vogliono portare la stampa del packaging in-house per la prima volta. Single-pass CMYK con testina HP, 28 m/min, 1200 dpi, foglio fino a 100 cm, spessore fino a 15 cm. Costi stampa -40% vs GreenBox 2.'
                  : "Print Solution's entry-level box and shopper printer: ideal for SMEs bringing packaging printing in-house for the first time. Single-pass CMYK with HP printhead, 28 m/min, 1200 dpi, sheet up to 100 cm, thickness up to 15 cm. -40% print costs vs GreenBox 2."}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(it ? [
                  'Prezzo lancio 2026',
                  'Certificata 4.0 Ready',
                  'Incentivi fiscali applicabili',
                ] : [
                  '2026 launch price',
                  '4.0 Ready certified',
                  'Fiscal incentives applicable',
                ]).map((h) => (
                  <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {h}
                  </span>
                ))}
              </div>

              {/* Specs */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {(it ? [
                  '28 m/min single-pass',
                  'Fino a 1200 × 1200 dpi',
                  'Foglio fino a 100 cm',
                  'Spessore fino a 15 cm',
                  'Testina HP inkjet',
                  'Inchiostri pigmentati a base acqua',
                  'Software RIP Flexiprint (opz.)',
                  '4.0 Ready — incentivi 2026',
                ] : [
                  '28 m/min single-pass',
                  'Fino a 1200 × 1200 dpi',
                  'Sheet up to 100 cm',
                  'Thickness up to 15 cm',
                  'HP inkjet printhead',
                  'Pigmented water-based inks',
                  'Flexiprint RIP software (opt.)',
                  '4.0 Ready — 2026 incentives',
                ]).map((spec) => (
                  <li key={spec} className="flex items-start text-sm text-gray-600">
                    <svg className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Prezzo%20Lancio%20GreenBox%203&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sul%20prezzo%20lancio%20GreenBox%203.%0A%0AGrazie"
                  className="btn-primary inline-flex items-center !rounded-full !px-8 !py-3"
                >
                  {it ? 'Richiedi Offerta' : 'Request Offer'}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link href="/prodotti/thunderbox" className="btn-secondary inline-flex items-center !rounded-full !px-8 !py-3">
                  {it ? 'Scheda prodotto' : 'Product page'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-green-500 via-cyan-500 to-cyan-600 p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {it ? 'Vuoi vedere la ThunderBox dal vivo?' : 'Want to see ThunderBox in person?'}
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                {it
                  ? 'Porta i tuoi materiali nella nostra sala demo a Sesto San Giovanni e stampa una prova direttamente sulla tua scatola.'
                  : 'Bring your materials to our demo room in Sesto San Giovanni and print a test directly on your own box.'}
              </p>
              <a
                href="mailto:info@printsolutionsrl.it?subject=Prenotazione%20Demo%20GreenBox%203&body=Buongiorno%2C%0A%0AVorrei%20prenotare%20una%20demo%20della%20GreenBox%203.%0A%0AGrazie"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-700 font-bold rounded-full hover:bg-cyan-50 transition-all duration-300 shadow-lg text-lg"
              >
                {it ? 'Prenota una Demo' : 'Book a Demo'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
