import Image from "next/image";

interface Props {
  block: any;
}

export default function ProductPhotoBlock({ block }: Props) {
  return (
    <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden">
          <Image src={block.imageSrc} alt={block.alt || "Product photo"} fill className="object-contain p-6" />
        </div>
      </div>
    </section>
  );
}
