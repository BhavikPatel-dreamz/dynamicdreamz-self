"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import {
  primaryNavigation,
  type MegaMenuItem,
  type PrimaryNavigationGroup,
} from "@/data/navigation";
import { siteChromeCopy } from "@/content/common";
import { cn } from "@/lib/class-names";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 12" width="16" height="12">
      <path
        d="M15.53 6.054a.75.75 0 0 0 0-1.061L10.757.22a.75.75 0 1 0-1.06 1.061l4.242 4.242-4.242 4.243a.75.75 0 0 0 1.06 1.06l4.773-4.772ZM0 6.273h15v-1.5H0v1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ item }: { item: MegaMenuItem }) {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
      <Image
        className="h-full w-full object-contain"
        src={item.icon.src}
        alt=""
        width={item.icon.width}
        height={item.icon.height}
      />
    </span>
  );
}

function MenuCopy({ item }: { item: MegaMenuItem }) {
  return (
    <span className="block min-w-0">
      <strong className="flex items-center text-sm leading-none font-bold text-[#282828]">
        {item.label}
        {item.badge ? (
          <span className="ml-1.5 rounded-sm bg-[#f5ebeb] px-1.5 py-px text-[11px] leading-[146.2%] font-bold tracking-[0.24px] text-[#ad5151]">
            {item.badge}
          </span>
        ) : null}
      </strong>
      <span className="mt-[5px] block text-xs leading-[19.8px] font-normal text-[#535353]">
        {item.description}
      </span>
    </span>
  );
}

function MenuItem({ item, work = false }: { item: MegaMenuItem; work?: boolean }) {
  if (work) {
    return (
      <li>
        <Link
          className="group/item flex h-full min-h-[172px] flex-col rounded-[15px] border border-[#f0f0f0] p-5 transition-colors duration-150 hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9]"
          href={item.href}
        >
          <MenuIcon item={item} />
          <span className="mt-[15px] block">
            <MenuCopy item={item} />
          </span>
          <span className="mt-2.5 inline-flex items-center text-xs leading-[166.182%] font-bold tracking-[-0.24px] text-[#ad5151] uppercase transition-colors duration-300 group-hover/item:text-[#282828] group-focus-visible/item:text-[#282828]">
            {item.ctaLabel}
            <span className="ml-[5px]"><ArrowIcon /></span>
          </span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        className="flex min-h-16 items-start gap-[11px] rounded-[11px] px-3 py-2 transition-colors duration-[160ms] hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9] min-[1200px]:max-[1400px]:p-2.5"
        href={item.href}
      >
        <MenuIcon item={item} />
        <MenuCopy item={item} />
      </Link>
    </li>
  );
}

const panelWidthClasses: Record<string, string> = {
  "shopify-solutions": "w-[1054px]",
  "agency-partnerships": "w-[390px]",
  technology: "w-[760px]",
  industries: "w-[652px]",
  work: "w-[666px]",
  about: "w-[645px] min-[1200px]:max-[1400px]:w-[540px]",
};

const gridColumnClasses: Record<PrimaryNavigationGroup["columns"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function MenuPanel({ group }: { group: PrimaryNavigationGroup }) {
  const isWorkMenu = group.variant === "work";

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-[9] -translate-x-1/2 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_48px_rgb(0_0_0/10%)] min-[1200px]:max-[1400px]:p-2.5",
        panelWidthClasses[group.slug],
      )}
    >
      <ul className={cn("grid gap-x-2", gridColumnClasses[group.columns])}>
        {group.items.map((item) => (
          <MenuItem item={item} key={item.label} work={isWorkMenu} />
        ))}
      </ul>

      {group.promo ? (
        <div className="mt-3 flex items-center justify-between gap-3.5 border-t border-black/12 pt-[15px] text-xs leading-[166.182%] tracking-[-0.24px] text-[#282828]">
          <p>
            <strong className="font-bold">{group.promo.title}</strong>
            <span className="font-normal"> · {group.promo.details}</span>
          </p>
          <Link
            className="inline-flex shrink-0 items-center font-bold uppercase hover:text-[#ad5151] focus-visible:text-[#ad5151]"
            href={group.promo.ctaHref}
          >
            {group.promo.ctaLabel}
            <span className="ml-[5px]"><ArrowIcon /></span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function DesktopNavigation() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      const openItem = navigationRef.current?.querySelector<HTMLElement>('[data-open="true"]');
      setOpenGroup(null);
      openItem?.querySelector<HTMLButtonElement>("button")?.focus();
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
      className="ml-5 hidden shrink-0 min-[1200px]:block min-[1400px]:ml-[43px]"
      aria-label="Primary navigation"
      ref={navigationRef}
    >
      <ul className="flex list-none items-center p-0">
        {primaryNavigation.map((group, index) => {
          const isOpen = openGroup === group.slug;
          const menuId = `desktop-${group.slug}-menu`;
          const isActive = group.items.some(
            (item) => normalizedPathname === item.href.replace(/\/$/, ""),
          );

          return (
            <li
              className={cn(
                "group/desktop-nav relative py-9 pr-4 min-[1400px]:pr-6",
                index === 0 && "static",
              )}
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
                className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-[13px] leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-[#ad5151] group-data-[active=true]/desktop-nav:text-[#ad5151] group-data-[open=true]/desktop-nav:text-[#ad5151] min-[1400px]:text-sm [&_svg]:transition-transform [&_svg]:duration-300 group-data-[open=true]/desktop-nav:[&_svg]:rotate-180"
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-controls={menuId}
                onClick={() => setOpenGroup(isOpen ? null : group.slug)}
              >
                {group.label}
                <ChevronIcon />
              </button>

              <div id={menuId} aria-hidden={!isOpen} inert={!isOpen} className={cn(!isOpen && "hidden")}>
                <MenuPanel group={group} />
              </div>
            </li>
          );
        })}
        <li className="py-9">
          <Link
            className={cn(
              "flex items-center text-[13px] leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-[#ad5151] min-[1400px]:text-sm",
              normalizedPathname === "/contact-us" && "text-[#ad5151]",
            )}
            href="/contact-us"
            aria-current={normalizedPathname === "/contact-us" ? "page" : undefined}
          >
            {siteChromeCopy.contactUs}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
