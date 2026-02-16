"use client";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function CartSidebar() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[10000] transition-opacity" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[10001] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">
              🛒 Carrello {totalItems > 0 && <span className="text-cyan-500">({totalItems})</span>}
            </h2>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-500 text-lg">Il carrello è vuoto</p>
                <Link href="/shop" onClick={() => setIsOpen(false)} className="inline-block mt-4 text-cyan-500 hover:text-cyan-600 font-medium">
                  Vai allo shop →
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
                    {item.image && (
                      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                        <Image src={item.image} alt={item.name} width={64} height={64} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                      {item.sku && <p className="text-xs text-gray-400">{item.sku}</p>}
                      <p className="text-cyan-600 font-bold mt-1">€{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <div className="flex items-center gap-1 bg-white rounded-lg border">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700">−</button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotale (IVA esclusa)</span>
                <span className="text-2xl font-bold text-gray-900">€{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400">IVA e spedizione calcolati al checkout</p>
              <Link
                href="/shop/checkout"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-lg"
              >
                Procedi al Checkout →
              </Link>
              <button onClick={() => setIsOpen(false)} className="block w-full text-center py-2 text-gray-500 hover:text-gray-700 text-sm">
                Continua gli acquisti
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
