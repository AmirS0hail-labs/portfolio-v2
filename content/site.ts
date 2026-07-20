import type { SiteContent } from "./types";

/**
 * Canonical URL used for metadata, sitemap, and JSON-LD.
 * Override in production via NEXT_PUBLIC_SITE_URL (e.g. a custom domain).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://amir-portfolio.vercel.app";

export const site: SiteContent = {
  name: "Amir Sohail",
  role: "Full-Stack Software Engineer",
  location: "Islamabad, Pakistan",
  tagline:
    "I take ambiguous problems from requirements to reliable, shipped software.",
  email: "thisisamirsohail@gmail.com",
  linkedin: "https://www.linkedin.com/in/amir-sohail5",
  github: "https://github.com/AmirS0hail",
  url: siteUrl,
  nav: [
    { label: "Home", href: "/#home" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  seo: {
    title: "Amir Sohail — Full-Stack Software Engineer (Rails, React, Next.js)",
    description:
      "Backend-leaning full-stack engineer with 4 years building SaaS, insurtech, and internal workflow products with Ruby on Rails, React, Next.js, and PostgreSQL.",
  },
};
