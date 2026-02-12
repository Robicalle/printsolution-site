import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Le Nostre Soluzioni — Print Solution",
  description:
    "Tutte le soluzioni digitali Print Solution: packaging, etichette, labbratura libri, shopper e packaging di lusso, consumabili.",
  openGraph: {
    title: "Le Nostre Soluzioni | Print Solution",
    description: "Scopri tutte le soluzioni digitali per stampa e packaging di Print Solution.",
    type: "website",
    locale: "it_IT",
  },
  alternates: { canonical: "/soluzioni" },
};

const categories = [
  {
    name: "Packaging",
    desc: "Stampa digitale su cartone ondulato, box maker automatici e stampa UV diretta su packaging rigido.",
    href: "/soluzioni/packaging",
    image: "/images/products/edm-650x-photo.avif",
    products: [
      { name: "EDM-650X", desc: "Stampante single-pass per cartone", href: "/prodotti/edm-650x" },
      { name: "Anypack AB2500", desc: "Box maker automatico", href: "/prodotti/ab2500" },
      { name: "PackPrinter-UV", desc: "Stampa UV su materiali rigidi", href: "/prodotti/packprinter-uv" },
      { name: "Any Press", desc: "Pressa automatica", href: "/prodotti/any-press" },
    ],
    color: "from-cyan-500 to-cyan-600",
    icon: "📦",
  },
  {
    name: "Etichette",
    desc: "Stampanti professionali per etichette in bobina e a foglio: dalla piccola tiratura alla produzione industriale.",
    href: "/soluzioni/etichette",
    image: "/images/products/afinia-l901-nobg.png",
    products: [
      { name: "Afinia L901", desc: "Stampante etichette industriale", href: "/prodotti/afinia-l901" },
      { name: "Afinia L701", desc: "Stampante etichette a colori", href: "/prodotti/afinia-l701" },
      { name: "Afinia LT5C", desc: "Stampante laser per etichette", href: "/prodotti/afinia-lt5c" },
      { name: "Afinia X350", desc: "Finitura etichette digitale", href: "/prodotti/afinia-x350" },
      { name: "Afinia DLP2200", desc: "Pressa digitale per etichette", href: "/prodotti/afinia-dlp2200" },
      { name: "Afinia AF200", desc: "Applicatore etichette", href: "/prodotti/afinia-af200" },
    ],
    color: "from-emerald-500 to-emerald-600",
    icon: "🏷️",
  },
  {
    name: "Shopper & Packaging di Lusso",
    desc: "Stampa hot foil e stampa digitale per shopper, buste e packaging premium con finiture metalliche e personalizzazione.",
    href: "#shopper",
    id: "shopper",
    image: "/images/products/aurumpress-nobg.png",
    products: [
      { name: "AurumPress", desc: "Stampa termica hot foil per packaging di lusso", href: "/prodotti/aurumpress" },
      { name: "GreenBox EVO", desc: "Stampante single-pass per packaging", href: "/prodotti/greenbox-evo" },
    ],
    color: "from-amber-500 to-amber-600",
    icon: "🛍️",
  },
  {
    name: "Labbratura Libri",
    desc: "Stampa digitale sui bordi di libri, quaderni e block notes per personalizzazioni uniche e di alta qualità.",
    href: "#labbratura",
    id: "labbratura",
    image: "/images/products/robotjet-nobg.png",
    products: [
      { name: "RobotJet", desc: "Book edge printer — stampa bordi libri", href: "/prodotti/robotjet" },
    ],
    color: "from-violet-500 to-violet-600",
    icon: "📚",
  },
  {
    name: "Consumabili",
    desc: "Inchiostri, testine di stampa, cartucce e materiali di consumo per tutte le nostre soluzioni.",
    href: "/soluzioni/consumabili",
    image: "/images/products/ink-consumabili.webp",
    products: [],
    color: "from-rose-500 to-rose-600",
    icon: "🖨️",
  },
];

export default function SoluzioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Print Solution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Le Nostre Soluzioni</h1>
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
            Tecnologie digitali per stampa e personalizzazione: dal packaging industriale alle etichette, dalla labbratura libri allo shopper di lusso.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {categories.map((cat, i) => (
              <div key={cat.name} id={"id" in cat ? (cat.id as string) : undefined} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""} scroll-mt-32`}>
                {/* Image side */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden bg-surface-50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-5`} />
                    <Image src={cat.image} alt={cat.name} fill className="object-contain p-8" />
                  </div>
                </div>
                {/* Text side */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cat.icon}</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-dark-800">{cat.name}</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6">{cat.desc}</p>
                  {cat.products.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {cat.products.map((p) => (
                        <Link key={p.name} href={p.href} className="flex items-center justify-between p-3 rounded-xl bg-surface-50 hover:bg-surface-100 transition-colors group">
                          <div>
                            <span className="font-semibold text-dark-800 group-hover:text-cyan-500 transition-colors">{p.name}</span>
                            <span className="text-sm text-gray-500 ml-2">— {p.desc}</span>
                          </div>
                          <span className="text-gray-400 group-hover:text-cyan-500 transition-colors">→</span>
                        </Link>
                      ))}
                    </div>
                  )}
                  {cat.href.startsWith("/") && (
                    <Link href={cat.href} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${cat.color} text-white font-semibold rounded-full hover:shadow-lg transition-all`}>
                      Scopri {cat.name} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Non sai quale soluzione fa per te?</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Il nostro team ti aiuta a scegliere la tecnologia più adatta alle tue esigenze. Contattaci per una consulenza gratuita.
          </p>
          <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20vostre%20soluzioni.%0A%0AGrazie" className="btn-primary text-lg">Contattaci →</a>
        </div>
      </section>
    </>
  );
}
