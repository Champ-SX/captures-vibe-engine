## Goal

Replace the single placeholder sample on the **LCA (Light Camera Action)** product page with the 10 real samples you uploaded (8 images + 2 videos).

## Files

### 1. Upload assets to CDN via `lovable-assets`
Upload the 10 uploaded files and create `.asset.json` pointers under `src/assets/products/lca/`:

- `S__16195888_0.jpg` → `lca-sample-01.jpg.asset.json`
- `JESSICA.jpg` → `lca-sample-02.jpg.asset.json`
- `20201216_185255_006...jpg` → `lca-sample-03.jpg.asset.json`
- `Sephora.jpg` → `lca-sample-04.jpg.asset.json`
- `20201216_185432_141...jpg` → `lca-sample-05.jpg.asset.json`
- `photo_1573308313.jpg` → `lca-sample-06.jpg.asset.json`
- `Sephora_2.jpg` → `lca-sample-07.jpg.asset.json`
- `S__16195890.jpg` → `lca-sample-08.jpg.asset.json`
- `LOUBI GRAFT.mp4` → `lca-sample-09.mp4.asset.json`
- `Fragrant Race Pace.mp4` → `lca-sample-10.mp4.asset.json`

### 2. Extend sample type — `src/data/products.ts`
Change `samples: string[]` to support video:
```ts
samples: (string | { type: "video"; src: string; poster?: string })[];
```
Import the 10 new asset pointers and replace LCA's `samples: [lca01]` with all 10 (8 image URLs + 2 video objects). Use sample-01 image as the poster for both videos.

### 3. Render videos — `src/routes/product-services.$productId.tsx`
Update the samples grid (line 108-114) to detect video items and render `<video controls muted playsInline poster=... className="h-full w-full object-cover">` for them, keep `<img>` for image strings. Parallax break (line 119) keeps using the first image (skip if first sample is video).

## Out of scope
- Other 11 products are untouched.
- No layout, copy, or design-token changes.
- The `image` (card thumbnail) for LCA stays as the current `lca01`.
