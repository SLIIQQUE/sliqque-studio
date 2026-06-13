export interface Article {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  href: string;
  imageSrc: string;
  featured?: boolean;
}

export const insightArticles: Article[] = [
  {
    title: "Why AI Natives Are Choosing Boutique Studios Over Freelance Platforms",
    excerpt: "Why AI-native founders are ditching Upwork and Fiverr for boutique software studios, and what that means for your next build.",
    date: "Jun 2026",
    readingTime: "7 min read",
    tags: ["Studio", "AI", "Strategy"],
    href: "/insights/ai-native-boutique-studios",
    imageSrc: "/images/insights/ai-boutique.webp",
    featured: true,
  },
  {
    title: "The Hidden Cost of Cheap Web Development for Nigerian Businesses",
    excerpt: "Why that ₦50,000 Wix site could end up costing your Lagos business ten times more in lost revenue, security issues, and missed opportunities.",
    date: "Jun 2026",
    readingTime: "6 min read",
    tags: ["Business", "Nigeria"],
    href: "/insights/hidden-cost-web-dev-nigeria",
    imageSrc: "/images/insights/nigeria-web-dev.webp",
    featured: false,
  },
  {
    title: "Building a SaaS Dashboard with Next.js 14",
    excerpt: "A complete guide to building a real-time analytics dashboard using Next.js 14 App Router, React Query, and Recharts. We'll cover data fetching, state management, and creating a smooth user experience.",
    date: "Mar 2026",
    readingTime: "8 min read",
    tags: ["SaaS", "Next.js"],
    href: "/insights/analytics-dashboard-nextjs",
    imageSrc: "/images/insights/dashboard-analytics.webp",
    featured: false,
  },
  {
    title: "Performance Optimization in React: The Complete Guide",
    excerpt: "Everything you need to know about profiling, identifying bottlenecks, and optimizing React applications for real-world use in 2026.",
    date: "Feb 2026",
    readingTime: "12 min read",
    tags: ["React", "Performance"],
    href: "/insights/react-performance",
    imageSrc: "/images/insights/react-performance.webp",
    featured: false,
  },
  {
    title: "Frontend UX Patterns That Drive Conversion",
    excerpt: "After shipping dozens of SaaS products, these are the interface patterns that consistently improve onboarding, reduce abandonment, and drive conversions.",
    date: "Feb 2026",
    readingTime: "6 min read",
    tags: ["UX", "Frontend"],
    href: "/insights/frontend-ux-conversion",
    imageSrc: "/images/insights/ux-conversion.webp",
    featured: false,
  },
  {
    title: "Why We Use Framer Motion for Production Animations",
    excerpt: "A practical look at building production-grade animations with Framer Motion, from micro-interactions to page transitions, and how to keep them performant.",
    date: "Jan 2026",
    readingTime: "10 min read",
    tags: ["Motion", "React"],
    href: "/insights/framer-motion-guide",
    imageSrc: "/images/insights/framer-motion.webp",
    featured: false,
  },
  {
    title: "React Server Components in Production",
    excerpt: "How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy frontend applications.",
    date: "Jan 2026",
    readingTime: "7 min read",
    tags: ["React", "Next.js"],
    href: "/insights/react-server-components",
    imageSrc: "/images/insights/react-server-components.webp",
    featured: false,
  },
  {
    title: "Building a Design System from Scratch",
    excerpt: "Step-by-step guide to architecting a design system, covering design tokens, component libraries, accessibility, and team adoption strategies for growing products.",
    date: "Dec 2025",
    readingTime: "9 min read",
    tags: ["Design", "Frontend"],
    href: "/insights/design-system-guide",
    imageSrc: "/images/insights/design-system.webp",
    featured: false,
  },
  {
    title: "Building an Authentication System with NextAuth.js",
    excerpt: "Everything you need to know about implementing authentication in your Next.js application, from basic setup to handling edge cases like session management, OAuth, and route protection.",
    date: "Feb 2026",
    readingTime: "12 min read",
    tags: ["Auth", "Next.js"],
    href: "/insights/nextauth-authentication",
    imageSrc: "/images/insights/nextauth-auth.webp",
    featured: false,
  },
  {
    title: "Building Role-Based Access Control with Next.js",
    excerpt: "Step-by-step guide to implementing role-based access control in your Next.js application using middleware, session-based auth, and composable protection patterns.",
    date: "Dec 2025",
    readingTime: "9 min read",
    tags: ["Auth", "Security"],
    href: "/insights/role-based-access-control",
    imageSrc: "/images/insights/rbac-access-control.webp",
    featured: false,
  },
  {
    title: "Migrating from Create React App to Next.js",
    excerpt: "A practical look at migrating a production React app from Create React App to Next.js, what worked and what didn't, and whether we recommend it for your team.",
    date: "Jan 2026",
    readingTime: "10 min read",
    tags: ["Next.js", "Migration"],
    href: "/insights/cra-to-nextjs-migration",
    imageSrc: "/images/insights/cra-migration.webp",
    featured: false,
  },
];
