import { Quote } from "lucide-react";

import { testimonials } from "@/content/testimonials";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title="What people I've worked with say"
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 0.08}
            className="h-full"
          >
            <figure className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <Quote
                className="size-7 text-accent-violet/70"
                aria-hidden="true"
              />
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue/80 to-accent-violet/80 text-sm font-semibold text-background">
                  {initials(testimonial.name)}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </span>
                  <span className="text-xs text-muted-foreground/80">
                    {testimonial.relationship}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
