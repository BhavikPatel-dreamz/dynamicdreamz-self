import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { formatBrText } from "@/lib/text-formatting";
import type { WhiteLabelFinalCta } from "@/types/white-label-service";

type WhiteLabelFinalCtaSectionProps = {
  cta: WhiteLabelFinalCta;
  variant?: "default" | "certifiedDevelopers" | "shopifyHours";
};

export function WhiteLabelFinalCtaSection({
  cta,
}: WhiteLabelFinalCtaSectionProps) {
  return (
    <section className="bg-white py-[52px] max-[1199px]:py-[52px] max-[992px]:py-10">
      <Container className="max-[575px]:px-4">
        <div data-aos="fade-up" className="flex items-center justify-between max-[992px]:flex-wrap max-[992px]:gap-5">
          <div className="flex-1 max-w-[560px] flex-none pr-0 max-[992px]:mx-auto max-[992px]:max-w-none max-[992px]:text-center">
            <h2 className="mb-[15px] font-sans text-[30px] leading-[42px] font-bold text-ink max-[1199px]:text-[26px] max-[1199px]:leading-9 max-[992px]:mb-2.5 max-[992px]:text-[22px] max-[992px]:leading-8 max-[767px]:tracking-[-0.48px]">
              {formatBrText(cta.title)}
            </h2>
            <p className="text-base leading-[30.4px] font-medium text-muted max-[1199px]:leading-[26px] max-[992px]:text-[15px] max-[992px]:leading-[22px]">
              {formatBrText(cta.description)}
            </p>
          </div>
          <div className="shrink-0 max-[992px]:w-full max-[992px]:pb-[10.4px] max-[992px]:text-center">
            <ButtonLink
              className="max-[992px]:min-h-0 max-[992px]:py-3 max-[992px]:text-sm max-[992px]:leading-[18px]"
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
