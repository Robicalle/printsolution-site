import Link from "next/link";

// not-found di segmento per gli articoli del blog.
// La presenza di questo file fa sì che notFound() renda il 404 di questo
// segmento (ereditando il layout [locale]) invece di risalire al root.
export default function BlogPostNotFound() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-2xl text-center py-16">
        <p className="text-cyan-500 text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-dark-800 mb-4">
          Articolo non trovato
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          L&apos;articolo che stai cercando non esiste o è stato spostato.
          Dai un&apos;occhiata agli altri approfondimenti del nostro blog.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-400 transition-colors"
          >
            Tutti gli articoli
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-dark-800 font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
