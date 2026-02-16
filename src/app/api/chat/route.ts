import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import kbChunks from "@/data/kb-chunks.json";
import { rateLimit } from "@/lib/rate-limit";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY?.trim() || "";

const ALLOWED_ORIGINS = [
  "https://website-theta-one-59.vercel.app",
  "https://www.printsolutionsrl.it",
  "https://printsolutionsrl.it",
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  }
  return {};
}

function isOriginAllowed(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}

const SYSTEM_PROMPT = `Sei l'assistente virtuale di Print Solution, azienda specializzata in macchinari per stampa digitale, etichette e packaging con sede a Sesto San Giovanni (MI).

REGOLE FONDAMENTALI:
1. Rispondi SOLO in italiano.
2. Usa ESCLUSIVAMENTE le informazioni fornite nel contesto. NON inventare caratteristiche o specifiche.
3. Quando consigli un prodotto, verifica nel contesto che sia adatto all'applicazione richiesta. Leggi attentamente i campi "ATTENZIONE" e "NON" nei chunk.
4. Se ti chiedono cosa stampare su un materiale specifico, cerca nel contesto quale prodotto supporta quel materiale.
5. Se non trovi info sufficienti nel contesto, dì che non hai informazioni dettagliate e suggerisci di contattare Print Solution.
6. PREZZI: NON dare MAI prezzi, costi, fasce di prezzo o stime economiche. Non dire nemmeno "a partire da" o "indicativamente". Rispondi SEMPRE che per informazioni sui prezzi è necessario contattare Print Solution per un preventivo personalizzato: 02 4943 9417 o info@printsolutionsrl.it.
7. Sii conciso (max 3-4 paragrafi), professionale ma amichevole.
8. Quando menzioni un prodotto, cita 2-3 caratteristiche chiave specifiche dal contesto.
9. NON confondere: RobotJet e GreenBox Print Book sono per LABBRATURA LIBRI. GreenBox EVO è per PACKAGING/SACCHETTI/SHOPPER. Sono prodotti diversi!
10. Suggerisci sempre di prenotare una demo gratuita in sala demo.

Contatti: Tel 02 4943 9417 | Email info@printsolutionsrl.it | Sede: Sesto San Giovanni (MI)`;

// ── TF-IDF Semantic Search ──────────────────────────────────────────

interface KBChunk {
  source: string;
  title: string;
  content: string;
  category?: string;
}

// Italian stop words
const STOP_WORDS = new Set([
  "il", "lo", "la", "i", "gli", "le", "un", "uno", "una", "di", "del", "dello",
  "della", "dei", "degli", "delle", "a", "al", "allo", "alla", "ai", "agli",
  "alle", "da", "dal", "dallo", "dalla", "dai", "dagli", "dalle", "in", "nel",
  "nello", "nella", "nei", "negli", "nelle", "con", "su", "sul", "sullo",
  "sulla", "sui", "sugli", "sulle", "per", "tra", "fra", "e", "o", "ma", "che",
  "chi", "cui", "non", "né", "se", "come", "dove", "quando", "quanto", "anche",
  "più", "molto", "questo", "quello", "sono", "è", "ha", "ho", "hanno", "essere",
  "avere", "fare", "stato", "cosa", "quale", "quali", "mi", "ti", "si", "ci",
  "vi", "me", "te", "ce", "ve", "loro"
]);

