import type { Metadata } from "next";
import localFont from "next/font/local";

import { ContactWidget } from "@/components/layout/contact-widget";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteChromeCopy } from "@/content/common";
import { rootMetadata } from "@/data/seo";

import "slick-carousel/slick/slick.css";
import "./globals.css";

const neueMontrealLight = localFont({
  src: "./fonts/neue--montreal-light-webfont.woff2",
  weight: "300",
  style: "normal",
  variable: "--font-neue-montreal-light-local",
  display: "swap",
});

const neueMontrealRegular = localFont({
  src: "./fonts/neue--montreal-regular-webfont.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-neue-montreal-regular-local",
  display: "swap",
});

const neueMontrealMedium = localFont({
  src: "./fonts/neue--montreal-medium-webfont.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-neue-montreal-medium-local",
  display: "swap",
});

const neueMontrealBold = localFont({
  src: "./fonts/neue--montreal-bold-webfont.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-neue-montreal-bold-local",
  display: "swap",
});

const montserrat = localFont({
  src: "./fonts/montserrat-latin-fonts.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-montserrat-local",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${neueMontrealLight.variable} ${neueMontrealRegular.variable} ${neueMontrealMedium.variable} ${neueMontrealBold.variable} ${montserrat.variable}`}
    >
      <body>
        <a
          className="fixed top-3 left-3 z-[1000] -translate-y-[170%] rounded-[30px] bg-ink px-4 py-2.5 font-bold text-white transition-transform duration-160 focus:translate-y-0"
          href="#main-content"
        >
          {siteChromeCopy.skipToContent}
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ContactWidget />
      </body>
    </html>
  );
}
