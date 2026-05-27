## Goal

Apply the same definedvc-style cinematic treatment to every page — full-bleed image hero with floating dark overlay card, scroll reveals, parallax bands, and image-led sections — so the whole site reads as one consistent, image-first experience.

## Per-page changes

**Pattern (applied to every page below):**
- Hero: full-bleed image (Ken-Burns) + dark floating card bottom-left with eyebrow, big headline, short intro, CTA. Replaces current text-on-tinted-bg hero.
- Section headings wrapped in `<RevealOnScroll>`.
- Long text blocks broken up with at least one parallax image band (`<ParallaxImage>`).
- Images get `img-hover-lift` + grayscale→color on hover.

### 1. `/case-studies` (index)
- Hero: cinematic header with overlay card "Selected work / Brand activations & live experiences."
- List: convert grid → alternating asymmetric large-image rows (left/right zigzag), each row = big image tile with overlay caption (title, client, year) revealed on hover, like the home Featured Work tiles.

### 2. `/case-studies/$slug` (detail)
- Hero: full-bleed lead image (case-study cover) + floating card with client tag, title, year, location.
- Metadata strip below (services / scope / venue) in mono caps.
- Gallery breaks: insert one parallax image band between text sections.
- Image lift on all gallery thumbs.

### 3. `/product-services` (index)
- Hero: full-bleed image + overlay card "Product & Services / Modular booths for modern activations."
- Product grid: cards become image-led tiles (image fills, mono label overlay, hover lift).

### 4. `/product-services/$productId` (detail)
- Hero: full-bleed product image + overlay card with product code, name, short blurb, CTA.
- Spec sections wrapped with RevealOnScroll; gallery uses hover lift.

### 5. `/space-activation`
- Hero: full-bleed photoautomat image + overlay card "Space Activation / Always-on capture in your venue."
- Insert one parallax band mid-page.

### 6. `/technology`
- Hero: full-bleed tech/abstract image + overlay card "Technology / The system behind every capture."
- Module sections wrapped with RevealOnScroll.

## Shared primitive: `<PageHero>`

To avoid copy-paste, add one new component `src/components/PageHero.tsx`:

```
<PageHero
  image={src}
  eyebrow="01 · Case Studies"
  title={<>Selected <span className="text-primary">work.</span></>}
  intro="Brand activations and live experiences..."
  cta={{ to: "/contact", label: "Start a project →" }}
  meta={[{ k: "Client", v: "Cartier" }, ...]}   // optional
/>
```

It renders: full-bleed Ken-Burns image, gradient fade to background, eyebrow at top, floating dark overlay card bottom-left, optional metadata strip. Used by all 6 pages.

## Out of scope (this pass)
- No copy rewrites — reuse existing headlines/blurbs.
- No new pages, no nav changes.
- No new hero imagery — reuse what each page already imports. If a page lacks a hero image, fall back to its first gallery image.
- No backend changes.

## Open question
- Want me to apply this to all 6 pages in one pass, or start with case studies (index + detail) first so you can react before the rest?
