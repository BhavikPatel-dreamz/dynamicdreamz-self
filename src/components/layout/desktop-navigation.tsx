"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import {
  primaryNavigation,
  type MegaMenuItem,
  type PrimaryNavigationGroup,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MenuIcon({ item }: { item: MegaMenuItem }) {
  return (
    <span className="mr-[13px] flex h-[21px] w-[21px] shrink-0 items-center justify-center" aria-hidden="true">
      <Image
        className="h-auto max-h-full w-auto max-w-full object-contain transition-[filter] duration-300 group-hover/item:[filter:invert(43%)_sepia(28%)_saturate(997%)_hue-rotate(314deg)_brightness(87%)_contrast(91%)] group-focus-visible/item:[filter:invert(43%)_sepia(28%)_saturate(997%)_hue-rotate(314deg)_brightness(87%)_contrast(91%)]"
        src={item.icon.src}
        alt=""
        width={item.icon.width}
        height={item.icon.height}
      />
    </span>
  );
}

const itemGridClasses: Record<string, string> = {
  about: "grid-cols-2 auto-rows-[79.36px] gap-x-6 gap-y-[35px]",
  industries: "grid-cols-2 gap-x-11 gap-y-[23px] [&_a]:h-[23.36px] [&_a]:items-center [&_a]:whitespace-nowrap",
  work: "grid-cols-1 gap-[15px] [&_a]:min-h-[24.27px] [&_a]:items-center [&_a]:whitespace-nowrap [&_.menu-title]:text-sm [&_.menu-title]:font-medium [&_.menu-title]:leading-[23.27px] [&_.menu-title]:tracking-[-0.02em]",
  "white-label": "grid-cols-1 gap-[15px] [&_a]:min-h-[24.27px] [&_a]:items-center [&_a]:whitespace-nowrap [&_.menu-title]:text-sm [&_.menu-title]:font-medium [&_.menu-title]:leading-[23.27px] [&_.menu-title]:tracking-[-0.02em]",
};

