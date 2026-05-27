## Goal

Move the site from its current static, text-forward grid into a more cinematic, image-led experience — closer in feel to definedvc.com: full-bleed visuals, motion, overlapping image/text, and richer transitions. Keep the existing brand (Neulis Alt, lime/teal palette, 9-blade logo) and the existing copy/structure.

## What changes (home page first)

1. **Cinematic hero**
   - Replace the current 60%-opacity background image with a true full-bleed hero (image now, easy to swap to muted autoplay video later).
   - Add a subtle Ken-Burns slow zoom + parallax on scroll.
   - Move the headline into a floating dark card pinned bottom-left (definedvc-style), so the imagery dominates and copy reads as an overlay.
   - Marquee ticker under the hero ("Photobooth systems · Space activations · Event tech ·") for constant motion.

2. **Image-heavy section rhythm**
   - Break up the long text pillars (P1 Product & Services, P2 Space Activation, P3 Technology) with full-bleed image bands between them — each pillar gets a hero image that scrolls past at its own speed (parallax).
   - Replace the current 5-up product strip with a horizontal auto-scrolling product carousel (infinite marquee of product cards).
   - Featured case studies: switch from the current 2-column static cards to large overlapping image tiles with hover zoom + reveal of title/client.

3. **Motion layer (global)**
   - Add reveal-on-scroll for headlines and section labels (fade + 12px rise, IntersectionObserver, respects `prefers-reduced-motion`).
   - Hover: images get a slow scale(1.03) + slight desaturate→saturate; CTAs get an animated underline sweep.
   - Cursor-follow soft glow on hero (lime, low-opacity blur) — desktop only.

4. **Case studies index + detail**
   - Index: convert grid to a tall, asymmetric image-led list (alternating left/right large images, project meta on the opposite side).
   - Detail: bigger lead image, image-first gallery breaks between text blocks.

5. **Out of scope (this pass)**
   - No copy rewrites, no new sections, no nav changes.
   - No new pages.
   - No backend / data changes.
   - Video assets — structure ready, but we'll keep images until you supply video.

## Technical notes

- All motion via CSS + a small `useInView` hook (IntersectionObserver). No new heavy deps. If we want richer choreography later, we can add Motion for React.
- Marquee = pure CSS keyframes, duplicated track, paused on hover.
- Parallax = `transform: translate3d(0, scrollY * factor, 0)` via rAF, gated by `prefers-reduced-motion`.
- New shared components: `<FullBleedImage />`, `<Marquee />`, `<RevealOnScroll />`, `<ParallaxImage />` in `src/components/`.
- Tokens stay in `src/styles.css` — no palette changes.

## Suggested order

1. Hero (overlay card + parallax + marquee)
2. Reveal-on-scroll + hover primitives (global)
3. Product marquee + case-study image tiles on home
4. Pillar full-bleed image bands
5. Case studies index/detail polish

## Open questions before I build

- Do you want me to start with **just the home page** so you can react to the new feel, then roll it out to case studies + pillars? (Recommended — fastest feedback loop.)
- Any hero image you want me to use, or keep `hero-kiehls.jpg`?
