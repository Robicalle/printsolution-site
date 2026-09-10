type Loc = { label?: string; label_en?: string };
type Cell = { value?: string; value_en?: string };
type Row = Loc & { cells?: Cell[] };

interface Props {
  block: {
    heading?: string;
    heading_en?: string;
    bgClass?: string;
    columnLabel?: string;
    columns?: Loc[];
    rows?: Row[];
    note?: string;
    note_en?: string;
  };
  locale: string;
}

/**
 * Tabella comparativa: criteri in riga, alternative in colonna.
 *
 * Numero di colonne libero. Su schermo stretto la tabella scorre in
 * orizzontale e la prima colonna resta fissa: senza il criterio sempre
 * visibile, scorrere i valori non permette di confrontare nulla.
 */
export default function ComparisonTableBlock({ block, locale }: Props) {
  const it = locale === "it";
  const columns = block.columns || [];
  const rows = block.rows || [];
  if (!columns.length || !rows.length) return null;

  const heading = it ? block.heading : block.heading_en || block.heading;
  const note = it ? block.note : block.note_en || block.note;
  const testo = (o?: { label?: string; label_en?: string; value?: string; value_en?: string }) => {
    if (!o) return "—";
    const v = it ? o.label ?? o.value : (o.label_en ?? o.value_en) || (o.label ?? o.value);
    return v || "—";
  };

  return (
    <section className={`section-padding ${block.bgClass || "bg-white"}`}>
      <div className="container-custom">
        {heading && (
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-8 text-center">{heading}</h2>
        )}

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 min-w-[8.5rem]"
                >
                  {block.columnLabel || ""}
                </th>
                {columns.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 text-left font-semibold text-dark-800 border-b border-gray-200 min-w-[11rem]"
                  >
                    {testo(c)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-100 ${
                      ri % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {testo(r)}
                  </th>
                  {columns.map((_, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-600 border-b border-gray-100 align-top">
                      {testo(r.cells?.[ci])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {note && <p className="text-sm text-gray-400 mt-4">{note}</p>}
      </div>
    </section>
  );
}
