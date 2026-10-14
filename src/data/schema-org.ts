import { faqs } from "./faq";
import { projects } from "./projects";
import { serviceDetails } from "./service-details";
import { insightArticles } from "./insights";

export const baseUrl = "https://sliiqque.space";

const logo = {
  "@type": "ImageObject",
  "@id": baseUrl + "/#logo",
  url: baseUrl + "/icon-192.png",
  contentUrl: baseUrl + "/icon-192.png",
  width: 192,
  height: 192,
};
const sameAs = ["https://x.com/sliiqque", "https://web.facebook.com/dev.sliiqque", "https://studio.sliiqque.space"];

export const personSchema = {
  "@type": "Person",
  "@id": baseUrl + "/studio/#person",
  name: "Gabriel Njoabozia",
  url: baseUrl + "/studio/",
  image: baseUrl + "/images/Gabriel.jpg",
  jobTitle: "Founder & Lead Engineer",
  worksFor: { "@id": baseUrl + "/#organization" },
  knowsAbout: [
    "React", "Next.js", "TypeScript", "AI Agents", "Workflow Automation",
  ],
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": baseUrl + "/#organization",
  name: "SLIIQQUE",
  url: baseUrl + "/",
  logo,
  image: baseUrl + "/og-image.jpg",
  sameAs,
  email: "hello@sliiqque.space",
  description: "Boutique software studio building websites, AI bots and agents, workflow automation, and SaaS platforms.",
  foundingDate: "2025-12-22",
  foundingLocation: { "@type": "City", name: "Lagos" },
  founder: { "@id": baseUrl + "/studio/#person" },
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@sliiqque.space",
    contactType: "sales",
  },
  knowsAbout: [
    "Website Development", "AI Agents", "AI Bot Development",
    "Workflow Automation", "React", "Next.js", "TypeScript",
    "SaaS Frontend Engineering", "Frontend Architecture",
  ],
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": baseUrl + "/#localbusiness",
  name: "SLIIQQUE",
  description: "Boutique software studio in Lagos, Nigeria, specializing in websites, AI bots, and workflow automation",
  url: baseUrl + "/",
  logo,
  image: baseUrl + "/og-image.jpg",
  sameAs,
  email: "hello@sliiqque.space",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.5244, longitude: 3.3792 },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export const webSiteSchema = {
  "@type": "WebSite",
  "@id": baseUrl + "/#website",
  url: baseUrl + "/",
  name: "SLIIQQUE",
  inLanguage: "en",
  publisher: { "@id": baseUrl + "/#organization" },
};


const fixedOffer = (price: number, currency: string, description: string) => ({
  "@type": "Offer",
  price,
  priceCurrency: currency,
  description,
});

const service = (id: string, serviceType: string, name: string, description: string, extra?: Record<string, unknown>) => ({
  "@type": "Service",
  "@id": baseUrl + id,
  serviceType,
  name,
  provider: { "@id": baseUrl + "/#organization" },
  areaServed: "Worldwide",
  description,
  ...extra,
});

export const serviceSchemas = [
  service("/#service", "AI Bot & Agent Development", "AI Bot & Agent Development",
    "AI bots for WhatsApp, Telegram, and social platforms. AI agents embedded in websites for customer support, lead qualification, and booking automation.",
    { url: baseUrl + "/services/", offers: fixedOffer(600, "USD", "Starting price") }),
  service("/#service-website", "Website Design", "Website Design & Development",
    "Professional, conversion-focused websites with workflow automation and AI bot integration for businesses ready to grow.",
    { offers: fixedOffer(300, "USD", "Starting price") }),
  service("/#service-saas", "SaaS Frontend Development", "SaaS Interface Engineering",
    "High-performance React and Next.js interfaces for SaaS products with AI agent integration and workflow automation, built for conversion and scale.",
    { offers: fixedOffer(1000, "USD", "Starting price") }),
  service("/#service-automation", "Workflow Automation", "Workflow Automation Systems",
    "End-to-end workflow automation connecting websites, bots, and backend systems, reducing manual work and increasing operational efficiency."),
  service("/#service-retainer", "Studio Retainer", "Studio Retainer",
    "Your dedicated engineering partner for websites, automation, and AI agents. On call, embedded, and always shipping with priority access and ongoing support.",
    { offers: fixedOffer(2500, "USD", "Monthly retainer starting price") }),
  service("/#service-audit", "Technical Audit", "Technical Audit",
    "A thorough audit of your website, workflows, and tech stack with a clear action plan covering performance, architecture, and what to fix, automate, or rebuild.",
    { offers: fixedOffer(800, "USD", "Fixed price") }),
];

