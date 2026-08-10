"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  primaryNavigation,
  type MegaMenuItem,
  type PrimaryNavigationGroup,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 6" width="10" height="6">
      <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MenuIcon({ item }: { item: MegaMenuItem }) {
  return (
    <span className="nav-menu-item-icon" aria-hidden="true">
      <Image
        src={item.icon.src}
        alt=""
        width={item.icon.width}
        height={item.icon.height}
      />
    </span>
  );
}

function ItemMenu({ group }: { group: Extract<PrimaryNavigationGroup, { kind: "featured" | "compact" }> }) {
  return (
    <ul className="nav-item-grid">
      {group.items.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>
            <MenuIcon item={item} />
            <span className="nav-menu-item-copy">
              <span className="nav-menu-item-title">{item.label}</span>
              {item.description ? <span className="nav-menu-item-description">{item.description}</span> : null}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ServicesMenu({ group }: { group: Extract<PrimaryNavigationGroup, { kind: "services" }> }) {
  return (
    <div className="services-menu-layout">
      <div className="services-menu-introduction">
        <p className="services-menu-title">{group.introduction.title}</p>
        <ul className="services-menu-stats" aria-label="Company statistics">
          {group.introduction.stats.map((stat) => (
            <li key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </li>
          ))}
        </ul>
        <p className="services-menu-description">{group.introduction.description}</p>
        <Link className="button services-menu-quote" href={siteConfig.quotePath}>
          Get a quote
        </Link>
      </div>

      <div className="services-menu-sections">
        {group.sections.map((section) => (
          <section className="services-menu-section" key={section.label}>
            <div className="services-menu-section-title">
              <Image
                src={section.icon.src}
                alt=""
                width={section.icon.width}
                height={section.icon.height}
                aria-hidden="true"
              />
              <span>{section.label}</span>
            </div>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export function DesktopNavigation() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navigationRef = useRef<HTMLElement>(null);

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
    <nav className="desktop-navigation" aria-label="Primary navigation" ref={navigationRef}>
      <ul className="desktop-navigation-list">
        {primaryNavigation.map((group) => {
          const isOpen = openGroup === group.slug;
          const menuId = `desktop-${group.slug}-menu`;

          return (
            <li
              className={`desktop-nav-group desktop-nav-${group.slug}`}
              data-desktop-nav-group
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
                className="desktop-nav-trigger"
                data-desktop-nav-trigger
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
                className={`nav-mega-menu nav-mega-menu-${group.kind}`}
                id={menuId}
                aria-hidden={!isOpen}
                inert={!isOpen}
              >
                {group.kind === "services" ? <ServicesMenu group={group} /> : <ItemMenu group={group} />}
              </div>
            </li>
          );
        })}
        <li className="desktop-nav-contact">
          <Link href="/contact-us/">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
