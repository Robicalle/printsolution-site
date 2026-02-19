import PageHero from "@/components/PageHero";

interface Props {
  block: any;
  locale: string;
}

export default function PageHeroBlock({ block, locale }: Props) {
  const it = locale === "it";
  return (
    <PageHero
      title={it ? block.title : (block.title_en || block.title)}
      subtitle={it ? block.subtitle : (block.subtitle_en || block.subtitle)}
      breadcrumb={it ? block.breadcrumb : (block.breadcrumb_en || block.breadcrumb)}
      videoSrc={block.videoSrc}
      imageSrc={block.imageSrc}
    />
  );
}
