import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/class-names";

export type TextArrowLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function TextArrowLink({
  children,
  href,
  className,
  external,
  target,
  rel,
  ...props
}: TextArrowLinkProps) {
  const isExternal =
    external ||
    (typeof href === "string" &&
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")));

  const commonClasses = cn(
    "text-arrow-link inline-flex items-center text-sm font-bold uppercase leading-none text-[#AD5151] transition-colors hover:text-[#282828]",
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      <svg
        aria-hidden="true"
        className="ml-2.5 h-3 w-3 shrink-0"
        fill="none"
        viewBox="0 0 12 12"
      >
        <path
          d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
          fill="currentColor"
        />
      </svg>
    </>
  );

  if (isExternal) {
    return (
      <a
        className={commonClasses}
        href={href}
        rel={rel ?? "noopener noreferrer"}
        target={target ?? "_blank"}
        {...props}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link className={commonClasses} href={href} {...props}>
      {inner}
    </Link>
  );
}
