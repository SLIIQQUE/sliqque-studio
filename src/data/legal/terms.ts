import { LEGAL_UPDATED, type LegalDocument } from "./types";

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  updated: LEGAL_UPDATED,
  intro: [
    "These terms cover how you may use sliiqque.space and the general basis on which SLIIQQUE Studio provides its services. By using the site, you agree to them. If you engage us for a project, they apply alongside the proposal or service agreement we agree with you.",
    "If anything in a signed proposal or service agreement conflicts with these terms, the signed document takes priority for that project.",
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of these terms",
      paragraphs: [
        "By accessing or using this website you confirm that you have read and accept these terms and our Privacy Policy. If you do not agree, please do not use the site. You must be at least 18 years old, or have the authority to act for the business you represent.",
      ],
    },
    {
      id: "who-we-are",
      title: "Who we are",
      paragraphs: [
        "SLIIQQUE Studio is a boutique software studio based in Lagos, Nigeria, working with clients worldwide. We design and build websites, AI bots and agents, workflow automation, and SaaS interfaces, and offer ongoing retainers and technical audits.",
      ],
    },
    {
      id: "services",
      title: "Our services",
      paragraphs: ["We currently offer the following. Descriptions and scope for each are on our services pages:"],
      items: [
        "Website Design & Development",
        "AI Bot & Agent Development",
        "Interface Engineering",
        "Studio Retainer",
        "Technical Audit",
      ],
      after: [
        "We may change, add or retire services at any time. Information on the site is a general description and not a binding offer until we confirm a scope and price in writing.",
      ],
    },
    {
      id: "pricing",
      title: "Pricing and estimates",
      paragraphs: [
        "All prices on the site are starting prices in US dollars unless stated otherwise. The configurator on each service page shows an estimate that increases as you choose optional add-ons. An estimate is a guide only. It is not a quote, contract or guarantee of final cost.",
        "We confirm the final scope, price and timeline in a written proposal after we understand your project. Requirements that change after a proposal is accepted may change the price, and we will agree any change with you before doing the extra work. Third-party costs such as domains, hosting, software licences, paid APIs and messaging fees are not included unless the proposal says so.",
      ],
    },
    {
      id: "engagements",
      title: "How projects work",
      paragraphs: [
        "A project begins when you accept our written proposal or sign a service agreement, and, where we ask for one, pay the agreed deposit or first invoice. Typically we work in discovery, architecture, build and ship stages, with build work in focused sprints and regular updates.",
        "We take on a limited number of new projects each quarter, so a start date is only reserved once the engagement is confirmed.",
      ],
    },
    {
      id: "client-responsibilities",
      title: "Your responsibilities",
      items: [
        "Provide accurate information, content, access and decisions in good time. Delays on your side can move delivery dates.",
        "Make sure you have the rights to all text, images, logos, data and other materials you give us.",
        "Review work promptly and give clear, consolidated feedback.",
        "Keep any accounts, passwords and credentials you share with us secure, and share only what is needed.",
      ],
    },
    {
      id: "payment",
      title: "Payment",
      paragraphs: [
        "Fees, deposits, milestones and due dates are set out in your proposal or invoice. Fixed-scope work such as a Technical Audit is invoiced at the agreed price. Retainers are billed monthly in advance for the agreed hours, and unused hours do not roll over unless the agreement says otherwise.",
        "If an invoice is overdue, we may pause work until it is paid and may charge reasonable interest and recovery costs where the law allows. Fees paid are non-refundable for work already completed, except where the agreement says otherwise or the law requires.",
      ],
    },
    {
      id: "revisions-acceptance",
      title: "Revisions and acceptance",
      paragraphs: [
        "Each proposal states how many rounds of revisions are included. Work outside the agreed scope is quoted separately. Deliverables are treated as accepted when you approve them, when you use them in production, or when a reasonable review period passes without written objection.",
      ],
    },
    {
      id: "ip-website",
      title: "Intellectual property: this website",
      paragraphs: [
        "All content on sliiqque.space, including text, design, code, graphics, logos and the SLIIQQUE name and QQ mark, belongs to SLIIQQUE or its licensors and is protected by copyright and other laws. You may view and share links to the site, but you may not copy, modify, distribute or reuse its content for commercial purposes without our written permission.",
      ],
    },
    {
      id: "ip-client-work",
      title: "Intellectual property: client work",
      paragraphs: [
        "Unless your agreement says otherwise, ownership of the final, paid-for deliverables created specifically for you transfers to you once all fees for them are paid in full. Until then we grant you a limited licence to use them for review.",
        "We keep ownership of our pre-existing tools, code libraries, components, templates and know-how, and of any general techniques we develop. Where those are part of your deliverables, you receive a non-exclusive, perpetual licence to use them as part of the delivered work. Open-source and third-party components remain under their own licences.",
        "Unless you tell us otherwise in writing, we may describe the project in our portfolio and case studies, and show non-confidential screenshots. We will not disclose your confidential information.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "Each party will keep the other's non-public business and technical information confidential, use it only for the project, and protect it with reasonable care. This does not apply to information that is public, already known to the recipient, independently developed, or required to be disclosed by law.",
      ],
    },
    {
      id: "third-party",
      title: "Third-party services and AI",
      paragraphs: [
        "Many projects rely on third-party platforms, such as hosting providers, payment gateways, messaging platforms like WhatsApp and Telegram, and AI model providers. Their availability, pricing, policies and terms are outside our control and may change. You are responsible for complying with their terms and for any fees they charge.",
        "AI bots and agents can produce incorrect or incomplete responses. We design and test them with care, but we cannot guarantee that every output will be accurate, so you should review and monitor important use cases and keep a human in the loop where the stakes are high.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      paragraphs: ["When using the site or working with us, you agree not to:"],
      items: [
        "Break the law or infringe anyone's rights.",
        "Send spam, malware or harmful, abusive or misleading content, including through our contact form.",
        "Attempt to gain unauthorised access to the site, our systems or other people's data.",
        "Probe, overload or interfere with the site's security or performance.",
        "Use our work or content to build a competing service or to mislead others about its origin.",
      ],
      after: ["We may refuse or stop work, and block access, where we reasonably believe these rules are broken."],
    },
    {
      id: "warranties",
      title: "Warranties and disclaimers",
      paragraphs: [
        "We carry out services with reasonable skill and care. Beyond that, and to the fullest extent the law allows, the site and our services are provided \"as is\" and \"as available\", and we make no other warranties, express or implied, including about uninterrupted operation, specific business results, search ranking, revenue or conversion outcomes.",
        "Where a proposal includes a support or warranty period for defects in delivered work, we will fix defects reported within that period at no extra charge, provided they result from our work and not from changes made by others or third-party services.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: [
        "Nothing in these terms limits liability that cannot be limited by law, including for fraud or for death or personal injury caused by negligence.",
        "Subject to that, we are not liable for indirect, incidental or consequential losses, or for loss of profit, revenue, data, goodwill or business opportunity. Our total liability for any claim relating to a project is limited to the fees you paid us for that project in the 12 months before the claim arose, or the amount stated in your signed agreement if different.",
      ],
    },
    {
      id: "indemnity",
      title: "Indemnity",
      paragraphs: [
        "You agree to cover our reasonable losses and costs arising from a third-party claim that content or materials you supplied infringe someone's rights or break the law, or from your breach of these terms.",
      ],
    },
    {
      id: "termination",
      title: "Suspension and termination",
      paragraphs: [
        "Either party may end an engagement in line with the notice terms in the agreement, and a retainer may be ended with reasonable written notice. We may suspend or end work immediately if you materially breach these terms or fail to pay. On termination, you pay for work done up to that point, and sections that by nature should continue, such as payment, intellectual property, confidentiality and liability, will continue to apply.",
      ],
    },
    {
      id: "external-links",
      title: "Links and third-party content",
      paragraphs: [
        "The site links to other websites and displays work for clients. We do not control those sites and are not responsible for their content or practices.",
      ],
    },
    {
      id: "availability",
      title: "Site availability and changes",
      paragraphs: [
        "We work to keep the site available, but we do not promise it will be uninterrupted or error free. We may update, suspend or remove any part of it at any time, and may update these terms. The date at the top shows the latest version, and continued use of the site means you accept the changes.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law and disputes",
      paragraphs: [
        "These terms are governed by the laws of the Federal Republic of Nigeria. We encourage you to contact us first so we can try to resolve any issue informally. If that does not work, the courts of Lagos State, Nigeria have jurisdiction, unless your signed agreement states a different process.",
      ],
    },
    {
      id: "general",
      title: "General",
      paragraphs: [
        "These terms, together with any signed agreement and our Privacy Policy, are the entire agreement between us on their subject. If any part is found unenforceable, the rest stays in effect. Failing to enforce a right is not a waiver of it. You may not transfer your rights under these terms without our written consent.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: ["Questions about these terms: email {email}. SLIIQQUE Studio, Lagos, Nigeria."],
    },
  ],
};
