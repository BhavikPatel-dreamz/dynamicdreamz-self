import Image from "next/image";

import { ResourcesCategoryAccordion } from "@/components/sections/resources/resources-category-accordion";
import { Container } from "@/components/ui/container";
import { resourcesHub } from "@/content/resources";

export function ResourcesHubSection() {
  return (
    <section className="resources-listing mt-[180px] bg-[#f7f5ef] py-[60px] max-[992px]:mt-[120px] max-[767px]:mt-[90px]" aria-labelledby="resources-hub-title">
      <Container>
        <div className="resources-listing-row flex items-start gap-[84px] max-[1199px]:gap-[50px] max-[992px]:flex-col">
          <div className="resolurces-listing-wrapper w-[560px] shrink-0 max-[1199px]:w-[450px] max-[992px]:w-full">
            <h2 id="resources-hub-title" className="relative mb-7 pl-5 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] before:absolute before:top-1/2 before:left-0 before:h-[34px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(111.61deg,#15c064_-0.6%,#00d1ff_92.42%)] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-[24px] max-[767px]:leading-[33.24px]">{resourcesHub.title}</h2>
            <ul>
              {resourcesHub.points.map((point) => (
                <li className="relative mb-8 pl-[35px] text-[16px] leading-[1.9] font-medium text-muted last:mb-0" key={point}>
                  <Image className="absolute top-1 left-0 size-[22px]" src="/assets/icons/gradient-check.svg" alt="" width={22} height={22} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="resources-listing-accordion min-w-0 flex-1 max-[992px]:w-full">
            <ResourcesCategoryAccordion categories={resourcesHub.categories} />
          </div>
        </div>
      </Container>
    </section>
  );
}
