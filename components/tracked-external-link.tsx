"use client";

import type { ComponentPropsWithoutRef } from "react";

import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsPlacement,
} from "@/lib/analytics";

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  event: AnalyticsEventName;
  placement: AnalyticsPlacement;
};

export function TrackedExternalLink({
  event,
  placement,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, { placement });
        onClick?.(e);
      }}
    />
  );
}
