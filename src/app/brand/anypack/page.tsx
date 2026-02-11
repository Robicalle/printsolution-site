import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Anypack — Distributore Ufficiale Italia",
  description:
    "Anypack: box maker automatici per scatole in cartone ondulato. AB1800 PRO, AB2500, AB3000. Distributore ufficiale Italia — Print Solution.",
  keywords: ["Anypack", "box maker automatico", "macchina scatole cartone", "distributore Anypack Italia"],
  openGraph: {
    title: "Anypack — Distributore Ufficiale Italia | Print Solution",
    description: "Box maker automatici per scatole in cartone ondulato. Distributore ufficiale Anypack.",
    images: ["/images/brands/anypack.avif"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/brand/anypack" },
};

export default function AnypackPage() {
  return (
    <>
      <PageHero
        title="Anypack"
        subtitle="Box maker automatici per la creazione di scatole in cartone ondulato. Taglio, scanalatura, cordonatura, fustellatura e incollaggio in un'unica operazione."
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image src="/images/brands/anypack.avif" alt="Anypack" width={300} height={100} className="h-14 w-auto mb-8" />
              <h2 className="text-3xl font-bold text-dark-800 mb-6">Il Box Maker che Rivoluziona il Packaging</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Anypack è il produttore leader di box maker automatici progettati per varietà multiple e piccoli ordini. 
                Con oltre 6 anni di esperienza e certificazione CE, le macchine Anypack integrano componenti premium 
                giapponesi (Keyence, Panasonic) e lame in acciaio SKD11 per prestazioni industriali.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Un solo operatore, cambio formato in 3 secondi, 100+ modelli Fefco precaricati e 20.000 record 
                memorizzabili: Anypack elimina lo stock di scatole e permette la produzione on-demand.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Print Solution è distributore ufficiale Anypack per l&apos;Italia, con demo dal vivo a Sesto San Giovanni.
              </p>
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <Image src="/images/products/ab2500-hero.webp" alt="Anypack AB2500" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-dark-800 mb-8 text-center">Gamma Modelli</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "AB1800 PRO", sheet: "1800 mm", height: "1000 mm", weight: "2500 kg", dim: "2900×2430×2025 mm" },
              { name: "AB2500", sheet: "2500 mm", height: "1500 mm", weight: "3800 kg", dim: "2900×3550×2200 mm" },
              { name: "AB3000", sheet: "3000 mm", height: "2000 mm", weight: "4200 kg", dim: "3400×4050×2200 mm" },
            ].map((m, i) => (
              <div key={m.name} className={`card-modern p-6 ${i === 1 ? 'ring-2 ring-cyan-500 relative' : ''}`}>
                {i === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">Best Seller</span>}
                <h4 className="text-xl font-bold text-dark-800 mb-4">{m.name}</h4>
                <div className="space-y-2 text-sm">
                  {[
                    ["Foglio max", m.sheet],
                    ["Altezza scatola", m.height],
                    ["Peso", m.weight],
                    ["Dimensioni", m.dim],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-gray-400">{label}</span>
                      <span className="font-medium text-dark-800">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card-modern p-8 lg:p-10">
            <h3 className="text-xl font-bold text-dark-800 mb-6">Perché Anypack AB2500</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Cambio formato in 3 secondi",
                "500–600 pezzi/ora",
                "1 solo operatore necessario",
                "100+ modelli Fefco precaricati",
                "20.000 record memorizzabili",
                "Produzione on-demand, zero stock",
                "Componenti Keyence e Panasonic",
                "Lame SKD11 — nessuna sostituzione per anni",
                "Touchscreen 15,6\" intuitivo",
                "Integrazione WMS opzionale",
                "Scansione barcode per input",
                "83% cartone riciclabile",
              ].map((v) => (
                <div key={v} className="flex items-start text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Vieni a Vedere il Box Maker in Azione</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Demo dal vivo nella nostra sede a Sesto San Giovanni. Porta il tuo cartone e crea la tua prima scatola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Anypack&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Anypack.%0A%0AGrazie" className="btn-primary text-lg">Prenota una Demo</a>
            <Link href="/soluzioni/packaging" className="btn-outline text-lg">Tutte le Soluzioni Packaging</Link>
          </div>
        </div>
      </section>
    </>
  );
}
