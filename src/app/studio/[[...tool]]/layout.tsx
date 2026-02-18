export const metadata = {
  title: "Print Solution Studio",
  description: "CMS Sanity Studio per Print Solution",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
