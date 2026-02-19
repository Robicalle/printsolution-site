interface Props {
  block: any;
  locale: string;
}

export default function SoluzioniHeroBlock({ block, locale }: Props) {
  const it = locale === "it";
  return (
    <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
        <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">
          {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          {it ? block.title : (block.title_en || block.title)}
        </h1>
        <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
          {it ? block.subtitle : (block.subtitle_en || block.subtitle)}
        </p>
      </div>
    </section>
  );
}
