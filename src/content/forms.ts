const sharedFormStatusCopy = {
  success: "Thank you. Your inquiry has been received.",
  missingIdentity: "Please provide your name and a valid email address.",
  invalidEmail: "Please provide a valid email address.",
} as const;

export const contactFormCopy = {
  ariaLabel: "Contact form",
  labels: {
    name: "Name",
    email: "Email",
    phone: "Mobile phone",
    company: "Company name",
    project: "Brief about the project",
  },
  placeholders: {
    name: "Enter Your Name",
    email: "Enter Your Email Here",
    phone: "81234 56789",
    company: "Enter Your Company name",
    project: "Share your questions or comments here",
  },
  phoneCountryCode: "+91",
  submit: "submit inquiry",
  sending: "sending inquiry",
  status: {
    ...sharedFormStatusCopy,
    unavailable: "We couldn't send your inquiry right now. Please use the sales email above.",
  },
} as const;

export const quoteFormCopy = {
  ariaLabel: "Request a quote form",
  labels: {
    name: "Full Name",
    email: "Email",
    phone: "Mobile Phone",
    company: "Company name",
    website: "Website URL",
    budget: "Estimated Budget (in US $)",
    project: "Brief about the project",
  },
  placeholders: {
    name: "Enter Your Name",
    email: "Enter Your Email",
    phone: "Enter Your Phone Number",
    company: "Enter Your Company Name",
    website: "Enter Your Website Url",
    budget: "Select your budget",
    project: "Share your questions or comments here",
  },
  submit: "submit inquiry",
  sending: "sending inquiry",
  status: {
    ...sharedFormStatusCopy,
    unavailable: "We couldn't send your inquiry right now. Please email info@dynamicdreamz.com.",
  },
} as const;
