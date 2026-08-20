import { BookOpen } from "lucide-react";

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
          index="01"
          eyebrow="Case Studies"
          title="Work I can talk about in depth"
          description="Three products I took from ambiguity to shipped software: a founding-engineer insurtech build, an internal automation platform, and an operator-facing tool."
          icon={BookOpen}
        />
      </Reveal>

      <div className="work-list mt-12">
        {caseStudies.map((caseStudy, index) => (
          <Reveal key={caseStudy.slug} delay={index * 0.06}>
            <CaseStudyCard
              caseStudy={caseStudy}
              index={index}
              featured={index === 0}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
