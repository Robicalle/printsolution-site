import type { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  return url;
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-dark-800 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-dark-800 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-dark-800 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-dark-800 mb-2">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-semibold text-dark-800 mb-2">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-semibold text-dark-800 mb-2">{children}</h6>,
    normal: ({ children }) => <p className="text-gray-500 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-600 my-4">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-dark-800">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} className="text-cyan-500 hover:text-cyan-600 underline" target={value?.href?.startsWith("http") ? "_blank" : undefined} rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside space-y-2 text-gray-500 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside space-y-2 text-gray-500 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      const url = urlForImage(value)?.width(800).url();
      return (
        <figure className="my-8">
          <img src={url || ""} alt={value.alt || ""} className="rounded-xl w-full" loading="lazy" />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-400 mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    table: ({ value }: any) => {
      const rows = value?.rows || [];
      const hasHeader = value?.hasHeader !== false;
      if (rows.length === 0) return null;
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            {hasHeader && rows[0] && (
              <thead>
                <tr className="bg-gray-100">
                  {(rows[0].cells || []).map((cell: string, i: number) => (
                    <th key={i} className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">{cell}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.slice(hasHeader ? 1 : 0).map((row: any, ri: number) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  {(row.cells || []).map((cell: string, ci: number) => (
                    <td key={ci} className="px-4 py-3 text-gray-600 border-b border-gray-100">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
    callout: ({ value }: any) => {
      const toneStyles: Record<string, { bg: string; border: string; icon: string; text: string }> = {
        info: { bg: "bg-blue-50", border: "border-blue-300", icon: "ℹ️", text: "text-blue-800" },
        warning: { bg: "bg-amber-50", border: "border-amber-300", icon: "⚠️", text: "text-amber-800" },
        success: { bg: "bg-green-50", border: "border-green-300", icon: "✅", text: "text-green-800" },
      };
      const s = toneStyles[value?.tone] || toneStyles.info;
      return (
        <div className={`my-6 p-4 rounded-xl border ${s.bg} ${s.border}`}>
          <p className={`${s.text} leading-relaxed`}>
            <span className="mr-2">{s.icon}</span>
            {value?.text}
          </p>
        </div>
      );
    },
    cta: ({ value }: any) => {
      const isPrimary = value?.style !== "secondary";
      return (
        <div className="my-6 text-center">
          <a
            href={value?.url || "#"}
            target={value?.url?.startsWith("http") ? "_blank" : undefined}
            rel={value?.url?.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              isPrimary
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                : "bg-white text-gray-800 border-2 border-gray-200 hover:border-cyan-400"
            }`}
          >
            {value?.text || "Scopri di più"}
          </a>
        </div>
      );
    },
    videoEmbed: ({ value }: any) => {
      const embedUrl = getVideoEmbedUrl(value?.url || "");
      if (!embedUrl) return null;
      return (
        <figure className="my-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {value?.caption && (
            <figcaption className="text-center text-sm text-gray-400 mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};
