# Forrester Fields — Launch & Growth Checklist

Everything needed to take the new site live and start ranking. Steps marked **[you]** need your accounts/logins; the rest is already done in code.

---

## 1. Connect the contact form (2 minutes) — do this first
The form is the way couples reach you, so wire it up before launch.

1. **[you]** Go to **https://web3forms.com**, enter **forresterfields25@gmail.com**, and they email you an **Access Key** (free, unlimited).
2. In **Vercel → Project → Settings → Environment Variables**, add:
   - Name: `PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: *(the key from your email)*
3. Redeploy (Vercel → Deployments → ⋯ → Redeploy).
4. **Test it:** open the live site, send yourself a test inquiry, and confirm it lands in your Gmail. ✅

*Until the key is set, the form politely tells visitors to email you instead — so you never miss a lead.*

> **Important:** the live production site builds from the **`main`** branch on Vercel, so set `PUBLIC_WEB3FORMS_ACCESS_KEY` in the Vercel project's Environment Variables (all environments). If it's only set locally, the published site's form will be disabled — and it must be present *before/at* the time you merge the launch PR so production ships with a working form.

---

## 2. GitHub + Vercel auto-deploy **[you]**
The code is on GitHub at `Ironclaw1644/weddingPlan`. To make every change deploy automatically:

1. In **Vercel → Add New → Project → Import Git Repository**, choose `weddingPlan` (authorize the Vercel GitHub app once if asked).
2. Framework preset: **Astro** (auto-detected). Build command `astro build`, output `dist` — leave defaults.
3. Add the `PUBLIC_WEB3FORMS_ACCESS_KEY` env var (step 1) and deploy.

After this, pushing to the `main` branch auto-publishes; pull requests get preview links.

---

## 3. Review the preview, then point the domain **[you]**
**Do NOT change DNS until you're happy with the preview** (`*.vercel.app` link).

Once approved, point **forresterfields.com** at Vercel. Your domain stays registered at GoDaddy — you only change two DNS records. **No email is affected** (the domain has no MX records).

In **Vercel → Project → Settings → Domains**, add `forresterfields.com` and `www.forresterfields.com`. Vercel shows the exact values; they will be:

| Type | Name / Host | Value |
|------|-------------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

In **GoDaddy → My Products → Domain → DNS → Manage Zones → forresterfields.com**:
1. **Edit** the existing `A` record for `@` → set value to `76.76.21.21` (remove the old GoDaddy/Website-Builder A records).
2. **Edit/Add** the `CNAME` for `www` → `cname.vercel-dns.com`.
3. Save. Leave nameservers as-is; **do not touch any MX records**.

DNS propagates in minutes to a few hours; Vercel issues HTTPS automatically. Verify the site loads at `https://forresterfields.com`.

---

## 4. Google Business Profile — your #1 local-sales lever **[you]**
For a solo planner, the Google map pack drives more bookings than anything else, and local competitors are weakest here.

- Create/claim a profile at **https://business.google.com** as a **Service-area business** (hide the street address; list service areas: Loganville, Monroe, Walton County, Snellville, Grayson, Conyers, Covington, east-metro Atlanta).
- **Primary category: "Wedding planner"** (NOT any venue category). Add secondary: "Event planner", "Wedding service".
- Use the **exact** name "Forrester Fields" and link to `forresterfields.com`.
- Add photos, then **ask every happy couple for a Google review** — aim for 20–40 genuine 5-star reviews in your first season.

## 5. Search Console & citations **[you]**
- **Google Search Console** (https://search.google.com/search-console): add the property and submit `https://forresterfields.com/sitemap-index.xml`. Repeat at **Bing Webmaster Tools**.
- List/refresh with **identical** name + service area on: The Knot, WeddingWire, Zola, Thumbtack, The Bash, Eventective, Yelp, Bark, BBB, Apple Maps, Bing Places.

---

## 6. Phase 2 — the SEO surface that "rakes in sales" (next, after sign-off)
The homepage and core pages are live; these additive pages are scoped and ready to build:
- **Per-service pages:** full planning, month-of, day-of, reception, consulting (service + price keywords).
- **Money/niche pages:** `wedding-coordinator-cost`, `micro-weddings-elopements`.
- **More location pages** (priority order): Monroe/Walton County → Snellville → Grayson → Conyers → Covington. *(Lawrenceville & "wedding planner Atlanta" head terms are saturated — long-tail only.)*
- **Blog:** cost guides, "day-of vs month-of", "why you need a coordinator even at a venue", "planning a wedding at [local venue]", micro-wedding guides.
- Add **Person schema + real testimonials/Review schema** once you provide your name and a few client reviews.

## 7. Housekeeping **[you]**
- **Photos:** the portfolio currently uses the few photos from the old site — send more wedding/event photos (with permission) to fill it out.
- Once the new site is verified live, **cancel the GoDaddy Websites + Marketing subscription** (keep the domain registration).
