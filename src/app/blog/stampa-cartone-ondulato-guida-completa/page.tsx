import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stampa su Cartone Ondulato: Guida Completa",
  description:
    "Guida completa alla stampa su cartone ondulato: tecnologie disponibili, confronto tra digitale e flessografia, consigli pratici per ottenere risultati professionali.",
  keywords: [
    "stampa su cartone ondulato",
    "stampa cartone ondulato",
    "stampare su cartone",
    "stampa digitale cartone",
  ],
  openGraph: {
    title: "Stampa su Cartone Ondulato: Guida Completa | Print Solution",
    description: "Guida completa alla stampa su cartone ondulato: tecnologie, confronti e consigli pratici.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/stampa-cartone-ondulato-guida-completa" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stampa su Cartone Ondulato: Guida Completa",
  description: "Guida completa alla stampa su cartone ondulato: tecnologie, confronti e consigli.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/stampa-cartone-ondulato-guida-completa",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Stampa su Cartone Ondulato: Guida Completa", item: "https://www.printsolutionsrl.it/blog/stampa-cartone-ondulato-guida-completa" },
  ],
};

export default function ArticleStampaCartone() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title="Stampa su Cartone Ondulato: Guida Completa"
        subtitle="Tecnologie, confronti e consigli pratici per stampare su cartone ondulato"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600">Packaging</span>
            <span className="text-gray-500 text-sm">15 Febbraio 2026</span>
            <span className="text-gray-500 text-sm">· 9 min di lettura</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              La <strong>stampa su cartone ondulato</strong> è un elemento fondamentale del packaging moderno. Che si tratti di scatole per e-commerce, espositori da punto vendita o imballaggi industriali, la qualità di stampa influisce direttamente sulla percezione del brand. Ma quali sono le tecnologie disponibili e come scegliere quella giusta?
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Le Tecnologie di Stampa su Cartone Ondulato</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Flessografia</h3>
            <p>
              La flessografia è il metodo tradizionale per la stampa su cartone ondulato. Utilizza cliché flessibili in fotopolimero montati su cilindri rotanti. È efficiente per grandi tirature con grafiche ripetitive, ma presenta limitazioni significative per piccoli lotti: costi di cliché elevati, tempi di avviamento lunghi e difficoltà nella riproduzione di mezzetinte e sfumature.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa Digitale Inkjet Single-Pass</h3>
            <p>
              La tecnologia più innovativa per il cartone ondulato. Una barra di testine inkjet copre l&apos;intera larghezza del foglio, stampando in un singolo passaggio ad alta velocità. Nessun cliché, setup istantaneo, qualità fotografica. Sistemi come la EDM-650X raggiungono risoluzioni di 600x600 dpi con velocità fino a 50 m/min.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Stampa Digitale Multi-Pass</h3>
            <p>
              Le stampanti flatbed multi-pass offrono qualità eccellente ma velocità limitate. La testina si muove avanti e indietro sul foglio fermo, garantendo alta risoluzione. Adatta per prototipi, campioni e tirature molto ridotte.
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">Serigrafia</h3>
            <p>
              Utilizzata per applicazioni specifiche come colori speciali, fondi pieni coprenti e effetti tattili. Non è adatta per immagini fotografiche ma eccelle in applicazioni che richiedono alto spessore di inchiostro.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Stampa Diretta vs Pre-Print</h2>
            <p>
              Due approcci fondamentalmente diversi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stampa diretta (post-print)</strong> — si stampa direttamente sul foglio di cartone ondulato già formato. È il metodo più flessibile e quello utilizzato dalla EDM-650X</li>
              <li><strong>Pre-print</strong> — si stampa su un liner liscio che viene poi accoppiato all&apos;onda. Offre qualità superiore ma richiede un processo più complesso e volumi maggiori</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Sfide della Stampa su Cartone Ondulato</h2>
            <p>
              Stampare su cartone ondulato presenta sfide uniche rispetto alla carta liscia:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Superficie irregolare</strong> — l&apos;onda sottostante crea una superficie non uniforme</li>
              <li><strong>Assorbimento inchiostro</strong> — il cartone è poroso e assorbe rapidamente</li>
              <li><strong>Washboarding</strong> — l&apos;effetto &quot;tavola da lavare&quot; visibile nelle aree di fondo pieno</li>
              <li><strong>Spessore variabile</strong> — cartoni da 1,5 a 10 mm richiedono regolazioni</li>
              <li><strong>Polvere</strong> — il cartone genera particolato che può ostruire le testine</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Consigli Pratici per Risultati Ottimali</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizzare cartoni con liner di qualità (kraft bianco o patinato) per stampa diretta</li>
              <li>Evitare fondi pieni scuri al 100% — preferire screened tints o pattern</li>
              <li>Prevedere margini di tolleranza nelle grafiche per compensare le deformazioni</li>
              <li>Scegliere inchiostri formulati specificamente per cartone ondulato</li>
              <li>Mantenere temperatura e umidità controllate nell&apos;ambiente di stampa</li>
              <li>Eseguire sempre prove di stampa prima della produzione</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Quando Scegliere il Digitale</h2>
            <p>
              La stampa digitale su cartone ondulato è la scelta ottimale quando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le tirature sono inferiori a 1.000-2.000 pezzi</li>
              <li>Si cambiano frequentemente le grafiche</li>
              <li>Servono dati variabili (QR code, numerazione, personalizzazione)</li>
              <li>Il time-to-market è critico</li>
              <li>Si producono prototipi o campioni per clienti</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              La stampa su cartone ondulato è in piena evoluzione. La tecnologia digitale single-pass ha aperto possibilità impensabili fino a pochi anni fa, rendendo accessibile la stampa di qualità anche per piccoli lotti. La chiave è scegliere la tecnologia giusta per il proprio volume e tipo di produzione.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">← Torna al Blog</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Stampa%20Cartone%20Ondulato&body=Buongiorno%2C%0A%0AVorrei%20informazioni%20sulla%20stampa%20digitale%20su%20cartone%20ondulato.%0A%0AGrazie" className="btn-primary text-sm">Richiedi una Demo di Stampa</a>
          </div>
        </div>
      </article>
    </>
  );
}
