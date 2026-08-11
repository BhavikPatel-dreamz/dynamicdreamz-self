import Image from "next/image";

import { CareerSectionHeading } from "@/components/sections/career/career-section-heading";
import { Container } from "@/components/ui/container";
import { workplaceBenefits } from "@/content/career";

export function CareerBenefitsSection() {
  return (
    <section
      className="p-0"
      data-career="benefits"
      aria-labelledby="career-benefits-title"
    >
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <CareerSectionHeading
          id="career-benefits-title"
          title={workplaceBenefits.title}
          description={workplaceBenefits.description}
          variant="benefits"
        />

        <div className="mt-[50px] -mr-2 -mb-4 -ml-2 flex flex-wrap justify-center max-[767px]:mx-0">
          {workplaceBenefits.items.map((benefit) => (
            <article
              className="mb-4 w-1/4 px-2 max-[991px]:w-1/2 max-[767px]:w-full max-[767px]:px-0"
              key={benefit.title}
            >
              <div className="group/benefit relative z-0 rounded-[10px]">
                <span
                  className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[10px] bg-linear-to-r from-[#15c064] to-[#00d1ff] opacity-0 shadow-none transition-all duration-300 group-hover/benefit:opacity-100 group-hover/benefit:shadow-[0_39px_50px_rgb(74_74_74/5%)]"
                  aria-hidden="true"
                />
                <div
                  className="relative z-10 flex min-h-[245px] flex-col items-center justify-center rounded-[10px] border border-[#efefef] bg-white px-5 py-6 text-center transition-all duration-300 group-hover/benefit:border-transparent group-hover/benefit:bg-[linear-gradient(180deg,#eefff6_-51.25%,#fff_75.31%)]"
                  data-career="benefit-card"
                >
                  <div className="mx-auto mb-6 flex h-[68px] w-[78px] items-center justify-center">
                    <Image
                      className="max-h-full max-w-full object-contain"
                      src={benefit.icon}
                      alt={benefit.alt}
                      width={benefit.width}
                      height={benefit.height}
                    />
                  </div>
                  <p className="text-base leading-[21.52px] font-medium text-ink">
                    {benefit.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
