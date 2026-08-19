import Script from "next/script";

import { siteUrl } from "@/content/site";

const UMAMI_SCRIPT_URL =
  process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ??
  "https://cloud.umami.is/script.js";

function productionHostname(): string | undefined {
  try {
    return new URL(siteUrl).hostname;
  } catch {
    return undefined;
  }
}

export function AnalyticsScript() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  const domains = productionHostname();

  return (
    <Script
      src={UMAMI_SCRIPT_URL}
      strategy="afterInteractive"
      data-website-id={websiteId}
      data-exclude-hash="true"
      data-exclude-search="true"
      {...(domains ? { "data-domains": domains } : {})}
    />
  );
}
