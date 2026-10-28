export interface StudioProject {
  name: string;
  type: string;
  metric: string;
  link: string;
}

export interface WorkPageContent {
  label: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  year: string;
  clientType: string;
  engagementType: string;
  description: string;
  tags: string[];
  metric: string;
  imageSrc?: string;
  logoSrc?: string;
  imageAlt: string;
  href: string;
  /** Done before SLIIQQUE was founded (22 December 2025): shown as the founder's earlier work, never as company age or results. */
  earlier?: boolean;
  bgColor?: string;
  /** Plain-language results, used in llms-full.txt. */
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    title: "Creative Studio",
    year: "2026",
    clientType: "Creative Production (In-House)",
    engagementType: "Platform Build",
    description: "Our own creative-production vertical: AI commercials, digital humans, product and fashion photography, and brand launch campaigns, on its own platform at studio.sliiqque.space.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Resend"],
    metric: "Creative Vertical",
    logoSrc: "https://studio.sliiqque.space/icon.png",
    imageSrc: "/images/creative-studio-screenshot.jpg",
    imageAlt: "Creative Studio homepage",
    href: "/work/creative-studio",
    bgColor: "#0a0a0a",
    outcomes: [
      "5 fully-scoped service pages, each priced in NGN and USD with its own FAQ",
      "3 complete concept brand worlds built end to end (ÀLÀ, ODÈ and ÀSE), each labeled as concept work with no invented clients, testimonials or metrics",
      "Age-gated presentation for 18+ concept work, consistent with the platform's content policies",
      "Cross-linked with the main SLIIQQUE site: shared navigation, footer link, FAQ entry and schema.org sameAs",
      "Its own Vercel deployment and domain, independent of the main site",
    ],
  },
  {
    title: "Realty Starter",
    year: "2026",
    clientType: "Real Estate (Concept Demo)",
    engagementType: "Vertical Solution",
    description: "Bilingual (EN/FR), REALTOR®/MLS®-compliant realtor website with searchable Toronto and GTA listings, two Canadian calculators, five lead forms and a built-in CMS. Live at realty.sliiqque.space.",
    tags: ["Next.js", "React", "TypeScript", "Payload CMS", "PostgreSQL", "Leaflet"],
    metric: "Launch-Ready",
    imageSrc: "/images/realty-starter-screenshot.jpg",
    imageAlt: "Realty Starter homepage with Toronto and GTA property search",
    href: "/work/realty-starter",
    bgColor: "#050505",
    outcomes: [
      "Live at realty.sliiqque.space today, so a realtor can judge the working site before a sales call",
      "Bilingual English and French routing from one route tree, so there is no second site to maintain",
      "Canadian math a US template cannot copy: mortgage with CMHC and bi-weekly rules, and land transfer tax with real Ontario, Toronto and BC brackets",
      "Every page ends in a next step, and every enquiry arrives with consent, source and attribution attached",
      "One admin panel edits listings, agents, neighbourhoods, articles, testimonials and leads without a redeploy",
      "Runs with zero environment variables, so evaluation costs nothing and nothing is gated behind a demo request",
      "Disclosed honestly throughout: fictional agent, brokerage, licence and listings, with correct REALTOR®/MLS® trademark wording",
    ],
  },
  {
    title: "Leads Dashboard",
    year: "2026",
    clientType: "Sales Operations (In-House)",
    engagementType: "Internal Tool",
    description: "Our own gated sales desk: import prospect sheets, remove duplicates, pitch by email or WhatsApp, and track every lead from first touch to win. Internal to SLIIQQUE, so there is no public link.",
    tags: ["Next.js 15", "React 19", "TypeScript", "SQLite", "Resend"],
    metric: "Internal Tool",
    imageSrc: "/images/leads-dashboard-leads.jpg",
    imageAlt: "Leads Dashboard lead list in light mode with grade, signal score, contact path and stage, shown with fictional demo data",
    href: "/work/leads-dashboard",
    bgColor: "#0a0a0a",
    outcomes: [
      "One gated app replaces spreadsheet review, copy-pasted pitches and a side notebook of who was contacted",
      "CSV import with a preview before anything is written, exact and fuzzy duplicate detection, and a human decision on every uncertain match",
      "Real email send through Resend with delivery tracking, and a WhatsApp Cloud API channel built and waiting on Meta template approval",
      "A suppression list checked before every single and bulk send",
      "Pipeline board, notes, tags, reminders, saved views, funnel reporting and CSV export in one place",
      "Internal only: sign-in is required on every route and there is no public URL",
    ],
  },
  {
    title: "Real Estate",
    year: "2026",
    clientType: "Real Estate",
    engagementType: "Product Build",
    description: "A property website with a built-in CMS: searchable listings, agent profiles, articles, and enquiry capture, all managed from an admin panel with no redeploys.",
    tags: ["Next.js", "React", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
    metric: "CMS-Powered",
    imageSrc: "/images/real-estate-screenshot.jpg",
    imageAlt: "Real Estate homepage with property search",
    href: "/work/real-estate",
    bgColor: "#102E26",
    outcomes: [
      "Website and CMS delivered as one system, so content updates need no code changes",
      "Edits reach the live site within seconds",
      "Every enquiry lands in a single Leads inbox",
      "Production setup on Neon PostgreSQL and Vercel Blob with database migrations",
    ],
  },
  {
    title: "Mo Touch",
    year: "2024",
    clientType: "Beauty & Wellness",
    engagementType: "Earlier work, before SLIIQQUE",
    description: "Premium interactive gallery for a makeup artist: immersive scroll-driven animations, touch-optimized interactions, and a digital-first portfolio experience.",
    tags: ["Vite", "GSAP", "Framer Motion"],
    metric: "Before SLIIQQUE",
    imageSrc: "/images/motouch-screenshot.jpg",
    imageAlt: "Mo Touch: premium interactive makeup artist portfolio gallery with immersive scroll-driven animations",
    href: "/work/mo-touch",
    earlier: true,
    bgColor: "#0a0a0a",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const workPageContent: WorkPageContent = {
  label: "Selected Work",
  title: "Projects",
  description: "Products we've built, shaped, and shipped. Each project represents a real problem solved and a relationship built.",
};

export const studioProjects: StudioProject[] = [
  {
    name: "Creative Studio",
    type: "Creative Production: AI commercials, digital humans & photography",
    metric: "Creative Vertical",
    link: "/work/creative-studio",
  },
  {
    name: "Realty Starter",
    type: "Real Estate: bilingual, compliant realtor website with Canadian calculators",
    metric: "Launch-Ready",
    link: "/work/realty-starter",
  },
  {
    name: "Leads Dashboard",
    type: "Sales Operations: internal prospecting and outreach desk",
    metric: "Internal Tool",
    link: "/work/leads-dashboard",
  },
  {
    name: "Real Estate",
    type: "Real Estate: CMS-powered property platform",
    metric: "CMS-Powered",
    link: "/work/real-estate",
  },
  {
    name: "Mo Touch",
    type: "Beauty: Interactive makeup artist portfolio",
    metric: "Interactive",
    link: "/work/mo-touch",
  },
];

// Note: Individual case study data is co-located with their respective
// page.tsx files under src/app/work/[slug]/
