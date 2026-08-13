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
    <header className="site-header fixed top-0 left-0 z-[111] w-full bg-white/60 backdrop-blur-[25px] transition-all duration-500 ease-in-out [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [&.header-down]:-translate-y-full [&.header-down]:bg-white [&.header-down]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] [&.header-up]:translate-y-0 [&.header-up]:bg-white [&.header-up]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] max-[991px]:h-16 max-[991px]:py-[15px] max-[991px]:[&:not(.header-up)]:bg-transparent">
      <HeaderScrollBehavior />
      <Container className="relative flex items-center justify-between gap-0 max-[991px]:min-h-[34px] min-[1200px]:!max-w-[1180px] min-[1440px]:[body:has(main[data-page=home])_&]:!max-w-[1360px]">
        <div className="flex items-center">
          <MobileNavigation />

          <Link
            className="inline-flex shrink-0 -translate-y-[2.5px] max-[991px]:mr-auto max-[991px]:translate-y-0"
            href="/"
            aria-label="Dynamic Dreamz home"
          >
            <Image
              className="h-auto w-[225px] max-[1199px]:w-[180px] max-[991px]:w-[225px] max-[767px]:w-[170px] max-[379px]:w-[150px]"
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={225}
              height={38}
              preload
            />
          </Link>

          <DesktopNavigation />
        </div>

        <ButtonLink
          className="min-h-[49px] min-w-[162.36px] shrink-0 px-[23px] py-[15px] text-base normal-case max-[991px]:min-h-[34px] max-[991px]:min-w-0 max-[991px]:px-3.5 max-[991px]:py-[9px] max-[991px]:text-[13px] max-[379px]:px-2.5 max-[379px]:py-2 max-[379px]:text-[10px]"
          variant="primary"
          href={siteConfig.quotePath}
        >
          Get a quote
        </ButtonLink>
      </Container>
    </header>
  );
}
