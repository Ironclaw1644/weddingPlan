# Forrester Fields — website

Marketing site for **Forrester Fields**, an owner-led wedding & event **planning and coordination** service in Loganville, GA (serving Walton County & the east-metro Atlanta area). Rebuilt off GoDaddy as a fast, SEO-optimized [Astro](https://astro.build) site, hosted on Vercel.

> Repositioned: Forrester Fields is a **planner/coordinator — not a venue**. Copy, titles, and schema reflect planner intent throughout.

## Develop

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # serve the built site
```

## Structure

- `src/pages/` — routes (home, about, services, portfolio, contact, Loganville location page)
- `src/components/` — Header, Footer, Hero/CTA, ServiceCard, ContactForm, Faq
- `src/data/` — `site.ts` (business info/NAP), `services.ts` (tiers + pricing), `locations.ts`, `faqs.ts`
- `src/styles/global.css` — design tokens (sage-gold `#a5a05d`, Lusitana + Lato)
- `src/assets/` — photography (optimized at build); `public/` — og-image, favicon, robots.txt

## Contact form

The form posts to [Web3Forms](https://web3forms.com) and emails `forresterfields25@gmail.com`.
Set `PUBLIC_WEB3FORMS_ACCESS_KEY` (see `.env.example`) locally and in Vercel. Until set, the form shows a friendly "email me instead" message.

## Going live & growth

See **[LAUNCH.md](./LAUNCH.md)** for the DNS cutover, GitHub↔Vercel auto-deploy, Google Business Profile setup, and the Phase 2 SEO roadmap.
