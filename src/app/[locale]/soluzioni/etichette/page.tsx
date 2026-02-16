import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "{locale === 'it' ? 'Stampanti Etichette' : 'Label Printers'} Industriali",
  description:
    "Stampante etichette industriale: etichettatura in bobina con Afinia Label L901, X350, LT5C e DLP-2200. Soluzioni complete per etichette a colori.",
  keywords: [
    "stampante etichette industriale",
    "etichettatura in bobina",
    "stampante etichette colori",
    "Afinia Label",
    "stampa etichette bobina",
  ],
  openGraph: {
    title: "Stampanti Etichette Industriali | Print Solution",
    description:
      "Stampanti per etichette a colori in bobina e foglio. Soluzioni complete per etichettatura industriale.",
    images: ["/images/hero-labels.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/soluzioni/etichette" },
};

const printers = [
  {
    name: "Any-Press",
    subtitle: "Laser LED 5 Colori — CMYK+Bianco", subtitleEn: "LED Laser 5 Colors — CMYK+White",
    image: "/images/products/any-press.avif",
    href: "/prodotti/any-press",
    desc: "Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. Toner bianco per stampa su kraft e trasparenti, laminazione integrata opzionale.", descEn: "LED laser 5-color printer (CMYK+White) for labels and flexible packaging. White toner for printing on kraft and transparents, optional integrated lamination.",
    specs: [
      "Motore Laser digitale LED",
      "5 colori CMYKW (incluso bianco)",
      "Risoluzione 1200 × 1200 dpi",
      "Velocità 5 m/min",
      "Larghezza stampa max 324 mm",
      "Laminatore opzionale integrato",
      "Software ANY-FLOW incluso",
      "Design compatto",
    ],
    specsEn: [
      "LED digital laser engine",
      "5 colors CMYKW (including white)",
      "Resolution 1200 × 1200 dpi",
      "Speed 5 m/min",
      "Max print width 324 mm",
      "Optional integrated laminator",
      "ANY-FLOW software included",
      "Compact design",
    ],
    gradient: "from-orange-500 to-orange-600",
    tag: "CMYK + Bianco", tagEn: "CMYK + White",
  },
  {
    name: "Anytron ANY-002",
    subtitle: "Toner LED — Stampa", subtitleEn: "LED Toner — Print",
    image: "/images/products/any-002.avif",
    href: "/prodotti/any-002",
    desc: "Sistema completo stampa + fustellatura per etichette on-demand. Tecnologia laser digitale a toner con stampe resistenti ad acqua, temperature e abrasioni. Fino a 5.000 etichette in 2 ore.", descEn: "Complete print + die-cut system for on-demand labels. Digital laser toner technology with prints resistant to water, temperature and abrasion. Up to 5,000 labels in 2 hours.",
    specs: [
      "Motore laser digitale LED",
      "Risoluzione 1200 dpi a toner",
      "Velocità fino a 9 m/min",
      "Fustellatrice a coltello integrata",
      "Bobina max Ø 370 mm (~500 m)",
      "Supporta carta, PP, PET",
      "RIP integrato + dato variabile",
      "Peso: 95 kg",
    ],
    specsEn: [
      "LED digital laser engine",
      "Resolution 1200 dpi toner",
      "Speed up to 9 m/min",
      "Integrated knife die-cutter",
      "Max roll Ø 370 mm (~500 m)",
      "Supports paper, PP, PET",
      "Integrated RIP + variable data",
      "Weight: 95 kg",
    ],
    gradient: "from-violet-500 to-violet-600",
    tag: "Stampa", tagEn: "Print",
  },
  {
    name: "Afinia X350",
    subtitle: "Alta Velocità — Pigmento", subtitleEn: "High Speed — Pigment",
    image: "/images/products/afinia-x350-site.webp",
    href: "/prodotti/afinia-x350",
    desc: "Stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati acquosi. La più veloce della categoria, con ridondanza ugelli 2× per zero strisce. Ideale per converter e volumi medio-alti.", descEn: "High-speed digital roll-to-roll printer with pigmented water-based inks. The fastest in its class, with 2× nozzle redundancy for zero banding. Ideal for converters and medium-high volumes.",
    specs: [
      "Velocità fino a 45 m/min",
      "Risoluzione 1600 × 1600 dpi",
      "Larghezza stampa max 324 mm",
      "Inchiostri pigmentati a base acqua",
      "Taniche 2L per colore, 8L totali",
      "Ridondanza ugelli 2×",
      "Touchscreen 21 pollici",
      "Compressore integrato silenzioso",
    ],
    specsEn: [
      "Speed up to 45 m/min",
      "Resolution 1600 × 1600 dpi",
      "Max print width 324 mm",
      "Pigmented water-based inks",
      "2L tanks per color, 8L total",
      "2× nozzle redundancy",
      "21-inch touchscreen",
      "Silent integrated compressor",
    ],
    gradient: "from-yellow-500 to-yellow-600",
    tag: "Alta Produzione", tagEn: "High Production",
  },
  {
    name: "Afinia L901",
    subtitle: "Professionale — Memjet Dye", subtitleEn: "Professional — Memjet Dye",
    image: "/images/products/afinia-l901.png",
    href: "/prodotti/afinia-l901",
    desc: "Stampante etichette a colori professionale con tecnologia Memjet Waterfall. Alta produttività, doppio nero per neri più profondi, testina sostituibile dall'utente senza fermare la produzione. Usabile in linea con DLP-2200.", descEn: "Professional color label printer with Memjet Waterfall technology. High productivity, dual black for deeper blacks, user-replaceable printhead without stopping production. Usable inline with DLP-2200.",
    specs: [
      "Risoluzione 1600 dpi full-color",
      "Inchiostri CMYKK (doppio nero)",
      "Testina sostituibile dall'utente",
      "Touchscreen integrato",
      "Cartucce ad alta capacità",
      "Usabile standalone o in linea",
      "Neri più profondi e autonomia",
      "Manutenzione senza fermo macchina",
    ],
    specsEn: [
      "1600 dpi full-color resolution",
      "CMYKK inks (dual black)",
      "User-replaceable printhead",
      "Integrated touchscreen",
      "High-capacity cartridges",
      "Standalone or inline use",
      "Deeper blacks and autonomy",
      "Zero-downtime maintenance",
    ],
    gradient: "from-magenta-500 to-magenta-600",
    tag: "Professionale", tagEn: "Professional",
  },
  {
    name: "Afinia LT5C",
    subtitle: "Toner LED", subtitleEn: "LED Toner",
    image: "/images/products/afinia-lt5c.avif",
    href: "/prodotti/afinia-lt5c",
    desc: "Stampante etichette a toner LED con tecnologia elettrofotografica. Resistenza immediata senza asciugatura, ideale per ambienti umidi e applicazioni industriali che richiedono durabilità istantanea.", descEn: "LED toner label printer with electrophotographic technology. Instant durability without drying, ideal for humid environments and industrial applications requiring instant resistance.",
    specs: [
      "Tecnologia Toner LED CMYK",
      "Resistenza immediata all'acqua",
      "Nessuna asciugatura necessaria",
      "Alimentazione da rotolo",
      "Cartucce toner ad alta resa",
      "Costo/pagina competitivo",
      "Fusore per resistenza massima",
      "Ideale per ambienti umidi",
    ],
    specsEn: [
      "CMYK LED toner technology",
      "Instant water resistance",
      "No drying necessary",
      "Roll feed",
      "High-yield toner cartridges",
      "Competitive cost/page",
      "Fuser for maximum durability",
      "Ideal for humid environments",
    ],
    gradient: "from-green-500 to-green-600",
    tag: "Industriale", tagEn: "Industrial",
  },
];

