import { getFaqs } from "@/sanity/lib/fetchers";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";

export default async function FaqSection() {
  const faqs = (await getFaqs()) || [];
  if (faqs.length === 0) return null;

  // Group by category
  const grouped: Record<string, any[]> = {};
  for (const faq of faqs) {
    const cat = faq.category || "generale";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(faq);
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f: any) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer?.[0]?.children?.[0]?.text || "",
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-12 last:mb-0">
              <h3 className="text-lg font-semibold text-cyan-500 uppercase tracking-widest mb-6 capitalize">{cat}</h3>
              <div className="space-y-4">
                {items.map((faq: any) => (
                  <details key={faq._id} className="group bg-surface-50 rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-dark-800 hover:text-cyan-500 transition-colors">
                      <span>{faq.question}</span>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5">
                      {Array.isArray(faq.answer) ? (
                        <PortableText value={faq.answer} components={portableTextComponents} />
                      ) : (
                        <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
