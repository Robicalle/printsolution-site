import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

// 404 dentro il layout del sito (header, menu e footer): prima la pagina di
// errore era isolata, senza navigazione. La raggiunge [...rest]/page.tsx.
export default async function NotFound() {
  const locale = await getLocale();
  const it = locale === "it";
  const link = [
    { href: "/", label: it ? "Homepage" : "Home" },
    { href: "/soluzioni", label: it ? "Soluzioni" : "Solutions" },
    { href: "/prodotti", label: it ? "Prodotti" : "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contatti", label: it ? "Contatti" : "Contact" },
  ];
  return (
    <section className="bg-hero-gradient text-white pt-40 pb-24 min-h-[70dvh] flex items-center">
      {/* React 19 porta <title> e <meta> nell'head */}
      <title>{it ? "Pagina non trovata | Print Solution" : "Page not found | Print Solution"}</title>
      <meta name="robots" content="noindex" />
      <div className="container-custom text-center max-w-2xl">
        <p className="text-cyan-400 text-7xl font-bold mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{it ? "Pagina non trovata" : "Page not found"}</h1>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed mx-auto">
          {it
            ? "La pagina che cerchi non esiste o è stata spostata. Da qui puoi tornare alle sezioni principali del sito."
            : "The page you are looking for does not exist or has been moved. From here you can go back to the main sections."}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {link.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={i === 0
                ? "btn-solid inline-flex items-center px-7 py-3 font-semibold rounded-full"
                : "inline-flex items-center px-7 py-3 font-semibold rounded-full bg-white/10 hover:bg-white/20 transition-colors"}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
