# Mobile Modules — Swipe Carousel

Replace the current 2-column mobile grid in the "captures.booth / modules" block on the home page with a horizontal, snap-scrolling carousel of richer cards. Desktop (md+) keeps the existing 3-column grid with the hover preview popup — no change above the md breakpoint.

## What the user sees on mobile

- A single horizontally scrollable row of cards inside the existing bordered module panel.
- Each card shows: MODULE eyebrow, module name, status value, and the preview image (the same image used by the desktop hover popup).
- Native momentum scroll with CSS scroll-snap so each card snaps cleanly into view.
- A thin progress indicator under the carousel (mono dots or a fill bar) showing position across the 11 modules.
- A subtle "swipe →" hint on first paint that fades out after the first scroll.

## Card design (mobile)

- Width ~78% of viewport so the next card peeks in from the right (signals swipeability).
- Aspect ~4/5 with the preview image filling the top, dark gradient overlay at the bottom.
- Text block over the gradient: `MODULE` eyebrow (mono, primary), name (display), status (mono, muted).
- Same teal background token as the desktop tiles, same border treatment, same typography scale.

## Layout & behavior

```text
┌──────────── captures.booth / modules ─── v2.4 ┐
│ ┌──────────────┐ ┌──────────────┐ ┌────────  │
│ │ [img]        │ │ [img]        │ │ [img]    │  → swipe
│ │ MODULE       │ │ MODULE       │ │ MODULE   │
│ │ Live Gallery │ │ Instant…     │ │ Custom…  │
│ │ sync         │ │ ok           │ │ active   │
│ └──────────────┘ └──────────────┘ └────────  │
│            ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○             │
└───────────────────────────────────────────────┘
```

## Technical notes

- Single edit in `src/routes/index.tsx` inside the existing modules block.
- Reuse the existing `modules` array (name, value, image) so desktop and mobile stay in sync.
- Mobile container: `flex overflow-x-auto snap-x snap-mandatory md:hidden` with `scroll-pl-4` and hidden scrollbar (`[&::-webkit-scrollbar]:hidden`).
- Each card: `snap-start shrink-0 w-[78%]` wrapper.
- Desktop block stays as-is, gated with `hidden md:grid`.
- Progress dots: track scroll position with a single `onScroll` handler + `useState` for active index; no new deps.
- Use existing tokens only (`--color-teal`, `border-border`, `text-primary`, `font-mono`, `font-display`). No new CSS variables.
- Respects `prefers-reduced-motion` via existing global styles (no custom motion added).

## Out of scope

- No changes to desktop hover popup.
- No changes to other sections, routes, or data files.
- No new components or dependencies.
