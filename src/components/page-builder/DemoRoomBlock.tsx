interface Props {
  block: any;
  locale: string;
}

export default function DemoRoomBlock({ block, locale }: Props) {
  const it = locale === "it";
  const body = it ? block.body : (block.body_en || block.body);
  const paragraphs = (body || "").split(/\n\n+/).filter(Boolean);

  return (
    <div className="card-modern p-8 lg:p-12 mb-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          {block.eyebrow && (
            <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">
              {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
            </p>
          )}
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {it ? block.heading : (block.heading_en || block.heading)}
          </h2>
          {paragraphs.map((p: string, i: number) => (
            <p key={i} className={`text-gray-500 leading-relaxed ${i < paragraphs.length - 1 ? 'mb-4' : 'mb-6'}`}
               dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          {block.buttonUrl && (
            <a href={block.buttonUrl} className="btn-primary">
              {it ? block.buttonText : (block.buttonText_en || block.buttonText)}
            </a>
          )}
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-2xl h-64 flex items-center justify-center">
          <div className="text-center text-white">
            <span className="text-6xl block mb-2 opacity-50">🏢</span>
            <p className="font-semibold">{it ? 'Sala Demo' : 'Demo Room'}</p>
            <p className="text-white/70 text-sm">Sesto San Giovanni (MI)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
