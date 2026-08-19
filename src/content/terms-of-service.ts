export type TermsOfServiceSection = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  closingParagraphs?: readonly string[];
};

export const termsOfServiceContent = {
  heroTitle: "Terms of Service",
  intro:
    "Welcome to Dynamic Dreamz (“we”, “our”, “us”). By accessing our website, making a payment, or engaging our services, you agree to the terms outlined below. These terms apply to all clients, visitors, and users of our services.",
  sections: [
    {
      title: "Services We Provide",
      paragraphs: [
        "Dynamic Dreamz offers web design, web development, Shopify & WordPress development, eCommerce solutions, mobile app development, and related digital services.",
        "All work is performed as per the agreed scope, proposal, or written communication shared with you.",
      ],
    },
    {
      title: "Project Onboarding & Communication",
      paragraphs: [
        "A project begins only after the initial payment is received and the scope is clearly defined.",
        "You agree to:",
      ],
      items: [
        "Provide required content, assets, credentials, and approvals on time",
        "Review and respond promptly during the project",
        "Communicate through the channels mutually decided",
        "Delays in providing inputs may extend project timelines.",
      ],
    },
    {
      title: "Payments & Billing",
      paragraphs: [
        "Payments must be made based on the milestones or schedules mutually agreed upon.",
        "Once a payment is made through Razorpay or any other mode, it is considered final and confirmed.",
        "Invoices must be cleared on or before the due date mentioned.",
      ],
    },
    {
      title: "Cancellation & Refund Policy",
      paragraphs: [
        "You may request cancellation of the project in writing.",
        "However:",
      ],
      items: [
        "No refund is provided once the work has started.",
        "If a cancellation request is made before work begins, a partial refund may be considered after deducting administrative or planning efforts already completed.",
        "Payment gateway charges are non-refundable.",
      ],
      closingParagraphs: [
        "We aim to maintain transparency while ensuring fairness for both parties.",
      ],
    },
    {
      title: "Intellectual Property & Ownership",
      paragraphs: [
        "All designs, code, and deliverables created by Dynamic Dreamz remain our property until full payment is received.",
        "After final payment:",
      ],
      items: [
        "Project deliverables become your property",
        "Third-party assets (themes, apps, plugins) remain subject to their respective licenses",
      ],
      closingParagraphs: [
        "We may showcase non-confidential work in our portfolio unless you request otherwise in writing.",
      ],
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "Both parties agree to maintain confidentiality of project details, documents, credentials, and business information exchanged during the course of the project.",
        "We follow strict internal processes to keep your data secure.",
      ],
    },
    {
      title: "Third-Party Services & Tools",
      paragraphs: [
        "If your project requires themes, plugins, apps, or third-party services:",
      ],
      items: [
        "Their purchase, billing, and subscription are your responsibility",
        "We are not liable for third-party changes, issues, or downtime",
        "We will guide you wherever needed.",
      ],
    },
    {
      title: "Quality Assurance & Support",
      paragraphs: [
        "We test all work before delivery.",
        "Any bugs reported within the agreed support period will be fixed at no additional cost, provided they fall within the original project scope.",
        "Requests outside the scope are treated as new tasks and billed separately.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: ["We are not responsible for:"],
      items: [
        "Loss of business, revenue, or data",
        "Third-party system failures, hosting issues, or technical limitations",
        "Any indirect, incidental, or consequential damages",
      ],
      closingParagraphs: [
        "Our total liability is limited to the payment received for the specific service.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These terms are governed by the laws of India.",
        "Any disputes will be handled under the jurisdiction of the appropriate courts in India.",
      ],
    },
    {
      title: "Contact Information",
      paragraphs: ["For any queries or support, you can reach us at:"],
    },
  ] satisfies readonly TermsOfServiceSection[],
  contactEmail: "info@dynamicdreamz.com",
} as const;
