import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stampanti Etichette Industriali",
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
    subtitle: "Laser LED 5 Colori — CMYK+Bianco",
    image: "/images/products/any-press.avif",
    href: "/prodotti/any-press",
    desc: "Stampante laser LED a 5 colori (CMYK+Bianco) per etichette e packaging flessibile. Toner bianco per stampa su kraft e trasparenti, laminazione integrata opzionale.",
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
    gradient: "from-orange-500 to-orange-600",
    tag: "CMYK + Bianco",
  },
  {
    name: "Anytron ANY-002",
    subtitle: "Toner LED — Stampa",
    image: "/images/products/any-002.avif",
    href: "/prodotti/any-002",
    desc: "Sistema completo stampa + fustellatura per etichette on-demand. Tecnologia laser digitale a toner con stampe resistenti ad acqua, temperature e abrasioni. Fino a 5.000 etichette in 2 ore.",
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
    gradient: "from-violet-500 to-violet-600",
    tag: "Stampa",
  },
  {
    name: "Afinia X350",
    subtitle: "Alta Velocità — Pigmento",
    image: "/images/products/afinia-x350-site.webp",
    href: "/prodotti/afinia-x350",
    desc: "Stampante digitale roll-to-roll ad alta velocità con inchiostri pigmentati acquosi. La più veloce della categoria, con ridondanza ugelli 2× per zero strisce. Ideale per converter e volumi medio-alti.",
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
    gradient: "from-yellow-500 to-yellow-600",
    tag: "Alta Produzione",
  },
  {
    name: "Afinia L901",
    subtitle: "Professionale — Memjet Dye",
    image: "/images/products/afinia-l901.png",
    href: "/prodotti/afinia-l901",
    desc: "Stampante etichette a colori professionale con tecnologia Memjet Waterfall. Alta produttività, doppio nero per neri più profondi, testina sostituibile dall'utente senza fermare la produzione. Usabile in linea con DLP-2200.",
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
    gradient: "from-magenta-500 to-magenta-600",
    tag: "Professionale",
  },
  {
    name: "Afinia LT5C",
    subtitle: "Toner LED",
    image: "/images/products/afinia-lt5c.avif",
    href: "/prodotti/afinia-lt5c",
    desc: "Stampante etichette a toner LED con tecnologia elettrofotografica. Resistenza immediata senza asciugatura, ideale per ambienti umidi e applicazioni industriali che richiedono durabilità istantanea.",
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
    gradient: "from-green-500 to-green-600",
    tag: "Industriale",
  },
];

const finishers = [
  {
    name: "Afinia DC250 / DC350",
    subtitle: "Fustellatori Semi-Rotativi",
    image: "/images/products/afinia-dc350.png",
    href: "/prodotti/afinia-dc350",
    desc: "Fustellatori semi-rotativi professionali con laminazione, fustellatura con fustelle flessibili in acciaio, rimozione sfrido, slitting e riavvolgimento. Fino a 30 m/min. Disponibili in larghezza 250 mm e 350 mm.",
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
    gradient: "from-yellow-500 to-yellow-600",
    tag: "Semi-Rotativo",
  },
  {
    name: "Afinia DLF-220L / DLF-350L",
    subtitle: "Fustellatori Digitali Plotter",
    image: "/images/products/afinia-dlf-220l.png",
    href: "/prodotti/afinia-dlf",
    desc: "Fustellatori digitali a plotter: tagliano qualsiasi forma da file digitale senza fustelle fisiche. Laminazione in linea, rimozione sfrido, slitting e riavvolgimento in un unico passaggio. Ideali per tirature brevi e on-demand.",
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
    gradient: "from-green-500 to-green-600",
    tag: "Digitale Plotter",
  },
];

const systems = [
  {
    name: "Afinia DLP-2200",
    href: "/prodotti/afinia-dlp2200",
    subtitle: "Digital Label Press Completa",
    desc: "Sistema completo stampa + finitura: dalla bobina bianca all'etichetta finita in un unico passaggio. Integra stampante L901, laminatore, fustellatore rotativo, rimozione sfrido, slitter e doppio riavvolgitore.",
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
    gradient: "from-cyan-500 to-magenta-500",
    tag: "Sistema Completo",
  },
];

export default function EtichettePage() {
  return (
    <>
      <PageHero
        title="Soluzioni Etichette"
        subtitle="Stampanti per etichette a colori in bobina, fustellatori digitali, sistemi completi e applicatori. Tecnologia Memjet, pigmento e toner."
        breadcrumb="Soluzioni"
        videoSrc="/videos/etichette-hero.mp4"
      />

      {/* Printers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Stampanti Etichette</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              Una Stampante per Ogni Esigenza
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
                          Scopri {p.name} →
                        </span>
                      </div>
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{p.subtitle}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {p.specs.map((s) => (
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
                        Richiedi Demo
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
            <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Sistemi di Fustellatura</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              Finitura e Fustellatura Etichette
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
                          Scopri {p.name} →
                        </span>
                      </div>
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.gradient} shadow-lg`}>
                        {p.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{p.subtitle}</p>
                    <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {p.specs.map((s) => (
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
                        Richiedi Demo
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
            <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">Sistema Integrato</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              Dalla Bobina Bianca all&apos;Etichetta Finita
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
                    {p.tag}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-dark-800 mb-2 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="btn-primary text-sm w-fit">
                    Scopri di più
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
                Non Sai Quale Stampante Scegliere?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Ti aiutiamo a trovare la soluzione perfetta per le tue esigenze. Contattaci per una consulenza gratuita 
                o vieni a testare le macchine nella nostra sala demo.
              </p>
              <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg">Contattaci Ora</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
