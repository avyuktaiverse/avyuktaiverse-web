import { notFound } from "next/navigation";

/**
 * Catch-all under the locale segment. Any path that no page claims lands here
 * and triggers the localized not-found.tsx inside the normal layout
 * (header, footer, fonts) instead of Next's bare default 404.
 */
export default function CatchAll() {
  notFound();
}
