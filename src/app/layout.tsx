import type { Metadata } from "next";
import localFont from "next/font/local";

import { ContactWidget } from "@/components/layout/contact-widget";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/neue-montreal-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-montreal-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue-montreal-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const montserrat = localFont({
  src: "./fonts/montserrat-latin.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz",
    template: "%s | Dynamic Dreamz",
  },
  description:
    "Dynamic Dreamz is a Shopify Platinum Partner delivering Shopify Plus, migration, B2B, CRO, mobile apps, integrations and white-label development.",
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "9HXcEYDK16thq7UBFdMPjzvGI4CrmknyeNJCv66f1c8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ContactWidget />
      </body>
    </html>
  );
}
