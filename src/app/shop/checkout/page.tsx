"use client";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (items.length === 0) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            sku: i.sku,
          })),
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Errore durante il checkout. Riprova.");
      }
    } catch {
      setError("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 px-4">
        <div className="container-custom max-w-2xl text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Carrello vuoto</h1>
          <p className="text-gray-500 mb-8">Non hai ancora aggiunto prodotti al carrello.</p>
          <Link href="/shop" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all">
            Vai allo Shop →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20 px-4">
      <div className="container-custom max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/shop" className="hover:text-cyan-500">E-Shop</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">Checkout</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Riepilogo Ordine</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  🖋️
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  {item.sku && <p className="text-xs text-gray-400">{item.sku}</p>}
                  <p className="text-sm text-gray-500 mt-1">Quantità: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">€{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-xs text-gray-400">€{item.price.toFixed(2)} cad.</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 h-fit sticky top-28">
            <h2 className="font-bold text-lg text-gray-900 mb-4">Riepilogo</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotale</span>
                <span className="font-medium">€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">IVA (22%)</span>
                <span className="font-medium">€{(totalPrice * 0.22).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Spedizione</span>
                <span className="font-medium text-green-600">Calcolata al checkout</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Totale</span>
                <span>€{(totalPrice * 1.22).toFixed(2)}</span>
              </div>
            </div>

            {error && (
              <p className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl">{error}</p>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Elaborazione...
                </span>
              ) : (
                "💳 Paga ora"
              )}
            </button>

            <p className="mt-3 text-xs text-gray-400 text-center">
              Pagamento sicuro tramite Stripe. I dati della carta non passano dal nostro server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
