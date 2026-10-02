export type PriceUnit = "project" | "month";

export interface AddOn {
  id: string;
  name: string;
  description: string;
  /** Extra USD added to the base price (per month for monthly services). */
  price: number;
  group: string;
}

export interface ServiceDetail {
  slug: string;
  /** Matches `title` in services.ts. */
  title: string;
  /** Matches the value used by the contact form's project select. */
  contactValue: string;
  tagline: string;
  description: string;
  basePrice: number;
  unit: PriceUnit;
  /** Base package scope; this is what the starting price covers. */
  included: string[];
  addOns: AddOn[];
  idealFor: string[];
  metaTitle: string;
  metaDescription: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    contactValue: "website",
    tagline: "Start lean, add only what you need.",
    description:
      "A professional, conversion-focused website that establishes your online presence. The starting price covers the essentials. Every feature beyond that is an add-on, so you only pay for what your business actually uses.",
    basePrice: 300,
    unit: "project",
    included: [
      "Custom responsive design",
      "Up to 5 pages",
      "Mobile-first build",
      "Fast load times",
      "On-page SEO basics",
      "Contact form",
    ],
    addOns: [
      { id: "booking", name: "Booking system", description: "Let visitors book appointments or calls online, with calendar sync and email confirmations.", price: 100, group: "Features" },
      { id: "payments", name: "Online payments", description: "Accept card and bank payments (Paystack or Stripe) on your site.", price: 150, group: "Features" },
      { id: "accounts", name: "User accounts & login", description: "Member sign-up, login, and a private area for your customers.", price: 250, group: "Features" },
      { id: "store", name: "E-commerce store", description: "Product catalogue, cart, and checkout for up to 25 products.", price: 350, group: "Features" },
      { id: "cms", name: "Blog / content management", description: "Edit pages and publish articles yourself without touching code.", price: 120, group: "Content" },
      { id: "pages", name: "5 extra pages", description: "Extend the site beyond the 5 included pages.", price: 100, group: "Content" },
      { id: "multilingual", name: "Multi-language", description: "Serve the site in a second language with a language switcher.", price: 100, group: "Content" },
      { id: "seo-pro", name: "Advanced SEO & schema", description: "Structured data, sitemap, and search and AI-answer optimisation.", price: 80, group: "Growth" },
      { id: "analytics", name: "Analytics & conversion tracking", description: "Track visitors, sources, and the actions that matter to your business.", price: 50, group: "Growth" },
      { id: "newsletter", name: "Newsletter & email capture", description: "Collect subscribers and connect them to your email tool.", price: 60, group: "Growth" },
      { id: "whatsapp", name: "WhatsApp / live chat widget", description: "A floating button so visitors can message you instantly.", price: 40, group: "Growth" },
      { id: "ai-chat", name: "AI chatbot on your site", description: "An assistant that answers questions and captures leads around the clock.", price: 200, group: "Growth" },
      { id: "motion", name: "Custom animations", description: "Scroll-driven motion and polished interactions for a premium feel.", price: 120, group: "Design" },
      { id: "launch", name: "Domain, hosting & launch setup", description: "We register, configure, and deploy everything so you can go live.", price: 50, group: "Design" },
    ],
    idealFor: ["Small businesses going online", "Service providers who need bookings", "Founders validating an idea"],
    metaTitle: "Website Design & Development from $300",
    metaDescription: "Websites from $300, then add only what you need: booking, payments, store, blog, SEO and AI chat. See your estimate update live.",
  },
  {
    slug: "ai-bot-agent-development",
    title: "AI Bot & Agent Development",
    contactValue: "ai-bot",
    tagline: "One bot to begin, more channels as you grow.",
    description:
      "Custom AI bots for WhatsApp, Telegram, and your website that answer customers, capture leads, and automate routine work. The starting price covers one channel. Add channels and capabilities as your needs grow.",
    basePrice: 600,
    unit: "project",
    included: [
      "1 channel (WhatsApp, Telegram, or website)",
      "Custom conversation flows",
      "FAQ and product answers",
      "Lead capture to email",
      "Testing and launch",
    ],
    addOns: [
      { id: "channel", name: "Additional channel", description: "Run the same bot on a second channel (WhatsApp, Telegram, or website).", price: 200, group: "Channels" },
      { id: "social-dm", name: "Instagram / Facebook DMs", description: "Automate replies to direct messages on social platforms.", price: 200, group: "Channels" },
      { id: "knowledge", name: "Trained on your documents", description: "The bot answers from your own PDFs, pages, and policies.", price: 150, group: "Intelligence" },
      { id: "multilingual", name: "Multi-language replies", description: "Detect and answer in your customers' language.", price: 100, group: "Intelligence" },
      { id: "crm", name: "CRM / spreadsheet sync", description: "Send every lead to Google Sheets, Airtable, or your CRM.", price: 120, group: "Automation" },
      { id: "booking", name: "Appointment booking", description: "Customers book slots directly inside the chat.", price: 150, group: "Automation" },
      { id: "payments", name: "Payments in chat", description: "Collect payment links and confirm orders without leaving the conversation.", price: 200, group: "Automation" },
      { id: "handoff", name: "Human handoff dashboard", description: "Take over any conversation from a simple inbox when the bot needs help.", price: 250, group: "Control" },
      { id: "analytics", name: "Conversation analytics", description: "See volumes, top questions, and where customers drop off.", price: 120, group: "Control" },
    ],
    idealFor: ["Businesses answering the same questions daily", "Shops selling through WhatsApp", "Teams qualifying leads"],
    metaTitle: "AI Bot & Agent Development from $600",
    metaDescription: "WhatsApp, Telegram and website AI bots from $600. Add channels, document training, bookings, payments and analytics as you need them.",
  },
  {
    slug: "interface-engineering",
    title: "Interface Engineering",
    contactValue: "interface-engineering",
    tagline: "Production React interfaces, scoped to your product.",
    description:
      "High-performance React and Next.js interfaces for SaaS and business products. The starting price covers a focused set of screens. Add systems, integrations, and quality layers as the product demands.",
    basePrice: 1000,
    unit: "project",
    included: [
      "Up to 5 key screens",
      "React, Next.js and TypeScript",
      "Pixel-perfect, responsive build",
      "Performance-first architecture",
      "Conversion-focused UX",
    ],
    addOns: [
      { id: "screens", name: "5 additional screens", description: "Extend the build beyond the 5 included screens.", price: 300, group: "Scope" },
      { id: "dashboard", name: "Dashboard & data tables", description: "Charts, filterable tables, and real-time data views.", price: 500, group: "Scope" },
      { id: "auth", name: "Auth & role-based access UI", description: "Login flows, session handling, and permission-aware screens.", price: 350, group: "Scope" },
      { id: "api", name: "API integration", description: "Connect the interface to your existing backend or third-party APIs.", price: 300, group: "Scope" },
      { id: "design-system", name: "Design system & tokens", description: "A reusable component library with tokens your team can extend.", price: 400, group: "Systems" },
      { id: "storybook", name: "Storybook documentation", description: "Documented components so developers can build consistently.", price: 150, group: "Systems" },
      { id: "motion", name: "Motion & micro-interactions", description: "Considered animation that makes the product feel finished.", price: 250, group: "Systems" },
      { id: "a11y", name: "Accessibility pass (WCAG)", description: "Keyboard, screen reader, and contrast fixes to meet WCAG 2.2 AA.", price: 200, group: "Quality" },
      { id: "tests", name: "Unit & end-to-end tests", description: "Automated tests covering the critical user flows.", price: 300, group: "Quality" },
      { id: "migration", name: "Legacy migration (CRA / older React)", description: "Move an existing app to Next.js without a rewrite.", price: 400, group: "Quality" },
    ],
    idealFor: ["SaaS founders with a backend but no frontend", "Teams modernising an older React app", "Products that need a polished first impression"],
    metaTitle: "Interface Engineering from $1,000",
    metaDescription: "React and Next.js interfaces for SaaS from $1,000. Add dashboards, auth, design systems, testing and accessibility as the product needs.",
  },
  {
    slug: "studio-retainer",
    title: "Studio Retainer",
    contactValue: "retainer",
    tagline: "A dedicated engineering partner, month to month.",
    description:
      "A standing engagement for websites, automation, and AI agents. The starting price covers 40 hours a month with priority access. Add hours and support levels as your workload changes.",
    basePrice: 2500,
    unit: "month",
    included: [
      "40 hours per month",
      "Priority access",
      "Strategy sessions",
      "Ongoing support",
    ],
    addOns: [
      { id: "hours", name: "10 extra hours", description: "Additional capacity for busy months.", price: 625, group: "Capacity" },
      { id: "sla", name: "24-hour response guarantee", description: "Guaranteed first response within one business day.", price: 300, group: "Support" },
      { id: "monitoring", name: "Uptime & performance monitoring", description: "We watch your site and fix problems before customers notice.", price: 200, group: "Support" },
      { id: "reports", name: "Monthly performance report", description: "Traffic, speed, and conversion insights with clear next steps.", price: 150, group: "Support" },
    ],
    idealFor: ["Businesses with constant small changes", "Founders without an in-house developer", "Teams shipping every week"],
    metaTitle: "Studio Retainer from $2,500 per month",
    metaDescription: "A dedicated engineering partner from $2,500 per month, with 40 hours, priority access and strategy sessions. Add hours and support as needed.",
  },
  {
    slug: "technical-audit",
    title: "Technical Audit",
    contactValue: "audit",
    tagline: "Know exactly what to fix, automate, or rebuild.",
    description:
      "A thorough review of your website, workflows, and tech stack that ends in a clear action plan. The starting price covers the core audit. Add specialist reviews when you need a deeper look.",
    basePrice: 800,
    unit: "project",
    included: [
      "Performance audit",
      "Architecture review",
      "Prioritised action plan",
      "Implementation guide",
    ],
    addOns: [
      { id: "security", name: "Security review", description: "Check for exposed secrets, weak auth, and common vulnerabilities.", price: 250, group: "Deeper review" },
      { id: "a11y", name: "Accessibility audit (WCAG)", description: "Find barriers for keyboard and screen reader users.", price: 200, group: "Deeper review" },
      { id: "seo", name: "SEO & AI-search audit", description: "Technical SEO, structured data, and AI answer-engine readiness.", price: 200, group: "Deeper review" },
      { id: "automation", name: "Workflow automation mapping", description: "Identify manual processes that can be automated, with estimated savings.", price: 250, group: "Deeper review" },
      { id: "walkthrough", name: "Walkthrough call", description: "A live session to go through the findings with your team.", price: 100, group: "Follow-through" },
      { id: "fix-sprint", name: "Fix sprint (10 hours)", description: "We implement the highest-priority fixes straight after the audit.", price: 600, group: "Follow-through" },
    ],
    idealFor: ["Sites that feel slow or fragile", "Teams unsure whether to patch or rebuild", "Owners preparing for growth"],
    metaTitle: "Technical Audit from $800",
    metaDescription: "A fixed-scope technical audit from $800 with an action plan. Add security, accessibility, SEO and automation reviews or a fix sprint.",
  },
];

export const getServiceDetail = (slug: string) => serviceDetails.find((s) => s.slug === slug);

export const formatPrice = (amount: number, unit: PriceUnit = "project") =>
  `$${amount.toLocaleString("en-US")}${unit === "month" ? "/month" : ""}`;

export const estimateTotal = (service: ServiceDetail, selected: string[]) =>
  service.basePrice + service.addOns.filter((a) => selected.includes(a.id)).reduce((sum, a) => sum + a.price, 0);
