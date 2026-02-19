interface Props {
  block: any;
  locale: string;
}

export default function ProductHeroBlock({ block, locale }: Props) {
  const it = locale === "it";
  return (
    <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
      {block.videoSrc && (
        <video autoPlay muted loop playsInline aria-hidden="true" className="absolute inset-0 w-full h-full object-cover">
          <source src={block.videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-800/90 via-dark-800/70 to-dark-800/40" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">
            {it ? block.breadcrumb : (block.breadcrumb_en || block.breadcrumb)}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{block.productName}</h1>
          <p className="text-lg text-gray-200 leading-relaxed mb-8">
            {it ? block.description : (block.description_en || block.description)}
          </p>
          {block.ctaUrl && (
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={block.ctaUrl} className="btn-primary text-lg !px-8 !py-4 !rounded-full">
                {it ? block.ctaText : (block.ctaText_en || block.ctaText)}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
