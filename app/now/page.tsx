import type { Metadata } from "next";

import { QuietPage } from "@/components/quiet-page";
import { getQuietPage, quietPageMetadata } from "@/content/quiet-pages";

const page = getQuietPage("now");

export const metadata: Metadata = quietPageMetadata(page);

export default function NowPage() {
  return <QuietPage page={page} />;
}
