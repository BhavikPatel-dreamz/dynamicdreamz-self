"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { primaryNavigation, type MegaMenuItem } from "@/data/navigation";
import { siteChromeCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";

function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      className={cn("h-2 w-[13px] transition-transform duration-300", open && "rotate-180")}
      aria-hidden="true"
      viewBox="0 0 10 6"
      width="10"
      height="6"
    >
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
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

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 15" width="18" height="15">
      <rect width="18" height="3" rx="1.5" fill="currentColor" />
      <rect y="6" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect y="12" width="18" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}

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

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const toggleButton = toggleRef.current;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setOpenGroup(null);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((element) => !element.closest("[inert]") && element.offsetParent !== null);
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

    function onResize() {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
        setOpenGroup(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      toggleButton?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    setOpenGroup(null);
  }

  return (
    <div className="hidden w-[30px] shrink-0 max-[1200px]:block lg:mr-0 mr-3">
      <button
        className="flex h-[30px] w-[30px] cursor-pointer items-center justify-start border-0 bg-transparent p-0 shrink-0"
        ref={toggleRef}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </button>

      <div
        className={cn(
          "fixed top-0 left-0 z-12 h-screen w-full -translate-x-full overflow-hidden bg-white px-5 pt-[30px] pb-[100px] outline-none transition-transform duration-800 [height:100dvh]",
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
              className="flex h-auto w-[225px] max-[768px]:w-[170px] max-[380px]:w-[150px]"
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
            {primaryNavigation.map((group) => {
              const isGroupOpen = openGroup === group.slug;
              const submenuId = `mobile-${group.slug}-menu`;

              return (
                <li className="border-b border-[#f0f0f0] py-6" key={group.slug}>
                  <button
                    className={cn(topLevelLinkClass, "cursor-pointer transition-colors", isGroupOpen && "text-[#ad5151]")}
                    type="button"
                    aria-expanded={isGroupOpen}
                    aria-controls={submenuId}
                    onClick={() => setOpenGroup(isGroupOpen ? null : group.slug)}
                  >
                    {group.label}
                    <ChevronIcon open={isGroupOpen} />
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
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              className="flex w-fit items-center gap-[11px] py-[9px] text-sm leading-none font-medium text-[#282828] hover:text-[#ad5151] focus-visible:text-[#ad5151]"
                              href={item.href}
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
                        ))}
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
              <Link className={topLevelLinkClass} href="/contact-us" onClick={closeMenu}>{siteChromeCopy.contactUs}</Link>
            </li>
            <li className="py-6">
              <a className="block text-xl leading-[normal] font-semibold text-[#d92128] underline" href={`mailto:${siteConfig.email}`} onClick={closeMenu}>{siteConfig.email}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
