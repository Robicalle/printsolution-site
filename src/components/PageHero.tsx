interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  videoSrc?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, videoSrc }: PageHeroProps) {
  return (
    <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {videoSrc ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ backgroundColor: '#0a0f1a' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50 z-[1]" />
        </>
      ) : (
        <>
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-[2]">
        {breadcrumb && (
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">{breadcrumb}</p>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
