## Plan: Replace "02 Features" with sample outputs

The current "02 Features" section pairs feature names (e.g. "Animated prompts") with random sample images, which causes mismatches. We'll remove it entirely and promote "Sample outputs" into that slot.

### Changes in `src/routes/product-services.$productId.tsx`
1. **Delete** the `<FeatureShowcase>` block (lines 76–82) and its import.
2. **Renumber** the Sample outputs section from `05` → `02`, keeping the existing 3-column responsive grid of images/videos.
3. **Renumber** downstream sections:
   - Use cases: `03` (unchanged)
   - Branding: `04` (unchanged)
   - Lineup: `05` (was 06)
4. **Drop** the `buildFeatureItems` helper (no longer used).
5. **Update PageHero meta**: replace `Features: N modules` chip with `Samples: N` (so the hero doesn't advertise the removed section).

### Out of scope
- No changes to product data, other pages, or the FeatureShowcase component file itself (kept for potential reuse).
- No layout/typography changes to the samples grid.
