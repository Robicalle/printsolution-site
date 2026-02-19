import { SkeletonHero, SkeletonBlock, SkeletonText } from "@/components/LoadingSkeleton";

export default function SoluzioniLoading() {
  return (
    <>
      <SkeletonHero />
      <section className="section-padding bg-white">
        <div className="container-custom space-y-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              <SkeletonBlock className="h-64 lg:h-80" />
              <div className="space-y-4">
                <SkeletonBlock className="h-8 w-3/4" />
                <SkeletonText lines={4} />
                <SkeletonBlock className="h-12 w-40 !rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
