import { FaqSection } from "@/components/sections/faq-section";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type SplitFaqSectionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string;
  description?: string;
  className?: string;
  sectionId?: string;
};

/**
 * Two-column FAQ layout: a left-aligned heading/description column beside a
 * borderless, underlined accordion with circle-cross expand icons. This is the
 * shared, content-decoupled version of the design first used by the home FAQ so
 * other pages can reuse the exact styling by passing their own items/copy.
 *
 * `heading` falls back to the shared "Frequently Asked Questions" default, and
 * omitting `description` renders the heading column with no supporting sentence.
 */
export function SplitFaqSection({
  items,
  idPrefix,
  heading,
  description,
  className = "bg-[#fafaf7] py-[60px] max-[767px]:py-10",
  sectionId,
}: SplitFaqSectionProps) {
  return (
    <FaqSection
      accordionAnswerClassName="!text-sm"
      accordionIconClassName="right-0 size-[30px] max-[767px]:top-1/2 max-[767px]:right-0 max-[767px]:size-[26px] max-[767px]:-translate-y-1/2"
      accordionIconVariant="circle-cross"
      accordionItemClassName="!mb-0 !rounded-none !border-0 !border-b !border-ink/10 !bg-transparent last:!border-b-0"
      accordionPanelContentClassName="!px-0 !pb-6 max-[767px]:!pb-5"
      accordionQuestionClassName="!font-montreal-medium !text-[20px] !leading-[1.4] !font-medium max-[1199px]:!text-[18px] max-[1199px]:!leading-[26px] max-[767px]:!text-base max-[767px]:!leading-6"
      accordionTriggerClassName="!px-0 !py-6 !pr-12 max-[767px]:!py-5"
      className={className}
      contentClassName="flex justify-between gap-[105px] max-[992px]:flex-col max-[992px]:gap-2.5"
      description={description}
      descriptionClassName="max-w-[518px] text-base leading-[1.9] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[1.8]"
      headerClassName="mb-0 flex w-[41%] flex-col items-start text-left max-[992px]:w-full"
      heading={heading}
      idPrefix={idPrefix}
      items={items}
      sectionId={sectionId}
      titleClassName="mb-[15px] font-display text-[35px] leading-[1.4] font-normal tracking-normal text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
    />
  );
}
