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
        foundingLocation: "Lagos, Nigeria",
        areaServed: "Worldwide",
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
        ],
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
