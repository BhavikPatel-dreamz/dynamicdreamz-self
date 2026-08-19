import type { Metadata } from "next";
import localFont from "next/font/local";

import { ContactWidget } from "@/components/layout/contact-widget";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { rootMetadata } from "@/data/seo";

import "slick-carousel/slick/slick.css";
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
  weight: "100 900",
  style: "normal",
  variable: "--font-montserrat-local",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${montserrat.variable}`}>
      <body>
        <a
          className="fixed top-3 left-3 z-[1000] -translate-y-[170%] rounded-[30px] bg-ink px-4 py-2.5 font-bold text-white transition-transform duration-160 focus:translate-y-0"
          href="#main-content"
        >
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
