import type { Metadata } from "next";

import { HomePage } from "@/components/sections/home-page";
import { siteConfig } from "@/data/site";
import { createHomePageSchema, serializeJsonLd } from "@/lib/schema";

const title = "Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz";
const description =
  "Established in 2006, Dynamic Dreamz is a Shopify Platinum Partner for Shopify Plus, migration, B2B, CRO, mobile apps, integrations and white-label delivery.";
const socialDescription =
  "Shopify Plus development, migration, B2B, mobile apps, integrations and white-label delivery for established brands and digital agencies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Shopify Plus agency",
    "Shopify Platinum Partner",
    "Shopify development agency",
    "Shopify migration",
    "white label Shopify development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: socialDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "Dynamic Dreamz — Shopify Plus agency and Shopify Platinum Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
    images: ["/assets/og/homepage.png"],
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

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(createHomePageSchema()) }}
      />
      <HomePage />
    </main>
  );
}
