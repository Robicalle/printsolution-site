import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import PageHero from "@/components/PageHero";

// L'assistenza tecnica passa dal portale PSP. I link hanno data-support:
// ConversionTracking li registra come support_click, separati dai contatti
// commerciali (contact_click), cosi' i clienti in assistenza non gonfiano i lead.
const PORTALE = "https://psp.printsolutionsrl.it";
const REGISTRAZIONE = "https://psp.printsolutionsrl.it/register";
const EMAIL = "assistenza@printsolutionsrl.it";

export async function generateMetadata(): Promise<Metadata> {
  const it = (await getLocale()) === "it";
  const title = it ? "Assistenza tecnica" : "Technical Support";
  const description = it
    ? "Assistenza tecnica Print Solution tramite il portale PSP: accedi o registrati per inviare le tue richieste. Lun–ven 9:00–13:00 e 14:00–18:00."
    : "Print Solution technical support through the PSP portal: log in or register to send your requests. Mon–Fri 9:00 AM–1:00 PM and 2:00 PM–6:00 PM.";
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Print Solution`,
      description,
      type: "website",
      locale: it ? "it_IT" : "en_US",
    },
    alternates: {
      canonical: `https://www.printsolutionsrl.it${it ? "" : "/en"}/assistenza-tecnica`,
      languages: {
        it: "https://www.printsolutionsrl.it/assistenza-tecnica",
        en: "https://www.printsolutionsrl.it/en/assistenza-tecnica",
      },
    },
  };
}

export default async function AssistenzaTecnicaPage() {
  const it = (await getLocale()) === "it";

  const accessi = [
    {
      titolo: it ? "Sei già registrato?" : "Already registered?",
      testo: it
        ? "Accedi al portale PSP con le tue credenziali e invia la tua richiesta di assistenza."
        : "Log in to the PSP portal with your credentials and send your support request.",
      bottone: it ? "Accedi al portale PSP" : "Log in to PSP",
      href: PORTALE,
      track: "portal_login",
      primario: true,
    },
    {
      titolo: it ? "Primo accesso?" : "First time?",
      testo: it
        ? "Crea il tuo account sul portale PSP: da lì potrai inviare le richieste di assistenza."
        : "Create your account on the PSP portal: you will then be able to send support requests.",
      bottone: it ? "Registrati al portale PSP" : "Register on PSP",
      href: REGISTRAZIONE,
      track: "portal_register",
      primario: false,
    },
  ];

  return (
    <>
      <PageHero
        title={it ? "Assistenza tecnica" : "Technical Support"}
        subtitle={
          it
            ? "Il supporto tecnico per le macchine che distribuiamo passa da PSP, il nostro portale dedicato."
            : "Technical support for the machines we distribute runs through PSP, our dedicated portal."
        }
        breadcrumb="Print Solution"
        imageSrc="/images/hero-machine1.webp"
      />

      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
              {it ? "Come richiedere assistenza" : "How to request support"}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {it
                ? "Eroghiamo l'assistenza tecnica tramite PSP, il portale dedicato di Print Solution: dal portale invii le richieste di assistenza al nostro team tecnico."
                : "We provide technical support through PSP, Print Solution's dedicated portal: use it to send your support requests to our technical team."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {accessi.map((a) => (
              <div key={a.track} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 flex flex-col">
                <h3 className="text-xl font-bold text-dark-800 mb-3">{a.titolo}</h3>
                <p className="text-gray-600 mb-6 flex-1">{a.testo}</p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-support={a.track}
                  className={
                    a.primario
                      ? "btn-primary self-start"
                      : "self-start inline-flex items-center px-6 py-3 rounded-full border-2 border-cyan-500 text-cyan-600 font-semibold hover:bg-cyan-50 transition-colors"
                  }
                >
                  {a.bottone} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-dark-800 mb-8">
            {it ? "Contatti dell'assistenza" : "Support contacts"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">{it ? "Telefono" : "Phone"}</p>
              <a href="tel:+390249439417" data-support="phone" className="text-xl font-bold text-dark-800 hover:text-cyan-500">
                {it ? "02 4943 9417" : "+39 02 4943 9417"}
              </a>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">Email</p>
              <a href={`mailto:${EMAIL}`} data-support="email" className="text-xl font-bold text-dark-800 hover:text-cyan-500 break-all">
                {EMAIL}
              </a>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">{it ? "Orari" : "Hours"}</p>
              <p className="text-xl font-bold text-dark-800">{it ? "Lunedì – venerdì" : "Monday – Friday"}</p>
              <p className="text-gray-600">{it ? "9:00 – 13:00 e 14:00 – 18:00" : "9:00 AM – 1:00 PM and 2:00 PM – 6:00 PM"}</p>
            </div>
          </div>
          <p className="text-gray-500 mt-6">
            {it
              ? "L'assistenza tramite portale viene erogata negli orari di ufficio."
              : "Support through the portal is provided during office hours (Italian time)."}
          </p>
        </div>
      </section>
    </>
  );
}
