"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { siteChromeCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { primaryNavigation, type PrimaryNavigationGroup } from "@/data/navigation";

import { DesktopNavigation, MobileNavigation } from "./MegaMenuClient";

// ── 1. HeaderScrollBehavior ──
type HeaderScrollState = "top" | "up" | "down";

function applyScrollState(header: HTMLElement, state: HeaderScrollState) {
  header.classList.toggle("header-up", state === "up");
  header.classList.toggle("header-down", state === "down");
}

export function HeaderScrollBehavior() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const siteHeader = header;

    let previousPosition = window.scrollY;
    let scrollState: HeaderScrollState = previousPosition > 0 ? "down" : "top";
    let frame = 0;

    applyScrollState(siteHeader, scrollState);

    function updateHeader() {
      const position = window.scrollY;
      const nextState: HeaderScrollState =
        position <= 0 ? "top" : position < previousPosition ? "up" : position > previousPosition ? "down" : scrollState;

      previousPosition = position;
      frame = 0;

      if (nextState === scrollState) return;
      scrollState = nextState;
      applyScrollState(siteHeader, nextState);
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateHeader);
    }

    function enableSmoothScroll() {
      document.documentElement.classList.add("enable-smooth-scroll");
      window.removeEventListener("pointerdown", enableSmoothScroll);
      window.removeEventListener("keydown", enableSmoothScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", enableSmoothScroll, { passive: true });
    window.addEventListener("keydown", enableSmoothScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", enableSmoothScroll);
      window.removeEventListener("keydown", enableSmoothScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

// ── 2. ContactWidget ──
export function ContactWidget({ whatsappNumber }: { whatsappNumber?: string | null } = {}) {
  const cleanNumber = whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, "") : null;
  const href = cleanNumber
    ? `https://api.whatsapp.com/send/?phone=${cleanNumber}`
    : siteConfig.whatsappHref;

  return (
    <div className="whatsapp-widget fixed right-5 bottom-20 z-110 max-[767px]:bottom-[38px] [body:has(main[data-page=home])_&]:bottom-[15px] [body:has(main[data-page=home])_&]:max-[767px]:bottom-[10px] [&_a]:[transition:all_.3s_ease]">
      <a
        className="whatsapp-widget flex min-w-[240px] max-[1199px]:min-w-[220px] max-[767px]:min-w-[200px] items-center rounded-[100px] bg-brand-green px-2.5 py-1.75 max-[767px]:p-[5px] text-white shadow-[0_10px_30px_rgb(0_0_0/15%)] transition-all duration-300 ease-[ease] [transition:all_.3s_ease] hover:-translate-y-0.75 hover:shadow-[0_15px_40px_rgb(0_0_0/20%)]"
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Chat with Dynamic Dreamz on WhatsApp"
      >
        <span className="flex size-[55px] shrink-0 items-center justify-center max-[1199px]:size-10">
          <svg
            className="size-[55px] max-[1199px]:size-10"
            aria-hidden="true"
            viewBox="0 0 50 50"
            width="55"
            height="55"
          >
            <path
              d="M24.9719 49.6693C38.6118 49.6693 49.6692 38.6119 49.6692 24.972C49.6692 11.3321 38.6118 0.274719 24.9719 0.274719C11.332 0.274719 0.274658 11.3321 0.274658 24.972C0.274658 38.6119 11.332 49.6693 24.9719 49.6693Z"
              fill="#0b6b35"
            />
            <path
              d="M9.13166 24.8282C9.13056 27.6305 9.8627 30.3664 11.2551 32.778L8.99829 41.0175L17.431 38.8063C19.7542 40.0735 22.3699 40.7409 25.0323 40.742H25.0389C33.8053 40.742 40.9417 33.6078 40.9456 24.8403C40.9472 20.5912 39.2936 16.5958 36.291 13.5904C33.2878 10.585 29.294 8.92865 25.0389 8.927C16.2708 8.927 9.1355 16.0601 9.13166 24.8282ZM14.1534 32.3625L13.8384 31.8625C12.5146 29.7583 11.816 27.3259 11.8171 24.8287C11.8198 17.5414 17.7505 11.6124 25.0433 11.6124C28.575 11.6141 31.8938 12.9905 34.3904 15.4882C36.8864 17.9865 38.2602 21.3075 38.2596 24.8386C38.2563 32.1265 32.3257 38.0561 25.0383 38.0561H25.0334C22.6608 38.0544 20.3338 37.4178 18.3042 36.2136L17.8213 35.9271L12.817 37.2394L14.1534 32.3625Z"
              fill="white"
            />
            <path
              d="M21.0632 18.1797C20.7652 17.5178 20.4524 17.5046 20.1687 17.4931C19.937 17.4832 19.672 17.4838 19.4069 17.4838C19.1418 17.4838 18.711 17.5831 18.3471 17.981C17.9827 18.3789 16.9558 19.3405 16.9558 21.2954C16.9558 23.2509 18.38 25.1405 18.5787 25.4061C18.7774 25.6712 21.3283 29.8121 25.3677 31.4053C28.7254 32.7291 29.4082 32.4662 30.137 32.3998C30.8659 32.3334 32.4887 31.4388 32.8197 30.5108C33.1512 29.5827 33.1512 28.7874 33.0518 28.6211C32.9525 28.4554 32.6874 28.3561 32.2901 28.1574C31.8927 27.9587 29.9383 26.9972 29.5745 26.8643C29.21 26.7321 28.945 26.6657 28.6799 27.0636C28.4148 27.4609 27.6536 28.3561 27.422 28.6211C27.1904 28.8868 26.9582 28.9197 26.5609 28.721C26.1635 28.5218 24.8831 28.1025 23.3645 26.7485C22.1829 25.6948 21.3854 24.3941 21.1532 23.9962C20.9216 23.5988 21.1286 23.3837 21.3278 23.1855C21.5061 23.0077 21.7251 22.7212 21.9244 22.4896C22.1225 22.2575 22.1889 22.0917 22.3212 21.8266C22.454 21.5616 22.3876 21.3294 22.2882 21.1302C22.1889 20.931 21.4167 18.9656 21.0632 18.1797Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="mx-2.5 h-[55px] max-[1199px]:h-[45px] w-px shrink-0 bg-white/50 max-[767px]:h-[35px]" aria-hidden="true" />
        <span className="whatsapp-content flex flex-col leading-[1.2]">
          <small className="mb-[5px] text-[12px] font-semibold max-[767px]:mb-[3px] max-[767px]:text-[11px]">
            {siteChromeCopy.contactWidget.prompt}
          </small>
          <strong className="text-[18px] font-bold leading-[1.1] max-[767px]:text-sm">{siteChromeCopy.contactWidget.cta}</strong>
        </span>
      </a>
    </div>
  );
}

// ── 3. SiteHeader ──
export interface SiteHeaderProps {
  navigation?: PrimaryNavigationGroup[];
  logo?: string | null;
  logoAlt?: string;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  contactEmail?: string;
}

export function SiteHeader({
  navigation,
  logo,
  logoAlt,
  ctaLabel,
  ctaHref,
  contactEmail,
}: SiteHeaderProps = {}) {
  const effectiveLogo = logo || siteConfig.logo;
  const effectiveLogoAlt = logoAlt || "Dynamic Dreamz - Shopify Platinum Partner";
  const effectiveCtaLabel = ctaLabel || siteChromeCopy.headerCta;
  const effectiveCtaHref = ctaHref || siteConfig.quotePath;
  const effectiveNav: PrimaryNavigationGroup[] =
    navigation && navigation.length > 0 ? navigation : primaryNavigation;

  return (
    <header className="site-header fixed top-0 left-0 z-[111] w-full py-[15px] [&.header-up]:py-[12px] bg-white/60 backdrop-blur-[25px] transition-all duration-500 ease-in-out [body:has(main[data-page=home])_&:not(.header-up)]:bg-transparent [body:has(main[data-page=home])_&:not(.header-up)]:backdrop-blur-none [body:has(main[data-page=career-apply-now])_&]:hidden [body:has(main[data-page=request-quote])_&]:hidden [body:has(main[data-page=shopify-development-in-barcelona-spain])_&]:hidden [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-shopify])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-wordpress])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [body:has(main[data-page=white-label-website-design])_&:not(.header-up):not(.header-down)]:bg-transparent [body:has(main[data-page=white-label-website-design])_&:not(.header-up):not(.header-down)]:backdrop-blur-none [&.header-down]:-translate-y-full [&.header-down]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] [&.header-up]:translate-y-0 [&.header-up]:bg-white/60 [&.header-up]:shadow-[0_-6px_10px_5px_rgb(0_0_0/10%)] max-[768px]:[&:not(.header-up)]:bg-transparent">
      <HeaderScrollBehavior />
      <Container className="relative flex items-center justify-between gap-0 max-[1199px]:min-h-[34px]">
        <div className="flex items-center">
          <MobileNavigation navigation={effectiveNav} contactEmail={contactEmail} />

          <Link
            className="inline-flex shrink-0 -translate-y-[2.5px] max-[1199px]:mr-auto max-[1199px]:translate-y-0"
            href="/"
            aria-label="Dynamic Dreamz home"
          >
            <Image
              className="h-auto w-[225px] max-[768px]:w-[170px] max-[380px]:w-[150px]"
              src={effectiveLogo}
              alt={effectiveLogoAlt}
              width={257}
              height={39}
              sizes="(max-width: 380px) 150px, (max-width: 768px) 170px, 225px"
              loading="eager"
              decoding="async"
              preload
            />
          </Link>

          <DesktopNavigation navigation={effectiveNav} />
        </div>

        <div className="header-btn shrink-0">
          <ButtonLink
            className="py-3.75 max-[1399px]:px-5 max-[1399px]:py-3.25 max-[1399px]:text-[14px] max-[1199px]:px-[14px]! max-[1199px]:py-[9px]! max-[1199px]:text-[13px]! max-[379px]:px-[10px]! max-[379px]:py-[8px]! max-[379px]:text-[10px]!"
            variant="primary"
            href={effectiveCtaHref}
          >
            {effectiveCtaLabel}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

export const Header = SiteHeader;
