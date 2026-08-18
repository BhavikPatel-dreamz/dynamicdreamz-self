import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { shopifyPlusAgencyFaqs } from "@/content/shopify-plus-agency";

export function FaqSection() {
  return (
    <section className="faq-sec pt-0 pb-20" data-section="faq">
      <Container>
        <div className="mb-[64px] text-center max-[1199px]:mb-[30px]">
          <h2 className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion
          answerClassName="!font-medium !leading-8 max-[1199px]:!leading-[26px]"
          idPrefix="shopify-plus-agency-faq"
          items={shopifyPlusAgencyFaqs}
          questionClassName="!text-lg !leading-[28.8px] max-[1199px]:!text-base"
        />
      </Container>
    </section>
  );
}