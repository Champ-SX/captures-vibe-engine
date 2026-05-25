# Update Product & Services page

Scope: copy + data updates only on `/product-services`. No layout/design changes.

## 1. Hero (`src/routes/product-services.tsx`)

- Headline → "Photobooth systems for every format of event." (split as two lines, second line muted)
- Subtitle → "A Custom Experience and a hardware catalogue engineered around how modern activations actually flow — from unattended retail to high-volume brand experiences."

## 2. Section 01 · Custom Experience

Keep current heading and intro paragraph. Add two new tiles to the feature grid (becomes 8 items):

- **Data and report** — "Leverage insights for the next activation."
- **Queue and Check-In** — "Manage guest flow and on-site check-in."

## 3. Section 02 · READY TO DEPLOY PHOTOBOOTH

- Section label "02" → "Ready to Deploy Photobooth"
- Remove headline "Twelve booths. One system." and any descriptive copy → keep only the label + product count + grid (no description, per instruction)

## 4. Product list rename (`src/data/products.ts`)

Rename the 12 products in order. Keep all existing taglines, images, features, specs, samples for now (only `name` changes); ids stay the same so detail routes keep working.

1. LCA
2. PHOTOMOOV
3. AUTO SNAP
4. STORYBOOTH
5. POPUP FILM SLIDE
6. POPUP TOP VIEW
7. POPUP STUDIO
8. AI BOOTH
9. BOX SHOT (photoautomat)
10. SX TALLY (photoautomat)
11. SX PORTABLE (photoautomat)
12. SX STANDARD (photoautomat)

## Open question

Taglines/descriptions/images for each new product are kept from the previous data as placeholders. Share new copy/photos per product whenever ready and I'll swap them in.
