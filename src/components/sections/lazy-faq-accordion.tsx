"use client";

import dynamic from "next/dynamic";

import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { LazyMount } from "@/components/ui/lazy-mount";

const DynamicFaqAccordion = dynamic(
  () =>
    import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion),
  { ssr: false },
);

type LazyFaqAccordionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  fallback: React.ReactNode;
  rootMargin?: string;
  answerClassName?: string;
  questionClassName?: string;
  itemClassName?: string;
  triggerClassName?: string;
  panelContentClassName?: string;
  iconClassName?: string;
  iconVariant?: "default" | "circle-cross";
  animateOnReveal?: boolean;
  revealDelayStepMs?: number;
  revealDurationMs?: number;
  revealOffsetPx?: number;
};

export function LazyFaqAccordion(props: LazyFaqAccordionProps) {
  const { fallback, rootMargin, ...accordionProps } = props;
  return (
    <LazyMount fallback={fallback} rootMargin={rootMargin}>
      <DynamicFaqAccordion {...accordionProps} />
    </LazyMount>
  );
}
