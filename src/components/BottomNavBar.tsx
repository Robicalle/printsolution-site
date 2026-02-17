"use client";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const navItems = [
  {
    labelIt: "Home",
    labelEn: "Home",
    href: "/",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    match: (path: string) => path === "/" || /^\/(?:it|en)\/?$/.test(path),
  },
  {
    labelIt: "Soluzioni",
    labelEn: "Solutions",
    href: "/soluzioni",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    match: (path: string) => /soluzioni|solutions|prodotti|products/.test(path),
  },
  {
    labelIt: "Shop",
    labelEn: "Shop",
    href: "/shop",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    match: (path: string) => /shop/.test(path),
  },
  {
    labelIt: "Contatti",
    labelEn: "Contact",
    href: "/contatti",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    match: (path: string) => /contatti|contact/.test(path),
  },
];

export default function BottomNavBar() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[9997] bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex items-center justify-around h-14 pb-[env(safe-area-inset-bottom)]">
        {navItems.map((item) => {
          const isActive = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 min-w-[60px] py-1 transition-colors ${
                isActive ? "text-cyan-600" : "text-gray-400"
              }`}
            >
              <span className={isActive ? "[&>svg]:stroke-[2.5]" : ""}>{item.icon}</span>
              <span className="text-[10px] font-medium">
                {locale === "it" ? item.labelIt : item.labelEn}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
