import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Hot Foil Stamping: Cos'è e Quando Usarlo",
  description:
    "Scopri cos'è l'hot foil stamping, come funziona e quando conviene usarlo per etichette e packaging. Guida completa con applicazioni e vantaggi della stampa a caldo.",
  keywords: [
    "hot foil stamping",
    "stampa a caldo",
    "foil stamping",
    "stampa lamina oro",
  ],
  openGraph: {
    title: "Hot Foil Stamping: Cos'è e Quando Usarlo | Print Solution",
    description: "Cos'è l'hot foil stamping, come funziona e quando usarlo per etichette e packaging premium.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/hot-foil-stamping-cose-quando-usarlo" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hot Foil Stamping: Cos'è e Quando Usarlo",
  description: "Guida completa all'hot foil stamping: tecnologia, applicazioni e vantaggi per packaging premium.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/hot-foil-stamping-cose-quando-usarlo",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Hot Foil Stamping: Cos'è e Quando Usarlo", item: "https://www.printsolutionsrl.it/blog/hot-foil-stamping-cose-quando-usarlo" },
  ],
};

export default async function ArticleHotFoil() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Hot Foil Stamping: Cos'è e Quando Usarlo" : "Hot Foil Stamping: What It Is and When to Use It"}
        subtitle="La guida completa alla stampa a caldo con lamina per etichette e packaging premium"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600">Finiture</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 8 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              L&apos;<strong>hot foil stamping</strong> (o stampa a caldo) è una tecnica di finitura che trasferisce una lamina metallica su un supporto tramite pressione e calore. Il risultato è un effetto metallizzato — oro, argento, rame o colori olografici — che cattura la luce e comunica lusso, qualità e prestigio.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Come Funziona</h2>
            <p>
              Il processo è elegante nella sua semplicità. Un cliché (matrice) riscaldato preme la lamina metallica contro il supporto. Il calore attiva l&apos;adesivo sul retro della lamina, che si trasferisce solo nelle aree in rilievo del cliché. Il risultato è un&apos;immagine metallizzata perfettamente definita.
            </p>
            <p>
              Le fasi principali sono:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Preparazione del cliché con il soggetto da stampare</li>
              <li>Riscaldamento del cliché alla temperatura ottimale (100-150°C)</li>
              <li>Posizionamento della lamina tra cliché e supporto</li>
              <li>Pressione: il cliché trasferisce la lamina sul supporto</li>
              <li>Rimozione: la lamina in eccesso si stacca, lasciando solo l&apos;immagine</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Tipi di Lamina Disponibili</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Oro</strong> — il classico per eccellenza, disponibile in diverse tonalità (giallo, rosa, champagne)</li>
              <li><strong>Argento</strong> — elegante e moderno, ideale per design minimalisti</li>
              <li><strong>Rame e bronzo</strong> — tendenza in crescita, perfetti per prodotti artigianali</li>
              <li><strong>Olografiche</strong> — effetti rainbow e diffrattivi per massimo impatto visivo</li>
              <li><strong>Colori pieni</strong> — lamine colorate opache o lucide per effetti creativi</li>
              <li><strong>Trasparenti lucide</strong> — per effetti spot UV-like senza UV</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Applicazioni Principali</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Etichette Premium</h3>
            <p>
              Vini, spirits, cosmetici e prodotti gourmet utilizzano l&apos;hot foil per distinguersi sullo scaffale. Un logo in oro su un&apos;etichetta nera opaca comunica immediatamente esclusività.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Packaging di Lusso</h3>
            <p>
              Scatole per gioielli, profumi, cioccolateria e prodotti premium. L&apos;hot foil aggiunge una dimensione tattile e visiva che la sola stampa non può offrire.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Sicurezza e Anticontraffazione</h3>
            <p>
              Le lamine olografiche sono utilizzate come elementi di sicurezza su documenti, certificati e prodotti di marca per prevenire la contraffazione.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Biglietti da Visita e Inviti</h3>
            <p>
              Per comunicare professionalità e attenzione al dettaglio, l&apos;hot foil su biglietti da visita e inviti è una scelta d&apos;impatto.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Hot Foil Digitale vs Tradizionale</h2>
            <p>
              Il metodo tradizionale richiede cliché metallici personalizzati, con costi che si ammortizzano solo su grandi tirature. La tecnologia digitale ha rivoluzionato il settore: sistemi come l&apos;<strong>AurumPress</strong> utilizzano toner come base adesiva, eliminando la necessità di cliché fisici.
            </p>
            <p>
              Questo significa poter applicare hot foil anche su tirature di pochi pezzi, con cambio soggetto istantaneo e dati variabili. Il flusso è semplice: si stampa il soggetto con toner, si passa il foglio nell&apos;AurumPress e la lamina aderisce solo dove c&apos;è il toner.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Quando Conviene Usare l&apos;Hot Foil</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Il prodotto è posizionato nella fascia medio-alta o premium</li>
              <li>Serve un elemento di differenziazione visiva sullo scaffale</li>
              <li>Il brand vuole comunicare qualità e attenzione al dettaglio</li>
              <li>Si necessita di elementi metallizzati non riproducibili con la stampa CMYK</li>
              <li>Si vogliono aggiungere elementi di sicurezza anticontraffazione</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              L&apos;hot foil stamping è una finitura che trasforma un prodotto ordinario in uno straordinario. Con le tecnologie digitali come AurumPress, non è più riservato alle grandi tirature: anche le piccole produzioni possono beneficiare di finiture metalliche di alta qualità, senza costi proibitivi.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Info%20Hot%20Foil%20AurumPress&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sull%27AurumPress%20per%20hot%20foil%20stamping.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Scopri AurumPress' : 'Scopri AurumPress'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
