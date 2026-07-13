# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `frontend/` (the actual app root — this repo root is one level above the Vite project):

```bash
cd frontend
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint over the whole project
```

There is no test framework configured (no test script, no test files). Don't invent one unless asked.

## What this is

A marketing/landing-page site for "Marketing Solution VI" (MSVI), an HOA (homeowners association) data and outreach product targeting California counties. It is currently a static, client-only React SPA — there are no `fetch`/`axios` calls or `import.meta.env` usage anywhere in `frontend/src/`.

This repo is a monorepo with two top-level directories: `frontend/` (the Vite/React app described below — all paths in this file like `src/`, `custom.scss`, etc. are relative to `frontend/`) and a sibling `backend/` (Node + MongoDB, judging from its `.env`). The backend is currently unintegrated — no part of the frontend calls it. Don't assume backend routes or contracts exist; check `backend/` if a task requires it.

## Architecture

**Entry & routing chain**: `main.jsx` → `BrowserRouter` → `App.jsx` → `MainLayout` (via `Routes`) → page components. `App.jsx` renders one `<Routes>` with `MainLayout` as the sole top-level `<Route>`; `LandingPage` is hardcoded as its `index` route, and all other routes are spread in from the `routes` array in `routes.jsx`. `MainLayout` wraps every page in `Header` + `Footer` around an `<Outlet />`.

When adding a page, add it to the array in `routes.jsx` rather than editing `App.jsx` directly. Placeholder routes (`/events`, `/myvi`) currently point at `NotFound` — that's intentional scaffolding for pages not yet built, not a bug.

**Landing page composition**: `LandingPage.jsx` is a straight sequence of section components (`Landing`, `Stats`, `Shoutout`, `HoverMap`, `AddOns`, `MSVISolution`), interleaved with `Shoutout` used as a reusable divider/CTA banner (takes `title`, `desc`, `theme` props). Each section is a self-contained component in `src/components/`; there's no shared layout/grid system beyond Bootstrap.

**Styling model** — two layers, both in active use:
1. `src/custom.scss` (imported once, globally, in `main.jsx`) — `@use`s Bootstrap's SCSS with a customized theme: custom color variables (`$primary-color`, `$primary-dark-color`, etc.) and an extended `$theme-colors` map that adds non-standard Bootstrap variants `primary-dark` and `gray` (usable as `bg-primary-dark`, `text-primary-dark`, `btn-gray`, etc.). It also defines page-specific rules scoped by prefix: `ca-*` classes belong to the California map (`HoverMap.jsx`), `msvi-*` classes belong to the landing stats/data-card sections (`Stats.jsx`).
2. Component-local `<style>{STYLES}</style>` blocks — some components (e.g. `TargetedOutreach.jsx`, `Mapline.jsx`) define a `STYLES` template string of scoped CSS classes and inject it via a literal `<style>` tag in their JSX rather than adding to `custom.scss`. This is the established pattern for styling that's genuinely one-component-only; global/reusable theme values still belong in `custom.scss`.

**`HoverMap.jsx`** (`src/components/HoverMap.jsx`, ~725 lines) is the interactive California county map and the most complex file in the codebase. Structure: the first ~380 lines are static data tables — `COUNTY_PATHS` (SVG path `d` strings per county), `CENTROIDS`, `GROUPS` (counties bundled/priced together), `COUNTY_GROUP` (county → group key), `COUNTY_NUMBER` (pricing per county/group), `TIER_MAP`, `DATA_FIELDS`, `FIELD_DESC` — followed by the actual component logic (hover/click/select state, mobile vs. desktop layout via `useWindowWidth`, a running-total "cart" of clicked counties/groups). When editing map behavior, the component logic starts around `useWindowWidth()`; when editing pricing or which counties are grouped, edit the data tables instead.

**`src/misc/`** holds components (`PriceBox.jsx`, `PriceScale.jsx`) that are tracked in git but not imported or wired into any route — treat as in-progress/scratch work, not dead code to delete without checking with the user first.

**Assets**: `src/assets/` holds SVGs/PNGs imported directly into components (no asset pipeline beyond Vite's default handling).

## Deployment

`vercel.json` rewrites all paths to `/index.html`, which is required for client-side routing (react-router) to work on Vercel — don't remove it.
