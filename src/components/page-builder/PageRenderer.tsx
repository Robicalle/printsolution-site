import PageHeroBlock from "./PageHeroBlock";
import ProductHeroBlock from "./ProductHeroBlock";
import SoluzioniHeroBlock from "./SoluzioniHeroBlock";
import ProductCardListBlock from "./ProductCardListBlock";
import CtaBannerBlock from "./CtaBannerBlock";
import UseCasesGridBlock from "./UseCasesGridBlock";
import ConsumablesCategoryListBlock from "./ConsumablesCategoryListBlock";
import CarePackGridBlock from "./CarePackGridBlock";
import ProductPhotoBlock from "./ProductPhotoBlock";
import ProductDescriptionBlock from "./ProductDescriptionBlock";
import ProductVideoBlock from "./ProductVideoBlock";
import FeaturesGridBlock from "./FeaturesGridBlock";
import SpecsTableBlock from "./SpecsTableBlock";
import RelatedProductsBlock from "./RelatedProductsBlock";
import SimpleCtaBlock from "./SimpleCtaBlock";
import StoryStatsBlock from "./StoryStatsBlock";
import ValuesGridBlock from "./ValuesGridBlock";
import DemoRoomBlock from "./DemoRoomBlock";
import TeamSectionBlock from "./TeamSectionBlock";
import SolutionCategoryListBlock from "./SolutionCategoryListBlock";

interface PageRendererProps {
  sections: any[];
  locale: string;
}

const blockMap: Record<string, React.ComponentType<any>> = {
  pageHero: PageHeroBlock,
  productHero: ProductHeroBlock,
  soluzioniHero: SoluzioniHeroBlock,
  productCardList: ProductCardListBlock,
  ctaBanner: CtaBannerBlock,
  useCasesGrid: UseCasesGridBlock,
  consumablesCategoryList: ConsumablesCategoryListBlock,
  carePackGrid: CarePackGridBlock,
  productPhoto: ProductPhotoBlock,
  productDescription: ProductDescriptionBlock,
  productVideo: ProductVideoBlock,
  featuresGrid: FeaturesGridBlock,
  specsTable: SpecsTableBlock,
  relatedProducts: RelatedProductsBlock,
  simpleCta: SimpleCtaBlock,
  storyStats: StoryStatsBlock,
  valuesGrid: ValuesGridBlock,
  demoRoom: DemoRoomBlock,
  teamSection: TeamSectionBlock,
  solutionCategoryList: SolutionCategoryListBlock,
};

// Chi-siamo wraps some blocks in a section with max-w-4xl
const chiSiamoInnerBlocks = new Set(["storyStats", "valuesGrid", "demoRoom", "teamSection"]);

export default function PageRenderer({ sections, locale }: PageRendererProps) {
  // Group consecutive chi-siamo inner blocks
  const rendered: React.ReactNode[] = [];
  let chiSiamoGroup: any[] = [];

  const flushChiSiamo = () => {
    if (chiSiamoGroup.length > 0) {
      rendered.push(
        <section key={`chi-${rendered.length}`} className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {chiSiamoGroup.map((item, i) => {
                const Component = blockMap[item._type];
                return Component ? <Component key={item._key || i} block={item} locale={locale} /> : null;
              })}
            </div>
          </div>
        </section>
      );
      chiSiamoGroup = [];
    }
  };

  for (const section of sections) {
    const type = section._type;
    if (!type) continue;

    // JSON-LD blocks
    if (type === "jsonLd" && section.jsonContent) {
      rendered.push(
        <script
          key={section._key || `jsonld-${rendered.length}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: section.jsonContent }}
        />
      );
      continue;
    }

    // sectionHeading is a standalone heading — skip for now (embedded in productCardList)
    if (type === "sectionHeading") continue;

    if (chiSiamoInnerBlocks.has(type)) {
      chiSiamoGroup.push(section);
      continue;
    }

    flushChiSiamo();

    const Component = blockMap[type];
    if (Component) {
      rendered.push(
        <Component key={section._key || `section-${rendered.length}`} block={section} locale={locale} />
      );
    }
  }

  flushChiSiamo();

  return <>{rendered}</>;
}
