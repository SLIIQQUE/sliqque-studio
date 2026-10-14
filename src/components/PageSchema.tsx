import { baseUrl, pageSchemas, generateBreadcrumbs } from "@/data/schema-org";

/** Per-page structured data (WebPage, FAQPage, Article, breadcrumbs, etc). Server-rendered
 * with a statically-known path, so it's present in the initial HTML for non-JS crawlers. */
export function PageSchema({ path }: { path: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...pageSchemas(path),
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
