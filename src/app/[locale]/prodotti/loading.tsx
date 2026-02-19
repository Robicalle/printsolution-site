import { SkeletonHero, SkeletonGrid } from "@/components/LoadingSkeleton";

export default function ProdottiLoading() {
  return (
    <>
      <SkeletonHero />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="animate-pulse bg-gray-200 rounded h-8 w-48 mb-8" />
          <SkeletonGrid count={8} />
        </div>
      </section>
    </>
  );
}
