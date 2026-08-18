import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyServices } from "@/content/shopify-plus-agency";

export function AgencyServicesSection() {
  return (
    <section className="what-we-provide-sec pt-20 pb-0" data-section="services">
      <Container>
        <div className="mb-5 flex items-center justify-between max-[991px]:mb-[30px] max-[991px]:flex-col max-[991px]:text-center">
          <div className="w-[calc(41%-30px)] px-[15px] max-[991px]:w-full max-[991px]:p-0">
            <h2 className="m-0 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:mb-[30px]">
              {shopifyPlusAgencyServices.heading}
            </h2>
          </div>
          <div className="w-[calc(55%-30px)] px-[15px] max-[991px]:w-full max-[991px]:p-0">
            <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
              {shopifyPlusAgencyServices.description}
            </p>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="-mx-2 mb-[25px] flex flex-wrap justify-center">
            {shopifyPlusAgencyServices.items.map((service) => (
              <div
                className="group w-1/2 px-2 pb-6 transition-transform duration-300 ease-in-out hover:-translate-y-2.5 max-[991px]:w-full"
                key={service.title}
              >
                <div className="relative h-full rounded-[10px] border-[1.5px] border-[#d9d9d9] bg-white px-[40px] pt-[45px] pb-[45px] pl-[35px] transition-colors duration-300 ease-in-out group-hover:border-transparent max-[1199px]:p-[30px_20px] max-[767px]:text-center">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-[3px] -z-10 rounded-[10px] bg-gradient-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  />
                  <div className="icon flex h-[50px] w-[66px] items-center max-[767px]:mx-auto">
                    <Image
                      src={service.icon}
                      alt={service.iconAlt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="mt-[23px] mb-5 text-base leading-[27px] font-bold tracking-[0.32px] text-ink max-[1199px]:mt-[15px] max-[1199px]:mb-2.5">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-[27px] font-medium tracking-[0.32px] text-[#535353]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <ButtonLink
              aria-label={shopifyPlusAgencyServices.cta.ariaLabel}
              href={shopifyPlusAgencyServices.cta.href}
              target="_blank"
              variant="primary"
            >
              {shopifyPlusAgencyServices.cta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}