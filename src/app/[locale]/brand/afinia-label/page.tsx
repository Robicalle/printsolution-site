import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === 'it' ? "Afinia Label — Distributore Ufficiale Italia" : "Afinia Label — Official Distributor Italy",
    description: locale === 'it'
      ? "Afinia Label: stampanti per etichette a colori in bobina, fustellatori digitali e sistemi completi. Distributore ufficiale Italia — Print Solution."
      : "Afinia Label: roll-fed colour label printers, digital die-cutters and complete systems. Official distributor Italy — Print Solution.",
    keywords: locale === 'it'
      ? ["Afinia Label", "stampante etichette bobina", "fustellatore digitale etichette", "distributore Afinia Italia"]
      : ["Afinia Label", "roll-fed label printer", "digital label die-cutter", "Afinia distributor Italy"],
    openGraph: {
      title: locale === 'it' ? "Afinia Label — Distributore Ufficiale Italia | Print Solution" : "Afinia Label — Official Distributor Italy | Print Solution",
      description: locale === 'it' ? "Stampanti per etichette a colori in bobina e fustellatori digitali Afinia Label." : "Roll-fed colour label printers and digital die-cutters by Afinia Label.",
      images: ["/images/brands/afinia-label.avif"],
      type: "website",
      locale: locale === 'it' ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: "/brand/afinia-label" },
  };
}

export default async function AfiniaLabelPage() {
  const locale = await getLocale();

  const products = locale === 'it' ? [
    { name: "Afinia L901", desc: "Professionale Memjet, doppio nero, alta produttività", tag: "Professionale" },
    { name: "Afinia X350", desc: "Roll-to-roll pigmentata, 45 m/min, inchiostri a base acqua", tag: "Alta Produzione" },
    { name: "Afinia LT5C", desc: "Toner LED, resistenza immediata, ambienti industriali", tag: "Industriale" },
    { name: "Afinia DLP-2200", desc: "Sistema completo: stampa, lamina, fustella, riavvolge", tag: "Sistema Completo" },
    { name: "Serie DLF", desc: "Fustellatori digitali, taglio qualsiasi forma a 600 mm/sec", tag: "Finitura" },
  ] : [
    { name: "Afinia L901", desc: "Professional Memjet, dual black, high productivity", tag: "Professional" },
    { name: "Afinia X350", desc: "Roll-to-roll pigmented, 45 m/min, water-based inks", tag: "High Production" },
    { name: "Afinia LT5C", desc: "LED toner, instant durability, industrial environments", tag: "Industrial" },
    { name: "Afinia DLP-2200", desc: "Complete system: print, laminate, die-cut, rewind", tag: "Complete System" },
    { name: "DLF Series", desc: "Digital die-cutters, any shape at 600 mm/sec", tag: "Finishing" },
  ];

  const stats = locale === 'it' ? [
    { value: "4", label: "Stampanti" },
    { value: "4", label: "Fustellatori" },
    { value: "1", label: "Sistema Completo" },
    { value: "1", label: "Applicatore" },
  ] : [
    { value: "4", label: "Printers" },
    { value: "4", label: "Die-Cutters" },
    { value: "1", label: "Complete System" },
    { value: "1", label: "Applicator" },
  ];

  const technologies = locale === 'it' ? [
    { name: "VersaPass", desc: "Inchiostri dye, formato benchtop. Per L701 e L901.", color: "from-cyan-500 to-cyan-600" },
    { name: "DuraLink", desc: "Inchiostri pigmentati, alta produzione. Per X350.", color: "from-magenta-500 to-magenta-600" },
    { name: "DuraFlex", desc: "Pigmento modulare, massima flessibilità.", color: "from-yellow-500 to-yellow-600" },
  ] : [
    { name: "VersaPass", desc: "Dye inks, benchtop format. For L701 and L901.", color: "from-cyan-500 to-cyan-600" },
    { name: "DuraLink", desc: "Pigmented inks, high production. For X350.", color: "from-magenta-500 to-magenta-600" },
    { name: "DuraFlex", desc: "Modular pigment, maximum flexibility.", color: "from-yellow-500 to-yellow-600" },
  ];

  return (
    <>
      <PageHero
        title="Afinia Label"
        subtitle={locale === 'it'
          ? "Stampanti per etichette a colori in bobina, fustellatori digitali e sistemi integrati. Print Solution è distributore ufficiale Afinia Label per l'Italia."
          : "Roll-fed colour label printers, digital die-cutters and integrated systems. Print Solution is the official Afinia Label distributor for Italy."}
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image src="/images/brands/afinia-label.avif" alt="Afinia Label" width={400} height={200} className="h-16 w-auto mb-8" />
              <h2 className="text-3xl font-bold text-dark-800 mb-6">
                {locale === 'it' ? 'Il Brand di Riferimento per le Etichette Digitali' : 'The Leading Brand in Digital Labels'}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                {locale === 'it'
                  ? "Afinia Label è un marchio leader nella stampa digitale di etichette, con una gamma completa che copre dall'entry level alla produzione industriale. La tecnologia Memjet alla base delle stampanti Afinia garantisce velocità, qualità e costi operativi contenuti."
                  : "Afinia Label is a leading brand in digital label printing, with a complete range covering entry-level to industrial production. The Memjet technology behind Afinia printers ensures speed, quality and low operating costs."}
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                {locale === 'it'
                  ? "Gli inchiostri a base acqua (>70% acqua) sono eco-friendly, privi di VOC e sostanze pericolose, sicuri e versatili. Nessun solvente, nessun odore."
                  : "Water-based inks (>70% water) are eco-friendly, free of VOCs and hazardous substances, safe and versatile. No solvents, no odour."}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {locale === 'it'
                  ? "Print Solution è distributore ufficiale Afinia Label per l'Italia, con sala demo attrezzata, assistenza tecnica diretta e formazione."
                  : "Print Solution is the official Afinia Label distributor for Italy, with a fully equipped demo room, direct technical support and training."}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-3xl p-12 text-center">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                <Image src="/images/products/afinia-x350-site.webp" alt="Afinia X350" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-6 shadow-card">
                    <p className="text-3xl font-bold text-cyan-500">{s.value}</p>
                    <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-dark-800 mb-8 text-center">
            {locale === 'it' ? 'Gamma Prodotti Afinia Label' : 'Afinia Label Product Range'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card-modern p-6 hover:-translate-y-1 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 mb-4">
                  {p.tag}
                </span>
                <h4 className="text-lg font-bold text-dark-800 mb-2">{p.name}</h4>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <Link href="/soluzioni/etichette" className="text-cyan-500 text-sm font-semibold hover:underline">
                  {locale === 'it' ? 'Scopri di più →' : 'Learn more →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {locale === 'it' ? 'Tecnologie Memjet' : 'Memjet Technologies'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {technologies.map((t) => (
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
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {locale === 'it' ? 'Vuoi Vedere le Stampanti Afinia in Azione?' : 'Want to See Afinia Printers in Action?'}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {locale === 'it'
              ? 'Richiedi una consulenza gratuita. Vieni nella nostra sala demo a Sesto San Giovanni, porta le tue etichette e testa la qualità.'
              : 'Request a free consultation. Visit our demo room in Sesto San Giovanni, bring your labels and test the quality.'}
          </p>
        </div>
      </section>
    </>
  );
}
