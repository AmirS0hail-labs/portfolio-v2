# Amir Sohail — Portfolio

A dark, high-contrast, data-driven personal portfolio for Amir Sohail, a backend-leaning full-stack software engineer.

Built with **Next.js (App Router) + TypeScript**, **Tailwind CSS v4**, **shadcn/ui**-style primitives, and **Framer Motion** (`motion`). Fully static / SSG, responsive, keyboard-accessible, and `prefers-reduced-motion` aware.

## Tech stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (dark-only theme, near-black base with electric blue + violet accents)
- shadcn/ui-style components (Button, Card, Badge, Separator, Sheet) on Radix primitives
- Framer Motion (`motion/react`) for scroll reveals, hero entrance, floating pills, hover states
- ESLint + Prettier (`prettier-plugin-tailwindcss`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx              Root layout: fonts, metadata, JSON-LD, Umami script, nav + footer, skip link
  page.tsx                Home page (assembles all sections)
  globals.css             Design tokens + base styles
  case-studies/[slug]/    Data-driven case study detail pages (SSG)
  opengraph-image.tsx     Dynamic OG image (dark typographic card, next/og)
  twitter-image.tsx       Twitter card image (re-exports the OG image)
  icon.tsx                Favicon (AS monogram, next/og)
  sitemap.ts / robots.ts  SEO route handlers
components/
  analytics-script.tsx    Env-gated Umami Cloud tracker (production only)
  tracked-external-link.tsx  Outbound CTA clicks (email / LinkedIn / GitHub)
  site-nav.tsx            Pill nav + "Contact Me" + mobile Sheet + scrollspy
  site-footer.tsx         Bottom bar with social row
  sections/               Hero, Case Studies, Projects, About, Testimonials, Skills, Contact
  case-study/             Case study detail renderer
  reveal.tsx, floating-pill.tsx, media-placeholder.tsx, ...  Shared primitives
  ui/                     shadcn-style primitives
content/                  All copy lives here — edit these to update the site
  types.ts site.ts hero.ts case-studies.ts projects.ts about.ts testimonials.ts skills.ts
lib/
  utils.ts                cn() helper
  analytics.ts            Typed Umami event helper (no-ops without the script)
```

## Editing content

All copy is data-driven. To change text, edit the typed files in [`content/`](content). Sections and case study pages render from these files automatically.

- Contact details / SEO strings: [`content/site.ts`](content/site.ts)
- Hero headline + pills: [`content/hero.ts`](content/hero.ts)
- Case studies (incl. media placeholders + privacy tiers): [`content/case-studies.ts`](content/case-studies.ts)

### Adding real media

Each case study visual has a `sensitivity` tier (`public` / `internal` / `synthetic` / `pending`) that controls how its placeholder is framed. To drop in a real asset, add it to `public/` and set the `src` on the corresponding visual in `content/case-studies.ts`. The placeholder is replaced with an optimized `next/image` (or `<video>`), keeping the sensitivity chip.

## Configuration

Copy [`.env.example`](.env.example) and fill in values as needed. Local `npm run dev` should leave the Umami ID empty so localhost does not pollute production stats.

- `NEXT_PUBLIC_SITE_URL` — canonical site URL used for metadata, `sitemap.xml`, `robots.txt`, JSON-LD, and Umami's `data-domains` allowlist. Defaults to `https://amir-portfolio.vercel.app`. Set this to your real domain in production.
- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` — Umami Cloud website ID. **Set this on Vercel Production only** (not Preview, not local). If unset, the tracker script is not injected.
- `NEXT_PUBLIC_UMAMI_SCRIPT_URL` — optional. Defaults to `https://cloud.umami.is/script.js`.

### Analytics (Umami Cloud)

Privacy-first pageviews + a few CTA events. Cookieless, no banner, no PII (no emails, raw IPs, or `mailto` URLs in events).

1. Create a free [Umami Cloud](https://cloud.umami.is) Hobby account.
2. Add a website whose domain matches what visitors will open (`amir-portfolio.vercel.app` is fine; add a custom domain later).
3. Copy the **Website ID** into `NEXT_PUBLIC_UMAMI_WEBSITE_ID` on the Vercel project, **Production** environment only.
4. After deploy, log in at [cloud.umami.is](https://cloud.umami.is). You should see visitors, pages (`/`, `/case-studies/tpi`, …), referrers (LinkedIn, Google, Direct, GitHub), countries, device/browser, and events (`cta_contact`, `outbound_email`, `outbound_linkedin`, `outbound_github`).

Pageviews are automatic. Hash sections (`#contact`) are not tracked as pages — the signal for “opened TPI” is the case-study route. Ad blockers may undercount; recruiter Chrome typically does not.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js. No build config needed.
3. Add Environment Variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com` (Production + Preview if you want correct canonical URLs on previews).
   - `NEXT_PUBLIC_UMAMI_WEBSITE_ID` = your Umami website ID (**Production only**).
4. Deploy. Add your custom domain under Project → Settings → Domains. If the hostname changes, update `NEXT_PUBLIC_SITE_URL` and the domain on the Umami website so `data-domains` still matches.

## Accessibility & performance

- Semantic landmarks, correct heading order, ARIA labels on icon links, skip-to-content link, visible focus rings, WCAG AA contrast.
- `prefers-reduced-motion` disables transforms and idle animations.
- Fully static/SSG, `next/font` self-hosted fonts, no layout-shifting hero imagery.
- Run a Lighthouse audit against a production build: `npm run build && npm run start`, then in Chrome DevTools → Lighthouse (or `npx lighthouse http://localhost:3000 --view`).
