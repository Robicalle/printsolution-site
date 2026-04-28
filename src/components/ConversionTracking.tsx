"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Helper GA4
function gtagEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params);
  }
}

/**
 * ConversionTracking
 * Ascolta globalmente tutti i click su:
 *  - mailto: → evento "click_email"
 *  - tel:    → evento "click_phone"
 *  - data-track → evento custom (usato per CTA bottoni)
 *
 * Non richiede modifiche agli altri componenti.
 */
export default function ConversionTracking() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a, button") as HTMLElement | null;
      if (!target) return;

      const href = (target as HTMLAnchorElement).href || "";
      const trackAttr = target.getAttribute("data-track");
      const trackLabel = target.getAttribute("data-track-label") || target.textContent?.trim().slice(0, 50) || "";

      // Click su email
      if (href.startsWith("mailto:")) {
        gtagEvent("click_email", {
          email_address: href.replace("mailto:", "").split("?")[0],
          page_path: pathname,
        });
        return;
      }

      // Click su telefono
      if (href.startsWith("tel:")) {
        gtagEvent("click_phone", {
          phone_number: href.replace("tel:", ""),
          page_path: pathname,
        });
        return;
      }

      // CTA con attributo data-track esplicito
      if (trackAttr) {
        gtagEvent(trackAttr, {
          label: trackLabel,
          page_path: pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
