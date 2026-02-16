import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shopper & Packaging di Lusso - Hot Foil",
  description:
    "Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione con foil metallizzati, personalizzazione on-demand.",
  keywords: [
    "stampa shopper personalizzati",
    "packaging di lusso",
    "hot foil digitale",
    "stampa buste personalizzate",
    "nobilitazione packaging",
    "stampa shopper on-demand",
  ],
  openGraph: {
    title: "Shopper & Packaging di Lusso | Print Solution",
    description:
      "Soluzioni per shopper e packaging premium: stampa hot foil digitale e stampa diretta su buste, shopper e packaging di lusso.",
    images: ["/images/products/aurumpress.jpg"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/soluzioni/shopper" },
};

const products = [
  {
    name: "AurumPress",
    subtitle: "Stampa a Caldo Digitale - Hot Foil",
    desc: "Stampa termica digitale con foil metallizzati (oro, argento, colori), olografici e trasparente lucido. Nobilitazione on-demand per shopper, scatole, buste, etichette e packaging premium. Nessuna fustella, nessun cliché: dal file alla stampa in minuti.",
    specs: [
      "Foil oro, argento, colori, olografico",
      "Risoluzione 300 × 300 dpi",
      "Area stampa 320 × 470 mm",
      "Nessuna fustella o cliché necessario",
      "Stampa da 1 pezzo (on-demand)",
      "Dato variabile: nomi, loghi, QR",
      "Supporti: carta, cartone, pelle, legno",
      "Software proprietario incluso",
    ],
    gradient: "from-amber-500 to-amber-600",
    icon: "✨",
    image: "/images/products/aurumpress-nobg.png",
    href: "/prodotti/aurumpress",
    brand: "Print Solution",
  },
  {
    name: "GreenBox EVO",
    subtitle: "Stampante Single-Pass per Shopper e Buste",
    desc: "Stampa digitale CMYK diretta su shopper, buste, carta kraft, juta e cartone. Tecnologia single-pass HP Pagewide a 30 m/min con inchiostri pigmentati a base acqua. Personalizzazione completa on-demand, anche a tiratura 1.",
    specs: [
      "Fino a 30 m/min",
      "Risoluzione 1200 × 1200 dpi",
      "CMYK - inchiostri a base acqua",
      "Larghezza stampa fino a 30 cm",
      "Supporto fino a 70 cm",
      "Spessore fino a 15 cm",
      "Stampa su kraft, juta, carta, cartone",
      "Alimentatore automatico opzionale",
    ],
    gradient: "from-green-500 to-green-600",
    icon: "🛍️",
    image: "/images/products/greenbox-evo-front-nobg.png",
    href: "/prodotti/greenbox-evo",
    brand: "Print Solution",
  },
];

export default function ShopperPage() {
  return (
    <>
      <PageHero
        title="Shopper & Packaging di Lusso"
        subtitle="Stampa hot foil digitale e stampa diretta per shopper, buste e packaging premium. Nobilitazione e personalizzazione on-demand."
        breadcrumb="Soluzioni"
        videoSrc="/videos/shopper-hero.mp4"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">La Nostra Gamma</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight mb-6">
              Personalizza Ogni Shopper e Packaging
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Dalla nobilitazione hot foil con finiture metalliche alla stampa digitale diretta a colori:
              soluzioni complete per creare shopper, buste e packaging di lusso personalizzati,
              anche in tirature minime.
            </p>
          </div>

          {/* Product Cards */}
          <div className="space-y-12">
            {products.map((p, i) => (
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
                        {p.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-dark-800">{p.name}</h3>
                    </div>
                    <span className="text-sm text-amber-500 font-medium mb-4 inline-block">
                      {p.brand}
                    </span>
                    <p className="text-gray-500 leading-relaxed mb-6">{p.desc}</p>

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

                    <div className="flex flex-wrap gap-3">
                      <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Shopper&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo.%0A%0AGrazie" className="btn-primary text-sm">
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

      {/* Use Cases */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">Applicazioni</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
              Per Chi Sono Pensate
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Boutique & Fashion",
                desc: "Shopper personalizzati con logo in hot foil oro o argento per boutique, gioiellerie e brand moda.",
                icon: "👗",
              },
              {
                title: "Food & Wine",
                desc: "Packaging premium per cantine, pasticcerie e food gourmet. Personalizzazione su kraft, cartone e materiali naturali.",
                icon: "🍷",
              },
              {
                title: "Eventi & Luxury",
                desc: "Buste e shopper per eventi, wedding, corporate gift e edizioni limitate con finiture metalliche e olografiche.",
                icon: "🎁",
              },
            ].map((u) => (
              <div key={u.title} className="card-modern p-8 text-center">
                <div className="text-4xl mb-4">{u.icon}</div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">{u.title}</h3>
                <p className="text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                Vuoi Creare il Tuo Packaging Personalizzato?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Contattaci per una demo dal vivo o inviaci i tuoi file per ricevere campioni stampati.
                La nostra sala demo è a Sesto San Giovanni.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Info%20Shopper%20%26%20Packaging%20di%20Lusso&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni%20sulle%20soluzioni%20per%20shopper%20e%20packaging%20di%20lusso.%0A%0AGrazie"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg"
                >
                  Contattaci Ora
                </a>
                <a href="tel:+390249439417" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  Chiamaci
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
