'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  consent: ConsentState | null;
  updateConsent: (newConsent: ConsentState) => void;
  resetConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    // Load consent from localStorage
    const stored = localStorage.getItem('cookie-consent-v2');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsent(parsed);
        applyConsent(parsed);
      } catch (e) {
        console.error('Failed to parse consent:', e);
      }
    } else {
      // Default: deny all except necessary
      const defaultConsent: ConsentState = {
        necessary: true,
        analytics: false,
        marketing: false,
      };
      applyConsent(defaultConsent);
    }
  }, []);

  const updateConsent = (newConsent: ConsentState) => {
    setConsent(newConsent);
    localStorage.setItem('cookie-consent-v2', JSON.stringify(newConsent));
    localStorage.setItem('cookie-consent-timestamp', new Date().toISOString());
    applyConsent(newConsent);
  };

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent-v2');
    localStorage.removeItem('cookie-consent-timestamp');
    setConsent(null);
    window.location.reload();
  };

  return (
    <ConsentContext.Provider value={{ consent, updateConsent, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
}

function applyConsent(consent: ConsentState) {
  if (typeof window === 'undefined') return;

  // Google Consent Mode v2
  if ((window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      functionality_storage: consent.necessary ? 'granted' : 'denied',
      personalization_storage: consent.necessary ? 'granted' : 'denied',
      security_storage: 'granted', // Always granted for security
    });
  }

  // Facebook Pixel consent
  if (consent.marketing && (window as any).fbq) {
    (window as any).fbq('consent', 'grant');
  } else if ((window as any).fbq) {
    (window as any).fbq('consent', 'revoke');
  }

  // Microsoft Clarity consent (disable if analytics denied)
  if (!consent.analytics && (window as any).clarity) {
    (window as any).clarity('consent', false);
  }
}
