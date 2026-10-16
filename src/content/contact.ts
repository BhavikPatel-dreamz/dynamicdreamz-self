export const contactPageContent = {
  hero: {
    eyebrow: "Contact Dynamic Dreamz",
    title: "Let’s connect.",
    description:
      "Have a question, want to discuss a project, looking for an agency partnership, or need to reach our team? Send us a message and we’ll make sure it reaches the right person.",
    quickLinks: [
      { label: "Send a Message", href: "#message" },
      { label: "Our Offices", href: "#offices" },
      { label: "Other Contacts", href: "#contact-details" },
    ],
  },
  formSection: {
    eyebrow: "Send us a message",
    title: "What can we help you with?",
    description:
      "This is our general contact form. If you need a detailed project quotation, you can still use our separate Get a Quote page.",
    note: "Your message will be directed to the appropriate team.",
  },
  officesSection: {
    eyebrow: "Send us a message",
    title: "Our offices",
    description: "Visit or contact our Surat and Ahmedabad offices in India.",
    directionsLabel: "GET DIRECTIONS",
    offices: [
      {
        city: "Surat",
        address:
          "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja, Surat, Gujarat 395002, India",
        phone: "+91 63520 11266",
        phoneHref: "tel:+916352011266",
        directionsHref: "https://maps.app.goo.gl/Qhkg5dNxvhvM1gZ26",
      },
      {
        city: "Ahmedabad",
        address:
          "202 - Iscon Emporio, Pandurang Shashtri Marg, beside Star Bazaar, Satellite, Ahmedabad, Gujarat 380015, India",
        phone: "+91 63550 77520",
        phoneHref: "tel:+916355077520",
        directionsHref:
          "https://www.google.com/maps/place/Iscon+Emporio/@23.0270585,72.5220673,17z/data=!3m1!4b1!4m6!3m5!1s0x395e85a789f709f3:0x247b137594876fa5!8m2!3d23.0270585!4d72.5246422!16s%2Fg%2F11ff3th0y2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
  contactDetailsSection: {
    eyebrow: "Other ways to reach us",
    title: "Contact Details",
    sales: {
      label: "Business / Project / Partnership Inquiry",
      email: "info@dynamicdreamz.com",
      phone: "+91 93276 42007",
      phoneHref: "tel:+919327642007",
    },
    hr: {
      label: "Careers & HR",
      email: "hr@dynamicdreamz.com",
      phone: "+91 63520 11266",
      phoneHref: "tel:+916352011266",
      actionLabel: "View Open Positions",
      actionHref: "/career",
    },
    discoveryCall: {
      label: "Book a Discovery Call",
      actionLabel: "Schedule a Call",
      actionHref: "/book-a-discovery-call",
      description: "Choose a convenient time to speak with our team.",
    },
    social: {
      label: "Follow Us",
      profiles: [
        {
          name: "LinkedIn",
          label: "Dynamic Dreamz on LinkedIn",
          href: "https://www.linkedin.com/company/dynamicdreamz",
        },
        {
          name: "Instagram",
          label: "Dynamic Dreamz on Instagram",
          href: "https://www.instagram.com/dynamicdreamz_surat/",
        },
      ],
    },
  },
} as const;
