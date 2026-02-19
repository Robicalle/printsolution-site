import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

export default function SolutionCategoryListBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="space-y-20">
          {(block.categories || []).map((cat: any, i: number) => (
            <div key={cat.name || i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""} scroll-mt-32`}>
              <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden bg-surface-50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color || 'from-cyan-500 to-cyan-600'} opacity-5`} />
                  {cat.image && <Image src={cat.image} alt={cat.name || ""} fill className="object-contain p-8" />}
                </div>
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-dark-800">
                    {it ? cat.name : (cat.name_en || cat.name)}
                  </h2>
                </div>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {it ? cat.desc : (cat.desc_en || cat.desc)}
                </p>
                <Link href={cat.href} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${cat.color || 'from-cyan-500 to-cyan-600'} text-white font-semibold rounded-full hover:shadow-lg transition-all`}>
                  {it ? 'Scopri ' : 'Discover '}{it ? cat.name : (cat.name_en || cat.name)} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
