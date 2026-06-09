# DNS Configuration Instructions

## Domain 1: rosiecleanshuntsville.com
## Domain 2: housecleaninghuntsville.com

Apply these DNS settings at your domain registrar for **both** domains.

---

## If Deploying on Vercel

### Apex Domain (e.g., rosiecleanshuntsville.com)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | Auto |

### WWW Subdomain

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | cname.vercel-dns.com | Auto |

> Repeat these same records for housecleaninghuntsville.com at its registrar.

---

## If Deploying on Netlify

### Apex Domain

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 75.2.60.5 | Auto |
| A | @ | 99.83.190.102 | Auto |

### WWW Subdomain

| Type | Name | Value | TTL |
|---|---|---|---|
| CNAME | www | [your-site-name].netlify.app | Auto |

---

## If Deploying on Custom VPS

Replace `YOUR_SERVER_IP` with your actual server IP address.

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | YOUR_SERVER_IP | 3600 |
| A | www | YOUR_SERVER_IP | 3600 |

---

## Verification Steps

1. After adding DNS records, wait 15–60 minutes for propagation
2. Verify DNS propagation: `nslookup rosiecleanshuntsville.com`
3. Verify HTTPS works: Visit `https://rosiecleanshuntsville.com`
4. Verify `www` redirects to apex: Visit `https://www.rosiecleanshuntsville.com`
5. Repeat for `housecleaninghuntsville.com`

---

## Notes

- DNS propagation typically takes 15–60 minutes but can take up to 48 hours
- Both domains point to the same server/deployment
- The Next.js app uses the `Host` header to serve the correct page variant
- SSL certificates are provisioned automatically by Vercel/Netlify
- For custom servers, use Let's Encrypt with Certbot

---

## Registrar-Specific Instructions

### GoDaddy
1. Go to [GoDaddy DNS Management](https://dcc.godaddy.com)
2. Select domain → DNS
3. Edit/add records as shown above

### Namecheap
1. Go to Domain List → Manage → Advanced DNS
2. Add records as shown above

### Google Domains (Squarespace)
1. DNS → Custom records
2. Add records as shown above

### Cloudflare (Recommended)
1. Add site → Enter domain
2. Import existing records
3. Add A and CNAME records
4. Enable **Proxied** (orange cloud) for DDoS protection and CDN
5. Note: Enable "Full (strict)" SSL mode in Cloudflare SSL/TLS settings
