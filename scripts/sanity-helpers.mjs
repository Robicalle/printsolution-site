import { readFileSync } from 'fs';
const TOKEN = readFileSync('C:\\Users\\Jarvis\\.openclaw\\workspace\\memory\\vault\\sanity-token.key','utf8').trim();
const PROJECT = 'dnhjoqwl';
const DATASET = 'production';
const API = `https://${PROJECT}.api.sanity.io/v2024-01-01`;

export async function query(groq, params = {}) {
  const url = new URL(`${API}/data/query/${DATASET}`);
  url.searchParams.set('query', groq);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v));
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const data = await res.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.result;
}

export async function mutate(mutations) {
  const res = await fetch(`${API}/data/mutate/${DATASET}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ mutations }),
  });
  const data = await res.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  if (data.results) console.log(`  Mutations applied: ${data.results.length}`);
  return data;
}

export function k() { return Math.random().toString(36).slice(2, 14); }
