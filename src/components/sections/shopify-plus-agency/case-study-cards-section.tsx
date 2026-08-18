import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { shopifyPlusAgencyCaseStudies } from "@/content/shopify-plus-agency";

function LearnMoreArrow() {
  return (
    <svg
      aria-hidden="true"
      className="ml-2 transition-[margin] duration-300 group-hover/case:ml-3"
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
    >
      <path
        d="M0.996094 5.25C0.58188 5.25 0.246094 5.58579 0.246094 6C0.246094 6.41421 0.58188 6.75 0.996094 6.75V5.25ZM11.5264 6.53033C11.8193 6.23744 11.8193 5.76256 11.5264 5.46967L6.75345 0.696699C6.46056 0.403806 5.98569 0.403806 5.69279 0.696699C5.3999 0.989593 5.3999 1.46447 5.69279 1.75736L9.93543 6L5.69279 10.2426C5.3999 10.5355 5.3999 11.0104 5.69279 11.3033C5.98569 11.5962 6.46056 11.5962 6.75345 11.3033L11.5264 6.53033ZM0.996094 6.75L10.9961 6.75V5.25L0.996094 5.25V6.75Z"
        fill="#D92128"
      />
    </svg>
  );
}

export function CaseStudyCardsSection() {
  return (
    <section className="py-20" data-section="case-studies">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mb-5 m-0 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            {shopifyPlusAgencyCaseStudies.heading}
          </h2>
          <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
            {shopifyPlusAgencyCaseStudies.description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="mt-[70px] -mb-8 -mx-2 flex flex-wrap">
          {shopifyPlusAgencyCaseStudies.items.map((item) => (
            <div
              className="mb-8 w-1/3 px-2 max-[991px]:w-1/2 max-[991px]:mb-5 max-[767px]:w-full"
              key={item.name}
            >
              <Link
                className="group/case relative block rounded-[15px] border border-[#EFEFEF] bg-white p-5 pb-[34px] transition-shadow duration-300 hover:shadow-[0_10px_50px_rgba(94,94,94,0.08)] max-[1199px]:p-[15px_15px_30px]"
                href={item.href}
              >
                <span
                  aria-hidden="true"
                  className="absolute -inset-[2px] -z-10 rounded-[15px] bg-gradient-to-r from-[#15c064] to-[#00d1ff] opacity-0 transition-opacity duration-300 group-hover/case:opacity-100"
                />
                <div className="relative mb-5 pb-[90.75%]">
                  <Image
                    className="absolute inset-0 h-full w-full rounded-[10px] border border-[#EFEFEF] object-cover"
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 28px), 370px"
                  />
                </div>
                <div className="text">
                  <h3 className="mb-[10px] text-lg leading-[30.6px] font-bold tracking-[0.36px] text-ink max-[1199px]:text-base max-[1199px]:leading-normal max-[1199px]:mb-[15px]">
                    {item.name}
                  </h3>
                  <span className="flex items-center text-sm leading-none font-bold text-[#D92128] uppercase underline max-[1199px]:text-xs">
                    learn more
                    <LearnMoreArrow />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}