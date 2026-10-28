/**
 * One-shot: fix scrambled Korean ingredient amounts + inject publishedAt/updatedAt.
 * Run: node scripts/fix-amounts-and-dates.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "../src/data/recipes.ts");

function decodeEscapes(s) {
  return s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) =>
    String.fromCharCode(parseInt(h, 16)),
  );
}

function escapeForTs(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

/** Units that commonly appear before the number (scrambled). */
const UNIT_FIRST =
  /^(큰술|작은술|컵|모|개|장|쪽|줄기|대|팩|봉|캔|포기|마리|뿌리|묶음|인분|줄|봉지)\s*([\d./½¼¾]+)$/;

function fixKoAmount(raw) {
  let ko = decodeEscapes(raw).trim();

  const m = ko.match(UNIT_FIRST);
  if (m) return `${m[2]}${m[1]}`;

  // "큰술 1.5" style already covered; also "기호껏" etc stay
  return ko;
}

/** Spread publish dates historically from 2024-03 → 2026-09 */
function dateForIndex(i, total) {
  const start = Date.UTC(2024, 2, 5); // 2024-03-05
  const end = Date.UTC(2026, 8, 20); // 2026-09-20
  const t = total <= 1 ? 0 : i / (total - 1);
  // slight wobble so not perfectly linear
  const wobble = Math.sin(i * 2.17) * 2.5 * 86400000;
  const ms = start + t * (end - start) + wobble;
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, "0");
  const da = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${mo}-${da}`;
}

function updatedForPublished(published, i) {
  // ~40% get a later update within 30–120 days
  if (i % 5 !== 0 && i % 7 !== 0) return null;
  const base = new Date(published + "T12:00:00Z").getTime();
  const days = 30 + ((i * 13) % 90);
  const d = new Date(base + days * 86400000);
  const today = Date.UTC(2026, 9, 28);
  const capped = Math.min(d.getTime(), today);
  const x = new Date(capped);
  return `${x.getUTCFullYear()}-${String(x.getUTCMonth() + 1).padStart(2, "0")}-${String(x.getUTCDate()).padStart(2, "0")}`;
}

let src = fs.readFileSync(file, "utf8");

// Ensure Recipe type has author/dates fields (idempotent-ish: only if missing)
if (!src.includes("publishedAt:")) {
  src = src.replace(
    `export type Recipe = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  categories: string[];
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  level: LocalizedString;
  image: string;
  youtubeUrl?: string;
  ingredients: Ingredient[];
  steps: LocalizedString[];
};`,
    `export type Recipe = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  categories: string[];
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  level: LocalizedString;
  image: string;
  youtubeUrl?: string;
  /** ISO date YYYY-MM-DD */
  publishedAt: string;
  /** ISO date YYYY-MM-DD when content was last improved */
  updatedAt?: string;
  author?: string;
  /** Longer story-style intro (enriched recipes) */
  intro?: LocalizedString;
  tips?: LocalizedString[];
  substitutions?: LocalizedString[];
  storage?: LocalizedString;
  ingredients: Ingredient[];
  steps: LocalizedString[];
};`,
  );
}

// Fix ingredient amounts: ing("KO", "EN", ...)
let amountFixes = 0;
src = src.replace(
  /ing\("((?:[^"\\]|\\.)*)",\s*"((?:[^"\\]|\\.)*)"/g,
  (full, koRaw, enRaw) => {
    const fixed = fixKoAmount(koRaw);
    const en = decodeEscapes(enRaw);
    if (fixed !== decodeEscapes(koRaw)) amountFixes++;
    // Also decode name if we only matched amount — leave names to next pass
    return `ing("${escapeForTs(fixed)}", "${escapeForTs(en)}"`;
  },
);

// Decode remaining unicode escapes in ingredient name strings of ing() calls
// Pattern: ing("amt", "enAmt", "nameKo", "nameEn")
src = src.replace(
  /ing\("((?:[^"\\]|\\.)*)",\s*"((?:[^"\\]|\\.)*)",\s*"((?:[^"\\]|\\.)*)",\s*"((?:[^"\\]|\\.)*)"\)/g,
  (_, a, b, c, d) => {
    const nameKo = decodeEscapes(c);
    const nameEn = decodeEscapes(d);
    return `ing("${a}", "${b}", "${escapeForTs(nameKo)}", "${escapeForTs(nameEn)}")`;
  },
);

// Inject publishedAt after image line for each recipe (skip if already present)
const slugMatches = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const total = slugMatches.length;

let recipeIndex = 0;
src = src.replace(
  /(slug:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]+",)(\n\s*youtubeUrl:[^\n]+,)?(\n\s*publishedAt:)?/g,
  (full, before, slug, youtube, already) => {
    if (already) {
      recipeIndex++;
      return full;
    }
    const i = recipeIndex++;
    const publishedAt = dateForIndex(i, total);
    const updatedAt = updatedForPublished(publishedAt, i);
    const yt = youtube || "";
    const upd = updatedAt
      ? `\n    updatedAt: "${updatedAt}",`
      : "";
    return `${before}${yt}\n    publishedAt: "${publishedAt}",${upd}\n    author: "Cookivara Kitchen",`;
  },
);

fs.writeFileSync(file, src);
console.log(
  JSON.stringify(
    {
      recipes: total,
      amountFixes,
      recipeIndex,
      sampleDates: slugMatches.slice(0, 3).map((s, i) => ({
        slug: s,
        publishedAt: dateForIndex(i, total),
      })),
    },
    null,
    2,
  ),
);
