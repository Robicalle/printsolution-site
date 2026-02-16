import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Come Ridurre i Costi di Packaging",
  description:
    "Strategie pratiche per ridurre i costi di packaging senza sacrificare la qualità: ottimizzazione materiali, produzione on-demand e automazione dei processi.",
  keywords: [
    "ridurre costi packaging",
    "ottimizzare costi imballaggio",
    "risparmio packaging",
    "costi packaging",
  ],
  openGraph: {
    title: "Come Ridurre i Costi di Packaging | Print Solution",
    description: "Strategie pratiche per ridurre i costi di packaging senza sacrificare la qualità.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/come-ridurre-costi-packaging" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Come Ridurre i Costi di Packaging",
  description: "Strategie pratiche per ridurre i costi di packaging senza sacrificare la qualità.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolutionsrl.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolutionsrl.it/blog/come-ridurre-costi-packaging",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolutionsrl.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolutionsrl.it/blog" },
    { "@type": "ListItem", position: 3, name: "Come Ridurre i Costi di Packaging", item: "https://www.printsolutionsrl.it/blog/come-ridurre-costi-packaging" },
  ],
};

export default async function ArticleCostiPackaging() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Come Ridurre i Costi di Packaging" : "How to Reduce Packaging Costs"}
        subtitle={locale === 'it' ? "Strategie concrete per ottimizzare i costi senza compromettere qualità e immagine" : "Practical strategies to optimise costs without compromising quality and image"}
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-cyan-600">Packaging</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 8 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              {locale === 'it' ? (
                <>Il packaging rappresenta una voce di costo significativa per qualsiasi azienda che produce e spedisce beni fisici. Tra materiali, stampa, stoccaggio e logistica, i costi di imballaggio possono incidere dal 10 al 40% sul costo totale del prodotto. Ma è possibile <strong>ridurre i costi di packaging</strong> senza sacrificare qualità e immagine.</>
              ) : (
                <>Packaging represents a significant cost item for any company that produces and ships physical goods. Between materials, printing, storage and logistics, packaging costs can account for 10 to 40% of the total product cost. But it is possible to <strong>reduce packaging costs</strong> without sacrificing quality and image.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '1. Ottimizzare le Dimensioni' : '1. Optimise Dimensions'}</h2>
            <p>
              {locale === 'it' ? "La prima fonte di spreco nel packaging è lo spazio vuoto. Scatole troppo grandi significano più cartone, più materiale di riempimento, più volume di spedizione e più costi di trasporto. La soluzione è produrre scatole su misura per ogni prodotto." : 'The primary source of waste in packaging is empty space. Oversized boxes mean more cardboard, more filler material, more shipping volume and higher transport costs. The solution is to produce custom-fit boxes for each product.'}
            </p>
            <p>
              {locale === 'it' ? "Un box maker come l'Anypack AB2500 permette di creare scatole della dimensione esatta necessaria, eliminando gli sprechi. In media, il passaggio da scatole standard a scatole su misura riduce i costi di spedizione del 20-30%." : 'A box maker like the Anypack AB2500 allows you to create boxes of the exact size needed, eliminating waste. On average, switching from standard to custom-fit boxes reduces shipping costs by 20–30%.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '2. Produrre On-Demand' : '2. Produce On-Demand'}</h2>
            <p>
              {locale === 'it' ? "Ordinare grandi quantità di scatole pre-fabbricate per ottenere un prezzo unitario basso è un'illusione di risparmio. I costi nascosti includono:" : 'Ordering large quantities of pre-made boxes to get a low unit price is an illusion of savings. The hidden costs include:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{locale === 'it' ? 'Spazio di stoccaggio (affitto magazzino)' : 'Storage space (warehouse rent)'}</li>
              <li>{locale === 'it' ? 'Obsolescenza (cambio grafica, normative, varianti prodotto)' : 'Obsolescence (graphic changes, regulations, product variants)'}</li>
              <li>{locale === 'it' ? "Capitale immobilizzato nell'inventario" : 'Capital tied up in inventory'}</li>
              <li>{locale === 'it' ? 'Rischio di deterioramento in magazzino' : 'Risk of deterioration in storage'}</li>
            </ul>
            <p>
              {locale === 'it' ? 'La produzione on-demand elimina tutti questi costi occulti. Si produce solo ciò che serve, quando serve.' : 'On-demand production eliminates all these hidden costs. You produce only what is needed, when it is needed.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '3. Eliminare le Fustelle' : '3. Eliminate Dies'}</h2>
            <p>
              {locale === 'it' ? 'Le fustelle fisiche hanno un costo che va da 200 a 2.000 euro ciascuna, a seconda della complessità. Per aziende con molte varianti di prodotto, il costo annuale delle fustelle può essere significativo. I box maker digitali eliminano completamente questa voce di costo, poiché il taglio è gestito via software.' : 'Physical dies cost between €200 and €2,000 each, depending on complexity. For companies with many product variants, the annual die cost can be significant. Digital box makers completely eliminate this cost item, as cutting is managed via software.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '4. Internalizzare la Stampa' : '4. Bring Printing In-House'}</h2>
            <p>
              {locale === 'it' ? "Stampare etichette e packaging internamente riduce i costi rispetto all'acquisto esterno, soprattutto per piccoli lotti. Una stampante per etichette come l'Afinia L901 costa pochi centesimi per etichetta, senza minimi d'ordine né costi di setup. Per il cartone, la stampa digitale con sistemi come la EDM-650X elimina i cliché flessografici." : 'Printing labels and packaging in-house reduces costs compared to outsourcing, especially for small batches. A label printer like the Afinia L901 costs just a few cents per label, with no minimum order or setup costs. For cardboard, digital printing with systems like the EDM-650X eliminates flexographic plates.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '5. Razionalizzare i Materiali' : '5. Rationalise Materials'}</h2>
            <p>
              {locale === 'it' ? 'Spesso le aziende utilizzano materiali sovradimensionati per il tipo di prodotto. Una revisione tecnica può portare a:' : 'Companies often use over-specified materials for their product type. A technical review can lead to:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{locale === 'it' ? 'Ridurre lo spessore del cartone dove non necessario' : 'Reducing cardboard thickness where not necessary'}</li>
              <li>{locale === 'it' ? 'Passare da doppia a singola onda per prodotti leggeri' : 'Switching from double to single wall for lightweight products'}</li>
              <li>{locale === 'it' ? 'Utilizzare carte riciclate senza compromettere la resistenza' : 'Using recycled paper without compromising strength'}</li>
              <li>{locale === 'it' ? 'Ottimizzare il layout di taglio per ridurre gli sfridi' : 'Optimising cutting layouts to reduce trim waste'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '6. Ridurre il Materiale di Riempimento' : '6. Reduce Filler Material'}</h2>
            <p>
              {locale === 'it' ? "Scatole su misura eliminano o riducono drasticamente la necessità di materiali di riempimento: pluriball, patatine di polistirolo, carta accartocciata. Questo riduce il costo del materiale, il tempo di confezionamento e l'impatto ambientale." : 'Custom-fit boxes eliminate or drastically reduce the need for filler materials: bubble wrap, polystyrene peanuts, crumpled paper. This reduces material cost, packing time and environmental impact.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '7. Automatizzare i Processi' : '7. Automate Processes'}</h2>
            <p>
              {locale === 'it' ? "L'automazione riduce i costi di manodopera e aumenta la produttività. Un box maker automatico sostituisce operazioni manuali di misurazione, taglio e piegatura. Un applicatore automatico di etichette elimina l'applicazione manuale. Ogni minuto risparmiato è un costo in meno." : 'Automation reduces labour costs and increases productivity. An automatic box maker replaces manual measuring, cutting and folding operations. An automatic label applicator eliminates manual application. Every minute saved is a cost reduction.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? '8. Calcolare il TCO, non il Prezzo Unitario' : '8. Calculate TCO, Not Unit Price'}</h2>
            <p>
              {locale === 'it' ? (
                <>Il vero costo del packaging non è il prezzo unitario della scatola o dell&apos;etichetta. Il <strong>Total Cost of Ownership</strong> include stoccaggio, obsolescenza, logistica, manodopera e scarti. Spesso, una soluzione apparentemente più costosa per unità risulta più economica considerando il TCO complessivo.</>
              ) : (
                <>The true cost of packaging is not the unit price of the box or label. The <strong>Total Cost of Ownership</strong> includes storage, obsolescence, logistics, labour and waste. Often, a seemingly more expensive per-unit solution turns out to be more economical when considering the overall TCO.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Conclusione' : 'Conclusion'}</h2>
            <p>
              {locale === 'it' ? "Ridurre i costi di packaging è un obiettivo raggiungibile con un approccio sistematico. Le leve principali sono l'ottimizzazione delle dimensioni, la produzione on-demand, l'eliminazione delle fustelle e l'internalizzazione della stampa. Le tecnologie digitali rendono tutto questo accessibile anche alle piccole e medie imprese." : 'Reducing packaging costs is an achievable goal with a systematic approach. The main levers are dimension optimisation, on-demand production, die elimination and in-house printing. Digital technologies make all of this accessible even to small and medium enterprises.'}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolutionsrl.it?subject=Ottimizzazione%20Costi%20Packaging&body=Buongiorno%2C%0A%0AVorrei%20una%20consulenza%20per%20ridurre%20i%20costi%20di%20packaging.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Richiedi una Consulenza Gratuita' : 'Request a Free Consultation'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
