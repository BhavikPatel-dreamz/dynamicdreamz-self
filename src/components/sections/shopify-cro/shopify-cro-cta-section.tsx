import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyCroBottomCta } from "@/content/shopify-cro-agency";

export type ShopifyCroCtaSectionProps = {
  content?: typeof shopifyCroBottomCta;
  className?: string;
};

export function ShopifyCroCtaSection({
  content = shopifyCroBottomCta,
  className = "white_label_lets_build_cta_section bg-[#FAFAF7] py-[70px] max-[991px]:py-10",
}: ShopifyCroCtaSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="cta_wrapper flex flex-wrap items-center justify-between gap-6">
          <div className="cta_content flex-1 pr-[46px] max-[991px]:w-full max-[991px]:pr-0">
            <h2 className="cta_heading mb-[15px] font-sans text-[30px] font-bold leading-[42px] text-ink max-[767px]:text-2xl max-[767px]:leading-8">
              {content.heading}
            </h2>
            <p className="cta_text m-0 font-sans text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm">
              {content.description}
            </p>
          </div>

          <div className="cta_action flex flex-shrink-0 flex-wrap items-center gap-[15px] max-[480px]:w-full max-[480px]:flex-col max-[480px]:items-stretch">
            <ButtonLink
              href={content.primaryCta.href}
              variant="primary"
              className="px-7 text-sm max-[991px]:py-3"
            >
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={content.secondaryCta.href}
              variant="outline"
              className="px-7 text-sm max-[991px]:py-3"
            >
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
