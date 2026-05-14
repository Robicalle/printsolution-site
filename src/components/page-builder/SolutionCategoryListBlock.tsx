import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

export default function SolutionCategoryListBlock({ block, locale }: Props) {
  const it = locale === "it";
  const categories = block.categories || [];
  const [featured, ...rest] = categories;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom space-y-6">

        {/* Featured first category — large hero card */}
        {featured && (
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${featured.color || "from-cyan-500 to-cyan-600"}`}>
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative grid md:grid-cols-2 items-stretch min-h-[380px]">
              {/* Text side */}
              <div className="flex flex-col justify-center p-10 lg:p-14 text-white">
                <span className="text-5xl mb-5 block">{featured.icon}</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  {it ? featured.name : (featured.name_en || featured.name)}
                </h2>
                <p className="text-white/80 leading-relaxed mb-8 max-w-md text-base">
                  {it ? featured.desc : (featured.desc_en || featured.desc)}
                </p>
                <Link
                  href={featured.href}
                  className="self-start inline-flex items-center px-7 py-3.5 bg-white text-gray-900 font-bold rounded-full hover:bg-yellow-400 hover:text-dark-800 transition-all duration-300 shadow-lg"
                >
                  {it ? "Scopri " : "Discover "}
                  {it ? featured.name : (featured.name_en || featured.name)} →
                </Link>
              </div>
              {/* Image side */}
              <div className="relative hidden md:flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5" />
                {featured.image && (
                  <div className="relative w-full h-72">
                    <Image
                      src={featured.image}
                      alt={featured.name || ""}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Remaining categories — 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((cat: any) => (
            <div
              key={cat._key || cat.name}
              className="group relative rounded-3xl overflow-hidden border border-gray-100 bg-surface-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Colored top accent strip */}
              <div className={`h-1.5 bg-gradient-to-r ${cat.color || "from-cyan-500 to-cyan-600"} flex-shrink-0`} />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color || "from-cyan-500 to-cyan-600"} flex items-center justify-center text-2xl flex-shrink-0 shadow-md`}>
                    {cat.icon}
                  </div>
                  <h2 className="text-xl font-bold text-dark-800 leading-tight">
                    {it ? cat.name : (cat.name_en || cat.name)}
                  </h2>
                </div>

                {/* Product image */}
                {cat.image && (
                  <div className="relative h-44 mb-6 rounded-2xl overflow-hidden bg-white border border-gray-50">
                    <Image
                      src={cat.image}
                      alt={cat.name || ""}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {it ? cat.desc : (cat.desc_en || cat.desc)}
                </p>

                <Link
                  href={cat.href}
                  className={`self-start inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${cat.color || "from-cyan-500 to-cyan-600"} text-white text-sm font-semibold rounded-full hover:shadow-md hover:opacity-90 transition-all`}
                >
                  {it ? "Scopri " : "Discover "}
                  {it ? cat.name : (cat.name_en || cat.name)} →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
