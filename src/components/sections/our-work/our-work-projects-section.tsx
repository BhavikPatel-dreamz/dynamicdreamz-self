import { OurWorkFilterController } from "@/components/sections/our-work/our-work-filter-controller";
import { Container } from "@/components/ui/container";
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

export function OurWorkProjectsSection() {
  return (
    <section
      className="scroll-mt-20 pt-20 pb-20 max-[991px]:pt-[50px] max-[991px]:pb-[50px]"
      id="our-work-projects"
      aria-label="Dynamic Dreamz portfolio projects"
    >
      <Container className="max-[575px]:px-4">
        <OurWorkFilterController filters={ourWorkPage.filters} counts={projectCounts} />

        <div className="mt-[60px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[991px]:mt-[50px] max-[991px]:gap-y-[30px]">
          {ourWorkProjects.map((project) => (
            <div
              className="w-[calc(33.333%_-_10px)] max-[991px]:w-[calc(50%_-_7.5px)] max-[767px]:w-full"
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
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
