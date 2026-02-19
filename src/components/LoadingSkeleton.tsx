export function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />;
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse bg-gray-200 rounded h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
      <SkeletonBlock className="h-48 rounded-none" />
      <div className="p-5 space-y-3">
        <SkeletonBlock className="h-5 w-3/4" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <section className="relative bg-gray-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <SkeletonBlock className="h-4 w-24 !bg-gray-700" />
          <SkeletonBlock className="h-12 w-full !bg-gray-700" />
          <SkeletonBlock className="h-12 w-2/3 !bg-gray-700" />
          <SkeletonBlock className="h-6 w-full !bg-gray-700" />
          <SkeletonBlock className="h-6 w-3/4 !bg-gray-700" />
          <SkeletonBlock className="h-14 w-48 !rounded-full !bg-gray-700" />
        </div>
      </div>
    </section>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
