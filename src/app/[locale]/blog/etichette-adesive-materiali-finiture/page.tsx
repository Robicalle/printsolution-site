import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Etichette Adesive: Materiali e Finiture",
  description:
    "Guida completa ai materiali e finiture per etichette adesive: carta, polipropilene, poliestere, laminazione e verniciatura. Come scegliere per ogni applicazione.",
  keywords: [
    "etichette adesive materiali",
    "etichette adesive finiture",
    "materiali etichette",
    "etichette polipropilene",
  ],
  openGraph: {
    title: "Etichette Adesive: Materiali e Finiture | Print Solution",
    description: "Guida ai materiali e finiture per etichette adesive: come scegliere per ogni applicazione.",
    images: ["/images/hero-boxes.webp"],
    type: "article",
    locale: "it_IT",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/blog/etichette-adesive-materiali-finiture" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Etichette Adesive: Materiali e Finiture",
  description: "Guida completa ai materiali e finiture per etichette adesive.",
  author: { "@type": "Organization", name: "Print Solution S.r.l." },
  publisher: {
    "@type": "Organization",
    name: "Print Solution S.r.l.",
    logo: { "@type": "ImageObject", url: "https://www.printsolution.it/logo.png" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-02-15",
  mainEntityOfPage: "https://www.printsolution.it/blog/etichette-adesive-materiali-finiture",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolution.it" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.printsolution.it/blog" },
    { "@type": "ListItem", position: 3, name: "Etichette Adesive: Materiali e Finiture", item: "https://www.printsolution.it/blog/etichette-adesive-materiali-finiture" },
  ],
};

