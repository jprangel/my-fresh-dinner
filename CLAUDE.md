# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

Node.js is installed via Homebrew (`/opt/homebrew/bin/node`). If `npm` is not on PATH, use `/opt/homebrew/bin/npm`.

## Architecture

This is a Vite + React SPA styled after Hello Fresh. There is no backend — all data is served as static JSON files from `public/recipes/`.

**Data flow:**
- `public/recipes/index.json` — lightweight array of recipe summaries; loaded once by `HomePage` to render the card grid and populate filter options.
- `public/recipes/<id>.json` — full recipe detail; loaded on demand by `RecipePage` when a user navigates to `/recipe/:id`.

**Routing** (React Router v6, defined in `src/App.jsx`):
- `/` → `HomePage` — grid of cards with cuisine and cooking-time filters
- `/recipe/:id` → `RecipePage` — full recipe detail with ingredients, steps, nutrition, shopping list

**Styling:**
- CSS variables are defined in `src/index.css` (colours, shadow, radius, font). All components use these variables — change colours there, not in component files.
- The `.no-print` class hides elements from print. `.print-only` shows elements only in print. `RecipePage` duplicates the shopping list — one version with links (screen) and one plain-text (print).
- Each component has a co-located `.css` file with the same name.

## Adding a new recipe

1. Create `public/recipes/<recipe-id>.json` following the shape of `thai-peanut-salmon.json`. Required fields: `id`, `title`, `description`, `cuisine`, `cookingTime`, `prepTime`, `difficulty`, `servings`, `tags`, `ingredients`, `steps`, `shoppingList`, `nutrition`.
2. Add a summary entry (all fields except `tags`, `ingredients`, `steps`, `shoppingList`, `nutrition`) to `public/recipes/index.json`.

`shoppingList` items only need to include ingredients that have a store link; pantry staples can be omitted. The `difficulty` field should be `"Easy"`, `"Medium"`, or `"Hard"` — the card badge colour is driven by these exact strings.
