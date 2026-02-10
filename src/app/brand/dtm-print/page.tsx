import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DTM Print",
  description: "DTM Print: soluzioni di stampa specializzate per etichette e packaging. Distributore ufficiale Italia — Print Solution S.r.l.",
};

export default function DTMPrintPage() {
  return (
    <>
      <PageHero
        title="DTM Print"
        subtitle="Soluzioni di stampa specializzate per etichette e packaging. Innovazione e qualità tedesca al servizio della tua produzione."
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <Image src="/images/brands/dtm-print.jpg" alt="DTM Print" width={300} height={100} className="h-14 w-auto mx-auto mb-8" />
          </div>
          <div className="card-modern p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Qualità e Innovazione nella Stampa</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              DTM Print è un marchio internazionale specializzato in soluzioni di stampa per etichette 
              e packaging. Con sede in Germania, DTM Print sviluppa tecnologie innovative per la stampa 
              digitale in piccoli e medi lotti.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              La gamma DTM Print include stampanti per etichette, sistemi di finitura e materiali di consumo 
              studiati per garantire risultati professionali in ogni applicazione.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Print Solution è distributore ufficiale DTM Print per l&apos;Italia. Contattaci per informazioni 
              sulla gamma completa.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "🇩🇪", title: "Qualità Tedesca", desc: "Engineering e design europeo" },
                { icon: "🏷️", title: "Etichette", desc: "Stampanti specializzate per etichette" },
                { icon: "📦", title: "Packaging", desc: "Soluzioni per imballaggio e finitura" },
              ].map((f) => (
                <div key={f.title} className="text-center p-4">
                  <span className="text-3xl block mb-2">{f.icon}</span>
                  <h4 className="font-bold text-dark-800 mb-1">{f.title}</h4>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/contatti" className="btn-primary">Contattaci per Info</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
