Establish a project rule: when a source image's aspect ratio doesn't match its frame, render it at 100% width/height with `object-contain` (never crop). Surround it with an elegant matte so the empty space looks intentional.

## Files to change

### 1. `src/routes/product-services.$productId.tsx` — Sample outputs grid
- Change tile wrapper to act as a matte: keep `aspect-[4/5]`, change background to `bg-surface` with inner padding `p-3`, keep border.
- `<img>`: `object-cover` → `object-contain`; drop `img-hover-lift`; add `h-full w-full` + gentle `transition-transform duration-500 group-hover:scale-[1.02]`.
- `<video>`: `object-cover` → `object-contain`.

### 2. `src/components/FeatureShowcase.tsx`
- Desktop preview image (line ~110): `object-cover` → `object-contain`; add inner padding via wrapper (`p-6 md:p-10`) so contained images breathe.
- Caption overlay: reduce gradient strength so a centered contained image isn't visually clipped by the overlay (lower opacity / shorter gradient).
- Mobile accordion image (line ~148): `object-cover` → `object-contain`; add `bg-surface p-3`.

## Out of scope
- Lineup grid thumbnails, PageHero, ParallaxImage, data files, other routes — unchanged.
- No new assets, no copy changes, no layout restructuring beyond padding/background.
