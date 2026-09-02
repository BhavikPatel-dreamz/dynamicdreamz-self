import Image from "next/image";

import { Container } from "@/components/ui/container";
import {
  bookDiscoveryCallContent,
  type BookDiscoveryCallContent,
} from "@/content/book-a-discovery-call";

export type BookDiscoveryCallPageProps = {
  content?: BookDiscoveryCallContent;
};

export function BookDiscoveryCallPage({
  content = bookDiscoveryCallContent,
}: BookDiscoveryCallPageProps) {
  return (
    <section
      aria-labelledby="book-discovery-call-title"
      className="booking-section pt-[140px] pb-20 max-[991px]:pt-[90px] max-[991px]:pb-[60px] max-[767px]:pt-20 max-[767px]:pb-10"
    >
      <Container>
        <div className="flex flex-wrap justify-between">
          <aside className="w-[36%] max-[1399px]:w-[41%] max-[1199px]:w-[51%] max-[991px]:w-full">
            <div className="mb-5 flex items-center gap-2.5 max-[767px]:mb-4">
              <span
                aria-hidden="true"
                className="h-0.5 w-[30px] shrink-0 bg-brand-red max-[767px]:hidden"
              />
              <span className="text-sm font-medium leading-normal text-[#66635f]">
                {content.eyebrow}
              </span>
            </div>

            <h1
              className="mb-2.5 font-montreal-medium text-[35px] leading-[45px] font-normal tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-[26px] max-[767px]:leading-[34px]"
              id="book-discovery-call-title"
            >
              {content.title}
            </h1>
            <p className="text-base font-medium leading-[190%] text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
              {content.description}
            </p>

            <div className="my-[26px] flex items-center rounded-2xl border border-[rgba(36,36,36,0.1)] bg-[#f7f4e9] p-[18px] max-[767px]:rounded-[10px] max-[767px]:p-2.5">
              <div className="mr-[15px] h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full max-[767px]:mr-2.5">
                <Image
                  alt={content.host.imageAlt}
                  className="h-full w-full rounded-full border-[3px] border-white object-cover shadow-[0_5px_18px_rgb(39_39_39/10%)]"
                  height={68}
                  src={content.host.image}
                  width={68}
                />
              </div>
              <div>
                <strong className="mb-[3px] block text-base leading-normal font-bold text-[#535353] max-[767px]:mb-0 max-[767px]:text-[15px]">
                  {content.host.name}
                </strong>
                <span className="text-sm leading-normal font-medium text-[#535353] max-[767px]:text-xs">
                  {content.host.role}
                </span>
              </div>
            </div>

            <div className="border-t border-[rgba(36,36,36,0.1)]">
              {content.benefits.map((benefit) => (
                <div
                  className="flex border-b border-[rgba(36,36,36,0.1)] py-3"
                  key={benefit.title}
                >
                  <span className="mr-[15px] flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-md bg-[#e8ece2] text-[11px] font-bold text-[#535353]">
                    {benefit.icon}
                  </span>
                  <div className="flex flex-col leading-normal">
                    <strong className="mb-[3px] text-[13px] leading-normal font-bold text-[#535353]">
                      {benefit.title}
                    </strong>
                    <span className="text-xs leading-[1.45] font-medium text-[#535353]">
                      {benefit.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="w-[55.304%] overflow-hidden rounded-[24px] border border-[rgba(36,36,36,0.1)] bg-white p-3.5 shadow-[0_18px_54px_rgb(36_36_36/8%)] max-[1199px]:w-[47%] max-[991px]:mt-5 max-[991px]:w-full">
            <div className="mb-1 flex items-center justify-between border-b border-[rgba(36,36,36,0.1)] px-3 py-2.5 pb-[18px]">
              <strong className="text-[13px] leading-normal font-bold text-[#535353]">
                {content.calendar.heading}
              </strong>
              <span className="text-[11px] leading-normal font-semibold text-[#66635f]">
                {content.calendar.details}
              </span>
            </div>
            <iframe
              allow="fullscreen"
              className="h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={content.calendar.src}
              title={content.calendar.iframeTitle}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
