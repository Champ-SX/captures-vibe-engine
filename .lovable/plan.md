## Goal

Use the real "CAPTURES Locations" list (from the uploaded .docx) on the Space Activation page so visitors can actually see where photoautomats are installed — both on the map and as a readable list with Google Maps links.

## Source data (12 Bangkok-area venues)

| # | Name | Venue | Address |
|---|------|-------|---------|
| 1 | RIVERCITY Fl.3 | River City Bangkok | 23 Trok Rongnamkhaeng, Charoenkrung Rd, Sampantawong, Bangkok 10100 |
| 2 | นิทรรศการรัตนโกสินทร์ | Rattanakosin Exhibition Hall | 100 Ratchadamnoen Klang Ave, Phra Nakhon, Bangkok 10200 |
| 3 | Woot Woot | Warehouse 30 Bangkok | 52–60 Charoen Krung 30, Bang Rak, Bangkok 10500 |
| 4 | BACC Fl.5 | Bangkok Art & Culture Centre | 939 Rama I Rd, Wang Mai, Pathum Wan, Bangkok 10330 |
| 5 | CTW | CentralWorld Bangkok | 999/9 Rama I Rd, Pathum Wan, Bangkok 10330 |
| 6 | Neighbor Thonglor | Neighbor Bar Thonglor | Thonglor (Sukhumvit 55), Bangkok |
| 7 | QSNCC Fl. LM / LG | Queen Sirikit National Convention Center | 60 New Ratchadapisek Rd, Khlong Toei, Bangkok 10110 |
| 8 | Museum Siam | Museum Siam | 4 Sanam Chai Rd, Phra Nakhon, Bangkok 10200 |
| 9 | Dog's Dream | Dog's Dream | Ratchaphruek Rd, Bang Khanun, Bang Kruai, Nonthaburi 11130 |
| 10 | Such A Small World | Such A Small World | Bangkok — [maps link](https://maps.app.goo.gl/ScTRZqveRttimn2j8) |
| 11 | Low Key | Low Key | Bangkok — [maps link](https://maps.app.goo.gl/uD12DCwxy9TCz8eb9) |
| 12 | KTB HQ | Krungthai Bank HQ | 35 Sukhumvit Rd, Khlong Toei Nuea, Watthana, Bangkok 10110 — [maps link](https://maps.app.goo.gl/QhLqV3r5MVPF7eFD8) |

All marked **active**. Map link for venues without an explicit short link will be generated as `https://maps.google.com/?q=<encoded address>`.

## Changes

### 1. `src/components/LocationMap.tsx`
- Replace the 8 placeholder `locations` with the 12 real venues above (name, venue, address, lat/lng, mapsUrl).
- Use known approximate Bangkok coordinates for each address (e.g. River City ~13.7378,100.5126; BACC ~13.7466,100.5302; CentralWorld ~13.7466,100.5396; QSNCC ~13.7234,100.5601; Museum Siam ~13.7437,100.4944; Warehouse 30 ~13.7290,100.5158; Rattanakosin Exhibition Hall ~13.7565,100.5019; Thonglor ~13.7370,100.5800; KTB HQ Sukhumvit ~13.7440,100.5800; Dog's Dream Bang Kruai ~13.8050,100.4480; plus geocoded Such A Small World / Low Key from their share links).
- Recenter map to Bangkok (`[13.75, 100.55]`, zoom 11) so all pins are visible.
- Popup gets venue name + address + an "Open in Maps ↗" link.
- Drop the "active / upcoming" legend (all are active) — replace with a single "12 active locations" tag.

### 2. `src/routes/space-activation.tsx`
- Below the `<LocationMap />`, add a new "Active locations" list section (grid of 12 cards, 1/2/3 cols responsive):
  - Eyebrow number `01 → 12` (mono, primary)
  - Location name (display font)
  - Venue subline (muted)
  - Address (small body)
  - "Open in Maps ↗" link (mono uppercase) using each venue's mapsUrl
- Update the Network section copy: "12 active locations across Bangkok and Nonthaburi."
- Share the venue array between the map and the list by exporting it from `LocationMap.tsx` (or a new `src/data/locations.ts`) so they never drift.

## Out of scope
- No backend / CMS.
- No changes to other pages, hero, gallery, or formats grid.
- No new dependencies.
