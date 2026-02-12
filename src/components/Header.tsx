"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/", homeOnly: true },
  {
    label: "Soluzioni",
    children: [
      { label: "Packaging", href: "/soluzioni/packaging", desc: "Box maker e stampa su cartone" },
      { label: "Etichette", href: "/soluzioni/etichette", desc: "Stampa etichette in bobina e foglio" },
      { label: "Shopper & Lusso", href: "/soluzioni#shopper", desc: "Shopper, buste e packaging premium" },
      { label: "Labbratura Libri", href: "/soluzioni#labbratura", desc: "Stampa bordi libri e quaderni" },
      { label: "Consumabili", href: "/soluzioni/consumabili", desc: "Inchiostri, testine e materiali" },
    ],
  },
  { label: "Promozioni", href: "/promozioni" },
  { label: "Usato", href: "/usato" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        mobileOpen
          ? "bg-white shadow-lg"
          : scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-200/50"
            : "bg-dark-900/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0 relative z-10">
          <Image
            src="/images/logo.png"
            alt="Print Solution S.r.l."
            width={180}
            height={60}
            className="h-10 w-auto transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.filter((item) => !('homeOnly' in item && item.homeOnly && isHome)).map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                    scrolled ? "text-gray-600 hover:text-cyan-500" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <svg className="inline ml-1 w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-xl shadow-glass rounded-2xl py-3 min-w-[240px] border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors rounded-xl mx-2"
                      >
                        <span className="font-medium">{child.label}</span>
                        {"desc" in child && (
                          <span className="block text-xs text-gray-400 mt-0.5">{(child as {desc?: string}).desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                  scrolled ? "text-gray-600 hover:text-cyan-500" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="btn-primary ml-4 text-base !py-3 !px-6">Richiedi Demo</a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center relative z-10 ${mobileOpen || scrolled ? "text-dark-900" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] z-[9998] bg-white transition-all duration-300 overflow-y-auto ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 space-y-1">
          {navigation.filter((item) => !('homeOnly' in item && item.homeOnly && isHome)).map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="py-2 font-semibold text-gray-400 text-sm uppercase tracking-wider mt-4">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-3 pl-0 min-h-[44px] flex items-center text-gray-700 hover:text-cyan-500 text-lg border-b border-gray-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block py-3 min-h-[44px] flex items-center text-gray-700 hover:text-cyan-500 text-lg border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          {/* CTA removed from mobile menu */}
        </nav>
      </div>
    </header>
  );
}
