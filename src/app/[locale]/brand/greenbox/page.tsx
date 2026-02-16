import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GreenBox — Stampanti Digitali per Packaging",
  description:
    "GreenBox EVO: stampante digitale single-pass per packaging, shopper e scatole. Entry-level per il packaging digitale. Distributore Print Solution.",
  keywords: ["GreenBox", "GreenBox EVO", "stampante packaging digitale", "stampa single-pass"],
  openGraph: {
    title: "GreenBox — Stampanti Digitali per Packaging | Print Solution",
    description: "Stampanti digitali single-pass per packaging, shopper e scatole.",
    images: ["/images/brands/greenbox.png"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/brand/greenbox" },
};

export default function GreenBoxPage() {
  return (
    <>
      <PageHero
        title="GreenBox"
        subtitle="Stampanti digitali single-pass per packaging. L'entry point ideale nel mondo della stampa digitale su cartone, shopper e sacchetti."
        breadcrumb="Brand"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image src="/images/brands/greenbox.png" alt="GreenBox" width={300} height={100} className="h-14 w-auto mb-8" />
              <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Digitale su Packaging Accessibile</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                GreenBox EVO è la versione compatta ed entry-level della gamma stampanti packaging Print Solution. 
                Con tecnologia inkjet single-pass e testina HP Pagewide, permette di stampare su shopper, sacchetti, 
                scatole e buste con investimento modesto e qualità professionale.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Gli inchiostri pigmentati a base acqua sono senza solventi, inodori e resistenti ad agenti atmosferici, 
                sfregamento e acqua. Versatili e adatti a molteplici applicazioni.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Print Solution fornisce assistenza diretta, formazione e pacchetti Care Pack Silver, Golden e Platinum.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-3xl p-8">
              <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                <Image src="/images/products/greenbox-evo-front-nobg.png" alt="GreenBox EVO" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-dark-800 mb-6 text-center">GreenBox EVO — Specifiche</h3>
              <div className="space-y-3">
                {[
                  ["Tecnologia", "Inkjet single-pass CMYK"],
                  ["Testina", "HP Pagewide, 30 cm"],
                  ["Risoluzione", "1200 × 1200 dpi"],
                  ["Velocità", "Fino a 30 m/min"],
                  ["Passaggio carta", "Fino a 70 cm"],
                  ["Spessore max", "8 cm"],
                  ["Inchiostri", "3L/colore, pigmentati acqua"],
                  ["Alimentazione", "230V AC monofase"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between bg-white rounded-xl px-4 py-3 shadow-sm">
                    <span className="text-sm font-medium text-gray-600">{label}</span>
                    <span className="text-sm font-bold text-dark-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Applicazioni</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🛍️", label: "Shopper di carta" },
              { icon: "👜", label: "Sacchetti juta" },
              { icon: "📦", label: "Scatole pizza/torte" },
              { icon: "📬", label: "Buste spedizione" },
              { icon: "🎁", label: "Packaging regalo" },
              { icon: "👟", label: "Scatole calzature" },
            ].map((a) => (
              <div key={a.label} className="card-modern p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl block mb-2">{a.icon}</span>
                <p className="text-sm font-medium text-gray-600">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-dark-800 mb-8 text-center">GreenBox EVO vs EDM-650X</h3>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-3 px-4 text-sm font-bold text-dark-800">Esigenza</th>
                  <th className="py-3 px-4 text-sm font-bold text-dark-800">Soluzione Consigliata</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Piccole tirature, shopper", "GreenBox EVO"],
                  ["Grandi formati industriali", "EDM-650X"],
                  ["Budget contenuto", "GreenBox EVO"],
                  ["Cartone ondulato largo (>70cm)", "EDM-650X"],
                ].map(([need, solution]) => (
                  <tr key={need} className="border-b border-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-600">{need}</td>
                    <td className="py-3 px-4 text-sm font-semibold text-cyan-500">{solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Inizia a Stampare il Tuo Packaging</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Porta i tuoi materiali e testa la GreenBox EVO nella nostra sala demo a Sesto San Giovanni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prodotti/greenbox-evo" className="btn-primary text-lg">Scheda Prodotto GreenBox EVO</Link>
          </div>
        </div>
      </section>
    </>
  );
}
