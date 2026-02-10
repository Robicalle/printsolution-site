import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NeurALabel — Distributore Ufficiale Italia",
  description:
    "NeurALabel: stampanti per etichette industriali ad alta velocità. Distributore ufficiale Italia — Print Solution S.r.l.",
  keywords: ["NeurALabel", "stampante etichette industriale", "etichette alta velocità", "distributore NeurALabel Italia"],
  openGraph: {
    title: "NeurALabel — Distributore Ufficiale Italia | Print Solution",
    description: "Stampanti per etichette industriali ad alta velocità NeurALabel.",
    images: ["/images/brands/neuralabel.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/brand/neuralabel" },
};

export default function NeurALabelPage() {
  return (
    <>
      <PageHero
        title="NeurALabel"
        subtitle="Stampanti industriali per etichette ad alta velocità e qualità. Soluzioni robuste per ambienti produttivi esigenti."
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <Image src="/images/brands/neuralabel.avif" alt="NeurALabel" width={300} height={100} className="h-14 w-auto mx-auto mb-8" />
          </div>
          <div className="card-modern p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-dark-800 mb-6">Stampa Etichette Industriale</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              NeurALabel è un brand specializzato nella produzione di stampanti per etichette industriali. 
              Le soluzioni NeurALabel sono progettate per ambienti produttivi che richiedono alta velocità, 
              affidabilità e qualità costante su grandi volumi.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Con tecnologia inkjet avanzata, le stampanti NeurALabel offrono risoluzione elevata, 
              gestione avanzata dei colori e compatibilità con un&apos;ampia gamma di materiali per etichette.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Print Solution è distributore ufficiale NeurALabel per l&apos;Italia. Contattaci per scoprire 
              la gamma completa e organizzare una dimostrazione.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: "⚡", title: "Alta Velocità", desc: "Produttività industriale per grandi volumi" },
                { icon: "🎯", title: "Precisione", desc: "Qualità costante su ogni etichetta" },
                { icon: "🔧", title: "Robustezza", desc: "Progettate per ambienti produttivi" },
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
