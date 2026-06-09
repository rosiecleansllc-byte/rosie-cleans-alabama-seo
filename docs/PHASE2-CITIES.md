# Phase 2: City Expansion Recommendations

## Overview

The city page templates for Madison, Athens, Decatur, and Harvest are **already built** in this project under `/src/app/cities/`. They are complete, SEO-optimized, and ready to publish. They are currently set to `noindex` to avoid thin content penalties.

---

## Expansion Priority Order

### Priority 1: Madison, AL

**Why first:**
- Adjacent to Huntsville — same market, natural expansion
- Population: ~50,000 and growing rapidly
- Many Huntsville businesses and residents live in Madison
- Low competition in cleaning SEO for Madison-specific keywords

**Action to publish:**
1. In `/src/lib/cities/madison.ts` → change `published: false` to `published: true`
2. In `/src/app/cities/madison/page.tsx` → remove `noindex: !madisonData.published`
3. Add `/cities/madison` to `robots.ts` allow list
4. Deploy

**Target keywords:**
- "house cleaning Madison AL" (est. 300–500 mo searches)
- "maid service Madison Alabama"
- "cleaning service Madison AL"

---

### Priority 2: Harvest, AL

**Why second:**
- North of Huntsville, growing bedroom community
- Less competition than Madison
- Good for capturing North Huntsville overflow

**Action to publish:**
- Same steps as Madison — update `harvest.ts` and `cities/harvest/page.tsx`

**Target keywords:**
- "house cleaning Harvest AL"
- "maid service Harvest Alabama"

---

### Priority 3: Athens, AL

**Why third:**
- Separate county (Limestone) — establishes regional authority
- Different market from Huntsville/Madison
- Growing population and new construction

**Target keywords:**
- "house cleaning Athens AL"
- "cleaning service Athens Alabama"
- "maid service Athens AL"

---

### Priority 4: Decatur, AL

**Why fourth:**
- Separate metro (Morgan County)
- Requires more drive time — consider if operations support it
- Good for long-term regional authority

**Target keywords:**
- "house cleaning Decatur AL"
- "cleaning service Decatur Alabama"

---

## Recommended New Cities for Future Phase 3

Consider adding these cities if operations expand:

| City | County | Population | Priority |
|---|---|---|---|
| Owens Cross Roads | Madison | ~2,000 | Low |
| Hazel Green | Madison | ~4,000 | Medium |
| Meridianville | Madison | ~8,000 | High |
| Toney | Madison | ~2,500 | Low |
| Florence | Lauderdale | ~40,000 | Medium-High |
| Muscle Shoals | Colbert | ~14,000 | Medium |

---

## New City Page Setup Process

To add a new city:

1. **Create city data file:** `/src/lib/cities/[city].ts`
   - Copy `huntsville.ts` as template
   - Update all city-specific content, coordinates, keywords, FAQs
   - Set `published: true`

2. **Create city page:** `/src/app/cities/[city]/page.tsx`
   - Copy existing city page as template
   - Import new city data
   - Remove noindex flag

3. **Create WordPress assets:** `/wordpress-assets/[city]/`
   - `seo-metadata.json`
   - `content.md`
   - `faq-schema.json`
   - `local-schema.json`
   - `internal-linking.md`

4. **Update robots.ts** — Allow new city path

5. **Update sitemap.ts** — Add new city URL

6. **Deploy** — Vercel auto-deploys on push to main

7. **Request indexing** — Google Search Console → URL Inspection

---

## Content Quality Guidelines for New City Pages

Each city page must:
- Have **unique hero copy** mentioning the city by name
- Have **unique FAQ** answers with city-specific context
- Have **10 FAQs minimum** — use the Huntsville FAQ as a template
- Have **accurate geo-coordinates** for the city
- Have **specific `areaServed` neighborhoods** within the city
- Have a **canonical URL** pointing to the eventual WordPress page

---

## Internal Linking Strategy for City Expansion

Once multiple city pages are live:

1. Create a **"Service Areas" page** at `/service-areas/` linking to all city pages
2. Add **cross-city links** in the footer ("Also serving Madison, Athens...")
3. Link from **blog posts** targeting city keywords
4. Ensure all city pages link **back to rosiecleansalabama.com**
5. Use **Google Business Profile** service area to match city page expansion

---

## Tracking Recommendations for Phase 2

Add these GA4 custom dimensions/events:
- `city_page_view` — Track which city page a user viewed
- `city_conversion` — Track bookings by city
- Compare conversion rates across cities to prioritize ad spend
