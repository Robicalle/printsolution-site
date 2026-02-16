"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import MegaMenu, { MegaMenuMobile } from "./MegaMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  const navigation = [
    { label: t("home"), href: "/", homeOnly: true },
    {
      label: t("solutions"),
      children: [
        { label: t("packaging"), href: "/soluzioni/packaging", desc: t("packagingDesc") },
        { label: t("labels"), href: "/soluzioni/etichette", desc: t("labelsDesc") },
        { label: t("shopperLuxury"), href: "/soluzioni/shopper", desc: t("shopperLuxuryDesc") },
        { label: t("bookEdging"), href: "/soluzioni/labbratura", desc: t("bookEdgingDesc") },
        { label: t("productComparison"), href: "/confronto-prodotti", desc: t("productComparisonDesc") },
      ],
    },
    { label: t("promotions"), href: "/promozioni" },
    { label: t("used"), href: "/usato" },
    { label: t("aboutUs"), href: "/chi-siamo" },
    { label: t("news"), href: "/news" },
    { label: t("contacts"), href: "/contatti" },
    { label: t("eShop"), href: "/shop", isShop: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const emailSubject = locale === "it" ? "Richiesta%20Informazioni%20Print%20Solution" : "Information%20Request%20Print%20Solution";
  const emailBody = locale === "it" ? "Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" : "Hello%2C%0A%0AI%20would%20like%20to%20receive%20information.%0A%0AThank%20you";

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
            'megaMenu' in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  className={`px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                    scrolled ? "text-gray-600 hover:text-cyan-500" : "text-white/80 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                  <svg className="inline ml-1 w-3 h-3 transition-transform" style={{ transform: openDropdown === item.label ? 'rotate(180deg)' : '' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <MegaMenu open={openDropdown === item.label} />
              </div>
            ) : item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'soluzioni'}
                  className={`px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                    scrolled ? "text-gray-600 hover:text-cyan-500" : "text-white/80 hover:text-cyan-400"
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
                          <span className="block text-xs text-gray-500 mt-0.5">{(child as {desc?: string}).desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : 'isShop' in item ? (
              <Link
                key={item.label}
                href={item.href!}
                className="ml-1 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:shadow-md hover:shadow-cyan-500/25 whitespace-nowrap"
              >
                🛒 {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                  scrolled ? "text-gray-600 hover:text-cyan-500" : "text-white/80 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <a href={`mailto:info@printsolutionsrl.it?subject=${emailSubject}&body=${emailBody}`} className="btn-primary ml-4 text-base !py-3 !px-6 animate-pulse-subtle">{t("requestDemo")}</a>
          <LanguageSwitcher scrolled={scrolled} />
        </nav>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher scrolled={scrolled || mobileOpen} />
          <button
            className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center relative z-10 ${mobileOpen || scrolled ? "text-dark-900" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
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
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] z-[9998] bg-white transition-all duration-300 overflow-y-auto ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 space-y-1">
          {navigation.filter((item) => !('homeOnly' in item && item.homeOnly && isHome)).map((item) =>
            'megaMenu' in item ? (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between py-3 min-h-[44px] text-gray-700 hover:text-cyan-500 text-lg border-b border-gray-50"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                >
                  {item.label}
                  <svg className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <MegaMenuMobile open={mobileProductsOpen} onNavigate={() => setMobileOpen(false)} />
              </div>
            ) : item.children ? (
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
          {/* Mobile CTA buttons */}
          <div className="mt-6 px-0">
            <Link href="/shop"
               className="block w-full text-center py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg text-lg"
               onClick={() => setMobileOpen(false)}>
              🛒 {t("eShopConsumables")}
            </Link>
            <a href={`mailto:info@printsolutionsrl.it?subject=${emailSubject}&body=${emailBody}`}
               className="block w-full text-center py-4 mt-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg text-lg"
               onClick={() => setMobileOpen(false)}>
              {t("requestDemo")} →
            </a>
            <a href="tel:+390249439417" 
               className="block w-full text-center py-4 mt-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-full text-lg"
               onClick={() => setMobileOpen(false)}>
              📞 {t("callUs")}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
