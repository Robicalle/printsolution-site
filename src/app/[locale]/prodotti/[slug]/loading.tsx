import { SkeletonHero, SkeletonBlock, SkeletonText } from "@/components/LoadingSkeleton";

export default function ProductDetailLoading() {
  return (
    <>
      <SkeletonHero />
      <section className="bg-white pt-8 lg:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SkeletonBlock className="w-full aspect-[16/9]" />
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-white">
        <div className="container-custom max-w-4xl space-y-4">
          <SkeletonBlock className="h-8 w-48" />
          <SkeletonText lines={6} />
        </div>
      </section>
    </>
  );
}
