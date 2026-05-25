## Restructure "The System" into three asymmetric pillars

Replace the current 2x2 equal grid in `src/routes/index.tsx` with three independently-styled pillar blocks, in priority order. Remove Case Studies from this section entirely (it stays as the existing "Featured work" section further down the page).

### New section structure

Section eyebrow stays `01 — The system`, but headline shifts to something operational like "Three pillars. One event experience platform." with a meta line "Product · Software · Activation".

Then three full-width, visually distinct blocks stacked vertically — not a grid. Each block has its own background tone, layout, and visual weight.

---

### Pillar 1 — Product & Services (primary, largest)

- Full-bleed dark block on `--background` (charcoal), tallest block in the section.
- Asymmetric two-column layout (≈60/40): left = oversized editorial typography, right = cinematic event photo.
- Below the split, a horizontal modular preview strip showing 4–5 booth thumbnails pulled from `src/data/products.ts` (Mirror, 360 Video, AI Portrait, Multi-Camera, Open-Air), each a small image tile with monospace label, scroll-overflow on mobile.
- Two sub-labels: "Custom Experience" and "Legacy Photobooth · 12 products".
- Lime CTA → `/product-services`.
- Strongest type scale (e.g. `text-6xl md:text-8xl`), tight tracking.

### Pillar 2 — CAPTURES BOOTH (SaaS, technical)

- Narrower block on `--color-teal` background (reuse the existing teal section's tone) — clearly different surface from Pillar 1.
- Layout: left column = description + "Open captures.photo/booth ↗" outline-lime CTA; right column = condensed dashboard preview grid (small module tiles like Dashboard / Queue / Prints / Gallery / Analytics with mono labels and thin lime dividers, more "UI chrome" feel than the current version).
- Smaller headline scale than Pillar 1. Mono micro-labels everywhere ("v2.4", "uptime", "modules").
- This replaces the existing standalone "CAPTURES BOOTH preview" section further down the page — fold it into the system section so it reads as pillar 2.

### Pillar 3 — Space Activation (lifestyle, venue)

- Block with a lighter/warmer surface (use existing `--surface` or a subtle yellow-tinted band) to break from the teal above.
- Layout: full-width lifestyle/venue photograph on the left (≈55%), right column copy block with description, revenue-share callout, and a lime arrow link → `/space-activation`.
- More whitespace, airier padding, softer rhythm than the other two.
- Small inline meta row: "Cafés · Retail · Lifestyle venues" in mono.

---

### Visual separation rules

- Each pillar gets a different background token (charcoal / teal / surface), no shared grid lines between them.
- Vary vertical padding per pillar (Pillar 1 tallest, Pillar 2 medium, Pillar 3 medium-airy).
- Each pillar has its own numeric index (`P1 / P2 / P3`) shown in the top-left as a mono label, replacing the old `01–04` grid numbering.
- No 2x2 grid, no equal cards, no shared border-px hairlines between pillars.

### Removals

- Remove Case Studies card from the system section (it remains as the existing "Featured work" section lower on the page — untouched).
- Remove the separate standalone "CAPTURES BOOTH preview" section (its content is absorbed into Pillar 2).
- Drop the "Four operational areas" meta label.

### Files touched

- `src/routes/index.tsx` — rewrite the "SECTION INDEX" block as three pillar blocks; delete the standalone CAPTURES BOOTH section below it.
- No new components required (keep it inline for editorial control); reuse `SectionLabel`, existing tokens, and product images already in `src/data/products.ts`.
- No changes to routes, data, or other pages.
