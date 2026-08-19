import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import type { FaqAccordionItem } from "@/components/ui/faq-accordion";

export type FaqSectionProps = {
  items: readonly FaqAccordionItem[];
  idPrefix: string;
  heading?: string;
  className?: string;
  headerClassName?: string;
};

export function FaqSection({
  items,
  idPrefix,
  heading = "Frequently Asked Questions",
  className = "faq-sec pb-20 max-[991px]:pb-[50px]",
  headerClassName = "mb-[64px] text-center max-[1199px]:mb-[30px]",
}: FaqSectionProps) {
  return (
    <section className={className} data-section="faq" id={`${idPrefix}-section`}>
      <Container>
        <div className={headerClassName}>
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {heading}
          </h2>
        </div>
        <FaqAccordion
          answerClassName="!font-medium !leading-8 max-[1199px]:!leading-[26px]"
          idPrefix={idPrefix}
          items={items}
          questionClassName="!text-lg !leading-[28.8px] max-[1199px]:!text-base"
        />
      </Container>
    </section>
  );
}
