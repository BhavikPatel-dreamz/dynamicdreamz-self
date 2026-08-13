import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { LifeFaq } from "@/content/life-dynamicdreamz";

type LifeFaqAccordionProps = {
  items: readonly LifeFaq[];
};

export function LifeFaqAccordion({ items }: LifeFaqAccordionProps) {
  return <FaqAccordion items={items} idPrefix="life-faq" />;
}
