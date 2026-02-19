# Guida CMS — Print Solution

## Come funziona il sito

Il sito è costruito con **Next.js** e i contenuti vengono gestiti tramite **Sanity CMS**.
L'indirizzo del pannello Sanity è: [https://www.sanity.io/manage](https://www.sanity.io/manage)

Lo studio Sanity è anche accessibile direttamente dal sito: `https://website-theta-one-59.vercel.app/studio`

---

## Come pubblicare un contenuto

1. **Accedi a Sanity Studio** (dal link sopra)
2. **Crea o modifica** un documento (prodotto, articolo blog, soluzione, ecc.)
3. Clicca **"Publish"** in alto a destra
4. Il sito si aggiorna automaticamente in pochi secondi grazie al webhook di revalidation

### Bozze (Draft)
- Quando crei un contenuto e **non** lo pubblichi, rimane come **bozza**
- Le bozze **NON** sono visibili sul sito pubblico
- Le bozze **SONO** visibili in modalità Preview (vedi sotto)

---

## Preview Mode (Staging)

Il Preview Mode permette di vedere le bozze come se fossero pubblicate, senza che i visitatori le vedano.

### Come attivare il Preview
1. Vai a: `https://website-theta-one-59.vercel.app/api/preview?secret=<PREVIEW_SECRET>`
2. Verrà mostrato un banner giallo "Preview Mode" in alto
3. Naviga il sito normalmente — vedrai anche i contenuti in bozza

### Come disattivare il Preview
- Vai a: `https://website-theta-one-59.vercel.app/api/exit-preview`
- Oppure chiudi il browser

### Uso come Staging
Il Preview Mode funziona come un ambiente di staging:
- Scrivi e modifica contenuti senza pubblicarli
- Attiva il preview per controllarli
- Quando sei soddisfatto, clicca "Publish" su Sanity

---

## Webhook di Revalidation

Quando un contenuto viene pubblicato su Sanity, un webhook notifica automaticamente il sito che aggiorna la pagina corrispondente (revalidation on-demand).

**Endpoint:** `/api/revalidate`

Questo significa che non serve fare deploy manuali per aggiornare i contenuti.

---

## Dove trovare le credenziali

| Cosa | Dove |
|------|------|
| Accesso Sanity | Account Google collegato a Roberto |
| Sanity Project ID | `dnhjoqwl` |
| Dataset produzione | `production` |
| Vercel | Dashboard Vercel (account collegato) |
| Segreto Preview | Variabile `SANITY_PREVIEW_SECRET` su Vercel |

---

## FAQ

### Ho modificato un prodotto ma non vedo la modifica sul sito
- Hai cliccato **Publish**? Se è ancora in bozza, non apparirà sul sito pubblico
- Prova a ricaricare la pagina (Ctrl+F5)
- Se dopo 1 minuto non si aggiorna, potrebbe esserci un problema col webhook

### Posso cancellare un prodotto?
- Sì, ma il link della vecchia pagina darà errore 404. Meglio "unpublish" piuttosto che cancellare

### Come aggiungo un nuovo articolo blog?
1. Vai su Sanity Studio → Blog Post
2. Compila titolo, slug, contenuto, immagine di copertina
3. Clicca Publish
4. L'articolo apparirà automaticamente nella pagina Blog

### Come cambio l'ordine dei prodotti?
- L'ordine dipende dal campo `category` e dall'ordine in cui appaiono su Sanity
- Per cambiare l'ordine, modifica il campo `order` (se presente) o contatta il team tecnico

### Il sito è lento, cosa faccio?
- Le immagini vengono ottimizzate automaticamente (WebP/AVIF)
- Se un'immagine è molto pesante su Sanity, prova a caricarla in dimensioni più piccole (max 2000px di lato)
