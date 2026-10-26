import type { Metadata } from "next";
import localFont from "next/font/local";

import { AOSProvider } from "@/components/providers/AOSProvider";
import { AttributionTracker } from "@/components/providers/AttributionTracker";
import { ContactWidget, SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
import { siteChromeCopy } from "@/content/common";
import { rootMetadata } from "@/data/seo";
import {
  adaptPayloadFooterBottomLinks,
  adaptPayloadFooterColumns,
  adaptPayloadNavToPrimary,
  getPayloadNavigation,
  getPayloadSiteSettings,
} from "@/lib/payload";

import "./globals.css";
import "./aos.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/neue--montreal-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-bold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal-local",
  display: "swap",
  preload: true,
});

const neueMontrealMedium = localFont({
  src: [
    {
      path: "./fonts/neue--montreal-medium-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-medium-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/neue--montreal-medium-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal-medium-local",
  display: "swap",
  preload: true,
});

const montserrat = localFont({
  src: "./fonts/montserrat-latin-fonts.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-montserrat-local",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = rootMetadata;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [navData, settingsData] = await Promise.all([
    getPayloadNavigation(),
    getPayloadSiteSettings(),
  ]);

  const navigation = adaptPayloadNavToPrimary(navData?.headerNav);
  const footerColumns = adaptPayloadFooterColumns(navData?.footerColumns);
  const footerBottomLinks = adaptPayloadFooterBottomLinks(navData?.footerBottomLinks);

  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${neueMontrealMedium.variable} ${montserrat.variable}`}
    >
      <body>
        <AttributionTracker />
        <AOSProvider>
          <a
            className="fixed top-3 left-3 z-[1000] -translate-y-[170%] rounded-[30px] bg-ink px-4 py-2.5 font-bold text-white transition-transform duration-160 focus:translate-y-0"
            href="#main-content"
          >
            {siteChromeCopy.skipToContent}
          </a>
          <SiteHeader
            contactEmail={settingsData?.email}
            navigation={navigation}
          />
          {children}
          <SiteFooter
            contactEmail={settingsData?.email}
            contactPhone={settingsData?.phone}
            copyrightText={navData?.copyright}
            footerBottomLinks={footerBottomLinks}
            footerColumns={footerColumns}
            socialLinks={settingsData?.socialLinks}
          />
          <ContactWidget whatsappNumber={settingsData?.whatsappNumber} />
        </AOSProvider>
      </body>
    </html>
  );
}
