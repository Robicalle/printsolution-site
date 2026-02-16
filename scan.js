const fs = require('fs');
const path = require('path');
const base = 'C:/Users/Jarvis/.openclaw/workspace/website/src/app/[locale]';

function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const fp = path.join(d, f);
    if (fs.statSync(fp).isDirectory()) r = r.concat(walk(fp));
    else if (f.endsWith('.tsx')) r.push(fp);
  }
  return r;
}

const files = walk(base);
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hasI18n = c.includes('useTranslations') || c.includes('getTranslations');
  const hasGetLocale = c.includes('getLocale') || c.includes('useLocale');
  const lines = c.split('\n').length;
  const rel = f.replace(base, '.');
  console.log(rel + ' | ' + lines + 'L | i18n:' + hasI18n + ' | locale:' + hasGetLocale);
});
