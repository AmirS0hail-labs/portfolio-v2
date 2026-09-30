import type { Metadata } from "next";

import { site } from "./site";

export type QuietPage = {
  slug: "blog" | "notes" | "now";
  label: string;
  title: string;
  description: string;
  paragraphs: readonly string[];
};

export const quietPages: readonly QuietPage[] = [
  {
    slug: "blog",
    label: "Writing",
    title: "Blog",
    description:
      "Longer writing on building and shipping software. Posts will be listed here.",
    paragraphs: [
      "Longer pieces on building and shipping software will live here. I write from the work: taking an unclear problem through to something reliable in production.",
      "Nothing is published yet. This page is the index those posts will hang from.",
    ],
  },
  {
    slug: "notes",
    label: "Notes",
    title: "Notes",
    description:
      "Shorter notes, separate from longer posts — a single idea, a decision, or something worth keeping.",
    paragraphs: [
      "Notes are shorter than the blog. A single idea, a decision I do not want to lose, or a small thing that came up while building.",
      "This page will list them as they are written. It is empty on purpose for now.",
    ],
  },
  {
    slug: "now",
    label: "Now",
    title: "Now",
    description:
      "What Amir Sohail is focused on right now: full-stack engineering with Rails, React, Next.js, and PostgreSQL, based in Islamabad.",
    paragraphs: [
      "Right now I am a full-stack software engineer based in Islamabad. The work is taking ambiguous problems from requirements to reliable, shipped software.",
      "The stack I spend the most time in is Ruby on Rails, React, Next.js, and PostgreSQL. This page is where that focus will be updated when it changes.",
    ],
  },
];

export function getQuietPage(slug: QuietPage["slug"]): QuietPage {
  const page = quietPages.find((entry) => entry.slug === slug);
  if (!page) {
    throw new Error(`Unknown quiet page: ${slug}`);
  }
  return page;
}

export function quietPageMetadata(page: QuietPage): Metadata {
  const title = `${page.title} — ${site.name}`;
  const path = `/${page.slug}`;

  return {
    title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: page.description,
      url: `${site.url}${path}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
