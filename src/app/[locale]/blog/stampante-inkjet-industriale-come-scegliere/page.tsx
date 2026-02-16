import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Stampante Inkjet Industriale: Come Scegliere",
  description:
    "Guida alla scelta della stampante inkjet industriale: tecnologie single-pass vs multi-pass, criteri di valutazione e applicazioni per packaging e cartone ondulato.",
  keywords: [
    "stampante inkjet industriale",
    "stampante industriale",
    "inkjet industriale",
    "stampante single pass",
  ],
  openGraph: {
    title: "Stampante Inkjet Industriale: Come Scegliere | Print Solution",
    description: "Guida alla scelta della stampante inkjet industriale per packaging e cartone ondulato.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/stampante-inkjet-industriale-come-scegliere" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stampante Inkjet Industriale: Come Scegliere",
  description: "Guida alla scelta della stampante inkjet industriale per packaging.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/stampante-inkjet-industriale-come-scegliere",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Stampante Inkjet Industriale: Come Scegliere", item: "https://www.printsolutionsrl.it/blog/stampante-inkjet-industriale-come-scegliere" },
  ],
};

export default async function ArticleInkjetIndustriale() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Stampante Inkjet Industriale: Come Scegliere" : "Industrial Inkjet Printer: How to Choose"}
        subtitle="Guida tecnica alla scelta della stampante inkjet per applicazioni industriali"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600">Stampa</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 9 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              Le <strong>stampanti inkjet industriali</strong> hanno rivoluzionato il mondo della stampa su packaging, cartone ondulato ed etichette. Ma il mercato offre soluzioni molto diverse tra loro, e scegliere quella giusta richiede una valutazione tecnica approfondita. Questa guida analizza i criteri fondamentali.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Single-Pass vs Multi-Pass</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Tecnologia Single-Pass</h3>
            <p>
              Nelle stampanti single-pass, una barra di testine copre l&apos;intera larghezza di stampa. Il supporto passa sotto la barra una sola volta, ottenendo velocità di produzione molto elevate (fino a 50-100 m/min). Questa tecnologia è ideale per produzioni continue e volumi elevati.
            </p>
            <p>
              La EDM-650X di Print Solution utilizza tecnologia single-pass con testine piezoelettriche per stampare direttamente su cartone ondulato a 600x600 dpi, coprendo una larghezza fino a 650 mm.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Tecnologia Multi-Pass</h3>
            <p>
              Le stampanti multi-pass (o scanning) muovono la testina avanti e indietro sul supporto fermo o in lento avanzamento. Offrono risoluzioni molto elevate (fino a 1440 dpi) ma velocità limitate. Ideali per prototipi, campioni e tirature molto ridotte dove la qualità è prioritaria.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Tipi di Inchiostro</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Inchiostri a Base Acqua</h3>
            <p>
              Ecologici e inodori, sono la scelta preferita per packaging alimentare e applicazioni indoor. Offrono colori vividi e buona penetrazione nei supporti porosi come carta e cartone. Richiedono asciugatura (aria calda o IR).
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Inchiostri UV</h3>
            <p>
              Si polimerizzano istantaneamente sotto luce UV, aderendo a qualsiasi superficie (anche non porosa). Eccellente resistenza ad abrasione, acqua e luce. Ideali per applicazioni outdoor e supporti sintetici.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Inchiostri a Solvente</h3>
            <p>
              Alta resistenza alle intemperie, adatti per stampa outdoor di grande formato. In ambito packaging industriale sono utilizzati per marcatura e codifica su superfici non assorbenti.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Criteri di Scelta Fondamentali</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Velocità di produzione</strong> — quanti metri lineari o fogli all&apos;ora servono?</li>
              <li><strong>Larghezza di stampa</strong> — deve coprire la dimensione massima dei vostri supporti</li>
              <li><strong>Risoluzione</strong> — 300 dpi per testo e codici a barre, 600+ dpi per immagini fotografiche</li>
              <li><strong>Tipo di supporto</strong> — cartone ondulato, carta, film plastico, metallo</li>
              <li><strong>Tipo di inchiostro</strong> — in base all&apos;applicazione finale e alle normative</li>
              <li><strong>Integrazione</strong> — compatibilità con linee di produzione esistenti</li>
              <li><strong>Costo di gestione</strong> — consumo inchiostro, manutenzione testine, parti di ricambio</li>
              <li><strong>Assistenza tecnica</strong> — disponibilità di supporto locale e tempi di intervento</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Applicazioni Industriali</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa su Cartone Ondulato</h3>
            <p>
              La principale applicazione delle inkjet industriali single-pass. Scatole, espositori, packaging per e-commerce e GDO. La EDM-650X è progettata specificamente per questa applicazione, con alimentazione automatica e gestione di spessori da 1 a 10 mm.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa di Etichette in Bobina</h3>
            <p>
              Per volumi elevati di etichette, stampanti industriali come la NeuraLabel Callisto offrono velocità fino a 24 m/min con qualità costante e integrazione in linea con sistemi di finitura (taglio, laminazione, avvolgimento).
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Marcatura e Codifica</h3>
            <p>
              Sistemi inkjet per stampare codici a barre, date di scadenza, numeri di lotto e QR code direttamente sulla linea di confezionamento ad alta velocità.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Il Ruolo dell&apos;Assistenza Tecnica</h2>
            <p>
              Una stampante industriale è un investimento significativo. La qualità dell&apos;assistenza post-vendita è fondamentale: tempi di intervento, disponibilità di ricambi, formazione degli operatori e supporto remoto fanno la differenza tra un investimento produttivo e una fonte di frustrazione.
            </p>
            <p>
              Print Solution offre assistenza tecnica diretta su tutto il territorio italiano, con interventi entro 24-48 ore, formazione operatore inclusa e supporto remoto per la risoluzione rapida dei problemi.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              La scelta della stampante inkjet industriale dipende dall&apos;applicazione, dal volume e dal tipo di supporto. Single-pass per alta produttività, multi-pass per massima qualità, inchiostri a base acqua per l&apos;alimentare, UV per la versatilità. L&apos;importante è valutare il TCO completo e la qualità dell&apos;assistenza tecnica.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Stampante%20Inkjet%20Industriale&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulle%20stampanti%20inkjet%20industriali.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
