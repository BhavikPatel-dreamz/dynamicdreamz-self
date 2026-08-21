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
        className="h-auto max-h-full w-auto max-w-full object-contain"
        src={item.icon.src}
        alt=""
        width={item.icon.width}
        height={item.icon.height}
      />
    </span>
  );
}

const itemGridClasses: Record<string, string> = {
  about: "grid-cols-2 gap-x-2 gap-y-0",
  industries: "grid-cols-3 gap-x-2 gap-y-0",
  work: "grid-cols-2 gap-x-2 gap-y-0",
  "white-label": "grid-cols-1 gap-[15px] [&_a]:min-h-[24.27px] [&_a]:items-center [&_a]:whitespace-nowrap [&_.menu-title]:text-sm [&_.menu-title]:font-medium [&_.menu-title]:leading-[23.27px] [&_.menu-title]:tracking-[-0.02em]",
  "agency-partnerships": "grid-cols-1 gap-y-0",
  technology: "grid-cols-2 gap-x-2 gap-y-0",
};

function ItemMenu({
  group,
}: {
  group: Extract<PrimaryNavigationGroup, { kind: "featured" | "compact" }>;
}) {
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  return (
    <ul className={cn("grid", itemGridClasses[group.slug])}>
      {group.items.map((item) => (
        <li key={item.href}>
          <Link className="group/item flex w-full rounded-[11px] px-3 py-2 transition-colors duration-150 hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9]" href={item.href}>
            <MenuIcon item={item} />
            <span className="block w-[calc(100%-34px)]">
              <span
                className={cn(
                  "menu-title relative inline-block text-sm leading-[100%] font-bold text-ink transition-colors duration-300 group-hover/item:text-brand-red group-focus-visible/item:text-brand-red",
                  normalizedPathname === item.href.replace(/\/$/, "") && "text-brand-red!",
                )}
              >
                {item.label}
                {item.badge ? (
                  <span className="ml-1.5 inline-block rounded bg-[#f5ebeb] px-1.5 py-px align-middle text-[11px] leading-[16px] font-bold tracking-[0.24px] text-brand-red">
                    {item.badge}
                  </span>
                ) : null}
              </span>
              {item.description ? (
                <span className="mt-[5px] block whitespace-nowrap text-xs leading-[19.8px] font-normal text-muted">
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
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const links = group.sections.flatMap((section) =>
    section.links.map((link) => ({ ...link, icon: link.icon ?? section.icon })),
  );

  return (
    <div>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-0">
        {links.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link className="group/item flex min-h-[62px] rounded-[11px] px-3 py-2 transition-colors duration-150 hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9]" href={item.href}>
              <MenuIcon item={item} />
              <span className="block pt-px">
                <strong className={cn("block text-sm leading-[100%] font-bold text-ink", normalizedPathname === item.href.replace(/\/$/, "") && "text-brand-red!")}>{item.label}</strong>
                <span className="mt-[5px] block whitespace-nowrap text-xs leading-[19.8px] font-normal text-muted">{item.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex min-h-[48px] items-center justify-between border-t border-[#d9d9d9] pt-3">
        <p className="m-0 text-xs leading-5 font-normal text-muted"><strong className="font-bold text-ink">Shopify Platinum Partner</strong> · 20+ Years · 150+ Experts · 5,000+ Projects</p>
        <Link className="group flex items-center gap-3 text-xs font-bold text-ink uppercase hover:text-brand-red focus-visible:text-brand-red" href={siteConfig.quotePath}>
          Discuss a Project <span className="text-xl leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

const menuPositionClasses: Record<string, string> = {
  about: "right-[150px] left-auto w-[645px] max-[1399px]:w-[540px]",
  services:
    "left-1/2 w-[1054px] -translate-x-1/2",
  industries:
    "left-1/2 w-[652px] -translate-x-1/2",
  work: "right-[260px] left-auto w-[666px]",
  "white-label":
    "right-[calc(19%+12.4px)] left-auto w-[331px] min-[1440px]:right-[calc(27.2%+9.1px)]",
  "agency-partnerships": "left-[250px] w-[390px]",
  technology: "left-1/2 w-[760px] -translate-x-1/2",
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
      className="nav-menu mr-auto ml-10 hidden shrink-0 min-[992px]:block max-[1199px]:ml-5"
      aria-label="Primary navigation"
      ref={navigationRef}
    >
      <ul className="flex list-none items-center p-0">
        {primaryNavigation.map((group) => {
          const isOpen = openGroup === group.slug;
          const menuId = `desktop-${group.slug}-menu`;
          return (
            <li
              className="group/desktop-nav static py-9 pr-6 max-[1399px]:pr-4"
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
                className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-sm leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-brand-red group-data-[open=true]/desktop-nav:text-brand-red max-[1399px]:text-[13px] max-[1199px]:text-sm [&_svg]:transition-transform [&_svg]:duration-300 group-data-[open=true]/desktop-nav:[&_svg]:rotate-180"
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
                  "pointer-events-none invisible absolute top-full z-[9] rounded-[20px] border border-black/10 bg-white p-5 opacity-0 shadow-[0_18px_48px_rgb(0_0_0/10%)] transition-all duration-300 group-data-[open=true]/desktop-nav:pointer-events-auto group-data-[open=true]/desktop-nav:visible group-data-[open=true]/desktop-nav:opacity-100 max-[1399px]:p-2.5",
                  menuPositionClasses[group.slug],
                )}
                id={menuId}
                aria-hidden={!isOpen}
                inert={!isOpen}
              >
                {group.kind === "services" ? <ServicesMenu group={group} /> : <ItemMenu group={group} />}
              </div>
            </li>
          );
        })}
        <li className="static py-9 pr-0">
          <Link
            className={cn(
              "flex items-center text-sm leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-brand-red max-[1399px]:text-[13px] max-[1199px]:text-sm",
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
