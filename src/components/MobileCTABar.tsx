"use client";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9997] h-16 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center gap-3 px-4 lg:hidden">
      <a
        href="tel:+390249439417"
        className="flex-1 flex items-center justify-center gap-2 h-11 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-full text-sm"
      >
        📞 Chiamaci
      </a>
      <a
        href="mailto:info@printsolutionsrl.it?subject=Richiesta%20Informazioni%20Print%20Solution&body=Buongiorno%2C%0A%0AVorrei%20ricevere%20informazioni.%0A%0AGrazie"
        className="flex-1 flex items-center justify-center gap-2 h-11 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-full text-sm shadow-lg"
      >
        ✉️ Richiedi consulenza
      </a>
    </div>
  );
}
