import Image from "next/image";
import Link from "next/link";

import { HeaderScrollBehavior } from "@/components/layout/header-scroll-behavior";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <HeaderScrollBehavior />
      <div className="container header-inner">
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

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <ul>
            {primaryNavigation.map((group) => (
              <li key={group.label}>
                <details className="nav-dropdown">
                  <summary>
                    {group.label}
                    <ChevronIcon />
                  </summary>
                  <ul className="nav-dropdown-menu">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <Link href="/contact-us/">Contact us</Link>
            </li>
          </ul>
        </nav>

        <Link className="button button-primary header-quote-button" href={siteConfig.quotePath}>
          Get a quote
        </Link>
      </div>
    </header>
  );
}
