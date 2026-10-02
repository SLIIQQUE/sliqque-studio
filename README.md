# SLIIQQUE Studio Website

A boutique software studio website built with Next.js, featuring dark editorial aesthetics, SaaS product showcases and business website case studies.

**Live:** [https://sliiqque.space](https://sliiqque.space)

---

## Overview

SLIIQQUE is a frontend engineering studio that partners with founders to build high-performance digital products. The website showcases:

- Featured projects and case studies (BizEdge, SLIIQQUE Real Estate, Lumia, Mo Touch, ZINID)
- Service offerings (Website Design, Product Build, Interface Engineering, Studio Retainer, Technical Audit)
- Technical expertise areas (SaaS, driving schools, business websites)
- Blog/insights on frontend engineering and product development
- Contact and studio information
---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + Syne (Google Fonts) |
| Utilities | clsx, tailwind-merge |
| SEO | next-sitemap (auto-generates sitemap.xml & robots.txt) |
| Hosting | Static export compatible |

---

## Project Structure

```
sliiqque-studio/
├── public/                  # Static assets
│   ├── og-image.png         # Open Graph image
│   ├── og-image.svg         # SVG fallback
│   ├── favicon.ico, favicon-32.png, icon-192.png, apple-touch-icon.png  # QQ icon set
│   ├── llms.txt, llms-full.txt  # AI/LLM-readable site summary (AEO)
│   ├── robots.txt           # Auto-generated (AI crawlers allowed)
│   └── sitemap.xml          # Auto-generated
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css      # Global styles
│   │   ├── contact/        # Contact page
│   │   ├── expertise/      # Expertise pages (saas/, driving-schools/, engineering/)
│   │   ├── insights/       # Blog/insights articles
│   │   ├── privacy/        # Privacy policy
│   │   ├── services/       # Services & process page
│   │   ├── studio/         # About the studio
│   │   ├── terms/          # Terms of service
│   │   └── work/           # Work portfolio & case studies
│   │       ├── bizedge/
│   │       ├── lumia/
│   │       ├── real-estate/
│   │       ├── mo-touch/
│   │       └── zinid/
│   ├── components/
│   │   ├── layout/          # Navigation, Footer
│   │   ├── sections/       # Page sections (Hero, Services, etc.)
│   │   └── ui/             # Reusable UI components
│   └── data/
│       ├── projects.ts     # Project data (order = display order)
│       ├── services.ts     # Services & pricing
│       ├── faq.ts          # FAQ (rendered on /services and emitted as FAQPage schema)
│       └── schema-org.ts   # JSON-LD builders
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts       # Tailwind theme configuration
├── next-sitemap.config.js   # Sitemap generation config
└── package.json
```

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, selected work, stats, insights |
| `/work` | Full project portfolio |
| `/work/[slug]` | Individual project/case study pages |
| `/services` | Service offerings with pricing, process and FAQ |
| `/expertise` | Expertise areas (SaaS, driving schools, engineering) |
| `/insights` | Blog articles on frontend engineering and product development |
| `/studio` | About the studio |
| `/contact` | Contact page |

---

## Components

### Layout
- `Navigation` — Fixed header with logo, nav links, and CTA
- `Footer` — Animated email CTA, links, copyright

### Sections
- `Hero` — Full-viewport hero with animated title
- `Marquee` — Scrolling text marquee (services, project types)
- `ServicesSection` — Service offerings preview
- `SelectedWorkSection` — Featured projects grid
- `StatsSection` — Studio metrics and highlights
- `StudioSection` — Brief studio overview
- `InsightsSection` — Recent blog posts preview
- `CTASection` — Call-to-action

### UI
- `ProjectCard` — Project thumbnail with logo/image support
- `WorkCard` — Detailed work listing card
- `InsightCard` — Blog post preview card
- `ExpertiseCard` — Expertise area card
- `InteractiveTitle` — Animated text reveal
- `LightLeaks` — Decorative light leak overlay
- `ScrollProgress` — Page scroll indicator
- `CustomCursor` — Custom cursor on desktop
- `CursorWrapper` — Cursor state management
- `Marquee` — Infinite scroll animation

---

## Data Structure

Projects are defined in `src/data/projects.ts`:

```typescript
interface Project {
  title: string;
  year: string;
  clientType: string;
  engagementType: string;
  description: string;
  tags: string[];
  metric: string;
  imageSrc?: string;    // For photo thumbnails
  logoSrc?: string;     // For logo-only projects
  imageAlt: string;
  href: string;
  bgColor?: string;
}

interface CaseStudy extends Project {
  context: string;
  problem: string;
  approach: string;
  whatWeBuilt: string;
  results: string;
  learnings: string;
  externalUrl?: string;
}
```

---

## Scripts

```bash
# Development
npm run dev              # Start dev server at localhost:3000

# Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint

# SEO
npm run postbuild        # Auto-generate sitemap.xml after build
```

---

## Environment Variables

No environment variables are required for the website itself. All images from external sources (Unsplash, Lumia, ZinID) are configured via `next.config.mjs` remote patterns.

For local development, ensure you have Node.js 18.18+ installed.

---

## Deployment

The site is optimized for static hosting (Vercel, Netlify, Cloudflare Pages).

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag .next/ to Netlify drop
```

### Manual
```bash
npm run build
npm run start
```

---

## SEO & AEO

Full audit, checklist and maintenance routine: [docs/SEO-AUDIT.md](docs/SEO-AUDIT.md).

- **Metadata:** every route sets its own `title`, `description`, canonical, Open Graph and Twitter card. Canonicals use a trailing slash to match `trailingSlash: true` and the sitemap. Titles stay under ~50 characters because the root template appends ` | SLIIQQUE`.
- **Structured data (JSON-LD):** `src/components/SchemaOrg.tsx` emits a site-wide graph (Organization, LocalBusiness, WebSite, Services with prices) plus page-specific nodes from `pageSchemas()` in `src/data/schema-org.ts`: `Article` on insights, `CreativeWork` on case studies, `ItemList` on `/work`, `FAQPage` on `/services`, and a `BreadcrumbList` everywhere.
- **Sitemap:** `next-sitemap` runs after `npm run build` and writes `public/sitemap.xml`. `lastmod` comes from the last git commit touching the route, not the build time. New routes are picked up automatically; add case studies to `workPriorities` in `next-sitemap.config.js`.
- **robots.txt:** generated from `next-sitemap.config.js`. It allows all crawlers and names the major AI search/answer bots (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and others). `/api/` is disallowed.
- **AEO:** `public/llms.txt` and `public/llms-full.txt` summarise the studio, services, prices and case studies for LLMs. Keep them in sync with `src/data/services.ts` and `src/data/faq.ts` whenever prices or services change.
- **Keeping it consistent:** when changing a price, update `services.ts`, `schema-org.ts`, `faq.ts`, and both `llms` files.

---

## Customization

### Theme Colors
Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#050505",  // Main background
  footer: "#0a0a0a",      // Footer background
  foreground: "#FFFFFF",  // Main text
  muted: "rgba(255, 255, 255, 0.4)",  // Muted text
  border: "rgba(255, 255, 255, 0.05)", // Borders
}
```

### Fonts
Configured in `src/app/layout.tsx`:
- Display font: **Syne** (headings)
- Body font: **Plus Jakarta Sans** (body text)

### Adding Projects
Add to `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  // existing projects...
  {
    title: "New Project",
    year: "2025",
    clientType: "FinTech",
    engagementType: "Product Build",
    description: "...",
    tags: ["React", "TypeScript"],
    metric: "Key metric",
    logoSrc: "https://...", // or imageSrc for photos
    imageAlt: "Project description",
    href: "/work/new-project",
    bgColor: "#hex",
  },
];
```

### Remote Images
Add new domains to `next.config.mjs`:
```javascript
remotePatterns: [
  {
    protocol: "https",
    hostname: "example.com",
  },
],
```

---

## License

Private — All rights reserved. SLIIQQUE Studio.
