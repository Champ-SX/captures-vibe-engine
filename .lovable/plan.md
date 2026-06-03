## Plan: Update Space Activation hero image

The image you just specified is the vintage curiosity shop / Fotoautomat + mannequin shot — currently used in the "In the wild" gallery as `fotoautomat-mannequin.jpg`. We'll promote it to the page hero.

### Changes

1. **Replace the hero asset** at `src/assets/space-activation/hero.jpg` with the uploaded image (`user-uploads://image.png`, re-saved as JPG).
2. **Keep the gallery intact** — the same shot continues to appear in the gallery grid (it reads well in both contexts and matches the "in the wild" tone).
3. **Update hero alt text** in `src/routes/space-activation.tsx` from "Lifestyle space activation" to something accurate, e.g. "Fotoautomat booth inside a vintage curiosity shop".

No layout, copy, or structural changes — only the hero image source and its alt text.

### Files touched

- `src/assets/space-activation/hero.jpg` (replaced)
- `src/routes/space-activation.tsx` (alt text only)
