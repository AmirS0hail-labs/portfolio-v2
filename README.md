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
  layout.tsx              Root layout: fonts, metadata, JSON-LD, nav + footer, skip link
  page.tsx                Home page (assembles all sections)
  globals.css             Design tokens + base styles
  case-studies/[slug]/    Data-driven case study detail pages (SSG)
  opengraph-image.tsx     Dynamic OG image (dark typographic card, next/og)
  twitter-image.tsx       Twitter card image (re-exports the OG image)
  icon.tsx                Favicon (AS monogram, next/og)
  sitemap.ts / robots.ts  SEO route handlers
components/
  site-nav.tsx            Pill nav + "Contact Me" + mobile Sheet + scrollspy
  site-footer.tsx         Bottom bar with social row
  sections/               Hero, Case Studies, Projects, About, Testimonials, Skills, Contact
  case-study/             Case study detail renderer
  reveal.tsx, floating-pill.tsx, media-placeholder.tsx, ...  Shared primitives
  ui/                     shadcn-style primitives
content/                  All copy lives here — edit these to update the site
  types.ts site.ts hero.ts case-studies.ts projects.ts about.ts testimonials.ts skills.ts
lib/utils.ts              cn() helper
```

## Editing content

All copy is data-driven. To change text, edit the typed files in [`content/`](content). Sections and case study pages render from these files automatically.

- Contact details / SEO strings: [`content/site.ts`](content/site.ts)
- Hero headline + pills: [`content/hero.ts`](content/hero.ts)
- Case studies (incl. media placeholders + privacy tiers): [`content/case-studies.ts`](content/case-studies.ts)

### Adding real media

Each case study visual has a `sensitivity` tier (`public` / `internal` / `synthetic` / `pending`) that controls how its placeholder is framed. To drop in a real asset, add it to `public/` and set the `src` on the corresponding visual in `content/case-studies.ts`. The placeholder is replaced with an optimized `next/image` (or `<video>`), keeping the sensitivity chip.

## Configuration

- `NEXT_PUBLIC_SITE_URL` — canonical site URL used for metadata, `sitemap.xml`, `robots.txt`, and JSON-LD. Defaults to `https://amir-portfolio.vercel.app`. Set this to your real domain in production.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js. No build config needed.
3. Add an Environment Variable: `NEXT_PUBLIC_SITE_URL = https://your-domain.com`.
4. Deploy. Add your custom domain under Project → Settings → Domains.

## Accessibility & performance

- Semantic landmarks, correct heading order, ARIA labels on icon links, skip-to-content link, visible focus rings, WCAG AA contrast.
- `prefers-reduced-motion` disables transforms and idle animations.
- Fully static/SSG, `next/font` self-hosted fonts, no layout-shifting hero imagery.
- Run a Lighthouse audit against a production build: `npm run build && npm run start`, then in Chrome DevTools → Lighthouse (or `npx lighthouse http://localhost:3000 --view`).
