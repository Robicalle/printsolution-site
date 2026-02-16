import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Le Nostre Soluzioni di Stampa Digitale",
  description:
    "Tutte le soluzioni digitali Print Solution: packaging, etichette, labbratura libri, shopper e packaging di lusso, consumabili.",
  openGraph: {
    title: "Le Nostre Soluzioni di Stampa Digitale | Print Solution",
    description: "Scopri tutte le soluzioni digitali per stampa e packaging di Print Solution.",
    images: ["/images/hero-boxes.webp"],
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
    image: "/images/products/afinia-l901.png",
    products: [
      { name: "Afinia L901", desc: "Stampante etichette industriale", href: "/prodotti/afinia-l901" },
      { name: "Anytron ANY-002", desc: "Stampa laser + fustellatura", href: "/prodotti/any-002" },
      { name: "Afinia LT5C", desc: "Stampante laser per etichette", href: "/prodotti/afinia-lt5c" },
      { name: "Afinia X350", desc: "Finitura etichette digitale", href: "/prodotti/afinia-x350" },
      { name: "Afinia DLP2200", desc: "Pressa digitale per etichette", href: "/prodotti/afinia-dlp2200" },
    ],
    color: "from-emerald-500 to-emerald-600",
    icon: "🏷️",
  },
  {
    name: "Shopper & Packaging di Lusso",
    desc: "Stampa hot foil e stampa digitale per shopper, buste e packaging premium con finiture metalliche e personalizzazione.",
    href: "/soluzioni/shopper",
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
    href: "/soluzioni/labbratura",
    image: "/images/products/book-edge-printer.png",
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
    image: "/images/products/afinia-x350-site.webp",
    products: [],
    color: "from-rose-500 to-rose-600",
    icon: "🖨️",
  },
];

export default async function SoluzioniPage() {
  const locale = await getLocale();
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Print Solution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">{locale === 'it' ? 'Le Nostre Soluzioni' : 'Our Solutions'}</h1>
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
                  <Link href={cat.href} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${cat.color} text-white font-semibold rounded-full hover:shadow-lg transition-all`}>
                    {locale === 'it' ? 'Scopri ' : 'Discover '}{cat.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">{locale === 'it' ? 'Non sai quale soluzione fa per te?' : 'Not sure which solution is right for you?'}</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Il nostro team ti aiuta a scegliere la tecnologia più adatta alle tue esigenze. Contattaci per una consulenza gratuita.
          </p>
          <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20vostre%20soluzioni.%0A%0AGrazie" className="btn-primary text-lg">{locale === 'it' ? 'Contattaci →' : 'Contact Us →'}</a>
        </div>
      </section>
    </>
  );
}
