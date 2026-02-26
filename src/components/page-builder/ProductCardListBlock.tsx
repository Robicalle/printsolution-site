import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

export default function ProductCardListBlock({ block, locale }: Props) {
  const it = locale === "it";
  const products = block.products || [];
  const bgClass = block.bgClass || "bg-white";
  const eyebrowColor = block.eyebrowColor || "text-cyan-500";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        {(block.sectionEyebrow || block.sectionHeading) && (
          <div className="text-center mb-16">
            {block.sectionEyebrow && (
              <p className={`${eyebrowColor} font-semibold text-sm uppercase tracking-widest mb-4`}>
                {it ? block.sectionEyebrow : (block.sectionEyebrow_en || block.sectionEyebrow)}
              </p>
            )}
            {block.sectionHeading && (
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
                {it ? block.sectionHeading : (block.sectionHeading_en || block.sectionHeading)}
              </h2>
            )}
          </div>
        )}

        <div className="space-y-12">
          {products.map((p: any, i: number) => (
            <div key={p.name || i} className="card-modern overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className={`relative h-80 lg:h-auto min-h-[400px] bg-gray-50 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {p.image && p.href ? (
                    <Link href={p.href} className="block w-full h-full group/img">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                      <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                        <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                          {it ? 'Scopri' : 'Discover'} {p.name} →
                        </span>
                      </div>
                    </Link>
                  ) : p.image ? (
                    <Image src={p.image} alt={p.name || ""} fill className="object-contain p-6" />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${p.gradient || 'from-gray-400 to-gray-500'} flex items-center justify-center`}>
                      <span className="text-8xl opacity-30">📦</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient || 'from-cyan-500 to-cyan-600'} shadow-lg`}>
                      {it ? (p.tag || p.subtitle) : (p.tag_en || p.subtitle_en || p.tag || p.subtitle)}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-800">{p.name}</h3>
                  </div>
                  {p.subtitle && (
                    <p className="text-sm text-gray-500 mb-4">
                      {it ? p.subtitle : (p.subtitle_en || p.subtitle)}
                    </p>
                  )}
                  {p.brand && p.brandHref && (
                    <Link href={p.brandHref} className="text-sm text-cyan-500 font-medium hover:underline mb-4 inline-block">
                      Brand: {p.brand} →
                    </Link>
                  )}
                  {p.brand && !p.brandHref && (
                    <span className="text-sm text-cyan-500 font-medium mb-4 inline-block">
                      {p.brand}
                    </span>
                  )}
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {it ? p.desc : (p.desc_en || p.desc)}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {(it ? (p.specs || []) : (p.specs_en || p.specs || [])).map((s: string) => (
                      <li key={s} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <a href={block.ctaSubject ? `mailto:info@printsolutionsrl.it?subject=${encodeURIComponent(block.ctaSubject)}` : "mailto:info@printsolutionsrl.it"} className="btn-primary text-sm">
                      {it ? 'Consulenza gratuita' : 'Free consultation'}
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