function ItemMenu({
  group,
}: {
  group: Extract<PrimaryNavigationGroup, { kind: "featured" | "compact" }>;
}) {
  return (
    <ul className={cn("grid gap-x-6 gap-y-[35px]", itemGridClasses[group.slug])}>
      {group.items.map((item) => (
        <li key={item.href}>
          <Link className="group/item flex w-full" href={item.href}>
            <MenuIcon item={item} />
            <span className="block w-[calc(100%-34px)]">
              <span className="menu-title relative inline-block text-base leading-[22.36px] font-bold text-ink transition-colors duration-300 after:absolute after:right-0 after:bottom-[-5px] after:left-0 after:w-0 after:border-b-2 after:border-brand-red after:content-[''] after:transition-[width] after:duration-300 group-hover/item:text-brand-red group-hover/item:after:w-full group-focus-visible/item:text-brand-red group-focus-visible/item:after:w-full">
                {item.label}
              </span>
              {item.description ? (
                <span className="mt-2.5 block text-sm leading-[23px] font-normal tracking-[0.28px] text-muted">
                  {item.description}
                </span>
              ) : null}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServicesMenu({ group }: { group: Extract<PrimaryNavigationGroup, { kind: "services" }> }) {
  return (
    <div className="flex h-full items-stretch gap-[30px]">
      <div className="min-h-[525px] w-[344px] shrink-0 rounded-[10px] bg-[linear-gradient(100.88deg,#15c064_7.75%,#00d1ff_138.55%)] pt-[38px] pr-7 pb-6 pl-[21px] max-[1199px]:w-80 max-[1199px]:basis-80 max-[1199px]:p-5">
        <p className="mb-6 border-b-[1.27px] border-white/25 pb-6 text-2xl leading-[30.96px] font-bold text-white">
          {group.introduction.title}
        </p>
        <ul className="flex w-full justify-between" aria-label="Company statistics">
          {group.introduction.stats.map((stat) => (
            <li className="block" key={stat.label}>
              <span className="mb-1 block text-[10px] leading-[11.5px] font-bold text-white/63 uppercase">
                {stat.label}
              </span>
              <strong className="text-[25.39px] leading-[31.86px] font-bold text-white">{stat.value}</strong>
            </li>
          ))}
        </ul>
        <p className="my-5 mb-9 text-sm leading-[25.2px] font-medium text-white">
          {group.introduction.description}
        </p>
        <ButtonLink
          className="min-h-[49px] px-6 py-[15px] text-base focus-visible:text-white [&:focus-visible>span:nth-child(2)]:translate-x-full"
          variant="light"
          href={siteConfig.quotePath}
        >
          Get a quote
        </ButtonLink>
      </div>

      <div className="flex w-[calc(100%-374px)] flex-wrap content-start gap-x-[30px] gap-y-10 max-[1199px]:w-[calc(100%-345px)] max-[1199px]:gap-x-5 max-[1199px]:gap-y-5">
        {group.sections.map((section) => (
          <section className="w-[calc(50%-15px)] max-[1199px]:w-[calc(50%-10px)]" key={section.label}>
            <div className="flex items-center text-base leading-[22.36px] font-bold text-ink">
              <Image
                className="mr-[13px] h-auto max-h-[26px] w-auto max-w-[26px]"
                src={section.icon.src}
                alt=""
                width={section.icon.width}
                height={section.icon.height}
                aria-hidden="true"
              />
              <span>{section.label}</span>
            </div>
            <ul className="mt-3 ml-[39px] block border-t border-[#efefef] pt-[15px]">
              {section.links.map((link, index) => (
                <li className={cn("leading-[normal]", index > 0 && "mt-2.5")} key={link.href}>
                  <Link
                    className="text-sm leading-[23.27px] font-medium tracking-[-0.02em] text-ink hover:text-brand-red focus-visible:text-brand-red"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

const menuPositionClasses: Record<string, string> = {
  about: "left-5 w-[680px]",
  services:
    "left-5 h-[639.1875px] w-[1070px] px-[33px] py-14 max-[1199px]:h-auto max-[1199px]:w-[calc(100%-40px)] max-[1199px]:p-6 min-[992px]:max-[1199px]:h-[648.25px]",
  industries:
    "left-[calc(52%-0.8px)] w-[520px] -translate-x-1/2 min-[1440px]:left-[calc(44%+2.4px)]",
  work: "right-[calc(35%+6px)] left-auto w-[163px] min-[1440px]:right-[calc(42%+3.2px)]",
  "white-label":
    "right-[calc(19%+12.4px)] left-auto w-[331px] min-[1440px]:right-[calc(27.2%+9.1px)]",
};

const pointerClasses: Record<string, string> = {
  about: "left-[48.5%]",
  services: "left-[41.5%]",
  industries: "left-[38%] min-[1440px]:left-[46%]",
  work: "left-1/2 -translate-x-1/2 rotate-45",
  "white-label": "left-1/2 -translate-x-1/2 rotate-45",
};

export function DesktopNavigation() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenGroup(null);
    }

    function closeOutside(event: PointerEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) setOpenGroup(null);
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, []);

  return (
    <nav
      className="nav-menu mr-auto ml-10 min-[1440px]:ml-17 hidden shrink-0 min-[992px]:block max-[1199px]:ml-5 min-[1440px]:[body:has(main[data-page=home])_&]:ml-[68px]"
      aria-label="Primary navigation"
      ref={navigationRef}
    >
      <ul className="flex list-none items-center p-0">
        {primaryNavigation.map((group) => {
          const isOpen = openGroup === group.slug;
          const menuId = `desktop-${group.slug}-menu`;
          const groupLinks = group.kind === "services"
            ? group.sections.flatMap((section) => section.links)
            : group.items;
          const isActive = groupLinks.some(
            (link) => normalizedPathname === link.href.replace(/\/$/, ""),
          );

          return (
            <li
              className="group/desktop-nav static py-9 pr-[30px] max-[1199px]:pr-3.5"
              data-active={isActive}
              data-open={isOpen}
              key={group.slug}
              onMouseEnter={() => setOpenGroup(group.slug)}
              onMouseLeave={() => setOpenGroup(null)}
              onFocus={() => setOpenGroup(group.slug)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setOpenGroup(null);
              }}
            >
              <button
                className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-base leading-[normal] font-medium whitespace-nowrap text-[#252c15] hover:text-brand-red group-data-[active=true]/desktop-nav:text-brand-red group-data-[open=true]/desktop-nav:text-brand-red max-[1199px]:text-sm [&_svg]:transition-transform [&_svg]:duration-300 group-data-[open=true]/desktop-nav:[&_svg]:rotate-180"
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={menuId}
                onClick={() => setOpenGroup(isOpen ? null : group.slug)}
              >
                {group.label}
                <ChevronIcon />
              </button>
              <div
                className={cn(
                  "pointer-events-none invisible absolute top-full z-[9] rounded-[5px] border border-black/10 bg-white p-[30px] opacity-0 transition-all duration-300 group-data-[open=true]/desktop-nav:pointer-events-auto group-data-[open=true]/desktop-nav:visible group-data-[open=true]/desktop-nav:opacity-100",
                  menuPositionClasses[group.slug],
                )}
                id={menuId}
                aria-hidden={!isOpen}
                inert={!isOpen}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -top-2 h-4 w-4 rotate-45 border-t border-l border-black/10 bg-white",
                    pointerClasses[group.slug],
                  )}
                />
                {group.kind === "services" ? <ServicesMenu group={group} /> : <ItemMenu group={group} />}
              </div>
            </li>
          );
        })}
        <li className="static py-9 pr-0">
          <Link
            className={cn(
              "flex items-center text-base leading-[normal] font-medium whitespace-nowrap text-[#252c15] hover:text-brand-red max-[1199px]:text-sm",
              normalizedPathname === "/contact-us" && "text-brand-red",
            )}
            href="/contact-us"
            aria-current={normalizedPathname === "/contact-us" ? "page" : undefined}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
