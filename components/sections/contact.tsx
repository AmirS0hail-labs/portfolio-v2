import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  { label: "GitHub", href: site.github, Icon: GitHubIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
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
              description="Have an ambiguous problem that needs to become shipped software? I'm happy to talk through it. The fastest way to reach me is email."
            />

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${site.email}`}>
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <ul className="mt-2 flex items-center gap-2">
              {socials.map(({ label, href, Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border border-border text-accent-sage transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-mahogany hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px",
                    )}
                  >
                    <Icon className="size-[18px]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
