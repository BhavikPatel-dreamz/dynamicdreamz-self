"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  primaryNavigation,
  type MegaMenuItem,
  type PrimaryNavigationGroup,
} from "@/data/navigation";
import { siteChromeCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import { isNavigationLinkActive } from "./FooterMenuItem";

function ChevronIcon({ open = false }: { open?: boolean } = {}) {
  return (
    <svg
      className={cn("transition-transform duration-300", open && "rotate-180")}
      aria-hidden="true"
      viewBox="0 0 10 6"
      width="8"
      height="8"
    >
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const MobileChevronIcon = ChevronIcon;

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

function HamburgerIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 15" width="18" height="15">
      <rect width="18" height="3" rx="1.5" fill="currentColor" />
      <rect y="6" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect y="12" width="18" height="3" rx="1.5" fill="currentColor" />
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
        sizes="20px"
      />
    </span>
  );
}

function MenuCopy({ item, active = false }: { item: MegaMenuItem; active?: boolean }) {
  return (
    <span className={cn("menu-copy block min-w-0", active && "active")}>
      <strong
        className={cn(
          "flex items-center text-sm leading-none font-bold text-[#282828] transition-colors duration-150",
          active && "text-[#ad5151]",
        )}
      >
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

function MenuItem({
  item,
  work = false,
  pathname,
}: {
  item: MegaMenuItem;
  work?: boolean;
  pathname?: string;
}) {
  const isItemActive = pathname ? isNavigationLinkActive(item.href, pathname) : false;

  if (work) {
    return (
      <li>
        <Link
          className={cn(
            "group/item flex h-full min-h-[172px] flex-col rounded-[15px] border border-[#f0f0f0] p-5 transition-colors duration-150 hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9]"
          )}
          href={item.href}
          aria-current={isItemActive ? "page" : undefined}
        >
          <MenuIcon item={item} />
          <span className="mt-[15px] block">
            <MenuCopy item={item} active={isItemActive} />
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
        className={cn(
          "flex min-h-16 items-start gap-[11px] rounded-[11px] px-3 py-2 transition-colors duration-[160ms] hover:bg-[#f7f4e9] focus-visible:bg-[#f7f4e9] min-[1200px]:max-[1400px]:p-2.5"
        )}
        href={item.href}
        aria-current={isItemActive ? "page" : undefined}
      >
        <MenuIcon item={item} />
        <MenuCopy item={item} active={isItemActive} />
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

function MenuPanel({ group, pathname }: { group: PrimaryNavigationGroup; pathname?: string }) {
  const isWorkMenu = group.variant === "work";

  return (
    <div
      className={cn(
        "absolute top-full left-1/2 z-[9] -translate-x-1/2 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_48px_rgb(0_0_0/10%)] min-[1200px]:max-[1400px]:p-2.5",
        panelWidthClasses[group.slug] || "w-[650px]",
      )}
    >
      <ul className={cn("grid gap-x-2", gridColumnClasses[group.columns])}>
        {group.items.map((item) => (
          <MenuItem item={item} key={item.label} pathname={pathname} work={isWorkMenu} />
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

export interface DesktopNavigationProps {
  navigation?: PrimaryNavigationGroup[];
}

export function DesktopNavigation({ navigation }: DesktopNavigationProps = {}) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const groups = navigation && navigation.length > 0 ? navigation : primaryNavigation;

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
        {groups.map((group, index) => {
          const isOpen = openGroup === group.slug;
          const menuId = `desktop-${group.slug}-menu`;

          return (
            <li
              className={cn(
                "group/desktop-nav relative py-9 pr-4 min-[1400px]:pr-6",
                index === 0 && "static",
              )}
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
                className="flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-montserrat text-[13px] leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-[#ad5151] group-data-[open=true]/desktop-nav:text-[#ad5151] min-[1400px]:text-sm [&_svg]:transition-transform [&_svg]:duration-300 group-data-[open=true]/desktop-nav:[&_svg]:rotate-180"
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
                id={menuId}
                aria-hidden={isMounted && !isOpen ? true : undefined}
                inert={isMounted && !isOpen ? true : undefined}
                className={cn(!isOpen && "hidden")}
              >
                <MenuPanel group={group} pathname={normalizedPathname} />
              </div>
            </li>
          );
        })}
        <li className="py-9">
          <Link
            className={cn(
              "flex items-center font-montserrat text-[13px] leading-[normal] font-medium whitespace-nowrap text-[#282828] hover:text-[#ad5151] min-[1400px]:text-sm",
              isNavigationLinkActive(siteConfig.contactPath, normalizedPathname) && "text-[#ad5151]",
            )}
            href={siteConfig.contactPath}
            aria-current={isNavigationLinkActive(siteConfig.contactPath, normalizedPathname) ? "page" : undefined}
          >
            {siteChromeCopy.contactUs}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// ── Mobile Navigation ──
function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 15 14" width="15" height="14">
      <path d="m1.68 12.192 11.55-11.421M1.644 1.523l11.618 11.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function MobileItemIcon({ item }: { item: MegaMenuItem }) {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
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

const topLevelLinkClass =
  "flex w-full items-center justify-between border-0 bg-transparent p-0 pr-2 text-left text-xl leading-[normal] font-semibold text-[#282828]";

export interface MobileNavigationProps {
  navigation?: PrimaryNavigationGroup[];
  contactEmail?: string;
}

export function MobileNavigation({ navigation, contactEmail }: MobileNavigationProps = {}) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const groups = navigation && navigation.length > 0 ? navigation : primaryNavigation;
  const email = contactEmail || siteConfig.email;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const toggleButton = toggleRef.current;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => panelRef.current?.focus());

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenGroup(null);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((element) => !element.closest("[inert]"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onResize(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
        setOpenGroup(null);
      }
    }

    const desktopQuery = window.matchMedia("(min-width: 1200px)");
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onResize);
      window.cancelAnimationFrame(focusFrame);
      toggleButton?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    setOpenGroup(null);
  }

  return (
    <div className="hidden w-[30px] shrink-0 max-[1199px]:block mr-3 max-[767px]:mr-0">
      <button
        className="flex h-[30px] w-[30px] cursor-pointer items-center justify-start border-0 bg-transparent p-0 shrink-0"
        ref={toggleRef}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen(true)}
      >
        <HamburgerIcon />
      </button>

      {isMounted && (
        <div
          className={cn(
          "fixed top-0 left-0 z-[999] h-screen w-full -translate-x-full overflow-hidden bg-white px-5 pt-[30px] pb-[100px] outline-none transition-transform duration-800 [height:100dvh]",
          isOpen && "pointer-events-auto translate-x-0",
        )}
        id="mobile-navigation-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        tabIndex={-1}
      >
        <div className="flex min-h-[30px] items-center justify-between pb-2.5">
          <Link href="/" aria-label="Dynamic Dreamz home" onClick={closeMenu}>
            <Image
              className="flex h-auto w-[225px] max-[767px]:w-[170px] max-[379px]:w-[150px]"
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={257}
              height={39}
            />
          </Link>
          <button
            ref={closeRef}
            className="inline-flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-0 bg-transparent p-0"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden pt-[15px]" aria-label="Mobile navigation">
          <ul className="m-0 list-none p-0">
            {groups.map((group) => {
              const isGroupOpen = openGroup === group.slug;
              const submenuId = `mobile-${group.slug}-menu`;

              return (
                <li className="border-b border-[#f0f0f0] py-6" key={group.slug}>
                  <button
                    className={cn(
                      topLevelLinkClass,
                      "cursor-pointer transition-colors",
                      isGroupOpen && "text-[#ad5151]",
                    )}
                    type="button"
                    aria-expanded={isGroupOpen}
                    aria-controls={submenuId}
                    onClick={() => setOpenGroup(isGroupOpen ? null : group.slug)}
                  >
                    {group.label}
                    <MobileChevronIcon open={isGroupOpen} />
                  </button>

                  <div
                    className={cn(
                      "grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]",
                      isGroupOpen && "grid-rows-[1fr]",
                    )}
                    id={submenuId}
                    aria-hidden={!isGroupOpen}
                    inert={!isGroupOpen}
                  >
                    <div className="overflow-hidden">
                      <ul className="pt-2.5">
                        {group.items.map((item) => {
                          const isItemActive = isNavigationLinkActive(item.href, normalizedPathname);
                          return (
                            <li key={item.label}>
                              <Link
                                className={cn(
                                  "flex w-fit items-center gap-[11px] py-[9px] text-sm leading-none font-medium text-[#282828] hover:text-[#ad5151] focus-visible:text-[#ad5151]",
                                  isItemActive && "text-[#ad5151] font-semibold",
                                )}
                                href={item.href}
                                aria-current={isItemActive ? "page" : undefined}
                                onClick={closeMenu}
                              >
                                <MobileItemIcon item={item} />
                                <span>{item.label}</span>
                                {item.badge ? (
                                  <span className="rounded-sm bg-[#f5ebeb] px-1.5 py-px text-[11px] leading-[146.2%] font-bold tracking-[0.24px] text-[#ad5151]">
                                    {item.badge}
                                  </span>
                                ) : null}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      {group.promo ? (
                        <div className="mt-2.5 flex flex-col items-start gap-2.5 border-t border-black/12 pt-2.5 text-xs leading-[166.182%] tracking-[-0.24px] text-[#282828]">
                          <p>
                            <strong className="font-bold">{group.promo.title}</strong>
                            <span> · {group.promo.details}</span>
                          </p>
                          <Link
                            className="inline-flex items-center font-bold uppercase hover:text-[#ad5151] focus-visible:text-[#ad5151]"
                            href={group.promo.ctaHref}
                            onClick={closeMenu}
                          >
                            {group.promo.ctaLabel}
                            <span className="ml-[5px]"><ArrowIcon /></span>
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}

            <li className="border-b border-[#f0f0f0] py-6">
              <Link
                className={cn(
                  topLevelLinkClass,
                  isNavigationLinkActive(siteConfig.contactPath, normalizedPathname) && "text-[#ad5151]",
                )}
                href={siteConfig.contactPath}
                aria-current={isNavigationLinkActive(siteConfig.contactPath, normalizedPathname) ? "page" : undefined}
                onClick={closeMenu}
              >
                {siteChromeCopy.contactUs}
              </Link>
            </li>
            <li className="py-6">
              <a className="block text-sm leading-[normal] font-semibold text-[#d92128] underline" href={`mailto:${email}`} onClick={closeMenu}>{email}</a>
            </li>
          </ul>
        </nav>
      </div>
      )}
    </div>
  );
}


export const MegaMenuClient = DesktopNavigation;
export const MobileMenuClient = MobileNavigation;
