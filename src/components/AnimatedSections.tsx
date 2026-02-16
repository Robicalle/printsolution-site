"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

function AnimatedSection({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: visible ? `${Math.min(index * 100, 300)}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function AnimatedSections({ children }: { children: ReactNode }) {
  // Wrap each direct child in an AnimatedSection
  const items = Array.isArray(children) ? children : [children];
  return (
    <>
      {items.map((child, i) => (
        <AnimatedSection key={i} index={i}>{child}</AnimatedSection>
      ))}
    </>
  );
}
