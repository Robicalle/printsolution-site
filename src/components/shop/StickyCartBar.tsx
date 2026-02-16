"use client";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCartBar() {
  const { totalItems, totalPrice } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (totalItems === 0 || !visible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 animate-in slide-in-from-top duration-300">
      <div className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg">
        <div className="container-custom flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-3">
            <span className="bg-cyan-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
            <span className="text-white text-sm font-medium hidden sm:inline">
              {totalItems} {totalItems === 1 ? "articolo" : "articoli"} nel carrello
            </span>
            <span className="text-cyan-400 font-bold text-sm">
              €{totalPrice.toFixed(2)} <span className="text-gray-400 font-normal text-xs">+ IVA</span>
            </span>
          </div>
          <Link
            href="/shop/checkout"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Vai al Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}
