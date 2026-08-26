const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dynamicdreamz-self.vercel.app"

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
}

export const siteConfig = {
  name: "Dynamic Dreamz",
  legalName: "Dynamic Dreamz Solutions LLP",
  url: siteUrl,
  email: "info@dynamicdreamz.com",
  phoneDisplay: "+91 9327642007",
  phoneHref: "tel:+919327642007",
  quotePath: "/request-quote",
  logo: "/assets/brand/dynamic-dreamz-logo.svg",
  social: {
    linkedin: "https://in.linkedin.com/company/dynamicdreamz",
    instagram: "https://www.instagram.com/dynamicdreamz_surat/",
    shopify:
      "https://www.shopify.com/partners/directory/partner/dynamic-dreamz",
  },
} as const;
