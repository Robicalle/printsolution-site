'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface ConsultationContextType {
  open: (product?: string) => void;
}

const ConsultationContext = createContext<ConsultationContextType>({ open: () => {} });

export function useConsultation() {
  return useContext(ConsultationContext);
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState('');

  const open = useCallback((p?: string) => {
    setProduct(p || '');
    setIsOpen(true);
  }, []);

  // Intercept all mailto: consultation links globally
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="mailto:"]') as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute('href') || '';
      // Only intercept consultation/info mailto links to info@printsolution
      if (!href.includes('printsolution')) return;
      e.preventDefault();
      e.stopPropagation();
      // Extract product name from subject
      const subjectMatch = href.match(/subject=([^&]*)/);
      let productName = '';
      if (subjectMatch) {
        productName = decodeURIComponent(subjectMatch[1])
          .replace('Richiesta Consulenza ', '')
          .replace('Richiesta Info ', '')
          .replace('Request Info ', '')
          .replace('Free Consultation ', '')
          .replace(/%20/g, ' ');
      }
      open(productName);
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, [open]);

  return (
    <ConsultationContext.Provider value={{ open }}>
      {children}
      {isOpen && <ConsultationModal product={product} onClose={() => setIsOpen(false)} />}
    </ConsultationContext.Provider>
  );
}

// --- CTA Button for client components ---
export function ConsultationCTA({ 
  children, 
  product, 
  className = '' 
}: { 
  children: ReactNode; 
  product?: string; 
  className?: string;
}) {
  const { open } = useConsultation();
  return (
    <button type="button" onClick={() => open(product)} className={className}>
      {children}
    </button>
  );
}

// --- The Modal ---
function ConsultationModal({ product, onClose }: { product: string; onClose: () => void }) {
  const [form, setForm] = useState({
    nome: '',
    azienda: '',
    email: '',
    telefono: '',
    interesse: product,
    messaggio: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email) {
      setError('Nome e email sono obbligatori');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          messaggio: form.messaggio || `Richiesta consulenza gratuita${product ? ` per ${product}` : ''}`,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Errore durante l\'invio. Riprova.');
      }
    } catch {
      setError('Errore di connessione. Riprova.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
      <div 
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ animation: 'fadeInUp 0.2s ease-out' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-dark-800 dark:text-white">Consulenza Gratuita</h2>
              {product && <p className="text-sm text-cyan-500 mt-1">{product}</p>}
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-2">Richiesta inviata!</h3>
            <p className="text-gray-500 mb-6">Ti ricontatteremo il prima possibile.</p>
            <button onClick={onClose} className="btn-primary">Chiudi</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Nome *</label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={form.nome}
                  onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                  placeholder="Il tuo nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Azienda</label>
                <input
                  type="text"
                  value={form.azienda}
                  onChange={e => setForm(f => ({ ...f, azienda: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                  placeholder="Nome azienda"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                  placeholder="email@azienda.it"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Telefono</label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm"
                  placeholder="+39 ..."
                />
              </div>
            </div>
            {product && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Prodotto di interesse</label>
                <input
                  type="text"
                  value={form.interesse}
                  onChange={e => setForm(f => ({ ...f, interesse: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-dark-800 dark:text-white text-sm"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Messaggio <span className="text-gray-400 font-normal">(opzionale)</span></label>
              <textarea
                value={form.messaggio}
                onChange={e => setForm(f => ({ ...f, messaggio: e.target.value }))}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-dark-800 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm resize-none"
                placeholder="Descrivi brevemente le tue esigenze..."
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={sending}
              className="w-full btn-primary text-base !py-3 !rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Invio in corso...
                </span>
              ) : 'Richiedi Consulenza Gratuita'}
            </button>
            <p className="text-xs text-gray-400 text-center">
              I tuoi dati non verranno condivisi con terze parti.
            </p>
          </form>
        )}
      </div>
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
