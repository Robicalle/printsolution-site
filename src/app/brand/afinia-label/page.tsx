import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Afinia Label — Distributore Ufficiale Italia",
  description:
    "Afinia Label: stampanti per etichette a colori in bobina, fustellatori digitali e sistemi completi. Distributore ufficiale Italia — Print Solution.",
  keywords: ["Afinia Label", "stampante etichette bobina", "fustellatore digitale etichette", "distributore Afinia Italia"],
  openGraph: {
    title: "Afinia Label — Distributore Ufficiale Italia | Print Solution",
    description: "Stampanti per etichette a colori in bobina e fustellatori digitali Afinia Label.",
    images: ["/images/brands/afinia-label.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/brand/afinia-label" },
};

const products = [
  { name: "Afinia L701", desc: "Entry level Memjet, 1600 dpi, compatta e accessibile", tag: "Entry Level" },
  { name: "Afinia L901", desc: "Professionale Memjet, doppio nero, alta produttività", tag: "Professionale" },
  { name: "Afinia X350", desc: "Roll-to-roll pigmentata, 45 m/min, inchiostri a base acqua", tag: "Alta Produzione" },
  { name: "Afinia LT5C", desc: "Toner LED, resistenza immediata, ambienti industriali", tag: "Industriale" },
  { name: "Afinia DLP-2200", desc: "Sistema completo: stampa, lamina, fustella, riavvolge", tag: "Sistema Completo" },
  { name: "Serie DLF", desc: "Fustellatori digitali, taglio qualsiasi forma a 600 mm/sec", tag: "Finitura" },
  { name: "Afinia AF200", desc: "Applicatore semiautomatico per superfici piane", tag: "Applicatore" },
];

export default function AfiniaLabelPage() {
  return (
    <>
      <PageHero
        title="Afinia Label"
        subtitle="Stampanti per etichette a colori in bobina, fustellatori digitali e sistemi integrati. Print Solution è distributore ufficiale Afinia Label per l'Italia."
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image src="/images/brands/afinia-label.avif" alt="Afinia Label" width={400} height={200} className="h-16 w-auto mb-8" />
              <h2 className="text-3xl font-bold text-dark-800 mb-6">Il Brand di Riferimento per le Etichette Digitali</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Afinia Label è un marchio leader nella stampa digitale di etichette, con una gamma completa che copre 
                dall&apos;entry level alla produzione industriale. La tecnologia Memjet alla base delle stampanti Afinia 
                garantisce velocità, qualità e costi operativi contenuti.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Gli inchiostri a base acqua (&gt;70% acqua) sono eco-friendly, privi di VOC e sostanze pericolose, 
                idonei per contatto alimentare indiretto. Nessun solvente, nessun odore.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Print Solution è distributore ufficiale Afinia Label per l&apos;Italia, con sala demo attrezzata, 
                assistenza tecnica diretta e formazione.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-3xl p-12 text-center">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                <Image src="/images/products/afinia-x350-site.webp" alt="Afinia X350" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "4", label: "Stampanti" },
                  { value: "4", label: "Fustellatori" },
                  { value: "1", label: "Sistema Completo" },
                  { value: "1", label: "Applicatore" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-6 shadow-card">
                    <p className="text-3xl font-bold text-cyan-500">{s.value}</p>
                    <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-dark-800 mb-8 text-center">Gamma Prodotti Afinia Label</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card-modern p-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 mb-4">
                  {p.tag}
                </span>
                <h4 className="text-lg font-bold text-dark-800 mb-2">{p.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <Link href="/soluzioni/etichette" className="text-cyan-500 text-sm font-semibold hover:underline">
                  Scopri di più →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Tecnologie Memjet</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {[
              { name: "VersaPass", desc: "Inchiostri dye, formato benchtop. Per L701 e L901.", color: "from-cyan-500 to-cyan-600" },
              { name: "DuraLink", desc: "Inchiostri pigmentati, alta produzione. Per X350.", color: "from-magenta-500 to-magenta-600" },
              { name: "DuraFlex", desc: "Pigmento modulare, massima flessibilità.", color: "from-yellow-500 to-yellow-600" },
            ].map((t) => (
              <div key={t.name} className="card-modern p-6 text-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} mx-auto mb-4 flex items-center justify-center text-white font-bold`}>
                  {t.name[0]}
                </div>
                <h4 className="font-bold text-dark-800 mb-2">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Vuoi Vedere le Stampanti Afinia in Azione?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Prenota una visita nella nostra sala demo a Sesto San Giovanni. Porta le tue etichette e testa la qualità.
          </p>
          <Link href="/contatti" className="btn-primary text-lg">Prenota una Demo</Link>
        </div>
      </section>
    </>
  );
}
