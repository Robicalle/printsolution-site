import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Box Maker: Cos'è e Come Funziona la Produzione Automatica di Scatole",
  description:
    "Guida completa al box maker automatico: come funziona, vantaggi, applicazioni e confronto con i metodi tradizionali di produzione scatole in cartone ondulato.",
  keywords: [
    "box maker",
    "produzione automatica scatole",
    "box maker automatico",
    "macchina scatole cartone",
  ],
  openGraph: {
    title: "Box Maker: Produzione Automatica di Scatole | Print Solution",
    description:
      "Guida completa al box maker automatico: come funziona, vantaggi e applicazioni.",
    images: ["/images/products/ab2500.png"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/box-maker-produzione-automatica-scatole" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Box Maker: Cos'è e Come Funziona la Produzione Automatica di Scatole",
  description: "Guida completa al box maker automatico: come funziona, vantaggi, applicazioni e confronto con i metodi tradizionali.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-05",
  dateModified: "2026-02-10",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/box-maker-produzione-automatica-scatole",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Box Maker: Produzione Automatica Scatole", item: "https://www.printsolutionsrl.it/blog/box-maker-produzione-automatica-scatole" },
  ],
};

export default async function ArticleBoxMaker() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Box Maker: Cos'è e Come Funziona" : "Box Maker: What It Is and How It Works"}
        subtitle={locale === 'it' ? "Guida completa alla produzione automatica di scatole in cartone ondulato" : "Complete guide to automatic corrugated cardboard box production"}
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600">Packaging</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '5 Febbraio 2026' : 'February 5, 2026'}</span>
            <span className="text-gray-500 text-sm">· 8 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "Cos'è un Box Maker?" : 'What Is a Box Maker?'}</h2>
            <p>
              {locale === 'it' ? (
                <>Un <strong>box maker</strong> è una macchina automatica progettata per creare scatole in cartone ondulato partendo da fogli piani. In un&apos;unica operazione esegue taglio, scanalatura, cordonatura, rifilatura, fustellatura e, opzionalmente, incollaggio e stampa.</>
              ) : (
                <>A <strong>box maker</strong> is an automatic machine designed to create corrugated cardboard boxes from flat sheets. In a single operation it performs cutting, slotting, creasing, trimming, die-cutting and, optionally, gluing and printing.</>
              )}
            </p>
            <p>
              {locale === 'it' ? (
                <>A differenza dei sistemi tradizionali che richiedono fustelle fisiche e lunghi tempi di setup, un box maker moderno come l&apos;<strong>Anypack AB2500</strong> cambia formato in soli 10 secondi, memorizza fino a 20.000 formati e produce 500–600 pezzi all&apos;ora con un solo operatore.</>
              ) : (
                <>Unlike traditional systems that require physical dies and long setup times, a modern box maker like the <strong>Anypack AB2500</strong> changes format in just 10 seconds, stores up to 20,000 formats and produces 500–600 pieces per hour with a single operator.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Come Funziona il Processo' : 'How the Process Works'}</h2>
            <p>{locale === 'it' ? 'Il flusso di lavoro di un box maker automatico è sorprendentemente semplice:' : 'The workflow of an automatic box maker is surprisingly simple:'}</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>{locale === 'it' ? 'Accensione' : 'Power on'}</strong> — {locale === 'it' ? 'la macchina esegue la ricerca automatica dello zero' : 'the machine performs automatic zero-point calibration'}</li>
              <li><strong>{locale === 'it' ? 'Input ordine' : 'Order input'}</strong> — {locale === 'it' ? 'tramite touchscreen 15,6" o scansione barcode' : 'via 15.6" touchscreen or barcode scanning'}</li>
              <li><strong>{locale === 'it' ? 'Selezione tipo scatola' : 'Box type selection'}</strong> — {locale === 'it' ? 'oltre 100 modelli Fefco precaricati' : 'over 100 preloaded Fefco templates'}</li>
              <li><strong>{locale === 'it' ? 'Posizionamento cartone' : 'Cardboard positioning'}</strong> — {locale === 'it' ? 'alimentatore automatico con aspirazione a vuoto' : 'automatic feeder with vacuum suction'}</li>
              <li><strong>{locale === 'it' ? 'Produzione' : 'Production'}</strong> — {locale === 'it' ? 'taglio, scanalatura, cordonatura e fustellatura automatici' : 'automatic cutting, slotting, creasing and die-cutting'}</li>
              <li><strong>Output</strong> — {locale === 'it' ? 'scatola pronta, opzionalmente incollata' : 'finished box, optionally glued'}</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Vantaggi rispetto ai Metodi Tradizionali' : 'Advantages Over Traditional Methods'}</h2>
            <p>{locale === 'it' ? 'I vantaggi di un box maker automatico rispetto alla produzione tradizionale con fustelle sono enormi:' : 'The advantages of an automatic box maker over traditional die-based production are enormous:'}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{locale === 'it' ? 'Zero fustelle fisiche' : 'Zero physical dies'}</strong> — {locale === 'it' ? 'il cambio formato è digitale, in 10 secondi' : 'format changeover is digital, in 10 seconds'}</li>
              <li><strong>{locale === 'it' ? 'Produzione on-demand' : 'On-demand production'}</strong> — {locale === 'it' ? 'si producono solo le scatole necessarie, eliminando lo stock' : 'only the boxes needed are produced, eliminating inventory'}</li>
              <li><strong>{locale === 'it' ? 'Un solo operatore' : 'Single operator'}</strong> — {locale === 'it' ? 'riduzione drastica dei costi di manodopera' : 'drastic reduction in labour costs'}</li>
              <li><strong>{locale === 'it' ? 'Versatilità totale' : 'Total versatility'}</strong> — {locale === 'it' ? 'da scatole piccole a imballaggi per mobili' : 'from small boxes to furniture packaging'}</li>
              <li><strong>{locale === 'it' ? 'Sostenibilità' : 'Sustainability'}</strong> — {locale === 'it' ? "il cartone ondulato è riciclabile all'83%" : 'corrugated cardboard is 83% recyclable'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Per Chi è Pensato' : 'Who Is It For'}</h2>
            <p>
              {locale === 'it' ? (
                <>Il box maker è la soluzione ideale per <strong>scatolifici, aziende e-commerce, produttori di packaging, settore mobili e arredamento</strong>, e chiunque abbia bisogno di scatole personalizzate in piccoli lotti e varietà multiple.</>
              ) : (
                <>The box maker is the ideal solution for <strong>box manufacturers, e-commerce companies, packaging producers, furniture and furnishing companies</strong>, and anyone who needs custom boxes in small batches with multiple variants.</>
              )}
            </p>
            <p>
              {locale === 'it' ? (
                <>Con l&apos;e-commerce in crescita esponenziale, la domanda di packaging personalizzato &quot;su misura&quot; è sempre più forte. Un box maker come l&apos;AB2500 permette di creare la scatola della giusta dimensione per ogni prodotto, riducendo materiale di riempimento, costi di spedizione e danni durante il trasporto.</>
              ) : (
                <>With e-commerce growing exponentially, the demand for custom-fit packaging is ever stronger. A box maker like the AB2500 allows you to create the right-sized box for every product, reducing filler material, shipping costs and transit damage.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? "Specifiche Tecniche dell'Anypack AB2500" : 'Anypack AB2500 Technical Specifications'}</h2>
            <p>{locale === 'it' ? "L'Anypack AB2500, distribuito in Italia da Print Solution, è il modello best seller della gamma:" : 'The Anypack AB2500, distributed in Italy by Print Solution, is the best-selling model in the range:'}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{locale === 'it' ? 'Foglio massimo: 2500 mm di larghezza' : 'Maximum sheet: 2500 mm width'}</li>
              <li>{locale === 'it' ? 'Spessore cartone: 1,5 – 10 mm (singola o doppia onda)' : 'Cardboard thickness: 1.5 – 10 mm (single or double wall)'}</li>
              <li>{locale === 'it' ? 'Produttività: 500–600 pezzi/ora' : 'Output: 500–600 pieces/hour'}</li>
              <li>{locale === 'it' ? 'Componenti premium: PLC Keyence, servomotori Panasonic, lame SKD11' : 'Premium components: Keyence PLC, Panasonic servo motors, SKD11 blades'}</li>
              <li>{locale === 'it' ? 'Software: touchscreen 15,6", 100+ stili Fefco, multilingua' : 'Software: 15.6" touchscreen, 100+ Fefco styles, multilingual'}</li>
              <li>{locale === 'it' ? 'Opzioni: incollatrice a caldo/freddo, integrazione WMS, stampa digitale' : 'Options: hot/cold gluer, WMS integration, digital printing'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Conclusione' : 'Conclusion'}</h2>
            <p>
              {locale === 'it' ? "Il box maker automatico rappresenta una rivoluzione per il settore packaging. Elimina fustelle, stock e sprechi, permettendo la produzione on-demand di scatole personalizzate con un solo operatore. Se lavori nel packaging o nell'e-commerce, è la tecnologia che può trasformare il tuo business." : 'The automatic box maker represents a revolution for the packaging industry. It eliminates dies, inventory and waste, enabling on-demand production of custom boxes with a single operator. If you work in packaging or e-commerce, it is the technology that can transform your business.'}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20Soluzioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Soluzioni%20Print%20Solution.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Consulenza gratuita' : 'Free consultation'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
