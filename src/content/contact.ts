export const contactPageContent = {
  officesTitle: "Our Offices",
  directionsLabel: "Get directions",
  hero: {
    title: "Connect with us",
    prompt: "What’s on your mind?",
    description:
      "We’re here to help! Tell us what you are looking for and we will get back to you with right solutions!",
  },
  inquiry: {
    title: "Reach Out to Us",
    description:
      "Please provide the information below, so we can better understand your needs and determine how we can assist you. Our sales team will be in touch with you shortly.",
  },
  contacts: {
    sales: {
      icon: "/assets/contact/icons/send-inquiry.svg",
      iconAlt: "Send inquiry",
      title: "send us an inquiry",
      phone: "+91 93276 42007",
      phoneHref: "tel:+919327642007",
      email: "info@dynamicdreamz.com",
    },
    jobs: {
      icon: "/assets/contact/icons/job-openings.svg",
      iconAlt: "For job openings",
      title: "for job openings",
      phone: "+91 63520 11266",
      phoneHref: "tel:+916352011266",
      email: "hr@dynamicdreamz.com",
    },
    social: {
      title: "follow us on",
      profiles: [
        {
          label: "Dynamic Dreamz on LinkedIn",
          href: "https://in.linkedin.com/company/dynamicdreamz",
          icon: "/assets/contact/icons/linkedin.svg",
        },
        {
          label: "Dynamic Dreamz on Instagram",
          href: "https://www.instagram.com/dynamicdreamz_surat/",
          icon: "/assets/contact/icons/instagram.svg",
        },
      ],
    },
  },
  offices: [
    {
      city: "Surat",
      image: "/assets/contact/offices/surat-office.webp",
      imageAlt: "Dynamic Dreamz Surat office and surrounding city view",
      directionsHref: "https://maps.app.goo.gl/Qhkg5dNxvhvM1gZ26",
      address:
        "Balaji House, Chamunda Restaurant Lane, Opp. Sub Jail, Near Udhna Darwaja, Surat, Gujarat 395002, India",
      phone: "+91 63520 11266",
      phoneHref: "tel:+916352011266",
      email: "hr@dynamicdreamz.com",
    },
    {
      city: "Ahmedabad",
      image: "/assets/contact/offices/ahmedabad-office.webp",
      imageAlt: "Dynamic Dreamz Ahmedabad office and surrounding city view",
      directionsHref:
        "https://www.google.com/maps/place/Iscon+Emporio/@23.0270585,72.5220673,17z/data=!3m1!4b1!4m6!3m5!1s0x395e85a789f709f3:0x247b137594876fa5!8m2!3d23.0270585!4d72.5246422!16s%2Fg%2F11ff3th0y2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
      address:
        "202 - Iscon Emporio, Pandurang Shashtri Marg, beside Star Bazaar, Satellite, Ahmedabad, Gujarat 380015, India",
      phone: "+91 63550 77520",
      phoneHref: "tel:+916355077520",
      email: "hr1.dynamicdreamz@gmail.com",
    },
  ],
} as const;
