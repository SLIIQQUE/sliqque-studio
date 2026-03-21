export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sliiqque.studio/#organization",
        name: "SLIIQQUE",
        url: "https://sliiqque.studio",
        logo: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/logo.svg",
        },
        description:
          "Boutique software studio building Web3 and SaaS products.",
        foundingDate: "2025",
        foundingLocation: {
          "@type": "City",
          name: "Lagos",
        },
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@sliiqque.studio",
          contactType: "customer service",
        },
        sameAs: [
          "https://twitter.com/sliiqque",
          "https://linkedin.com/company/sliiqque",
          "https://github.com/sliiqque",
        ],
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
        "@id": "https://sliiqque.studio/#localbusiness",
        name: "SLIIQQUE",
        description: "Boutique software studio in Lagos, Nigeria",
        url: "https://sliiqque.studio",
        logo: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/logo.svg",
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
        "@id": "https://sliiqque.studio/#website",
        url: "https://sliiqque.studio",
        name: "SLIIQQUE",
        publisher: { "@id": "https://sliiqque.studio/#organization" },
      },
      {
        "@type": "Service",
        "@id": "https://sliiqque.studio/#service",
        serviceType: "Web3 Development",
        name: "Web3 Product Engineering",
        provider: { "@id": "https://sliiqque.studio/#organization" },
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
        "@id": "https://sliiqque.studio/#service-website",
        serviceType: "Website Design",
        name: "Website Design & Development",
        provider: { "@id": "https://sliiqque.studio/#organization" },
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
        "@id": "https://sliiqque.studio/#service-saaas",
        serviceType: "SaaS Frontend Development",
        name: "SaaS Interface Engineering",
        provider: { "@id": "https://sliiqque.studio/#organization" },
        areaServed: "Worldwide",
        description:
          "High-performance React and Next.js interfaces for SaaS products — built for conversion and scale.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://sliiqque.studio/#faq",
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
        "@id": "https://sliiqque.studio/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://sliiqque.studio",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://sliiqque.studio/services",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: "https://sliiqque.studio/work",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://sliiqque.studio/contact",
          },
        ],
      },
        {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/rsc-web3/#article",
        headline: "React Server Components in a Web3 App",
        description:
          "How we're using React Server Components to reduce client-side JavaScript and improve the initial load experience for data-heavy Web3 applications.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2026-01-15",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/rsc-web3",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/token-gating/#article",
        headline: "Building a Token-Gated Interface with Wagmi",
        description:
          "Step-by-step guide to implementing token-gated content in your Next.js application using Wagmi.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2025-12-01",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/token-gating",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/defi-dashboard-nextjs/#article",
        headline: "How to Build a DeFi Dashboard with Next.js 14",
        description:
          "A complete guide to building a real-time DeFi dashboard using Next.js 14 App Router, The Graph, and Wagmi.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2026-03-21",
        dateModified: "2026-03-21",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/defi-dashboard-nextjs",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/metamask-react/#article",
        headline: "MetaMask Integration in React",
        description:
          "Everything you need to know about connecting wallets to your React application.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2026-02-01",
        dateModified: "2026-02-01",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/metamask-react",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/web3-ux-patterns/#article",
        headline: "Web3 UX Patterns That Work",
        description:
          "After building dozens of dApps, these are the interface patterns that consistently improve onboarding.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2026-02-15",
        dateModified: "2026-02-15",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/web3-ux-patterns",
        },
      },
      {
        "@type": "Article",
        "@id": "https://sliiqque.studio/insights/viem-migration/#article",
        headline: "Why We Switched to Viem",
        description:
          "A practical look at migrating our entire Web3 stack from Web3.js to Viem.",
        author: {
          "@type": "Organization",
          name: "SLIIQQUE Studio",
          url: "https://sliiqque.studio",
        },
        publisher: { "@id": "https://sliiqque.studio/#organization" },
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
        image: {
          "@type": "ImageObject",
          url: "https://sliiqque.studio/og-image.svg",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://sliiqque.studio/insights/viem-migration",
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
