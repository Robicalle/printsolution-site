import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

const stats = [
  { value: "5",    labelIt: "settori tecnologici",     labelEn: "technology sectors" },
  { value: "20+",  labelIt: "macchine in catalogo",    labelEn: "machines in catalogue" },
  { value: "1",    labelIt: "sala demo attiva a MI",   labelEn: "live demo room near Milan" },
  { value: "100%", labelIt: "assistenza tecnica in IT", labelEn: "in-Italy technical support" },
];

export default function SoluzioniHeroBlock({ block, locale }: Props) {
  const it = locale === "it";
  return (
    <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <Image
        src="/images/hero-machine2.webp"
        alt={it ? "Soluzioni di stampa digitale Print Solution" : "Print Solution digital printing solutions"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/75 to-dark-900/45" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">
          {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          {it ? block.title : (block.title_en || block.title)}
        </h1>
        <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
          {it ? block.subtitle : (block.subtitle_en || block.subtitle)}
        </p>

        {/* Stats strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {stats.map((s) => (
            <div key={s.value + s.labelIt} className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10">
              <p className="text-2xl font-bold text-cyan-300">{s.value}</p>
              <p className="text-xs text-white/70 mt-1 leading-snug">
                {it ? s.labelIt : s.labelEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
