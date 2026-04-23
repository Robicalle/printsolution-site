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

// ── Componenti riutilizzabili ──────────────────────────────────────────────

function Section({ num, title, icon, children }: { num: string; title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center shadow-sm text-base">
          {icon}
        </span>
        <div className="pt-1">
          <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wider">Art. {num}</span>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
      </div>
      <div className="ml-14 border-l-2 border-gray-100 pl-6 text-gray-600 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 sm:w-52 flex-shrink-0">{label}</span>
      <span className="text-gray-700 text-sm">{value}</span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100">
      {children}
    </span>
  );
}

function Callout({ icon = "ℹ️", children }: { icon?: string; children: React.ReactNode }) {
  return (
    <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 text-sm text-cyan-800 leading-relaxed flex gap-3">
      <span className="flex-shrink-0 text-base">{icon}</span>
      <div>{children}</div>
    </div>
  );
}

function CookieTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((h) => (
              <th key={h} className="py-3 px-4 text-left font-semibold text-gray-600 text-xs uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="py-2.5 px-4 font-mono text-xs text-cyan-700 font-semibold">{row[0]}</td>
              {row.slice(1).map((cell, j) => (
                <td key={j} className="py-2.5 px-4 text-gray-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Pagina IT ─────────────────────────────────────────────────────────────

function CookieIT() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl py-16 px-4">

          {/* Card intestazione */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🍪</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">Informativa estesa sull&apos;uso dei cookie</p>
                <p className="text-xs text-gray-400">www.printsolutionsrl.it</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <InfoRow label="Titolare del Trattamento" value="Print Solution S.r.l." />
              <InfoRow label="Email di contatto" value={<a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">info@printsolutionsrl.it</a>} />
              <InfoRow label="Ultimo aggiornamento" value={<Pill>📅 Aprile 2026</Pill>} />
              <InfoRow label="Normativa di riferimento" value={
                <span className="flex flex-wrap gap-1">
                  <Pill>GDPR Reg. UE 2016/679</Pill>
                  <Pill>D.Lgs. 196/2003</Pill>
                  <Pill>Linee Guida Garante 10/07/2021</Pill>
                </span>
              } />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            Informativa cookie
            <span className="flex-1 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
          </h2>

          <Section num="1" icon="📖" title="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano al browser
              dell&apos;utente, dove vengono memorizzati e ritrasmessi al sito nelle visite successive.
              Consentono al sito di riconoscere il dispositivo e memorizzare preferenze di navigazione.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-700 text-sm mb-1">🔵 Prima parte</p>
                <p className="text-xs text-gray-500">Installati direttamente dal Titolare del Sito</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-700 text-sm mb-1">🌐 Terza parte</p>
                <p className="text-xs text-gray-500">Installati da soggetti terzi tramite il Sito</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-700 text-sm mb-1">⚙️ Tecnici</p>
                <p className="text-xs text-gray-500">Necessari al funzionamento — non richiedono consenso</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="font-semibold text-gray-700 text-sm mb-1">📊 Analitici / Profilazione</p>
                <p className="text-xs text-gray-500">Richiedono il consenso dell&apos;utente</p>
              </div>
            </div>
          </Section>

          <Section num="2" icon="⚙️" title="Cookie tecnici di prima parte">
            <p>
              Necessari per il corretto funzionamento del Sito. <strong>Non richiedono il consenso</strong>{" "}
              dell&apos;utente (Linee Guida Garante 2021).
            </p>
            <CookieTable
              headers={["Nome cookie", "Finalità", "Durata"]}
              rows={[
                ["session_id", "Gestione sessione utente e carrello e-shop", "Sessione"],
                ["cookie_consent", "Memorizza le preferenze sui cookie", "12 mesi"],
                ["XSRF-TOKEN", "Protezione CSRF (sicurezza dei form)", "Sessione"],
                ["lang", "Memorizza la lingua selezionata (IT/EN)", "12 mesi"],
              ]}
            />
          </Section>

          <Section num="3" icon="📊" title="Cookie analitici di terza parte — Google Analytics 4">
            <p>
              Il Sito utilizza <strong>Google Analytics 4 (GA4)</strong> di Google LLC (Mountain View,
              CA, USA). GA4 raccoglie dati di navigazione in forma anonimizzata per statistiche
              aggregate. L&apos;indirizzo IP è anonimizzato prima di qualsiasi elaborazione.
            </p>
            <CookieTable
              headers={["Nome cookie", "Finalità", "Durata"]}
              rows={[
                ["_ga", "Identifica gli utenti univoci per Google Analytics", "2 anni"],
                ["_ga_XXXXXXX", "Mantiene lo stato della sessione in GA4", "2 anni"],
                ["_gid", "Distingue gli utenti in sessioni diverse", "24 ore"],
                ["_gat", "Limita la frequenza delle richieste a Google Analytics", "1 minuto"],
              ]}
            />
            <Callout>
              <strong>Base giuridica:</strong> legittimo interesse (art. 6.1.f GDPR) per analisi
              statistica anonimizzata. L&apos;utente può opporsi tramite il pannello cookie del Sito o
              installando{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                l&apos;opt-out di Google Analytics
              </a>
              . Dati trasferiti negli USA via Clausole Contrattuali Standard.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                Privacy policy Google →
              </a>
            </Callout>
          </Section>

          <Section num="4" icon="🚫" title="Nessun cookie di profilazione pubblicitaria">
            <Callout icon="✅">
              Il Sito <strong>non utilizza cookie di profilazione pubblicitaria</strong> propri. Non
              viene effettuato remarketing né targeting pubblicitario tramite cookie di terze parti a
              finalità commerciale.
            </Callout>
          </Section>

          <Section num="5" icon="🔧" title="Come gestire i cookie">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700 mb-2">5.1 Pannello preferenze del Sito</p>
                <p>
                  Modifica le preferenze in qualsiasi momento tramite il link{" "}
                  <strong>&quot;Gestisci cookie&quot;</strong> nel footer del Sito.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-3">5.2 Impostazioni del browser</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { browser: "Google Chrome", path: "Menu → Impostazioni → Privacy e sicurezza → Cookie" },
                    { browser: "Mozilla Firefox", path: "Menu → Opzioni → Privacy e sicurezza → Cookie" },
                    { browser: "Microsoft Edge", path: "Menu → Impostazioni → Cookie e autorizzazioni" },
                    { browser: "Safari (macOS)", path: "Safari → Preferenze → Privacy" },
                    { browser: "Safari (iOS)", path: "Impostazioni → Safari → Privacy e sicurezza" },
                  ].map(({ browser, path }) => (
                    <div key={browser} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <p className="font-semibold text-gray-700 text-sm">{browser}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{path}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">5.3 Opt-out Google Analytics</p>
                <p>
                  Componente aggiuntivo del browser:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-medium">
                    tools.google.com/dlpage/gaoptout →
                  </a>
                </p>
              </div>
            </div>
          </Section>

          <Section num="6" icon="⚖️" title="Diritti dell'interessato">
            <p>
              L&apos;utente può esercitare i diritti previsti dagli artt. 15-22 GDPR (accesso,
              rettifica, cancellazione, limitazione, opposizione, portabilità) contattando:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:info@printsolutionsrl.it" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-cyan-200 transition-colors">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-cyan-600">info@printsolutionsrl.it</p>
                </div>
              </a>
              <a href="mailto:printsolutionsrl@pec.it" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-cyan-200 transition-colors">
                <span className="text-xl">📮</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">PEC</p>
                  <p className="text-sm font-medium text-cyan-600">printsolutionsrl@pec.it</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Ha inoltre il diritto di proporre reclamo al Garante per la protezione dei dati
              personali:{" "}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                www.garanteprivacy.it
              </a>.
            </p>
          </Section>

          <Section num="7" icon="🔄" title="Aggiornamenti">
            <p>
              La presente Cookie Policy può essere aggiornata in seguito a variazioni normative o
              modifiche dei servizi utilizzati sul Sito. Si consiglia di consultare periodicamente
              questa pagina. La versione in vigore è quella con la data indicata in intestazione.
            </p>
          </Section>

        </div>
      </div>
    </>
  );
}

// ── Pagina EN ─────────────────────────────────────────────────────────────

function CookieEN() {
  return (
    <>
      <PageHero title="Cookie Policy" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl py-16 px-4">

          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🍪</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">Extended Cookie Policy</p>
                <p className="text-xs text-gray-400">www.printsolutionsrl.it</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <InfoRow label="Data Controller" value="Print Solution S.r.l." />
              <InfoRow label="Contact email" value={<a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">info@printsolutionsrl.it</a>} />
              <InfoRow label="Last updated" value={<Pill>📅 April 2026</Pill>} />
              <InfoRow label="Legal reference" value={<span className="flex flex-wrap gap-1"><Pill>GDPR EU 2016/679</Pill><Pill>Italian DPA Guidelines 2021</Pill></span>} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            Cookie Policy
            <span className="flex-1 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
          </h2>

          <Section num="1" icon="📖" title="What are cookies">
            <p>Cookies are small text files sent by websites to the user&apos;s browser. They allow the site to recognise the device and remember browsing preferences.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
                { icon: "⚙️", title: "Technical cookies", desc: "Necessary for functioning — no consent required" },
                { icon: "📊", title: "Analytical cookies", desc: "Statistical analysis — require user consent" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="font-semibold text-gray-700 text-sm mb-1">{icon} {title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section num="2" icon="⚙️" title="First-party technical cookies">
            <p>These cookies are necessary for the Website to function and do not require consent.</p>
            <CookieTable
              headers={["Cookie name", "Purpose", "Duration"]}
              rows={[
                ["session_id", "User session and e-shop cart management", "Session"],
                ["cookie_consent", "Stores the user's cookie preferences", "12 months"],
                ["XSRF-TOKEN", "CSRF protection (form security)", "Session"],
                ["lang", "Stores the selected language (IT/EN)", "12 months"],
              ]}
            />
          </Section>

          <Section num="3" icon="📊" title="Third-party analytical cookies — Google Analytics 4">
            <p><strong>Google Analytics 4 (GA4)</strong> by Google LLC collects anonymised browsing data for aggregate statistics. IP addresses are anonymised before any processing.</p>
            <CookieTable
              headers={["Cookie name", "Purpose", "Duration"]}
              rows={[
                ["_ga", "Identifies unique users", "2 years"],
                ["_ga_XXXXXXX", "Maintains GA4 session state", "2 years"],
                ["_gid", "Distinguishes users across sessions", "24 hours"],
                ["_gat", "Throttles request rate to Google Analytics", "1 minute"],
              ]}
            />
            <Callout>
              <strong>Legal basis:</strong> legitimate interest (Art. 6.1.f GDPR). Opt out via the cookie panel or{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline font-medium">Google Analytics opt-out →</a>
            </Callout>
          </Section>

          <Section num="4" icon="🚫" title="No advertising profiling cookies">
            <Callout icon="✅">
              The Website <strong>does not use advertising profiling cookies</strong>. No remarketing or commercial targeting is carried out via third-party cookies.
            </Callout>
          </Section>

          <Section num="5" icon="🔧" title="How to manage cookies">
            <p className="font-semibold text-gray-700">Browser settings</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { browser: "Google Chrome", path: "Menu → Settings → Privacy and security → Cookies" },
                { browser: "Mozilla Firefox", path: "Menu → Options → Privacy & Security → Cookies" },
                { browser: "Microsoft Edge", path: "Menu → Settings → Cookies and site permissions" },
                { browser: "Safari (macOS)", path: "Safari → Preferences → Privacy" },
                { browser: "Safari (iOS)", path: "Settings → Safari → Privacy & Security" },
              ].map(({ browser, path }) => (
                <div key={browser} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <p className="font-semibold text-gray-700 text-sm">{browser}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{path}</p>
                </div>
              ))}
            </div>
            <p>Google Analytics opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-medium">tools.google.com/dlpage/gaoptout →</a></p>
          </Section>

          <Section num="6" icon="⚖️" title="Your rights">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="mailto:info@printsolutionsrl.it" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-cyan-200 transition-colors">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium text-cyan-600">info@printsolutionsrl.it</p>
                </div>
              </a>
              <a href="mailto:printsolutionsrl@pec.it" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-cyan-200 transition-colors">
                <span className="text-xl">📮</span>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">PEC</p>
                  <p className="text-sm font-medium text-cyan-600">printsolutionsrl@pec.it</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-500">You may also lodge a complaint with the Italian Data Protection Authority: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">www.garanteprivacy.it</a>.</p>
          </Section>

          <Section num="7" icon="🔄" title="Updates">
            <p>This Cookie Policy may be updated following regulatory changes. Please check this page periodically.</p>
          </Section>

        </div>
      </div>
    </>
  );
}

// ── Export ────────────────────────────────────────────────────────────────

export default async function CookiePage() {
  const locale = await getLocale();
  return locale === "it" ? <CookieIT /> : <CookieEN />;
}
