import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Privacy Policy",
    description: locale === 'it'
      ? "Informativa sulla privacy di Print Solution S.r.l. — Trattamento dei dati personali ai sensi del GDPR."
      : "Privacy policy of Print Solution S.r.l. — Personal data processing under GDPR.",
    alternates: { canonical: "/privacy" },
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <p className="text-gray-600">
            {locale === 'it'
              ? 'Informativa sulla privacy in fase di aggiornamento.'
              : 'Privacy policy is being updated.'}
          </p>
        </div>
      </section>
    </>
  );
}
