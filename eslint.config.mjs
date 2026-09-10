// Config ESLint in formato "flat", l'unico letto da ESLint 9+.
//
// Sostituisce .eslintrc.json: da ESLint 9 il vecchio formato non viene piu'
// letto, e "next lint" e' stato rimosso in Next 16. Il risultato era uno
// script `npm run lint` che usciva senza errori senza controllare niente.
//
// Stesse regole di prima: core-web-vitals + typescript di eslint-config-next.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Versione di React dichiarata invece di "detect". eslint-config-next usa
  // "detect", e per rilevarla eslint-plugin-react 7.37 chiama
  // context.getFilename(), rimosso in ESLint 10: ogni corsa andava in crash.
  // Da aggiornare quando si aggiorna React.
  { settings: { react: { version: "19.2" } } },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
