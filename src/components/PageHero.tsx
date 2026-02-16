import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  videoSrc?: string;
  imageSrc?: string;
}

export default function PageHero({ title, subtitle, breadcrumb, videoSrc, imageSrc }: PageHeroProps) {
  return (
    <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {imageSrc ? (
        <>
          <Image src={imageSrc} alt="Hero background" fill className="object-cover z-0" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50 z-[1]" />
        </>
      ) : videoSrc ? (
        <>
          {/* Desktop: full quality */}
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0 hidden sm:block"
            style={{ backgroundColor: '#0a0f1a' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Mobile: compressed version */}
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover z-0 sm:hidden"
            style={{ backgroundColor: '#0a0f1a' }}
          >
            <source src={videoSrc.replace('.mp4', '-mobile.mp4')} type="video/mp4" />
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
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>

      {/* Scroll indicator — mobile */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70 animate-bounce sm:hidden">
        <span className="text-white/60 text-xs uppercase tracking-widest font-medium">Scopri</span>
        <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
