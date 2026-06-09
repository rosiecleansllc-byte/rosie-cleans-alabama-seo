# Launch Checklist

## Pre-Launch

### Domain & DNS
- [ ] `rosiecleanshuntsville.com` registered and DNS configured
- [ ] `housecleaninghuntsville.com` registered and DNS configured
- [ ] DNS propagation confirmed (use whatsmydns.net)
- [ ] SSL certificates active on both domains
- [ ] `www` redirects working on both domains

### Deployment
- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Build completes without errors
- [ ] Both domains assigned to deployment

### Environment Variables
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` set with actual GA4 ID
- [ ] `ENABLE_WORDPRESS_REDIRECT` set to `false`

### Visual Review
- [ ] Both pages load correctly
- [ ] `rosiecleanshuntsville.com` shows brand variant H1: "House Cleaning in Huntsville, AL"
- [ ] `housecleaninghuntsville.com` shows search-intent H1: "House Cleaning Service in Huntsville, AL"
- [ ] Mobile layout looks correct (test on actual phone)
- [ ] Desktop layout looks correct
- [ ] Header sticky behavior working
- [ ] Hero CTAs work (Book Online + Call)
- [ ] All service cards render correctly
- [ ] FAQ accordion opens/closes
- [ ] Footer links work

### SEO Technical
- [ ] `<title>` tags correct on both domains
- [ ] Meta descriptions correct
- [ ] Open Graph tags correct (test with Facebook Debugger)
- [ ] Twitter Card correct (test with Twitter Card Validator)
- [ ] Canonical URL pointing to rosiecleansalabama.com
- [ ] robots.txt accessible: `https://rosiecleanshuntsville.com/robots.txt`
- [ ] sitemap.xml accessible: `https://rosiecleanshuntsville.com/sitemap.xml`
- [ ] Schema markup valid (test with Google Rich Results Test)
  - [ ] LocalBusiness schema ✓
  - [ ] Service schema ✓
  - [ ] FAQ schema ✓
  - [ ] BreadcrumbList schema ✓

### Performance
- [ ] PageSpeed Insights: `rosiecleanshuntsville.com` — Mobile score 70+
- [ ] PageSpeed Insights: `housecleaninghuntsville.com` — Mobile score 70+
- [ ] Core Web Vitals: LCP < 2.5s
- [ ] Core Web Vitals: CLS < 0.1
- [ ] Core Web Vitals: FID < 100ms

### Analytics
- [ ] Google Analytics 4 property created
- [ ] GA4 Measurement ID added to env vars
- [ ] GA4 Real-Time shows traffic when you visit the pages
- [ ] `book_online_click` event firing when clicking Book Online
- [ ] `phone_click` event firing when clicking phone number
- [ ] `faq_expand` event firing when opening FAQ items
- [ ] Scroll depth events firing at 50% and 90%

### Accessibility
- [ ] Tab navigation works
- [ ] All images have alt text
- [ ] Color contrast passes WCAG AA
- [ ] `aria-expanded` on FAQ buttons working

---

## Post-Launch (Week 1)

- [ ] Submit both URLs to Google Search Console
  - Go to Google Search Console
  - Add properties for both domains
  - Verify via HTML file or DNS
  - Request indexing: URL Inspection → Request Indexing
- [ ] Submit sitemap.xml in Search Console
- [ ] Verify Google Analytics is collecting data correctly
- [ ] Check for any 404 errors in Search Console
- [ ] Monitor Google Search Console Coverage for any issues

---

## Post-Launch (Month 1)

- [ ] Review Google Search Console Performance for impressions and clicks
- [ ] Review GA4 conversion events
- [ ] Check average position for target keywords:
  - "house cleaning Huntsville AL"
  - "cleaning service Huntsville Alabama"
  - "maid service Huntsville"
- [ ] Consider Google Ads to drive immediate traffic while organic builds
- [ ] Review Core Web Vitals in Search Console
- [ ] Start planning Phase 2 city expansion (see PHASE2-CITIES.md)
