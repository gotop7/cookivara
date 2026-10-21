# Cookivara

Home-cook recipe shelves by kitchen. Next.js · TypeScript · Tailwind.

Brand logo: `public/brand/cookivara-logo.png`

## Local

```bash
cd ~/Desktop/cookivara
npm install
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

## Language

Default UI is **Korean**. Header toggle `한국어 | English` switches the whole site; choice is saved in `localStorage` (`cookivara-locale`). Brand name stays **Cookivara** in both locales.

- UI copy: `src/i18n/messages.ts`
- Locale provider: `src/i18n/LocaleProvider.tsx`
- Categories: bilingual `name` / `description` in `src/data/categories.ts`
- Recipes: bilingual fields (`ko` / `en`) in `src/data/recipes.ts`

## Add a bilingual recipe

1. Drop an image in `public/recipes/{slug}.jpg` (or `.webp`)
2. Append an object to `recipes` in `src/data/recipes.ts` with `{ ko, en }` for title, description, level, ingredients, and steps (helpers `L` / `ing` are at the top of that file)
3. Tag with category slugs from `src/data/categories.ts` (`korean`, `chinese`, `european`, `american`, `world`, `smoothie`, `vegetarian`) — a recipe can list multiple categories

Each category shelf currently has **5** recipes (32 unique dishes; a few are multi-tagged). No auth or database — the data file is the source of truth.

## Routes

- `/` — home hero + seven kitchen shelves
- `/recipes` — all recipes by category
- `/categories/[slug]` — category shelf (empty state when none)
- `/recipes/gochujang-tofu-bibimbap` — first full recipe
