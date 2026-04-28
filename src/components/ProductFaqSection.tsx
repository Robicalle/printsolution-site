"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ProductFaqSectionProps {
  items: FaqItem[];
  locale?: string;
}

export default function ProductFaqSection({ items, locale = "it" }: ProductFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isIt = locale === "it";

  if (!items || items.length === 0) return null;

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-custom max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-8 text-center">
          {isIt ? "Domande Frequenti" : "Frequently Asked Questions"}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-dark-800 hover:text-cyan-500 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
