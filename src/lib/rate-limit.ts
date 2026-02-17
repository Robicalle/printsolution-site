// In-memory rate limiter (no Redis needed)
// Two layers: per-window (burst) + daily cap (cost control)

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface DailyEntry {
  count: number;
  date: string; // YYYY-MM-DD
}

const store = new Map<string, RateLimitEntry>();
const dailyStore = new Map<string, DailyEntry>();

// Global daily request counter (all IPs combined) to cap API costs
let globalDaily = { count: 0, date: "" };
const GLOBAL_DAILY_MAX = 500; // max 500 requests/day across all users

// Cleanup expired entries every 60 seconds
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key);
  }
}, 60_000);

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

export function rateLimit(
  ip: string,
  { max = 10, windowMs = 5 * 60 * 1000, dailyMax = 50 } = {}
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const today = getToday();

  // Global daily cap (prevents runaway costs)
  if (globalDaily.date !== today) {
    globalDaily = { count: 0, date: today };
  }
  if (globalDaily.count >= GLOBAL_DAILY_MAX) {
    return { allowed: false, remaining: 0 };
  }

  // Per-IP daily cap
  const daily = dailyStore.get(ip);
  if (daily && daily.date === today) {
    if (daily.count >= dailyMax) {
      return { allowed: false, remaining: 0 };
    }
  }

  // Per-IP burst window
  const entry = store.get(ip);
  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
  } else {
    entry.count++;
    if (entry.count > max) {
      return { allowed: false, remaining: 0 };
    }
  }

  // Increment daily counters
  if (!daily || daily.date !== today) {
    dailyStore.set(ip, { count: 1, date: today });
  } else {
    daily.count++;
  }
  globalDaily.count++;

  return { allowed: true, remaining: max - (store.get(ip)?.count || 0) };
}
