import { displayDateToIso } from "@/lib/seo";

/** A visible date such as "Jun 2026" wrapped in <time> so crawlers and LLMs get a machine-readable date. */
export function PublishedDate({ date }: { date: string }) {
  return <time dateTime={displayDateToIso(date)}>{date}</time>;
}
