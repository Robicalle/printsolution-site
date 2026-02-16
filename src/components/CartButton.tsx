"use client";
import { useCart } from "@/lib/cart-context";

export default function CartButton() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-24 right-24 lg:bottom-8 lg:right-24 z-[9998] bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
      aria-label={`Carrello (${totalItems} articoli)`}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
