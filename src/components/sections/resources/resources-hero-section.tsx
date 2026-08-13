import { Fragment } from "react";

import { Container } from "@/components/ui/container";
import { resourcesHero } from "@/content/resources";

export function ResourcesHeroSection() {
  return (
    <section className="inner-hero-sec pt-[210px] max-[991px]:pt-[140px]" aria-labelledby="resources-title">
      <Container className="min-[1440px]:!max-w-[1180px]">
        <div className="inner-hero-content text-center">
          <h1 id="resources-title" className="mb-6 text-[50px] leading-[66px] font-bold tracking-[-1px] max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10">{resourcesHero.title}</h1>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[991px]:text-[16px] max-[991px]:leading-[30.4px]">
            {resourcesHero.description.map((line, index) => (
              <Fragment key={line}>
                {line}
                {index < resourcesHero.description.length - 1 && (
                  <>
                    <br className="max-[1199px]:hidden" />{" "}
                  </>
                )}
              </Fragment>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}
