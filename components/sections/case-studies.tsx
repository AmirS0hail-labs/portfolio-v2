import { caseStudies } from "@/content/case-studies";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { Reveal } from "@/components/reveal";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <Reveal>
        <SectionHeading
          eyebrow="Case Studies"
          title="Work I can talk about in depth"
          description="Three products I took from ambiguity to shipped software: a founding-engineer insurtech build, an internal automation platform, and an operator-facing tool."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy, index) => (
          <Reveal key={caseStudy.slug} delay={index * 0.08} className="h-full">
            <CaseStudyCard caseStudy={caseStudy} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
