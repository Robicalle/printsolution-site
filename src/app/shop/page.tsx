import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/shop-data";

export const metadata: Metadata = {
  title: "E-Shop Consumabili",
  description: "Acquista online cartucce, inchiostri e consumabili originali per la tua stampante. Spedizione in 24/48h.",
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
            🛒 E-Shop Consumabili
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Consumabili <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Originali</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Acquista le cartucce e i ricambi originali per la tua stampante. 
            Magazzino sempre fornito, spedizione in <strong>24/48 ore</strong>.
          </p>
          <p className="text-sm text-gray-400">
            Tutti i prezzi si intendono IVA esclusa. Pagamento sicuro con carta di credito.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="pb-12 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl">🚚</div>
              <div>
                <p className="font-semibold text-gray-900">Spedizione Rapida</p>
                <p className="text-sm text-gray-500">Ordini entro le 12:00 → spediti oggi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl">✅</div>
              <div>
                <p className="font-semibold text-gray-900">Prodotti Originali</p>
                <p className="text-sm text-gray-500">Garantiti dai rispettivi produttori</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl">🔒</div>
              <div>
                <p className="font-semibold text-gray-900">Pagamento Sicuro</p>
                <p className="text-sm text-gray-500">Carte di credito, PayPal, Apple Pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category heading */}
      <section className="pb-6 px-4">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900">Seleziona il tuo modello di stampante</h2>
        </div>
      </section>

      {/* Categories grid */}
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-4 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={280}
                    height={210}
                    className="object-contain group-hover:scale-110 transition-transform duration-300 max-h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{cat.name}</h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{cat.description}</p>
                  {cat.products.length > 0 && (
                    <p className="text-xs text-cyan-500 font-medium mt-2">{cat.products.length} prodotti disponibili</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
