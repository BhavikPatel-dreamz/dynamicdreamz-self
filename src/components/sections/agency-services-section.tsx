import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyServices } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

import { formatBrText } from "@/lib/text-formatting";

function removeBreakTags(text: string) {
  return text.replace(/<br\s*\/?>/gi, " ");
}

export type AgencyServiceItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  bullets?: readonly string[];
  href?: string;
  link?: string;
};

export type AgencyServicesContent = {
  heading: string;
  description: string;
  items: readonly AgencyServiceItem[];
  cta?: {
    label: string;
    href: string;
    ariaLabel?: string;
  };
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
};

export function AgencyServicesSection({
  content = shopifyPlusAgencyServices,
  variant = "compact",
  headerLayout = "split",
  showDescription = true,
  className = "what-we-provide-sec py-20 max-[992px]:py-[50px]",
  id = "shopify-services",
  hideCta = false,
  columns = 2,
  cardVariant = "default",
  cardBgClassName,
  eyebrow,
  headerTitleColumnClassName,
  headerTextColumnClassName,
}: AgencyServicesSectionProps) {
  const isCompact = variant === "compact";
  const isServicesBox = cardVariant === "services-box";
  const isWebflow = cardVariant === "webflow";

  return (
    <section className={className} data-section="services" id={id}>
      <Container>
        {isCompact ? (
          <SplitSectionHeading
            className="mb-[50px] gap-10 max-[992px]:gap-2.5"
            description={showDescription ? content.description : undefined}
            eyebrow={eyebrow}
            heading={content.heading}
            textColumnClassName={headerTextColumnClassName}
            titleColumnClassName={headerTitleColumnClassName}
            variant="services"
          />
        ) : headerLayout === "centered" ? (
          <div className="heading-text mx-auto max-w-[780px] text-center">
            <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
              {formatBrText(removeBreakTags(content.heading))}
            </h2>
            {showDescription && (
              <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
                {formatBrText(removeBreakTags(content.description))}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-5 flex items-center justify-between max-[992px]:mb-[30px] max-[992px]:flex-col max-[992px]:items-start max-[992px]:text-left">
            <div className="w-[calc(41%-30px)] px-[15px] max-[992px]:w-full max-[992px]:p-0">
              <h2 className="m-0 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:mb-2.5">
                {formatBrText(removeBreakTags(content.heading))}
              </h2>
            </div>
            <div className="w-[calc(55%-30px)] px-[15px] max-[992px]:w-full max-[992px]:p-0">
              {showDescription && (
                <p className="mb-6 max-[992px]:mb-0 text-[18px] font-medium leading-[34.2px] text-muted">
                  {formatBrText(removeBreakTags(content.description))}
                </p>
              )}
            </div>
          </div>
        )}
        <div className={isCompact ? "" : "mt-[50px]"}>
          <div className="-mx-2 mb-[25px] flex flex-wrap justify-center">
            {content.items.map((service) => {
              const serviceHref = service.href ?? service.link;
              const hasLink = typeof service.href === "string" || typeof service.link === "string";

              const cardContent = isWebflow ? (
                <div className="h-full rounded-[15px] border border-[#f7f4e9] bg-[#f7f4e9] p-[35px_36px] max-[1199px]:p-[30px_20px] max-[767px]:p-5">
                  <div className="h-12 w-12">
                    <Image
                      src={service.icon}
                      alt={service.iconAlt}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mt-[30px] border-t border-[rgba(37,44,21,0.1)] pt-[30px] font-sans text-base font-bold leading-7 tracking-[0.32px] text-ink max-[767px]:mt-5 max-[767px]:pt-5 max-[767px]:text-base max-[767px]:leading-6">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-base font-medium leading-[26px] tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                    {service.description}
                  </p>
                </div>
              ) : isServicesBox ? (
                <div
                  className={cn(
                    "services-text relative flex h-full items-start rounded-[10px] border border-[rgba(40,40,40,0.08)] p-5 transition-all duration-300 ease-in-out hover:border-transparent hover:shadow-md",
                    cardBgClassName ?? "bg-[#fafaf7]",
                  )}
                >
                  <div className="icon flex size-6 shrink-0 items-center justify-center pt-0.5">
                    <Image
                      src={service.icon}
                      alt={service.iconAlt}
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                    />
                  </div>
                  <div className="text-block w-[calc(100%-24px)] pl-4">
                    <h3 className="m-0 font-sans text-[18px] font-bold leading-[27px] tracking-[0.32px] text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 mb-0 font-sans text-[14px] font-medium leading-[24px] text-[#535353]">
                      {service.description}
                    </p>
                    {hasLink && (
                      <div className="services-read-more btn-link-arrow mt-4 flex items-center text-sm font-semibold uppercase tracking-[0.32px] text-[#ad5151]">
                        <span>{sharedUiCopy.readMore}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="ml-1.5 inline-block shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className={cn(
                    "relative h-full rounded-[10px] transition-colors duration-300 ease-in-out",
                    isCompact
                      ? "border border-[rgba(40,40,40,0.08)] bg-[#fafaf7] p-5 max-[767px]:p-[18px]"
                      : "border-[1.5px] border-[#d9d9d9] bg-white px-[40px] pt-[45px] pb-[45px] pl-[35px] group-hover:border-transparent max-[1199px]:p-[30px_20px]",
                    hasLink && (isCompact ? "pb-[70px]" : "pb-[85px] max-[1199px]:pb-[70px] max-[767px]:pb-[55px]"),
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -inset-[3px] -z-10 rounded-[10px] bg-gradient-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
                      isCompact && "hidden",
                    )}
                  />
                  <div className={cn(isCompact && "flex items-start gap-4")}>
                    <div className={cn("icon flex shrink-0 items-center", isCompact ? "size-6 justify-center" : "h-[50px] w-[66px]")}>
                      <Image
                        className={isCompact ? "size-6 object-contain" : undefined}
                        src={service.icon}
                        alt={service.iconAlt}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3
                      className={cn(
                        "tracking-[0.32px] text-ink",
                        isCompact
                          ? "m-0 font-montreal-medium text-xl font-normal leading-[28.8px]"
                          : "mt-[23px] mb-5 font-montserrat text-base font-bold leading-[27px] max-[1199px]:mt-[15px] max-[1199px]:mb-2.5",
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "font-sans tracking-[0.32px] text-[#535353]",
                      isCompact ? "mt-2 pl-10 text-sm font-normal leading-6" : "mt-5 text-base font-medium leading-[27px]",
                    )}
                  >
                    {service.description}
                  </p>
                  {service.bullets && service.bullets.length > 0 && (
                    <ul className={cn("mt-6 border-t border-[#d9d9d9] pt-6 font-sans text-base font-semibold leading-[27.2px] tracking-[0.32px] text-[#535353]", isCompact && "ml-[42px] max-[767px]:ml-0")}>
                      {service.bullets.map((bullet, idx) => (
                        <li
                          className="mb-4 flex items-center gap-3.5 text-base font-semibold leading-[27.2px] text-[#535353] last:mb-0"
                          key={idx}
                        >
                          <Image
                            src="/assets/icons/bullets-icon.svg"
                            alt="Bullet point icon"
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] shrink-0"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {hasLink && (
                    <div className="services-read-more absolute bottom-5 left-[35px] right-[40px] flex items-center border-t-[1.5px] border-[#d9d9d9] pt-5 text-base font-semibold text-[#e3342f] transition-colors max-[1199px]:bottom-[15px] max-[1199px]:left-5 max-[1199px]:right-5 max-[1199px]:pt-3.5 max-[1199px]:text-[15px] max-[767px]:bottom-2.5 max-[767px]:justify-center max-[767px]:pt-2.5">
                      <span>{sharedUiCopy.readMore}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="12"
                        viewBox="0 0 20 12"
                        fill="none"
                        className="ml-2.5 inline-block shrink-0 -scale-100 transition-transform duration-300"
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

              const colClass =
                columns === 4
                  ? "w-1/4 max-[992px]:w-1/2 max-[767px]:w-full"
                  : columns === 3
                    ? "w-1/3 max-[992px]:w-1/2 max-[767px]:w-full"
                    : "w-1/2 max-[992px]:w-full";

              return (
                <div
                  className={cn(
                    "px-2",
                    isWebflow
                      ? "mb-5"
                      : isServicesBox
                        ? "mb-4"
                        : "group pb-6 transition-transform duration-300 ease-in-out hover:-translate-y-2.5",
                    colClass,
                  )}
                  key={service.title}
                >
                  {serviceHref ? (
                    <Link href={serviceHref} className="block h-full">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </div>
              );
            })}
          </div>
          {!hideCta && content.cta && (
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
