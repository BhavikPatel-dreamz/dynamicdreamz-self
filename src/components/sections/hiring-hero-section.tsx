import { ReviewAnimation } from "@/components/sections/shopify-plus-agency/review-animation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export type HiringHeroStat = {
  value: string;
  label: string;
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
};

export function HiringHeroSection({
  content,
  ctaHref = "/request-quote",
  className = "inner-hero-sec relative overflow-hidden bg-white pt-[215px] pb-20 max-[991px]:pt-[105px] max-[767px]:pb-10",
}: HiringHeroSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="inner-hero-content mx-auto max-w-[980px] text-center">
          <h1 className="font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-ink max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10 max-[767px]:tracking-[-0.6px]">
            {content.title}
          </h1>

          <p className="mx-auto mt-6 text-base font-normal leading-[30.4px] text-muted max-[767px]:mt-4 max-[767px]:text-sm max-[767px]:leading-[25px]">
            {content.description}
          </p>

          {content.secondaryDescription && (
            <p className="mx-auto mt-4 text-base font-normal leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
              {content.secondaryDescription}
            </p>
          )}

          <div className="mt-6 mb-6">
            <ButtonLink
              href={content.ctaHref ?? ctaHref}
              variant="primary"
              className="min-h-[52px] px-[34px] py-3.5 font-montserrat text-sm font-bold uppercase tracking-[0.5px]"
            >
              {content.ctaLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="total-deliver-wrap mt-[66px] grid grid-cols-5 max-[991px]:mt-[50px] max-[767px]:grid-cols-1">
          {content.stats.map((stat, index) => (
            <div
              className={`deliver-col relative px-4 text-center max-[767px]:py-5 ${
                index > 0
                  ? "before:absolute before:top-1/2 before:left-0 before:h-[62px] before:w-px before:-translate-y-1/2 before:bg-[#e7e7e7] max-[767px]:before:top-0 max-[767px]:before:left-1/2 max-[767px]:before:h-px max-[767px]:before:w-[72px] max-[767px]:before:-translate-x-1/2 max-[767px]:before:translate-y-0"
                  : ""
              }`}
              key={stat.label}
            >
              <strong className="block font-sans text-[30px] font-bold leading-10 text-ink max-[991px]:text-[25px] max-[767px]:text-[28px]">
                {stat.value}
              </strong>
              <span className="mx-auto mt-1 block max-w-[155px] text-[13px] font-medium leading-[18px] text-muted max-[991px]:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="review-wrap mx-auto mt-[55px] w-[532px] max-w-full max-[767px]:mt-[35px] max-[767px]:w-[275px]">
          <ReviewAnimation />
        </div>
      </Container>
    </section>
  );
}
