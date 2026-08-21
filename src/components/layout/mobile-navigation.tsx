"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { primaryNavigation, type MegaMenuItem } from "@/data/navigation";
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
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
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
      <path d="M1.5 1.25 13.5 12.75M13.5 1.25 1.5 12.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function MobileItemIcon({ item }: { item: MegaMenuItem }) {
  return (
    <span className="mr-[13px] flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden="true">
      <Image className="h-auto max-h-full w-auto max-w-full object-contain" src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} />
    </span>
  );
}

const topLevelLinkClass =
  "flex w-full items-center justify-between border-0 bg-transparent p-0 pr-2 text-left text-lg leading-[normal] font-semibold text-ink";

export function MobileNavigation() {
  const pathname = usePathname();
  const normalizedPathname = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openServiceSection, setOpenServiceSection] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const toggleButton = toggleRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = [...panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )].filter((element) => !element.hasAttribute("inert") && element.offsetParent !== null);
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

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      toggleButton?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    setOpenGroup(null);
    setOpenServiceSection(null);
  }

  return (
    <div className="mr-3 hidden w-[30px] shrink-0 max-[991px]:block max-[767px]:mr-0">
      <button
        className="flex h-[30px] w-[30px] cursor-pointer items-center justify-start border-0 bg-transparent p-0"
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
          "fixed top-0 left-0 z-12 h-screen max-h-none w-full -translate-x-full overflow-visible bg-white px-5 pt-[30px] pb-[100px] transition-transform duration-800 [height:100dvh]",
          isOpen && "pointer-events-auto translate-x-0",
        )}
        id="mobile-navigation-panel"
        ref={panelRef}
        aria-hidden={!isOpen}
        inert={!isOpen}
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
          <button ref={closeRef} className="inline-flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-0 bg-transparent p-0" type="button" aria-label="Close menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

        <nav className="h-[calc(100%-40px)] overflow-auto overflow-x-hidden pt-[35px]" aria-label="Mobile navigation">
          <ul className="m-0 list-none p-0">
            {primaryNavigation.map((group) => {
              const isGroupOpen = openGroup === group.slug;
              const groupLinks = group.kind === "services"
                ? group.sections.flatMap((section) => section.links)
                : group.items;
              const isGroupActive = groupLinks.some(
                (link) => normalizedPathname === link.href.replace(/\/$/, ""),
              );
              const submenuId = `mobile-${group.slug}-menu`;
              return (
                <li className="py-2.5" key={group.slug}>
                  <button
                    className={cn(topLevelLinkClass, "cursor-pointer transition", (isGroupOpen || isGroupActive) && "text-brand-red!")}
                    type="button"
                    aria-expanded={isGroupOpen}
                    aria-controls={submenuId}
                    onClick={() => {
                      setOpenGroup(isGroupOpen ? null : group.slug);
                      setOpenServiceSection(null);
                    }}
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
                      {group.kind === "services" ? (
                        <div className="pt-1.5">
                          {group.sections.map((section, sectionIndex) => {
                            const isSectionOpen = openServiceSection === section.label;
                            const sectionId = `mobile-service-${section.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
                            return (
                              <section className={cn("border-b border-[#efefef]", sectionIndex === group.sections.length - 1 && "border-b-0")} key={section.label}>
                                <button
                                  className="flex min-h-12 w-full cursor-pointer items-center justify-between border-0 bg-transparent py-3 pr-2 text-left text-sm leading-[normal] font-medium text-ink"
                                  type="button"
                                  aria-expanded={isSectionOpen}
                                  aria-controls={sectionId}
                                  onClick={() => setOpenServiceSection(isSectionOpen ? null : section.label)}
                                >
                                  <span className="flex items-center">
                                    <Image className="mr-[13px] h-auto max-h-6 w-auto max-w-6 object-contain" src={section.icon.src} alt="" width={section.icon.width} height={section.icon.height} aria-hidden="true" />
                                    {section.label}
                                  </span>
                                  <ChevronIcon open={isSectionOpen} />
                                </button>
                                <div
                                  className={cn(
                                    "grid grid-rows-[0fr] transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.445,0.05,0.55,0.95)]",
                                    isSectionOpen && "grid-rows-[1fr]",
                                  )}
                                  id={sectionId}
                                  aria-hidden={!isSectionOpen}
                                  inert={!isSectionOpen}
                                >
                                  <ul className="overflow-hidden p-0">
                                    {section.links.map((link) => (
                                      <li className="border-t border-[#efefef]" key={link.href}>
                                        <Link className={cn("block py-3 text-sm leading-[normal] font-medium text-ink", normalizedPathname === link.href.replace(/\/$/, "") && "text-brand-red!")} href={link.href} onClick={closeMenu}>{link.label}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      ) : (
                        <ul className="pt-1.5">
                          {group.items.map((item, itemIndex) => (
                            <li className={cn("border-b border-[#efefef]", itemIndex === group.items.length - 1 && "border-b-0")} key={item.href}>
                              <Link className={cn("flex min-h-12 items-center py-3 pr-[25px] text-sm leading-[normal] font-medium text-ink", normalizedPathname === item.href.replace(/\/$/, "") && "text-brand-red!")} href={item.href} onClick={closeMenu}>
                                <MobileItemIcon item={item} />
                                <span>
                                  {item.label}
                                  {item.badge ? (
                                    <span className="ml-1.5 rounded bg-[#f5ebeb] px-1.5 py-px text-[10px] font-bold text-brand-red">{item.badge}</span>
                                  ) : null}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
            <li className="py-2.5">
              <Link className={topLevelLinkClass} href="/contact-us" onClick={closeMenu}>Contact us</Link>
            </li>
            <li className="py-2.5">
              <a className="block text-sm leading-[normal] font-semibold text-[#d92128] underline" href={`mailto:${siteConfig.email}`} onClick={closeMenu}>{siteConfig.email}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
