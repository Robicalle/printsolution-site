import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Come Automatizzare la Produzione di Scatole",
  description:
    "Guida all'automazione della produzione di scatole in cartone ondulato: tecnologie, vantaggi operativi e ROI per scatolifici e aziende e-commerce.",
  keywords: [
    "automazione produzione scatole",
    "produzione scatole automatica",
    "macchina scatole automatica",
    "scatole on demand",
  ],
  openGraph: {
    title: "Come Automatizzare la Produzione di Scatole | Print Solution",
    description: "Guida all'automazione della produzione di scatole: tecnologie, vantaggi e ROI.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/automatizzare-produzione-scatole" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Come Automatizzare la Produzione di Scatole",
  description: "Guida all'automazione della produzione di scatole in cartone ondulato.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/automatizzare-produzione-scatole",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Come Automatizzare la Produzione di Scatole", item: "https://www.printsolutionsrl.it/blog/automatizzare-produzione-scatole" },
  ],
};

export default async function ArticleAutomazione() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Come Automatizzare la Produzione di Scatole" : "How to Automate Box Production"}
        subtitle={locale === 'it' ? "Dalla produzione manuale all'automazione: guida pratica per scatolifici e aziende" : "From manual to automated production: a practical guide for box manufacturers and businesses"}
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600">Packaging</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 9 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              {locale === 'it' ? (
                <>La <strong>produzione manuale di scatole</strong> è lenta, costosa e soggetta a errori. In un mercato che richiede personalizzazione, velocità e lotti sempre più piccoli, l&apos;automazione non è più un&apos;opzione ma una necessità. Ma come si passa dalla produzione tradizionale a quella automatizzata?</>
              ) : (
                <>The <strong>manual production of boxes</strong> is slow, expensive and prone to errors. In a market that demands customisation, speed and increasingly smaller batches, automation is no longer an option but a necessity. But how do you transition from traditional to automated production?</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'I Limiti della Produzione Tradizionale' : 'The Limitations of Traditional Production'}</h2>
            <p>
              {locale === 'it' ? 'Il metodo tradizionale di produzione scatole prevede fustelle fisiche, macchine dedicate per ogni formato e operatori specializzati. I principali limiti sono:' : 'The traditional box production method requires physical dies, dedicated machines for each format and specialised operators. The main limitations are:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{locale === 'it' ? 'Costi fustelle' : 'Die costs'}</strong> — {locale === 'it' ? 'ogni nuovo formato richiede una fustella da centinaia di euro' : 'every new format requires a die costing hundreds of euros'}</li>
              <li><strong>{locale === 'it' ? 'Tempi di setup' : 'Setup times'}</strong> — {locale === 'it' ? 'cambiare formato può richiedere 30-60 minuti' : 'changing format can take 30–60 minutes'}</li>
              <li><strong>{locale === 'it' ? 'Stock obbligatorio' : 'Mandatory stock'}</strong> — {locale === 'it' ? 'per ammortizzare i costi fissi servono grandi tirature' : 'large runs are needed to amortise fixed costs'}</li>
              <li><strong>{locale === 'it' ? 'Spazio magazzino' : 'Warehouse space'}</strong> — {locale === 'it' ? 'stoccare scatole pre-fabbricate occupa spazio prezioso' : 'storing pre-made boxes takes up valuable space'}</li>
              <li><strong>{locale === 'it' ? 'Rigidità' : 'Rigidity'}</strong> — {locale === 'it' ? 'rispondere a ordini urgenti o personalizzati è complesso' : 'responding to urgent or custom orders is complex'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "Cos'è un Box Maker Automatico" : 'What Is an Automatic Box Maker'}</h2>
            <p>
              {locale === 'it' ? "Un box maker automatico è una macchina che produce scatole partendo da fogli piani di cartone ondulato. In un'unica operazione esegue taglio, cordonatura, scanalatura e opzionalmente incollaggio. Il cambio formato è digitale e avviene in pochi secondi." : 'An automatic box maker is a machine that produces boxes from flat sheets of corrugated cardboard. In a single operation it performs cutting, creasing, slotting and optionally gluing. Format changeover is digital and takes just a few seconds.'}
            </p>
            <p>
              {locale === 'it' ? "L'Anypack AB2500, ad esempio, gestisce fogli fino a 2500 mm di larghezza, memorizza oltre 20.000 formati e produce 500-600 scatole all'ora con un solo operatore. Il software include oltre 100 modelli Fefco precaricati e permette di creare formati personalizzati." : 'The Anypack AB2500, for example, handles sheets up to 2500 mm wide, stores over 20,000 formats and produces 500–600 boxes per hour with a single operator. The software includes over 100 preloaded Fefco templates and allows you to create custom formats.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "I Vantaggi dell'Automazione" : 'The Benefits of Automation'}</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Produzione On-Demand' : 'On-Demand Production'}</h3>
            <p>
              {locale === 'it' ? 'Si producono solo le scatole necessarie, nel momento in cui servono. Zero stock, zero sprechi, zero obsolescenza. Ogni ordine ha la sua scatola su misura.' : 'Only the boxes needed are produced, exactly when they are needed. Zero stock, zero waste, zero obsolescence. Every order gets its own custom-fit box.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Cambio Formato Istantaneo' : 'Instant Format Changeover'}</h3>
            <p>
              {locale === 'it' ? "Con un box maker digitale, passare da un formato all'altro richiede 10 secondi. Niente fustelle da cambiare, niente calibrazioni manuali. Basta selezionare il modello dal touchscreen o scansionare un barcode." : 'With a digital box maker, switching from one format to another takes 10 seconds. No dies to change, no manual calibrations. Simply select the template from the touchscreen or scan a barcode.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Riduzione del Personale' : 'Reduced Labour Requirements'}</h3>
            <p>
              {locale === 'it' ? "Un solo operatore gestisce l'intera produzione. La macchina è progettata per essere intuitiva: alimentazione automatica, interfaccia touchscreen, diagnostica integrata." : 'A single operator manages the entire production. The machine is designed to be intuitive: automatic feeding, touchscreen interface, integrated diagnostics.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Integrazione con il Gestionale' : 'ERP Integration'}</h3>
            <p>
              {locale === 'it' ? "I box maker moderni si integrano con sistemi WMS e ERP. L'ordine arriva dal gestionale, la macchina riceve le specifiche e produce automaticamente. Questo elimina errori di comunicazione e velocizza il flusso produttivo." : 'Modern box makers integrate with WMS and ERP systems. The order comes from the management software, the machine receives the specifications and produces automatically. This eliminates communication errors and speeds up the production workflow.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "Il ROI dell'Automazione" : 'The ROI of Automation'}</h2>
            <p>
              {locale === 'it' ? "L'investimento in un box maker automatico si ripaga tipicamente in 12-24 mesi, considerando:" : 'The investment in an automatic box maker typically pays for itself in 12–24 months, considering:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{locale === 'it' ? 'Eliminazione dei costi di fustelle (risparmio medio: 5.000-15.000 €/anno)' : 'Elimination of die costs (average saving: €5,000–15,000/year)'}</li>
              <li>{locale === 'it' ? 'Riduzione del personale dedicato alla produzione scatole' : 'Reduction of personnel dedicated to box production'}</li>
              <li>{locale === 'it' ? 'Eliminazione dello stock di scatole pre-fabbricate' : 'Elimination of pre-made box inventory'}</li>
              <li>{locale === 'it' ? 'Riduzione dei costi di spedizione grazie a scatole su misura' : 'Reduced shipping costs thanks to custom-fit boxes'}</li>
              <li>{locale === 'it' ? 'Riduzione degli scarti e dei resi per imballaggio inadeguato' : 'Reduced waste and returns due to inadequate packaging'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Come Scegliere il Box Maker Giusto' : 'How to Choose the Right Box Maker'}</h2>
            <p>{locale === 'it' ? 'I criteri principali per la scelta sono:' : 'The main selection criteria are:'}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{locale === 'it' ? 'Larghezza massima foglio' : 'Maximum sheet width'}</strong> — {locale === 'it' ? 'determina la dimensione massima delle scatole' : 'determines the maximum box size'}</li>
              <li><strong>{locale === 'it' ? 'Spessore cartone supportato' : 'Supported cardboard thickness'}</strong> — {locale === 'it' ? 'singola onda, doppia onda o entrambi' : 'single wall, double wall or both'}</li>
              <li><strong>{locale === 'it' ? 'Produttività oraria' : 'Hourly output'}</strong> — {locale === 'it' ? 'in base al volume di produzione necessario' : 'based on required production volume'}</li>
              <li><strong>{locale === 'it' ? 'Software e interfaccia' : 'Software and interface'}</strong> — {locale === 'it' ? "facilità d'uso e modelli Fefco disponibili" : 'ease of use and available Fefco templates'}</li>
              <li><strong>{locale === 'it' ? 'Opzioni aggiuntive' : 'Additional options'}</strong> — {locale === 'it' ? 'incollatura, stampa, integrazione WMS' : 'gluing, printing, WMS integration'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Conclusione' : 'Conclusion'}</h2>
            <p>
              {locale === 'it' ? "Automatizzare la produzione di scatole è il passo più efficace per ridurre i costi, aumentare la flessibilità e migliorare il servizio al cliente. La tecnologia è matura, accessibile e con tempi di rientro rapidi. Se producete o utilizzate scatole in cartone ondulato, è il momento di valutare l'automazione." : 'Automating box production is the most effective step to reduce costs, increase flexibility and improve customer service. The technology is mature, accessible and with rapid payback times. If you produce or use corrugated cardboard boxes, now is the time to consider automation.'}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Automazione%20Produzione%20Scatole&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sull%27automazione%20della%20produzione%20scatole.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
