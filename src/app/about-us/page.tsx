import type { Metadata } from "next";

import { AboutPage } from "@/components/sections/about-page";
import { siteConfig } from "@/data/site";
import { createAboutPageSchema, serializeJsonLd } from "@/lib/schema";

const title = "Who we are | A crafting web development solutions";
const description =
  "Discover the visionary team at Dynamic Dreamz, experts in web development & digital solutions. Learn about our passion, expertise, and commitment.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "about Dynamic Dreamz",
    "web development company",
    "Shopify Platinum Partner",
    "ecommerce development team",
    "Shopify experts",
  ],
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title,
    description,
    url: "/about-us/",
    siteName: siteConfig.name,
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/assets/og/about-us.png",
        width: 1200,
        height: 630,
        alt: "Dynamic Dreamz web development and ecommerce agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og/about-us.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function AboutUsPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createAboutPageSchema()) }}
      />
      <AboutPage />
    </main>
  );
}
