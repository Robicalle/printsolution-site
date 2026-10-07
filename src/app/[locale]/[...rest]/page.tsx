import { notFound } from "next/navigation";

// Qualsiasi indirizzo che non corrisponde a una pagina: mostra la 404 del
// sito (app/[locale]/not-found.tsx) invece di quella senza menu.
export default function CatchAll() {
  notFound();
}
