'use client';

import Script from 'next/script';
import { useConsent } from './ConsentManager';

export function TrackingScriptsHead() {
  const { consent } = useConsent();

  return (
    <>
      {/* Google Consent Mode v2 - Initialize BEFORE GA4 */}
      <Script id="consent-mode-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Set default consent to denied for GDPR compliance
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PRV9ER8RKX"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', 'G-PRV9ER8RKX', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Facebook Pixel - Load only with marketing consent */}
      {consent?.marketing && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1283366729159889');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* Microsoft Clarity - Load only with analytics consent */}
      {consent?.analytics && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "kyj8pccua0");
          `}
        </Script>
      )}

      {/* Pirsch Analytics - Load only with analytics consent */}
      {consent?.analytics && (
        <Script
          src="https://api.pirsch.io/pa.js"
          data-code="GQ4c1tUCSajZvEsxjZWAGjBtyMRjIIYn"
          strategy="afterInteractive"
          defer
        />
      )}

      {/* LegalBlink removed - replaced with custom Consent Mode v2 */}
    </>
  );
}
