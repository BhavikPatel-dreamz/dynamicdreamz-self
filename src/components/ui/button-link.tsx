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

export type ButtonProps = ButtonLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "text-white hover:text-[#4f4f4f] focus-visible:text-[#4f4f4f]",
  outline: "text-[#4f4f4f] hover:text-white focus-visible:text-white",
  dark: "bg-white text-white hover:text-[#121212] focus-visible:text-[#121212]",
  light: "text-[#4f4f4f] hover:text-white focus-visible:text-white",
};

const borderClasses: Record<ButtonVariant, string> = {
  primary: "border-[#ad5151] group-hover/button:border-[#4f4f4f] group-focus-visible/button:border-[#4f4f4f]",
  outline: "border-current group-hover/button:border-[#ad5151] group-focus-visible/button:border-[#ad5151]",
  dark: "border-[#121212]",
  light: "border-white",
};

const fillClasses: Record<ButtonVariant, string> = {
  primary: "translate-x-0 bg-[#ad5151] group-hover/button:translate-x-full group-focus-visible/button:translate-x-full",
  outline: "-translate-x-full bg-[#ad5151] group-hover/button:translate-x-0 group-focus-visible/button:translate-x-0",
  dark: "translate-x-0 bg-[#121212] group-hover/button:translate-x-full group-focus-visible/button:translate-x-full",
  light: "translate-x-0 bg-white group-hover/button:translate-x-full group-focus-visible/button:translate-x-full",
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

  const isAnchor = typeof href === "string" && href.startsWith("#");

  const commonClasses = cn(
    "group/button relative z-[1] inline-flex items-center justify-center align-top overflow-hidden rounded-[30px] min-h-[49px] h-[49px] px-6 py-[15px] text-center font-montserrat text-base leading-[normal] font-bold text-[#4f4f4f] not-italic uppercase no-underline! transition-all duration-600 ease shrink-0 max-[991px]:min-h-[44px] max-[991px]:h-[44px] max-[991px]:text-[14px] max-[991px]:px-5 max-[991px]:py-[13px] max-[767px]:min-h-[44px] max-[767px]:h-[44px] max-[767px]:text-[14px] max-[767px]:px-5 max-[767px]:py-[13px] disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    className,
  );

  const innerContent = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-[2] rounded-[inherit] border-2 transition-colors duration-600",
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
      <span className="relative z-[1] inline-block">{children}</span>
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
        className={commonClasses}
        href={href}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        target={target}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </a>
    );
  }

  if (isAnchor) {
    return (
      <a
        className={commonClasses}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <Link
      className={commonClasses}
      href={href}
      rel={rel}
      target={target}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {innerContent}
    </Link>
  );
}

export const Button = ButtonLink;
