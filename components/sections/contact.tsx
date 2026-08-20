import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { TrackedExternalLink } from "@/components/tracked-external-link";
import type { AnalyticsEventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const socials: {
  label: string;
  href: string;
  Icon: typeof LinkedInIcon | typeof GitHubIcon | typeof Mail;
  event: AnalyticsEventName;
  external: boolean;
}[] = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    event: "outbound_linkedin",
    external: true,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: GitHubIcon,
    event: "outbound_github",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    Icon: Mail,
    event: "outbound_email",
    external: false,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="surface-panel rounded-3xl px-5 py-14 text-center sm:px-12 sm:py-20">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
            <SectionHeading
              index="06"
              eyebrow="Contact"
              align="center"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-accent-rose">reliable</span>.
                </>
              }
              blink={false}
              description="Have an ambiguous problem that needs to become shipped software? I'm happy to talk through it. The fastest way to reach me is email."
            />

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <TrackedExternalLink
                  event="outbound_email"
                  placement="contact"
                  href={`mailto:${site.email}`}
                >
                  <Mail className="size-4" />
                  {site.email}
                </TrackedExternalLink>
              </Button>
              <Button asChild size="lg" variant="outline">
                <TrackedExternalLink
                  event="outbound_linkedin"
                  placement="contact"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="size-4" />
                </TrackedExternalLink>
              </Button>
            </div>

            <ul className="mt-2 flex items-center gap-2">
              {socials.map(({ label, href, Icon, event, external }) => (
                <li key={label}>
                  <TrackedExternalLink
                    event={event}
                    placement="contact_icon"
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border border-border text-accent-sage transition-[background-color,border-color,color,transform] duration-[var(--duration-hover)] ease-canvas hover:border-accent-mahogany hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px",
                    )}
                  >
                    <Icon className="size-[18px]" />
                  </TrackedExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
