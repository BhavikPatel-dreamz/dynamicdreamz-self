import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export type PartnerWhyChooseItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type PartnerWhyChooseSectionProps = {
  content: {
    heading: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    items: readonly PartnerWhyChooseItem[];
  };
  className?: string;
  id?: string;
};

export function PartnerWhyChooseSection({
  content,
  className = "hiring-services-sec mb-20 max-[767px]:mb-[50px]",
  id = "why-choose-dynamic-dreamz",
}: PartnerWhyChooseSectionProps) {
  return (
    <section
      className={`${className} bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[50px]`}
      data-section="partner-why-choose"
      id={id}
    >
      <Container>
        <div className="title mb-[50px] text-center">
          <h2 className="mb-4 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px]">
            {content.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-[850px] font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
            As a proud{" "}
            <strong className="bg-[linear-gradient(97deg,#15C064_28.5%,#00D1FF_91.82%)] bg-clip-text font-bold text-transparent">
              Shopify Plus Partner
            </strong>
            , we have been vetted and recognized by Shopify for our expertise in
            delivering Shopify solutions and exceptional results. Trust us to
            bring your business the full power of Shopify Plus with our migration
            from Magento to Shopify Plus​.
          </p>
          <ButtonLink
            aria-label="Verify Our Partnerships"
            href={content.ctaHref}
            target="_blank"
            variant="primary"
          >
            {content.ctaLabel}
          </ButtonLink>
        </div>
        <div className="carousel-wrapper -mx-2 -mb-[30px] flex flex-wrap justify-center">
          {content.items.map((item, index) => (
            <div
              className="carousel-item mb-[30px] w-1/3 px-2 max-[991px]:w-1/2 max-[767px]:w-full"
              key={item.title || index}
            >
              <div className="card-main group relative h-full rounded-[15px] before:pointer-events-none before:absolute before:-inset-[2px] before:z-0 before:block before:rounded-[15px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:left-0 after:z-[2] after:block after:h-[12px] after:rounded-b-[15px] after:bg-gradient-to-r after:from-[#15c064] after:to-[#00d1ff] after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100">
                <div className="carousel-card relative z-[1] h-full rounded-[15px] bg-white p-[40px_30px_60px_30px] shadow-[0_4px_30px_0_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.08)] max-[767px]:p-[30px_20px]">
                  <div className="icon mb-5 h-[60px] w-[60px] max-[767px]:h-[50px] max-[767px]:w-[50px]">
                    <Image
                      alt={item.iconAlt}
                      className="size-full object-contain"
                      height={60}
                      src={item.icon}
                      width={60}
                    />
                  </div>
                  <div className="text">
                    <h3 className="mb-[5px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] max-[767px]:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
