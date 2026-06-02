## Replace POPUP FILMSLIDE (product-05) samples

Currently product-05 uses 3 Unsplash placeholders. Replace with the 5 uploaded assets (3 Club21 collage images + 2 MP4 videos).

### Steps

1. **Upload 5 assets** to CDN via `lovable-assets` into `src/assets/products/filmslide/`:
   - `filmslide-01.jpg` (20240424_183951_372.jpg — Club21 Barbie strip)
   - `filmslide-02.jpg` (20240424_163159_124.jpg — Club21 girl portraits)
   - `filmslide-03.jpg` (20240424_162938_147.jpg — Club21 couple grid)
   - `filmslide-bc.mp4` (video for BC.MP4)
   - `filmslide-main.mp4` (filmslide.MP4)

2. **Edit `src/data/products.ts`**:
   - Add 5 imports for the new `.asset.json` pointers.
   - Replace product-05 `image:` (Unsplash) → `filmslide01.url` as the card thumbnail.
   - Replace `samples:` array with 5 entries: 3 image URLs + 2 video objects (`{ type: "video", src, poster: filmslide01.url }`).

3. **No render changes needed** — `product-services.$productId.tsx` already handles `Sample = string | SampleVideo` with `object-contain` matte framing.

### Out of scope
Other products, copy, layout, components.
