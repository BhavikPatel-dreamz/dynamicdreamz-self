import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/class-names";

export type ButtonVariant = "primary" | "outline" | "dark" | "light";

export type ButtonLinkProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  external?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "text-white hover:text-[#4f4f4f]",
  outline: "text-[#4f4f4f] hover:text-white",
  dark: "bg-white text-white hover:text-[#121212]",
  light: "text-[#4f4f4f] hover:text-white",
};

const borderClasses: Record<ButtonVariant, string> = {
  primary: "border-[#ad5151] group-hover/button:border-[#4f4f4f]",
  outline: "border-current group-hover/button:border-[#ad5151]",
  dark: "border-[#121212]",
  light: "border-white",
};

const fillClasses: Record<ButtonVariant, string> = {
  primary: "translate-x-0 bg-[#ad5151] group-hover/button:translate-x-full",
  outline: "-translate-x-full bg-[#ad5151] group-hover/button:translate-x-0",
  dark: "translate-x-0 bg-[#121212] group-hover/button:translate-x-full",
  light: "translate-x-0 bg-white group-hover/button:translate-x-full",
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  href,
  external,
  target,
  rel,
  type = "button",
  disabled,
  ...props
}: ButtonLinkProps) {
  const isExternal =
    external ||
    (typeof href === "string" &&
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")));

  const commonClasses = cn(
    "group/button relative z-1 inline-flex min-h-11 items-center justify-center overflow-hidden rounded-[30px] border-0 px-6 py-2.25 text-center text-[14px] font-bold uppercase leading-none transition-colors duration-600 lg:px-6 lg:py-4.25 lg:text-base sm:text-[14px] max-h-12.25",
    variantClasses[variant],
    className,
  );

  const innerContent = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-2 rounded-[inherit] border-2 transition-colors duration-600",
          borderClasses[variant],
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 rounded-[inherit] transition-transform duration-600",
          fillClasses[variant],
        )}
      />
      <span className="relative z-1">{children}</span>
    </>
  );

  if (!href) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={commonClasses}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {innerContent}
      </button>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        className={commonClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={commonClasses}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {innerContent}
    </Link>
  );
}

// Export Button alias for ergonomics
export const Button = ButtonLink;
