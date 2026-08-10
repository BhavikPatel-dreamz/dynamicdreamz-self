"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { primaryNavigation } from "@/data/navigation";
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

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.body.classList.add("mobile-menu-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="mobile-navigation">
      <button
        className="menu-toggle"
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
          <button className="close-menu" type="button" aria-label="Close menu" onClick={closeMenu}>
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul className="mobile-navigation-list">
            {primaryNavigation.map((group) => (
              <li key={group.label}>
                <details>
                  <summary>
                    {group.label}
                    <ChevronIcon />
                  </summary>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} onClick={closeMenu}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li>
              <Link href="/contact-us/" onClick={closeMenu}>Contact us</Link>
            </li>
          </ul>
          <Link className="button button-primary mobile-quote-button" href={siteConfig.quotePath} onClick={closeMenu}>
            Get a quote
          </Link>
        </nav>
      </div>
    </div>
  );
}
