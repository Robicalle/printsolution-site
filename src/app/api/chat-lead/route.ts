import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

// Dati di contatto lasciati nella chat del sito: arrivano a info@ via Brevo
// insieme alla conversazione, cosi' chi ricontatta sa gia' cosa chiedeva il
// visitatore. I dati personali restano qui: all'AI non vengono mai passati.
//
// A differenza di /api/contact, la risposta di Brevo viene controllata: se
// l'invio fallisce il visitatore lo sa, invece di vedere "inviato" e perdere
// la richiesta.

interface Riga {
  role: "user" | "assistant";
  content: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL_RE = /^\+?[\d\s./()-]{6,20}$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (!rateLimit("lead:" + ip, { max: 3, windowMs: 10 * 60 * 1000, dailyMax: 10 }).allowed) {
    return NextResponse.json({ error: "Troppe richieste. Riprova più tardi." }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { nome, contatto, azienda, privacy, conversazione, pagina, lingua, _hp_field, turnstileToken } = body;

    // Honeypot: ai bot si risponde come se fosse andato tutto bene
    if (_hp_field) return NextResponse.json({ success: true });

    const n = typeof nome === "string" ? nome.trim() : "";
    const c = typeof contatto === "string" ? contatto.trim() : "";
    const a = typeof azienda === "string" ? azienda.trim().slice(0, 150) : "";
    const isEmail = EMAIL_RE.test(c);
    if (!n || n.length > 100 || !c || c.length > 150 || !(isEmail || TEL_RE.test(c)) || privacy !== true) {
      return NextResponse.json({ error: "Dati mancanti o non validi" }, { status: 400 });
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: "Verifica CAPTCHA mancante" }, { status: 400 });
    }
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return NextResponse.json({ error: "Verifica CAPTCHA fallita" }, { status: 403 });
      }
    }

    const brevoKey = process.env.BREVO_API_KEY;
    if (!brevoKey) {
      console.error("[chat-lead] BREVO_API_KEY non impostata: richiesta non inviata");
      return NextResponse.json({ error: "Invio non disponibile", code: "no_brevo_key" }, { status: 500 });
    }

    const righe: Riga[] = Array.isArray(conversazione)
      ? conversazione
          .filter((r: Riga) => (r?.role === "user" || r?.role === "assistant") && typeof r.content === "string")
          .slice(-30)
          .map((r: Riga) => ({ role: r.role, content: r.content.slice(0, 2000) }))
      : [];
    const pag = typeof pagina === "string" ? pagina.slice(0, 200) : "";
    const lang = lingua === "en" ? "EN" : "IT";

    const contattoHtml = isEmail
      ? `<a href="mailto:${escapeHtml(c)}">${escapeHtml(c)}</a>`
      : `<a href="tel:${escapeHtml(c.replace(/[^\d+]/g, ""))}">${escapeHtml(c)}</a>`;
    const td = 'style="padding:8px;border:1px solid #ddd;"';
    const th = 'style="padding:8px;border:1px solid #ddd;font-weight:bold;"';
    const conversazioneHtml = righe.length
      ? righe
          .map((r) => `<p style="margin:0 0 10px;"><strong>${r.role === "user" ? "Visitatore" : "Assistente AI"}:</strong><br>${escapeHtml(r.content).replace(/\n/g, "<br>")}</p>`)
          .join("")
      : "<p>(nessun messaggio)</p>";

    const htmlContent = `
      <h2>Richiesta di contatto dalla chat del sito</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td ${th}>Nome</td><td ${td}>${escapeHtml(n)}</td></tr>
        <tr><td ${th}>Azienda</td><td ${td}>${escapeHtml(a || "-")}</td></tr>
        <tr><td ${th}>Contatto</td><td ${td}>${contattoHtml}</td></tr>
        <tr><td ${th}>Pagina</td><td ${td}>${escapeHtml(pag || "-")}</td></tr>
        <tr><td ${th}>Lingua</td><td ${td}>${lang}</td></tr>
      </table>
      <h3 style="margin-top:24px;">Conversazione con l'assistente</h3>
      <div style="max-width:600px;">${conversazioneHtml}</div>
      <p style="color:#888;font-size:12px;margin-top:20px;">Inviato dalla chat di printsolutionsrl.it — ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}</p>
    `;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json", "api-key": brevoKey },
      body: JSON.stringify({
        sender: { name: "Print Solution Sito", email: "noreply@printsolutionsrl.it" },
        to: [{ email: "info@printsolutionsrl.it", name: "Print Solution" }],
        ...(isEmail ? { replyTo: { email: c, name: n } } : {}),
        subject: `[Sito Web - Chat] Richiesta di contatto da ${n}${a ? ` — ${a}` : ""}`,
        htmlContent,
      }),
    });

    if (!res.ok) {
      // Il testo d'errore di Brevo non contiene la chiave
      console.error("[chat-lead] Brevo ha rifiutato l'invio:", res.status, (await res.text()).slice(0, 300));
      return NextResponse.json({ error: "Invio non riuscito", code: `brevo_${res.status}` }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[chat-lead] Errore:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "Errore interno del server" }, { status: 500 });
  }
}
