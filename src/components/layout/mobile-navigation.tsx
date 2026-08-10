"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { primaryNavigation, type MegaMenuItem } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
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
    <span className="mobile-nav-item-icon" aria-hidden="true">
      <Image src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} />
    </span>
  );
}

export function MobileNavigation() {
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
    document.body.classList.add("mobile-menu-open");
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
      document.body.classList.remove("mobile-menu-open");
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
    <div className="mobile-navigation">
      <button
        className="menu-toggle"
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
        className={`mobile-navigation-panel${isOpen ? " is-open" : ""}`}
        id="mobile-navigation-panel"
        ref={panelRef}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="mobile-navigation-header">
          <Link href="/" aria-label="Dynamic Dreamz home" onClick={closeMenu}>
            <Image
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={225}
              height={38}
            />
          </Link>
          <button ref={closeRef} className="close-menu" type="button" aria-label="Close menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="mobile-navigation-list">
            {primaryNavigation.map((group) => {
              const isGroupOpen = openGroup === group.slug;
              const submenuId = `mobile-${group.slug}-menu`;
              return (
                <li className="mobile-nav-group" data-open={isGroupOpen} key={group.slug}>
                  <button
                    className="mobile-nav-group-trigger"
                    type="button"
                    aria-expanded={isGroupOpen}
                    aria-controls={submenuId}
                    onClick={() => {
                      setOpenGroup(isGroupOpen ? null : group.slug);
                      setOpenServiceSection(null);
                    }}
                  >
                    {group.label}
                    <ChevronIcon />
                  </button>
                  <div
                    className="mobile-nav-submenu"
                    id={submenuId}
                    aria-hidden={!isGroupOpen}
                    inert={!isGroupOpen}
                  >
                    <div>
                      {group.kind === "services" ? (
                        <div className="mobile-service-sections">
                          {group.sections.map((section) => {
                            const isSectionOpen = openServiceSection === section.label;
                            const sectionId = `mobile-service-${section.label.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`;
                            return (
                              <section className="mobile-service-section" data-open={isSectionOpen} key={section.label}>
                                <button
                                  type="button"
                                  aria-expanded={isSectionOpen}
                                  aria-controls={sectionId}
                                  onClick={() => setOpenServiceSection(isSectionOpen ? null : section.label)}
                                >
                                  <span>
                                    <Image src={section.icon.src} alt="" width={section.icon.width} height={section.icon.height} aria-hidden="true" />
                                    {section.label}
                                  </span>
                                  <ChevronIcon />
                                </button>
                                <div className="mobile-service-links" id={sectionId} aria-hidden={!isSectionOpen} inert={!isSectionOpen}>
                                  <ul>
                                    {section.links.map((link) => (
                                      <li key={link.href}>
                                        <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </section>
                            );
                          })}
                        </div>
                      ) : (
                        <ul className="mobile-nav-item-list">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} onClick={closeMenu}>
                                <MobileItemIcon item={item} />
                                <span>{item.label}</span>
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
            <li className="mobile-nav-contact">
              <Link href="/contact-us/" onClick={closeMenu}>Contact us</Link>
            </li>
            <li className="mobile-nav-email">
              <a href={`mailto:${siteConfig.email}`} onClick={closeMenu}>{siteConfig.email}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
