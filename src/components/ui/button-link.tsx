import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/class-names";

type ButtonVariant = "primary" | "outline" | "dark" | "light";

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    variant: ButtonVariant;
  };

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

export function ButtonLink({ children, className, variant, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group/button relative z-[1] inline-flex min-h-11 items-center justify-center overflow-hidden rounded-[30px] border-0 px-[22px] py-3 text-center text-[13px] leading-none font-bold uppercase transition-colors duration-600",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
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
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}
