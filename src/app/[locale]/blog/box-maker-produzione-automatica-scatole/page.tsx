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
        title="Box Maker: Cos'è e Come Funziona"
        subtitle="Guida completa alla produzione automatica di scatole in cartone ondulato"
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
            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Cos&apos;è un Box Maker?</h2>
            <p>
              Un <strong>box maker</strong> è una macchina automatica progettata per creare scatole in cartone ondulato 
              partendo da fogli piani. In un&apos;unica operazione esegue taglio, scanalatura, cordonatura, rifilatura, 
              fustellatura e, opzionalmente, incollaggio e stampa.
            </p>
            <p>
              A differenza dei sistemi tradizionali che richiedono fustelle fisiche e lunghi tempi di setup, un box maker 
              moderno come l&apos;<strong>Anypack AB2500</strong> cambia formato in soli 10 secondi, memorizza fino a 20.000 
              formati e produce 500–600 pezzi all&apos;ora con un solo operatore.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Come Funziona il Processo</h2>
            <p>Il flusso di lavoro di un box maker automatico è sorprendentemente semplice:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Accensione</strong> — la macchina esegue la ricerca automatica dello zero</li>
              <li><strong>Input ordine</strong> — tramite touchscreen 15,6&quot; o scansione barcode</li>
              <li><strong>Selezione tipo scatola</strong> — oltre 100 modelli Fefco precaricati</li>
              <li><strong>Posizionamento cartone</strong> — alimentatore automatico con aspirazione a vuoto</li>
              <li><strong>Produzione</strong> — taglio, scanalatura, cordonatura e fustellatura automatici</li>
              <li><strong>Output</strong> — scatola pronta, opzionalmente incollata</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Vantaggi rispetto ai Metodi Tradizionali</h2>
            <p>I vantaggi di un box maker automatico rispetto alla produzione tradizionale con fustelle sono enormi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zero fustelle fisiche</strong> — il cambio formato è digitale, in 10 secondi</li>
              <li><strong>Produzione on-demand</strong> — si producono solo le scatole necessarie, eliminando lo stock</li>
              <li><strong>Un solo operatore</strong> — riduzione drastica dei costi di manodopera</li>
              <li><strong>Versatilità totale</strong> — da scatole piccole a imballaggi per mobili</li>
              <li><strong>Sostenibilità</strong> — il cartone ondulato è riciclabile all&apos;83%</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Per Chi è Pensato</h2>
            <p>
              Il box maker è la soluzione ideale per <strong>scatolifici, aziende e-commerce, produttori di packaging, 
              settore mobili e arredamento</strong>, e chiunque abbia bisogno di scatole personalizzate in piccoli lotti 
              e varietà multiple.
            </p>
            <p>
              Con l&apos;e-commerce in crescita esponenziale, la domanda di packaging personalizzato &quot;su misura&quot; è sempre 
              più forte. Un box maker come l&apos;AB2500 permette di creare la scatola della giusta dimensione per ogni 
              prodotto, riducendo materiale di riempimento, costi di spedizione e danni durante il trasporto.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Specifiche Tecniche dell&apos;Anypack AB2500</h2>
            <p>L&apos;Anypack AB2500, distribuito in Italia da Print Solution, è il modello best seller della gamma:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Foglio massimo: 2500 mm di larghezza</li>
              <li>Spessore cartone: 1,5 – 10 mm (singola o doppia onda)</li>
              <li>Produttività: 500–600 pezzi/ora</li>
              <li>Componenti premium: PLC Keyence, servomotori Panasonic, lame SKD11</li>
              <li>Software: touchscreen 15,6&quot;, 100+ stili Fefco, multilingua</li>
              <li>Opzioni: incollatrice a caldo/freddo, integrazione WMS, stampa digitale</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              Il box maker automatico rappresenta una rivoluzione per il settore packaging. Elimina fustelle, stock 
              e sprechi, permettendo la produzione on-demand di scatole personalizzate con un solo operatore. 
              Se lavori nel packaging o nell&apos;e-commerce, è la tecnologia che può trasformare il tuo business.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Demo%20Soluzioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20demo%20di%20Soluzioni%20Print%20Solution.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Richiedi una Demo del Box Maker' : 'Request a Box Maker Demo'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
