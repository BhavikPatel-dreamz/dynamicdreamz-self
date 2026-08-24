import Image from "next/image";
import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { HeaderScrollBehavior } from "@/components/layout/header-scroll-behavior";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
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
          className="min-h-[49px] min-w-[162.36px] shrink-0 px-[23px] py-[15px] text-base whitespace-nowrap normal-case max-[1400px]:px-5 max-[1400px]:py-[13px] max-[1400px]:text-sm max-[1200px]:h-[34px] max-[1200px]:min-h-[34px] max-[1200px]:max-h-[34px] max-[1200px]:w-[121px] max-[1200px]:min-w-[121px]! max-[1200px]:px-3.5 max-[1200px]:py-[9px] max-[1200px]:text-[14px] max-[768px]:h-11 max-[768px]:min-h-11 max-[768px]:max-h-11 max-[768px]:w-[140px] max-[768px]:min-w-[140px]! max-[380px]:h-[29px] max-[380px]:min-h-[29px] max-[380px]:max-h-[29px] max-[380px]:w-auto max-[380px]:min-w-0! max-[380px]:px-2.5 max-[380px]:py-2 max-[380px]:text-[10px]"
          variant="primary"
          href={siteConfig.quotePath}
        >
          Get a quote
        </ButtonLink>
      </Container>
    </header>
  );
}
