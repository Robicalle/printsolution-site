import type { ReactNode } from "react";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface ProductFaqSectionProps {
  items: FaqItem[];
  locale?: string;
}

// Griglia aperta, come nelle pagine soluzione: le risposte si leggono senza
// clic (audit redesign: niente FAQ a fisarmonica) e sono subito visibili anche
// a Google, coerenti con il FAQPage JSON-LD della scheda prodotto.
export default function ProductFaqSection({ items, locale = "it" }: ProductFaqSectionProps) {
  const isIt = locale === "it";

  if (!items || items.length === 0) return null;

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-custom max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-10 text-center">
          {isIt ? "Domande frequenti" : "Frequently asked questions"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-dark-800 mb-3 leading-snug">{item.question}</h3>
              <div className="text-gray-500 leading-relaxed">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
