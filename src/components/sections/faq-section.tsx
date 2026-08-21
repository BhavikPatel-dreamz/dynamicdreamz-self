import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { formatBrText } from "@/lib/text-formatting";

export type FaqSectionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionId?: string;
  ariaLabelledBy?: string;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionPanelContentClassName?: string;
  accordionIconClassName?: string;
};

export function FaqSection({
  items,
  idPrefix,
  heading = "Frequently Asked Questions",
  description,
  className = "faq-sec pb-20 max-[991px]:pb-12.5",
  headerClassName = "mb-[64px] text-center max-[1199px]:mb-[30px]",
  titleClassName = "font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]",
  descriptionClassName = "text-[18px] leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]",
  sectionId,
  ariaLabelledBy,
  accordionItemClassName,
  accordionTriggerClassName,
  accordionPanelContentClassName,
  accordionIconClassName,
}: FaqSectionProps) {
  const titleId = ariaLabelledBy ?? `${idPrefix}-title`;

  return (
    <section
      className={className}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
      aria-labelledby={titleId}
    >
      <Container>
        <header className={headerClassName}>
          <h2 className={titleClassName} id={titleId}>
            {formatBrText(heading, "max-[1199px]:hidden")}
          </h2>
          {description ? (
            <p className={descriptionClassName}>
              {formatBrText(description, "max-[1199px]:hidden")}
            </p>
          ) : null}
        </header>
        <FaqAccordion
          answerClassName="!font-medium !leading-8 max-[1199px]:!leading-[26px]"
          iconClassName={accordionIconClassName}
          idPrefix={idPrefix}
          itemClassName={accordionItemClassName}
          items={items}
          panelContentClassName={accordionPanelContentClassName}
          questionClassName="!text-lg !leading-[28.8px] max-[1199px]:!text-base"
          triggerClassName={accordionTriggerClassName}
        />
      </Container>
    </section>
  );
}
