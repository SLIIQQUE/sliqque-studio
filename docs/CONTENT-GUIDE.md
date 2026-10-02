# Content guide

Where each fact on the site lives, and everything that must change together. Following this keeps the pages, the SEO data, the AI-readable files and the contact form from contradicting each other.

## One fact, several places

| When this changes | Update all of these |
|---|---|
| **A starting price** | `src/data/services.ts` ("From $X" text), `src/data/service-details.ts` (`basePrice`), `src/data/schema-org.ts` (service offer), `src/data/faq.ts` (pricing answers) |
| **An add-on or its price** | `src/data/service-details.ts` only. The configurator, estimate, quote link and Service schema read from it |
| **A service (new or removed)** | `services.ts`, `service-details.ts` (new slug), `schema-org.ts`, `faq.ts` if mentioned, `contactValue` option in `src/app/contact/ContactPageClient.tsx`, `Marquee.tsx` and `studio.ts` service lists |
| **Contact email** | Search the repo for the old address. It appears in `ContactPageClient.tsx`, `CTASection.tsx`, `Footer.tsx`, `schema-org.ts`, `src/data/legal/types.ts`, `src/app/api/contact/route.ts`, `.env.example`, `src/data/llms.ts`, **and the `RESEND_TO_EMAIL` setting on the host** |
| **A project or case study** | `projects.ts`, `src/app/work/<slug>/`, screenshot in `public/images/`, `workPriorities` in `next-sitemap.config.js`, `outcomes` on the project (feeds `llms-full.txt`), the project count (below) |
| **Project count** | `studioStats` in `src/data/studio.ts`, the counter and marquee text in `src/components/sections/StatsSection.tsx`. Currently "6+" (one above the five case studies) |
| **An article** | `insights.ts`, `src/app/insights/<slug>/`, `articleSchemas` in `schema-org.ts`, `insightSlugs` in `next-sitemap.config.js` |
| **Privacy or Terms wording** | `src/data/legal/privacy.ts` or `terms.ts`, and `LEGAL_UPDATED` in `src/data/legal/types.ts` |
| **Logo or favicon** | `public/images/sliiqque-icon-white.png` (nav), `public/favicon.ico`, `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png`. `schema-org.ts` points at `icon-192.png` |

## Current facts (as of 2 October 2026)

| Item | Value |
|---|---|
| Studio | SLIIQQUE Studio, Lagos, Nigeria, founded 2021, works worldwide |
| Contact | hello@sliiqque.space |
| Website Design & Development | from $300 |
| AI Bot & Agent Development | from $600 |
| Interface Engineering | from $1,000 |
| Studio Retainer | from $2,500 per month, 40 hours |
| Technical Audit | fixed from $800 |
| Capacity | 2-3 new projects per quarter |
| Case studies | BizEdge, SLIIQQUE Real Estate, Lumia, Mo Touch, ZINID |
| Stats shown | 5+ years, 6+ projects shipped, 3 focus verticals, 1 principal |

## Things to know before editing

- **Titles and descriptions** are set only in each page's `metadata` export (the site default is in `src/app/layout.tsx`). Do not add a manual `<meta name="description">` tag, it creates a duplicate. Keep titles around 50 characters and descriptions under 160. See the metadata rules in [SEO-AUDIT.md](SEO-AUDIT.md).
- **Add-on prices are estimates, not commitments.** The page tells visitors the final quote is confirmed after a conversation, and the Terms say the same. Keep that wording consistent.
- **Real Estate case study** is written from demo data. Replace it with real results and a live link when the product launches.
- **Legal pages** are a general template. Check them with a lawyer. They state that Nigerian law and the Lagos courts apply, that client IP transfers on full payment, and a 12-month liability cap. Change these if your agreements differ.
- **Cookies:** the Privacy Policy says the site sets no analytics or tracking cookies. If you add analytics, change section 5 first.
- **`public/sitemap.xml` and `public/robots.txt` are generated.** Edit `next-sitemap.config.js` instead, then run `npm run build`.
- **`/llms.txt` and `/llms-full.txt` are generated** by `src/data/llms.ts` from services, add-ons, projects, articles, studio info and the FAQ. Change the data, not the output. Only the email and page list inside `llms.ts` are written by hand there.
