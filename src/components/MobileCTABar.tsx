"use client";

import { useLocale, useTranslations } from "next-intl";

export default function MobileCTABar() {
  const t = useTranslations("mobileBar");
  const locale = useLocale();
  // Stesso oggetto e testo dell'email del pulsante nel menu (Header)
  const emailSubject = locale === "it" ? "Richiesta%20Informazioni%20Print%20Solution" : "Information%20Request%20Print%20Solution";
  const emailBody = locale === "it" ? "Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie" : "Hello%2C%0A%0AI%20would%20like%20to%20receive%20information.%0A%0AThank%20you";

  return (
    <div className="fixed bottom-14 left-0 right-0 z-[9996] h-14 bg-white/95 backdrop-blur-sm shadow-[0_-1px_6px_rgba(0,0,0,0.08)] flex items-center justify-center gap-3 px-4 lg:hidden">
      <a
        href="tel:+390249439417"
        className="flex-1 flex items-center justify-center gap-2 h-11 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full text-sm"
      >
        📞 {t("call")}
      </a>
      <a
        href={`mailto:info@printsolutionsrl.it?subject=${emailSubject}&body=${emailBody}`}
        className="flex-1 flex items-center justify-center gap-2 h-11 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full text-sm shadow-lg"
        data-track="click_cta" data-track-label="mobile_bar_consulenza"
      >
        ✉️ {t("consult")}
      </a>
    </div>
  );
}
