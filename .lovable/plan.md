Replace STORYBOOTH (product-04) sample outputs with the 8 uploaded media files, following the same pattern used for LCA.

## Steps

### 1. Upload 8 assets to CDN
Run `lovable-assets create` for each uploaded file from `/mnt/user-uploads/`, writing pointer JSON to `src/assets/products/storybooth/`:
- `stry-02_edited.jpg` → static image (also reused as card thumbnail + video poster)
- `Kiehls-Home.gif` → animated GIF (renders as `<img>`, animates natively)
- `3370.mp4`, `3354.mp4`, `K-029.MP4`, `K-005.MP4`, `106.mp4`, `96.mp4` → videos

### 2. Update `src/data/products.ts` — product-04 (STORYBOOTH)
- Import the 8 new asset pointers.
- Replace `image:` (currently an Unsplash URL) with the `stry-02_edited.jpg` asset URL so the card thumbnail uses real content.
- Replace `samples:` with 8 entries:
  - `stry-02_edited.jpg.url` (image)
  - `Kiehls-Home.gif.url` (image — GIF animates natively)
  - 6 `{ type: "video", src: <mp4>.url, poster: stry-02_edited.jpg.url }` objects

### 3. No renderer changes
`src/routes/product-services.$productId.tsx` already supports `Sample = string | SampleVideo` with `object-contain` matte framing. GIFs render via `<img>` and animate. Videos use `<video controls muted playsInline poster>`.

## Out of scope
- All other products, layouts, copy, and components stay as-is.
