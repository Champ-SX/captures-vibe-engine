# CAPTURES Website — Build Plan

A multi-page marketing site for CAPTURES by SIXSHEET. Dark-first editorial design, modular sections, reusable product/case-study templates, and a strategic secondary color system for section rhythm.

## Design system (src/styles.css)

Tokens (oklch equivalents of brand hex):
- `--background` charcoal `#231F20`
- `--foreground` white
- `--primary` lime `#DEFF4C` (CTAs, active states, signals — used sparingly)
- `--accent-teal` `#193133` (workflow / system sections)
- `--accent-yellow` `#F0F424` (creative output / merch — rare)
- Light theme: white bg, near-black text, lime accents subtle
- Typography: Inter Tight (body) + a bold display (Geist or General Sans via Google fonts fallback). Tight tracking, large display sizes, compact UI text.
- Subtle grain overlay utility (SVG noise) for hero/section backgrounds
- Sharp corners (radius ~2–6px), thin 1px borders, no glow/glass

## Route structure (TanStack Start, separate files)

```
src/routes/
  __root.tsx                       header + footer + grain overlay
  index.tsx                        home (hero, what is CAPTURES, section index)
  product-services.tsx             /product-services
  product-services.$productId.tsx  /product-services/product-01 … 12
  space-activation.tsx             /space-activation (with map)
  case-studies.tsx                 /case-studies
  case-studies.$slug.tsx           /case-studies/case-study-01 … 04
  technology.tsx                   /technology
```

CAPTURES BOOTH = external link in nav to `http://captures.photo/booth` + a preview section embedded on the home page.

Each route gets its own `head()` with title, description, og:title, og:description. Leaf product/case-study pages add og:image from their hero.

## Shared components (src/components/)

- `SiteHeader` — sticky, compact, logo + 5 nav items, active link underline in lime
- `SiteFooter` — minimal editorial footer with contact CTA
- `GrainOverlay` — fixed SVG noise layer, low opacity
- `SectionLabel` — small uppercase tag + index number (operational feel)
- `EditorialHero` — reusable hero with eyebrow, large headline, supporting line, CTA
- `ProductCard` — image, name, short desc, output type, "best for", arrow CTA
- `CaseStudyCard` — large cinematic image card with title overlay
- `TechModuleCard` — dashboard-styled card for technology modules
- `LocationMap` — Leaflet + CARTO dark basemap (no Google styling), custom lime markers
- `InquiryCTA` — reused on product/case study pages
- `ProductTemplate` / `CaseStudyTemplate` — page layouts that take a data object

## Page composition

**Home (`/`)** — Hero (charcoal + grain), section index navigating the 5 areas, CAPTURES BOOTH preview block (teal), featured case study strip, contact CTA. Section background colors alternate charcoal → teal → charcoal → light → charcoal to give navigation rhythm.

**Product & Services** — Hero, "Custom Experience" long-form section (immersive event visuals with operational overlays), then "Legacy Photobooth" 12-card grid linking to detail pages.

**Product detail** — Reusable template driven by a data file (`src/data/products.ts`) with 12 entries: hero, overview, outputs, use cases, features, setup, branding, sample outputs grid, inquiry CTA.

**Space Activation** — Hero, lifestyle-leaning content blocks (long-term installs, retail, café, revenue share), full-bleed interactive dark map section with sample location pins, venue gallery.

**Case Studies** — Editorial index of 4 large cinematic cards.

**Case Study detail** — Reusable template (`src/data/caseStudies.ts`): hero, overview, challenge, guest journey, technology used, outputs, gallery, results, behind-the-scenes.

**Technology** — Modular grid of 6 modules (Payment, Creative Print, GIF & Live Photo, Cloud Gallery, Analytics, Photo Merchandise), each a dashboard-style card with operational overlays. Teal section accents.

## Map (Space Activation)

Use Leaflet + CARTO dark-matter tiles (free, no API key, matches identity). Custom lime SVG markers, minimal popups, disable default zoom controls, restyle attribution. Sample locations as a data array — easy to extend later.

## Images

Use Unsplash-hosted URLs for cinematic event photography placeholders (real-looking event photos, not stock-illustration). Document where to swap in real CAPTURES photography later. No AI 3D blobs, no glassmorphism.

## Content

Use the user's preferred voice: "Built for events.", "Designed for engagement.", "Simple to operate." Avoid buzzword vocabulary. Body copy short, operational.

## Scope of this first build

Ship all 5 top-level routes + product detail template (with 12 data entries, lighter placeholder copy) + 4 case study detail pages + technology modules + dark map. Polished but content placeholders are clearly written so they can be replaced by the CMS later. No backend/Cloud needed yet; inquiry CTAs link to `mailto:` for now (can be upgraded to a form + Cloud later).

## Technical notes

- TanStack Start file routing, `head()` per route, no hash anchors for major sections
- `bun add leaflet react-leaflet @types/leaflet` for the map
- Google Fonts via `<link>` in `__root.tsx` head
- All colors in `src/styles.css` as oklch tokens; no hex in components
- Reusable page templates driven by `src/data/*.ts` so 12 products / 4 case studies share one component each

One clarification before I build: confirm you're OK with (a) Leaflet + CARTO dark tiles for the map (free, no key, matches the aesthetic) vs. wiring up Google Maps via the Lovable connector, and (b) `mailto:` inquiry buttons for now vs. enabling Lovable Cloud to capture form submissions. I'll default to Leaflet + mailto if you don't specify.
