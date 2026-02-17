import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Condizioni di Vendita | Print Solution",
  description: "Condizioni generali di vendita e uso del sito Print Solution S.r.l.",
};

export default async function CondizioniPage() {
  const locale = await getLocale();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-20 px-4">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{locale === 'it' ? 'Condizioni di Vendita' : 'Terms of Sale'}</h1>
        <p className="text-sm text-gray-400 mb-10">{locale === 'it' ? 'Data di entrata in vigore: 15 gennaio 2024' : 'Effective date: January 15, 2024'}</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 1 – Ambito di applicazione</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>1.1</strong> Dati del titolare del Sito: Printsolution S.r.l. (Titolare del Sito). Sito al quale si applicano le presenti condizioni d&apos;uso: www.printsolution.it</p>
              <p><strong>1.2</strong> Il presente documento (Condizioni d&apos;Uso) disciplina le condizioni d&apos;uso del presente Sito da parte dell&apos;utente, vale a dire la persona fisica che interagisce con il Sito (Utente).</p>
              <p><strong>1.3</strong> Il Titolare del Sito può modificare le Condizioni d&apos;Uso in qualsiasi momento. Le modifiche saranno valide ed efficaci appena pubblicate online.</p>
              <p><strong>1.4</strong> L&apos;accesso al Sito presuppone l&apos;accettazione delle Condizioni d&apos;Uso.</p>
              <p><strong>1.5</strong> L&apos;Utente è invitato ad accedere con regolarità alle Condizioni d&apos;Uso per visionare la versione più aggiornata del presente documento.</p>
              <p><strong>1.6</strong> L&apos;insieme di qualsiasi elemento del Sito è proprietà del Titolare del Sito o di terzi. Salvo specifico consenso scritto del Titolare del Sito, è proibito riprodurre, integralmente o parzialmente e mediante qualsivoglia procedimento, distribuire, pubblicare, trasmettere, modificare o vendere tutto o parte del contenuto del Sito.</p>
              <p><strong>1.7</strong> Il Titolare del Sito non potrà in alcun caso essere ritenuta responsabile nei confronti Suoi o di terzi per alcun danno indiretto, incidentale, speciale o consequenziale. È compresa, a titolo esemplificativo, qualsiasi perdita di guadagno o altra perdita indiretta risultante dall&apos;utilizzo del Sito o dall&apos;incapacità di utilizzo. Il Titolare del Sito non può garantire né affermare: (i) che il Sito è esente da virus o programmi che possano danneggiare i dati; (ii) che le informazioni contenute nel Sito siano esatte, complete e aggiornate.</p>
              <p><strong>1.8</strong> Il presente documento disciplina integralmente il rapporto tra Lei e il Titolare del Sito. Sono in ogni caso fatti salvi i diritti e gli obblighi previsti dalla legge di volta in volta applicabile.</p>
              <p><strong>1.9</strong> L&apos;utente si impegna a non utilizzare il Sito per scopi illeciti o proibiti dalle presenti condizioni. L&apos;utente è responsabile di qualsiasi azione intrapresa sul sito.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 2 – Proprietà intellettuale</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>2.1</strong> Qualsiasi materiale presente sul Sito è coperto da diritto d&apos;autore ai sensi della legge 633/1941. Pertanto, salvo diverso accordo scritto con il Titolare del Sito oppure salvo diversamente indicato sul Sito, è fatto divieto all&apos;Utente di copiare, diffondere, comunicare, cedere, modificare, in tutto o in parte, per qualsiasi ragione e in qualsiasi forma, il materiale presente sul Sito. Il divieto di riproduzione è esteso anche al layout del Sito, alla grafica, al design e alla modalità di presentazione delle pagine web.</p>
              <p><strong>2.2</strong> È fatto divieto all&apos;Utente di utilizzare nomi a dominio simili a quelli del Sito o che possano ingenerare confusione tra gli utenti.</p>
              <p><strong>2.3</strong> Il divieto di cui all&apos;articolo 2.1 è riferito in particolare a: Fotografie, Fotografie e articoli, eBooks o qualsiasi altro materiale scaricabile, Video.</p>
              <p><strong>2.4</strong> I marchi e i segni distintivi presenti sul Sito sono di proprietà del Titolare del Sito oppure di terzi. Pertanto, è fatto divieto all&apos;Utente di utilizzare, riprodurre, modificare, in qualsiasi modo e per qualsiasi finalità (anche non economica), questi marchi e segni distintivi, salvo consenso scritto del Titolare del Sito o del terzo titolare del marchio o segno distintivo.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 3 – Uso del Sito e responsabilità dell&apos;Utente</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>3.1</strong> L&apos;Utente può interagire con il Sito e con le sue funzioni solo per scopi leciti, senza arrecare danno al Titolare del Sito o a terzi.</p>
              <p><strong>3.2</strong> L&apos;Utente è personalmente responsabile per l&apos;uso del Sito, nonché per qualsiasi informazione, messaggio o documento trasmesso al Titolare del Sito o a terzi attraverso il Sito.</p>
              <p><strong>3.3</strong> È fatto divieto all&apos;Utente di aggirare, in qualsiasi modo, qualsiasi forma di protezione del Sito.</p>
              <p><strong>3.4</strong> Il Titolare del Sito si riserva la facoltà di sospendere (anche a tempo indeterminato) o di chiudere l&apos;account qualora ritenga che l&apos;Utente abbia utilizzato il Sito in violazione della normativa di volta in volta applicabile oppure che abbia arrecato o tentato di arrecare danni al Titolare del Sito o a terzi.</p>
              <p><strong>3.5</strong> Sul Sito non è presente un forum di discussione. Pertanto, l&apos;utente che intende condividere materiale può inviarlo al Titolare del Sito. Il Titolare del Sito si riserva la facoltà di pubblicare il materiale sul Sito e/o di condividerlo con qualsiasi terzo. L&apos;Utente rinuncia a qualsiasi diritto e/o pretesa sul materiale inviato al Titolare del Sito.</p>
              <p><strong>3.6</strong> Sul Sito sono presenti link a siti esterni. Il Titolare del Sito non è responsabile per il contenuto di questi siti e per qualsiasi danno o pregiudizio che l&apos;Utente possa aver subìto dall&apos;interazione con essi.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 4 – Esclusione di responsabilità del Titolare del Sito</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>4.1</strong> Il Titolare del Sito declina ogni responsabilità per qualsiasi eventuale danno derivante da inaccessibilità al Sito, anche temporanea, e per danni causati da virus, informazioni o dati errati/mancanti, cancellazione del contenuto, qualsiasi problemi di rete o riconducibile al provider di rete. Il Titolare del Sito declina ogni responsabilità per qualsiasi danno o pregiudizio che l&apos;Utente abbia potuto subire da qualsiasi materiale scaricato tramite il Sito.</p>
              <p><strong>4.2</strong> Il Titolare del Sito ha adottato ogni precauzione standard per pubblicare sul Sito informazioni veritiere. Ciò posto, il Titolare del Sito non presta alcuna garanzia circa l&apos;accuratezza di queste informazioni. L&apos;Utente è invitato a comunicare al Titolare del Sito la presenza di eventuali informazioni errate o mancanti.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 5 – Trattamento dei dati personali e Cookie</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>5.1</strong> Qualsiasi informazione personale dell&apos;Utente è trattata in conformità al Regolamento 679/2016 (GDPR) e alle indicazioni del Garante Privacy.</p>
              <p><strong>5.2</strong> L&apos;utente può visionare la modalità di trattamento dei dati personali accedendo alla <a href="/privacy" className="text-cyan-500 hover:underline">privacy policy</a> pubblicata sul Sito.</p>
              <p><strong>5.3</strong> La modalità di trattamento dei cookie è visionabile accedendo alla <a href="/cookie" className="text-cyan-500 hover:underline">cookie policy</a> pubblicata sul Sito.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 6 – Legge applicabile e Foro competente</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>6.1</strong> La legge applicabile alle presenti Condizioni d&apos;Uso è quella italiana.</p>
              <p><strong>6.2</strong> Per qualsiasi controversia derivante dalla applicazione e/o interpretazione delle presenti Condizioni d&apos;Uso è esclusivamente competente il Foro dove ha sede il Titolare del Sito. Se l&apos;Utente agisce in qualità di consumatore ai sensi dell&apos;art. 3 del Codice del Consumo, il Foro competente è quello ove ha residenza o domicilio l&apos;Utente.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 7 – Recensioni</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p><strong>7.1</strong> Ai sensi di quanto previsto dal Decreto Legislativo No. 26 del 7 marzo 2023, il Sito permette la pubblicazione di recensioni da parte degli utenti. Il Titolare del Sito non garantisce che le recensioni pubblicate provengano sempre da consumatori che hanno effettivamente acquistato o utilizzato il prodotto o servizio.</p>
              <p><strong>7.2</strong> Il tool per pubblicare le recensioni è Trustpilot, di Trustpilot A/S.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Art. 8 – Contatti</h2>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>È possibile contattare il Titolare del Sito ai recapiti indicati nella pagina <a href="/contatti" className="text-cyan-500 hover:underline">Contatti</a>.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