const finishers = [
  {
    name: "Afinia DC250 / DC350",
    subtitle: "Fustellatori Semi-Rotativi", subtitleEn: "Semi-Rotary Die-Cutters",
    image: "/images/products/afinia-dc350.png",
    href: "/prodotti/afinia-dc350",
    desc: "Fustellatori semi-rotativi professionali con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a 30 m/min. Disponibili in larghezza 250 mm e 350 mm.", descEn: "Professional semi-rotary die-cutters with lamination, flexible steel die-cutting, waste removal, slitting and rewinding. Up to 30 m/min. Available in 250 mm and 350 mm widths.",
    specs: [
      "Velocità fino a 30 m/min",
      "Laminazione integrata",
      "Fustelle flessibili in acciaio",
      "Cilindro magnetico 18\"",
      "Rimozione sfrido automatica",
      "Fino a 15 lame slitting",
      "Modulo vernice UV",
      "Sensore registro laser",
    ],
    specsEn: [
      "Speed up to 30 m/min",
      "Integrated lamination",
      "Flexible steel dies",
      "18\" magnetic cylinder",
      "Automatic waste removal",
      "Up to 15 slitting blades",
      "UV varnish module",
      "Laser register sensor",
    ],
    gradient: "from-yellow-500 to-yellow-600",
    tag: "Semi-Rotativo", tagEn: "Semi-Rotary",
  },
  {
    name: "Afinia DLF-220L / DLF-350L",
    subtitle: "Fustellatori Digitali Plotter", subtitleEn: "Digital Plotter Die-Cutters",
    image: "/images/products/afinia-dlf-220l.png",
    href: "/prodotti/afinia-dlf",
    desc: "Fustellatori digitali a plotter: tagliano qualsiasi forma da file digitale senza fustelle fisiche. Laminazione in linea, rimozione sfrido, slitting e riavvolgimento in un unico passaggio. Ideali per tirature brevi e on-demand.", descEn: "Digital plotter die-cutters: cut any shape from digital file without physical dies. Inline lamination, waste removal, slitting and rewinding in a single pass. Ideal for short runs and on-demand.",
    specs: [
      "Taglio plotter da file digitale",
      "Nessuna fustella fisica necessaria",
      "Qualsiasi forma di etichetta",
      "Laminazione in linea (modelli L)",
      "Rimozione sfrido automatica",
      "Slitting integrato",
      "Larghezza 220 mm o 350 mm",
      "Ideale per tirature brevi",
    ],
    specsEn: [
      "Plotter cutting from digital file",
      "No physical dies needed",
      "Any label shape",
      "Inline lamination (L models)",
      "Automatic waste removal",
      "Integrated slitting",
      "Width 220 mm or 350 mm",
      "Ideal for short runs",
    ],
    gradient: "from-green-500 to-green-600",
    tag: "Digitale Plotter", tagEn: "Digital Plotter",
  },
];

