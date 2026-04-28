import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: "Privacy Policy",
    description:
      locale === "it"
        ? "Informativa sul trattamento dei dati personali di Print Solution S.r.l. ai sensi dell'art. 13 GDPR."
        : "Privacy policy of Print Solution S.r.l. — Personal data processing under GDPR.",
    alternates: { canonical: locale === 'it' ? `https://www.printsolutionsrl.it/privacy` : `https://www.printsolutionsrl.it/en/privacy` },
  };
}

// ── Componenti riutilizzabili ──────────────────────────────────────────────

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-cyan-500 text-white text-sm font-bold flex items-center justify-center shadow-sm">
          {num}
        </span>
        <h3 className="text-xl font-bold text-gray-800 pt-1">{title}</h3>
      </div>
      <div className="pl-13 ml-13 border-l-2 border-gray-100 ml-[52px] pl-6 text-gray-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 inline-block" />
        {title}
      </h4>
      <div className="pl-4 space-y-2">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 sm:w-44 flex-shrink-0">{label}</span>
      <span className="text-gray-700 text-sm">{value}</span>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100">
      {children}
    </span>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 text-sm text-cyan-800 leading-relaxed">
      {children}
    </div>
  );
}

// ── Pagina IT ─────────────────────────────────────────────────────────────

