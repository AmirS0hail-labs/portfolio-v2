import { caseStudies } from "@/content/case-studies";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { Reveal } from "@/components/reveal";

export function CaseStudies() {
  const [featured, ...rest] = caseStudies;

  return (
    <Section id="case-studies">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="Case Studies"
          title="Work I can talk about in depth"
          description="Three products I took from ambiguity to shipped software: a founding-engineer insurtech build, an internal automation platform, and an operator-facing tool."
        />
      </Reveal>

      <div className="mt-12 flex flex-col gap-6">
        {featured ? (
          <Reveal>
            <CaseStudyCard caseStudy={featured} index={0} featured />
          </Reveal>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((caseStudy, index) => (
            <Reveal
              key={caseStudy.slug}
              delay={(index + 1) * 0.08}
              className="h-full"
            >
              <CaseStudyCard caseStudy={caseStudy} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
