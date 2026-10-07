import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyCroRevenueImpact } from "@/content/shopify-cro-agency";

export type ShopifyCroRevenueImpactSectionProps = {
  content?: typeof shopifyCroRevenueImpact;
  className?: string;
};

export function ShopifyCroRevenueImpactSection({
  content = shopifyCroRevenueImpact,
  className = "revenue-impact-section rounded-b-[50px] bg-[#171E16] py-[60px] text-white max-[767px]:rounded-b-[30px] max-[767px]:py-10",
}: ShopifyCroRevenueImpactSectionProps) {
  return (
    <section className={className}>
      <Container>
        <SplitSectionHeading
          className="mb-[66px] max-[991px]:mb-10"
          dark
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          textColumnClassName="text-right max-[991px]:text-left"
        />

        <div
          data-aos="fade-up"
          className="revenue-impact-wrapper relative -mx-[30px] -mb-[30px] flex flex-wrap max-[1199px]:-mx-2.5 max-[1199px]:-mb-5 max-[767px]:mx-0 max-[767px]:mb-0"
        >
          {/* Arrow connecting before & after on desktop/tablet */}
          <div className="pointer-events-none absolute left-[48%] top-1/2 z-20 h-[51px] w-[121px] -translate-x-1/2 -translate-y-1/2 max-[991px]:left-[49%] max-[991px]:h-[31px] max-[991px]:w-[91px] max-[767px]:hidden">
            <Image
              src="/assets/shopify-cro-agency/impact/revenue-arrow.svg"
              alt=""
              width={121}
              height={51}
              className="size-full object-contain"
              aria-hidden="true"
            />
          </div>

          {/* Current State */}
          <div className="revenue-card mb-[30px] w-1/2 px-[30px] max-[1199px]:px-2.5 max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <div className="revenue-card-body-box h-full">
              <div className="revenue-card-body relative z-10 flex h-full flex-col justify-between rounded-[20px] bg-[#1E251D] p-[70px_40px_40px] before:absolute before:-inset-[1.5px] before:-z-20 before:rounded-[20px] before:bg-gradient-to-b before:from-white/50 before:to-transparent after:absolute after:inset-0 after:-z-10 after:rounded-[20px] after:bg-[#1E251D] max-[1199px]:p-[50px_30px_30px] max-[991px]:p-[50px_20px_20px] max-[767px]:p-[45px_16px_20px]">
                <span className="badge absolute -top-[15px] left-0 right-0 mx-auto w-fit z-10 rounded-[11px] border-[2.5px] border-white/50 bg-[#171E16] px-2.5 py-[1px] font-sans text-base font-semibold uppercase leading-[190%] text-white max-[767px]:text-sm">
                  {content.before.badge}
                </span>

                <div className="revenue-impact-card">
                  {content.before.metrics.map((item) => (
                    <div
                      key={item.label}
                      className="revenue-card-item mb-5 flex items-center border-b border-white/10 pb-5 last:mb-0 last:border-b-0 last:pb-0 max-[991px]:mb-4 max-[991px]:pb-4"
                    >
                      <span className="icon mr-5 flex size-[66px] shrink-0 items-center justify-center rounded-[15px] bg-white/5 max-[767px]:size-[52px]">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={30}
                          height={30}
                          className="size-[30px] object-contain max-[767px]:size-6"
                        />
                      </span>
                      <div className="revenue-card-content">
                        <h3 className="mb-[5px] font-sans text-[40px] font-normal leading-none tracking-[1.2px] text-white max-[991px]:text-[26px]">
                          {item.value}
                        </h3>
                        <span className="font-sans text-base font-medium leading-[124%] text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="revenue-card-total mt-[27px] rounded-[20px] border border-white/20 bg-white/5 p-3.5 text-center">
                  <span className="mb-1 block font-sans text-base font-medium leading-[124%] text-white">
                    {content.before.totalLabel}
                  </span>
                  <h2 className="m-0 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-white max-[991px]:text-[26px]">
                    {content.before.totalValue}
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* After Optimization */}
          <div className="revenue-card revenue-card-optimized mb-[30px] w-1/2 px-[30px] max-[1199px]:px-2.5 max-[1199px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <div className="revenue-card-body-box h-full">
              <div className="revenue-card-body relative z-10 flex h-full flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#18271C] to-transparent p-[70px_40px_40px] before:absolute before:-inset-[1.5px] before:-z-20 before:rounded-[20px] before:bg-gradient-to-b before:from-[#36F4A4] before:to-transparent after:absolute after:inset-0 after:-z-10 after:rounded-[20px] after:bg-[#18271C] max-[1199px]:p-[50px_30px_30px] max-[991px]:p-[50px_20px_20px] max-[767px]:p-[45px_16px_20px]">
                <span className="badge absolute -top-[15px] left-0 right-0 mx-auto w-fit z-10 rounded-[11px] border-[2.5px] border-[#36F4A4] bg-[#171E16] py-[1px] pr-2.5 pl-[30px] font-sans text-base font-semibold uppercase leading-[190%] text-white max-[767px]:text-sm">
                  <span className="absolute left-[15px] top-1/2 size-[7px] -translate-y-1/2 rounded-full bg-[#36F4A4]" />
                  {content.after.badge}
                </span>

                <div className="revenue-card-list">
                  {content.after.metrics.map((item) => (
                    <div
                      key={item.label}
                      className="revenue-card-item mb-5 flex items-center border-b border-white/10 pb-5 last:mb-0 last:border-b-0 last:pb-0 max-[991px]:mb-4 max-[991px]:pb-4"
                    >
                      <span className="icon mr-5 flex size-[66px] shrink-0 items-center justify-center rounded-[15px] bg-white/5 max-[767px]:size-[52px]">
                        <Image
                          src={item.icon}
                          alt=""
                          width={30}
                          height={30}
                          className="size-[30px] object-contain max-[767px]:size-6"
                        />
                      </span>
                      <div className="revenue-card-content">
                        <h3 className="mb-[5px] font-sans text-[40px] font-normal leading-none tracking-[1.2px] text-white max-[991px]:text-[26px]">
                          {item.value}
                        </h3>
                        <span className="font-sans text-base font-medium leading-[124%] text-white">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="revenue-card-total revenue-card-total-success mt-[27px] rounded-[20px] border-[1.5px] border-[#35F3A3] bg-transparent p-3.5 text-center">
                  <span className="mb-1 block font-sans text-base font-medium leading-[124%] text-white">
                    {content.after.totalLabel}
                  </span>
                  <h2 className="m-0 flex items-center justify-center gap-2.5 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-[#35F3A3] max-[991px]:text-[26px]">
                    {content.after.totalValue}
                    <svg
                      width="45"
                      height="23"
                      viewBox="0 0 45 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[23px] w-[45px] shrink-0 max-[991px]:h-4 max-[991px]:w-8"
                    >
                      <path
                        d="M0.767372 19.255C-0.0323814 19.7977 -0.240773 20.886 0.301917 21.6858C0.844608 22.4855 1.93287 22.6939 2.73263 22.1512L1.75 20.7031L0.767372 19.255ZM15.75 11.2031L16.7881 9.79428L15.7916 9.06002L14.7674 9.75504L15.75 11.2031ZM25.25 18.2031L24.2119 19.612L25.3511 20.4514L26.4103 19.5132L25.25 18.2031ZM44.4968 2.80899C44.5553 1.84426 43.8206 1.0148 42.8559 0.95633L27.1347 0.00353289C26.17 -0.0549355 25.3405 0.679733 25.2821 1.64446C25.2236 2.60919 25.9583 3.43865 26.923 3.49712L40.8973 4.34405L40.0504 18.3184C39.9919 19.2831 40.7266 20.1126 41.6913 20.1711C42.6561 20.2295 43.4855 19.4949 43.544 18.5301L44.4968 2.80899ZM1.75 20.7031L2.73263 22.1512L16.7326 12.6512L15.75 11.2031L14.7674 9.75504L0.767372 19.255L1.75 20.7031ZM15.75 11.2031L14.7119 12.612L24.2119 19.612L25.25 18.2031L26.2881 16.7943L16.7881 9.79428L15.75 11.2031ZM25.25 18.2031L26.4103 19.5132L43.9103 4.01315L42.75 2.70312L41.5897 1.3931L24.0897 16.8931L25.25 18.2031Z"
                        fill="url(#paint0_linear_cro_revenue)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_cro_revenue"
                          x1="36.75"
                          y1="3.70313"
                          x2="-1.25"
                          y2="22.2031"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#35F3A3" />
                          <stop
                            offset="0.542993"
                            stopColor="#35F3A3"
                            stopOpacity="0.8"
                          />
                          <stop
                            offset="0.874729"
                            stopColor="#35F3A3"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="revenue-impact-footer mt-11 text-center max-[767px]:mt-8">
          <p className="m-0 font-sans text-xl font-semibold leading-none text-white max-[767px]:text-base">
            {content.footer.text}{" "}
            <strong className="font-semibold text-[#35F3A3]">
              {content.footer.highlight}
            </strong>{" "}
            {content.footer.suffix}
          </p>
        </div>
      </Container>
    </section>
  );
}
