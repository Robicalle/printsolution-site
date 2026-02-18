import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { getAllProducts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const it = locale === "it";
  return {
    title: it ? "Tutti i Prodotti | Print Solution" : "All Products | Print Solution",
    description: it
      ? "Scopri tutta la gamma di stampanti digitali per packaging ed etichette di Print Solution."
      : "Discover the full range of digital printers for packaging and labels from Print Solution.",
    alternates: { canonical: "/prodotti" },
  };
}

const categoryLabels: Record<string, { it: string; en: string }> = {
  "stampanti-packaging": { it: "Stampanti Packaging", en: "Packaging Printers" },
  "stampanti-etichette": { it: "Stampanti Etichette", en: "Label Printers" },
  finishing: { it: "Finishing & Accessori", en: "Finishing & Accessories" },
  labbratura: { it: "Labbratura Libri", en: "Book Edge Printing" },
};

export default async function ProdottiPage() {
  const locale = await getLocale();
  const it = locale === "it";
  const products = (await getAllProducts()) || [];

  // Group by category
  const grouped: Record<string, any[]> = {};
  for (const p of products) {
    const cat = p.category || "altro";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-hero-gradient text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">Print Solution</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {it ? "I Nostri Prodotti" : "Our Products"}
          </h1>
          <p className="mt-6 text-lg text-gray-300/90 max-w-2xl leading-relaxed">
            {it
              ? "Stampanti digitali per packaging, etichette, finishing e labbratura. Soluzioni complete per ogni esigenza."
              : "Digital printers for packaging, labels, finishing and book edge printing. Complete solutions for every need."}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-dark-800 mb-8 border-b border-gray-200 pb-4">
                {categoryLabels[cat]?.[it ? "it" : "en"] || cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((p: any) => {
                  const imgUrl = p.images?.[0]
                    ? urlForImage(p.images[0]).width(400).url()
                    : "/images/hero-boxes.webp";
                  const slug = p.slug?.current || p.slug;
                  return (
                    <Link
                      key={p._id}
                      href={`/prodotti/${slug}`}
                      className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                    >
                      <div className="h-48 relative overflow-hidden bg-surface-50">
                        <Image
                          src={imgUrl}
                          alt={p.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">
                          {p.name}
                        </h3>
                        {p.seoDescription && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{p.seoDescription}</p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
