'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-4 py-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-sm text-gray-300 flex-1 text-center sm:text-left">
          Questo sito utilizza cookie tecnici per garantire il corretto funzionamento.
          Per maggiori informazioni consulta la nostra{' '}
          <Link href="/cookie" className="text-cyan-400 underline hover:text-cyan-300">
            Cookie Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
