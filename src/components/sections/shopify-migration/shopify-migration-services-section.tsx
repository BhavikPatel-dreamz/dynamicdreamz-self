import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { shopifyMigrationSectionCopy } from "@/content/shopify-migration";

export type MigrationServiceCard = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type ShopifyMigrationServicesSectionProps = {
  heading?: string;
  description?: React.ReactNode | string;
  items: readonly MigrationServiceCard[];
  className?: string;
};

export function ShopifyMigrationServicesSection({
  heading = shopifyMigrationSectionCopy.servicesHeading,
  description = shopifyMigrationSectionCopy.servicesDescription,
  items,
  className = "migration-services-sec pt-16 pb-0 max-[992px]:pt-12",
}: ShopifyMigrationServicesSectionProps) {
  return (
    <section className={className} aria-labelledby="migration-services-title">
      <Container>
        <div className="section-title header-text text-center">
          <h2
            id="migration-services-title"
            className="mb-2.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[1199px]:text-[30px] max-[1199px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]"
          >
            {heading}
          </h2>
          {description && (
            <p className="mx-auto max-w-[950px] font-sans text-[18px] font-medium leading-[34.2px] text-muted max-[1199px]:text-base max-[1199px]:leading-[30px] max-[767px]:text-sm max-[767px]:leading-[24px]">
              {description}
            </p>
          )}
        </div>

        <div className="migration-wrapper mt-[50px] flex flex-wrap justify-center -mx-2 max-[767px]:mt-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="migration-col mb-5 w-1/3 px-2 transition-transform duration-300 ease-in-out hover:-translate-y-2.5 max-[992px]:w-1/2 max-[992px]:mb-4 max-[767px]:w-full"
            >
              <Link
                href={item.href}
                className="migration-box group relative z-0 block h-full w-full rounded-[15px] border border-[#d9d9d9] p-[34px_34px_30px_34px] transition-all duration-300 hover:border-transparent before:absolute before:-inset-[3px] before:-z-20 before:rounded-[15px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 after:absolute after:inset-0 after:-z-10 after:rounded-[14px] after:bg-white max-[1199px]:p-5"
              >
                <div className="migration-img mb-5 text-center">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={245}
                    height={92}
                    className="mx-auto h-auto w-full max-w-[245px] object-contain"
                  />
                </div>
                <h3 className="mb-2.5 font-sans text-[18px] font-bold leading-[34px] text-ink max-[1199px]:text-[18px] max-[1199px]:leading-7">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="m-0 font-sans text-base font-medium leading-[27.2px] tracking-[0.32px] text-muted max-[1199px]:text-sm max-[1199px]:leading-6">
                    {item.description}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
