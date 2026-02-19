import SpecsAccordion from "@/components/SpecsAccordion";

interface Props {
  block: any;
  locale: string;
}

export default function SpecsTableBlock({ block, locale }: Props) {
  const it = locale === "it";
  const specs = it ? (block.specs || []) : (block.specs_en || block.specs || []);
  const specPairs = specs.map((s: any) => [s.label, s.value]);

  return (
    <SpecsAccordion
      specs={specPairs}
      title={block.heading}
      titleEn={block.heading_en}
      locale={locale}
    />
  );
}
