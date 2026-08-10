import Image from "next/image";
import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { HeaderScrollBehavior } from "@/components/layout/header-scroll-behavior";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <HeaderScrollBehavior />
      <div className="container header-inner">
        <div className="header-navbar">
          <MobileNavigation />

          <Link className="brand-link" href="/" aria-label="Dynamic Dreamz home">
            <Image
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={257}
              height={39}
              preload
            />
          </Link>

          <DesktopNavigation />
        </div>

        <Link className="button button-primary header-quote-button" href={siteConfig.quotePath}>
          Get a quote
        </Link>
      </div>
    </header>
  );
}
