"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher({ scrolled }: { scrolled?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: "it" | "en") => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className={`flex items-center gap-0.5 text-xs font-semibold ${isPending ? "opacity-50" : ""}`}>
      <button
        onClick={() => switchLocale("it")}
        className={`px-1.5 py-1 rounded transition-colors ${
          locale === "it"
            ? "text-cyan-500"
            : scrolled
              ? "text-gray-400 hover:text-gray-600"
              : "text-white/50 hover:text-white/80"
        }`}
        aria-label="Italiano"
      >
        IT
      </button>
      <span className={scrolled ? "text-gray-300" : "text-white/30"}>|</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-1.5 py-1 rounded transition-colors ${
          locale === "en"
            ? "text-cyan-500"
            : scrolled
              ? "text-gray-400 hover:text-gray-600"
              : "text-white/50 hover:text-white/80"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
