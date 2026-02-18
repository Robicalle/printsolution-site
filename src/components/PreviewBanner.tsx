"use client";

export default function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-yellow-400 text-yellow-900 text-center text-sm font-semibold py-2 px-4">
      ⚠️ Preview mode — Stai vedendo una bozza.{" "}
      <a href="/api/exit-preview" className="underline font-bold hover:text-yellow-800">
        Esci dalla preview
      </a>
    </div>
  );
}
