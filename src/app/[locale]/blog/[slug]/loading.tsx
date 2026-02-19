import { SkeletonHero, SkeletonBlock, SkeletonText } from "@/components/LoadingSkeleton";

export default function BlogPostLoading() {
  return (
    <>
      <SkeletonHero />
      <div className="container-custom -mt-10 mb-8">
        <SkeletonBlock className="w-full max-w-3xl mx-auto h-64" />
      </div>
      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-4">
          <SkeletonBlock className="h-6 w-full" />
          <SkeletonText lines={8} />
          <SkeletonBlock className="h-48 w-full my-8" />
          <SkeletonText lines={6} />
        </div>
      </article>
    </>
  );
}
