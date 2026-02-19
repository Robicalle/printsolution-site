import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getPageBySlug, getSiteSettings } from "@/sanity/lib/fetchers";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = await getPageBySlug("chi-siamo").catch(() => null);
  const it = locale === "it";
  return {
    title: page?.seo?.title || (it ? "Chi Siamo" : "About Us"),
    description:
      page?.seo?.description ||
      (it
        ? "Print Solution S.r.l. — Dal 2010, distributore italiano di soluzioni digitali per stampa packaging, etichette e consumabili."
        : "Print Solution S.r.l. — Since 2010, Italian distributor of digital solutions for packaging printing, labels and consumables."),
    openGraph: {
      title: page?.seo?.title || (it ? "Chi Siamo | Print Solution" : "About Us | Print Solution"),
      description:
        page?.seo?.description ||
        (it
          ? "Dal 2010, distributore italiano di soluzioni digitali per stampa packaging, etichette e consumabili."
          : "Since 2010, Italian distributor of digital solutions for packaging printing, labels and consumables."),
      images: ["/images/hero-boxes.webp"],
      type: "website",
      locale: it ? "it_IT" : "en_US",
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `https://website-theta-one-59.vercel.app/${locale}/chi-siamo`,
      languages: {
        'it': 'https://website-theta-one-59.vercel.app/it/chi-siamo',
        'en': 'https://website-theta-one-59.vercel.app/en/chi-siamo',
      },
    },
  };
}

export default async function ChiSiamoPage() {
  const locale = await getLocale();
  const it = locale === "it";
  const [page, settings] = await Promise.all([
    getPageBySlug("chi-siamo").catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const phone = settings?.contact?.phone || "02 4943 9417";
  const email = settings?.contact?.email || "info@printsolutionsrl.it";
  const address = settings?.contact?.address || "Sesto San Giovanni (MI), Italia";

  return (
    <>
      <PageHero
        title={page?.title || (it ? "Chi Siamo" : "About Us")}
        subtitle={
          it
            ? "Dal 2010, punto di riferimento in Italia per le soluzioni digitali di stampa packaging, etichette e consumabili."
            : "Since 2010, Italy's reference point for digital printing solutions for packaging, labels and consumables."
        }
        breadcrumb="Print Solution"
        imageSrc="/images/chi-siamo-team.jpg"
      />

      {/* Dynamic content from Sanity if available */}
      {page?.body && Array.isArray(page.body) && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <PortableText value={page.body} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* Fallback: static content if no Sanity page */}
      {!page?.body && (
        <>
          {/* Story */}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                  <div>
                    <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">{it ? "La Nostra Storia" : "Our Story"}</p>
                    <h2 className="text-3xl font-bold text-dark-800 mb-6">{it ? "Oltre 15 Anni di Esperienza" : "Over 15 Years of Experience"}</h2>
                    {it ? (
                      <>
                        <p className="text-gray-500 leading-relaxed mb-4">
                          Print Solution S.r.l. nasce nel <strong>2010</strong> a {address} con una missione chiara: portare in Italia le migliori soluzioni di stampa digitale per packaging ed etichette.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-4">
                          In oltre 15 anni di attività abbiamo costruito partnership solide con i brand leader del settore — Afinia Label, GreenBox, Anypack e DTM Print — diventando il loro distributore ufficiale per il mercato italiano.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                          Non siamo semplici rivenditori: affianchiamo i nostri clienti dalla consulenza iniziale alla formazione, dall&apos;installazione all&apos;assistenza post-vendita, con un team dedicato e competente.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-500 leading-relaxed mb-4">
                          Print Solution S.r.l. was founded in <strong>2010</strong> in {address} with a clear mission: to bring the best digital printing solutions for packaging and labels to Italy.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-4">
                          Over more than 15 years we have built solid partnerships with leading brands — Afinia Label, GreenBox, Anypack and DTM Print — becoming their official distributor for the Italian market.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                          We are not just resellers: we support our clients from initial consultation to training, from installation to after-sales service, with a dedicated and skilled team.
                        </p>
                      </>
                    )}
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-3xl p-10 text-center">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: "2010", label: it ? "Anno di fondazione" : "Year Founded" },
                        { value: "15+", label: it ? "Anni di esperienza" : "Years of experience" },
                        { value: "1500+", label: it ? "Clienti serviti" : "Clients served" },
                        { value: "5", label: it ? "Brand distribuiti" : "Brands distributed" },
                      ].map((s) => (
                        <div key={s.label} className="bg-white rounded-2xl p-5 shadow-card">
                          <p className="text-2xl font-bold text-cyan-500">{s.value}</p>
                          <p className="text-gray-500 text-sm mt-1">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">{it ? "I Nostri Valori" : "Our Values"}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { icon: "🎯", title: it ? "Competenza" : "Expertise", desc: it ? "Conosciamo ogni prodotto nel dettaglio. Il nostro team tecnico ha formazione diretta dai produttori e anni di esperienza sul campo." : "We know every product inside out. Our technical team receives training directly from manufacturers and has years of field experience." },
                      { icon: "🤝", title: "Partnership", desc: it ? "Non vendiamo macchine: costruiamo relazioni. Affianchiamo il cliente dalla consulenza iniziale alla crescita del business." : "We don't sell machines: we build relationships. We support clients from initial consulting to business growth." },
                      { icon: "⚡", title: it ? "Innovazione" : "Innovation", desc: it ? "Siamo sempre alla ricerca delle tecnologie più avanzate per offrire soluzioni all'avanguardia nel mercato della stampa digitale." : "We are always looking for the most advanced technologies to offer cutting-edge solutions in the digital printing market." },
                    ].map((v) => (
                      <div key={v.title} className="card-modern p-8 text-center">
                        <span className="text-4xl block mb-4">{v.icon}</span>
                        <h3 className="text-lg font-bold text-dark-800 mb-3">{v.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-dark-800 mb-4 text-center">{it ? "Il Nostro Team" : "Our Team"}</h2>
                  <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
                    {it ? "Un team compatto ma altamente specializzato: commerciale, tecnico e assistenza." : "A compact but highly specialised team: sales, technical and support."}
                  </p>
                  <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-10">
                    <Image src="/images/team-photo.webp" alt={it ? "Il team di Print Solution" : "The Print Solution team"} fill className="object-cover" priority />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{it ? "Lavoriamo Insieme" : "Let's Work Together"}</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                {it ? "Contattaci per una consulenza gratuita o prenota una visita nella nostra sala demo." : "Contact us for a free consultation or book a visit to our demo room."}
              </p>
              <a href={`mailto:${email}?subject=Richiesta%20Informazioni`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg">
                {it ? "Contattaci" : "Contact Us"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
