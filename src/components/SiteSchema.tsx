import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  serviceSchemas,
  personSchema,
} from "@/data/schema-org";

/** Site-wide structured data, identical on every page. Server-rendered (no "use client") so
 * non-JS crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) see it in the initial HTML. */
export function SiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      webSiteSchema,
      personSchema,
      ...serviceSchemas,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
