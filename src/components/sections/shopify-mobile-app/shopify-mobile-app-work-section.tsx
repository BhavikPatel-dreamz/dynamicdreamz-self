import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";

import type { PortfolioAppLink } from "@/components/ui/portfolio-project-card";

export type MobileAppWorkItem = {
  id?: string;
  name: string;
  category?: string;
  image: string;
  imageAlt: string;
  appLinks?: readonly PortfolioAppLink[];
};

export type MobileAppWorkContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly MobileAppWorkItem[];
  ctaHref: string;
  ctaLabel: string;
  ctaAriaLabel?: string;
};

export type ShopifyMobileAppWorkSectionProps = {
  content: MobileAppWorkContent;
  className?: string;
  id?: string;
};

export function ShopifyMobileAppWorkSection({
  content,
  className,
  id = "our_work",
}: ShopifyMobileAppWorkSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "our-work-sec scroll-mt-20 bg-white pt-20 pb-20 max-[992px]:pt-[50px] max-[992px]:pb-[50px]",
        className,
      )}
    >
      <Container className="min-[1400px]:max-w-[1408px] px-[15px]">
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="mb-[50px] max-[767px]:mb-[30px]"
        />

        <div className="our-work-main flex flex-wrap justify-start gap-x-[15px] gap-y-[42px] max-[991px]:gap-y-[30px]">
          {content.items.map((project) => (
            <div
              key={project.name}
              className="our_work_team apps w-[calc(25%_-_11.25px)] max-[1199px]:w-[calc(33.333%_-_10px)] max-[991px]:w-[calc(50%_-_10px)] max-[575px]:w-[calc(50%_-_8px)]"
            >
              <PortfolioProjectCard
                name={project.name}
                category={project.category}
                image={project.image}
                imageAlt={project.imageAlt}
                appLinks={project.appLinks}
                variant="ourWorkRefresh"
                showArrow={true}
                showMobileArrow={true}
              />
            </div>
          ))}
        </div>

        <div className="btns_group mt-[50px] flex justify-center">
          <ButtonLink
            href={content.ctaHref}
            variant="primary"
            aria-label={content.ctaAriaLabel}
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
