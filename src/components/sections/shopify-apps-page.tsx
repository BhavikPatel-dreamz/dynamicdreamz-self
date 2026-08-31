import Image from "next/image";
import { Container } from "@/components/ui/container";
import { shopifyAppsContent } from "@/content/shopify-apps";

export function ShopifyAppsPage() {
  const { hero, apps } = shopifyAppsContent;

  return (
    <div
      className="overflow-x-clip font-sans [&_h1]:font-sans [&_h2]:font-sans [&_h3]:font-sans [&_p]:font-sans [&_span]:font-sans"
      data-page="shopify-apps"
    >
      {/* Inner Hero Section */}
      <div className="inner-hero-sec relative overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-[160px] pb-[85px] max-[992px]:pt-[140px] max-[992px]:pb-[46px]">
        <Container>
          <div className="inner-hero-content mx-auto max-w-[770px] text-center">
            <h1 className="m-0 inline-block font-sans text-[50px] font-bold leading-[66px] tracking-[-1px] text-[#282828] max-[992px]:text-[30px] max-[992px]:leading-[60px] max-[767px]:leading-[40px]">
              {hero.title}
            </h1>
          </div>
        </Container>
      </div>

      {/* Shopify Apps List Section */}
      <section className="shopify-apps-list py-20 max-[992px]:py-[50px]">
        <Container>
          <div className="wrapper -mx-[10px] flex flex-wrap list-none gap-y-[15px] max-[1199px]:gap-y-[30px] max-[767px]:mx-0">
            {apps.map((app) => (
              <div
                key={app.id}
                className="w-1/4 px-[10px] max-[1199px]:w-1/2 max-[767px]:w-full max-[767px]:px-0"
              >
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="list-block group flex items-start text-[#252c15] no-underline transition-all duration-300 hover:text-[#ad5151]"
                >
                  <div className="icon-block h-[52px] w-[52px] shrink-0 overflow-hidden rounded-[8px] border border-black/10 flex">
                    <Image
                      src={app.image}
                      alt={app.alt}
                      width={52}
                      height={52}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-block w-[calc(100%-52px)] pl-[10px]">
                    <div className="title">
                      <h3 className="mb-[7px] font-sans text-[14px] font-semibold leading-[1.2] text-[#282828] transition-colors duration-300 group-hover:text-[#ad5151]">
                        {app.title}
                      </h3>
                    </div>
                    <div className="aditional-info">
                      <span className="mb-[5px] flex font-sans text-[12px] font-medium leading-[1.2] tracking-normal text-[#56524e]">
                        {app.additionalInfo}
                      </span>
                    </div>
                    <div className="description">
                      <p className="m-0 font-sans text-[12px] font-normal leading-[1.2] tracking-normal text-[#56524e]">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
