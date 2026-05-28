## Goal
Make the hero text overlay card transparent (glassmorphism) so the background image is visible through it, while keeping text readable.

## Changes

### 1. Home page hero (`src/routes/index.tsx`)
- Change the floating overlay card from `bg-background/95` → `bg-black/40 backdrop-blur-md`
- Add a subtle text shadow or ensure the gradient behind provides enough contrast

### 2. Shared `PageHero` component (`src/components/PageHero.tsx`)
- Change the floating overlay card from `bg-background/92 backdrop-blur-md` → `bg-black/40 backdrop-blur-md`
- This affects all internal page heroes (case studies, product services, space activation, technology)

### Design rationale
- `bg-black/40` (40% black) lets the Ken-Burns image show through clearly
- `backdrop-blur-md` keeps the glass distortion effect for depth
- The existing `bg-gradient-to-t from-background` behind the card already fades the image at the bottom, ensuring text contrast
- Keeps the dark cinematic mood while making the image more present

### Out of scope
- No layout changes (card position, size, typography stay the same)
- No animation changes