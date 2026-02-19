#!/usr/bin/env node
/**
 * check-links.mjs — Broken link scanner for Print Solution website
 * Usage: node scripts/check-links.mjs [baseUrl]
 * Default baseUrl: https://website-theta-one-59.vercel.app
 */

const BASE = process.argv[2] || 'https://website-theta-one-59.vercel.app';
const TIMEOUT = 10000;
const CONCURRENCY = 5;

const visited = new Set();
const broken = [];
const checked = new Set();

async function fetchWithTimeout(url, ms = TIMEOUT) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'PrintSolution-LinkChecker/1.0' },
    });
    clearTimeout(id);
    return res;
  } catch (e) {
    clearTimeout(id);
    return { ok: false, status: e.name === 'AbortError' ? 'TIMEOUT' : 'ERROR', statusText: e.message };
  }
}

function extractLinks(html, pageUrl) {
  const links = [];
  const regex = /href=["']([^"'#]+)/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    let href = match[1].trim();
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    if (href.startsWith('//')) href = 'https:' + href;
    else if (href.startsWith('/')) href = BASE + href;
    else if (!href.startsWith('http')) continue;
    links.push(href);
  }
  return [...new Set(links)];
}

async function checkLink(url, source) {
  if (checked.has(url)) return;
  checked.add(url);
  const res = await fetchWithTimeout(url);
  const status = res.status;
  if (!res.ok && status !== 308 && status !== 301 && status !== 302) {
    broken.push({ url, status, source });
    console.log(`  ❌ [${status}] ${url} (from ${source})`);
  }
}

async function crawlPage(url) {
  if (visited.has(url)) return;
  visited.add(url);
  console.log(`\n🔍 Crawling: ${url}`);

  const res = await fetchWithTimeout(url);
  if (!res.ok || typeof res.text !== 'function') {
    broken.push({ url, status: res.status, source: 'direct' });
    console.log(`  ❌ Page returned ${res.status}`);
    return;
  }

  const html = await res.text();
  const links = extractLinks(html, url);
  console.log(`  Found ${links.length} links`);

  // Check all links in batches
  for (let i = 0; i < links.length; i += CONCURRENCY) {
    const batch = links.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(link => checkLink(link, url)));
  }

  // Crawl internal links
  const internalLinks = links.filter(l => l.startsWith(BASE) && !l.includes('/studio'));
  for (const link of internalLinks) {
    const clean = link.split('?')[0].split('#')[0];
    if (!visited.has(clean)) {
      await crawlPage(clean);
    }
  }
}

async function main() {
  console.log(`\n🚀 Link checker starting for: ${BASE}\n`);

  // Start from sitemap if available
  let startPages = [BASE + '/it', BASE + '/en'];
  try {
    const sitemapRes = await fetchWithTimeout(BASE + '/sitemap.xml');
    if (sitemapRes.ok) {
      const sitemapText = await sitemapRes.text();
      const urlRegex = /<loc>([^<]+)<\/loc>/g;
      let match;
      while ((match = urlRegex.exec(sitemapText)) !== null) {
        startPages.push(match[1]);
      }
      console.log(`📋 Found ${startPages.length} URLs in sitemap`);
    }
  } catch { /* no sitemap */ }

  startPages = [...new Set(startPages)];
  for (const page of startPages) {
    await crawlPage(page);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 REPORT`);
  console.log(`${'='.repeat(60)}`);
  console.log(`Pages crawled: ${visited.size}`);
  console.log(`Links checked: ${checked.size}`);
  console.log(`Broken links:  ${broken.length}`);

  if (broken.length > 0) {
    console.log(`\n❌ BROKEN LINKS:`);
    for (const b of broken) {
      console.log(`  [${b.status}] ${b.url}`);
      console.log(`    ↳ Found on: ${b.source}`);
    }
  } else {
    console.log(`\n✅ No broken links found!`);
  }

  process.exit(broken.length > 0 ? 1 : 0);
}

main().catch(console.error);
