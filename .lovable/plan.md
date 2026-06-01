## Scope

Three coordinated improvements, all using existing CAPTURES tokens (dark theme, mono eyebrows, `font-display` headings, `bg-primary` CTAs, `RevealOnScroll`, `ParallaxImage`, border-grid sections).

---

## 1. New `/contact` route

**File:** `src/routes/contact.tsx` (+ nav entry in `src/components/SiteHeader.tsx`, footer link in `src/components/SiteFooter.tsx`).

**Structure:**
- `PageHero` — eyebrow `05 · Contact`, headline "Let's Create Something Memorable.", supporting copy as provided, no CTA (cards below are the action). Reuses an existing hero asset (e.g. `popupStudio02`) so no new image needed.
- **Contact methods grid** — 2×2 on desktop, single column on mobile. Each card is a large clickable surface:
  - **Call** — `tel:0802686632`, label "080-268-6632", lucide `Phone` icon
  - **LINE** — `https://line.me/R/ti/p/@SIXSHEET`, label "@SIXSHEET", lucide `MessageCircle` icon
  - **Email** — `mailto:admin@sixsheet.me`, label "admin@sixsheet.me", lucide `Mail` icon
  - **Instagram** — `https://www.instagram.com/sixsheet/`, label "@sixsheet", lucide `Instagram` icon
  - Card visual: bordered grid cell, large icon top-left, eyebrow ("Method / 01"), big `font-display` title, contact value in mono, primary-colored CTA arrow that slides right on hover, subtle `shadow-[0_0_60px_-20px_var(--color-primary)]` glow on hover, `transition-all duration-500`, `RevealOnScroll` staggered.
- **Studio block** — address card with `LocationMap` component (already in repo) using "33 Soi Pradipat 17, Pradipat Road, Samsennai, Phayathai, Bangkok 10400". Includes hours line if appropriate (skip if unknown).
- **Closing CTA band** — repeats primary email button, consistent with other pages.
- `head()`: title "Contact — CAPTURES", description, og tags.

**Nav:** add `Contact` link in `SiteHeader` desktop nav and mobile sheet, and in `SiteFooter`.

---

## 2. Technology page storytelling overhaul

**File:** `src/routes/technology.tsx`.

Replace the current uniform 2-column module grid with an alternating bento/zig-zag narrative. For each of the 6 modules build a dedicated section that varies in layout so the eye keeps moving:

| # | Module | Layout pattern | Imagery |
|---|---|---|---|
| 01 | Payment System | Split 50/50, image right | Reuse `sx-standard` (booth screen) |
| 02 | Creative PhotoPrint | Bento: large left image + 2 stacked print samples right | Reuse `popup-studio` + `box-shot` prints |
| 03 | GIF & Live Photo | Full-width band with sticky text left, animated GIF right | Reuse `photomoov-01/02.gif` |
| 04 | Cloud Gallery | Phone-mockup mood: dark surface with parallax phone screenshot | **Generate** 1 image (phone showing branded gallery) |
| 05 | Data Analytics | 60/40 split with mock dashboard visual | **Generate** 1 image (dark analytics dashboard mock) |
| 06 | Photo Merchandise | 3-up grid of merchandise photos | **Generate** 3 small images (keychain, magnet, charm) |

Each section uses:
- `RevealOnScroll` for headline/copy
- `ParallaxImage` (existing component) for hero imagery
- Existing border-grid feature chips at the bottom
- Module color tone preserved (teal/yellow accents per current data)
- Section number eyebrow kept (`MODULE / 0X`)

Add an intro band above the modules: SectionLabel + short paragraph framing the stack. Keep the closing CTA section as-is.

**New assets:** 5 generated images saved under `src/assets/technology/` (cloud-gallery.jpg, analytics-dashboard.jpg, merch-keychain.jpg, merch-magnet.jpg, merch-charm.jpg) using the agent image tool, dark cinematic palette matching brand.

---

## 3. Capture Booth detail — interactive feature list

**Identify the booth:** the product whose `name` contains "Capture Booth" (likely `sx-standard` family) in `src/data/products.ts`. Plan applies only to that single product detail page; other products keep current layout.

**Implementation:**
- New component `src/components/FeatureShowcase.tsx`:
  - Props: `features: { title: string; description?: string; image: string }[]`
  - Desktop (≥`md`): 2-column layout. Left = vertical feature list (each row: number, title, animated underline; on hover sets active index). Right = sticky large preview image with crossfade (`transition-opacity duration-500`, layered absolute images, active one `opacity-100`, others `opacity-0`).
  - Mobile (<`md`): Radix `Accordion` (already in `ui/accordion`) — each feature expands to reveal its image + description. Smooth height + fade using existing accordion animations.
  - Reuses existing typography/spacing tokens; primary color underline; respects `prefers-reduced-motion`.
- Replace the current "FEATURES" block in `product-services.$productId.tsx` with `FeatureShowcase` **only when product id matches Capture Booth**; other products keep the existing grid (no regression).
- Extend the Capture Booth's entry in `products.ts` with a `featureMedia: { title, description, image }[]` array. Generate one bespoke image per feature (5 images saved to `src/assets/products/capture-booth/feature-XX.jpg`), descriptions written from the existing feature names.

---

## Design system guardrails (applies to all 3)

- Colors only via tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary`, `border-border`, `bg-surface`, `var(--color-teal|yellow)`.
- Typography: `font-display` for headings, `font-mono` + `tracking-[0.2em]` for eyebrows, existing `eyebrow` utility where present.
- Spacing: `mx-auto max-w-[1400px] px-6 py-24` rhythm.
- Motion: reuse `RevealOnScroll`, `ParallaxImage`, `animate-kenburns`, accordion animations — no new keyframes needed.
- Mobile: every interactive surface ≥44px tap target; cards stack to single column; hamburger nav unchanged.
- SEO: each new route gets full `head()` with title/description/og tags, single H1.

## Out of scope

- No backend, no form (intentional — direct-contact cards are the request).
- No changes to other product detail pages beyond the conditional swap.
- No new global components beyond `FeatureShowcase`.
- No design-token additions.

## Technical notes

- Lucide icons are already used in the project (`SiteHeader` hamburger), so importing `Phone`, `Mail`, `MessageCircle`, `Instagram` is safe.
- LocationMap component exists; will pass the Bangkok address coordinates (approx 13.7848, 100.5436) — if it requires lat/lng I'll geocode statically in the file.
- New images generated via the agent `generate_image` tool at 1280×800 (landscape) / 1024×1024 (square merch), saved as `.jpg` in `src/assets/`.
- All new code lives in client components; no server functions needed.
