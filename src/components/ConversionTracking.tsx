"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Helper GA4. Esportato perche' lo usa anche il modale di consulenza: i click
// sui mailto vengono intercettati la' in fase di cattura, quindi non arrivano
// mai al listener globale di questo file.
export function gtagEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, params);
  }
}

// Percorso normalizzato per i parametri: "/soluzioni/etichette" -> "soluzioni/etichette"
export function formLocation(pathname: string) {
  return pathname.replace(/^\/+/, "") || "home";
}

/**
 * ConversionTracking
 * Traccia globalmente:
 *  1. Click mailto → "click_email"
 *  2. Click tel    → "click_phone"
 *  3. data-track   → evento custom (CTA bottoni)
 *  4. Scroll depth → "scroll_depth" a 25 / 50 / 75 / 90%
 *  5. Articolo letto → "article_read_complete" (scroll 90% su /blog/)
 *  6. Video play   → "video_start" su elementi <video> nativi
 */
export default function ConversionTracking() {
  const pathname = usePathname();
  const scrollThresholds = useRef<Set<number>>(new Set());
  const videoTracked = useRef<Set<HTMLVideoElement>>(new Set());

  // ── 1-3. Click tracking ─────────────────────────────────────────────────
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a, button") as HTMLElement | null;
      if (!target) return;

      const href = (target as HTMLAnchorElement).href || "";
      const trackAttr = target.getAttribute("data-track");
      const trackLabel =
        target.getAttribute("data-track-label") ||
        target.textContent?.trim().slice(0, 50) ||
        "";

      if (href.startsWith("mailto:")) {
        gtagEvent("contact_click", {
          contact_method: "email",
          link_location: formLocation(pathname),
        });
        return;
      }

      if (href.startsWith("tel:")) {
        gtagEvent("contact_click", {
          contact_method: "phone",
          link_location: formLocation(pathname),
        });
        return;
      }

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

  // ── 4-5. Scroll depth + article read complete ───────────────────────────
  useEffect(() => {
    scrollThresholds.current = new Set();

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);
      const thresholds = [25, 50, 75, 90];

      for (const t of thresholds) {
        if (pct >= t && !scrollThresholds.current.has(t)) {
          scrollThresholds.current.add(t);
          gtagEvent("scroll_depth", {
            depth: t,
            page_path: pathname,
          });
          // Articolo letto completamente al 90% su pagine blog
          if (t === 90 && pathname.includes("/blog/")) {
            gtagEvent("article_read_complete", {
              page_path: pathname,
            });
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ── 6. Video play tracking (elementi <video> nativi) ───────────────────
  useEffect(() => {
    videoTracked.current = new Set();

    function attachVideoTracking() {
      const videos = document.querySelectorAll<HTMLVideoElement>("video");
      videos.forEach((video) => {
        if (videoTracked.current.has(video)) return;
        videoTracked.current.add(video);

        const title =
          video.getAttribute("aria-label") ||
          video.querySelector("source")?.src?.split("/").pop() ||
          "video";

        video.addEventListener(
          "play",
          () => {
            gtagEvent("video_start", {
              video_title: title,
              page_path: pathname,
            });
          },
          { once: true }
        );
      });
    }

    attachVideoTracking();

    // Osserva DOM mutations per video caricati dinamicamente
    const observer = new MutationObserver(attachVideoTracking);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
