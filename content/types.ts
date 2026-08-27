export type AccentColor = "rose" | "sage" | "default";

export interface HeadlineLine {
  text: string;
  accent: AccentColor;
}

export interface HeroPill {
  label: string;
  accent?: AccentColor;
}

export interface HeroContent {
  headline: HeadlineLine[];
  subheadline: string;
  pills: HeroPill[];
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/**
 * Sensitivity tiers control how a visual placeholder is framed:
 * - public:    fine to show directly (e.g. a public marketing site).
 * - internal:  internal tool — only redacted/synthetic stills, if shown at all.
 * - synthetic: must be fully synthetic/redacted — no real data or identifiers.
 * - pending:   awaiting a safe (synthetic/redacted) asset from the owner.
 */
export type Sensitivity = "public" | "internal" | "synthetic" | "pending";

export type VisualAspect = "video" | "wide" | "square";

export interface Visual {
  kind: "image" | "video" | "embed";
  /** Optional real asset path; when absent a placeholder is rendered. */
  src?: string;
  /** Optional external link, eg for a live site */
  href?: string;
  caption: string;
  sensitivity: Sensitivity;
  /** Short note shown on the placeholder explaining the asset status. */
  note?: string;
  aspect?: VisualAspect;
}

export interface Metric {
  label: string;
  from: string;
  to: string;
  note?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  org: string;
  role: string;
  timeframe?: string;
  /** Short one-liner used on the overview card. */
  tagline: string;
  summary: string;
  contributions: string[];
  result: string;
  metric?: Metric;
  stack: string[];
  visuals: Visual[];
  accent: AccentColor;
  /** Optional live product URL, shown on the detail page. */
  href?: string;
  /** Optional privacy disclaimer surfaced on the detail page. */
  privacyNote?: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  /** Public marketing still, if one exists. */
  image?: string;
  current?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  relationship: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  note?: string;
}

export interface AboutContent {
  paragraphs: string[];
  education: {
    school: string;
    degree: string;
    period: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  name: string;
  role: string;
  /** First-viewport dock line (engineer-first, not a designer slogan). */
  dockLine: string;
  location: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  /** Canonical site URL (override with NEXT_PUBLIC_SITE_URL in production). */
  url: string;
  nav: NavItem[];
  seo: {
    title: string;
    description: string;
  };
}
