import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GreenBox EVO — Stampante Digitale Single-Pass per Packaging | Print Solution",
  description: "GreenBox EVO: stampante inkjet CMYK single-pass per cartone, carta e juta. Testina HP Pagewide, 30m/min, 1200x1200 dpi. Inchiostri pigmentati a base acqua.",
};

const specs = [
  ["Tecnologia", "Inkjet single-pass CMYK"],
  ["Testina di stampa", "HP Pagewide, 30 cm"],
  ["Risoluzione", "1200 × 1200 dpi"],
  ["Velocità di stampa", "Fino a 30 m/min"],
  ["Larghezza stampa", "Fino a 30 cm"],
  ["Larghezza supporto", "Fino a 80 cm"],
  ["Spessore max supporto", "Fino a 15 cm"],
  ["Inchiostri", "Pigmentati a base acqua, taniche 3L/colore"],
  ["Piano", "Aspirato con pompa a vuoto"],
  ["Software RIP", "Flexprint incluso"],
  ["Display", "Digitale integrato"],
  ["Alimentatore", "Automatico opzionale con pompa a vuoto"],
  ["Alimentazione", "230V AC monofase"],
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Velocità Industriale",
    desc: "Fino a 30 metri al minuto con tecnologia single-pass: stampa senza rallentamenti, anche su tirature elevate.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47" />
      </svg>
    ),
    title: "Inchiostri a Base Acqua",
    desc: "Pigmentati, senza solventi, inodori. Resistenti a sfregamento, acqua e agenti atmosferici. Ideali per il packaging.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
      </svg>
    ),
    title: "Materiali Versatili",
    desc: "Stampa su cartone, carta kraft, juta, shopper, buste e sacchetti. Spessore supporto fino a 15 cm.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "RIP Flexprint Incluso",
    desc: "Software RIP professionale incluso con display digitale integrato. Gestione colore avanzata e profili ICC.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Entry-Level Accessibile",
    desc: "Investimento contenuto per entrare nel mondo della stampa digitale su packaging con qualità professionale.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
      </svg>
    ),
    title: "Piano Aspirato",
    desc: "Il piano aspirato con pompa a vuoto garantisce il perfetto ancoraggio del supporto durante la stampa.",
  },
];

export default function GreenBoxEvoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Prodotti</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">GreenBox EVO</h1>
              <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
                Stampante digitale inkjet single-pass CMYK per cartone, carta e juta. 
                L&apos;entry point ideale nel mondo della stampa digitale su packaging.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contatti" className="btn-primary text-lg !px-8 !py-4 !rounded-full">
                  Richiedi Informazioni
                </Link>
                <Link href="/contatti" className="btn-secondary text-lg !px-8 !py-4">
                  Prenota una Demo
                </Link>
              </div>
            </div>
            <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
              <Image src="/images/products/greenbox-evo.jpeg" alt="GreenBox EVO" fill className="object-contain p-4" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Descrizione */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Stampa Digitale su Packaging, Senza Compromessi</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            La GreenBox EVO è una stampante inkjet single-pass progettata per chi vuole entrare nel mercato della stampa 
            digitale su packaging con un investimento accessibile ma senza rinunciare alla qualità. Dotata di testina HP 
            Pagewide da 30 cm, raggiunge velocità fino a 30 metri al minuto con risoluzione 1200×1200 dpi.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Gli inchiostri pigmentati a base acqua sono privi di solventi, inodori e garantiscono un&apos;eccellente resistenza 
            a sfregamento, acqua e agenti atmosferici. Sono disponibili in taniche da 3 litri per colore, 
            riducendo i costi operativi e semplificando la manutenzione.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Il piano aspirato con pompa a vuoto assicura il perfetto ancoraggio del supporto durante la stampa. 
            L&apos;alimentatore automatico opzionale velocizza ulteriormente la produzione. Il software RIP Flexprint 
            è incluso, con display digitale integrato per il controllo diretto della macchina.
          </p>
        </div>
      </section>

      {/* Specifiche Tecniche */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-dark-800 mb-10 text-center">Specifiche Tecniche</h2>
          <div className="space-y-3">
            {specs.map(([label, value]) => (
              <div key={label} className="flex justify-between bg-white rounded-xl px-5 py-4 shadow-sm">
                <span className="text-sm font-medium text-gray-600">{label}</span>
                <span className="text-sm font-bold text-dark-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-dark-800 mb-12 text-center">Vantaggi Principali</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-modern p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-dark-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">Inizia a Stampare il Tuo Packaging</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            Porta i tuoi materiali e testa la GreenBox EVO nella nostra sala demo a Sesto San Giovanni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti" className="btn-primary text-lg">Richiedi Informazioni</Link>
            <Link href="/contatti" className="btn-outline text-lg">Prenota una Demo</Link>
          </div>
        </div>
      </section>

      {/* Prodotti Correlati */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">Prodotti Correlati</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "EDM-650X", desc: "Stampante single-pass grande formato", href: "/prodotti/edm-650x", image: "/images/products/edm-650x-nobg.png" },
              { name: "AurumPress", desc: "Stampatrice termica per foil", href: "/prodotti/aurumpress", image: "/images/products/aurumpress-nobg.png" },
              { name: "Anypack AB2500", desc: "Box maker automatico", href: "/prodotti/ab2500", image: "/images/products/ab2500.png" },
            ].map((p) => (
              <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 relative overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
