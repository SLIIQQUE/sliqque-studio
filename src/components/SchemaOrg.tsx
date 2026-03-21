export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sliiqque.space/#organization",
        name: "SLIIQQUE",
        url: "https://sliiqque.space",
        logo: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/logo.svg",
        },
        description:
          "Boutique software studio building Web3 and SaaS products.",
        foundingDate: "2021",
        foundingLocation: {
          "@type": "City",
          name: "Lagos",
        },
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@sliiqque.space",
          contactType: "customer service",
        },
        knowsAbout: [
          "Web3 Development",
          "React",
          "Next.js",
          "TypeScript",
          "Solidity",
          "DeFi Interface Design",
          "SaaS Frontend Engineering",
          "Website Design",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sliiqque.space/#localbusiness",
        name: "SLIIQQUE",
        description: "Boutique software studio in Lagos, Nigeria",
        url: "https://sliiqque.space",
        logo: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/logo.svg",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "Nigeria",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sliiqque.space/#website",
        url: "https://sliiqque.space",
        name: "SLIIQQUE",
        publisher: { "@id": "https://sliiqque.space/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://sliiqque.space/#service",
        serviceType: "Web3 Development",
        name: "Web3 Product Engineering",
        provider: { "@id": "https://sliiqque.space/#organization" },
        areaServed: "Worldwide",
        description:
          "Full-stack product engineering for Web3 founders — from smart contract integration to polished dApp interfaces.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web3 Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Product Build",
              },
              price: "15000",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interface Engineering",
              },
              price: "8000",
              priceCurrency: "USD",
            },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://sliiqque.space/#service-website",
        serviceType: "Website Design",
        name: "Website Design & Development",
        provider: { "@id": "https://sliiqque.space/#organization" },
        areaServed: "Worldwide",
        description:
          "Professional, conversion-focused websites for businesses ready to establish their online presence.",
        offers: {
          "@type": "Offer",
          price: "1000",
          priceCurrency: "USD",
          description: "Starting price",
        },
      },
      {
        "@type": "Service",
        "@id": "https://sliiqque.space/#service-saas",
        serviceType: "SaaS Frontend Development",
        name: "SaaS Interface Engineering",
        provider: { "@id": "https://sliiqque.space/#organization" },
        areaServed: "Worldwide",
        description:
          "High-performance React and Next.js interfaces for SaaS products — built for conversion and scale.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://sliiqque.space/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a website cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website design and development starts at $1,000. Full product builds for Web3 start at $15,000.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typical projects range from 2-8 weeks depending on scope. We use two-week sprints for focused delivery.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with clients outside Nigeria?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we work globally with clients worldwide. We're based in Lagos, Nigeria and work remotely.",
            },
          },
          {
            "@type": "Question",
            name: "What's your response time?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We respond to all inquiries within 24 hours during business days.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sliiqque.space/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sliiqque.space",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://sliiqque.space/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Work",
            item: "https://sliiqque.space/work",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Insights",
            item: "https://sliiqque.space/insights",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Expertise",
            item: "https://sliiqque.space/expertise",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Studio",
            item: "https://sliiqque.space/studio",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Contact",
            item: "https://sliiqque.space/contact",
          },
        ],
      },
        {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/rsc-web3/#article",
        headline: "React Server Components in a Web3 App",
        description:
          "How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy Web3 applications.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2026-01-15",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/rsc-web3",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/token-gating/#article",
        headline: "Building a Token-Gated Interface with Wagmi",
        description:
          "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2025-12-01",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/token-gating",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/defi-dashboard-nextjs/#article",
        headline: "How to Build a DeFi Dashboard with Next.js 14",
        description:
          "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2026-03-21",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/defi-dashboard-nextjs",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/metamask-react/#article",
        headline: "MetaMask Integration in React",
        description:
          "A practical guide to connecting MetaMask and any Web3 wallet to your React application — covering hooks, state management, and error handling.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2026-02-01",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/metamask-react",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/web3-ux-patterns/#article",
        headline: "Web3 UX Patterns That Work",
        description:
          "After building dozens of dApps, these are the interface patterns that consistently improve onboarding and reduce drop-off.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2026-02-15",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/web3-ux-patterns",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.space/insights/viem-migration/#article",
        headline: "Why We Switched to Viem",
        description:
          "A practical look at migrating our entire Web3 stack from Web3.js to Viem — the DX improvements, performance gains, and lessons learned.",
        author: {
          "@type": "Person",
          name: "Gabriel Njoabozia",
          url: "https://sliiqque.space/studio",
          jobTitle: "Founder & Lead Engineer",
          worksFor: { "@id": "https://sliiqque.space/#organization" },
        },
        publisher: { "@id": "https://sliiqque.space/#organization" },
        datePublished: "2026-01-01",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.space/og-image.png",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.space/insights/viem-migration",
        },
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
