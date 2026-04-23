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

            <table className="w-full text-sm border border-gray-200 rounded mb-8">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700 w-40">Titolare</td>
                  <td className="py-2 px-4">Print Solution S.r.l.</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">Sede legale</td>
                  <td className="py-2 px-4">Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">P.IVA / C.F.</td>
                  <td className="py-2 px-4">07149250966</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">REA</td>
                  <td className="py-2 px-4">MI – 1939367</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">Email</td>
                  <td className="py-2 px-4"><a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">PEC</td>
                  <td className="py-2 px-4"><a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-4 font-semibold text-gray-700">Sito web</td>
                  <td className="py-2 px-4">www.printsolutionsrl.it</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold text-gray-700">Ultimo aggiornamento</td>
                  <td className="py-2 px-4">Aprile 2026</td>
                </tr>
              </tbody>
            </table>

            <h3>1. Ambito di applicazione</h3>
            <p>
              La presente informativa descrive le modalità di raccolta e trattamento dei dati personali
              degli utenti che visitano il sito web www.printsolutionsrl.it (il &quot;Sito&quot;),
              utilizzano il modulo di contatto, effettuano acquisti tramite l&apos;E-Shop di consumabili,
              o interagiscono con Print Solution S.r.l. nell&apos;ambito di un rapporto commerciale.
            </p>

            <h3>2. Dati raccolti e finalità del trattamento</h3>

            <h4>2.1 Navigazione del Sito</h4>
            <p>
              Durante la navigazione vengono acquisiti automaticamente alcuni dati tecnici trasmessi dal browser:
            </p>
            <ul>
              <li>Indirizzo IP, tipo di browser, sistema operativo</li>
              <li>Pagine visitate, orari di accesso, durata della sessione</li>
              <li>Dati statistici aggregati tramite Google Analytics 4 (base giuridica: legittimo interesse ex art. 6.1.f GDPR)</li>
            </ul>
            <p>
              Questi dati sono utilizzati per garantire il corretto funzionamento del Sito, analizzare
              il traffico in forma aggregata e migliorare l&apos;esperienza utente. Non vengono
              utilizzati per identificare l&apos;utente se non in caso di necessità per accertare
              responsabilità in caso di illeciti informatici.
            </p>

            <h4>2.2 Moduli di contatto e richiesta informazioni</h4>
            <p>
              Quando l&apos;utente compila un modulo di contatto o invia una email a
              info@printsolutionsrl.it, vengono raccolti: nome, cognome, ragione sociale,
              indirizzo email, numero di telefono e contenuto del messaggio.
            </p>
            <p>
              <strong>Finalità:</strong> rispondere alla richiesta e, ove pertinente, fornire preventivi
              o informazioni commerciali.<br />
              <strong>Base giuridica:</strong> misure precontrattuali (art. 6.1.b GDPR) e legittimo
              interesse (art. 6.1.f GDPR).<br />
              <strong>Conservazione:</strong> 24 mesi dalla data di ricezione, salvo necessità legali
              o contrattuali.
            </p>

            <h4>2.3 E-Shop consumabili</h4>
            <p>Per gli acquisti effettuati sull&apos;E-Shop vengono raccolti:</p>
            <ul>
              <li>Dati anagrafici e di fatturazione (nome/ragione sociale, indirizzo, P.IVA)</li>
              <li>Dati di contatto (email, telefono)</li>
              <li>Indirizzo di spedizione</li>
              <li>
                Dati di pagamento: gestiti esclusivamente da Stripe Inc. — Print Solution S.r.l.
                non memorizza i dati delle carte di credito
              </li>
              <li>Storico ordini</li>
            </ul>
            <p>
              <strong>Finalità:</strong> esecuzione del contratto di vendita, adempimento obblighi
              fiscali e contabili, gestione resi e garanzie.<br />
              <strong>Base giuridica:</strong> esecuzione del contratto (art. 6.1.b) e obbligo legale
              (art. 6.1.c GDPR).<br />
              <strong>Conservazione:</strong> 10 anni dalla data dell&apos;operazione commerciale
              (obbligo normativo fiscale).
            </p>

            <h4>2.4 Clienti e prospect B2B</h4>
            <p>
              Nell&apos;ambito dell&apos;attività commerciale vengono trattati dati dei referenti
              aziendali di clienti e potenziali clienti (nome, cognome, qualifica, email aziendale,
              telefono). Tali dati sono trattati per:
            </p>
            <ul>
              <li>Gestione delle relazioni commerciali e assistenza post-vendita</li>
              <li>Invio di comunicazioni commerciali relative a prodotti, promozioni e novità del settore</li>
              <li>Gestione del portale di assistenza tecnica</li>
            </ul>
            <p>
              <strong>Base giuridica:</strong> legittimo interesse (art. 6.1.f GDPR) per clienti
              attivi; consenso (art. 6.1.a) per prospect.<br />
              <strong>Conservazione:</strong> per tutta la durata del rapporto commerciale e per i 5
              anni successivi alla sua cessazione.
            </p>

            <h4>2.5 Comunicazioni promozionali</h4>
            <p>
              L&apos;invio di newsletter e comunicazioni commerciali avviene previo consenso esplicito
              o, per i clienti esistenti, sulla base del legittimo interesse (art. 130 co. 4 D.Lgs.
              196/2003 — Codice Privacy). L&apos;utente può opporsi all&apos;invio in qualsiasi
              momento tramite il link di disiscrizione presente in ogni comunicazione o contattando{" "}
              <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>.
            </p>

            <h3>3. Cookie</h3>
            <p>
              Il Sito utilizza cookie tecnici necessari al funzionamento e cookie analitici (Google
              Analytics 4) per l&apos;analisi statistica del traffico. Per l&apos;informativa
              completa sull&apos;uso dei cookie si rimanda alla{" "}
              <a href="/it/cookie">Cookie Policy</a>.
            </p>

            <h3>4. Comunicazione dei dati a terzi</h3>
            <p>
              I dati personali potranno essere comunicati, nei limiti strettamente necessari, a:
            </p>
            <ul>
              <li>
                Responsabili del trattamento nominati ex art. 28 GDPR: provider di hosting,
                gestionale interno, Stripe Inc. (pagamenti), Google LLC (analytics), fornitori
                di servizi IT
              </li>
              <li>
                Consulenti professionali (commercialista, consulente del lavoro, legale) vincolati
                da obbligo di riservatezza
              </li>
              <li>Autorità pubbliche nei casi previsti dalla legge</li>
            </ul>
            <p>
              I dati non vengono venduti né ceduti a terzi per finalità di marketing di soggetti terzi.
            </p>

            <h3>5. Trasferimento dei dati extra-UE</h3>
            <p>
              Alcuni fornitori di servizi (Google LLC per Analytics, Stripe Inc. per i pagamenti)
              possono trattare dati al di fuori dell&apos;Unione Europea. In tali casi il
              trasferimento avviene sulla base delle Clausole Contrattuali Standard adottate dalla
              Commissione Europea (art. 46 GDPR) o di altre garanzie adeguate. I dati relativi
              all&apos;operatività aziendale ordinaria sono conservati su server ubicati
              nell&apos;Unione Europea.
            </p>

            <h3>6. Misure di sicurezza</h3>
            <p>
              Print Solution S.r.l. adotta misure tecniche e organizzative adeguate al rischio per
              proteggere i dati personali da accessi non autorizzati, perdita, distruzione o
              divulgazione, tra cui: connessioni HTTPS, controllo degli accessi, backup periodici,
              procedure di gestione degli incidenti di sicurezza (data breach).
            </p>

            <h3>7. Diritti dell&apos;interessato</h3>
            <p>Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di:</p>
            <ul>
              <li>Accedere ai propri dati personali trattati dal Titolare (art. 15)</li>
              <li>Ottenere la rettifica di dati inesatti o incompleti (art. 16)</li>
              <li>Ottenere la cancellazione dei dati (art. 17), salvo obblighi di legge</li>
              <li>Ottenere la limitazione del trattamento (art. 18)</li>
              <li>Ricevere i dati in formato strutturato — portabilità (art. 20)</li>
              <li>Opporsi al trattamento per legittimo interesse (art. 21)</li>
              <li>
                Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del
                trattamento precedente (art. 7.3)
              </li>
              <li>
                Proporre reclamo al Garante per la protezione dei dati personali (
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                  www.garanteprivacy.it
                </a>
                ) ai sensi dell&apos;art. 77 GDPR
              </li>
            </ul>
            <p>
              Le richieste possono essere inviate a:{" "}
              <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a> oppure a mezzo
              PEC a: <a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a>.
              Il Titolare risponde entro 30 giorni dalla ricezione della richiesta.
            </p>

            <h3>8. Modifiche alla presente informativa</h3>
            <p>
              Il Titolare si riserva di aggiornare la presente informativa in qualsiasi momento. Le
              modifiche sono efficaci dalla data di pubblicazione sul Sito. Si consiglia di
              consultare periodicamente questa pagina. La data dell&apos;ultimo aggiornamento è
              indicata in apertura del documento.
            </p>

          </div>
        </section>
      </>
    );
  }

  // English version
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-padding">
        <div className="container-custom max-w-3xl prose prose-gray">

          <h2>Personal Data Processing Policy</h2>
          <p className="text-sm text-gray-500">
            Pursuant to Art. 13 of EU Regulation 2016/679 (GDPR)
          </p>

          <table className="w-full text-sm border border-gray-200 rounded mb-8">
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700 w-40">Data Controller</td>
                <td className="py-2 px-4">Print Solution S.r.l.</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">Registered office</td>
                <td className="py-2 px-4">Via Pisa 200, int. 23 — 20099 Sesto San Giovanni (MI), Italy</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">VAT / Tax Code</td>
                <td className="py-2 px-4">07149250966</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">Email</td>
                <td className="py-2 px-4"><a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2 px-4 font-semibold text-gray-700">PEC</td>
                <td className="py-2 px-4"><a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a></td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-semibold text-gray-700">Last updated</td>
                <td className="py-2 px-4">April 2026</td>
              </tr>
            </tbody>
          </table>

          <h3>1. Scope</h3>
          <p>
            This policy describes how personal data is collected and processed for users who visit
            www.printsolutionsrl.it, use the contact form, make purchases through the consumables
            E-Shop, or interact with Print Solution S.r.l. in a commercial relationship.
          </p>

          <h3>2. Data collected and purposes of processing</h3>

          <h4>2.1 Website browsing</h4>
          <p>During browsing, the following technical data is automatically collected:</p>
          <ul>
            <li>IP address, browser type, operating system</li>
            <li>Pages visited, access times, session duration</li>
            <li>Aggregated statistical data via Google Analytics 4 (legal basis: legitimate interest under Art. 6.1.f GDPR)</li>
          </ul>

          <h4>2.2 Contact forms</h4>
          <p>
            When submitting a contact form or emailing info@printsolutionsrl.it, the following
            data is collected: name, surname, company name, email address, phone number and message
            content.
          </p>
          <p>
            <strong>Legal basis:</strong> pre-contractual measures (Art. 6.1.b GDPR) and legitimate
            interest (Art. 6.1.f GDPR).<br />
            <strong>Retention:</strong> 24 months from receipt, unless legal requirements apply.
          </p>

          <h4>2.3 Consumables E-Shop</h4>
          <p>For purchases made through the E-Shop, the following data is collected:</p>
          <ul>
            <li>Billing details (name/company, address, VAT number)</li>
            <li>Contact details (email, phone)</li>
            <li>Shipping address</li>
            <li>Payment data: processed exclusively by Stripe Inc. — Print Solution S.r.l. does not store card details</li>
            <li>Order history</li>
          </ul>
          <p>
            <strong>Legal basis:</strong> contract performance (Art. 6.1.b) and legal obligation
            (Art. 6.1.c GDPR).<br />
            <strong>Retention:</strong> 10 years from the date of the commercial transaction (tax law requirement).
          </p>

          <h4>2.4 B2B clients and prospects</h4>
          <p>
            In the context of commercial activities, contact data of business clients and prospects
            is processed (name, role, business email, phone) for relationship management, commercial
            communications and technical support.
          </p>
          <p>
            <strong>Legal basis:</strong> legitimate interest (Art. 6.1.f GDPR) for active clients;
            consent (Art. 6.1.a) for prospects.<br />
            <strong>Retention:</strong> for the duration of the commercial relationship and for 5
            years after its termination.
          </p>

          <h4>2.5 Promotional communications</h4>
          <p>
            Newsletters and commercial communications are sent with explicit consent or, for existing
            clients, based on legitimate interest. You may opt out at any time via the unsubscribe
            link or by contacting{" "}
            <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a>.
          </p>

          <h3>3. Cookies</h3>
          <p>
            The Website uses technical cookies and Google Analytics 4 for statistical analysis.
            For full details, please refer to our <a href="/en/cookie">Cookie Policy</a>.
          </p>

          <h3>4. Data disclosure to third parties</h3>
          <p>Personal data may be disclosed to:</p>
          <ul>
            <li>Data processors under Art. 28 GDPR: hosting providers, Stripe Inc. (payments), Google LLC (analytics), IT service providers</li>
            <li>Professional advisors bound by confidentiality obligations</li>
            <li>Public authorities where required by law</li>
          </ul>
          <p>Data is not sold or transferred to third parties for their marketing purposes.</p>

          <h3>5. Transfers outside the EU</h3>
          <p>
            Some service providers (Google LLC, Stripe Inc.) may process data outside the EU.
            Such transfers take place based on Standard Contractual Clauses adopted by the European
            Commission (Art. 46 GDPR).
          </p>

          <h3>6. Security measures</h3>
          <p>
            Print Solution S.r.l. implements appropriate technical and organisational measures
            including HTTPS connections, access controls, periodic backups and incident management
            procedures.
          </p>

          <h3>7. Your rights</h3>
          <p>Under Articles 15–22 of the GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data (Art. 15)</li>
            <li>Rectification of inaccurate data (Art. 16)</li>
            <li>Erasure of data (Art. 17), subject to legal obligations</li>
            <li>Restriction of processing (Art. 18)</li>
            <li>Data portability (Art. 20)</li>
            <li>Object to processing based on legitimate interest (Art. 21)</li>
            <li>Withdraw consent at any time without affecting prior lawful processing (Art. 7.3)</li>
            <li>
              Lodge a complaint with the Italian Data Protection Authority (
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                www.garanteprivacy.it
              </a>
              )
            </li>
          </ul>
          <p>
            Requests may be sent to{" "}
            <a href="mailto:info@printsolutionsrl.it">info@printsolutionsrl.it</a> or by certified
            email to <a href="mailto:printsolutionsrl@pec.it">printsolutionsrl@pec.it</a>.
            We will respond within 30 days.
          </p>

          <h3>8. Changes to this policy</h3>
          <p>
            This policy may be updated at any time. Changes take effect upon publication on the
            Website. Please check this page periodically.
          </p>

        </div>
      </section>
    </>
  );
}
