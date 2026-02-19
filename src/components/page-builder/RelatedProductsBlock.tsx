import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface Props {
  block: any;
  locale: string;
}

export default function RelatedProductsBlock({ block, locale }: Props) {
  const it = locale === "it";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-dark-800 mb-8 text-center">
          {it ? block.heading : (block.heading_en || block.heading)}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {(block.products || []).map((p: any) => (
            <Link key={p.name} href={p.href} className="card-modern overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-40 relative overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark-800 group-hover:text-cyan-500 transition-colors">{p.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {it ? p.desc : (p.desc_en || p.desc)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