const systems = [
  {
    name: "Afinia DLP-2200",
    href: "/prodotti/afinia-dlp2200",
    subtitle: "Digital Label Press Completa", subtitleEn: "Complete Digital Label Press",
    desc: "Sistema completo stampa + finitura: dalla bobina bianca all'etichetta finita in un unico passaggio. Integra stampante L901, laminatore, fustellatore rotativo, rimozione sfrido, slitter e doppio riavvolgitore.", descEn: "Complete print + finishing system: from blank roll to finished label in a single pass. Integrates L901 printer, laminator, rotary die-cutter, waste removal, slitter and dual rewinder.",
    specs: [
      "25.000+ etichette 3×4\" all'ora",
      "Velocità 9–18 m/min",
      "1600 dpi full-color CMYKK",
      "Larghezza stampa max 216 mm",
      "Fustelle acciaio flessibili",
      "Laminazione inclusa in linea",
      "Rotoli fino a 400 mm (~1000 m)",
      "Sensore registro laser",
    ],
    specsEn: [
      "25,000+ 3×4\" labels/hour",
      "Speed 9–18 m/min",
      "1600 dpi full-color CMYKK",
      "Max print width 216 mm",
      "Flexible steel dies",
      "Inline lamination included",
      "Rolls up to 400 mm (~1000 m)",
      "Laser register sensor",
    ],
    gradient: "from-cyan-500 to-magenta-500",
    tag: "Sistema Completo", tagEn: "Complete System",
  },
];

