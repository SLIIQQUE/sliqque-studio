"use client";

import { usePathname } from "next/navigation";
import {
  baseUrl,
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
  serviceSchemas,
  pageSchemas,
  pageLabel,
} from "@/data/schema-org";

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ position: 1, name: "Home", item: baseUrl + "/" }];
  let accumulated = "";
  for (const segment of segments) {
    accumulated += "/" + segment;
    items.push({
      position: items.length + 1,
      name: pageLabel(accumulated, segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())),
      item: baseUrl + accumulated + "/",
    });
  }
  return items;
}

export function SchemaOrg() {
  const pathname = usePathname();
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      webSiteSchema,
      ...serviceSchemas,
      ...pageSchemas(pathname),
      {
        "@type": "BreadcrumbList",
        "@id": baseUrl + (pathname.replace(/\/?$/, "/")) + "#breadcrumb",
        itemListElement: generateBreadcrumbs(pathname),
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
