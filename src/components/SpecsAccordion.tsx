"use client";

import { useState } from "react";

interface SpecsAccordionProps {
  specs: string[][];
  title?: string;
  titleEn?: string;
  locale?: string;
}

export default function SpecsAccordion({ specs, title, titleEn, locale = "it" }: SpecsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heading = locale === "it" ? (title || "Specifiche Tecniche") : (titleEn || title || "Technical Specifications");

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{heading}</h2>

        {/* Desktop: normal list */}
        <div className="hidden md:block space-y-3">
          {specs.map(([label, value]) => (
            <div key={label} className="flex flex-col sm:flex-row sm:justify-between gap-1 bg-white rounded-xl px-5 py-4 shadow-sm">
              <span className="text-sm font-medium text-gray-600">{label}</span>
              <span className="text-sm font-bold text-dark-800">{value}</span>
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden space-y-2">
          {specs.map(([label, value], i) => (
            <div key={label} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === i ? "max-h-40 pb-4" : "max-h-0"}`}
              >
                <div className="px-5">
                  <span className="text-sm font-bold text-dark-800">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
