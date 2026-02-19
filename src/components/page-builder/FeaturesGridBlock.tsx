interface Props {
  block: any;
  locale: string;
}

export default function FeaturesGridBlock({ block, locale }: Props) {
  const it = locale === "it";
  const gradientFrom = block.gradientFrom || "from-cyan-500";
  const gradientTo = block.gradientTo || "to-yellow-500";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-dark-800 mb-8 text-center">
          {it ? block.heading : (block.heading_en || block.heading)}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(block.features || []).map((f: any) => (
            <div key={f.title || f.title_en} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white mb-5`}>
                {f.iconSvg ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.iconSvg} />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-dark-800 mb-2">
                {it ? f.title : (f.title_en || f.title)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {it ? f.desc : (f.desc_en || f.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
