interface Props {
  block: any;
  locale: string;
}

export default function CtaBannerBlock({ block, locale }: Props) {
  const it = locale === "it";
  const bgClass = block.bgClass || "bg-surface-50";

  return (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              {it ? block.heading : (block.heading_en || block.heading)}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              {it ? block.text : (block.text_en || block.text)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {block.buttonUrl && (
                <a href={block.buttonUrl} className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg">
                  {it ? block.buttonText : (block.buttonText_en || block.buttonText)}
                </a>
              )}
              {block.secondButtonUrl && (
                <a href={block.secondButtonUrl} className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
                  {block.secondButtonUrl?.startsWith("tel:") && (
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  )}
                  {it ? block.secondButtonText : (block.secondButtonText_en || block.secondButtonText)}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
