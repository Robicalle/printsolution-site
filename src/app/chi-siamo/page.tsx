import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description: "Print Solution S.r.l. — Dal 2010, distributore italiano di soluzioni digitali per stampa packaging, etichette e consumabili. Sesto San Giovanni (MI).",
};

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        title="Chi Siamo"
        subtitle="Dal 2010, punto di riferimento in Italia per le soluzioni digitali di stampa packaging, etichette e consumabili."
        breadcrumb="Print Solution"
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">La Nostra Storia</p>
                <h2 className="text-3xl font-bold text-dark-800 mb-6">Oltre 15 Anni di Esperienza</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Print Solution S.r.l. nasce nel <strong>2010</strong> a Sesto San Giovanni (MI) con una missione chiara: 
                  portare in Italia le migliori soluzioni di stampa digitale per packaging ed etichette.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  In oltre 15 anni di attività abbiamo costruito partnership solide con i brand leader del settore 
                  — Afinia Label, NeurALabel, GreenBox, Anypack e DTM Print — diventando il loro distributore 
                  ufficiale per il mercato italiano.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Non siamo semplici rivenditori: affianchiamo i nostri clienti dalla consulenza iniziale alla 
                  formazione, dall&apos;installazione all&apos;assistenza post-vendita, con un team dedicato e competente.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-3xl p-10 text-center">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "2010", label: "Anno di fondazione" },
                    { value: "15+", label: "Anni di esperienza" },
                    { value: "1500+", label: "Clienti serviti" },
                    { value: "5", label: "Brand distribuiti" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-2xl p-5 shadow-card">
                      <p className="text-2xl font-bold text-cyan-500">{s.value}</p>
                      <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">I Nostri Valori</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "🎯",
                    title: "Competenza",
                    desc: "Conosciamo ogni prodotto nel dettaglio. Il nostro team tecnico ha formazione diretta dai produttori e anni di esperienza sul campo.",
                  },
                  {
                    icon: "🤝",
                    title: "Partnership",
                    desc: "Non vendiamo macchine: costruiamo relazioni. Affianchiamo il cliente dalla consulenza iniziale alla crescita del business.",
                  },
                  {
                    icon: "⚡",
                    title: "Innovazione",
                    desc: "Siamo sempre alla ricerca delle tecnologie più avanzate per offrire soluzioni all'avanguardia nel mercato della stampa digitale.",
                  },
                ].map((v) => (
                  <div key={v.title} className="card-modern p-8 text-center">
                    <span className="text-4xl block mb-4">{v.icon}</span>
                    <h3 className="text-lg font-bold text-dark-800 mb-3">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sala Demo */}
            <div className="card-modern p-8 lg:p-12 mb-20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">Il Nostro Spazio</p>
                  <h2 className="text-3xl font-bold text-dark-800 mb-6">Sala Demo</h2>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    La nostra sede a Sesto San Giovanni ospita una <strong>sala demo completamente attrezzata</strong> dove 
                    potrai vedere e testare dal vivo tutte le nostre soluzioni.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Porta i tuoi materiali — cartone, etichette, shopper — e li stamperemo insieme. 
                    È il modo migliore per valutare qualità, velocità e resa prima dell&apos;acquisto.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Le demo sono su appuntamento e completamente gratuite.
                  </p>
                  <Link href="/contatti" className="btn-primary">Prenota una Visita</Link>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-magenta-500 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="text-6xl block mb-2 opacity-50">🏢</span>
                    <p className="font-semibold">Sala Demo</p>
                    <p className="text-white/70 text-sm">Sesto San Giovanni (MI)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-dark-800 mb-4 text-center">Il Nostro Team</h2>
              <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
                Un team compatto ma altamente specializzato: commerciale, tecnico e assistenza. 
                Ogni membro ha formazione diretta dai produttori che distribuiamo.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { role: "Commerciale", desc: "Consulenza, demo, analisi delle esigenze del cliente" },
                  { role: "Tecnico", desc: "Installazione, formazione, configurazione macchine" },
                  { role: "Assistenza", desc: "Supporto post-vendita, ricambi, Care Pack" },
                ].map((t) => (
                  <div key={t.role} className="bg-surface-50 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {t.role[0]}
                    </div>
                    <h4 className="font-bold text-dark-800 mb-2">{t.role}</h4>
                    <p className="text-gray-400 text-sm">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grenke */}
            <div className="card-modern p-8 lg:p-10 bg-gradient-to-r from-cyan-500/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-green-500 font-semibold text-sm uppercase tracking-widest mb-4">Finanziamento</p>
                  <h2 className="text-2xl font-bold text-dark-800 mb-4">Partnership Grenke Leasing</h2>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    Grazie alla partnership con <strong>Grenke</strong>, leader europeo nel leasing tecnologico, 
                    offriamo soluzioni di finanziamento flessibili per tutte le nostre macchine.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Canoni mensili accessibili, nessun anticipo obbligatorio e la possibilità di rinnovare 
                    la tecnologia a fine contratto. Chiedi un preventivo personalizzato.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white rounded-2xl p-8 shadow-card">
                    <span className="text-5xl block mb-3">💰</span>
                    <p className="font-bold text-dark-800 text-lg">Leasing Grenke</p>
                    <p className="text-gray-400 text-sm mt-1">Canoni flessibili, zero anticipo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom">
          <div className="relative rounded-3xl bg-cta-gradient p-12 sm:p-16 text-white text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Lavoriamo Insieme</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                Contattaci per una consulenza gratuita o prenota una visita nella nostra sala demo.
              </p>
              <Link href="/contatti" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg text-lg">
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
