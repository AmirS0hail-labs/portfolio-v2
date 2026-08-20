import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "tpi",
    title: "Trucker Path Insurance (TPI)",
    org: "Alfabolt",
    role: "Founding Engineer",
    tagline:
      "Turning a large trucking-app audience into a measured intake to quote to purchase funnel.",
    summary:
      "Founding engineer on a trucking-insurance product that turns a large trucking-app audience into a measured intake to quote to purchase funnel, plus the internal producer and backoffice tooling behind it.",
    contributions: [
      "Owned the frontend foundation (React, React Native Web, Redux Toolkit, RTK Query), the design system, and the FE conventions the team built on.",
      "Chose React Native Web for release independence across web and mobile surfaces.",
      "Instrumented the funnel end to end with Mixpanel, Google Tag Manager, GrowthBook, Microsoft Clarity, and Sentry.",
      "Built the producer workflow tool (TRAK) and the React backoffice used by producers and admins.",
      "Contributed Spring Boot and Django services where delivery required it.",
    ],
    result:
      "Company landing-screen conversion improved from 3.28% (Feb 2026) to 11.76% (May 2026) over a period of funnel experimentation, UX, and performance work. Shipped a stable, frequently-released funnel plus internal tooling actively used by producers and admins.",
    metric: {
      label: "Company landing-screen conversion",
      from: "3.28%",
      to: "11.76%",
      note: "Feb 2026 to May 2026",
    },
    stack: [
      "React",
      "React Native Web",
      "Redux Toolkit",
      "RTK Query",
      "Spring Boot",
      "Django",
      "PostgreSQL",
      "Mixpanel",
      "GTM",
      "GrowthBook",
      "Clarity",
      "Sentry",
    ],
    visuals: [
      {
        kind: "image",
        caption: "TPI marketing site",
        sensitivity: "public",
        note: "Public marketing site — screenshot/embed can be dropped in directly.",
        aspect: "wide",
      },
      {
        kind: "image",
        caption: "TRAK — producer workflow tool",
        sensitivity: "internal",
        note: "Internal tool — redacted/synthetic still only.",
        aspect: "wide",
      },
      {
        kind: "image",
        caption: "React backoffice",
        sensitivity: "internal",
        note: "Internal tool — redacted/synthetic still only.",
        aspect: "wide",
      },
    ],
    accent: "rose",
  },
  {
    slug: "gsc-indexing",
    title: "Google Search Console Indexing Automation Platform",
    org: "Alfabolt",
    role: "Engineer — built end to end",
    tagline:
      "A Slack-first, quota-aware, self-serve replacement for a manual SEO indexing workflow.",
    summary:
      "An internal platform that replaces a manual SEO indexing workflow with a Slack-first, quota-aware, self-serve system — usable by non-technical teammates without touching a dashboard.",
    contributions: [
      "Built the platform end to end: an admin dashboard for property and service-account configuration plus submission history.",
      "Built a Slack bot so non-technical users could submit and track work without leaving Slack.",
      "Implemented async workers for submission, quota-aware deferral, retries, and verification.",
      "Split the runtime into separate web, worker, and bot processes for production.",
    ],
    result:
      "A self-serve Slack and dashboard workflow for recurring URL batches, with submissions paced across days to respect API quotas.",
    stack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Slack API",
      "Google Search Console API",
      "Indexing API",
    ],
    visuals: [
      {
        kind: "image",
        caption: "Admin dashboard — configuration & history",
        sensitivity: "pending",
        note: "Synthetic/redacted screen pending from owner.",
        aspect: "wide",
      },
      {
        kind: "video",
        caption: "Slack bot workflow",
        sensitivity: "pending",
        note: "Short synthetic re-recorded or carefully cut redacted clip pending.",
        aspect: "video",
      },
    ],
    accent: "rose",
  },
  {
    slug: "reconciliation-tool",
    title: "Operator-facing Reconciliation & Investigation Tool",
    org: "Private engagement",
    role: "Sole engineer",
    tagline:
      "A local, offline, read-only desktop tool that preserved trusted workbook logic and sped up a recurring investigation.",
    summary:
      "A local, offline, read-only desktop tool built to preserve trusted spreadsheet logic while making a recurring reconciliation and investigation task faster and less error-prone.",
    contributions: [
      "Ran discovery under ambiguity, working directly with a non-technical stakeholder to reverse-engineer and preserve trusted workbook logic.",
      "Built a local, offline, read-only tool (FastAPI, pandas, openpyxl, SQLite) so no data ever left the operator's machine.",
      "Packaged it for Windows for one-step, dependency-free operator use.",
      "Made deliberate security and risk tradeoffs: read-only by design, offline, and faithful to the source-of-truth workbook.",
    ],
    result:
      "Cut a recurring investigation task from about 5 minutes to about 1 minute (operator-reported), while keeping the workflow fully local, offline, and read-only.",
    stack: [
      "Python",
      "FastAPI",
      "pandas",
      "openpyxl",
      "SQLite",
      "Windows packaging",
    ],
    visuals: [
      {
        kind: "image",
        caption: "Tool interface (synthetic data)",
        sensitivity: "synthetic",
        note: "Fully synthetic/redacted screenshot only — no real data or identifiers.",
        aspect: "wide",
      },
    ],
    accent: "rose",
    privacyNote:
      "Domain, client, and data details are intentionally omitted. This tool is described generically by design — it ran fully local, offline, and read-only.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
