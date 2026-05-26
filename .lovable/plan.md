## Plan

Replace the homepage hero background with the uploaded Kiehl's image.

1. Copy `user-uploads://DSCF6711-4K.jpg` to `src/assets/hero/hero-kiehls.jpg`.
2. In `src/routes/index.tsx`:
   - Import the new image.
   - Set it as the hero section background (absolute-positioned `<img>` with `object-cover`, behind content).
   - Add a dark gradient/overlay on top to keep hero text legible against the bright orange image.
3. Verify build and visual result in preview.