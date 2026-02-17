import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it' ? "DTM Print — Distributore Ufficiale Italia" : "DTM Print — Official Distributor Italy",
    description: locale === 'it'
      ? "DTM Print: soluzioni di stampa specializzate per etichette e packaging. Distributore ufficiale Italia — Print Solution S.r.l."
      : "DTM Print: specialised printing solutions for labels and packaging. Official distributor Italy — Print Solution S.r.l.",
    keywords: locale === 'it'
      ? ["DTM Print", "stampa etichette DTM", "distributore DTM Print Italia"]
      : ["DTM Print", "DTM label printing", "DTM Print distributor Italy"],
    openGraph: {
      title: locale === 'it' ? "DTM Print — Distributore Ufficiale Italia | Print Solution" : "DTM Print — Official Distributor Italy | Print Solution",
      description: locale === 'it' ? "Soluzioni di stampa specializzate per etichette e packaging DTM Print." : "Specialised printing solutions for labels and packaging by DTM Print.",
      images: ["/images/brands/dtm-print.jpg"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/brand/dtm-print" },
  };
}

export default async function DTMPrintPage() {
  const locale = await getLocale();

  const features = locale === 'it' ? [
    { icon: "🇩🇪", title: "Qualità Tedesca", desc: "Engineering e design europeo" },
    { icon: "🏷️", title: "Etichette", desc: "Stampanti specializzate per etichette" },
    { icon: "📦", title: "Packaging", desc: "Soluzioni per imballaggio e finitura" },
  ] : [
    { icon: "🇩🇪", title: "German Quality", desc: "European engineering and design" },
    { icon: "🏷️", title: "Labels", desc: "Specialised label printers" },
    { icon: "📦", title: "Packaging", desc: "Packaging and finishing solutions" },
  ];

  return (
    <>
      <PageHero
        title="DTM Print"
        subtitle={locale === 'it'
          ? "Soluzioni di stampa specializzate per etichette e packaging. Innovazione e qualità tedesca al servizio della tua produzione."
          : "Specialised printing solutions for labels and packaging. German innovation and quality at the service of your production."}
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <Image src="/images/brands/dtm-print.jpg" alt="DTM Print" width={300} height={100} className="h-14 w-auto mx-auto mb-8" />
          </div>
          <div className="card-modern p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">
              {locale === 'it' ? 'Qualità e Innovazione nella Stampa' : 'Quality and Innovation in Printing'}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              {locale === 'it'
                ? "DTM Print è un marchio internazionale specializzato in soluzioni di stampa per etichette e packaging. Con sede in Germania, DTM Print sviluppa tecnologie innovative per la stampa digitale in piccoli e medi lotti."
                : "DTM Print is an international brand specialised in printing solutions for labels and packaging. Based in Germany, DTM Print develops innovative technologies for short and medium run digital printing."}
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              {locale === 'it'
                ? "La gamma DTM Print include stampanti per etichette, sistemi di finitura e materiali di consumo studiati per garantire risultati professionali in ogni applicazione."
                : "The DTM Print range includes label printers, finishing systems and consumables designed to deliver professional results in every application."}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {locale === 'it'
                ? "Print Solution è distributore ufficiale DTM Print per l'Italia. Contattaci per informazioni sulla gamma completa."
                : "Print Solution is the official DTM Print distributor for Italy. Contact us for information on the complete range."}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((f) => (
                <div key={f.title} className="text-center p-4">
                  <span className="text-3xl block mb-2">{f.icon}</span>
                  <h4 className="font-bold text-dark-800 mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="mailto:info@printsolution.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="btn-primary">
                {locale === 'it' ? 'Contattaci per Info' : 'Contact Us for Info'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
