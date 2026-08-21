import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import {
  whiteLabelShopifyFaqs,
  whiteLabelShopifyFinalCta,
} from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import type { WhiteLabelFaq, WhiteLabelFinalCta } from "@/types/white-label-service";

type WhiteLabelFaqSectionProps = {
  faqs?: readonly WhiteLabelFaq[];
  idPrefix?: string;
};

export function WhiteLabelFaqSection({
  faqs = whiteLabelShopifyFaqs,
  idPrefix = "white-label-shopify-faq",
}: WhiteLabelFaqSectionProps) {
  return (
    <section className="bg-[#e6ecf0] py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <h2 className="mb-10 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[1199px]:mb-[30px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]">
          Frequently Asked Questions
        </h2>
        <FaqAccordion
          answerClassName="!font-medium tracking-[0.32px] min-[1200px]:leading-8"
          idPrefix={idPrefix}
          items={faqs}
          questionClassName="max-[1199px]:leading-[26px] min-[1200px]:text-lg min-[1200px]:leading-[28.8px]"
        />
      </Container>
    </section>
  );
}

type WhiteLabelFinalCtaSectionProps = {
  cta?: WhiteLabelFinalCta;
  variant?: "default" | "certifiedDevelopers";
};

export function WhiteLabelFinalCtaSection({
  cta = whiteLabelShopifyFinalCta,
  variant = "default",
}: WhiteLabelFinalCtaSectionProps) {
  const isCertifiedDevelopers = variant === "certifiedDevelopers";

  return (
    <section
      className={cn(
        "bg-[#fafaf7] pt-[70px] pb-[60px] max-[1199px]:py-[60px] max-[991px]:py-[30px]",
        isCertifiedDevelopers && "py-[52px] max-[1199px]:py-[52px] max-[991px]:py-10",
      )}
    >
      <Container className="max-[575px]:px-4">
        <div className="flex items-center justify-between max-[991px]:flex-wrap max-[991px]:gap-5">
          <div
            className={cn(
              "flex-1 pr-[46px] max-[1199px]:pr-[30px] max-[991px]:w-full max-[991px]:flex-none max-[991px]:pr-0",
              isCertifiedDevelopers &&
                "max-w-[560px] flex-none pr-0 max-[991px]:mx-auto max-[991px]:max-w-none max-[991px]:text-center",
            )}
          >
            <h2 className="mb-[15px] font-sans text-[30px] leading-[42px] font-bold text-ink max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[991px]:mb-2.5 max-[991px]:text-[22px] max-[991px]:leading-8 max-[767px]:tracking-[-0.48px]">
              {cta.title}
            </h2>
            <p className="text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[991px]:text-[15px] max-[991px]:leading-[22px]">
              {cta.description}
            </p>
          </div>
          <div
            className={cn(
              "shrink-0 max-[991px]:w-full max-[991px]:pb-[10.4px]",
              isCertifiedDevelopers && "max-[991px]:text-center",
            )}
          >
            <ButtonLink
              className="max-[991px]:min-h-0 max-[991px]:py-3 max-[991px]:text-sm max-[991px]:leading-[18px]"
              href={siteConfig.quotePath}
              variant="primary"
            >
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
