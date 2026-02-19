import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { draftMode } from "next/headers";
import { getLocale } from "next-intl/server";
import { getProductBySlug, getAllProducts } from "@/sanity/lib/fetchers";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/PortableTextComponents";
import SpecsAccordion from "@/components/SpecsAccordion";
import PreviewBanner from "@/components/PreviewBanner";

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return (products || []).map((p: any) => ({
      slug: p.slug?.current || p.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  try {
    const product = await getProductBySlug(slug);
    if (!product) return {};
    const title = product.seo?.title || product.name;
    const description = product.seo?.description || `${product.name} — Print Solution`;
    const image = product.images?.[0]
      ? urlForImage(product.images[0]).width(1200).height(630).url()
      : "/images/hero-boxes.webp";
    return {
      title,
      description,
      openGraph: {
        title: `${title} | Print Solution`,
        description,
        images: [{ url: image, width: 1200, height: 630, alt: title }],
        type: "website",
        locale: locale === "it" ? "it_IT" : "en_US",
        url: `https://www.printsolution.it/prodotti/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | Print Solution`,
        description,
        images: [image],
      },
      alternates: {
        canonical: `https://website-theta-one-59.vercel.app/${locale}/prodotti/${slug}`,
        languages: {
          'it': `https://website-theta-one-59.vercel.app/it/prodotti/${slug}`,
          'en': `https://website-theta-one-59.vercel.app/en/prodotti/${slug}`,
        },
      },
    };
  } catch {
    return {};
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale();
  const it = locale === "it";
  const { isEnabled: isPreview } = await draftMode();
  const product = await getProductBySlug(slug, isPreview);

  if (!product) notFound();

  const mainImage = product.images?.[0]
    ? urlForImage(product.images[0]).width(1200).url()
    : null;

  const specs: string[][] = (product.specs || []).map((s: any) => [s.label, s.value]);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: "Print Solution" },
    description: product.seo?.description || product.name,
    image: mainImage || "https://www.printsolution.it/images/hero-boxes.webp",
    manufacturer: { "@type": "Organization", name: "Print Solution S.r.l." },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: { "@type": "Organization", name: "Print Solution S.r.l." },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.printsolution.it" },
      { "@type": "ListItem", position: 2, name: it ? "Prodotti" : "Products", item: "https://www.printsolution.it/prodotti" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.printsolution.it/prodotti/${slug}` },
    ],
  };

  return (
    <>
      {isPreview && <PreviewBanner />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative text-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <p className="text-cyan-300 text-sm mb-3 uppercase tracking-widest font-medium">
              {it ? "Prodotti" : "Products"}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {product.name}
            </h1>
            {product.description && (
              <div className="text-lg text-gray-300/90 leading-relaxed mb-8 line-clamp-3">
                {typeof product.description === "string" ? (
                  <p>{product.description}</p>
                ) : Array.isArray(product.description) && product.description[0]?.children?.[0]?.text ? (
                  <p>{product.description[0].children[0].text}</p>
                ) : null}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20${encodeURIComponent(product.name)}&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20per%20${encodeURIComponent(product.name)}.%0A%0AGrazie`}
                className="btn-primary text-lg !px-8 !py-4 !rounded-full"
              >
                {it ? "Consulenza gratuita→" : "Free consultation→"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      {mainImage && (
        <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      {product.description && (
        <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-dark-800 mb-6">
              {it ? "Descrizione" : "Description"}
            </h2>
            {Array.isArray(product.description) ? (
              <PortableText value={product.description} components={portableTextComponents} />
            ) : (
              <p className="text-gray-500 leading-relaxed">{product.description}</p>
            )}
          </div>
        </section>
      )}

      {/* Gallery */}
      {product.images && product.images.length > 1 && (
        <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Gallery</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">
                {it ? "Immagini" : "Images"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {product.images.slice(1).map((img: any, i: number) => {
                const imgUrl = urlForImage(img).width(600).url();
                return (
                  <div key={img._key || i} className="relative aspect-square rounded-2xl overflow-hidden bg-surface-50 shadow-sm">
                    <Image src={imgUrl} alt={`${product.name} ${i + 2}`} fill className="object-contain p-4" loading="lazy" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Video */}
      {product.video && (
        <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-4">Video</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-800">
                {it ? `${product.name} in Azione` : `${product.name} in Action`}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg">
              {product.video.includes("youtube") || product.video.includes("youtu.be") ? (
                <iframe
                  src={product.video.replace("watch?v=", "embed/")}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video controls playsInline preload="none" className="w-full h-full rounded-2xl">
                  <source src={product.video} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Specs */}
      {specs.length > 0 && <SpecsAccordion specs={specs} locale={locale} />}

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-surface-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-dark-800 mb-6">
            {it ? "Richiedi una Consulenza" : "Request a Consultation"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            {it
              ? "Porta i tuoi materiali e testa le nostre soluzioni nella sala demo di Sesto San Giovanni."
              : "Bring your materials and test our solutions in the demo room in Sesto San Giovanni."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:info@printsolution.it?subject=Richiesta%20Consulenza%20${encodeURIComponent(product.name)}&body=Buongiorno%2C%0A%0AVorrei%20richiedere%20una%20consulenza%20gratuita%20per%20${encodeURIComponent(product.name)}.%0A%0AGrazie`}
              className="btn-primary text-lg"
            >
              {it ? "Consulenza gratuita→" : "Free consultation→"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
