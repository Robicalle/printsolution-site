import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Cookie Policy",
    description: locale === 'it'
      ? "Informativa sui cookie di Print Solution S.r.l. — Utilizzo dei cookie e tecnologie di tracciamento."
      : "Cookie policy of Print Solution S.r.l. — Use of cookies and tracking technologies.",
    alternates: { canonical: "/cookie" },
  };
}

export default async function CookiePage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <p className="text-gray-600">
            {locale === 'it'
              ? 'Informativa sui cookie in fase di aggiornamento.'
              : 'Cookie policy is being updated.'}
          </p>
        </div>
      </section>
    </>
  );
}
