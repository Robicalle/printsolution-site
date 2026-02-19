interface Props {
  block: any;
  locale: string;
}

export default function ConsumablesCategoryListBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">
            {it ? block.sectionEyebrow : (block.sectionEyebrow_en || block.sectionEyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight mb-6">
            {it ? block.sectionHeading : (block.sectionHeading_en || block.sectionHeading)}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {it ? block.sectionDesc : (block.sectionDesc_en || block.sectionDesc)}
          </p>
        </div>

        <div className="space-y-12">
          {(block.categories || []).map((cat: any) => (
            <div key={cat.title} className="card-modern p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient || 'from-cyan-500 to-cyan-600'} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-dark-800">
                    {it ? cat.title : (cat.title_en || cat.title)}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {it ? cat.desc : (cat.desc_en || cat.desc)}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-bold text-dark-800 uppercase tracking-wider mb-4">
                    {it ? 'Prodotti' : 'Products'}
                  </h4>
                  <ul className="space-y-3">
                    {(cat.items || []).map((item: any) => (
                      <li key={item.name} className="bg-surface-50 rounded-xl p-4">
                        <p className="font-semibold text-dark-800 text-sm">{item.name}</p>
                        <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-dark-800 uppercase tracking-wider mb-4">
                    {it ? 'Caratteristiche' : 'Features'}
                  </h4>
                  <ul className="space-y-3">
                    {(it ? (cat.features || []) : (cat.features_en || cat.features || [])).map((f: string) => (
                      <li key={f} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
