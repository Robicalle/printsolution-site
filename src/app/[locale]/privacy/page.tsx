import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Privacy Policy",
    description:
      locale === "it"
        ? "Informativa sulla privacy di Print Solution S.r.l. — Trattamento dei dati personali ai sensi del GDPR."
        : "Privacy policy of Print Solution S.r.l. — Personal data processing under GDPR.",
    alternates: { canonical: "/privacy" },
  };
}

export default async function PrivacyPage() {
  const locale = await getLocale();

  if (locale === "it") {
    return (
      <>
        <PageHero title="Privacy Policy" />
        <section className="section-padding">
          <div className="container-custom max-w-3xl prose prose-gray">
            <h2>Informativa sul trattamento dei dati personali</h2>
            <p className="text-sm text-gray-500">
              Ai sensi dell&apos;art. 13 del Regolamento UE 2016/679 (GDPR)
            </p>

            <h3>Titolare del Trattamento</h3>
            <p>
              <strong>Print Solution S.r.l.</strong>
              <br />
              Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI), Italia
              <br />
              P.IVA e C.F.: 07149250966
              <br />
              E-mail:{" "}
              <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>
            </p>

            <h3>Tipologie di dati raccolti</h3>
            <p>
              Il Titolare raccoglie, direttamente o tramite terze parti, le seguenti categorie di
              dati personali:
            </p>
            <ul>
              <li>
                <strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema
                operativo, pagine visitate, orari di accesso e altre informazioni trasmesse
                automaticamente dal dispositivo durante la navigazione.
              </li>
              <li>
                <strong>Dati forniti volontariamente dall&apos;utente:</strong> nome, cognome,
                indirizzo e-mail, numero di telefono, ragione sociale e qualsiasi altro dato
                comunicato tramite i moduli di contatto o richiesta preventivo presenti sul Sito.
              </li>
            </ul>

            <h3>Finalità del trattamento</h3>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul>
              <li>
                consentire la navigazione sul Sito e garantirne il corretto funzionamento;
              </li>
              <li>rispondere alle richieste di contatto e/o preventivo dell&apos;utente;</li>
              <li>adempiere ad obblighi di legge, regolamenti o normativa comunitaria;</li>
              <li>
                previo consenso, inviare comunicazioni commerciali e promozionali relative ai
                prodotti e servizi offerti dal Titolare.
              </li>
            </ul>

            <h3>Base giuridica del trattamento</h3>
            <ul>
              <li>
                <strong>Esecuzione di un contratto</strong> o misure precontrattuali (art. 6, par.
                1, lett. b GDPR): per rispondere alle richieste dell&apos;utente.
              </li>
              <li>
                <strong>Obbligo legale</strong> (art. 6, par. 1, lett. c GDPR): per adempiere ad
                obblighi normativi.
              </li>
              <li>
                <strong>Consenso</strong> (art. 6, par. 1, lett. a GDPR): per l&apos;invio di
                comunicazioni commerciali.
              </li>
              <li>
                <strong>Legittimo interesse</strong> (art. 6, par. 1, lett. f GDPR): per la
                sicurezza e il corretto funzionamento del Sito.
              </li>
            </ul>

            <h3>Modalità del trattamento</h3>
            <p>
              Il trattamento dei dati è effettuato mediante strumenti informatici e/o telematici, con
              modalità organizzative e logiche strettamente correlate alle finalità indicate. Il
              Titolare adotta misure di sicurezza adeguate per prevenire la perdita, l&apos;uso
              illecito o non corretto e l&apos;accesso non autorizzato ai dati.
            </p>

            <h3>Comunicazione e diffusione dei dati</h3>
            <p>
              I dati personali potranno essere comunicati a soggetti terzi esclusivamente per
              l&apos;adempimento delle finalità sopra indicate, tra cui:
            </p>
            <ul>
              <li>fornitori di servizi tecnici e informatici (hosting, manutenzione del Sito);</li>
              <li>consulenti e professionisti incaricati dal Titolare;</li>
              <li>
                autorità competenti, nei casi previsti dalla legge.
              </li>
            </ul>
            <p>I dati personali non saranno diffusi.</p>

            <h3>Trasferimento dei dati</h3>
            <p>
              I dati personali sono conservati su server situati nell&apos;Unione Europea. Qualora
              fosse necessario trasferire i dati al di fuori dell&apos;UE, il Titolare garantirà
              l&apos;adozione di garanzie adeguate ai sensi degli artt. 44 e ss. del GDPR.
            </p>

            <h3>Conservazione dei dati</h3>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario al raggiungimento
              delle finalità per cui sono stati raccolti e comunque entro i termini previsti dalla
              normativa vigente. I dati raccolti tramite i moduli di contatto sono conservati per un
              periodo massimo di 24 mesi dalla raccolta, salvo diversa necessità legale.
            </p>

            <h3>Diritti dell&apos;interessato</h3>
            <p>Ai sensi degli artt. 15-22 del GDPR, Lei ha il diritto di:</p>
            <ul>
              <li>accedere ai Suoi dati personali;</li>
              <li>ottenerne la rettifica o la cancellazione;</li>
              <li>ottenere la limitazione del trattamento;</li>
              <li>opporsi al trattamento;</li>
              <li>richiedere la portabilità dei dati;</li>
              <li>
                revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del
                trattamento basata sul consenso prestato prima della revoca;
              </li>
              <li>
                proporre reclamo al Garante per la protezione dei dati personali (
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.garanteprivacy.it
                </a>
                ).
              </li>
            </ul>
            <p>
              Per esercitare i Suoi diritti, può contattare il Titolare all&apos;indirizzo e-mail:{" "}
              <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>
            </p>

            <h3>Cookie</h3>
            <p>
              Per informazioni sull&apos;uso dei cookie, La invitiamo a consultare la nostra{" "}
              <a href="/it/cookie">Cookie Policy</a>.
            </p>

            <h3>Modifiche alla presente informativa</h3>
            <p>
              Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi
              momento. Le eventuali modifiche saranno pubblicate su questa pagina. Si consiglia di
              consultare periodicamente la presente pagina.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <h2>Personal Data Processing Policy</h2>
          <p className="text-sm text-gray-500">
            Pursuant to Art. 13 of EU Regulation 2016/679 (GDPR)
          </p>

          <h3>Data Controller</h3>
          <p>
            <strong>Print Solution S.r.l.</strong>
            <br />
            Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI), Italy
            <br />
            VAT / Tax Code: 07149250966
            <br />
            E-mail:{" "}
            <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>
          </p>

          <h3>Types of data collected</h3>
          <p>
            The Data Controller collects, directly or through third parties, the following categories
            of personal data:
          </p>
          <ul>
            <li>
              <strong>Browsing data:</strong> IP address, browser type, operating system, pages
              visited, access times and other information automatically transmitted by the device
              during browsing.
            </li>
            <li>
              <strong>Data voluntarily provided by the user:</strong> name, surname, e-mail address,
              phone number, company name and any other data submitted through contact or quote
              request forms on the Website.
            </li>
          </ul>

          <h3>Purposes of processing</h3>
          <p>Personal data is processed for the following purposes:</p>
          <ul>
            <li>
              enabling browsing on the Website and ensuring its proper functioning;
            </li>
            <li>responding to contact and/or quote requests from the user;</li>
            <li>complying with legal obligations, regulations or EU legislation;</li>
            <li>
              with prior consent, sending commercial and promotional communications regarding
              products and services offered by the Data Controller.
            </li>
          </ul>

          <h3>Legal basis for processing</h3>
          <ul>
            <li>
              <strong>Performance of a contract</strong> or pre-contractual measures (Art. 6(1)(b)
              GDPR): to respond to user requests.
            </li>
            <li>
              <strong>Legal obligation</strong> (Art. 6(1)(c) GDPR): to comply with regulatory
              requirements.
            </li>
            <li>
              <strong>Consent</strong> (Art. 6(1)(a) GDPR): for sending commercial communications.
            </li>
            <li>
              <strong>Legitimate interest</strong> (Art. 6(1)(f) GDPR): for the security and proper
              functioning of the Website.
            </li>
          </ul>

          <h3>Processing methods</h3>
          <p>
            Data is processed using electronic and/or digital tools, with organizational and logical
            methods strictly related to the stated purposes. The Data Controller adopts appropriate
            security measures to prevent loss, unlawful or improper use, and unauthorized access to
            data.
          </p>

          <h3>Data disclosure and dissemination</h3>
          <p>
            Personal data may be disclosed to third parties solely for the purposes described above,
            including:
          </p>
          <ul>
            <li>technical and IT service providers (hosting, website maintenance);</li>
            <li>consultants and professionals appointed by the Data Controller;</li>
            <li>competent authorities, where required by law.</li>
          </ul>
          <p>Personal data will not be disseminated.</p>

          <h3>Data transfers</h3>
          <p>
            Personal data is stored on servers located within the European Union. Should it become
            necessary to transfer data outside the EU, the Data Controller will ensure appropriate
            safeguards are in place pursuant to Articles 44 et seq. of the GDPR.
          </p>

          <h3>Data retention</h3>
          <p>
            Personal data is retained for the time strictly necessary to achieve the purposes for
            which it was collected and in any case within the limits set by applicable legislation.
            Data collected through contact forms is retained for a maximum of 24 months from
            collection, unless a different legal requirement applies.
          </p>

          <h3>Data subject rights</h3>
          <p>Pursuant to Articles 15-22 of the GDPR, you have the right to:</p>
          <ul>
            <li>access your personal data;</li>
            <li>obtain their rectification or erasure;</li>
            <li>obtain restriction of processing;</li>
            <li>object to processing;</li>
            <li>request data portability;</li>
            <li>
              withdraw consent at any time, without affecting the lawfulness of processing based on
              consent given prior to withdrawal;
            </li>
            <li>
              lodge a complaint with the Italian Data Protection Authority (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.garanteprivacy.it
              </a>
              ).
            </li>
          </ul>
          <p>
            To exercise your rights, you may contact the Data Controller at:{" "}
            <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>
          </p>

          <h3>Cookies</h3>
          <p>
            For information on the use of cookies, please refer to our{" "}
            <a href="/en/cookie">Cookie Policy</a>.
          </p>

          <h3>Changes to this policy</h3>
          <p>
            The Data Controller reserves the right to amend this policy at any time. Any changes
            will be published on this page. We recommend checking this page periodically.
          </p>
        </div>
      </section>
    </>
  );
}
