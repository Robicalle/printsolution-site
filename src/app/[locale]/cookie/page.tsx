import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Cookie Policy",
    description:
      locale === "it"
        ? "Informativa estesa sull'uso dei cookie di Print Solution S.r.l. ai sensi del GDPR e delle Linee Guida del Garante Privacy."
        : "Extended cookie policy of Print Solution S.r.l. pursuant to GDPR and the Italian Data Protection Authority guidelines.",
    alternates: { canonical: "/cookie" },
  };
}

export default async function CookiePage() {
  const locale = await getLocale();

  if (locale === "it") {
    return (
      <>
        <PageHero title="Cookie Policy" />
        <section className="section-padding">
          <div className="container-custom max-w-3xl prose prose-gray">
            <h2>Informativa estesa sull&apos;uso dei cookie</h2>
            <p className="text-sm text-gray-500">In vigore dal 15 gennaio 2024</p>

            <h3>Premessa</h3>
            <p>
              La presente cookie policy è resa per il sito www.printsolutionsrl.it (Sito). Il
              documento è stato redatto tenendo conto di quanto indicato dal Regolamento europeo
              679/2016 in materia di protezione dei dati personali (GDPR), dal Codice della Privacy
              (D. Lgs. 30 giugno 2003 n. 196) e delle Linee Guida del Garante Privacy (soprattutto
              le Linee Guida sull&apos;uso dei cookie emesse il 10 luglio 2021).
            </p>
            <p>
              <strong>Titolare del Trattamento:</strong> Print Solution S.r.l.
            </p>

            <h3>Che cosa sono i cookie e a cosa servono</h3>
            <p>
              Un cookie è un file di testo che un sito web visitato dall&apos;utente invia al suo
              terminale (computer, dispositivo mobile quale smartphone o tablet), dove viene
              memorizzato per essere poi ritrasmesso a tale sito in occasione di una visita
              successiva al sito medesimo.
            </p>
            <p>I cookie vengono tra loro distinti:</p>
            <ul>
              <li>
                in base al soggetto che li installa, a seconda che si tratti dello stesso gestore
                del sito visitato (c.d. &quot;cookie di prima parte&quot;) ovvero di un soggetto
                diverso (c.d. &quot;cookie di terza parte&quot;);
              </li>
              <li>
                in base alla finalità di ciascun cookie: alcuni cookie permettono una migliore
                navigazione, memorizzando alcune scelte dell&apos;utente, ad esempio la lingua (c.d.
                &quot;cookie tecnici&quot;), altri cookie consentono di monitorare la navigazione
                dell&apos;utente anche allo scopo di inviare pubblicità e/od offrire servizi in
                linea con sue preferenze (c.d. &quot;cookie di profilazione&quot;).
              </li>
            </ul>
            <p>
              Solo i cookie di profilazione richiedono il consenso preventivo dell&apos;utente al
              loro utilizzo.
            </p>
            <p>
              Il Titolare del Trattamento è responsabile esclusivamente dei cookie di prima parte
              dallo stesso installati sul Sito.
            </p>

            <h3>Cookie tecnici di prima parte</h3>
            <p>
              Questi cookie sono necessari per il funzionamento del Sito e non possono essere
              disattivati. Di solito sono definiti come una risposta alle azioni intraprese che
              costituiscono una richiesta di servizi, come l&apos;impostazione delle preferenze sui
              cookie, l&apos;accesso o la compilazione di moduli, preferenze di navigazione.
            </p>
            <ul>
              <li>
                Il Sito rilascia cookie di navigazione o di sessione che garantiscono la normale
                navigazione e normale fruizione del Sito.
              </li>
              <li>
                Vengono utilizzati anche cookie tecnici che Le permettono di navigare sul Sito
                mantenendo le scelte effettuate.
              </li>
              <li>
                Il Titolare del Trattamento utilizza anche cookie che tengono traccia dei Prodotti
                visionati dall&apos;utente durante la sessione sul Sito.
              </li>
            </ul>

            <h3>Cookie di profilazione di terza parte</h3>
            <p>Il Sito non rilascia cookie di profilazione, pubblicitaria o statistica.</p>

            <h3>Gestione dei cookie tramite browser</h3>
            <p>
              Lei può abilitare/disabilitare i cookie anche attraverso le opzioni del Suo browser:
            </p>
            <ul>
              <li>
                <strong>Internet Explorer:</strong> Accedere al menu Strumenti → Opzioni Internet →
                Privacy → Avanzate → selezionare le proprie preferenze.
              </li>
              <li>
                <strong>Google Chrome:</strong> Menu Chrome (pulsante in alto a destra) →
                Impostazioni → Avanzate → Privacy e sicurezza → Impostazioni contenuti → Cookie.
              </li>
              <li>
                <strong>Firefox:</strong> Strumenti → Opzioni → Privacy e sicurezza → Utilizza
                impostazioni personalizzate per la cronologia → Cookie.
              </li>
              <li>
                <strong>Safari:</strong> Safari → Preferenze → Privacy e sicurezza → Blocca cookie.
              </li>
            </ul>

            <h3>I Suoi diritti</h3>
            <p>Ai sensi dell&apos;art. 13 del GDPR, Lei ha diritto di:</p>
            <ul>
              <li>
                chiedere al Titolare del Trattamento l&apos;accesso ai Suoi dati personali e la
                rettifica o la cancellazione degli stessi o la limitazione del trattamento che La
                riguardano o di opporsi al loro trattamento, oltre al diritto alla portabilità dei
                dati;
              </li>
              <li>
                revocare il consenso in qualsiasi momento senza pregiudicare la liceità del
                trattamento basata sul consenso prestato prima della revoca;
              </li>
              <li>
                proporre reclamo a un&apos;autorità di controllo (es.: il Garante per la protezione
                dei dati personali).
              </li>
            </ul>
            <p>
              I diritti di cui sopra potranno essere esercitati con richiesta rivolta senza
              formalità ai contatti indicati in Premessa.
            </p>

            <h3>Comunicazione dei dati</h3>
            <p>
              Il Titolare del Trattamento non comunica a terzi le informazioni derivanti
              dall&apos;uso dei cookie.
            </p>

            <h3>Conservazione delle informazioni</h3>
            <p>
              I dati comportamentali dell&apos;utente vengono conservati sino a 1 anno da quando
              sono stati ottenuti dal relativo cookie di profilazione. In ogni caso, i dati vengono
              cancellati prima se v&apos;è revoca del consenso da parte dell&apos;utente.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">
          <h2>Extended Cookie Policy</h2>
          <p className="text-sm text-gray-500">Effective from January 15, 2024</p>

          <h3>Introduction</h3>
          <p>
            This cookie policy applies to the website www.printsolutionsrl.it (the
            &quot;Website&quot;). This document has been drafted in accordance with the European
            Regulation 679/2016 on the protection of personal data (GDPR), the Italian Privacy Code
            (Legislative Decree No. 196 of June 30, 2003) and the Italian Data Protection Authority
            Guidelines (in particular the Guidelines on the use of cookies issued on July 10, 2021).
          </p>
          <p>
            <strong>Data Controller:</strong> Print Solution S.r.l.
          </p>

          <h3>What are cookies and what are they used for</h3>
          <p>
            A cookie is a text file sent by a website visited by the user to their device (computer,
            mobile device such as smartphone or tablet), where it is stored and then retransmitted to
            the same website on subsequent visits.
          </p>
          <p>Cookies are distinguished by:</p>
          <ul>
            <li>
              the entity that installs them: either the operator of the visited website
              (&quot;first-party cookies&quot;) or a third party (&quot;third-party cookies&quot;);
            </li>
            <li>
              their purpose: some cookies enable better browsing by storing certain user preferences
              such as language (&quot;technical cookies&quot;), while others allow monitoring user
              browsing activity for advertising purposes or to offer services tailored to their
              preferences (&quot;profiling cookies&quot;).
            </li>
          </ul>
          <p>Only profiling cookies require prior user consent.</p>
          <p>
            The Data Controller is solely responsible for its own first-party cookies installed on
            the Website.
          </p>

          <h3>First-party technical cookies</h3>
          <p>
            These cookies are necessary for the Website to function and cannot be deactivated. They
            are usually set in response to actions taken by the user that constitute a service
            request, such as setting cookie preferences, logging in, or filling in forms.
          </p>
          <ul>
            <li>
              The Website uses navigation or session cookies that ensure normal browsing and use of
              the Website.
            </li>
            <li>
              Technical cookies are also used to allow you to browse the Website while maintaining
              your choices.
            </li>
            <li>
              The Data Controller also uses cookies that track products viewed by the user during the
              session on the Website.
            </li>
          </ul>

          <h3>Third-party profiling cookies</h3>
          <p>The Website does not use profiling, advertising, or statistical cookies.</p>

          <h3>Managing cookies through your browser</h3>
          <p>You can enable/disable cookies through your browser settings:</p>
          <ul>
            <li>
              <strong>Internet Explorer:</strong> Tools menu → Internet Options → Privacy → Advanced
              → select your preferences.
            </li>
            <li>
              <strong>Google Chrome:</strong> Chrome menu (top-right button) → Settings → Advanced →
              Privacy and Security → Content Settings → Cookies.
            </li>
            <li>
              <strong>Firefox:</strong> Tools → Options → Privacy and Security → Use custom settings
              for history → Cookies.
            </li>
            <li>
              <strong>Safari:</strong> Safari → Preferences → Privacy and Security → Block Cookies.
            </li>
          </ul>

          <h3>Your rights</h3>
          <p>Pursuant to Art. 13 of the GDPR, you have the right to:</p>
          <ul>
            <li>
              request from the Data Controller access to your personal data and their rectification
              or erasure, restriction of processing, or to object to processing, as well as the
              right to data portability;
            </li>
            <li>
              withdraw consent at any time without affecting the lawfulness of processing based on
              consent given prior to withdrawal;
            </li>
            <li>
              lodge a complaint with a supervisory authority (e.g., the Italian Data Protection
              Authority).
            </li>
          </ul>
          <p>
            The above rights may be exercised by contacting us informally using the details provided
            in the Introduction.
          </p>

          <h3>Data disclosure</h3>
          <p>
            The Data Controller does not disclose to third parties any information derived from the
            use of cookies.
          </p>

          <h3>Data retention</h3>
          <p>
            User behavioral data is retained for up to 1 year from collection via the relevant
            profiling cookie. In any case, data is deleted earlier if the user withdraws consent.
          </p>
        </div>
      </section>
    </>
  );
}
