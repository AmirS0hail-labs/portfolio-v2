import Image from "next/image";
import { Quote } from "lucide-react";

import { testimonials } from "@/content/testimonials";
import type { Testimonial } from "@/content/types";
import { LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { TrackedExternalLink } from "@/components/tracked-external-link";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.image) {
    return (
      <Image
        src={testimonial.image}
        alt={`Portrait of ${testimonial.name}`}
        width={96}
        height={96}
        className="size-12 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex size-12 items-center justify-center text-sm font-semibold text-foreground">
      {initials(testimonial.name)}
    </span>
  );
}

function Attribution({ testimonial }: { testimonial: Testimonial }) {
  const identity = (
    <>
      <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-accent-sage/45 bg-muted">
        <Avatar testimonial={testimonial} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
          {testimonial.name}
          {testimonial.linkedin ? (
            <LinkedInIcon className="size-3.5 text-muted-foreground" />
          ) : null}
        </span>
        <span className="text-sm text-muted-foreground">{testimonial.title}</span>
        <span className="text-xs text-muted-foreground/80">
          {testimonial.relationship}
        </span>
      </span>
    </>
  );

  if (!testimonial.linkedin) {
    return <div className="flex items-center gap-3">{identity}</div>;
  }

  return (
    <TrackedExternalLink
      href={testimonial.linkedin}
      event="outbound_linkedin"
      placement="testimonials"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${testimonial.name} on LinkedIn`}
      className="flex items-center gap-3 rounded-lg outline-offset-4 transition-opacity hover:opacity-90"
    >
      {identity}
    </TrackedExternalLink>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          index="04"
          eyebrow="Testimonials"
          title="What people I've worked with say"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 0.08}
            className="h-full"
          >
            <figure className="surface-panel flex h-full flex-col gap-4 rounded-2xl p-5 sm:p-6">
              <Quote
                className="size-5 text-accent-sage/55"
                aria-hidden="true"
              />
              <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-auto pt-2">
                <Attribution testimonial={testimonial} />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
