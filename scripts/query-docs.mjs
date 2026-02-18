import { createClient } from "@sanity/client";
import fs from "fs";

const TOKEN = fs.readFileSync("C:\\Users\\Jarvis\\.openclaw\\workspace\\memory\\vault\\sanity-token.key", "utf-8").trim();
const client = createClient({
  projectId: "dnhjoqwl",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: TOKEN,
  useCdn: false,
});

const docs = await client.fetch('*[_type in ["product","post","solution","shopProduct","siteSettings","page"]]{...}');
console.log(JSON.stringify(docs, null, 2));
