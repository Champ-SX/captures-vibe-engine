## Plan: Rebuild Space Activation gallery from the uploaded set, no duplicates

### What's wrong now

The gallery on `/space-activation` lists 8 tiles but only 6 are unique files:
- `rkf-cafe.jpg` == `fotoautomat-skeleton.jpg` (identical bytes)
- `sx-automat-hallway.jpg` == `cafe-coincidence.jpg` (identical bytes)
- The new hero (mannequin + Fotoautomat) is the same shot as the gallery's `fotoautomat-mannequin.jpg`

Meanwhile `space_activation-2.zip` contains 11 fresh photos that aren't being used.

### Fix

1. **Extract the zip** to a temp dir and pick the real photos (skip videos, 3D renders, the KV poster).
2. **Wipe the current `src/assets/space-activation/` jpgs** and replace with the new set, uploaded via `lovable-assets` (CDN pointers, not committed binaries). Keep the hero as the mannequin + Fotoautomat shot you specified.
3. **Update `src/routes/space-activation.tsx`**:
   - Switch all gallery `import` statements from local `.jpg` files to the new `.jpg.asset.json` CDN pointers.
   - Remove the duplicate slot — the hero shot will NOT also appear in the gallery.
   - Final gallery = 8–10 unique tiles drawn from the new photo set, with accurate alt text for each (café, retail pop-up, temple, hallway booth, etc.).
   - Hero remains the mannequin/Fotoautomat image (stays in `hero.jpg`).
4. **Delete the now-unused legacy files** (`rkf-cafe.jpg`, `sx-automat-hallway.jpg`, `fotoautomat-mannequin.jpg`, etc.) so the asset folder doesn't accumulate orphans.

### Out of scope

- 3D renders (`JOSH-3D.png`, `BP-3D.png`, `Coin-3D.png`) and the `KV-CAP_TURES-09.png` brand poster — these don't belong in an "In the wild" photo gallery. If you want them surfaced somewhere, say where (e.g. a separate "Concepts" strip) and I'll add it in a follow-up.
- Videos in the zip — same reasoning; tell me where to use them.

### Files touched

- `src/assets/space-activation/*.jpg.asset.json` (new, ~10 pointers)
- `src/assets/space-activation/*.jpg` (legacy files removed)
- `src/routes/space-activation.tsx` (imports + gallery array)