// Synonym expansion for common queries
const SYNONYMS: Record<string, string[]> = {
  "scatola": ["scatole", "box", "imballo", "imballaggio", "packaging", "cartone"],
  "scatole": ["scatola", "box", "imballo", "imballaggio", "packaging", "cartone"],
  "etichetta": ["etichette", "label", "adesivo", "adesiva", "bobina"],
  "etichette": ["etichetta", "label", "adesivo", "adesiva", "bobina"],
  "stampante": ["stampanti", "stampa", "printer", "stampare"],
  "stampanti": ["stampante", "stampa", "printer", "stampare"],
  "stampa": ["stampante", "stampanti", "stampare", "printer"],
  "fustellatore": ["fustellatori", "fustella", "fustellatura", "taglio", "die-cut"],
  "fustellatori": ["fustellatore", "fustella", "fustellatura", "taglio", "die-cut"],
  "packaging": ["imballaggio", "imballo", "scatole", "scatola", "confezionamento"],
  "foil": ["lamina", "nobilitazione", "hot", "metallizzato", "oro", "argento"],
  "nobilitazione": ["foil", "lamina", "hot", "metallizzato", "labbratura"],
  "cartone": ["ondulato", "scatole", "packaging", "cartoni"],
  "prezzo": ["prezzi", "costo", "costi", "preventivo", "quanto"],
  "prezzi": ["prezzo", "costo", "costi", "preventivo", "quanto"],
  "costo": ["costi", "prezzo", "prezzi", "preventivo", "quanto"],
  "contatto": ["contatti", "telefono", "email", "indirizzo", "dove"],
  "contatti": ["contatto", "telefono", "email", "indirizzo", "dove"],
  "assistenza": ["supporto", "riparazione", "manutenzione", "tecnica"],
  "demo": ["dimostrazione", "prova", "sala", "appuntamento"],
  "sacchetto": ["sacchetti", "shopper", "busta", "buste", "kraft"],
  "sacchetti": ["sacchetto", "shopper", "busta", "buste", "kraft"],
  "shopper": ["sacchetti", "sacchetto", "busta", "buste"],
  "busta": ["buste", "sacchetti", "sacchetto", "shopper"],
  "buste": ["busta", "sacchetti", "sacchetto", "shopper"],
  "libro": ["libri", "labbratura", "dorso", "legatoria"],
  "libri": ["libro", "labbratura", "dorso", "legatoria"],
  "labbratura": ["libri", "libro", "dorso"],
  "quadricromia": ["cmyk", "colori", "colore", "stampa"],
  "edm": ["edm650", "edm-650x", "edm650x", "edm-650", "inkjet", "single-pass", "anypack"],
  "edm650": ["edm", "edm-650x", "edm650x", "edm-650"],
  "edm-650x": ["edm", "edm650", "edm650x"],
  "edm650x": ["edm", "edm650", "edm-650x"],
  "greenbox": ["greenboxevo", "greenbox-evo", "evo", "sacchetti", "shopper"],
  "consumabile": ["consumabili", "cartuccia", "cartucce", "inchiostro", "inchiostri", "toner", "tanica", "taniche", "testina", "testine"],
  "consumabili": ["consumabile", "cartuccia", "cartucce", "inchiostro", "inchiostri", "toner", "tanica", "taniche", "testina", "testine"],
  "cartuccia": ["cartucce", "inchiostro", "consumabile", "consumabili", "tanica"],
  "cartucce": ["cartuccia", "inchiostro", "consumabile", "consumabili", "tanica"],
  "inchiostro": ["inchiostri", "cartuccia", "cartucce", "tanica", "taniche", "consumabile"],
  "inchiostri": ["inchiostro", "cartuccia", "cartucce", "tanica", "taniche", "consumabile"],
  "tanica": ["taniche", "inchiostro", "cartuccia", "consumabile"],
  "taniche": ["tanica", "inchiostro", "cartucce", "consumabili"],
  "testina": ["testine", "printhead", "testa"],
  "testine": ["testina", "printhead", "testa"],
  "any002": ["any-002", "anytron", "laser", "toner"],
  "any-002": ["any002", "anytron", "laser", "toner"],
  "anytron": ["any-002", "any002"],
  "dimensione": ["dimensioni", "formato", "misura", "misure", "capacità", "litri", "ml"],
  "dimensioni": ["dimensione", "formato", "misura", "misure", "capacità", "litri", "ml"],
};

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\wàèéìòùáéíóúü]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
}

// Pre-compute document frequencies and TF vectors at module load
const chunks = kbChunks as KBChunk[];
const N = chunks.length;

// Tokenize all chunks
const chunkTokens: string[][] = chunks.map((c) =>
  tokenize(c.title + " " + c.title + " " + c.content) // title weighted 2x
);

// Compute document frequency for each term
const df: Record<string, number> = {};
for (const tokens of chunkTokens) {
  const seen = new Set(tokens);
  for (const t of seen) {
    df[t] = (df[t] || 0) + 1;
  }
}

// Pre-compute TF-IDF vectors and their norms
interface TfIdfVec {
  terms: Record<string, number>;
  norm: number;
}

