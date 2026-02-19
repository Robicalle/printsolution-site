interface Props {
  block: any;
  locale: string;
}

export default function ValuesGridBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">
        {it ? block.heading : (block.heading_en || block.heading)}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {(block.values || []).map((v: any) => (
          <div key={v.title || v.title_en} className="card-modern p-8 text-center">
            <span className="text-4xl block mb-4">{v.icon}</span>
            <h3 className="text-lg font-bold text-dark-800 mb-3">
              {it ? v.title : (v.title_en || v.title)}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {it ? v.desc : (v.desc_en || v.desc)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
