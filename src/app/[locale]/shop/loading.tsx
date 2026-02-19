import { SkeletonHero, SkeletonCard } from "@/components/LoadingSkeleton";

export default function ShopLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SkeletonHero />
      <section className="pb-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
