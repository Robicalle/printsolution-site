import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy di Print Solution S.r.l. — Trattamento dei dati personali ai sensi del GDPR.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <p className="text-gray-600">Informativa sulla privacy in fase di aggiornamento.</p>
        </div>
      </section>
    </>
  );
}
