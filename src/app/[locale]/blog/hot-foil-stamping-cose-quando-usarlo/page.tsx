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
        subtitle={locale === 'it' ? "La guida completa alla stampa a caldo con lamina per etichette e packaging premium" : "The complete guide to hot foil stamping for premium labels and packaging"}
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600">{locale === 'it' ? 'Finiture' : 'Finishing'}</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 8 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              {locale === 'it' ? (
                <>L&apos;<strong>hot foil stamping</strong> (o stampa a caldo) è una tecnica di finitura che trasferisce una lamina metallica su un supporto tramite pressione e calore. Il risultato è un effetto metallizzato — oro, argento, rame o colori olografici — che cattura la luce e comunica lusso, qualità e prestigio.</>
              ) : (
                <><strong>Hot foil stamping</strong> is a finishing technique that transfers a metallic foil onto a substrate through pressure and heat. The result is a metallic effect — gold, silver, copper or holographic colours — that catches the light and communicates luxury, quality and prestige.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Come Funziona' : 'How It Works'}</h2>
            <p>
              {locale === 'it' ? "Il processo è elegante nella sua semplicità. Un cliché (matrice) riscaldato preme la lamina metallica contro il supporto. Il calore attiva l'adesivo sul retro della lamina, che si trasferisce solo nelle aree in rilievo del cliché. Il risultato è un'immagine metallizzata perfettamente definita." : 'The process is elegant in its simplicity. A heated plate (die) presses the metallic foil against the substrate. The heat activates the adhesive on the back of the foil, which transfers only in the raised areas of the die. The result is a perfectly defined metallic image.'}
            </p>
            <p>
              {locale === 'it' ? 'Le fasi principali sono:' : 'The main steps are:'}
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>{locale === 'it' ? 'Preparazione del cliché con il soggetto da stampare' : 'Preparation of the die with the design to be stamped'}</li>
              <li>{locale === 'it' ? 'Riscaldamento del cliché alla temperatura ottimale (100-150°C)' : 'Heating the die to the optimal temperature (100–150°C)'}</li>
              <li>{locale === 'it' ? 'Posizionamento della lamina tra cliché e supporto' : 'Positioning the foil between the die and substrate'}</li>
              <li>{locale === 'it' ? 'Pressione: il cliché trasferisce la lamina sul supporto' : 'Pressure: the die transfers the foil onto the substrate'}</li>
              <li>{locale === 'it' ? "Rimozione: la lamina in eccesso si stacca, lasciando solo l'immagine" : 'Removal: the excess foil peels away, leaving only the image'}</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Tipi di Lamina Disponibili' : 'Available Foil Types'}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{locale === 'it' ? 'Oro' : 'Gold'}</strong> — {locale === 'it' ? 'il classico per eccellenza, disponibile in diverse tonalità (giallo, rosa, champagne)' : 'the ultimate classic, available in various shades (yellow, rose, champagne)'}</li>
              <li><strong>{locale === 'it' ? 'Argento' : 'Silver'}</strong> — {locale === 'it' ? 'elegante e moderno, ideale per design minimalisti' : 'elegant and modern, ideal for minimalist designs'}</li>
              <li><strong>{locale === 'it' ? 'Rame e bronzo' : 'Copper and bronze'}</strong> — {locale === 'it' ? 'tendenza in crescita, perfetti per prodotti artigianali' : 'a growing trend, perfect for artisanal products'}</li>
              <li><strong>{locale === 'it' ? 'Olografiche' : 'Holographic'}</strong> — {locale === 'it' ? 'effetti rainbow e diffrattivi per massimo impatto visivo' : 'rainbow and diffractive effects for maximum visual impact'}</li>
              <li><strong>{locale === 'it' ? 'Colori pieni' : 'Solid colours'}</strong> — {locale === 'it' ? 'lamine colorate opache o lucide per effetti creativi' : 'matte or glossy coloured foils for creative effects'}</li>
              <li><strong>{locale === 'it' ? 'Trasparenti lucide' : 'Clear gloss'}</strong> — {locale === 'it' ? 'per effetti spot UV-like senza UV' : 'for spot UV-like effects without UV'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Applicazioni Principali' : 'Main Applications'}</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Etichette Premium' : 'Premium Labels'}</h3>
            <p>
              {locale === 'it' ? "Vini, spirits, cosmetici e prodotti gourmet utilizzano l'hot foil per distinguersi sullo scaffale. Un logo in oro su un'etichetta nera opaca comunica immediatamente esclusività." : 'Wines, spirits, cosmetics and gourmet products use hot foil to stand out on the shelf. A gold logo on a matte black label immediately communicates exclusivity.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Packaging di Lusso' : 'Luxury Packaging'}</h3>
            <p>
              {locale === 'it' ? "Scatole per gioielli, profumi, cioccolateria e prodotti premium. L'hot foil aggiunge una dimensione tattile e visiva che la sola stampa non può offrire." : 'Boxes for jewellery, perfumes, chocolates and premium products. Hot foil adds a tactile and visual dimension that printing alone cannot offer.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Sicurezza e Anticontraffazione' : 'Security and Anti-Counterfeiting'}</h3>
            <p>
              {locale === 'it' ? 'Le lamine olografiche sono utilizzate come elementi di sicurezza su documenti, certificati e prodotti di marca per prevenire la contraffazione.' : 'Holographic foils are used as security features on documents, certificates and branded products to prevent counterfeiting.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Biglietti da Visita e Inviti' : 'Business Cards and Invitations'}</h3>
            <p>
              {locale === 'it' ? "Per comunicare professionalità e attenzione al dettaglio, l'hot foil su biglietti da visita e inviti è una scelta d'impatto." : 'To communicate professionalism and attention to detail, hot foil on business cards and invitations is a high-impact choice.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Hot Foil Digitale vs Tradizionale' : 'Digital vs Traditional Hot Foil'}</h2>
            <p>
              {locale === 'it' ? (
                <>Il metodo tradizionale richiede cliché metallici personalizzati, con costi che si ammortizzano solo su grandi tirature. La tecnologia digitale ha rivoluzionato il settore: sistemi come l&apos;<strong>AurumPress</strong> utilizzano toner come base adesiva, eliminando la necessità di cliché fisici.</>
              ) : (
                <>The traditional method requires custom metal dies, with costs that are only amortised on large runs. Digital technology has revolutionised the sector: systems like the <strong>AurumPress</strong> use toner as an adhesive base, eliminating the need for physical dies.</>
              )}
            </p>
            <p>
              {locale === 'it' ? "Questo significa poter applicare hot foil anche su tirature di pochi pezzi, con cambio soggetto istantaneo e dati variabili. Il flusso è semplice: si stampa il soggetto con toner, si passa il foglio nell'AurumPress e la lamina aderisce solo dove c'è il toner." : 'This means you can apply hot foil even on runs of just a few pieces, with instant design changes and variable data. The workflow is simple: print the design with toner, pass the sheet through the AurumPress and the foil adheres only where there is toner.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "Quando Conviene Usare l'Hot Foil" : 'When to Use Hot Foil'}</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{locale === 'it' ? 'Il prodotto è posizionato nella fascia medio-alta o premium' : 'The product is positioned in the mid-to-high or premium range'}</li>
              <li>{locale === 'it' ? 'Serve un elemento di differenziazione visiva sullo scaffale' : 'A visual differentiator on the shelf is needed'}</li>
              <li>{locale === 'it' ? 'Il brand vuole comunicare qualità e attenzione al dettaglio' : 'The brand wants to communicate quality and attention to detail'}</li>
              <li>{locale === 'it' ? 'Si necessita di elementi metallizzati non riproducibili con la stampa CMYK' : 'Metallic elements not reproducible with CMYK printing are required'}</li>
              <li>{locale === 'it' ? 'Si vogliono aggiungere elementi di sicurezza anticontraffazione' : 'Anti-counterfeiting security elements are desired'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Conclusione' : 'Conclusion'}</h2>
            <p>
              {locale === 'it' ? "L'hot foil stamping è una finitura che trasforma un prodotto ordinario in uno straordinario. Con le tecnologie digitali come AurumPress, non è più riservato alle grandi tirature: anche le piccole produzioni possono beneficiare di finiture metalliche di alta qualità, senza costi proibitivi." : 'Hot foil stamping is a finish that transforms an ordinary product into an extraordinary one. With digital technologies like AurumPress, it is no longer reserved for large runs: even small productions can benefit from high-quality metallic finishes without prohibitive costs.'}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Info%20Hot%20Foil%20AurumPress&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sull%27AurumPress%20per%20hot%20foil%20stamping.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Scopri AurumPress' : 'Discover AurumPress'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
