import { SkeletonHero, SkeletonCard } from "@/components/LoadingSkeleton";

export default function BlogLoading() {
  return (
    <>
      <SkeletonHero />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
