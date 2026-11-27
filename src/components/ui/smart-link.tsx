import Link, { type LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { resolveLinkProps } from "@/lib/link-utils";

export type SmartLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  prefetch?: NextLinkProps["prefetch"];
  replace?: NextLinkProps["replace"];
  scroll?: NextLinkProps["scroll"];
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Generalized link wrapper that routes internal paths through Next.js <Link>
 * while automatically opening http(s) links in a new tab with safe rel tokens
 * and rendering mailto:/tel:/skype:/hash anchors as native <a> tags.
 */
export function SmartLink({
  href,
  children,
  external,
  target,
  rel,
  prefetch,
  replace,
  scroll,
  ...props
}: SmartLinkProps) {
  const resolved = resolveLinkProps({ href, external, target, rel });

  if (resolved.isNativeAnchor) {
    return (
      <a
        href={resolved.normalizedHref}
        target={resolved.target}
        rel={resolved.rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={resolved.normalizedHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      target={resolved.target}
      rel={resolved.rel}
      {...props}
    >
      {children}
    </Link>
  );
}
