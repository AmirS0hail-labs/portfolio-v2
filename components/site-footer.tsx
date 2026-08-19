import Link from "next/link";

import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const socials = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: GitHubIcon,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="flex w-full flex-col gap-8 px-3 pt-8 pb-6 sm:px-4 lg:px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-accent-sage">
            <span aria-hidden="true">{"// "}</span>
            {site.role}
          </p>

          <ul className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border border-border text-accent-sage transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-mahogany hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px",
                    )}
                >
                  <Icon className="size-[18px]" />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-border bg-transparent px-4 py-2 font-mono text-sm text-foreground transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-accent-mahogany hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px"
          >
            {site.email}
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {year} {site.name}
          </p>
          <p>{site.location}</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="h-[0.68em] overflow-hidden px-1 text-[clamp(3rem,13vw,11rem)] leading-none select-none"
      >
        <p className="font-display text-center leading-none font-semibold tracking-[-0.07em] whitespace-nowrap text-foreground">
          AMIR SOHAIL
        </p>
      </div>
    </footer>
  );
}
