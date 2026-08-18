export type PrivacyPolicyInline = {
  text: string;
  strong?: boolean;
};

export type PrivacyPolicySection = {
  title: string;
  level?: 2 | 3;
  paragraphs?: string[];
  items?: PrivacyPolicyInline[][];
};

export const privacyPolicyContent = {
  heroTitle: "Privacy and Cookies Policy",
  sections: [
    {
      title: "Introduction",
      paragraphs: [
        "Dynamic Dreamz is committed to protecting and respecting your privacy. This Privacy and Cookies Policy outlines how we collect, use, and protect any personal information you provide to us when you use our website, services, or engage with us in any other way.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: ["We may collect and process the following types of personal data:"],
      items: [
        [{ text: "Personal Identification Information:", strong: true }, { text: " Name, email address, phone number, company name, job title." }],
        [{ text: "Technical Data:", strong: true }, { text: " IP address, browser type, and version, time zone settings, operating system, and platform." }],
        [{ text: "Usage Data:", strong: true }, { text: " Information about how you use our website, products, and services." }],
        [{ text: "Cookies Data:", strong: true }, { text: " Information collected from cookies and similar tracking technologies." }],
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: ["We use the information we collect in the following ways:"],
      items: [
        [{ text: "To provide and manage our services." }],
        [{ text: "To personalize your experience on our website." }],
        [{ text: "To respond to inquiries and offer customer support." }],
        [{ text: "To improve our products and services." }],
        [{ text: "To send marketing communications, if you have opted in." }],
        [{ text: "To comply with legal obligations." }],
      ],
    },
    {
      title: "Sharing Your Information",
      paragraphs: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:",
      ],
      items: [
        [{ text: "When we work with trusted partners to help provide our services (e.g., payment processors, cloud storage providers), who are bound by confidentiality agreements." }],
        [{ text: "When required by law, to comply with a legal obligation or in response to a government request." }],
        [{ text: "In connection with a business transfer, such as a merger, acquisition, or sale of assets." }],
      ],
    },
    {
      title: "Cookies",
    },
    {
      title: "What are Cookies?",
      level: 3,
      paragraphs: [
        "Cookies are small text files stored on your device by your browser when you visit a website. They allow the website to remember your actions and preferences (such as login details, language, and other settings) over a period of time, so you don’t have to re-enter them whenever you come back to the site.",
      ],
    },
    {
      title: "How We Use Cookies",
      level: 3,
      paragraphs: ["We use cookies to:"],
      items: [
        [{ text: "Understand how users interact with our website." }],
        [{ text: "Provide a more personalized experience." }],
        [{ text: "Improve the performance and functionality of our website." }],
        [{ text: "Deliver relevant advertising to our users (with consent)." }],
      ],
    },
    {
      title: "Types of Cookies We Use",
      level: 3,
      items: [
        [{ text: "Necessary Cookies: These are essential for the functioning of our website (e.g., authentication and security-related cookies)." }],
        [{ text: "Analytical/Performance Cookies: These help us understand how users interact with our website, enabling us to improve its functionality." }],
        [{ text: "Targeting/Advertising Cookies: These track your browsing habits to enable us to show you targeted advertisements." }],
      ],
    },
    {
      title: "Managing Cookies",
      level: 3,
      paragraphs: [
        "You can manage your cookie preferences through your browser settings. However, please note that disabling some cookies may affect the functionality of our website",
      ],
    },
    {
      title: "Data Retention",
      paragraphs: [
        "We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including satisfying legal, accounting, or reporting requirements.",
      ],
    },
    {
      title: "Your Rights",
      paragraphs: ["Under applicable privacy laws, you have rights regarding your personal data, including:"],
      items: [
        [{ text: "The right to access the personal data we hold about you." }],
        [{ text: "The right to rectify any inaccuracies." }],
        [{ text: "The right to request deletion of your personal data." }],
        [{ text: "The right to object to or restrict how we process your data." }],
        [{ text: "The right to data portability." }],
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect it from unauthorized access, loss, or alteration.",
      ],
    },
    {
      title: "Changes to this Policy",
      paragraphs: [
        "We may update this Privacy and Cookies Policy from time to time to reflect changes in our practices, legal requirements, or for other reasons. Please check this page periodically for any updates.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy and Cookies Policy or how we handle your personal data, please contact us at:",
      ],
    },
  ] satisfies PrivacyPolicySection[],
  contact: {
    name: "Dynamic Dreamz",
    email: "info@dynamicdreamz.com",
    phone: "+91 63520 11266",
    phoneHref: "tel:+916352011266",
    address:
      "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja, Surat, Gujarat 395002, India",
    addressHref: "https://maps.app.goo.gl/Qhkg5dNxvhvM1gZ26",
  },
} as const;
