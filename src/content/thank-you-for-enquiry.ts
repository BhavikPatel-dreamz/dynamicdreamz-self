export type ThankYouForEnquiryContent = {
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

export const thankYouForEnquiryContent: ThankYouForEnquiryContent = {
  heading: "Thank you for your inquiry!",
  descriptionLine1: "We appreciate your interest and will get back to you shortly.",
  descriptionLine2: "In the meantime, We're excited to assist you further.",
  homeCta: {
    label: "Back Home",
    href: "/",
  },
  contact: {
    phone: {
      label: "+91 93276 42007",
      href: "tel:+919327642007",
      icon: "/assets/thank-you/call-icon.svg",
      iconAlt: "Call Icon",
    },
    email: {
      label: "info@dynamicdreamz.com",
      href: "mailto:info@dynamicdreamz.com",
      icon: "/assets/thank-you/mail-icon.svg",
      iconAlt: "Mail Icon",
    },
  },
};
