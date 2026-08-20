import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { TrackedExternalLink } from "@/components/tracked-external-link";
import type { AnalyticsEventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** Dock socials — add another entry here when a new profile is ready. */
const socials: {
  label: string;
  href: string;
  Icon: typeof LinkedInIcon | typeof GitHubIcon;
  event: AnalyticsEventName;
}[] = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    event: "outbound_linkedin",
  },
  {
    label: "GitHub",
    href: site.github,
    Icon: GitHubIcon,
    event: "outbound_github",
  },
];

const chromeHover =
  "transition-[background-color,border-color,color,transform] duration-[var(--duration-hover)] ease-canvas hover:border-accent-mahogany hover:bg-accent-mahogany/55 hover:text-foreground motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-px";

export function ViewportDock() {
  return (
    <div className="relative z-10 w-full pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="font-mono text-xs text-accent-sage sm:text-sm">
          <span aria-hidden="true">{"// "}</span>
          {site.dockLine}
        </p>

        <div className="flex items-center justify-between gap-3 sm:contents">
          <ul className="surface-chrome flex shrink-0 items-center gap-1.5 rounded-full p-1.5 sm:gap-2 sm:p-2">
            {socials.map(({ label, href, Icon, event }) => (
              <li key={label}>
                <TrackedExternalLink
                  event={event}
                  placement="hero_dock"
                  href={href}
                  aria-label={label}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full text-foreground sm:size-12",
                    chromeHover,
                  )}
                >
                  <Icon className="size-5 sm:size-6" />
                </TrackedExternalLink>
              </li>
            ))}
          </ul>

          <TrackedExternalLink
            event="outbound_email"
            placement="hero_dock"
            href={`mailto:${site.email}`}
            className={cn(
              "inline-flex h-11 max-w-full items-center rounded-full border border-border bg-transparent px-4 font-mono text-xs whitespace-nowrap text-foreground sm:h-14 sm:px-5 sm:text-sm",
              chromeHover,
            )}
          >
            {site.email}
          </TrackedExternalLink>
        </div>
      </div>
    </div>
  );
}
