import { LEGAL_UPDATED, type LegalDocument } from "./types";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  updated: LEGAL_UPDATED,
  intro: [
    "SLIIQQUE Studio is a software studio based in Lagos, Nigeria. This policy explains what personal information we collect through sliiqque.space, why we collect it, how we protect it, and the choices you have.",
    "We keep our data practices deliberately small. The site has no user accounts, no advertising trackers, and no analytics or marketing cookies. The main thing we collect is what you choose to send us through the contact form or by email.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      paragraphs: [
        "SLIIQQUE Studio is the controller of the personal information described in this policy. We are based in Lagos, Nigeria and work with clients worldwide. You can reach us about any privacy matter at {email}.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      paragraphs: ["We collect only the information needed to run the site and respond to you."],
      items: [
        "Contact form details: your name, email address, company or project name, project type, target timeline, approximate budget, and the message you write. If you arrive from a service page, the form may also contain the service and add-ons you selected and the estimate shown to you.",
        "Email correspondence: anything you send to {email}, including attachments, and our replies.",
        "Project information: when you become a client, the briefs, files, credentials and business details you share so we can deliver the work.",
        "Technical data: like every website, our hosting infrastructure automatically processes your IP address, browser type, device type, pages requested and timestamps in server logs, mainly for security and reliability.",
      ],
      after: [
        "We do not knowingly collect special-category data (such as health or biometric data) and ask that you do not send it to us through the site. We do not collect payment card details on this website.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use your information",
      items: [
        "To respond to your enquiry, assess whether we are a good fit, and prepare quotes and proposals.",
        "To deliver the services you engage us for, and to communicate with you about the work.",
        "To keep the site secure, prevent spam and abuse, and fix technical problems.",
        "To meet legal, accounting and tax obligations.",
        "To send you updates about our services, only where you have asked for them or where the law allows, and always with a way to opt out.",
      ],
      after: [
        "We do not sell your personal information. We do not use it for automated decision-making that has legal or similarly significant effects on you.",
      ],
    },
    {
      id: "legal-bases",
      title: "Legal bases for processing",
      paragraphs: [
        "Where data protection law such as the Nigeria Data Protection Act 2023 (NDPA), the UK GDPR or the EU GDPR applies, we rely on the following bases:",
      ],
      items: [
        "Consent: when you submit the contact form or subscribe to updates, you consent to us using your details for that purpose. You can withdraw consent at any time.",
        "Contract: when processing is necessary to take steps at your request before entering a contract, or to perform a contract with you.",
        "Legitimate interests: to operate and secure the site, keep business records and improve our services, balanced against your rights and expectations.",
        "Legal obligation: where we must retain or disclose information to comply with the law.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and similar technologies",
      paragraphs: [
        "This site does not set advertising, tracking or analytics cookies, and it does not use third-party marketing pixels. Your browser may store small technical items needed to display the site, such as cached assets, which are not used to identify you.",
        "If we add analytics or any non-essential cookie in future, we will update this policy first and ask for your consent where the law requires it. Most browsers let you block or delete cookies in their settings.",
      ],
    },
    {
      id: "who-we-share-with",
      title: "Who we share information with",
      paragraphs: [
        "We share personal information only with service providers that help us run the studio, and only as far as needed:",
      ],
      items: [
        "Email delivery: contact form messages are delivered to us through an email service provider (Resend).",
        "Hosting and infrastructure: our website is served by a hosting provider and content delivery network that process technical data such as IP addresses.",
        "Business tools: tools we use for email, file storage, project management and invoicing may hold information you send us.",
        "Professional advisers and authorities: lawyers, accountants and regulators, where needed to protect our rights or comply with the law.",
      ],
      after: [
        "Some pages display images served from third-party addresses (for example project screenshots). Your browser requests those images directly, so the provider may see your IP address under its own privacy policy. We require our providers to protect your information and use it only for the services they provide to us.",
      ],
    },
    {
      id: "international-transfers",
      title: "International transfers",
      paragraphs: [
        "We are based in Nigeria, and our providers may store or process data in other countries, including the United States and the European Union. When we transfer personal information across borders, we take steps to make sure it stays protected, such as choosing reputable providers with appropriate contractual safeguards, as required by the NDPA and other applicable laws.",
      ],
    },
    {
      id: "retention",
      title: "How long we keep information",
      paragraphs: [
        "We keep personal information only as long as we need it for the purpose it was collected, and then delete or anonymise it.",
      ],
      items: [
        "Enquiries that do not lead to a project: kept for a limited period so we can follow up, then deleted.",
        "Client records and project files: kept for the duration of the engagement and afterwards for as long as needed to support the work, resolve disputes and meet legal obligations.",
        "Financial records: kept for the period required by Nigerian tax and accounting law.",
      ],
      after: ["You can ask us to delete your information earlier at any time, subject to any legal duty to keep it."],
    },
    {
      id: "security",
      title: "How we protect your information",
      paragraphs: [
        "We use appropriate technical and organisational measures, including encrypted connections (HTTPS), security headers, access limited to people who need it, and reputable providers. No system is perfectly secure, so we cannot guarantee absolute security. If a breach affecting your personal information occurs, we will notify you and the relevant authority where the law requires.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights",
      paragraphs: ["Depending on where you live, you have the right to:"],
      items: [
        "Access the personal information we hold about you and receive a copy.",
        "Correct information that is inaccurate or incomplete.",
        "Request deletion of your information.",
        "Object to or ask us to restrict certain processing.",
        "Receive your information in a portable format.",
        "Withdraw consent at any time, without affecting processing already carried out.",
        "Complain to a data protection authority, such as the Nigeria Data Protection Commission, or the regulator in your own country.",
      ],
      after: [
        "To exercise any right, email {email}. We may need to verify your identity first, and we aim to respond within 30 days.",
      ],
    },
    {
      id: "marketing",
      title: "Marketing and updates",
      paragraphs: [
        "We only send marketing or newsletter emails to people who have asked for them or where the law allows. Every message includes a way to unsubscribe, or you can email {email} and we will stop.",
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      paragraphs: [
        "Our services are for businesses and adults. The site is not directed at children under 16, and we do not knowingly collect their information. If you believe a child has sent us personal information, contact us and we will delete it.",
      ],
    },
    {
      id: "external-links",
      title: "Links to other sites",
      paragraphs: [
        "Our site links to other websites, including client projects and social profiles. We do not control them and are not responsible for their privacy practices. Please read their policies before sharing information.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      paragraphs: [
        "We may update this policy as our practices or the law change. The date at the top shows when it was last revised. If we make a significant change, we will make that clear on the site.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: [
        "Questions, requests or complaints about this policy or your personal information: email {email}. SLIIQQUE Studio, Lagos, Nigeria.",
      ],
    },
  ],
};
