'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useConsent, ConsentState } from './ConsentManager';
import { X, Settings, Shield, BarChart3, Megaphone } from 'lucide-react';

export default function CookieBanner() {
  const { consent, updateConsent } = useConsent();
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Show banner only if no consent stored
    if (consent === null) {
      setVisible(true);
    }
  }, [consent]);

  const acceptAll = () => {
    const fullConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    updateConsent(fullConsent);
    setVisible(false);
  };

  const rejectAll = () => {
    const minimalConsent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    updateConsent(minimalConsent);
    setVisible(false);
  };

  const savePreferences = () => {
    updateConsent(preferences);
    setVisible(false);
    setShowPreferences(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setShowPreferences(false)} />
      
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl animate-slide-up">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6">
          {!showPreferences ? (
            // Simple banner
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-500" />
                  Rispettiamo la tua privacy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Utilizziamo cookie tecnici necessari e, previo consenso, cookie analitici e di marketing per migliorare la tua esperienza.
                  Consulta la nostra{' '}
                  <Link href="/cookie" className="text-cyan-500 underline hover:text-cyan-400">
                    Cookie Policy
                  </Link>
                  {' '}e{' '}
                  <Link href="/privacy" className="text-cyan-500 underline hover:text-cyan-400">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-4 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personalizza
                </button>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Solo necessari
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 text-sm rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          ) : (
            // Preferences panel
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Settings className="w-6 h-6 text-cyan-500" />
                  Gestisci preferenze cookie
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookie necessari</h4>
                        <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                          Sempre attivi
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Essenziali per il funzionamento del sito (autenticazione, sicurezza, preferenze lingua).
                        Non possono essere disabilitati.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-green-500 opacity-50 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookie analitici</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ci aiutano a capire come utilizzi il sito per migliorare l'esperienza utente.
                        Include: Google Analytics, Microsoft Clarity, Pirsch.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Marketing cookies */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-cyan-300 dark:hover:border-cyan-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Megaphone className="w-5 h-5 text-purple-500" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Cookie di marketing</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Utilizzati per mostrarti contenuti e pubblicità personalizzati in base ai tuoi interessi.
                        Include: Facebook Pixel, retargeting.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Rifiuta tutto
                </button>
                <button
                  onClick={savePreferences}
                  className="px-6 py-2.5 text-sm rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Salva preferenze
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
