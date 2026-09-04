import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";
import { sharedUiCopy } from "@/content/common";
import { formatBrText } from "@/lib/text-formatting";

export const defaultFaqSectionCopy = {
  heading: sharedUiCopy.faq.heading,
} as const;

export type FaqSectionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string;
  eyebrow?: string;
  eyebrowClassName?: string;
  description?: string;
  className?: string;
  headerWrapperClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  sectionId?: string;
  ariaLabelledBy?: string;
  accordionItemClassName?: string;
  accordionTriggerClassName?: string;
  accordionPanelContentClassName?: string;
  accordionIconClassName?: string;
  accordionIconVariant?: "default" | "circle-cross";
  accordionQuestionClassName?: string;
  accordionAnswerClassName?: string;
  contentClassName?: string;
};

export function FaqSection({
  items,
  idPrefix,
  eyebrow,
  eyebrowClassName = "mb-2.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#e33d37]",
  heading = defaultFaqSectionCopy.heading,
  description,
  className = "faq-sec pb-20 max-[992px]:pb-12.5",
  headerWrapperClassName,
  headerClassName = "mb-[64px] text-center max-[1199px]:mb-[30px]",
  titleClassName = "font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]",
  descriptionClassName = "text-[18px] leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]",
  sectionId,
  ariaLabelledBy,
  accordionItemClassName,
  accordionTriggerClassName,
  accordionPanelContentClassName,
  accordionIconClassName,
  accordionIconVariant,
  accordionQuestionClassName = "!text-lg !leading-[28.8px] max-[1199px]:!text-base",
  accordionAnswerClassName = "!font-medium !leading-8 max-[1199px]:!leading-[26px]",
  contentClassName,
}: FaqSectionProps) {
  const titleId = ariaLabelledBy ?? `${idPrefix}-title`;

  const header = (
    <header className={headerClassName}>
      {eyebrow ? (
        <div className={eyebrowClassName}>
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={titleClassName} id={titleId}>
        {formatBrText(heading, "max-[1199px]:hidden")}
      </h2>
      {description ? (
        <p className={descriptionClassName}>
          {formatBrText(description, "max-[1199px]:hidden")}
        </p>
      ) : null}
    </header>
  );

  const accordion = (
    <FaqAccordion
      answerClassName={accordionAnswerClassName}
      iconClassName={accordionIconClassName}
      iconVariant={accordionIconVariant}
      idPrefix={idPrefix}
      itemClassName={accordionItemClassName}
      items={items}
      panelContentClassName={accordionPanelContentClassName}
      questionClassName={accordionQuestionClassName}
      triggerClassName={accordionTriggerClassName}
    />
  );

  return (
    <section
      className={className}
      data-section="faq"
      id={sectionId ?? `${idPrefix}-section`}
      aria-labelledby={titleId}
    >
      <Container>
        {contentClassName ? (
          <div className={contentClassName}>
            {headerWrapperClassName ? (
              <div className={headerWrapperClassName}>{header}</div>
            ) : (
              header
            )}
            <div className="w-[57%] max-w-[654px] grow max-[992px]:w-full max-[992px]:max-w-none">{accordion}</div>
          </div>
        ) : (
          <>
            {header}
            {accordion}
          </>
        )}
      </Container>
    </section>
  );
}
