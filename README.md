# Portfolio — Next.js + Aceternity UI

A personal portfolio inspired by radnaabazar.com, built with:
- **Next.js 14** (App Router)
- **Aceternity UI** components (Spotlight, MovingBorder, BackgroundBeams, CardHoverEffect, TextGenerateEffect)
- **Framer Motion** animations
- **Tailwind CSS**
- **Language selector** (English / Mongolian) via React Context

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customisation

### Your details
Search for `YourName` / `Your Full Name` / `Your City` across the project and replace with your info.

### Your photo
In `src/components/Hero.tsx`, replace the placeholder div with:
```tsx
<Image src="/photo.jpg" alt="Your Name" fill className="object-cover" />
```
Place `photo.jpg` in the `/public/` folder.

### Stats
Edit the values in `src/components/Stats.tsx`:
```ts
const STATS = [
  { value: 22,  key: "stats.age" },
  { value: 2,   key: "stats.experience" },
  { value: 20,  key: "stats.projects" },
  { value: 10,  key: "stats.deployed" },
];
```

### Projects
Edit `PROJECTS` array in `src/components/Projects.tsx`.

### Translations
Edit `src/context/LanguageContext.tsx` — add/edit any language in the `translations` object.
To add a new language (e.g. Japanese):
1. Add `"ja"` to the `Locale` type
2. Add a `ja: { ... }` block in `translations`
3. Add `{ code: "ja", label: "日本語", flag: "🇯🇵" }` to `LOCALES` in `LanguageSelector.tsx`

### Add more Aceternity UI components
Browse https://ui.aceternity.com/components — all components are copy-paste into `src/components/ui/`.

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```