const chunkVectors: TfIdfVec[] = chunkTokens.map((tokens) => {
  // Term frequency
  const tf: Record<string, number> = {};
  for (const t of tokens) {
    tf[t] = (tf[t] || 0) + 1;
  }
  // TF-IDF
  const terms: Record<string, number> = {};
  let normSq = 0;
  for (const [term, count] of Object.entries(tf)) {
    const idf = Math.log(1 + N / (1 + (df[term] || 0)));
    const tfidf = (1 + Math.log(count)) * idf;
    terms[term] = tfidf;
    normSq += tfidf * tfidf;
  }
  return { terms, norm: Math.sqrt(normSq) };
});

function searchChunks(query: string, topK = 6): KBChunk[] {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return chunks.slice(0, topK);

  // Expand query with synonyms
  const expanded = new Set(queryTokens);
  for (const token of queryTokens) {
    const syns = SYNONYMS[token];
    if (syns) {
      for (const s of syns) expanded.add(s);
    }
  }

  // Build query TF-IDF vector
  const qtf: Record<string, number> = {};
  for (const t of expanded) {
    // Original query terms get weight 1.0, synonyms get 0.5
    const weight = queryTokens.includes(t) ? 1.0 : 0.5;
    qtf[t] = (qtf[t] || 0) + weight;
  }

  const qTerms: Record<string, number> = {};
  let qNormSq = 0;
  for (const [term, count] of Object.entries(qtf)) {
    const idf = Math.log(1 + N / (1 + (df[term] || 0)));
    const tfidf = count * idf;
    qTerms[term] = tfidf;
    qNormSq += tfidf * tfidf;
  }
  const qNorm = Math.sqrt(qNormSq);
  if (qNorm === 0) return chunks.slice(0, topK);

  // Cosine similarity
  const scored = chunks.map((chunk, i) => {
    const vec = chunkVectors[i];
    let dot = 0;
    for (const [term, qVal] of Object.entries(qTerms)) {
      if (vec.terms[term]) {
        dot += qVal * vec.terms[term];
      }
    }
    const sim = vec.norm > 0 ? dot / (qNorm * vec.norm) : 0;

    // Boost exact phrase match
    const lowerContent = (chunk.title + " " + chunk.content).toLowerCase();
    const queryLower = query.toLowerCase();
    const phraseBoost = lowerContent.includes(queryLower) ? 0.3 : 0;

    // Category boost for product queries
    let categoryBoost = 0;
    if (chunk.category === "azienda" && /contatt|telefon|email|dove|orari|sede|indirizzo/i.test(query)) {
      categoryBoost = 0.2;
    }

    return { chunk, score: sim + phraseBoost + categoryBoost };
  });

  return scored
    .filter((s) => s.score > 0.01)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s) => s.chunk);
}

// ── API Handler ─────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  if (!isOriginAllowed(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  const { allowed } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Troppe richieste. Riprova tra qualche minuto." },
      { status: 429 }
    );
  }

  try {
    const { message, history, _hp_field } = await req.json();

    // Honeypot check
    if (_hp_field) {
      return NextResponse.json({ text: "OK" });
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: "Messaggio troppo lungo (max 1000 caratteri)." }, { status: 400 });
    }
    if (Array.isArray(history) && history.length > 10) {
      return NextResponse.json({ error: "Troppi messaggi nella cronologia (max 10)." }, { status: 400 });
    }

    const relevantChunks = searchChunks(message, 6);
    const context = relevantChunks
      .map((c) => `[${c.title}] (${c.source})\n${c.content}`)
      .join("\n\n---\n\n");

    const messages: Anthropic.MessageParam[] = [];

    if (Array.isArray(history)) {
      for (const h of history.slice(-10)) {
        if (h.role === "user" || h.role === "assistant") {
          messages.push({ role: h.role, content: h.content });
        }
      }
    }

    messages.push({
      role: "user",
      content: `Contesto dalla knowledge base di Print Solution:\n\n${context}\n\n---\n\nDomanda del cliente: ${message}`,
    });

    const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

    const encoder = new TextEncoder();
    const origin = req.headers.get("origin");
    const corsHeaders = getCorsHeaders(origin);

    const stream = new ReadableStream({
      async start(controller) {
        try {
          const response = await client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages,
            stream: true,
          });

          for await (const event of response) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          const errorMsg = err instanceof Error ? err.message : "Unknown error";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: errorMsg })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        ...corsHeaders,
      },
    });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
