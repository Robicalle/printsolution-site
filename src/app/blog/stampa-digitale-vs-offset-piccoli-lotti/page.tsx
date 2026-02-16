import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stampa Digitale vs Offset per Piccoli Lotti",
  description:
    "Confronto tra stampa digitale e offset per piccoli lotti: quando conviene il digitale, vantaggi economici, qualità e flessibilità per packaging ed etichette.",
  keywords: [
    "stampa digitale vs offset",
    "stampa piccoli lotti",
    "stampa digitale packaging",
    "offset vs digitale",
  ],
  openGraph: {
    title: "Stampa Digitale vs Offset per Piccoli Lotti | Print Solution",
    description: "Confronto tra stampa digitale e offset per piccoli lotti: quando conviene il digitale.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/stampa-digitale-vs-offset-piccoli-lotti" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stampa Digitale vs Offset per Piccoli Lotti",
  description: "Confronto completo tra stampa digitale e offset per piccoli lotti di packaging ed etichette.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/stampa-digitale-vs-offset-piccoli-lotti",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Stampa Digitale vs Offset per Piccoli Lotti", item: "https://www.printsolutionsrl.it/blog/stampa-digitale-vs-offset-piccoli-lotti" },
  ],
};

export default function ArticleDigitaleVsOffset() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title="Stampa Digitale vs Offset per Piccoli Lotti"
        subtitle="Quale tecnologia conviene per tirature ridotte di packaging ed etichette?"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600">Stampa</span>
            <span className="text-gray-500 text-sm">15 Febbraio 2026</span>
            <span className="text-gray-500 text-sm">· 8 min di lettura</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              La scelta tra <strong>stampa digitale e offset</strong> è una delle decisioni più importanti per chi produce packaging, etichette o materiale promozionale. Se fino a dieci anni fa l&apos;offset era l&apos;unica opzione professionale, oggi la stampa digitale ha raggiunto livelli qualitativi paragonabili, con vantaggi decisivi per i <strong>piccoli lotti</strong>.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Come Funzionano le Due Tecnologie</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa Offset</h3>
            <p>
              L&apos;offset utilizza lastre metalliche (una per colore) che trasferiscono l&apos;inchiostro su un rullo gommato e poi sul supporto. Richiede un setup lungo e costoso: preparazione lastre, avviamento macchina, calibrazione colore. Per questo è economicamente conveniente solo per tirature elevate (tipicamente oltre 1.000-5.000 copie).
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa Digitale</h3>
            <p>
              La stampa digitale trasferisce l&apos;immagine direttamente dal file al supporto, senza lastre intermedie. Il setup è praticamente istantaneo: si invia il file e si stampa. Questo elimina i costi fissi e rende economica anche la stampa di un singolo pezzo.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Il Punto di Break-Even</h2>
            <p>
              Il concetto chiave è il <strong>break-even point</strong>: la quantità alla quale il costo unitario dell&apos;offset diventa inferiore al digitale. Nella stampa di etichette, questo punto si colloca tipicamente tra le 1.000 e le 5.000 unità. Per il packaging in cartone ondulato, può essere ancora più alto.
            </p>
            <p>
              Sotto il break-even, la stampa digitale costa meno per unità. Sopra, l&apos;offset diventa più conveniente grazie all&apos;ammortamento dei costi fissi su molte copie.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Vantaggi della Stampa Digitale per Piccoli Lotti</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zero costi di avviamento</strong> — niente lastre, niente setup macchina</li>
              <li><strong>Dati variabili</strong> — ogni stampa può essere diversa (numerazione, QR code, personalizzazione)</li>
              <li><strong>Time-to-market ridotto</strong> — dal file alla stampa in minuti, non giorni</li>
              <li><strong>Nessun minimo d&apos;ordine</strong> — anche un solo pezzo è economicamente sostenibile</li>
              <li><strong>Test di mercato</strong> — provare nuove grafiche senza impegno finanziario</li>
              <li><strong>Versioning</strong> — gestire facilmente varianti di lingua, mercato o stagione</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">La Qualità Digitale Oggi</h2>
            <p>
              Le stampanti digitali di ultima generazione hanno colmato il divario qualitativo con l&apos;offset. Sistemi come la EDM-650X per cartone ondulato raggiungono risoluzioni di 600x600 dpi con tecnologia single-pass, garantendo colori vividi e dettagli nitidi anche su supporti ruvidi.
            </p>
            <p>
              Per le etichette, stampanti come l&apos;Afinia L901 offrono qualità fotografica con velocità fino a 18 m/min, comparabile a sistemi flessografici ma senza i costi di cliché e avviamento.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Quando Scegliere l&apos;Offset</h2>
            <p>
              L&apos;offset resta la scelta migliore per:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tirature superiori a 5.000-10.000 copie con grafica fissa</li>
              <li>Colori Pantone specifici non riproducibili in CMYK</li>
              <li>Supporti molto speciali che richiedono inchiostri dedicati</li>
              <li>Produzioni continue e ripetitive con grafica invariata</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">La Soluzione Ibrida</h2>
            <p>
              Molte aziende adottano un approccio ibrido: stampa digitale per piccoli lotti, prototipi e varianti personalizzate; offset per le tirature di massa. Questo permette di ottimizzare i costi su tutta la gamma produttiva.
            </p>
            <p>
              Con soluzioni come quelle proposte da Print Solution, è possibile internalizzare la produzione digitale per piccoli lotti mantenendo l&apos;offset esterno per i grandi volumi, ottenendo il meglio da entrambi i mondi.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              Per i piccoli lotti, la stampa digitale è oggi la scelta più razionale dal punto di vista economico, qualitativo e logistico. Eliminando costi fissi, tempi di attesa e minimi d&apos;ordine, permette alle aziende di essere più agili e reattive. La domanda non è più &quot;digitale o offset?&quot; ma &quot;per questa tiratura, quale conviene?&quot;
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">← Torna al Blog</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Stampa%20Digitale%20Piccoli%20Lotti&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulla%20stampa%20digitale%20per%20piccoli%20lotti.%0A%0AGrazie" className="btn-primary text-sm">Richiedi un Preventivo</a>
          </div>
        </div>
      </article>
    </>
  );
}
