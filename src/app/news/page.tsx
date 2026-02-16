import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "News & Eventi",
  description:
    "Le ultime novità, eventi e fiere di Print Solution S.r.l. Aggiornamenti su stampa digitale packaging, etichettatura industriale e nuovi prodotti.",
  keywords: [
    "news stampa digitale",
    "fiere packaging Italia",
    "Print Solution eventi",
    "IPACK-IMA",
  ],
  openGraph: {
    title: "News & Eventi | Print Solution",
    description:
      "Le ultime novità, eventi e fiere di Print Solution. Aggiornamenti su stampa digitale e packaging.",
    images: ["/images/hero-boxes.webp"],
    type: "website",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/news" },
};

const news = [
  {
    category: "Fiera",
    title: "IPACK-IMA 2025 — Milano",
    date: "27–30 Maggio 2025",
    desc: "Print Solution presenta a IPACK-IMA 2025 le soluzioni complementari per la produzione digitale e automatica di packaging personalizzato. Abbiamo esposto GreenBox Evo, EDM-650X e Anypack AB2500 con demo dal vivo.",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    category: "Prodotto",
    title: "Anypack AB2500: il box maker automatico che rivoluziona il packaging",
    date: "Ottobre 2025",
    desc: "Print Solution presenta Anypack AB2500, il box maker automatico che produce scatole su misura con cambio formato in soli 20 secondi. Fino a 600 pezzi/ora, da bobina di cartone ondulato a scatola finita. Ideale per e-commerce, logistica e produzione on-demand. Disponibile per demo nella nostra sala.",
    gradient: "from-brand-500 to-brand-600",
  },
  {
    category: "Fiera",
    title: "VISCOM 2025 — Milano",
    date: "1–3 Ottobre 2025",
    desc: "Print Solution è stata presente al VISCOM 2025 con tante novità nel settore della stampa digitale per packaging ed etichette. PAD 8 — STAND C01.",
    gradient: "from-magenta-500 to-magenta-600",
  },
  {
    category: "Prodotto",
    title: "Nuova Afinia X350: la più veloce della categoria",
    date: "Gennaio 2025",
    desc: "La nuova stampante etichette Afinia X350 con inchiostri pigmentati a base acqua raggiunge i 45 m/min con ridondanza ugelli 2×. Disponibile per demo nella nostra sala.",
    gradient: "from-yellow-500 to-yellow-600",
  },
  {
    category: "Azienda",
    title: "Print Solution compie 15 anni",
    date: "2025",
    desc: "Nel 2025 festeggiamo 15 anni di attività come distributori di soluzioni digitali per stampa packaging ed etichette. Dal 2010 al fianco delle aziende italiane con tecnologia, competenza e assistenza dedicata. Grazie a tutti i clienti e partner che ci hanno accompagnato.",
    gradient: "from-green-500 to-green-600",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Eventi"
        imageSrc="/images/hero-news.jpg"
        subtitle="Le ultime novità, fiere e aggiornamenti dal mondo Print Solution."
        breadcrumb="Print Solution"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {news.map((n) => (
              <article key={n.title} className="card-modern overflow-hidden hover:-translate-y-0.5 transition-transform duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${n.gradient}`}>
                      {n.category}
                    </span>
                    <span className="text-gray-500 text-sm">{n.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 mb-3">{n.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{n.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Vuoi restare aggiornato sulle nostre novità?</p>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" className="btn-primary">Contattaci</a>
          </div>
        </div>
      </section>
    </>
  );
}
