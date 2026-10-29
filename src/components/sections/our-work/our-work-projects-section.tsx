import { OurWorkFilterController } from "@/components/sections/our-work/our-work-filter-controller";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import {
  ourWorkPage,
  ourWorkProjects,
  type WorkPlatform,
} from "@/content/our-work";

const projectCounts = {
  all: ourWorkProjects.length,
  shopify: ourWorkProjects.filter((project) => project.platform === "shopify").length,
  wordpress: ourWorkProjects.filter((project) => project.platform === "wordpress").length,
  apps: ourWorkProjects.filter((project) => project.platform === "apps").length,
  magento: ourWorkProjects.filter((project) => project.platform === "magento").length,
  bigCommerce: ourWorkProjects.filter((project) => project.platform === "bigCommerce").length,
} satisfies Record<WorkPlatform, number>;

export type OurWorkProjectsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function OurWorkProjectsSection({
  eyebrow = ourWorkPage.portfolio.eyebrow,
  title = ourWorkPage.portfolio.title,
  description = ourWorkPage.portfolio.description,
}: OurWorkProjectsSectionProps = {}) {
  return (
    <section
      className="scroll-mt-20 py-20 max-[991px]:py-[50px]"
      id="our-work-projects"
      aria-labelledby="our-work-projects-title"
    >
      <Container>
        <SplitSectionHeading
          className="gap-12 max-[991px]:items-start max-[767px]:flex-col max-[767px]:gap-4"
          description={description}
          eyebrow={eyebrow}
          heading={title}
          headingId="our-work-projects-title"
          textColumnClassName="max-w-[690px]"
          titleColumnClassName="shrink-0"
          pClassName="!leading-6 !font-normal !text-sm"
          variant="left"
        />
        <OurWorkFilterController filters={ourWorkPage.filters} counts={projectCounts} />

        <div className="mt-[50px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[992px]:mt-[40px] max-[992px]:gap-y-[30px] max-[767px]:gap-x-[10px] max-[767px]:gap-y-5">
          {ourWorkProjects.map((project) => (
            <div
              data-aos="fade-up"
              className="w-[calc(25%_-_11.25px)] max-[1199px]:w-[calc(33.333%_-_10px)] max-[992px]:w-[calc(50%_-_7.5px)] max-[767px]:w-[calc(50%_-_5px)]"
              data-work-project
              data-work-platform={project.platform}
              key={project.id}
            >
              <PortfolioProjectCard
                appLinks={project.appLinks}
                category={project.category}
                href={project.href}
                image={project.image}
                imageAlt={project.imageAlt}
                name={project.name}
                platformMark={project.platformMark}
                variant="ourWorkRefresh"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
