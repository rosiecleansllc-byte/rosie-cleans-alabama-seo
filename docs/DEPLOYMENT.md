# Deployment Instructions

## Overview

This project is a Next.js application that serves two landing page domains:
- `rosiecleanshuntsville.com` — Brand-focused Huntsville page
- `housecleaninghuntsville.com` — Search-intent Huntsville page

Both domains run from the **same Next.js deployment**. The app uses the `Host` header to serve the correct page variant.

---

## Recommended Platform: Vercel

### Step 1: Push to GitHub

1. Ensure code is pushed to the `main` branch of your GitHub repository
2. If not already done: `git push origin main`

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import `rosie-cleans-alabama-seo` from GitHub
4. Framework preset: **Next.js** (auto-detected)
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)
7. Click **Deploy**

### Step 3: Add Custom Domains

In Vercel project settings → Domains:

1. Add `rosiecleanshuntsville.com` → Configure DNS (see DNS.md)
2. Add `www.rosiecleanshuntsville.com` → Redirect to apex
3. Add `housecleaninghuntsville.com` → Configure DNS
4. Add `www.housecleaninghuntsville.com` → Redirect to apex

Vercel automatically provisions SSL/TLS certificates.

### Step 4: Environment Variables

In Vercel project settings → Environment Variables:

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Replace with your GA4 measurement ID |
| `ENABLE_WORDPRESS_REDIRECT` | `false` | Set to `true` when ready to redirect to WordPress |

---

## Alternative Platform: Netlify

### Netlify Build Settings
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (required)

### Netlify Domain Setup
1. Go to Domain settings
2. Add custom domain: `rosiecleanshuntsville.com`
3. Add custom domain: `housecleaninghuntsville.com`
4. Follow Netlify DNS configuration instructions

---

## Alternative: Self-Hosted (VPS/Dedicated Server)

### Requirements
- Node.js 18+ 
- PM2 or similar process manager
- Nginx as reverse proxy

### Setup
```bash
# Install dependencies
npm ci --production

# Build
npm run build

# Start with PM2
pm2 start npm --name "rosie-seo" -- start
pm2 save
```

### Nginx Configuration
```nginx
server {
    server_name rosiecleanshuntsville.com www.rosiecleanshuntsville.com
                housecleaninghuntsville.com www.housecleaninghuntsville.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/rosiecleanshuntsville.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/rosiecleanshuntsville.com/privkey.pem;
}

server {
    listen 80;
    server_name rosiecleanshuntsville.com www.rosiecleanshuntsville.com
                housecleaninghuntsville.com www.housecleaninghuntsville.com;
    return 301 https://$host$request_uri;
}
```

---

## Post-Deployment Checklist

- [ ] Both domains load correctly
- [ ] SSL certificates are active on both domains
- [ ] `rosiecleanshuntsville.com` shows brand variant (H1: "House Cleaning in Huntsville, AL")
- [ ] `housecleaninghuntsville.com` shows search-intent variant (H1: "House Cleaning Service in Huntsville, AL")
- [ ] Google Analytics events firing (check GA4 Realtime)
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] sitemap.xml accessible at both domains
- [ ] robots.txt correct at both domains
- [ ] Mobile rendering verified
- [ ] Page speed tested (PageSpeed Insights)
