interface Props {
  block: any;
  locale: string;
}

export default function ProductDescriptionBlock({ block, locale }: Props) {
  const it = locale === "it";
  const body = it ? block.body : (block.body_en || block.body);
  // Body is stored as multi-paragraph text, split by double newline
  const paragraphs = (body || "").split(/\n\n+/).filter(Boolean);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-3xl font-bold text-dark-800 mb-6">
          {it ? block.heading : (block.heading_en || block.heading)}
        </h2>
        {paragraphs.map((p: string, i: number) => (
          <p key={i} className={`text-gray-500 leading-relaxed ${i < paragraphs.length - 1 ? 'mb-4' : ''}`}
             dangerouslySetInnerHTML={{ __html: p.replace(/&apos;/g, "'") }}
          />
        ))}
      </div>
    </section>
  );
}
