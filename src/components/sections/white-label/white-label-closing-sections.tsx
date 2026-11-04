import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { formatBrText } from "@/lib/text-formatting";
import type { WhiteLabelFinalCta } from "@/types/white-label-service";

type WhiteLabelFinalCtaSectionProps = {
  cta: WhiteLabelFinalCta;
  ctaHref?: string;
  variant?: "default" | "certifiedDevelopers" | "shopifyHours";
};

export function WhiteLabelFinalCtaSection({
  cta,
  ctaHref = siteConfig.quotePath,
}: WhiteLabelFinalCtaSectionProps) {
  return (
    <section className="white_label_lets_build_cta_section bg-white py-15 max-[992px]:py-[30px]">
      <Container>
        <div
          data-aos="fade-up"
          className="cta_wrapper flex items-center justify-between max-[992px]:flex-col max-[992px]:gap-5"
        >
          <div className="cta_content flex-1 pr-[46px] max-[1200px]:pr-[30px] max-[992px]:w-full max-[992px]:max-w-none max-[992px]:pr-0 max-[992px]:text-left">
            <h2 className="cta_heading mb-[15px] font-display text-[30px] font-medium leading-[42px] text-ink max-[1200px]:text-[26px] max-[1200px]:leading-9 max-[992px]:mb-2.5 max-[992px]:text-[22px] max-[992px]:leading-8 max-[768px]:tracking-[-0.48px]">
              {formatBrText(cta.title)}
            </h2>
            <p className="cta_text font-montserrat text-base font-medium leading-[30.4px] text-muted max-[1200px]:leading-[26px] max-[992px]:text-[15px] max-[992px]:leading-[22px]">
              {formatBrText(cta.description)}
            </p>
          </div>
          <div className="cta_action shrink-0 max-[992px]:w-full max-[992px]:text-left">
            <ButtonLink href={ctaHref} variant="primary">
              {cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
