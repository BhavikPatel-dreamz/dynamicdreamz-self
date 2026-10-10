import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";

import { formatBrText } from "@/lib/text-formatting";



export type AgencyServiceItem = {
  icon?: string;
  iconAlt?: string;
  iconSvg?: React.ReactNode;
  title: string | readonly string[];
  description: string | readonly string[];
  bullets?: readonly string[];
  href?: string;
  link?: string;
};

export type AgencyServicesContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  items: readonly AgencyServiceItem[];
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
};

const defaultAgencyServicesContent: AgencyServicesContent = {
  heading: "",
  description: "",
  items: [],
};

export type AgencyServicesSectionProps = {
  content?: AgencyServicesContent;
  variant?: "compact" | "classic";
  headerLayout?: "split" | "centered";
  showDescription?: boolean;
  className?: string;
  id?: string;
  hideCta?: boolean;
  columns?: 2 | 3 | 4;
  cardVariant?: "default" | "services-box" | "webflow";
  cardBgClassName?: string;
  eyebrow?: string;
  headerTitleColumnClassName?: string;
  headerTextColumnClassName?: string;
  preserveBreaks?: boolean;
};

export function AgencyServicesSection({
  content = defaultAgencyServicesContent,
  showDescription = true,
  className = "what-we-provide-sec py-20 max-[992px]:py-[50px]",
  id = "shopify-services",
  hideCta = false,
  columns = 2,
  cardBgClassName,
  eyebrow,
  headerTitleColumnClassName,
  headerTextColumnClassName,
  preserveBreaks = false,
}: AgencyServicesSectionProps) {
  const resolvedEyebrow = eyebrow ?? content.eyebrow;

  return (
    <section className={className} data-section="services" id={id}>
      <Container>
        <SplitSectionHeading
          className="mb-0 gap-10 max-[992px]:gap-2.5"
          description={showDescription ? content.description : undefined}
          eyebrow={resolvedEyebrow}
          heading={content.heading}
          preserveBreaks={preserveBreaks}
          textColumnClassName={headerTextColumnClassName}
          titleColumnClassName={headerTitleColumnClassName}
          variant="services"
        />

        <div className="services-provide-main mt-[50px] max-[991px]:mt-[30px]">
          <div
            className={cn(
              "wrapper grid gap-4 max-[991px]:block",
              columns === 4
                ? "grid-cols-4 max-[1199px]:grid-cols-2"
                : columns === 3
                  ? "grid-cols-3 max-[1199px]:grid-cols-2"
                  : "grid-cols-2",
            )}
          >
            {content.items.map((service) => {
              const serviceHref = service.href ?? service.link;

              return (
                <div
                  className="services-box w-full max-[991px]:[&:not(:last-child)]:mb-4"
                  data-aos="fade-up"
                  key={typeof service.title === "string" ? service.title : service.title.join(" ")}
                >
                  <div
                    className={cn(
                      "services-text relative flex h-full flex-col justify-between rounded-[10px] border border-[rgba(40,40,40,0.08)] bg-[#fafaf7] p-5",
                      cardBgClassName,
                    )}
                  >
                    <div className="top-block flex max-[767px]:flex-wrap">
                      <div className="icon flex size-6 shrink-0 items-center justify-center max-[767px]:mb-[15px] [&>img]:size-full [&>img]:max-h-6 [&>img]:max-w-6 [&>img]:object-contain [&>svg]:size-full [&>svg]:max-h-6 [&>svg]:max-w-6 [&>svg]:object-contain">
                        {service.iconSvg ? (
                          service.iconSvg
                        ) : service.icon ? (
                          <Image
                            src={service.icon}
                            alt={service.iconAlt ?? ""}
                            width={24}
                            height={24}
                            className="size-6 object-contain"
                          />
                        ) : null}
                      </div>
                      <div className="text-block w-[calc(100%-24px)] pl-4 max-[767px]:w-full max-[767px]:pl-0">
                        <h3 className="m-0 mb-2.5 font-montreal-medium text-[20px] font-normal leading-[28.8px] tracking-[0.32px] text-ink">
                          {formatBrText(service.title)}
                        </h3>
                        <p className="mt-2.5 mb-0 font-sans text-[14px] font-normal leading-6 tracking-[0.32px] text-[#535353]">
                          {formatBrText(service.description)}
                        </p>
                        {service.bullets && service.bullets.length > 0 && (
                          <ul className="mt-[15px] border-t border-[#d9d9d9] pt-1.5 list-none p-0 font-sans text-[14px] font-normal leading-6 text-[#535353]">
                            {service.bullets.map((bullet, idx) => (
                              <li className="flex items-center gap-2.5 py-[9px] leading-normal text-[#535353]" key={idx}>
                                <Image
                                  alt=""
                                  className="size-[17px] shrink-0 object-contain"
                                  height={17}
                                  src="/assets/icons/red-check.svg"
                                  width={17}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div
                      className={cn(
                        "bottom-block pl-10 max-[767px]:pl-0",
                        serviceHref ? "mt-[15px]" : "m-0",
                      )}
                    >
                      {serviceHref ? (
                        <Link
                          className="text-arrow-link group/link inline-flex items-center text-[14px] font-bold uppercase leading-none tracking-normal text-[#ad5151] transition-colors duration-300 hover:text-ink"
                          href={serviceHref}
                        >
                          <span>{sharedUiCopy.readMore}</span>
                          <svg
                            aria-hidden="true"
                            className="ml-2.5 h-auto w-2.5 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 [&>path]:fill-[#ad5151] group-hover/link:[&>path]:fill-ink"
                            fill="none"
                            height="12"
                            viewBox="0 0 12 12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
                              fill="#ad5151"
                            />
                          </svg>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {!hideCta && content.cta && (
            <div className="mt-8 text-center" data-aos="fade-up">
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
