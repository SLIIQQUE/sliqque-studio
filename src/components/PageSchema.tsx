import type { Metadata } from "next";
import { baseUrl, pageSchemas, generateBreadcrumbs } from "@/data/schema-org";

const text = (value: unknown) => (typeof value === "string" ? value : undefined);

/** Per-page structured data (WebPage, FAQPage, Article, breadcrumbs, etc). Server-rendered
 * with a statically-known path, so it's present in the initial HTML for non-JS crawlers.
 * Pass the page's own `metadata` so the WebPage name and description match the page head. */
export function PageSchema({ path, meta }: { path: string; meta?: Metadata }) {
  const title = meta?.title;
  const name =
    text(title) ??
    (title && typeof title === "object" && "absolute" in title ? text(title.absolute) : undefined);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...pageSchemas(path, { name, description: text(meta?.description) }),
      {
        "@type": "BreadcrumbList",
        "@id": baseUrl + path.replace(/\/?$/, "/") + "#breadcrumb",
        itemListElement: generateBreadcrumbs(path),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
