interface Props {
  block: any;
  locale: string;
}

export default function ProductVideoBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          {block.eyebrow && (
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">
              {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">
            {it ? block.heading : (block.heading_en || block.heading)}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <video controls playsInline preload="none" poster={block.posterSrc} className="w-full h-full rounded-2xl">
              <source src={block.videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
