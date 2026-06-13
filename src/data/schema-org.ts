export const baseUrl = "https://sliiqque.space";

export const organizationSchema = {
  "@type": "Organization",
  "@id": baseUrl + "/#organization",
  name: "SLIIQQUE",
  url: baseUrl + "/",
  logo: { "@type": "ImageObject", url: baseUrl + "/logo.svg" },
  description: "Boutique software studio building websites, AI bots and agents, workflow automation, and SaaS platforms.",
  foundingDate: "2021",
  foundingLocation: { "@type": "City", name: "Lagos" },
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
  logo: { "@type": "ImageObject", url: baseUrl + "/logo.svg" },
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
  publisher: { "@id": baseUrl + "/#organization" },
};

const offering = (name: string, price: number, currency: string) => ({
  "@type": "Offer",
  itemOffered: { "@type": "Service", name },
  price,
  priceCurrency: currency,
});

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
    {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Engineering Services",
        itemListElement: [
          offering("Product Build", 15000, "USD"),
          offering("Interface Engineering", 8000, "USD"),
        ],
      },
    }),
  service("/#service-website", "Website Design", "Website Design & Development",
    "Professional, conversion-focused websites with workflow automation and AI bot integration for businesses ready to grow.",
    { offers: fixedOffer(1000, "USD", "Starting price") }),
  service("/#service-saas", "SaaS Frontend Development", "SaaS Interface Engineering",
    "High-performance React and Next.js interfaces for SaaS products with AI agent integration and workflow automation, built for conversion and scale."),
  service("/#service-automation", "Workflow Automation", "Workflow Automation Systems",
    "End-to-end workflow automation connecting websites, bots, and backend systems, reducing manual work and increasing operational efficiency."),
  service("/#service-retainer", "Studio Retainer", "Studio Retainer",
    "Your dedicated engineering partner for websites, automation, and AI agents. On call, embedded, and always shipping with priority access and ongoing support.",
    { offers: fixedOffer(6000, "USD", "Monthly retainer starting price") }),
  service("/#service-audit", "Technical Audit", "Technical Audit",
    "A thorough audit of your website, workflows, and tech stack with a clear action plan covering performance, architecture, and what to fix, automate, or rebuild.",
    { offers: fixedOffer(2500, "USD", "Fixed price") }),
];

const author = {
  "@type": "Person",
  name: "Gabriel Njoabozia",
  url: baseUrl + "/studio",
  jobTitle: "Founder & Lead Engineer",
  worksFor: { "@id": baseUrl + "/#organization" },
};

const article = (slug: string, headline: string, description: string, datePublished: string, dateModified: string) => ({
  "@type": "Article",
  "@id": baseUrl + slug + "#article",
  headline,
  description,
  author,
  publisher: { "@id": baseUrl + "/#organization" },
  datePublished,
  dateModified,
  image: { "@type": "ImageObject", url: baseUrl + "/og-image.png" },
  mainEntityOfPage: { "@type": "WebPage", "@id": baseUrl + slug },
});

export const articleSchemas = [
  article("/insights/react-server-components/", "React Server Components in Production",
    "How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy frontend applications.",
    "2026-01-15", "2026-03-21"),
  article("/insights/analytics-dashboard-nextjs/", "Building a SaaS Dashboard with Next.js 14",
    "A complete guide to building a real-time analytics dashboard using Next.js 14 App Router, React Query, and Recharts.",
    "2025-12-01", "2026-03-21"),
  article("/insights/react-performance/", "Performance Optimization in React",
    "Practical techniques for profiling, identifying bottlenecks, and optimizing React applications for real-world use.",
    "2026-03-21", "2026-03-21"),
  article("/insights/frontend-ux-conversion/", "Frontend UX Patterns That Drive Conversion",
    "After building dozens of products, these are the interface patterns that consistently improve onboarding and retention.",
    "2026-02-01", "2026-03-21"),
  article("/insights/framer-motion-guide/", "Why We Use Framer Motion for Production Animations",
    "A practical look at building production-grade animations with Framer Motion, from micro-interactions to page transitions.",
    "2026-02-15", "2026-03-21"),
  article("/insights/design-system-guide/", "Building a Design System from Scratch",
    "A practical guide to architecting a design system: design tokens, component libraries, accessibility, and team adoption strategies.",
    "2026-01-01", "2026-03-21"),
  article("/insights/ai-native-boutique-studios/", "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
    "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios, and what that means for your next build.",
    "2026-03-15", "2026-03-21"),
  article("/insights/hidden-cost-web-dev-nigeria/", "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
    "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
    "2026-02-20", "2026-03-21"),
  article("/insights/cra-to-nextjs-migration/", "Migrating from Create React App to Next.js",
    "A practical look at migrating a production React app from Create React App to Next.js: the DX improvements, performance wins, and lessons learned along the way.",
    "2026-02-01", "2026-03-21"),
  article("/insights/nextauth-authentication/", "Building an Authentication System with NextAuth.js",
    "A practical guide to implementing full authentication in Next.js with NextAuth.js: covering email/password, OAuth providers, session management, and middleware route protection.",
    "2026-01-10", "2026-03-21"),
  article("/insights/role-based-access-control/", "Building Role-Based Access Control with Next.js",
    "Step-by-step guide to implementing role-based access control in your Next.js application using middleware, session-based auth, and composable protection patterns.",
    "2026-01-05", "2026-03-21"),
];
