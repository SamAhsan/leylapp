## Leylapp Marketing Site

Marketing site for Leylapp — an AI companion app — built with React, TypeScript, Vite, Tailwind CSS, and React Router. The experience focuses on clean storytelling, responsive layouts, and strong conversion paths for mobile downloads.

### Tech Stack

- React 19 + TypeScript + Vite
- React Router v7 for routing
- Tailwind CSS with custom theme + fluid typography
- Framer Motion (micro animations), Headless UI (FAQ), lucide-react icons
- React Helmet Async for SEO + JSON-LD, react-qr-code for download QR

### Getting Started

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

`npm run build` runs TypeScript checks plus the Vite production build. `npm run preview` serves the generated assets locally.

### Project Structure

```
src/
  components/        Reusable UI (buttons, cards, layout, SEO helper, nav, footer)
  data/              Structured content (nav, features, testimonials, FAQ, download tips, safety, etc.)
  hooks/             Utilities like scroll spy for the features page
  pages/             Routed views (home, features, safety, about, support, download, legal)
  assets/            SVG phone mockup
public/
  favicon, manifest, sitemap, social preview, demo/phone art
```

Routes are declared in `src/App.tsx` and share the header/footer layout (`src/components/layout`). Tailwind utilities and tokens live in `tailwind.config.js` plus `src/index.css`.

### Editing Content

- **Colors / typography / spacing:** `tailwind.config.js`
- **Navigation + footer links:** `src/data/nav.ts`
- **Feature grids / how-it-works content:** `src/data/features.ts`
- **Testimonials:** `src/data/testimonials.ts`
- **FAQ copy:** `src/data/faq.ts`
- **Download onboarding tips:** `src/data/download.ts`
- **Safety sections:** `src/data/safety.ts`

Update these JSON-like files and the UI updates automatically.

### Replacing Assets

- **Phone mockup:** swap `src/assets/phone-ui.svg` or point `PhoneMockup` to screenshots.
- **Demo / device art:** replace `public/demo-poster.svg` and `public/phone-gradient.svg`.
- **Favicon & app icon:** update `public/favicon.svg` and `public/app-icon.svg`.
- **Social preview:** replace `public/social-preview.svg` for Open Graph/Twitter cards.

### SEO & Metadata

`src/components/SEO.tsx` wraps `react-helmet-async` to inject titles, descriptions, OG/Twitter tags, and JSON-LD (Product, MobileApplication, FAQ). Update per-page copy there if messaging changes.

### Accessibility & Performance

- Sticky nav with focus-visible states and keyboard-friendly mobile drawer
- Headless UI Disclosure for FAQ (ARIA-compliant)
- Lazy SVG mockups for fast loads; hero animations respect reduced motion
- Sitemap + robots + manifest ready for deployment
- Tailwind AA color contrast across light surfaces

### Customization Checklist

1. Replace placeholder copy/assets with production content.
2. Update App Store / Google Play links inside `src/components/AppStoreButtons.tsx`.
3. Adjust FAQ and testimonials via the data files above.
4. Review manifest + icons before deploying to your domain.

Happy building!
