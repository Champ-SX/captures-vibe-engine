# Update Case Studies with real client content

Replace placeholder case studies in `src/data/caseStudies.ts` with the three real ones: Estée Lauder, Cartier, Getty Images. Detail page and list page already render from this data — no route changes needed.

## Changes

Replace the 4 entries in `caseStudies` with 3 entries:

### 01 · Estée Lauder
- slug: `estee-lauder-pure-color-desire`
- client: "Estée Lauder"
- category: "Brand launch"
- year: derive from existing/leave "2024" (unspecified)
- title: "Cinematic VIDEOBOOTH for the Pure Color Desire launch."
- summary: short editorial line from the copy
- challenge: launch context (St. Regis Bangkok, Pure Color Desire lipstick collection)
- guestJourney: bloggers/influencers → cinematic VIDEOBOOTH scene → fashion-video clip → instant social share (FB / IG / TikTok) → hashtag tracked
- technology: ["VIDEOBOOTH", "Cinematic Scene", "Instant Sharing", "Hashtag Analytics"]
- outputs: ["Cinematic video clips", "Social shares (FB/IG/TikTok)"]
- results: `#hashtag posts → 2,753`, plus 1 or 2 supporting metrics from copy
- hero/gallery: keep current Unsplash placeholders

### 02 · Cartier
- slug: `cartier-precious-garage`
- client: "Cartier"
- category: "Retail experience"
- year: "2024"
- title: "Precious Garage at Siam Paragon."
- summary: gorgeous golden-container photo setting for Thai Cartier fans
- challenge: deliver a fabulous on-brand photo moment in central Bangkok
- guestJourney: enter golden container → photo capture → printed photo + digital GIF → instant share
- technology: ["S/X System", "Print Station", "GIF Capture", "Cloud Gallery"]
- outputs: ["Printed photos", "Digital GIFs"]
- results: `Downloads → 4,526`, `Prints → 4,500`
- hero/gallery: keep placeholders

### 03 · Getty Images
- slug: `getty-images-popup-studio`
- client: "Getty Images"
- category: "Studio service"
- year: "2024"
- title: "POPUP STUDIO — studio-quality photos, anywhere."
- summary: portable pro studio with cameraman + lighting, instant share + quick print
- challenge: bring studio-grade photography on-site for social/digital marketing
- guestJourney: professional cameraman → controlled lighting → instant share + quick print
- technology: ["POPUP STUDIO", "Pro Lighting", "Instant Sharing", "Quick Print"]
- outputs: ["Studio-quality photos", "Instant social delivery"]
- results: `Images produced → 1,450`, `Delivery → within hours`
- hero/gallery: keep placeholders

## Notes / open items

- Years are guessed where not specified — confirm if you want different ones.
- Images stay as current Unsplash placeholders until you share real photography.
- List page already shows all entries in a 2-col staggered grid; will automatically render 3.
- Home page Featured Work links to `/case-studies/{slug}` — I'll update those two card links to the new slugs (`estee-lauder-pure-color-desire`, `cartier-precious-garage`) so they don't 404.
