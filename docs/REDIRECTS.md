# Redirect Strategy & Instructions

## Long-Term WordPress Migration Strategy

When the WordPress page at `https://rosiecleansalabama.com/house-cleaning-huntsville/` is live, both landing page domains should 301 redirect to it.

**This is already built into the codebase.** To activate:

---

## Activating the WordPress Redirect (When Ready)

### Option A: Environment Variable (Vercel/Netlify)

1. In your hosting dashboard, go to Environment Variables
2. Set: `ENABLE_WORDPRESS_REDIRECT=true`
3. Redeploy/restart the application

This will cause all traffic to `rosiecleanshuntsville.com` and `housecleaninghuntsville.com` to 301 redirect to:
```
https://rosiecleansalabama.com/house-cleaning-huntsville/
```

### Option B: Vercel Redirects (Alternative)

In `vercel.json` (create if it doesn't exist):
```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "https://rosiecleansalabama.com/house-cleaning-huntsville/",
      "permanent": true
    },
    {
      "source": "/(.*)",
      "destination": "https://rosiecleansalabama.com/house-cleaning-huntsville/",
      "permanent": true
    }
  ]
}
```

### Option C: Netlify Redirects

In `public/_redirects`:
```
/* https://rosiecleansalabama.com/house-cleaning-huntsville/ 301!
```

### Option D: Nginx (Custom Server)

```nginx
server {
    server_name rosiecleanshuntsville.com www.rosiecleanshuntsville.com
                housecleaninghuntsville.com www.housecleaninghuntsville.com;
    
    return 301 https://rosiecleansalabama.com/house-cleaning-huntsville/;
}
```

---

## Redirect Checklist

Before activating redirects:

- [ ] WordPress page is live at `https://rosiecleansalabama.com/house-cleaning-huntsville/`
- [ ] WordPress page has matching title, H1, and meta description
- [ ] WordPress page has all schema markup (use files from `/wordpress-assets/huntsville/`)
- [ ] WordPress page has same FAQ content
- [ ] WordPress page loads fast (PageSpeed Insights score 80+)
- [ ] Verify redirect works: `curl -I https://rosiecleanshuntsville.com` → should show `301`
- [ ] Test that redirect destination is correct
- [ ] Submit updated sitemap to Google Search Console after redirect

---

## SEO Impact Notes

- 301 redirects pass approximately 90–99% of link equity
- Search rankings typically transfer within 2–6 weeks
- Monitor Google Search Console after redirect for:
  - Crawl errors
  - Coverage issues
  - Performance changes
- The `canonical` tag on all landing pages already points to the WordPress URL, preparing Google for the eventual redirect

---

## Domain Renewal

Keep both domains registered and renewing after redirect. Expired domains that previously had traffic can negatively impact SEO. Recommended: Set auto-renewal for both domains for at least 2 years after redirect activation.
