import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sui cookie di Print Solution S.r.l. — Utilizzo dei cookie e tecnologie di tracciamento.",
  alternates: { canonical: "/cookie" },
};

export default function CookiePage() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <p className="text-gray-600">Informativa sui cookie in fase di aggiornamento.</p>
        </div>
      </section>
    </>
  );
}
