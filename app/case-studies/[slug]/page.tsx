import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";
import { CaseStudyDetail } from "@/components/case-study/case-study-detail";

type PageParams = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) return {};

  const title = `${caseStudy.title} — ${site.name}`;
  const description = caseStudy.summary;
  const url = `${site.url}/case-studies/${caseStudy.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/case-studies/${caseStudy.slug}` },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CaseStudyPage({ params }: PageParams) {
  const { slug } = await params;
  const index = caseStudies.findIndex((cs) => cs.slug === slug);

  if (index === -1) notFound();

  const caseStudy = caseStudies[index];
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next =
    index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  return (
    <CaseStudyDetail
      caseStudy={caseStudy}
      prev={prev ? { slug: prev.slug, title: prev.title } : undefined}
      next={next ? { slug: next.slug, title: next.title } : undefined}
    />
  );
}
