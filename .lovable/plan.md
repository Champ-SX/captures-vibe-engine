## Plan: Turn the home hero into a 2-slide slideshow

### What's there now

`src/routes/index.tsx` renders a single static hero image (`heroKiehls`) with a Ken Burns animation, a gradient overlay, and the floating headline/stats cards on top.

### Change

1. **Upload the new image as a CDN asset** → `src/assets/hero/hero-jolly-summer.jpg.asset.json` (using `lovable-assets create` from the user upload — no binary committed).
2. **Replace the single `<img>` in the HERO section** with a 2-slide crossfade slider:
   - Slide 1: existing `heroKiehls` (Kiehl's activation).
   - Slide 2: new Siam Center × Jolly Bears Summer Carnival photo.
   - Auto-advance every ~6s, smooth opacity crossfade (~1s), keep the Ken Burns motion per slide.
   - Small slide indicators (dots) at bottom-center of the hero, clickable to jump.
   - All overlays (gradient, eyebrow label, headline card, stats) stay exactly as they are — they sit above the slides.
3. **No other sections change.** This is hero-only.

### Files touched

- `src/assets/hero/hero-jolly-summer.jpg.asset.json` (new, CDN pointer)
- `src/routes/index.tsx` (hero markup + tiny `useEffect`/`useState` for the active slide)

### Out of scope

- Adding more than 2 slides, arrow controls, or swipe gestures (can follow up if you want them).
- Changing the headline, stats, or any copy.
