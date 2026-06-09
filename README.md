# Rosie Cleans Alabama — SEO Landing Pages

Production-ready Next.js SEO platform for Rosie Cleans Alabama.

**Supports:**
- `rosiecleanshuntsville.com` — Brand-focused Huntsville landing page
- `housecleaninghuntsville.com` — Search-intent Huntsville landing page

**SEO authority flows to:** `rosiecleansalabama.com`

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the landing page.

---

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (GA4, fonts, metadata)
│   │   ├── page.tsx            # Main page (serves both domains)
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots.txt
│   │   └── cities/
│   │       ├── huntsville/     # Huntsville city page (published)
│   │       ├── madison/        # Madison template (unpublished)
│   │       ├── athens/         # Athens template (unpublished)
│   │       ├── decatur/        # Decatur template (unpublished)
│   │       └── harvest/        # Harvest template (unpublished)
│   ├── components/
│   │   ├── CityPage.tsx        # Reusable city page layout
│   │   ├── sections/           # All page sections (Hero, Trust, Services, etc.)
│   │   ├── seo/                # JSON-LD schema components
│   │   └── analytics/          # GA4 tracking & scroll depth
│   ├── lib/
│   │   ├── analytics.ts        # Analytics event helpers
│   │   ├── seo/metadata.ts     # SEO metadata generator
│   │   └── cities/             # City data files
│   └── types/
│       └── city.ts             # TypeScript types
├── wordpress-assets/           # WordPress migration assets
│   ├── huntsville/             # Content, schema, internal linking
│   ├── madison/
│   ├── athens/
│   ├── decatur/
│   └── harvest/
├── docs/
│   ├── DEPLOYMENT.md           # Deployment instructions
│   ├── DNS.md                  # DNS configuration
│   ├── REDIRECTS.md            # WordPress redirect strategy
│   ├── LAUNCH-CHECKLIST.md     # Pre/post launch checklist
│   └── PHASE2-CITIES.md        # City expansion plan
└── next.config.ts              # Next.js config (headers, redirects)
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
ENABLE_WORDPRESS_REDIRECT=false
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID |
| `ENABLE_WORDPRESS_REDIRECT` | Set to `true` to activate 301 redirect to WordPress |

---

## How the Two-Domain Architecture Works

The same Next.js app is deployed to both domains. The root `page.tsx` reads the `Host` header to determine which variant to render:

- `rosiecleanshuntsville.com` → Brand variant (H1: "House Cleaning in Huntsville, AL")
- `housecleaninghuntsville.com` → Search-intent variant (H1: "House Cleaning Service in Huntsville, AL")

No additional configuration needed — works automatically.

---

## Analytics Events

All events are GA4-ready and fire automatically:

| Event | Trigger |
|---|---|
| `book_online_click` | Any "Book Online" CTA click |
| `phone_click` | Any phone number click |
| `faq_expand` | FAQ accordion open |
| `page_scroll_50` | User scrolls to 50% of page |
| `page_scroll_90` | User scrolls to 90% of page |

---

## SEO Schema Markup

Every page includes:
- `LocalBusiness` schema
- `Service` schema (one per service)
- `FAQPage` schema
- `BreadcrumbList` schema

All schema JSON-LD is generated dynamically from the city data files.

---

## Adding New Cities

1. Create `/src/lib/cities/[city].ts` (copy `huntsville.ts` as template)
2. Create `/src/app/cities/[city]/page.tsx` (copy existing city page)
3. Create `/wordpress-assets/[city]/` assets
4. Update `robots.ts` and `sitemap.ts`
5. See `docs/PHASE2-CITIES.md` for full expansion guide

---

## WordPress Migration

When ready to migrate to WordPress:

1. Use content from `/wordpress-assets/huntsville/content.md`
2. Copy schema from `/wordpress-assets/huntsville/local-schema.json` and `faq-schema.json`
3. Follow internal linking guide in `internal-linking.md`
4. Once WordPress page is live, activate redirect: set `ENABLE_WORDPRESS_REDIRECT=true`
5. See `docs/REDIRECTS.md` for full redirect instructions

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter (Google Fonts)
- **Analytics:** Google Analytics 4
- **Deployment:** Vercel (recommended)

---

## Documentation

| Doc | Description |
|---|---|
| `docs/DEPLOYMENT.md` | Step-by-step deployment instructions |
| `docs/DNS.md` | DNS configuration for both domains |
| `docs/REDIRECTS.md` | WordPress redirect strategy |
| `docs/LAUNCH-CHECKLIST.md` | Complete launch checklist |
| `docs/PHASE2-CITIES.md` | City expansion roadmap |

---

## Business Info

- **Company:** Rosie Cleans Alabama
- **Phone:** 256-469-1885
- **Primary Website:** rosiecleansalabama.com
- **Primary CTA:** Book Online
