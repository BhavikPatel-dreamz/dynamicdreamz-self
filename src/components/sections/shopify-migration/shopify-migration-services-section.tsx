import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";
import type { MigrationServiceCard } from "@/content/shopify-migration";

export type { MigrationServiceCard };

export type MigrationServicesBanner = {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ShopifyMigrationServicesSectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: string | readonly string[];
  description?: React.ReactNode | string | readonly string[];
  items: readonly MigrationServiceCard[];
  banner?: MigrationServicesBanner;
  className?: string;
};

export function ShopifyMigrationServicesSection({
  id = "explore_migration_options",
  eyebrow,
  heading,
  description,
  items,
  banner,
  className,
}: ShopifyMigrationServicesSectionProps) {
  return (
    <section
      className={cn(
        "migration-services-sec bg-[#f7f4e9] py-20 max-[991px]:py-[50px]",
        className,
      )}
      id={id}
    >
      <Container>
        {(eyebrow || heading || description) && (
          <SplitSectionHeading
            className="mb-[50px]"
            description={typeof description === "string" || Array.isArray(description) ? description : undefined}
            eyebrow={eyebrow}
            heading={heading ?? ""}
            variant="left"
          />
        )}

        <div
          className="migration-wrapper -mx-2 mt-[50px] flex flex-wrap justify-center"
          data-aos="fade-up"
        >
          {items.map((item) => (
            <div
              className="migration-col mb-5 w-1/3 px-2 transition-all duration-300 ease-in-out max-[1199px]:mb-4 max-[1199px]:w-1/2 max-[767px]:w-full"
              data-aos="fade-up"
              key={item.title}
            >
              <Link
                className="migration-box relative flex h-full w-full flex-col justify-between rounded-[15px] border border-[#d9d9d9] bg-white p-5 transition-transform duration-300 ease-in-out hover:-translate-y-[3px]"
                href={item.href}
              >
                <div>
                  <div className="migration-img mb-2.5 text-center">
                    <Image
                      alt={item.imageAlt}
                      className="block h-[184px] w-full rounded-2xl object-cover"
                      height={184}
                      src={item.image}
                      width={380}
                    />
                  </div>
                  <h3 className="mb-1.5 font-montreal-medium text-[18px] font-normal leading-7 text-ink">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-sans text-sm font-normal leading-6 text-[#535353]">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="btn-link-arrow mt-5 inline-flex items-center font-montserrat text-sm font-bold uppercase leading-none text-[#ad5151] transition-colors hover:text-ink">
                  <span>{item.ctaLabel ?? "Explore migration"}</span>
                  <svg
                    aria-hidden="true"
                    className="ml-2.5 size-2.5 shrink-0 fill-current"
                    viewBox="0 0 12 12"
                  >
                    <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {banner && (
          <div
            className="wrapper mt-[50px] flex items-center justify-between rounded-[30px] border-[1.5px] border-[rgba(23,30,22,0.1)] bg-[#EFF4EF] p-[40px_32px_32px_32px] max-[1199px]:flex-wrap max-[991px]:mt-8 max-[991px]:rounded-[20px] max-[991px]:p-[30px] max-[767px]:p-5"
            data-aos="fade-up"
          >
            <div className="wlp-banner-content max-w-[868px] max-[1440px]:max-w-[720px] max-[1199px]:mb-5 max-[1199px]:max-w-full">
              <span className="badge mb-2 inline-block rounded-[50px] bg-[#282828] px-[10.5px] py-[6.5px] font-montserrat text-xs font-bold uppercase leading-none text-white">
                {banner.badge}
              </span>
              <h2 className="wlp-banner-title mb-2.5 font-montreal-medium text-[35px] font-normal leading-[1.4] text-ink max-[1199px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.3]">
                {banner.title}
              </h2>
              <p className="wlp-banner-description font-sans text-base font-medium leading-7 text-[#535353] max-[767px]:text-sm max-[767px]:leading-6">
                {banner.description}
              </p>
            </div>
            <div className="wlp-banner-action shrink-0">
              <ButtonLink href={banner.ctaHref} variant="primary">
                {banner.ctaLabel}
              </ButtonLink>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
