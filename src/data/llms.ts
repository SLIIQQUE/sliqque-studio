import { faqs } from "./faq";
import { insightArticles } from "./insights";
import { verticals } from "./expertise";
import { projects } from "./projects";
import { formatPrice, serviceDetails } from "./service-details";
import { processSteps } from "./services";
import { baseUrl } from "./schema-org";
import { beliefs, bioParagraphs, differentiators, studioInfo, studioStack, studioStats } from "./studio";

const EMAIL = "hello@sliiqque.space";
const url = (path: string) => `${baseUrl}${path.replace(/\/?$/, "/")}`;

const summary =
  "SLIIQQUE is a boutique software studio in Lagos, Nigeria, founded in 2021. It builds websites, AI bots and agents, workflow automation systems, and SaaS interfaces for founders and businesses worldwide. The studio takes on 2-3 new projects per quarter.";

const keyFacts = [
  `Founder and lead engineer: ${studioInfo.founder}`,
  "Location: Lagos, Nigeria (clients worldwide)",
  `Contact: ${EMAIL}`,
  `Stack: ${studioStack.slice(0, 5).join(", ")} and more`,
];

const pricingNote =
  "Prices are starting prices in USD. Each service page lets visitors add optional features, and the estimate rises with each one (for example, a booking system adds $100 to a website).";

const pages = [
  ["Home", "/", "Studio overview, services, selected work"],
  ["Services", "/services/", "Engagement types, process, FAQ"],
  ["Work", "/work/", "Case studies"],
  ["Expertise", "/expertise/", "SaaS, FinTech and RegTech, AI agents and automation"],
  ["Studio", "/studio/", "About the founder and the studio"],
  ["Insights", "/insights/", "Technical articles"],
  ["Contact", "/contact/", "Start a project"],
  ["Privacy Policy", "/privacy/", "How personal information is handled"],
  ["Terms of Service", "/terms/", "Terms for the site and services"],
];

const servicePrice = (s: (typeof serviceDetails)[number]) =>
  `from ${formatPrice(s.basePrice, s.unit).replace("/month", " per month")}`;

/** Short index of the site for AI tools. Served at /llms.txt. */
export function buildLlmsTxt(): string {
  return [
    "# SLIIQQUE",
    "",
    `> ${summary}`,
    "",
    "Key facts:",
    ...keyFacts.map((f) => `- ${f}`),
    "",
    "## Services and pricing (USD, starting prices)",
    ...serviceDetails.map((s) => `- [${s.title}](${url(`/services/${s.slug}`)}): ${servicePrice(s)}`),
    "",
    pricingNote,
    "",
    "## Pages",
    ...pages.map(([name, path, note]) => `- [${name}](${url(path)}): ${note}`),
    "",
    "## Case studies",
    ...projects.map((p) => `- [${p.title}](${url(p.href)}): ${p.description}`),
    "",
    "## Optional",
    `- [Full content for LLMs](${baseUrl}/llms-full.txt)`,
    `- [Sitemap](${baseUrl}/sitemap.xml)`,
    "",
  ].join("\n");
}

/** Detailed content for AI tools. Served at /llms-full.txt. */
export function buildLlmsFullTxt(): string {
  const out: string[] = [
    "# SLIIQQUE: full content for LLMs",
    "",
    `Source: ${baseUrl}/ . Generated from the same data that powers the website, so it always matches the live pages.`,
    "",
    `> ${summary}`,
    "",
    "## Key facts",
    ...keyFacts.map((f) => `- ${f}`),
    ...studioStats.map((s) => `- ${s.label}: ${s.value}`),
    "",
    "## About the studio",
    "",
    studioInfo.description,
    "",
    studioInfo.specialization,
    "",
    ...bioParagraphs.flatMap((p) => [p, ""]),
    "What sets the studio apart:",
    ...differentiators.map((d) => `- ${d.title}: ${d.description}`),
    "",
    "How the studio thinks:",
    ...beliefs.map((b) => `- "${b.quote}" ${b.description}`),
    "",
    `Technology: ${studioStack.join(", ")}.`,
    `More: ${url("/studio")}`,
    "",
    "## Services, scope and pricing",
    "",
    pricingNote,
    "",
  ];

  serviceDetails.forEach((s) => {
    out.push(
      `### ${s.title}`,
      `Page: ${url(`/services/${s.slug}`)}`,
      `Starting price: ${formatPrice(s.basePrice, s.unit).replace("/month", " per month")}`,
      "",
      s.description,
      "",
      "Included in the starting price:",
      ...s.included.map((i) => `- ${i}`),
      "",
      `Optional add-ons (extra cost${s.unit === "month" ? ", per month" : ""}):`,
      ...s.addOns.map((a) => `- ${a.name} (+${formatPrice(a.price, s.unit).replace("/month", "")}): ${a.description}`),
      "",
      `Ideal for: ${s.idealFor.join("; ")}.`,
      "",
    );
  });

  out.push(
    "## How projects work",
    ...processSteps.map((p) => `${Number(p.step)}. ${p.title}: ${p.description}`),
    "",
    "## Case studies",
    "",
  );
  projects.forEach((p) => {
    out.push(
      `### ${p.title} (${p.year})`,
      `Page: ${url(p.href)}`,
      `Sector: ${p.clientType}. Engagement: ${p.engagementType}. Stack: ${p.tags.join(", ")}.`,
      "",
      p.description,
      ...(p.outcomes?.length ? ["", "Results:", ...p.outcomes.map((o) => `- ${o}`)] : []),
      "",
    );
  });

  out.push("## Areas of expertise", "");
  verticals.forEach((v) => out.push(`- [${v.title}](${url(v.href)}): ${v.description}`));

  out.push("", "## Articles", "");
  insightArticles.forEach((a) => out.push(`- [${a.title}](${url(a.href)}) (${a.date}): ${a.excerpt}`));

  out.push("", "## Frequently asked questions");
  faqs.forEach((f) => out.push("", `### ${f.question}`, f.answer));

  out.push(
    "",
    "## Contact and policies",
    `- Email: ${EMAIL}`,
    `- Start a project: ${url("/contact")}`,
    `- Privacy Policy: ${url("/privacy")}`,
    `- Terms of Service: ${url("/terms")}`,
    `- Sitemap: ${baseUrl}/sitemap.xml`,
    "",
  );
  return out.join("\n");
}
