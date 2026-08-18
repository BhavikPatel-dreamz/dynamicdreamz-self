export type ShopifyAppItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  alt: string;
  additionalInfo: string;
  description: string;
};

export type ShopifyAppsContent = {
  hero: {
    title: string;
  };
  apps: ShopifyAppItem[];
};

export const shopifyAppsContent: ShopifyAppsContent = {
  hero: {
    title: "Shopify App",
  },
  apps: [
    {
      id: "smart-b2b",
      title: "Smart B2B",
      href: "https://apps.shopify.com/smartb2b",
      image: "/assets/shopify-apps/smart-b2b.png",
      alt: "Smart B2B",
      additionalInfo: "Free trial available",
      description: "Complete Shopify B2B Portal for Wholesale Buyer Management.",
    },
    {
      id: "dynamic-payhide",
      title: "Dynamic PayHide",
      href: "https://apps.shopify.com/payment-hide?surface_intra_position=3&surface_type=partners&surface_version=simplified",
      image: "/assets/shopify-apps/dynamic-payhide.png",
      alt: "Dynamic PayHide",
      additionalInfo: "Free trial available",
      description: "Add B2B capability by providing special payment terms options.",
    },
    {
      id: "dynamic-quote-request",
      title: "Dynamic Quote Request",
      href: "https://apps.shopify.com/request-quote?surface_intra_position=2&surface_type=partners&surface_version=simplified",
      image: "/assets/shopify-apps/dynamic-quote-request.jpeg",
      alt: "Dynamic Quote Request",
      additionalInfo: "Free trial available",
      description: "Add 'Request a Quote' on product and cart pages to boost AOV.",
    },
    {
      id: "dynamic-checkout-upsell",
      title: "Dynamic Checkout Upsell",
      href: "https://apps.shopify.com/dynamic-checkout-upsell?surface_intra_position=1&surface_type=partners&surface_version=simplified",
      image: "/assets/shopify-apps/dynamic-checkout-upsell.jpeg",
      alt: "Dynamic Checkout Upsell",
      additionalInfo: "Free trial available",
      description: "Enhance store shopping experience with dynamic upsell feature",
    },
    {
      id: "easy-shipping-rate-manager",
      title: "Easy Shipping Rate Manager",
      href: "https://apps.shopify.com/dynamic-shipping?surface_intra_position=4&surface_type=partners&surface_version=simplified",
      image: "/assets/shopify-apps/easy-shipping-rate-manager.png",
      alt: "Easy Shipping Rate Manager",
      additionalInfo: "$20/month",
      description: "Beat the competition by offering dynamic  shipping rates.",
    },
  ],
};
