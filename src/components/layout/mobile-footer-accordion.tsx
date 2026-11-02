"use client";

import { useState } from "react";
import type { NavigationGroup } from "@/data/navigation";
import { cn } from "@/lib/class-names";
import { FooterMenuItem } from "@/components/layout/FooterMenuItem";

export interface MobileFooterAccordionProps {
  navigation: NavigationGroup[];
}

export function MobileFooterAccordion({ navigation }: MobileFooterAccordionProps) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (label: string) => {
    setOpenGroup((current) => (current === label ? null : label));
  };

  return (
    <div>
      {navigation.map((group) => {
        const isOpen = openGroup === group.label;
        return (
          <div className="border-b border-ink/10" key={group.label}>
            <button
              type="button"
              className="flex w-full cursor-pointer font-montreal-medium items-center justify-between py-[18px] text-base leading-[1.66] font-normal text-ink text-left"
              onClick={() => toggleGroup(group.label)}
              aria-expanded={isOpen}
            >
              <span>{group.label}</span>
              <span className="relative h-3 w-3 shrink-0" aria-hidden="true">
                <span className="absolute top-[5px] left-0 h-0.5 w-3 bg-black" />
                <span
                  className={cn(
                    "absolute top-0 left-[5px] h-3 w-0.5 bg-black transition-opacity duration-300",
                    isOpen ? "opacity-0" : "opacity-100",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="m-0 list-none p-0 pb-[18px]">
                  {group.links.map((link) => (
                    <FooterMenuItem
                      className="leading-[30.4px]"
                      href={link.href}
                      isMobile
                      key={`${link.label}-${link.href}`}
                      label={link.label}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
