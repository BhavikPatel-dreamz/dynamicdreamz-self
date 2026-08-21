import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyServices } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

import { formatBrText } from "@/lib/text-formatting";

export type AgencyServiceItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  href?: string;
};

export type AgencyServicesContent = {
  heading: string;
  description: string;
  items: readonly AgencyServiceItem[];
  cta: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
};

export type AgencyServicesSectionProps = {
  content?: AgencyServicesContent;
  headerLayout?: "split" | "centered";
  showDescription?: boolean;
  className?: string;
  id?: string;
  hideCta?: boolean;
};

export function AgencyServicesSection({
  content = shopifyPlusAgencyServices,
  headerLayout = "split",
  showDescription = true,
  className = "what-we-provide-sec pt-20 pb-0",
  id = "shopify-services",
  hideCta = false,
}: AgencyServicesSectionProps) {
  return (
    <section className={className} data-section="services" id={id}>
      <Container>
        {headerLayout === "centered" ? (
          <div className="heading-text mx-auto max-w-[780px] text-center">
            <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
              {formatBrText(content.heading, "max-[1199px]:hidden")}
            </h2>
            {showDescription && (
              <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
                {formatBrText(content.description, "max-[1199px]:hidden")}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-5 flex items-center justify-between max-[991px]:mb-[30px] max-[991px]:flex-col max-[991px]:text-center">
            <div className="w-[calc(41%-30px)] px-[15px] max-[991px]:w-full max-[991px]:p-0">
              <h2 className="m-0 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:mb-[30px]">
                {formatBrText(content.heading, "max-[1199px]:hidden")}
              </h2>
            </div>
            <div className="w-[calc(55%-30px)] px-[15px] max-[991px]:w-full max-[991px]:p-0">
              {showDescription && (
                <p className="mb-6 text-[18px] font-medium leading-[34.2px] text-muted">
                  {formatBrText(content.description, "max-[1199px]:hidden")}
                </p>
              )}
            </div>
          </div>
        )}
        <div className="mt-[50px]">
          <div className="-mx-2 mb-[25px] flex flex-wrap justify-center">
            {content.items.map((service) => {
              const hasLink = Boolean(service.href);

              const cardContent = (
                <div
                  className={cn(
                    "relative h-full rounded-[10px] border-[1.5px] border-[#d9d9d9] bg-white px-[40px] pt-[45px] pb-[45px] pl-[35px] transition-colors duration-300 ease-in-out group-hover:border-transparent max-[1199px]:p-[30px_20px]",
                    hasLink && "pb-[85px] max-[1199px]:pb-[70px] max-[767px]:pb-[55px]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -inset-[3px] -z-10 rounded-[10px] bg-gradient-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  />
                  <div className="icon flex h-[50px] w-[66px] items-center">
                    <Image
                      src={service.icon}
                      alt={service.iconAlt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="mt-[23px] mb-5 text-base font-bold leading-[27px] tracking-[0.32px] text-ink max-[1199px]:mt-[15px] max-[1199px]:mb-2.5 font-montserrat">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-[27px] tracking-[0.32px] text-[#535353]">
                    {service.description}
                  </p>

                  {hasLink && (
                    <div className="services-read-more absolute bottom-5 left-[35px] right-[40px] flex items-center border-t-[1.5px] border-[#d9d9d9] pt-5 text-base font-semibold text-[#e3342f] transition-colors max-[1199px]:bottom-[15px] max-[1199px]:left-5 max-[1199px]:right-5 max-[1199px]:pt-3.5 max-[1199px]:text-[15px] max-[767px]:bottom-2.5 max-[767px]:justify-center max-[767px]:pt-2.5">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        className="ml-2.5 inline-block shrink-0 -scale-100 transition-transform duration-300 group-hover:-translate-x-1"
                        aria-hidden="true"
                      >
                        <path
                          d="M19 6.75C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25V6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z"
                          fill="#e3342f"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );

              return (
                <div
                  className="group w-1/2 px-2 pb-6 transition-transform duration-300 ease-in-out hover:-translate-y-2.5 max-[991px]:w-full"
                  key={service.title}
                >
                  {service.href ? (
                    <Link href={service.href} className="block h-full">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
          {!hideCta && (
            <div className="text-center">
              <ButtonLink
                aria-label={content.cta.ariaLabel}
                href={content.cta.href}
                variant="primary"
              >
                {content.cta.label}
              </ButtonLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
