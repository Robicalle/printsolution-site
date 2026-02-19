export default function sanityLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // Sanity CDN images already have params — append with & or ?
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}w=${width}&q=${quality || 75}&auto=format`;
}