function PrivacyIT() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl py-16 px-4">

          {/* Card intestazione */}
          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">Print Solution S.r.l.</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Titolare del Trattamento</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <InfoRow label="Sede legale" value="Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI)" />
              <InfoRow label="P.IVA / C.F." value="07149250966" />
              <InfoRow label="REA" value="MI – 1939367" />
              <InfoRow label="Email" value={<a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">info@printsolutionsrl.it</a>} />
              <InfoRow label="PEC" value={<a href="mailto:printsolutionsrl@pec.it" className="text-cyan-600 hover:underline">printsolutionsrl@pec.it</a>} />
              <InfoRow label="Sito web" value="www.printsolutionsrl.it" />
              <InfoRow label="Normativa" value={<Pill>GDPR — Reg. UE 2016/679</Pill>} />
              <InfoRow label="Ultimo aggiornamento" value={<Pill>📅 Aprile 2026</Pill>} />
            </div>
          </div>

          {/* Titolo sezioni */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            Informativa sul trattamento dei dati personali
            <span className="flex-1 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
          </h2>

          <Section num="1" title="Ambito di applicazione">
            <p>
              La presente informativa descrive le modalità di raccolta e trattamento dei dati personali
              degli utenti che visitano il sito web <strong>www.printsolutionsrl.it</strong>, utilizzano
              il modulo di contatto, effettuano acquisti tramite l&apos;E-Shop di consumabili, o
              interagiscono con Print Solution S.r.l. nell&apos;ambito di un rapporto commerciale.
            </p>
          </Section>

          <Section num="2" title="Dati raccolti e finalità del trattamento">
            <SubSection title="2.1 Navigazione del Sito">
              <p>Durante la navigazione vengono acquisiti automaticamente:</p>
              <ul className="list-none space-y-1">
                {["Indirizzo IP, tipo di browser, sistema operativo", "Pagine visitate, orari di accesso, durata della sessione", "Dati statistici aggregati tramite Google Analytics 4"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500">
                Base giuridica: legittimo interesse (art. 6.1.f GDPR). Non vengono utilizzati per
                identificare l&apos;utente salvo necessità per accertare responsabilità in caso di
                illeciti informatici.
              </p>
            </SubSection>

            <SubSection title="2.2 Moduli di contatto e richiesta informazioni">
              <p>
                Vengono raccolti: nome, cognome, ragione sociale, email, telefono e contenuto del
                messaggio.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Pill>Base: art. 6.1.b + 6.1.f GDPR</Pill>
                <Pill>Conservazione: 24 mesi</Pill>
              </div>
            </SubSection>

            <SubSection title="2.3 E-Shop consumabili">
              <ul className="list-none space-y-1">
                {[
                  "Dati anagrafici e di fatturazione (nome/ragione sociale, indirizzo, P.IVA)",
                  "Dati di contatto (email, telefono) e indirizzo di spedizione",
                  "Pagamenti: gestiti esclusivamente da Stripe Inc. — Print Solution non memorizza dati delle carte",
                  "Storico ordini",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                <Pill>Base: art. 6.1.b + 6.1.c GDPR</Pill>
                <Pill>Conservazione: 10 anni (obbligo fiscale)</Pill>
              </div>
            </SubSection>

            <SubSection title="2.4 Clienti e prospect B2B">
              <p>
                Trattamento di dati dei referenti aziendali (nome, qualifica, email, telefono) per
                gestione commerciale, assistenza post-vendita e comunicazioni di settore.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Pill>Clienti: legittimo interesse (art. 6.1.f)</Pill>
                <Pill>Prospect: consenso (art. 6.1.a)</Pill>
                <Pill>Conservazione: durata rapporto + 5 anni</Pill>
              </div>
            </SubSection>

            <SubSection title="2.5 Comunicazioni promozionali">
              <p>
                Invio di newsletter previo consenso esplicito o, per clienti esistenti, su base di
                legittimo interesse (art. 130 co. 4 D.Lgs. 196/2003). L&apos;utente può opporsi in
                qualsiasi momento tramite il link di disiscrizione o contattando{" "}
                <a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">
                  info@printsolutionsrl.it
                </a>.
              </p>
            </SubSection>
          </Section>

          <Section num="3" title="Cookie">
            <p>
              Il Sito utilizza cookie tecnici necessari al funzionamento e cookie analitici (Google
              Analytics 4) per l&apos;analisi statistica del traffico. Per l&apos;informativa
              completa:{" "}
              <a href="/it/cookie" className="text-cyan-600 hover:underline font-medium">
                Cookie Policy →
              </a>
            </p>
          </Section>

          <Section num="4" title="Comunicazione dei dati a terzi">
            <p>I dati personali potranno essere comunicati, nei limiti strettamente necessari, a:</p>
            <ul className="list-none space-y-1">
              {[
                "Responsabili del trattamento (art. 28 GDPR): hosting, Stripe Inc., Google LLC, fornitori IT",
                "Consulenti professionali vincolati da obbligo di riservatezza",
                "Autorità pubbliche nei casi previsti dalla legge",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-0.5">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Callout>
              I dati <strong>non vengono venduti né ceduti</strong> a terzi per finalità di marketing
              di soggetti terzi.
            </Callout>
          </Section>

          <Section num="5" title="Trasferimento dei dati extra-UE">
            <p>
              Google LLC e Stripe Inc. possono trattare dati al di fuori dell&apos;UE. I trasferimenti
              avvengono sulla base delle <strong>Clausole Contrattuali Standard</strong> adottate dalla
              Commissione Europea (art. 46 GDPR). I dati operativi ordinari sono conservati su server
              nell&apos;Unione Europea.
            </p>
          </Section>

          <Section num="6" title="Misure di sicurezza">
            <p>
              Print Solution S.r.l. adotta misure tecniche e organizzative adeguate, tra cui:
              connessioni <strong>HTTPS</strong>, controllo degli accessi, backup periodici e procedure
              di gestione degli incidenti di sicurezza (data breach).
            </p>
          </Section>

          <Section num="7" title="Diritti dell'interessato">
            <p>Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {[
                { art: "Art. 15", label: "Accesso ai dati" },
                { art: "Art. 16", label: "Rettifica di dati inesatti" },
                { art: "Art. 17", label: "Cancellazione (salvo obblighi)" },
                { art: "Art. 18", label: "Limitazione del trattamento" },
                { art: "Art. 20", label: "Portabilità dei dati" },
                { art: "Art. 21", label: "Opposizione al trattamento" },
                { art: "Art. 7.3", label: "Revoca del consenso" },
                { art: "Art. 77", label: "Reclamo al Garante" },
              ].map(({ art, label }) => (
                <div key={art} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-xs font-mono text-cyan-600 font-semibold">{art}</span>
                  <span className="text-sm text-gray-700">{label}</span>
                </div>
              ))}
            </div>
            <Callout>
              Richieste via email a{" "}
              <a href="mailto:info@printsolutionsrl.it" className="font-semibold underline">
                info@printsolutionsrl.it
              </a>{" "}
              o PEC a{" "}
              <a href="mailto:printsolutionsrl@pec.it" className="font-semibold underline">
                printsolutionsrl@pec.it
              </a>
              . Risposta entro <strong>30 giorni</strong>. Reclami: Garante Privacy{" "}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline">
                www.garanteprivacy.it
              </a>.
            </Callout>
          </Section>

          <Section num="8" title="Modifiche alla presente informativa">
            <p>
              Il Titolare si riserva di aggiornare la presente informativa in qualsiasi momento. Le
              modifiche sono efficaci dalla data di pubblicazione sul Sito. La data dell&apos;ultimo
              aggiornamento è indicata in intestazione.
            </p>
          </Section>

        </div>
      </div>
    </>
  );
}

// ── Pagina EN ─────────────────────────────────────────────────────────────

function PrivacyEN() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl py-16 px-4">

          <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-gray-800 text-lg">Print Solution S.r.l.</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Data Controller</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <InfoRow label="Registered office" value="Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI), Italy" />
              <InfoRow label="VAT / Tax Code" value="07149250966" />
              <InfoRow label="Email" value={<a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">info@printsolutionsrl.it</a>} />
              <InfoRow label="PEC" value={<a href="mailto:printsolutionsrl@pec.it" className="text-cyan-600 hover:underline">printsolutionsrl@pec.it</a>} />
              <InfoRow label="Regulation" value={<Pill>GDPR — EU Reg. 2016/679</Pill>} />
              <InfoRow label="Last updated" value={<Pill>📅 April 2026</Pill>} />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            Personal Data Processing Policy
            <span className="flex-1 h-px bg-gradient-to-l from-cyan-500 to-transparent" />
          </h2>

          <Section num="1" title="Scope">
            <p>
              This policy describes how personal data is collected and processed for users who visit
              <strong> www.printsolutionsrl.it</strong>, use the contact form, purchase through the
              consumables E-Shop, or interact with Print Solution S.r.l. commercially.
            </p>
          </Section>

          <Section num="2" title="Data collected and purposes">
            <SubSection title="2.1 Website browsing">
              <p>Automatically collected: IP address, browser type, OS, pages visited, session data, and aggregated statistics via Google Analytics 4 (legal basis: legitimate interest, Art. 6.1.f GDPR).</p>
            </SubSection>
            <SubSection title="2.2 Contact forms">
              <p>Name, company, email, phone and message content. Legal basis: Art. 6.1.b + 6.1.f GDPR. Retention: 24 months.</p>
            </SubSection>
            <SubSection title="2.3 Consumables E-Shop">
              <p>Billing/shipping data, contact details, order history. Payments handled exclusively by Stripe Inc. Legal basis: Art. 6.1.b + 6.1.c GDPR. Retention: 10 years (tax law).</p>
            </SubSection>
            <SubSection title="2.4 B2B clients and prospects">
              <p>Contact data of business representatives processed for commercial relations and communications. Legal basis: legitimate interest for clients; consent for prospects. Retention: relationship duration + 5 years.</p>
            </SubSection>
            <SubSection title="2.5 Promotional communications">
              <p>Sent with explicit consent or, for existing clients, on a legitimate interest basis. Opt out at any time via unsubscribe link or by contacting <a href="mailto:info@printsolutionsrl.it" className="text-cyan-600 hover:underline">info@printsolutionsrl.it</a>.</p>
            </SubSection>
          </Section>

          <Section num="3" title="Cookies">
            <p>The Website uses technical cookies and Google Analytics 4. See our <a href="/en/cookie" className="text-cyan-600 hover:underline font-medium">Cookie Policy →</a></p>
          </Section>

          <Section num="4" title="Data disclosure to third parties">
            <p>Data may be shared with: hosting/IT providers, Stripe Inc., Google LLC, professional advisors, and public authorities where required. Data is never sold or transferred for third-party marketing.</p>
          </Section>

          <Section num="5" title="Transfers outside the EU">
            <p>Google LLC and Stripe Inc. may process data outside the EU via <strong>Standard Contractual Clauses</strong> (Art. 46 GDPR). Operational data is stored on EU servers.</p>
          </Section>

          <Section num="6" title="Security measures">
            <p>Appropriate measures including HTTPS, access controls, periodic backups and incident management procedures.</p>
          </Section>

          <Section num="7" title="Your rights">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {[
                { art: "Art. 15", label: "Access your data" },
                { art: "Art. 16", label: "Rectification" },
                { art: "Art. 17", label: "Erasure (subject to law)" },
                { art: "Art. 18", label: "Restriction of processing" },
                { art: "Art. 20", label: "Data portability" },
                { art: "Art. 21", label: "Object to processing" },
                { art: "Art. 7.3", label: "Withdraw consent" },
                { art: "Art. 77", label: "Lodge a complaint" },
              ].map(({ art, label }) => (
                <div key={art} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-xs font-mono text-cyan-600 font-semibold">{art}</span>
                  <span className="text-sm text-gray-700">{label}</span>
                </div>
              ))}
            </div>
            <Callout>
              Contact us at <a href="mailto:info@printsolutionsrl.it" className="font-semibold underline">info@printsolutionsrl.it</a> or <a href="mailto:printsolutionsrl@pec.it" className="font-semibold underline">printsolutionsrl@pec.it</a>. We respond within <strong>30 days</strong>. Complaints: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="underline">www.garanteprivacy.it</a>.
            </Callout>
          </Section>

          <Section num="8" title="Changes to this policy">
            <p>This policy may be updated at any time. Changes take effect upon publication. The last update date is shown at the top of the document.</p>
          </Section>

        </div>
      </div>
    </>
  );
}

// ── Export ────────────────────────────────────────────────────────────────

export default async function PrivacyPage() {
  const locale = await getLocale();
  return locale === "it" ? <PrivacyIT /> : <PrivacyEN />;
}
