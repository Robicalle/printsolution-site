import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stampa Digitale su Cartone Ondulato: Vantaggi vs Flessografia",
  description: "Confronto tra stampa digitale single-pass e flessografia tradizionale per il packaging in cartone ondulato. Costi, qualità, flessibilità e sostenibilità.",
};

export default function ArticleDigitaleVsFlessoPage() {
  return (
    <>
      <PageHero
        title="Stampa Digitale vs Flessografia"
        subtitle="Perché la stampa digitale single-pass sta rivoluzionando il packaging in cartone ondulato"
        breadcrumb="Blog"
      />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-yellow-600">Packaging</span>
            <span className="text-gray-400 text-sm">1 Febbraio 2026</span>
            <span className="text-gray-400 text-sm">· 7 min di lettura</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">La Sfida: Digitale vs Analogico</h2>
            <p>
              Per decenni la <strong>flessografia</strong> è stata l&apos;unica opzione per stampare su cartone ondulato
              in volumi industriali. Oggi la <strong>stampa digitale single-pass</strong> - come quella offerta
              dall&apos;EDM-650X - sta cambiando le regole del gioco. Vediamo perché.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Flessografia: Pro e Contro</h2>
            <p>La flessografia usa cliché (lastre) flessibili per trasferire l&apos;inchiostro sul cartone.</p>
            <p><strong>Vantaggi:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Costo/pezzo molto basso su tirature enormi (100.000+ pezzi)</li>
              <li>Velocità elevata su lotti uniformi</li>
              <li>Tecnologia consolidata e ampiamente diffusa</li>
            </ul>
            <p className="mt-4"><strong>Svantaggi:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Costi fissi elevati: ogni cliché costa centinaia di euro</li>
              <li>Setup lungo: ore per il cambio lavoro</li>
              <li>Spreco materiale: centinaia di fogli per avviamento</li>
              <li>Nessuna flessibilità: ogni variante richiede un nuovo cliché</li>
              <li>Qualità limitata: risoluzione bassa, difficoltà con sfumature e foto</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Stampa Digitale Single-Pass: La Rivoluzione</h2>
            <p>
              La tecnologia single-pass utilizza testine inkjet fisse (come le HP Pagewide dell&apos;EDM-650X)
              che stampano l&apos;intera larghezza in un&apos;unica passata, senza muovere la testina avanti e indietro.
            </p>
            <p><strong>Vantaggi:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Zero cliché</strong> - nessun costo fisso, conveniente anche su 10 pezzi</li>
              <li><strong>Cambio lavoro istantaneo</strong> - da un file all&apos;altro in secondi</li>
              <li><strong>Qualità fotografica</strong> - 1200×1200 dpi, sfumature, foto, testi nitidi</li>
              <li><strong>Dati variabili</strong> - barcode, QR code, numerazione in linea</li>
              <li><strong>Inchiostri a base acqua</strong> — certificati per contatto alimentare</li>
              <li><strong>Zero spreco avviamento</strong> - il primo foglio è già buono</li>
              <li><strong>Sostenibilità</strong> - niente solventi, niente cliché da smaltire</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Confronto Diretto</h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 font-bold text-dark-800">Aspetto</th>
                    <th className="text-left py-3 px-4 font-bold text-dark-800">Digitale</th>
                    <th className="text-left py-3 pl-4 font-bold text-dark-800">Flessografia</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Costi fissi</td><td className="py-2 px-4 text-green-600">Zero</td><td className="py-2 pl-4 text-red-500">Cliché costosi</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Break-even</td><td className="py-2 px-4">Da 1 pezzo</td><td className="py-2 pl-4">Da 10.000+ pezzi</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Risoluzione</td><td className="py-2 px-4">1200 dpi</td><td className="py-2 pl-4">~100 lpi</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Setup</td><td className="py-2 px-4">Secondi</td><td className="py-2 pl-4">Ore</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Dati variabili</td><td className="py-2 px-4 text-green-600">Sì</td><td className="py-2 pl-4 text-red-500">No</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Contatto alimentare</td><td className="py-2 px-4 text-green-600">Inchiostri a base acqua</td><td className="py-2 pl-4">Dipende</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Spreco avviamento</td><td className="py-2 px-4 text-green-600">Zero</td><td className="py-2 pl-4 text-red-500">Centinaia fogli</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Quando Scegliere il Digitale?</h2>
            <p>La stampa digitale è la scelta giusta quando:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>I lotti sono piccoli o medi (da 1 a 10.000 pezzi)</li>
              <li>Hai molte varianti grafiche (etichette private label, packaging personalizzato)</li>
              <li>Hai bisogno di dati variabili (barcode, QR, numerazione)</li>
              <li>La qualità fotografica è importante</li>
              <li>Lavori nel settore alimentare e hai bisogno di inchiostri certificati</li>
              <li>Vuoi ridurre tempi di consegna e stock</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">L&apos;EDM-650X: Il Riferimento</h2>
            <p>
              L&apos;EDM-650X, distribuito in Italia da Print Solution, è una stampante single-pass con testine
              HP Pagewide che copre una gamma da 215 mm a 2500 mm di larghezza stampa. Velocità fino a
              30 m/min, spessore fino a 80 mm (stampa diretta su scatole pre-fustellate), inchiostri
              pigmentati a base acqua certificati per contatto alimentare.
            </p>
            <p>
              Con 7 configurazioni disponibili (da 1 a 8 testine), la macchina cresce con il tuo business.
            </p>

            <h2 className="text-2xl font-bold text-dark-800 mt-10 mb-4">Conclusione</h2>
            <p>
              La flessografia resta competitiva sulle grandi tirature uniformi, ma la stampa digitale
              single-pass ha aperto un mercato completamente nuovo: quello dei piccoli lotti personalizzati,
              dei dati variabili e della qualità fotografica su cartone ondulato. Se il tuo business
              richiede flessibilità, è il momento di valutare il digitale.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/blog" className="text-cyan-500 font-semibold text-sm hover:underline">← Torna al Blog</Link>
            <Link href="/contatti" className="btn-primary text-sm">Richiedi Info sull&apos;EDM-650X</Link>
          </div>
        </div>
      </article>
    </>
  );
}
