import { GraduationCap, MapPin } from "lucide-react";

import { about } from "@/content/about";
import { site } from "@/content/site";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow="About" title="A little about me" />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={0.05}>
          <div className="flex flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={0.12}>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-accent-blue">
                <GraduationCap className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs tracking-wider text-muted-foreground uppercase">
                  Education
                </span>
                <span className="font-medium text-foreground">
                  {about.education.degree}
                </span>
                <span className="text-sm text-muted-foreground">
                  {about.education.school}
                </span>
                <span className="text-sm text-muted-foreground">
                  {about.education.period}
                </span>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-accent-violet">
                <MapPin className="size-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="text-xs tracking-wider text-muted-foreground uppercase">
                  Based in
                </span>
                <span className="font-medium text-foreground">
                  {site.location}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
