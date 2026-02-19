interface Props {
  block: any;
  locale: string;
}

export default function SimpleCtaBlock({ block, locale }: Props) {
  const it = locale === "it";
  const bgClass = block.bgClass || "bg-surface-50";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold text-dark-800 mb-6">
          {it ? block.heading : (block.heading_en || block.heading)}
        </h2>
        {block.text && (
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {it ? block.text : (block.text_en || block.text)}
          </p>
        )}
        {block.buttonUrl && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={block.buttonUrl} className="btn-primary text-lg">
              {it ? block.buttonText : (block.buttonText_en || block.buttonText)}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
