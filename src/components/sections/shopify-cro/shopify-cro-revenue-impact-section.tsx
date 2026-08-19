import Image from "next/image";

import { Container } from "@/components/ui/container";
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
        <div className="section-title mx-auto mb-[66px] max-w-[800px] text-center max-[767px]:mb-10">
          <h2 className="mb-2.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-white max-[1199px]:text-[30px] max-[767px]:text-2xl">
            {content.heading}
          </h2>
          <p className="m-0 font-sans text-base font-medium leading-[30.4px] text-white/80">
            {content.description}
          </p>
        </div>

        <div className="revenue-impact-wrapper -mx-[30px] -mb-[30px] flex flex-wrap justify-center max-[1199px]:-mx-3">
          {/* Before Optimization */}
          <div className="revenue-card mb-[30px] w-1/2 px-[30px] max-[991px]:w-full max-[991px]:max-w-[520px] max-[1199px]:px-3">
            <div className="revenue-card-body relative z-10 rounded-[20px] bg-[#1E251D] p-[70px_40px_40px] before:absolute before:-inset-[1.5px] before:-z-20 before:rounded-[20px] before:bg-gradient-to-b before:from-white/50 before:to-transparent max-[767px]:p-[55px_20px_25px]">
              <span className="badge absolute -top-[15px] left-1/2 z-10 -translate-x-1/2 rounded-[11px] border-[2.5px] border-white/50 bg-[#171E16] px-4 py-0.5 font-sans text-base font-semibold uppercase leading-[190%] text-white max-[767px]:text-sm">
                {content.before.badge}
              </span>

              <div className="revenue-card-list">
                {content.before.metrics.map((item) => (
                  <div
                    key={item.label}
                    className="revenue-card-item mb-5 flex items-center border-b border-white/10 pb-5 last:mb-0 last:border-b-0 last:pb-0"
                  >
                    <span className="icon mr-5 flex size-[66px] flex-shrink-0 items-center justify-center rounded-[15px] bg-white/5 max-[767px]:size-[52px]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={30}
                        height={30}
                        className="size-[30px] object-contain max-[767px]:size-6"
                      />
                    </span>
                    <div className="revenue-card-content">
                      <h3 className="mb-1 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-white max-[767px]:text-[30px]">
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
                <span className="mb-2 inline-block font-sans text-base font-medium uppercase leading-[124%] text-white/80 max-[767px]:text-sm">
                  {content.before.totalLabel}
                </span>
                <h2 className="m-0 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-white max-[767px]:text-[32px]">
                  {content.before.totalValue}
                </h2>
              </div>
            </div>
          </div>

          {/* After Optimization */}
          <div className="revenue-card revenue-card-optimized mb-[30px] w-1/2 px-[30px] max-[991px]:w-full max-[991px]:max-w-[520px] max-[1199px]:px-3">
            <div className="revenue-card-body relative z-10 rounded-[20px] bg-gradient-to-b from-[#18271C] to-transparent p-[70px_40px_40px] before:absolute before:-inset-[1.5px] before:-z-20 before:rounded-[20px] before:bg-gradient-to-b before:from-[#36F4A4] before:to-transparent after:absolute after:inset-0 after:-z-10 after:rounded-[20px] after:bg-[#1E251D]/90 max-[767px]:p-[55px_20px_25px]">
              <span className="badge absolute -top-[15px] left-1/2 z-10 -translate-x-1/2 inline-flex items-center gap-2 rounded-[11px] border-[2.5px] border-[#36F4A4] bg-[#171E16] py-0.5 pr-4 pl-8 font-sans text-base font-semibold uppercase leading-[190%] text-white max-[767px]:text-sm">
                <span className="absolute left-[15px] top-1/2 size-[7px] -translate-y-1/2 rounded-full bg-[#36F4A4]" />
                {content.after.badge}
              </span>

              <div className="revenue-card-list">
                {content.after.metrics.map((item) => (
                  <div
                    key={item.label}
                    className="revenue-card-item mb-5 flex items-center border-b border-white/10 pb-5 last:mb-0 last:border-b-0 last:pb-0"
                  >
                    <span className="icon mr-5 flex size-[66px] flex-shrink-0 items-center justify-center rounded-[15px] bg-white/5 max-[767px]:size-[52px]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={30}
                        height={30}
                        className="size-[30px] object-contain max-[767px]:size-6"
                      />
                    </span>
                    <div className="revenue-card-content">
                      <h3 className="mb-1 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-white max-[767px]:text-[30px]">
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
                <span className="mb-2 inline-block font-sans text-base font-medium uppercase leading-[124%] text-white/80 max-[767px]:text-sm">
                  {content.after.totalLabel}
                </span>
                <h2 className="m-0 flex items-center justify-center gap-2.5 font-sans text-[40px] font-bold leading-none tracking-[1.2px] text-[#35F3A3] max-[767px]:text-[32px]">
                  {content.after.totalValue}
                  <svg
                    width="45"
                    height="23"
                    viewBox="0 0 45 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-9 shrink-0"
                  >
                    <path
                      d="M0.767372 19.255C-0.0323814 19.7977 -0.240773 20.886 0.301917 21.6858C0.844608 22.4855 1.93287 22.6939 2.73263 22.1512L1.75 20.7031L0.767372 19.255ZM15.75 11.2031L16.7881 9.79428L15.7916 9.06002L14.7674 9.75504L15.75 11.2031ZM25.25 18.2031L24.2119 19.612L25.3511 20.4514L26.4103 19.5132L25.25 18.2031ZM44.4968 2.80899C44.5553 1.84426 43.8206 1.0148 42.8559 0.95633L27.1347 0.00353289C26.17 -0.0549355 25.3405 0.679733 25.2821 1.64446C25.2236 2.60919 25.9583 3.43865 26.923 3.49712L40.8973 4.34405L40.0504 18.3184C39.9919 19.2831 40.7266 20.1126 41.6913 20.1711C42.6561 20.2295 43.4855 19.4949 43.544 18.5301L44.4968 2.80899ZM1.75 20.7031L2.73263 22.1512L16.7326 12.6512L15.75 11.2031L14.7674 9.75504L0.767372 19.255L1.75 20.7031ZM15.75 11.2031L14.7119 12.612L24.2119 19.612L25.25 18.2031L26.2881 16.7943L16.7881 9.79428L15.75 11.2031ZM25.25 18.2031L26.4103 19.5132L43.9103 4.01315L42.75 2.70312L41.5897 1.3931L24.0897 16.8931L25.25 18.2031Z"
                      fill="#35F3A3"
                    />
                  </svg>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="revenue-impact-footer mt-11 text-center">
          <p className="m-0 font-sans text-xl font-semibold leading-none text-white max-[767px]:text-base">
            {content.footer.text}{" "}
            <strong className="font-bold text-[#35F3A3]">
              {content.footer.highlight}
            </strong>{" "}
            {content.footer.suffix}
          </p>
        </div>
      </Container>
    </section>
  );
}
