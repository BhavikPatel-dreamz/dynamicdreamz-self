import Image from "next/image";
import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { HeaderScrollBehavior } from "@/components/layout/header-scroll-behavior";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteChromeCopy } from "@/content/common";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header fixed top-0 left-0 z-[111] w-full bg-white/60 backdrop-blur-[25px] transition-all duration-500 ease-in-out [body:has(main[data-page=request-quote])_&]:hidden [body:has(main[data-page=shopify-development-in-barcelona-spain])_&]:hidden [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [body:has(main[data-page=white-label-website-design])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-website-design])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [&.header-down]:-translate-y-full [&.header-down]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] [&.header-up]:translate-y-0 [&.header-up]:bg-white/60 [&.header-up]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] max-[1200px]:py-[15px] max-[768px]:[&:not(.header-up)]:bg-transparent">
      <HeaderScrollBehavior />
      <Container className="relative flex items-center justify-between gap-0 max-[1200px]:min-h-[34px]">
        <div className="flex items-center">
          <MobileNavigation />

          <Link
            className="inline-flex shrink-0 -translate-y-[2.5px] max-[1200px]:mr-auto max-[1200px]:translate-y-0"
            href="/"
            aria-label="Dynamic Dreamz home"
          >
            <Image
              className="h-auto w-[225px] max-[768px]:w-[170px] max-[380px]:w-[150px]"
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={257}
              height={39}
              preload
            />
          </Link>

          <DesktopNavigation />
        </div>

        <ButtonLink
          className="max-[1399px]:px-5 max-[1399px]:py-[13px] max-[1399px]:text-[14px] max-[991px]:px-[20px] max-[991px]:py-[13px]"
          variant="primary"
          href={siteConfig.quotePath}
        >
          {siteChromeCopy.headerCta}
        </ButtonLink>
      </Container>
    </header>
  );
}
