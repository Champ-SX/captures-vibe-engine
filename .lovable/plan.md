## Goal
Apply the Captures v1.0 brand identity across the site: new aperture logomark, Neulis Alt typography via your Adobe Fonts kit, and tightened secondary-color usage.

## 1. Logo — rebuild as inline SVG
New `src/components/CapturesLogo.tsx` with three variants matching the brand guide:
- `monogram` — the 9-blade radial aperture mark (9 rounded rectangles rotated around a central negative-space burst), drawn with `currentColor`.
- `horizontal` — monogram + "CAPTURES" wordmark side-by-side (header default).
- `vertical` — monogram stacked above wordmark (footer).

Props: `variant`, `tone` ("lime" | "white" | "black"), `className`. No hardcoded hex — inherits from text color so it adapts to dark/light surfaces.

Replace the current placeholder (green square + `CAP*TURES`) in:
- `src/components/SiteHeader.tsx` → horizontal
- `src/components/SiteFooter.tsx` → vertical
- `public/favicon.svg` (monogram only) + wire into `__root.tsx` head links.

## 2. Typography — Neulis Alt via Adobe Fonts
Wire your kit into `src/routes/__root.tsx`:
```
<link rel="stylesheet" href="https://use.typekit.net/nix0vlv.css">
```
Remove the Google Fonts `<link>` for Space Grotesk + Inter Tight (keep JetBrains Mono — brand guide doesn't specify mono and the technical accent reads on-brand).

Update `src/styles.css`:
- `--font-display: "neulis-alt", "Space Grotesk", system-ui, sans-serif;`
- `--font-sans: "neulis-alt", "Inter Tight", system-ui, sans-serif;`
- Keep `--font-mono` unchanged.

If the kit's family slug differs from `neulis-alt`, I'll adjust after a quick check in the preview.

## 3. Color usage — already aligned, light accent pass
Tokens in `src/styles.css` already match the guide exactly (Black `#231F20`, Lime `#DEFF4C`, Dark Teal `#193133`, Yellow `#F0F424`). No token changes. Two small accent moves to honor the 30/30/20/10/10 ratio:
- Introduce **yellow** as a small interactive accent (eyebrow highlight / "live" dot on home hero).
- Use **dark teal** as the surface for one existing section band (likely the Captures Booth callout on `/`) — content untouched, only `bg-teal text-teal-foreground`.

## 4. Out of scope (this pass)
- Brand pattern from page 9 (geometric repeating motif).
- Sub-brand lockups (CAPTURES x PAY, x BOOTH).
- Stationery / merch mockups.

## Files touched
- new: `src/components/CapturesLogo.tsx`
- new: `public/favicon.svg`
- edit: `src/components/SiteHeader.tsx`
- edit: `src/components/SiteFooter.tsx`
- edit: `src/routes/__root.tsx` (Adobe Fonts link, remove Google display fonts, favicon)
- edit: `src/styles.css` (font-family vars only)
- edit: `src/routes/index.tsx` (yellow accent + dark teal section band)
