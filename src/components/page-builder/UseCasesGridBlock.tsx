interface Props {
  block: any;
  locale: string;
}

export default function UseCasesGridBlock({ block, locale }: Props) {
  const it = locale === "it";
  const bgClass = block.bgClass || "bg-surface-50";
  const eyebrowColor = block.eyebrowColor || "text-amber-500";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="text-center mb-16">
          {block.eyebrow && (
            <p className={`${eyebrowColor} font-semibold text-sm uppercase tracking-widest mb-4`}>
              {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
            {it ? block.heading : (block.heading_en || block.heading)}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {(block.cases || []).map((c: any) => (
            <div key={c.title || c.title_en} className="card-modern p-8 text-center">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-xl font-bold text-dark-800 mb-3">
                {it ? c.title : (c.title_en || c.title)}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {it ? c.desc : (c.desc_en || c.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