const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

/** "Jun 2026" -> "2026-06-01". Single source of truth is the display date in insights.ts. */
const isoDate = (displayDate: string) => {
  const [month, year] = displayDate.split(" ");
  return `${year}-${MONTHS[month]}-01`;
};

/** Derived from insightArticles so headline/date/image can never drift from the visible page. */
export const articleSchemas = insightArticles.map((a) => {
  const datePublished = isoDate(a.date);
  return {
    "@type": "Article",
    "@id": baseUrl + a.href + "/#article",
    headline: a.title,
    description: a.excerpt,
    author: { "@id": baseUrl + "/studio/#person" },
    publisher: { "@id": baseUrl + "/#organization" },
    datePublished,
    dateModified: datePublished,
    image: { "@type": "ImageObject", url: baseUrl + a.imageSrc.replace(/\.webp$/, ".jpg") },
    keywords: a.tags.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": baseUrl + a.href + "/" },
  };
});

const faqSchema = {
  "@type": "FAQPage",
  "@id": baseUrl + "/services/#faq",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const projectSchema = (p: (typeof projects)[number]) => ({
  "@type": "CreativeWork",
  "@id": baseUrl + p.href + "/#project",
  name: p.title,
  headline: p.title,
  description: p.description,
  url: baseUrl + p.href + "/",
  image: p.imageSrc ? baseUrl + p.imageSrc : undefined,
  dateCreated: p.year,
  genre: p.clientType,
  keywords: p.tags.join(", "),
  creator: { "@id": baseUrl + "/#organization" },
  publisher: { "@id": baseUrl + "/#organization" },
});

const workListSchema = {
  "@type": "ItemList",
  "@id": baseUrl + "/work/#list",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: baseUrl + p.href + "/",
    name: p.title,
  })),
};

const serviceDetailSchema = (d: (typeof serviceDetails)[number]) => ({
  "@type": "Service",
  "@id": baseUrl + `/services/${d.slug}/#service`,
  name: d.title,
  serviceType: d.title,
  description: d.description,
  url: baseUrl + `/services/${d.slug}/`,
  provider: { "@id": baseUrl + "/#organization" },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "USD",
      minPrice: d.basePrice,
      ...(d.unit === "month" ? { unitCode: "MON" } : {}),
    },
    description: `Starting price. ${d.addOns.length} optional add-ons increase the total.`,
  },
});

const norm = (pathname: string) => pathname.replace(/\/?$/, "/");

/** Schema nodes that belong to one page only; the site-wide graph lives in SchemaOrg. */
export function pageSchemas(pathname: string) {
  const path = norm(pathname);
  const nodes: Record<string, unknown>[] = [];
  nodes.push({ "@type": "WebPage", "@id": baseUrl + path + "#webpage", url: baseUrl + path, isPartOf: { "@id": baseUrl + "/#website" }, about: { "@id": baseUrl + "/#organization" } });
  if (path === "/services/") nodes.push(faqSchema);
  if (path === "/work/") nodes.push(workListSchema);
  const project = projects.find((p) => path === p.href + "/");
  if (project) nodes.push(projectSchema(project));
  const detail = serviceDetails.find((d) => path === `/services/${d.slug}/`);
  if (detail) nodes.push(serviceDetailSchema(detail));
  const post = articleSchemas.find((a) => a["@id"] === baseUrl + path + "#article");
  if (post) nodes.push(post);
  return nodes;
}

export function pageLabel(pathname: string, fallback: string) {
  const path = norm(pathname);
  const detail = serviceDetails.find((d) => path === `/services/${d.slug}/`);
  if (detail) return detail.title;
  const project = projects.find((p) => path === p.href + "/");
  if (project) return project.title;
  const post = articleSchemas.find((a) => a["@id"] === baseUrl + path + "#article");
  return post ? post.headline : fallback;
}

/** Pure, server-safe breadcrumb builder (no React) so it can render in the initial HTML. */
export function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: baseUrl + "/" }];
  let accumulated = "";
  for (const segment of segments) {
    accumulated += "/" + segment;
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: pageLabel(accumulated, segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())),
      item: baseUrl + accumulated + "/",
    });
  }
  return items;
}
