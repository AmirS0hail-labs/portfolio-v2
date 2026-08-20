export type AnalyticsEventName =
  "cta_contact" | "outbound_email" | "outbound_linkedin" | "outbound_github";

export type AnalyticsPlacement =
  | "hero"
  | "hero_dock"
  | "nav"
  | "nav_mobile"
  | "contact"
  | "contact_icon"
  | "footer";

declare global {
  interface Window {
    umami?: {
      track: (
        event: string,
        data?: Record<string, string>,
      ) => void | Promise<void>;
    };
  }
}

/** No-ops when the Umami script is absent (local, Preview, ad-block). */
export function trackEvent(
  name: AnalyticsEventName,
  data: { placement: AnalyticsPlacement },
): void {
  if (typeof window === "undefined") return;
  window.umami?.track(name, data);
}
