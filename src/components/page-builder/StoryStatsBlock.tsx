interface Props {
  block: any;
  locale: string;
}

export default function StoryStatsBlock({ block, locale }: Props) {
  const it = locale === "it";
  const body = it ? block.body : (block.body_en || block.body);
  const paragraphs = (body || "").split(/\n\n+/).filter(Boolean);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        {block.eyebrow && (
          <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">
            {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
          </p>
        )}
        <h2 className="text-3xl font-bold text-dark-800 mb-6">
          {it ? block.heading : (block.heading_en || block.heading)}
        </h2>
        {paragraphs.map((p: string, i: number) => (
          <p key={i} className={`text-gray-500 leading-relaxed ${i < paragraphs.length - 1 ? 'mb-4' : ''}`}
             dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
      <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-3xl p-10 text-center">
        <div className="grid grid-cols-2 gap-6">
          {(block.stats || []).map((s: any) => (
            <div key={s.value} className="bg-white rounded-2xl p-5 shadow-card">
              <p className="text-2xl font-bold text-cyan-500">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">
                {it ? s.label : (s.label_en || s.label)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
