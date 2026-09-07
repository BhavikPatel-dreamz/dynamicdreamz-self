export type ThankYouForApplyingContent = {
  heading: string;
  descriptionLine1: string;
  descriptionLine2: string;
  homeCta: {
    label: string;
    href: string;
  };
  contact: {
    phone: {
      label: string;
      href: string;
      icon: string;
      iconAlt: string;
    };
    email: {
      label: string;
      href: string;
      icon: string;
      iconAlt: string;
    };
  };
};

export const thankYouForApplyingContent: ThankYouForApplyingContent = {
  heading: "Thank you for applying to Dynamic Dreamz",
  descriptionLine1: "We appreciate your interest and have received your job application.",
  descriptionLine2: "We will get back to you via email or phone as soon as possible.",
  homeCta: {
    label: "back home",
    href: "/",
  },
  contact: {
    phone: {
      label: "+91 63520 11266",
      href: "tel:+916352011266",
      icon: "/assets/thank-you/call-icon.svg",
      iconAlt: "Call Icon",
    },
    email: {
      label: "hr@dynamicdreamz.com",
      href: "mailto:hr@dynamicdreamz.com",
      icon: "/assets/thank-you/mail-icon.svg",
      iconAlt: "Mail Icon",
    },
  },
};
