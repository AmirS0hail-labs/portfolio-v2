import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="flex items-center justify-between gap-4 px-3 pt-8 pb-6 text-xs text-muted-foreground sm:px-4 lg:px-5">
        <p>
          © {year} {site.name}
        </p>
        <p>{site.location}</p>
      </div>

      <div
        aria-hidden="true"
        className="h-[0.68em] overflow-hidden px-1 text-[clamp(3rem,13vw,11rem)] leading-none select-none"
      >
        <p className="text-center font-display leading-none font-semibold tracking-[-0.07em] whitespace-nowrap text-foreground">
          AMIR SOHAIL
        </p>
      </div>
    </footer>
  );
}
