import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, azienda, email, telefono, interesse, messaggio, _hp_field } = body;

    // Honeypot check
    if (_hp_field) {
      return NextResponse.json({ success: true });
    }

    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    // Send email via Brevo SMTP API
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      const htmlContent = `
        <h2>Nuovo messaggio dal sito Print Solution</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(nome)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Azienda</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(azienda || "-")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(telefono || "-")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Interesse</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(interesse || "-")}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Messaggio</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(messaggio).replace(/\n/g, "<br>")}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:20px;">Inviato dal form contatti di printsolutionsrl.it — ${new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })}</p>
      `;

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": brevoKey,
        },
        body: JSON.stringify({
          sender: { name: "Print Solution Sito", email: "noreply@printsolutionsrl.it" },
          to: [{ email: "info@printsolutionsrl.it", name: "Print Solution" }],
          replyTo: { email, name: nome },
          subject: `[Sito Web] Richiesta da ${nome}${azienda ? ` — ${azienda}` : ""}`,
          htmlContent,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
