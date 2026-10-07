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
  href?: string | null;
  appLinks?: readonly PortfolioAppLink[];
};

export type MobileAppWorkSecondaryCta = {
  href: string;
  label: string;
  ariaLabel?: string;
};

export type MobileAppWorkContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: readonly MobileAppWorkItem[];
  ctaHref: string;
  ctaLabel: string;
  ctaAriaLabel?: string;
  secondaryCta?: MobileAppWorkSecondaryCta;
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
      <Container>
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="mb-10 max-[767px]:mb-[30px]"
        />

        <div className="our-work-main flex flex-wrap justify-start gap-x-[15px] gap-y-[42px] max-[991px]:gap-y-[30px]">
          {content.items.map((project) => (
            <div
              key={project.name}
              data-aos="fade-up"
              className="our_work_team apps w-[calc(25%_-_12px)] max-[1199px]:w-[calc(33.333%_-_10px)] max-[991px]:w-[calc(50%_-_10px)] max-[575px]:w-[calc(50%_-_8px)]"
            >
              <PortfolioProjectCard
                name={project.name}
                category={project.category}
                href={project.href}
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

        <div data-aos="fade-up" className="btns_group mt-[50px] flex flex-wrap items-center justify-center gap-[15px] max-[575px]:flex-col max-[575px]:items-stretch max-[575px]:gap-0 [&>*]:max-[575px]:w-full">
          <ButtonLink
            href={content.ctaHref}
            variant="primary"
            aria-label={content.ctaAriaLabel}
          >
            {content.ctaLabel}
          </ButtonLink>
          {content.secondaryCta ? (
            <ButtonLink
              href={content.secondaryCta.href}
              variant="outline"
              aria-label={content.secondaryCta.ariaLabel}
            >
              {content.secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
