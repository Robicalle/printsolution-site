import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, azienda, email, telefono, interesse, messaggio } = body;

    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti" },
        { status: 400 }
      );
    }

    const entry = {
      id: Date.now().toString(36),
      timestamp: new Date().toISOString(),
      nome,
      azienda: azienda || "",
      email,
      telefono: telefono || "",
      interesse: interesse || "",
      messaggio,
    };

    // Save to local JSON file
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "contact-messages.json");
    let messages = [];
    if (fs.existsSync(filePath)) {
      messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    messages.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
