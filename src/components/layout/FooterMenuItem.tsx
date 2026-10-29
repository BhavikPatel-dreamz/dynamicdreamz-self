"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/class-names";

export function isNavigationLinkActive(href: string, pathname: string): boolean {
  if (!pathname || !href) return false;
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const cleanHref = href === "/" ? "/" : href.replace(/\/$/, "");

  if (cleanHref === "/") {
    return cleanPath === "/";
  }

  if (cleanPath === cleanHref) {
    return true;
  }

  if (
    (cleanHref === "/blogs" || cleanHref === "/case-studies") &&
    cleanPath.startsWith(`${cleanHref}/`)
  ) {
    return true;
  }

  return false;
}

export const isFooterLinkActive = isNavigationLinkActive;

export interface FooterMenuItemProps {
  href: string;
  label: string;
  className?: string;
  isMobile?: boolean;
}

export function FooterMenuItem({
  href,
  label,
  className,
  isMobile = false,
}: FooterMenuItemProps) {
  const pathname = usePathname();
  const isActive = isFooterLinkActive(href, pathname);

  return (
    <li className={cn(className, isActive && "current-menu-item")}>
      <Link
        className={cn(
          "capitalize transition-colors duration-300",
          isMobile
            ? "text-sm leading-5"
            : "text-sm leading-[166.182%] tracking-[-0.28px]",
          isActive
            ? "text-ink font-medium opacity-100"
            : isMobile
              ? "text-ink/80 font-normal hover:text-ink hover:opacity-100 focus-visible:text-ink"
              : "text-ink/80 font-medium hover:text-ink focus-visible:text-ink",
        )}
        href={href}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

export interface FooterBottomLinkProps {
  href: string;
  label: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function FooterBottomLink({
  href,
  label,
  className,
  target,
  rel,
}: FooterBottomLinkProps) {
  const pathname = usePathname();
  const isActive = isFooterLinkActive(href, pathname);

  return (
    <Link
      className={cn(
        className,
        isActive && "text-brand-red opacity-100",
      )}
      href={href}
      target={target}
      rel={rel}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
