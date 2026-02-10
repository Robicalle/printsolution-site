import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400 relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom section-padding pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Print Solution S.r.l."
              width={160}
              height={53}
              className="h-9 w-auto mb-6 brightness-200"
            />
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Distributore italiano di soluzioni digitali per stampa di packaging, etichette e consumabili.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { href: "https://www.facebook.com/printsolutionsrl", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { href: "https://www.linkedin.com/company/print-solution-srl", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { href: "https://www.youtube.com/@printsolutionsrl", label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Soluzioni */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Soluzioni</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/soluzioni/packaging" className="hover:text-white transition-colors duration-200">Packaging</Link></li>
              <li><Link href="/soluzioni/etichette" className="hover:text-white transition-colors duration-200">Etichette</Link></li>
              <li><Link href="/soluzioni/consumabili" className="hover:text-white transition-colors duration-200">Consumabili</Link></li>
            </ul>
          </div>

          {/* Prodotti */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Prodotti</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/prodotti/greenbox-evo" className="hover:text-white transition-colors duration-200">GreenBox EVO</Link></li>
              <li><Link href="/prodotti/edm-650x" className="hover:text-white transition-colors duration-200">EDM-650X</Link></li>
              <li><Link href="/prodotti/aurumpress" className="hover:text-white transition-colors duration-200">AurumPress</Link></li>
              <li><Link href="/prodotti/ab2500" className="hover:text-white transition-colors duration-200">Anypack AB2500</Link></li>
              <li><Link href="/promo-usato" className="hover:text-white transition-colors duration-200 text-orange-400">Promo & Usato</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contatti</h3>
            <address className="not-italic text-sm space-y-3 text-gray-500">
              <p>Via Pisa 200, int. 23</p>
              <p>20099 Sesto San Giovanni (MI)</p>
              <div className="pt-2 space-y-2">
                <p>
                  <a href="tel:+390236527093" className="hover:text-white transition-colors duration-200">
                    +39 02 3652 7093
                  </a>
                </p>
                <p>
                  <a href="mailto:info@printsolutionsrl.it" className="hover:text-white transition-colors duration-200">
                    info@printsolutionsrl.it
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Print Solution S.r.l. — Tutti i diritti riservati.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
