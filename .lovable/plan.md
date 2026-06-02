## Goal

Update the scrolling marquee strip on the homepage (the one currently showing "Photobooth systems · Space activations · Event technology · AI portrait · 360 video · Mirror booth · Live gallery · Brand experiences") to use the new list you specified.

## Change

**File:** `src/routes/index.tsx` (line 135, the first `<Marquee>` block)

Replace the current 8 generic items with this exact sequence (4 categories + all 12 legacy products from `src/data/products.ts`):

1. Live displays
2. Multi-camera systems
3. Brand activations
4. Data and report
5. LCA (Light Camera Action)
6. PHOTOMOOV
7. AUTO SNAP
8. STORYBOOTH
9. POPUP FILM SLIDE
10. POPUP TOP VIEW
11. POPUP STUDIO
12. AI BOOTH
13. BOX SHOT
14. SX TALLY
15. SX PORTABLE
16. SX STANDARD

Same styling, same bullet dot separators, same marquee speed (45s). Just the label list changes.

## Out of scope
- The second marquee (line 222) is untouched.
- No changes to fonts, colors, or layout.
- No changes to product data or other sections.
