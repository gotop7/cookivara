#!/usr/bin/env node
/**
 * Rebuild src/data/recipes.ts:
 * - keep existing recipe metadata
 * - swap in expandedSteps for every existing slug
 * - append newRecipesA + newRecipesB
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { expandedSteps } from "./expanded-steps.mjs";
import { newRecipesA } from "./new-recipes-batch-a.mjs";
import { newRecipesB } from "./new-recipes-batch-b.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TARGET = path.join(ROOT, "src/data/recipes.ts");

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function L(obj) {
  return `L("${esc(obj.ko)}", "${esc(obj.en)}")`;
}

function emitIngredient(ing) {
  return `      ing("${esc(ing.amount.ko)}", "${esc(ing.amount.en)}", "${esc(ing.name.ko)}", "${esc(ing.name.en)}"),`;
}

function emitSteps(steps) {
  const lines = steps.map((s) => `      ${L(s)},`);
  return `    steps: [\n${lines.join("\n")}\n    ],`;
}

function emitNewRecipe(r) {
  const level =
    r.level?.en === "Medium" || r.level?.ko === "보통" ? "medium" : "easy";
  const yt = r.youtubeUrl
    ? `\n    youtubeUrl: "${esc(r.youtubeUrl)}",`
    : "";
  const cats = r.categories.map((c) => `"${c}"`).join(", ");
  return `  {
    slug: "${esc(r.slug)}",
    title: ${L(r.title)},
    description: ${L(r.description)},
    categories: [${cats}],
    servings: ${r.servings},
    prepMinutes: ${r.prepMinutes},
    cookMinutes: ${r.cookMinutes},
    level: ${level},
    image: "${esc(r.image || `/recipes/${r.slug}.jpg`)}",${yt}
    ingredients: [
${r.ingredients.map(emitIngredient).join("\n")}
    ],
${emitSteps(r.steps)}
  }`;
}

/** Replace the steps: [...] block that follows a given slug. */
function replaceStepsForSlug(source, slug, steps) {
  const slugIdx = source.indexOf(`slug: "${slug}"`);
  if (slugIdx < 0) throw new Error(`slug not found: ${slug}`);
  const stepsKey = source.indexOf("steps:", slugIdx);
  if (stepsKey < 0) throw new Error(`steps not found for ${slug}`);
  const open = source.indexOf("[", stepsKey);
  let depth = 0;
  let close = -1;
  for (let i = open; i < source.length; i++) {
    const ch = source[i];
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) {
        close = i;
        break;
      }
    }
  }
  if (close < 0) throw new Error(`unbalanced steps for ${slug}`);
  let end = close + 1;
  if (source[end] === ",") end++;
  return source.slice(0, stepsKey) + emitSteps(steps) + source.slice(end);
}

function main() {
  let source = fs.readFileSync(TARGET, "utf8");

  for (const slug of Object.keys(expandedSteps)) {
    source = replaceStepsForSlug(source, slug, expandedSteps[slug]);
  }

  const newAll = [...newRecipesA, ...newRecipesB];
  const emitted = newAll.map(emitNewRecipe).join(",\n");

  // Find the closing of the recipes array: the `];` that precedes getRecipe
  const getRecipeIdx = source.indexOf("\nexport function getRecipe");
  if (getRecipeIdx < 0) throw new Error("could not find getRecipe export");
  const beforeExports = source.slice(0, getRecipeIdx);
  const exports = source.slice(getRecipeIdx);

  // Trim trailing whitespace and the closing `];` of the array
  const trimmed = beforeExports.replace(/\s*\];\s*$/, "").replace(/,\s*$/, "");
  const joined = `${trimmed},\n${emitted}\n];\n${exports}`;

  fs.writeFileSync(TARGET, joined);
  console.log(
    `Wrote ${TARGET}: expanded ${Object.keys(expandedSteps).length} + appended ${newAll.length}`,
  );
}

main();
