import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="it">
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="text-center px-6 py-20 max-w-xl mx-auto">
          <p className="text-cyan-400 text-7xl font-bold mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Pagina non trovata
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            La pagina che stai cercando non esiste o è stata spostata.
            Prova a tornare alla homepage o visita una delle nostre sezioni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-400 transition-colors"
            >
              Homepage
            </Link>
            <Link
              href="/prodotti"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Prodotti
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Contatti
            </Link>
          </div>
          <p className="mt-12 text-sm text-gray-500">
            Print Solution S.r.l. — Soluzioni Digitali per Stampa e Packaging
          </p>
        </div>
      </body>
    </html>
  );
}
