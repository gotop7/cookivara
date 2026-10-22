# Cookivara

Home-cook recipe site organized by kitchen shelves — Korean, Chinese, European, American, World, Smoothie, and Vegetarian. Built with **Next.js**, **TypeScript**, and **Tailwind**.

Brand logo: `public/brand/cookivara-logo.png`

## Run locally

```bash
cd cookivara   # or: cd ~/Desktop/cookivara
npm install
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

```bash
npm run build   # production build
npm start       # serve production build on the same port
```

## Language

Default UI is **Korean**. Header toggle `한국어 | English` switches the whole site; choice is saved in `localStorage` (`cookivara-locale`). Brand name stays **Cookivara** in both locales.

| Concern | File |
|---|---|
| UI copy | `src/i18n/messages.ts` |
| Locale provider | `src/i18n/LocaleProvider.tsx` |
| Categories | `src/data/categories.ts` |
| Recipes | `src/data/recipes.ts` |

## Add a bilingual recipe

1. Drop an image in `public/recipes/{slug}.jpg` (or `.webp`)
2. Append an object to `recipes` in `src/data/recipes.ts` with `{ ko, en }` for title, description, ingredients, and steps (helpers `L` / `ing` are at the top of that file). Optional: `youtubeUrl` for a matching cooking video.
3. Tag with category slugs from `src/data/categories.ts` (`korean`, `chinese`, `european`, `american`, `world`, `smoothie`, `vegetarian`) — a recipe can list multiple categories

Each category shelf currently has **10** recipes. No auth or database — the data file is the source of truth.

## Routes

- `/` — home hero + seven kitchen shelves
- `/recipes` — all recipes by category
- `/categories/[slug]` — category shelf
- `/recipes/[slug]` — recipe detail (ingredients, steps, optional YouTube link)

## Deploy (optional)

Connect this GitHub repo to **Vercel** (Import Project → select `cookivara`). Framework: Next.js. No env secrets required for the current app. Then add a custom domain in Vercel → Settings → Domains and point DNS at the values Vercel shows.
