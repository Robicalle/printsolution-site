// I colori dei blocchi arrivano da Sanity (es. "from-cyan-500 to-cyan-400").
// Con testo bianco sopra, ciano e magenta brillanti non si leggono (2,6:1 e 4,2:1):
// qui li portiamo alle tonalita' profonde dello stesso colore (>= 5:1).
// Le classi di arrivo sono scritte per intero perche' Tailwind le generi.
const MAPPA: Array<[RegExp, string]> = [
  [/\bfrom-cyan-(400|500|600)\b/g, "from-cyan-650"],
  [/\bto-cyan-(400|500|600)\b/g, "to-cyan-700"],
  [/\bfrom-magenta-(400|500)\b/g, "from-magenta-600"],
  [/\bto-magenta-(400|500)\b/g, "to-magenta-600"],
];

export function coloreConTestoBianco(classi?: string | null): string | undefined {
  if (!classi) return undefined;
  return MAPPA.reduce((s, [re, nuovo]) => s.replace(re, nuovo), classi);
}

// Su giallo, verde e simili il testo resta scuro
export function testoSu(classi?: string | null): string {
  return /yellow|green|lime|amber|emerald/.test(classi || "") ? "text-dark-900" : "text-white";
}
