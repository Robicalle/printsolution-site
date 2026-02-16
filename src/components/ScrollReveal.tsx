"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip homepage — it has its own animations
    if (pathname === "/") return;

    // Small delay to let the page render
    const timer = setTimeout(() => {
      const allSections = document.querySelectorAll("main section");
      // Skip the first section (hero)
      const sections = Array.from(allSections).slice(1);

      sections.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Skip if already has transition/animation styles
        if (htmlEl.style.transition) return;
        htmlEl.style.opacity = "0";
        htmlEl.style.transform = "translateY(32px)";
        htmlEl.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.02, rootMargin: "0px 0px 80px 0px" }
      );

      sections.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
