interface Props {
  block: any;
  locale: string;
}

export default function CarePackGridBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <section className="section-padding bg-surface-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          {block.eyebrow && (
            <p className="text-magenta-500 font-semibold text-sm uppercase tracking-widest mb-4">
              {it ? block.eyebrow : (block.eyebrow_en || block.eyebrow)}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 tracking-tight">
            {it ? block.heading : (block.heading_en || block.heading)}
          </h2>
          {block.description && (
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              {it ? block.description : (block.description_en || block.description)}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {(block.packs || []).map((pack: any) => (
            <div key={pack.name} className="card-modern p-6 text-center hover:-translate-y-1 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${pack.color || 'from-gray-400 to-gray-500'} mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg`}>
                {pack.name?.[0]}
              </div>
              <h3 className="text-lg font-bold text-dark-800 mb-2">{pack.name}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {it ? pack.hours : (pack.hours_en || pack.hours)} {it ? 'supporto remoto' : 'remote support'}
              </p>
              <p className="text-gray-500 text-sm">{it ? 'Sconto ricambi:' : 'Parts discount:'} {pack.discount}</p>
              <p className="text-gray-500 text-sm mt-1">{it ? '+ Aggiornamenti SW inclusi' : '+ SW updates included'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
