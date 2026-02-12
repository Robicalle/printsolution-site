"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ───── Intersection Observer Hook ───── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ───── Animated Counter ───── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ───── Hero ───── */
function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ backgroundColor: '#0a0f1a' }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50 z-[2]" />

      <div className="container-custom relative z-10 pt-24 pb-8 lg:pt-32 lg:pb-32 px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-cyan-200 mb-5 lg:mb-8 opacity-0 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Print Solution — Dal 2010
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] sm:leading-[0.95] tracking-tight mb-5 lg:mb-8 opacity-0 animate-fade-up-delay">
              Soluzioni Digitali per{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400">
                Stampa e Packaging
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300/90 mb-7 lg:mb-10 leading-relaxed opacity-0 animate-fade-up-delay-2">
              Scatole personalizzate, etichette professionali: tecnologia, competenza e assistenza per la tua azienda.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 opacity-0 animate-fade-up-delay-2">
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo.%0A%0AGrazie" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all text-base sm:text-lg">
                Richiedi Demo →
              </a>
              <Link href="/soluzioni/packaging" className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-base sm:text-lg">
                Le Soluzioni
              </Link>
            </div>
          </div>
          {/* Right column - empty on desktop */}
          <div className="hidden lg:block" />
        </div>

        {/* Mobile: no machines here, shown in sections below */}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ───── Brand Bar ───── */
function BrandBar() {
  const { ref, visible } = useInView();
  const brands = [
    { name: "Afinia Label", logo: "/images/brands/afinia-label.avif", href: "#" },
    { name: "GreenBox", logo: "/images/brands/greenbox.png", href: "#" },
    { name: "Anypack", logo: "/images/brands/anypack.avif", href: "#" },
    { name: "DTM Print", logo: "/images/brands/dtm-print.jpg", href: "#" },
  ];
  return (
    <section ref={ref} className={`py-16 bg-white border-b border-gray-100 transition-all duration-700 hidden md:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 font-medium mb-10">
          Distributore ufficiale dei marchi leader
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {brands.map((b) => (
            <Link key={b.name} href={b.href} className="group">
              <Image
                src={b.logo}
                alt={b.name}
                width={140}
                height={50}
                className="h-10 w-auto opacity-40 group-hover:opacity-80 transition-all duration-300 grayscale group-hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Solutions ───── */
function Solutions() {
  const { ref, visible } = useInView();
  const solutions = [
    {
      title: "Packaging",
      desc: "Box maker automatici, stampanti single-pass per cartone ondulato, sistemi di fustellatura e incollaggio digitale.",
      href: "/soluzioni/packaging",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-cyan-400",
      accentBorder: "border-l-cyan-500",
    },
    {
      title: "Etichette",
      desc: "Stampanti per etichette in bobina e a foglio con tecnologia inkjet e laser a colori per ogni esigenza produttiva.",
      href: "/soluzioni/etichette",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
        </svg>
      ),
      gradient: "from-magenta-500 to-magenta-400",
      accentBorder: "border-l-magenta-500",
    },
    {
      title: "Consumabili",
      desc: "Inchiostri, testine di stampa, nastri e materiali di consumo originali per tutte le stampanti distribuite.",
      href: "/soluzioni/consumabili",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 0 1-1.591.659H9.061a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0V5.25A2.25 2.25 0 0 0 16.75 3h-9.5A2.25 2.25 0 0 0 5 5.25v9.25" />
        </svg>
      ),
      gradient: "from-yellow-500 to-yellow-400",
      accentBorder: "border-l-yellow-500",
    },
  ];

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-custom" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Cosa facciamo</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-800 tracking-tight">Le Nostre Soluzioni</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group card-modern p-8 lg:p-10 hover:-translate-y-1 border-l-4 ${s.accentBorder} transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-3 group-hover:text-cyan-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{s.desc}</p>
              <span className="inline-flex items-center text-cyan-500 text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                Scopri di più
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Featured Products ───── */
function FeaturedProducts() {
  const { ref, visible } = useInView();
  const products = [
    {
      name: "Anypack AB2500",
      subtitle: "Box Maker Automatico",
      desc: "Macchina all-in-one per la creazione di scatole in cartone ondulato: taglio, scanalatura, cordonatura e incollaggio in un'unica operazione.",
      specs: ["500-600 scatole/ora", "Cartone da 1 a 7mm", "Incollaggio a caldo e freddo", "Cambio formato in 3 secondi"],
      href: "/prodotti/ab2500",
      image: "/images/products/ab2500-hero-nobg.png",
      accent: "cyan",
    },
    {
      name: "EDM-650X",
      subtitle: "Stampante Single-Pass",
      desc: "Stampa digitale diretta su cartone ondulato con tecnologia single-pass. Velocità industriale, qualità fotografica.",
      specs: ["Fino a 30m/min", "Larghezza 650mm", "Inchiostri a base acqua, CMYK", "Stampa su cartone ondulato"],
      href: "/prodotti/edm-650x",
      image: "/images/products/edm-650x-photo.avif",
      accent: "magenta",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">I nostri prodotti</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-800 tracking-tight">Tecnologie di Punta</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`card-modern overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: visible ? `${i * 200}ms` : '0ms' }}
            >
              <div className="h-56 lg:h-64 relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-cyan-500">
                    {p.subtitle}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-dark-800 mb-4">{p.name}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{p.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {p.specs.map((spec) => (
                    <li key={spec} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="inline-flex items-center text-cyan-500 font-semibold text-sm hover:gap-3 gap-2 transition-all group/link">
                  Scopri di più
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Why Print Solution (Stats) ───── */
function WhyUs() {
  const { ref, visible } = useInView();
  const stats = [
    { value: 1500, suffix: "+", label: "Clienti soddisfatti", color: "from-cyan-400 to-cyan-500" },
    { value: 15, suffix: "+", label: "Anni di esperienza", color: "from-magenta-400 to-magenta-500" },
    { value: 20, suffix: "+", label: "Paesi serviti", color: "from-yellow-400 to-yellow-500" },
    { value: 150, suffix: "+", label: "Prodotti a catalogo", color: "from-green-400 to-green-500" },
  ];
  return (
    <section className="section-padding bg-dark-900 text-white relative overflow-hidden">
      {/* Background elements — CMYK orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-magenta-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px]" />

      <div className="container-custom relative" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-4">Perché sceglierci</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Numeri che <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400">parlano</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <p className={`text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}>
                {visible ? <Counter target={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
              </p>
              <p className="text-gray-400 text-sm mt-3 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Testimonial ───── */
function Testimonial() {
  const { ref, visible } = useInView();
  return (
    <section className="section-padding bg-white">
      <div className={`container-custom max-w-4xl text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <div className="relative">
          {/* Big quote mark */}
          <div className="text-[120px] sm:text-[160px] leading-none font-serif text-cyan-100 absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            &ldquo;
          </div>
          <div className="relative pt-16">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-dark-800 leading-relaxed font-medium mb-8">
              Non pensavo che una stampante potesse aprirmi così tante opportunità. La personalizzazione del packaging è richiesta da qualunque azienda produttrice.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <div className="text-left">
                <p className="font-semibold text-dark-800">Marina L.</p>
                <p className="text-gray-400 text-sm">Correggio, RE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Demo CTA ───── */
function DemoCTA() {
  const { ref, visible } = useInView();
  return (
    <section className="section-padding bg-surface-50">
      <div className={`container-custom transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} ref={ref}>
        <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 lg:p-20 text-white text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Prenota una Visita
              <br />
              in Sala Demo
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Vieni a toccare con mano le nostre soluzioni. La nostra sala demo a Sesto San Giovanni
              è attrezzata con tutti i prodotti in funzione.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo.%0A%0AGrazie" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg">
                Richiedi Demo →
              </a>
              <a href="tel:+390236527093" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Chiamaci Ora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Page ───── */
export default function HomePageClient() {
  return (
    <>
      <Hero />
      <BrandBar />
      <Solutions />
      <FeaturedProducts />
      <WhyUs />
      <Testimonial />
      <DemoCTA />
    </>
  );
}
