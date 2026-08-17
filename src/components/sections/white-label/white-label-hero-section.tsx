import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { whiteLabelReviewProfiles } from "@/content/white-label-common";
import { whiteLabelShopifyHero } from "@/content/white-label-shopify-development";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/class-names";
import type { RichText, WhiteLabelHero, WhiteLabelReview } from "@/types/white-label-service";

const reviewSizeClasses = [
  "relative h-[50.33px] w-[140px] max-[575px]:h-[33.14px] max-[575px]:w-[92.22px]",
  "relative h-[60.42px] w-[190px] max-[575px]:h-[39.79px] max-[575px]:w-[125.14px]",
  "relative h-[53.79px] w-[127px] max-[575px]:h-[35.42px] max-[575px]:w-[83.64px]",
] as const;

type WhiteLabelHeroSectionProps = {
  hero?: WhiteLabelHero;
  reviews?: readonly WhiteLabelReview[];
  variant?: "default" | "websiteDesign";
};

function renderRichText(value: RichText) {
  if (typeof value === "string") {
    return value;
  }

  return value.map((part, index) =>
    part.strong ? (
      <strong className="font-bold" key={`${part.text}-${index}`}>
        {part.text}
      </strong>
    ) : (
      part.text
    ),
  );
}

export function WhiteLabelHeroSection({
  hero = whiteLabelShopifyHero,
  reviews = whiteLabelReviewProfiles,
  variant = "default",
}: WhiteLabelHeroSectionProps) {
  const isWebsiteDesign = variant === "websiteDesign";

  return (
    <section className="overflow-hidden rounded-b-[50px] bg-cream pt-[120px] pb-0 max-[991px]:pt-[100px] max-[767px]:rounded-b-[30px] max-[767px]:pt-[70px] max-[767px]:pb-2.5">
      <Container className="max-[575px]:px-4">
        <div
          className={cn(
            "flex flex-wrap items-stretch",
            isWebsiteDesign ? "justify-between" : "justify-center",
          )}
        >
          <div
            className={cn(
              "pb-20 max-[1199px]:pb-10 max-[991px]:pb-[30px] max-[767px]:pb-2.5",
              isWebsiteDesign
                ? "w-[47%] max-[991px]:w-full"
                : "w-[55%] max-[1199px]:w-3/5 max-[991px]:w-full",
            )}
          >
            <div>
              <h1 className="mb-6 font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[1199px]:text-[44px] max-[1199px]:leading-[55px] max-[991px]:text-[40px] max-[991px]:leading-[50px]">
                {hero.titleLines
                  ? hero.titleLines.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))
                  : hero.title}
                {hero.accent ? (
                  <>
                    {" "}
                    <i className="text-brand-red">{hero.accent}</i>
                  </>
                ) : null}
              </h1>
              <p className="mb-5 text-base leading-[30px] font-medium text-muted max-[1199px]:mb-[18px] max-[1199px]:leading-[30.4px] max-[991px]:mb-[15px]">
                {hero.leadStrong === false ? hero.lead : <strong className="font-bold">{hero.lead}</strong>}
              </p>
              {hero.paragraphs.map((paragraph, index) => (
                <p
                  className="mb-5 text-base leading-[30px] font-medium text-muted max-[1199px]:mb-[18px] max-[1199px]:leading-[30.4px] max-[991px]:mb-[15px]"
                  key={typeof paragraph === "string" ? paragraph : `hero-paragraph-${index}`}
                >
                  {renderRichText(paragraph)}
                </p>
              ))}
              <ButtonLink
                className="mt-2.5 max-[991px]:min-h-0 max-[991px]:py-3 max-[991px]:text-sm max-[991px]:leading-[18px]"
                href={siteConfig.quotePath}
                variant="primary"
              >
                {hero.cta}
              </ButtonLink>

              <div className="relative mt-[25px] -mr-[27px] -ml-[27px] flex justify-start max-[1199px]:mt-[35px] max-[1199px]:-mr-5 max-[1199px]:-ml-5 max-[991px]:mt-[38.4px] max-[767px]:mt-[25.4px] max-[767px]:-mr-2.5 max-[767px]:-ml-2.5">
                {reviews.map((review, index) => (
                  <div
                    className="flex min-w-0 items-center justify-center border-r border-[#d9d9d9] px-[27px] last:border-r-0 max-[1199px]:px-5 max-[767px]:px-2.5"
                    key={review.name}
                  >
                    <a
                      className="flex min-w-0 items-center justify-center"
                      href={review.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={review.alt}
                    >
                      <span className={reviewSizeClasses[index]}>
                        <Image
                          className="object-contain"
                          src={review.image}
                          alt={review.alt}
                          fill
                          sizes="(max-width: 575px) 126px, 190px"
                          preload={index === 0}
                        />
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative",
              isWebsiteDesign
                ? "flex w-[45%] items-end justify-end max-[991px]:mx-auto max-[991px]:w-full max-[991px]:max-w-[400px]"
                : "w-[45%] max-[1199px]:w-2/5 max-[991px]:w-full",
            )}
          >
            <div
              className={cn(
                "absolute top-0 right-[-40%] bottom-[-20%] left-2.5 flex h-auto w-[calc(50vw+40%)] max-[1199px]:right-[-20%] max-[1199px]:bottom-[-50%] max-[1199px]:w-[calc(50vw+20%)] max-[991px]:static max-[991px]:mt-5 max-[991px]:mb-[-5px] max-[991px]:w-full",
                isWebsiteDesign &&
                  "static h-auto w-full max-[991px]:mt-0 max-[991px]:mb-[-5px]",
              )}
            >
              <Image
                className={cn(
                  "h-full w-full object-contain",
                  isWebsiteDesign && "h-auto w-full",
                )}
                src={hero.illustration}
                alt={hero.illustrationAlt}
                width={945}
                height={627}
                sizes="(max-width: 991px) calc(100vw - 40px), 55vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
