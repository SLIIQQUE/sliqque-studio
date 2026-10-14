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
  bgColor?: string;
  /** Plain-language results, used in llms-full.txt. */
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    title: "SLIIQQUE Creative Studio",
    year: "2026",
    clientType: "Creative Production (In-House)",
    engagementType: "Platform Build",
    description: "Our own creative-production vertical: AI commercials, digital humans, product and fashion photography, and brand launch campaigns, on its own platform at studio.sliiqque.space.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Resend"],
    metric: "Creative Vertical",
    logoSrc: "https://studio.sliiqque.space/icon.png",
    imageSrc: "/images/creative-studio-screenshot.jpg",
    imageAlt: "SLIIQQUE Creative Studio homepage",
    href: "/work/creative-studio",
    bgColor: "#0a0a0a",
    outcomes: [
      "5 fully-scoped service pages, each priced in NGN and USD with its own FAQ",
      "3 complete concept brand worlds built end to end — ÀLÀ, ODÈ and ÀSE — each labeled as concept work with no invented clients, testimonials or metrics",
      "Age-gated presentation for 18+ concept work, consistent with the platform's content policies",
      "Cross-linked with the main SLIIQQUE site: shared navigation, footer link, FAQ entry and schema.org sameAs",
      "Its own Vercel deployment and domain, independent of the main site",
    ],
  },
  {
    title: "SLIIQQUE Real Estate",
    year: "2026",
    clientType: "Real Estate",
    engagementType: "Product Build",
    description: "A property website with a built-in CMS: searchable listings, agent profiles, articles, and enquiry capture, all managed from an admin panel with no redeploys.",
    tags: ["Next.js", "React", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
    metric: "CMS-Powered",
    imageSrc: "/images/real-estate-screenshot.jpg",
    imageAlt: "SLIIQQUE Real Estate homepage with property search",
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
    title: "Lumia",
    year: "2019",
    clientType: "FinTech",
    engagementType: "Product Build",
    description: "Nigeria's electricity payment platform: prepaid & postpaid meters, multi-DisCo support, instant token delivery, and mobile apps.",
    tags: ["React", "TypeScript", "Node.js", "Payment Integration"],
    metric: "6 DisCos",
    logoSrc: "https://lumia.ng/assets/Logo.png",
    imageSrc: "/images/lumia-screenshot.jpg",
    imageAlt: "Lumia electricity payment platform homepage",
    href: "/work/lumia",
    bgColor: "#0f0f0f",
    outcomes: [
      "Partnerships with 6 major DisCos across Nigeria",
      "Instant token delivery by SMS and email, typically under 30 seconds",
      "Prepaid and postpaid payments with iOS and Android apps",
      "Reseller program that lets entrepreneurs start electricity vending",
    ],
  },
  {
    title: "Mo Touch",
    year: "2024",
    clientType: "Beauty & Wellness",
    engagementType: "Product Build",
    description: "Premium interactive gallery for a makeup artist: immersive scroll-driven animations, touch-optimized interactions, and a digital-first portfolio experience.",
    tags: ["Vite", "GSAP", "Framer Motion"],
    metric: "Interactive",
    imageSrc: "/images/motouch-screenshot.jpg",
    imageAlt: "Mo Touch — premium interactive makeup artist portfolio gallery with immersive scroll-driven animations",
    href: "/work/mo-touch",
    bgColor: "#0a0a0a",
    outcomes: [
      "Smooth 60fps scroll animations on mobile and desktop",
      "Touch-optimised interactions built for beauty discovery",
      "Static build on Vercel with global edge caching for fast loads and SEO",
    ],
  },
  {
    title: "ZINID",
    year: "2018",
    clientType: "RegTech / Fraud Prevention",
    engagementType: "Product Build",
    description: "Africa's fraud prevention infrastructure platform: credit risk assessment, transaction monitoring, and shared risk memory for the fintech ecosystem.",
    tags: ["React", "TypeScript", "Next.js"],
    metric: "Risk Infrastructure",
    logoSrc: "https://zinid.africa/logo192.png",
    imageSrc: "/images/zinid-screenshot.jpg",
    imageAlt: "ZINID fraud prevention platform homepage",
    href: "/work/zinid",
    bgColor: "#0a0a0a",
    outcomes: [
      "Shared fraud intelligence network connecting multiple Nigerian fintech platforms",
      "Fraud scores updated in real time across the ecosystem",
      "Reduced onboarding bonus abuse by identifying repeat offenders across platforms",
      "AML compliance infrastructure aligned with CBN requirements",
    ],
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
    name: "SLIIQQUE Creative Studio",
    type: "Creative Production: AI commercials, digital humans & photography",
    metric: "Creative Vertical",
    link: "/work/creative-studio",
  },
  {
    name: "SLIIQQUE Real Estate",
    type: "Real Estate: CMS-powered property platform",
    metric: "CMS-Powered",
    link: "/work/real-estate",
  },
  {
    name: "Lumia",
    type: "FinTech: Electricity payment platform",
    metric: "6 DisCos",
    link: "/work/lumia",
  },
  {
    name: "Mo Touch",
    type: "Beauty: Interactive makeup artist portfolio",
    metric: "Interactive",
    link: "/work/mo-touch",
  },
  {
    name: "ZINID",
    type: "RegTech: Fraud prevention & risk infrastructure",
    metric: "Risk Infrastructure",
    link: "/work/zinid",
  },
];

// Note: Individual case study data is co-located with their respective
// page.tsx files under src/app/work/[slug]/
