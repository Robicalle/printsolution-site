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
            <table className="w-full text-sm border border-gray-200 rounded mb-8">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700 w-48">Titolare del Trattamento</td>
                  <td className="py-2 px-4">Print Solution S.r.l.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">Email di contatto</td>
                  <td className="py-2 px-4"><a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">Ultimo aggiornamento</td>
                  <td className="py-2 px-4">Aprile 2026</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold text-gray-700">Normativa di riferimento</td>
                  <td className="py-2 px-4">GDPR Reg. UE 2016/679 — D.Lgs. 196/2003 — Linee Guida Garante 10 luglio 2021</td>
                </tr>
              </tbody>
            </table>

            <h3>1. Cosa sono i cookie</h3>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano al browser
              dell&apos;utente, dove vengono memorizzati e ritrasmessi al sito nelle visite successive.
              Consentono al sito di riconoscere il dispositivo dell&apos;utente e di memorizzare alcune
              informazioni sulle preferenze di navigazione.
            </p>
            <p>
              I cookie si distinguono in: <strong>cookie di prima parte</strong> (installati
              direttamente dal Titolare del Sito) e <strong>cookie di terza parte</strong> (installati
              da soggetti terzi tramite il Sito); e in base alla finalità: <strong>cookie tecnici</strong>{" "}
              (necessari al funzionamento) e <strong>cookie analitici/di profilazione</strong>{" "}
              (richiedono il consenso dell&apos;utente).
            </p>

            <h3>2. Cookie tecnici di prima parte</h3>
            <p>
              Il Sito utilizza i seguenti cookie tecnici, necessari per il corretto funzionamento.
              Non richiedono il consenso dell&apos;utente (Linee Guida Garante 2021).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Nome cookie</th>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Finalità</th>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">session_id</td>
                    <td className="py-2 px-4">Gestione sessione utente e carrello e-shop</td>
                    <td className="py-2 px-4">Sessione</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">cookie_consent</td>
                    <td className="py-2 px-4">Memorizza le preferenze sui cookie espresse dall&apos;utente</td>
                    <td className="py-2 px-4">12 mesi</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">XSRF-TOKEN</td>
                    <td className="py-2 px-4">Protezione CSRF (sicurezza dei form)</td>
                    <td className="py-2 px-4">Sessione</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-mono text-xs">lang</td>
                    <td className="py-2 px-4">Memorizza la lingua selezionata (IT/EN)</td>
                    <td className="py-2 px-4">12 mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>3. Cookie analitici di terza parte — Google Analytics 4</h3>
            <p>
              Il Sito utilizza Google Analytics 4 (GA4), un servizio di analisi web fornito da
              Google LLC (1600 Amphitheatre Parkway, Mountain View, CA, USA). GA4 raccoglie dati
              sulla navigazione degli utenti in forma anonimizzata per produrre statistiche aggregate
              sull&apos;utilizzo del Sito. L&apos;indirizzo IP è anonimizzato prima di qualsiasi
              elaborazione.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Nome cookie</th>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Finalità</th>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">_ga</td>
                    <td className="py-2 px-4">Identifica gli utenti univoci per Google Analytics</td>
                    <td className="py-2 px-4">2 anni</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">_ga_XXXXXXX</td>
                    <td className="py-2 px-4">Mantiene lo stato della sessione in GA4</td>
                    <td className="py-2 px-4">2 anni</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-mono text-xs">_gid</td>
                    <td className="py-2 px-4">Distingue gli utenti in sessioni diverse</td>
                    <td className="py-2 px-4">24 ore</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-mono text-xs">_gat</td>
                    <td className="py-2 px-4">Limita la frequenza delle richieste a Google Analytics</td>
                    <td className="py-2 px-4">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Base giuridica:</strong> legittimo interesse (art. 6.1.f GDPR) per la sola
              analisi statistica anonimizzata. L&apos;utente può opporsi in qualsiasi momento tramite
              il pannello di gestione cookie del Sito o installando il componente aggiuntivo del
              browser:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                tools.google.com/dlpage/gaoptout
              </a>.
              I dati possono essere trasferiti negli USA sulla base delle Clausole Contrattuali Standard
              adottate da Google. Informativa privacy di Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                policies.google.com/privacy
              </a>.
            </p>

            <h3>4. Nessun cookie di profilazione pubblicitaria</h3>
            <p>
              Il Sito non utilizza cookie di profilazione pubblicitaria propri. Non viene effettuato
              remarketing né targeting pubblicitario tramite cookie di terze parti a finalità
              commerciale.
            </p>

            <h3>5. Come gestire i cookie</h3>

            <h4>5.1 Pannello preferenze cookie del Sito</h4>
            <p>
              In qualsiasi momento l&apos;utente può modificare le proprie preferenze sui cookie
              tramite il link &quot;Gestisci cookie&quot; presente nel footer del Sito.
            </p>

            <h4>5.2 Impostazioni del browser</h4>
            <p>
              L&apos;utente può impostare il proprio browser per rifiutare tutti i cookie o per
              ricevere un avviso quando viene inviato un cookie. Si noti che la disabilitazione dei
              cookie tecnici potrebbe compromettere il corretto funzionamento del Sito e
              dell&apos;E-Shop.
            </p>
            <ul>
              <li><strong>Google Chrome:</strong> Menu &gt; Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Menu &gt; Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti</li>
              <li><strong>Microsoft Edge:</strong> Menu &gt; Impostazioni &gt; Cookie e autorizzazioni del sito</li>
              <li><strong>Safari (macOS):</strong> Safari &gt; Preferenze &gt; Privacy</li>
              <li><strong>Safari (iOS):</strong> Impostazioni &gt; Safari &gt; Privacy e sicurezza</li>
            </ul>

            <h4>5.3 Opt-out specifico per Google Analytics</h4>
            <p>
              Componente aggiuntivo del browser:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>

            <h3>6. Diritti dell&apos;interessato</h3>
            <p>
              L&apos;utente può esercitare i diritti previsti dagli artt. 15-22 GDPR (accesso,
              rettifica, cancellazione, limitazione, opposizione, portabilità) scrivendo a{" "}
              <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a> o via PEC a{" "}
              <a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a>. Ha inoltre il
              diritto di proporre reclamo al Garante per la protezione dei dati personali (
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                www.garanteprivacy.it
              </a>
              ).
            </p>

            <h3>7. Aggiornamenti</h3>
            <p>
              La presente Cookie Policy può essere aggiornata in seguito a variazioni normative o
              modifiche dei servizi utilizzati sul Sito. Si consiglia di consultare periodicamente
              questa pagina. La versione in vigore è quella con la data indicata in intestazione.
            </p>

          </div>
        </section>
      </>
    );
  }

  // English version
  return (
    <>
      <PageHero title="Cookie Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">

          <h2>Extended Cookie Policy</h2>
          <table className="w-full text-sm border border-gray-200 rounded mb-8">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700 w-48">Data Controller</td>
                <td className="py-2 px-4">Print Solution S.r.l.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">Contact email</td>
                <td className="py-2 px-4"><a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">Last updated</td>
                <td className="py-2 px-4">April 2026</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold text-gray-700">Legal reference</td>
                <td className="py-2 px-4">GDPR Reg. EU 2016/679 — D.Lgs. 196/2003 — Italian DPA Guidelines July 10, 2021</td>
              </tr>
            </tbody>
          </table>

          <h3>1. What are cookies</h3>
          <p>
            Cookies are small text files sent by websites to the user&apos;s browser, stored and
            retransmitted on subsequent visits. They allow the site to recognise the user&apos;s
            device and remember certain browsing preferences.
          </p>
          <p>
            Cookies are classified as <strong>first-party</strong> (set by the website operator)
            or <strong>third-party</strong> (set by other parties); and by purpose:
            <strong> technical cookies</strong> (necessary for functioning) or
            <strong> analytical/profiling cookies</strong> (requiring user consent).
          </p>

          <h3>2. First-party technical cookies</h3>
          <p>These cookies are necessary for the Website to function and do not require consent.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Cookie name</th>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Purpose</th>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">session_id</td>
                  <td className="py-2 px-4">Session management and e-shop cart</td>
                  <td className="py-2 px-4">Session</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">cookie_consent</td>
                  <td className="py-2 px-4">Stores the user&apos;s cookie preferences</td>
                  <td className="py-2 px-4">12 months</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">XSRF-TOKEN</td>
                  <td className="py-2 px-4">CSRF protection (form security)</td>
                  <td className="py-2 px-4">Session</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-mono text-xs">lang</td>
                  <td className="py-2 px-4">Stores the selected language (IT/EN)</td>
                  <td className="py-2 px-4">12 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. Third-party analytical cookies — Google Analytics 4</h3>
          <p>
            The Website uses Google Analytics 4 (GA4) by Google LLC. GA4 collects anonymised
            browsing data to produce aggregate usage statistics. IP addresses are anonymised
            before any processing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Cookie name</th>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Purpose</th>
                  <th className="py-2 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">_ga</td>
                  <td className="py-2 px-4">Identifies unique users</td>
                  <td className="py-2 px-4">2 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">_ga_XXXXXXX</td>
                  <td className="py-2 px-4">Maintains GA4 session state</td>
                  <td className="py-2 px-4">2 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-mono text-xs">_gid</td>
                  <td className="py-2 px-4">Distinguishes users across sessions</td>
                  <td className="py-2 px-4">24 hours</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-mono text-xs">_gat</td>
                  <td className="py-2 px-4">Throttles request rate to Google Analytics</td>
                  <td className="py-2 px-4">1 minute</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Legal basis:</strong> legitimate interest (Art. 6.1.f GDPR) for anonymised
            statistical analysis only. You may opt out via the cookie settings panel or by
            installing:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              tools.google.com/dlpage/gaoptout
            </a>.
          </p>

          <h3>4. No advertising profiling cookies</h3>
          <p>
            The Website does not use advertising profiling cookies. No remarketing or commercial
            targeting is carried out through third-party cookies.
          </p>

          <h3>5. How to manage cookies</h3>

          <h4>5.1 Cookie preferences panel</h4>
          <p>You can update your cookie preferences at any time via the &quot;Manage cookies&quot; link in the footer.</p>

          <h4>5.2 Browser settings</h4>
          <ul>
            <li><strong>Google Chrome:</strong> Menu &gt; Settings &gt; Privacy and security &gt; Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Menu &gt; Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            <li><strong>Microsoft Edge:</strong> Menu &gt; Settings &gt; Cookies and site permissions</li>
            <li><strong>Safari (macOS):</strong> Safari &gt; Preferences &gt; Privacy</li>
            <li><strong>Safari (iOS):</strong> Settings &gt; Safari &gt; Privacy &amp; Security</li>
          </ul>

          <h4>5.3 Google Analytics opt-out</h4>
          <p>
            Browser add-on:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>

          <h3>6. Your rights</h3>
          <p>
            You may exercise your rights under Arts. 15–22 GDPR by writing to{" "}
            <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a> or certified
            email to <a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a>.
            You may also lodge a complaint with the Italian Data Protection Authority (
            <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
              www.garanteprivacy.it
            </a>
            ).
          </p>

          <h3>7. Updates</h3>
          <p>
            This Cookie Policy may be updated following regulatory changes or modifications to the
            services used on the Website. Please check this page periodically.
          </p>

        </div>
      </section>
    </>
  );
}