export default async function ArticleEtichetteAdesive() {
  const locale = await getLocale();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={locale === 'it' ? "Etichette Adesive: Materiali e Finiture" : "Adhesive Labels: Materials and Finishes"}
        subtitle={locale === 'it' ? "Come scegliere il materiale e la finitura giusta per ogni applicazione" : "How to choose the right material and finish for every application"}
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-magenta-500 to-magenta-600">{locale === 'it' ? 'Etichette' : 'Labels'}</span>
            <span className="text-gray-500 text-sm">{locale === 'it' ? '15 Febbraio 2026' : 'February 15, 2026'}</span>
            <span className="text-gray-500 text-sm">· 10 {locale === 'it' ? 'min di lettura' : 'min read'}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>
              {locale === 'it' ? (
                <>La scelta del <strong>materiale per etichette adesive</strong> è tanto importante quanto la grafica stessa. Un&apos;etichetta esteticamente perfetta ma realizzata con il materiale sbagliato si deteriora, si stacca o perde leggibilità. Questa guida analizza i principali materiali e finiture disponibili per aiutarvi a fare la scelta giusta.</>
              ) : (
                <>Choosing the right <strong>adhesive label material</strong> is just as important as the graphic design itself. An aesthetically perfect label made with the wrong material will deteriorate, peel off or lose legibility. This guide analyses the main materials and finishes available to help you make the right choice.</>
              )}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'I Materiali di Base' : 'Base Materials'}</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Carta Patinata (Coated Paper)' : 'Coated Paper'}</h3>
            <p>
              {locale === 'it' ? "Il materiale più diffuso e economico. Disponibile in finitura lucida o opaca, è ideale per etichette di prodotti a secco: alimentari confezionati, scatole, prodotti da scaffale. Non è resistente all'acqua, quindi inadatto per prodotti refrigerati o a contatto con liquidi." : 'The most common and affordable material. Available in glossy or matte finish, it is ideal for dry product labels: packaged food, boxes, shelf products. It is not water-resistant, making it unsuitable for refrigerated products or those in contact with liquids.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Polipropilene (PP)' : 'Polypropylene (PP)'}</h3>
            <p>
              {locale === 'it' ? "Film plastico resistente all'acqua, agli oli e allo strappo. È il materiale di riferimento per etichette di bottiglie, cosmetici, detergenti e prodotti alimentari che richiedono resistenza all'umidità. Disponibile in versione bianca, trasparente (no-label look) e metallizzata." : 'Plastic film resistant to water, oils and tearing. It is the go-to material for bottle labels, cosmetics, detergents and food products that require moisture resistance. Available in white, clear (no-label look) and metallic versions.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Poliestere (PET)' : 'Polyester (PET)'}</h3>
            <p>
              {locale === 'it' ? "Il più resistente tra i materiali sintetici. Resiste a solventi chimici, temperature estreme, abrasione e raggi UV. Utilizzato per etichette industriali, prodotti chimici, applicazioni outdoor e automotive. Più costoso ma praticamente indistruttibile." : 'The most durable of synthetic materials. It withstands chemical solvents, extreme temperatures, abrasion and UV rays. Used for industrial labels, chemical products, outdoor and automotive applications. More expensive but virtually indestructible.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Carta Naturale (Uncoated)' : 'Uncoated Paper'}</h3>
            <p>
              {locale === 'it' ? "Carta non patinata con texture naturale. Trasmette artigianalità, autenticità e sostenibilità. Perfetta per prodotti bio, vini naturali, birre artigianali e cosmetici naturali. Assorbente e non resistente all'acqua, richiede una protezione superficiale se esposta a liquidi." : 'Uncoated paper with natural texture. It conveys craftsmanship, authenticity and sustainability. Perfect for organic products, natural wines, craft beers and natural cosmetics. Absorbent and not water-resistant, it requires a surface coating if exposed to liquids.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Le Finiture' : 'Finishes'}</h2>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Laminazione Lucida' : 'Gloss Lamination'}</h3>
            <p>
              {locale === 'it' ? "Un film protettivo lucido applicato sull'etichetta stampata. Aumenta la vivacità dei colori, protegge dall'abrasione e dall'umidità. Dona un aspetto premium e professionale." : 'A glossy protective film applied over the printed label. It enhances colour vibrancy, protects against abrasion and moisture. It gives a premium, professional appearance.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Laminazione Opaca' : 'Matte Lamination'}</h3>
            <p>
              {locale === 'it' ? 'Film protettivo con finitura satinata. Riduce i riflessi, conferisce eleganza e un tocco vellutato. Molto utilizzata per prodotti di lusso, cosmetici e vini.' : 'Protective film with a satin finish. It reduces reflections, adds elegance and a velvety touch. Widely used for luxury products, cosmetics and wines.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Verniciatura UV' : 'UV Varnish'}</h3>
            <p>
              {locale === 'it' ? "Vernice a polimerizzazione ultravioletta che crea uno strato protettivo duro e brillante. Può essere applicata a pieno campo o in modo selettivo (spot UV) per creare contrasti tattili e visivi." : 'Ultraviolet-cured varnish that creates a hard, brilliant protective layer. It can be applied as a flood coat or selectively (spot UV) to create tactile and visual contrasts.'}
            </p>

            <h3 className="text-xl font-bold text-dark-800 mt-8 mb-3">{locale === 'it' ? 'Hot Foil (Lamina a Caldo)' : 'Hot Foil Stamping'}</h3>
            <p>
              {locale === 'it' ? "Applicazione di fogli metallici (oro, argento, colori) tramite pressione e calore. Crea effetti metallizzati di grande impatto visivo. Sistemi come l'AurumPress permettono di applicare hot foil anche su piccoli lotti, senza cliché." : 'Application of metallic foils (gold, silver, colours) through pressure and heat. It creates high-impact metallic effects. Systems like the AurumPress allow hot foil application even on small batches, without plates.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Come Scegliere: la Matrice Decisionale' : 'How to Choose: the Decision Matrix'}</h2>
            <p>
              {locale === 'it' ? 'Per scegliere il materiale giusto, considerate questi fattori:' : 'To choose the right material, consider these factors:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{locale === 'it' ? "Ambiente d'uso" : 'Usage environment'}</strong> — {locale === 'it' ? 'il prodotto sarà esposto a acqua, freddo, calore, solventi?' : 'will the product be exposed to water, cold, heat, solvents?'}</li>
              <li><strong>{locale === 'it' ? 'Durata richiesta' : 'Required lifespan'}</strong> — {locale === 'it' ? 'etichetta temporanea o permanente?' : 'temporary or permanent label?'}</li>
              <li><strong>{locale === 'it' ? 'Superficie di applicazione' : 'Application surface'}</strong> — {locale === 'it' ? 'vetro, plastica, cartone, metallo?' : 'glass, plastic, cardboard, metal?'}</li>
              <li><strong>{locale === 'it' ? 'Estetica desiderata' : 'Desired aesthetics'}</strong> — {locale === 'it' ? 'premium, naturale, industriale, trasparente?' : 'premium, natural, industrial, transparent?'}</li>
              <li><strong>Budget</strong> — {locale === 'it' ? 'carta è più economica, sintetici costano di più ma durano' : 'paper is cheaper, synthetics cost more but last longer'}</li>
              <li><strong>{locale === 'it' ? 'Tecnologia di stampa' : 'Printing technology'}</strong> — {locale === 'it' ? 'non tutti i materiali sono compatibili con tutte le stampanti' : 'not all materials are compatible with all printers'}</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Compatibilità con le Stampanti' : 'Printer Compatibility'}</h2>
            <p>
              {locale === 'it' ? "È fondamentale verificare la compatibilità tra materiale e stampante. Le stampanti Afinia, ad esempio, gestiscono un'ampia gamma di supporti: dalla carta patinata al polipropilene, dal poliestere alla carta naturale. L'Afinia L901 con inchiostri a pigmento è particolarmente versatile e garantisce adesione ottimale anche su supporti sintetici." : 'It is essential to verify compatibility between material and printer. Afinia printers, for example, handle a wide range of media: from coated paper to polypropylene, from polyester to uncoated paper. The Afinia L901 with pigment inks is particularly versatile and ensures optimal adhesion even on synthetic media.'}
            </p>
            <p>
              {locale === 'it' ? "Print Solution fornisce campioni di materiali compatibili per ogni modello di stampante, permettendo test reali prima dell'acquisto." : 'Print Solution provides compatible material samples for every printer model, allowing real-world testing before purchase.'}
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">{locale === 'it' ? 'Conclusione' : 'Conclusion'}</h2>
            <p>
              {locale === 'it' ? "Il materiale e la finitura dell'etichetta determinano l'aspetto, la durabilità e la funzionalità del vostro prodotto etichettato. Non esiste un materiale universale: la scelta dipende dall'applicazione specifica. Investire tempo nella selezione del materiale corretto evita problemi costosi in fase di produzione e commercializzazione." : 'The label material and finish determine the appearance, durability and functionality of your labelled product. There is no universal material: the choice depends on the specific application. Investing time in selecting the correct material avoids costly problems during production and commercialisation.'}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">{locale === 'it' ? '← Torna al Blog' : '← Back to Blog'}</Link>
            <a href="mailto:info@printsolution.it?subject=Campioni%20Materiali%20Etichette&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20campioni%20di%20materiali%20per%20etichette%20adesive.%0A%0AGrazie" className="btn-primary text-sm">{locale === 'it' ? 'Richiedi Campioni Gratuiti' : 'Request Free Samples'}</a>
          </div>
        </div>
      </article>
    </>
  );
}
