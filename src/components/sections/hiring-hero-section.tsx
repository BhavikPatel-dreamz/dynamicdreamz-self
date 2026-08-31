import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type HiringHeroStat = {
  value: string;
  label: string;
  labelLines?: readonly string[];
};

export type HiringHeroContent = {
  title: string;
  description: string;
  secondaryDescription?: string;
  ctaLabel: string;
  ctaHref?: string;
  stats: readonly HiringHeroStat[];
};

export type HiringHeroSectionProps = {
  content: HiringHeroContent;
  ctaHref?: string;
  className?: string;
  hideReview?: boolean;
};

export function HiringHeroSection({
  content,
  ctaHref = "/request-quote",
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[215px] pb-20 max-[992px]:pt-[140px] max-[767px]:pb-10",
  hideReview = false,
}: HiringHeroSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="inner-hero-content mx-auto max-w-[980px] text-center">
          <h1 className="font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">
            {formatBrText(content.title, "max-[1199px]:hidden")}
          </h1>

          <p className="max-w-225 mx-auto mt-6 font-medium leading-[34.2px] text-muted max-[992px]:mt-6 text-lg max-[992px]:text-base max-[992px]:leading-[30.4px]">
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </p>

          {content.secondaryDescription && (
            <p className="mx-auto mt-4 font-normal leading-[30.4px] text-muted text-lg max-[767px]:text-sm max-[767px]:leading-[25px]">
              {formatBrText(content.secondaryDescription, "max-[1199px]:hidden")}
            </p>
          )}

          <div className="mt-6 mb-6">
            <ButtonLink
              href={content.ctaHref ?? ctaHref}
              variant="primary"
              className="min-[991px]:px-8.5 py-3.5 font-montserrat text-sm font-bold uppercase"
            >
              {content.ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="total-deliver-wrap mt-15 flex items-center justify-between max-[1199px]:justify-center max-[992px]:mt-12.5 max-[767px]:flex-col">
          {content.stats.map((stat) => (
            <div
              className="deliver-col ml-12.25 border-l-[1.3px] border-[#efefef] pl-12.25 text-center first:ml-0 first:border-l-0 first:pl-0 max-[1199px]:ml-7.5 max-[1199px]:pl-7.5 max-[1199px]:first:ml-0 max-[1199px]:first:pl-0 max-[992px]:ml-4.5 max-[992px]:pl-4.5 max-[767px]:mb-5 max-[767px]:ml-0 max-[767px]:w-full max-[767px]:border-0 max-[767px]:pb-5 max-[767px]:pl-0 max-[767px]:last:mb-0 max-[767px]:last:pb-0 max-[767px]:not-last:border-b-[1.3px] max-[767px]:not-last:border-[#efefef]"
              key={stat.label}
            >
              <strong className="mb-1.25 block font-sans text-[44px] leading-13.75 font-bold tracking-[-.88px] text-ink max-[1199px]:text-[34px] max-[1199px]:leading-normal max-[992px]:mb-2.5 max-[992px]:text-[26px] max-[767px]:text-[30px]">
                {stat.value}
              </strong>
              <span className="mx-auto mt-1 block text-lg font-medium leading-6 text-muted max-[992px]:text-xs max-[767px]:text-base max-[767px]:leading-[27.2px]">
                {stat.labelLines
                  ? stat.labelLines.map((line, index) => (
                      <span key={`${line}-${index}`}>
                        {index > 0 ? (
                          <>
                            <br className="max-[767px]:hidden" />{" "}
                          </>
                        ) : null}
                        {line}
                      </span>
                    ))
                  : stat.label}
              </span>
            </div>
          ))}
        </div>

        {!hideReview && (
          <div className="review-wrap mx-auto mt-[55px] w-[532px] max-w-full max-[992px]:mt-[30px] max-[767px]:mt-[39px] max-[767px]:w-[275px]">
            <ReviewAnimation />
          </div>
        )}
      </Container>
    </section>
  );
}