export default async function EtichettePage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        title={locale === 'it' ? "Soluzioni Etichette" : "Label Solutions"}
        subtitle={locale === 'it' ? 'Stampanti per etichette a colori in bobina, fustellatori digitali, sistemi completi e applicatori. Tecnologia Memjet, pigmento e toner.' : 'Color label printers for rolls, digital die-cutters, complete systems and applicators. Memjet, pigment and toner technology.'}
        breadcrumb="Soluzioni"
        videoSrc="/videos/etichette-hero.mp4"
      />

      {/* Printers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Stampanti Etichette</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              {locale === 'it' ? 'Una Stampante per Ogni Esigenza' : 'A Printer for Every Need'}
            </h2>
          </div>

          <div className="space-y-12">
            {printers.map((p, i) => (
              <div key={p.name} className="card-modern overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`relative h-80 lg:h-auto min-h-[400px] bg-gray-50 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Link href={p.href} className="block w-full h-full group/img">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                      <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                        <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                          {locale === 'it' ? 'Scopri' : 'Discover'} {p.name} →
                        </span>
                      </div>
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                        {locale === 'it' ? p.tag : ((p as any).tagEn || p.tag)}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{locale === 'it' ? p.subtitle : ((p as any).subtitleEn || p.subtitle)}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? p.desc : ((p as any).descEn || p.desc)}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {(locale === 'it' ? p.specs : ((p as any).specsEn || p.specs)).map((s: string) => (
                        <li key={s} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Etichette&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo.%0A%0AGrazie" className="btn-primary text-sm">
                        {locale === 'it' ? 'Richiedi Demo' : 'Request Demo'}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fustellatura */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'Sistemi di Fustellatura' : 'Die-Cutting Systems'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              {locale === 'it' ? 'Finitura e Fustellatura Etichette' : 'Label Finishing and Die-Cutting'}
            </h2>
          </div>

          <div className="space-y-12">
            {finishers.map((p, i) => (
              <div key={p.name} className="card-modern overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`relative h-80 lg:h-auto min-h-[400px] bg-gray-50 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Link href={p.href} className="block w-full h-full group/img">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-6 transition-transform duration-300 group-hover/img:scale-105" />
                      <div className="absolute inset-0 bg-cyan-500/0 group-hover/img:bg-cyan-500/5 transition-colors duration-300 rounded-2xl flex items-end justify-center pb-6 opacity-0 group-hover/img:opacity-100">
                        <span className="bg-white/90 backdrop-blur-sm text-cyan-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                          {locale === 'it' ? 'Scopri' : 'Discover'} {p.name} →
                        </span>
                      </div>
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                        {locale === 'it' ? p.tag : ((p as any).tagEn || p.tag)}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{locale === 'it' ? p.subtitle : ((p as any).subtitleEn || p.subtitle)}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? p.desc : ((p as any).descEn || p.desc)}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {(locale === 'it' ? p.specs : ((p as any).specsEn || p.specs)).map((s: string) => (
                        <li key={s} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Etichette&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo.%0A%0AGrazie" className="btn-primary text-sm">
                        {locale === 'it' ? 'Richiedi Demo' : 'Request Demo'}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DLP-2200 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">{locale === 'it' ? 'Sistema Integrato' : 'Integrated System'}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              {locale === 'it' ? 'Dalla Bobina Bianca all&apos;Etichetta Finita' : 'From Blank Roll to Finished Label'}
            </h2>
          </div>

          {systems.map((p) => (
            <Link key={p.name} href={p.href} className="card-modern overflow-hidden group block">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative min-h-[320px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src="/images/products/afinia-dlp2200.avif"
                    alt="Afinia DLP-2200"
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} w-fit mb-4`}>
                    {locale === 'it' ? p.tag : ((p as any).tagEn || p.tag)}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{locale === 'it' ? p.desc : ((p as any).descEn || p.desc)}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {(locale === 'it' ? p.specs : ((p as any).specsEn || p.specs)).map((s: string) => (
                      <li key={s} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="btn-primary text-sm w-fit">
                    {locale === 'it' ? 'Scopri di più' : 'Learn more'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {locale === 'it' ? 'Non Sai Quale Stampante Scegliere?' : 'Not Sure Which Printer to Choose?'}
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                {locale === 'it' ? 'Ti aiutiamo a trovare la soluzione perfetta per le tue esigenze. Contattaci per una consulenza gratuita o vieni a testare le macchine nella nostra sala demo.' : 'We help you find the perfect solution for your needs. Contact us for a free consultation or come test the machines in our demo room.'}
              </p>
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg">{locale === 'it' ? 'Contattaci Ora' : 'Contact Us Now'}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
