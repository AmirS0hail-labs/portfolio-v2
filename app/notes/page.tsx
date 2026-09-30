import type { Metadata } from "next";

import { QuietPage } from "@/components/quiet-page";
import { getQuietPage, quietPageMetadata } from "@/content/quiet-pages";

const page = getQuietPage("notes");

export const metadata: Metadata = quietPageMetadata(page);

export default function NotesPage() {
  return <QuietPage page={page} />;
}
