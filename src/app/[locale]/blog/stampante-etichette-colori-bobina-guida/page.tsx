import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Stampante Etichette a Colori in Bobina: Guida alla Scelta",
  description:
    "Come scegliere la stampante per etichette a colori in bobina: confronto Afinia L701, L901, X350, LT5C. Tecnologie, velocità, costi e applicazioni.",
  keywords: [
    "stampante etichette colori bobina",
    "stampante etichette industriale",
    "Afinia Label confronto",
    "guida stampante etichette",
  ],
  openGraph: {
    title: "Guida alla Scelta: Stampante Etichette a Colori in Bobina | Print Solution",
    description:
      "Come scegliere la stampante per etichette a colori in bobina. Confronto modelli Afinia Label.",
    images: ["/images/hero-labels.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/stampante-etichette-colori-bobina-guida" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stampante Etichette a Colori in Bobina: Guida alla Scelta",
  description: "Come scegliere la stampante per etichette a colori in bobina: confronto Afinia L701, L901, X350, LT5C.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-10",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/stampante-etichette-colori-bobina-guida",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Stampante Etichette a Colori in Bobina", item: "https://www.printsolutionsrl.it/blog/stampante-etichette-colori-bobina-guida" },
  ],
};

export default async function ArticleEtichette() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title="Stampante Etichette a Colori in Bobina"
        subtitle="Guida alla scelta: tecnologie, modelli e criteri per trovare la soluzione perfetta"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-magenta-500 to-magenta-600">Etichette</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '3 Febbraio 2026' : 'February 3, 2026'}</span>
            <span className="text-gray-500 text-sm">· 10 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Perché Stampare Etichette In-House?</h2>
            <p>
              Stampare etichette internamente offre vantaggi enormi: <strong>niente minimi d&apos;ordine</strong>, tempi di 
              consegna azzerati, possibilità di personalizzare ogni singolo lotto e costi per etichetta 
              competitivi già da pochi pezzi.
            </p>
            <p>
              Ma con tante tecnologie disponibili — inkjet dye, inkjet pigmento, toner LED — come scegliere 
              la stampante giusta? In questa guida analizziamo le quattro principali opzioni Afinia Label.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Le Tre Tecnologie a Confronto</h2>
            
            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">1. Inkjet Dye (Memjet)</h3>
            <p>
              Utilizzata nelle <strong>Afinia L701 e L901</strong>, la tecnologia Memjet Waterfall offre colori 
              brillanti e risoluzione fino a 1600 dpi. Gli inchiostri dye a base acqua sono eco-friendly, 
              privi di VOC e sicuri per molteplici applicazioni.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Qualità eccellente su carte inkjet-coated</li>
              <li>Costi operativi contenuti</li>
              <li>Ideale per etichette food, beverage, cosmetica</li>
              <li>Non resistente all&apos;acqua senza laminazione</li>
            </ul>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">2. Inkjet Pigmento</h3>
            <p>
              L&apos;<strong>Afinia X350</strong> utilizza inchiostri pigmentati acquosi, naturalmente resistenti 
              ad acqua, UV e agenti chimici. Velocità record di 45 m/min e ridondanza ugelli 2× per 
              zero strisce.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Resistenza nativa ad acqua e UV</li>
              <li>A base acqua, eco-friendly e senza solventi</li>
              <li>Velocità industriale: 45 m/min</li>
              <li>Taniche 2L per colore — meno fermi</li>
            </ul>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">3. Toner LED</h3>
            <p>
              L&apos;<strong>Afinia LT5C</strong> usa tecnologia elettrofotografica con toner LED. Il toner 
              viene fuso sulla carta, garantendo resistenza immediata all&apos;acqua senza necessità 
              di asciugatura o laminazione.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Resistenza immediata senza asciugatura</li>
              <li>Ideale per ambienti umidi e freddi</li>
              <li>Costo/pagina competitivo su alti volumi</li>
              <li>Qualità testo nitidissima</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Tabella Comparativa</h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-bold text-dark-800">Caratteristica</th>
                    <th className="text-left py-3 px-4 font-bold text-dark-800">L701</th>
                    <th className="text-left py-3 px-4 font-bold text-dark-800">L901</th>
                    <th className="text-left py-3 px-4 font-bold text-dark-800">X350</th>
                    <th className="text-left py-3 pl-4 font-bold text-dark-800">LT5C</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Tecnologia</td><td className="py-2 px-4">Memjet Dye</td><td className="py-2 px-4">Memjet Dye</td><td className="py-2 px-4">Pigmento</td><td className="py-2 pl-4">Toner LED</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Risoluzione</td><td className="py-2 px-4">1600 dpi</td><td className="py-2 px-4">1600 dpi</td><td className="py-2 px-4">1600 dpi</td><td className="py-2 pl-4">—</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Velocità</td><td className="py-2 px-4">8 IPS</td><td className="py-2 px-4">Alta</td><td className="py-2 px-4">45 m/min</td><td className="py-2 pl-4">—</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Resistenza acqua</td><td className="py-2 px-4">Con lamina</td><td className="py-2 px-4">Con lamina</td><td className="py-2 px-4">Nativa</td><td className="py-2 pl-4">Nativa</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Target</td><td className="py-2 px-4">Entry</td><td className="py-2 px-4">Pro</td><td className="py-2 px-4">Industriale</td><td className="py-2 pl-4">Industriale</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Come Scegliere?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Budget limitato, piccole produzioni?</strong> → Afinia L701</li>
              <li><strong>Volumi medi, necessità di doppio nero?</strong> → Afinia L901</li>
              <li><strong>Alta velocità, resistenza nativa?</strong> → Afinia X350</li>
              <li><strong>Ambienti umidi, resistenza immediata?</strong> → Afinia LT5C</li>
              <li><strong>Sistema completo stampa+fustella?</strong> → Afinia DLP-2200 (con L901)</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Il Sistema Completo: DLP-2200</h2>
            <p>
              Se cerchi una soluzione &quot;dalla bobina bianca all&apos;etichetta finita&quot;, il <strong>DLP-2200</strong> integra 
              stampante L901, laminatore, fustellatore rotativo, rimozione sfrido e riavvolgitore. 
              Produce oltre 25.000 etichette 3×4&quot; all&apos;ora in full-color.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              Non esiste una stampante &quot;migliore in assoluto&quot;: la scelta dipende dai tuoi volumi, 
              materiali, budget e requisiti di resistenza. La cosa migliore? Portare le tue etichette 
              nella nostra sala demo e testarle su ogni macchina.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Consulenza%20Soluzioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20di%20Soluzioni%20Print%20Solution.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Richiedi una consulenza gratuita →' : 'Request a free consultation →'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
