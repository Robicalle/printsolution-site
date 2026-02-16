"use client";
import { Link } from "@/i18n/navigation";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 px-4">
      <div className="container-custom max-w-2xl text-center">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="text-7xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ordine Confermato!</h1>
          <p className="text-lg text-gray-600 mb-2">
            Grazie per il tuo acquisto. Riceverai una conferma via email.
          </p>
          <p className="text-gray-500 mb-8">
            Gli ordini ricevuti entro le 12:00 vengono spediti lo stesso giorno con consegna in 24/48 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all">
              Continua gli acquisti
            </Link>
            <Link href="/" className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-gray-300 transition-all">
              Torna alla Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
