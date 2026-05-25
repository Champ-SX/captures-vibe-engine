## Edit P2 — CAPTURES BOOTH Section

Update the homepage Pillar 2 (CAPTURES BOOTH) section in `src/routes/index.tsx` with the new copy provided by the user.

### Changes

**Left column (copy block):**
- Subtitle label: `Software for Business` (replacing "Software · v2.4")
- Headline: `CAPTURES BOOTH.` (replacing "CAPTURES BOOTH / Connected ops.")
- Description: "Event management, AI experience, instant sharing, live gallery, and client delivery — built for modern photobooth operators and agencies."
- Remove the 3 stat badges (99.9 uptime / 12 modules / Live sync) — the module grid below tells this story visually
- Keep CTA: `Open captures.photo/booth ↗`

**Right column (module grid):**
- Update dashboard title bar from "captures.booth / dashboard" to "captures.booth / modules"
- Replace the 8 old module tiles with 11 new ones:
  - Live Gallery (sync)
  - Instant Sharing (ok)
  - Customize UX/UI (active)
  - Framework Designer (PRINT · GIF · Video)
  - Event Dashboard (live)
  - Integration (api)
  - Multi-event Control (ready)
  - Realtime Monitor (↗)
  - Branding (on)
  - Analytics (↗)
  - Lead Collection (auto)
- Layout: 3 columns on desktop (was 4) to accommodate 11 items in a cleaner grid

### Files touched
- `src/routes/index.tsx` — surgical replacement of Pillar 2 section only

### No other changes
- P1, P3, Featured Work, Contact sections remain untouched
- No new routes, components, or dependencies needed