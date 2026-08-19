import type { HeroContent } from "./types";

export const hero: HeroContent = {
  headline: [
    { text: "Full-Stack", accent: "rose" },
    { text: "Software", accent: "default" },
    { text: "Engineer", accent: "default" },
  ],
  subheadline:
    "Backend-leaning full-stack engineer with 4 years building SaaS, insurtech, and internal workflow products with Ruby on Rails, React, Next.js, and PostgreSQL. I take ambiguous problems from requirements to reliable, shipped software.",
  pills: [
    { label: "Backend", accent: "sage" },
    { label: "Full-Stack", accent: "sage" },
    { label: "Product-minded", accent: "sage" },
    { label: "Based in Islamabad", accent: "sage" },
  ],
  cta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "View case studies", href: "#case-studies" },
};
