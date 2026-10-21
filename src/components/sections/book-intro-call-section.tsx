import Image from "next/image";

import { BookIntroCallForm } from "@/components/sections/book-intro-call-form";
import { ButtonLink } from "@/components/ui/button-link";

export type BookIntroCallSectionContent = {
  formHeading: string;
  formSubheading?: string;
  callHeading: string;
  callDescription: string;
  callCtaLabel: string;
  callCtaHref: string;
  callIconSrc?: string;
  callIconAlt?: string;
};

export type BookIntroCallSectionProps = {
  content: BookIntroCallSectionContent;
  className?: string;
  id?: string;
};

export function BookIntroCallSection({
  content,
  className = "book-intro-call-section pt-0",
  id = "book-intro-call",
}: BookIntroCallSectionProps) {
  return (
    <section className={className} id={id}>
      <div className="flex flex-wrap">
        <div className="w-[54%] bg-[#F7F5EF] py-[50px] pr-[50px] pl-[max(24px,calc((100vw-1140px)/2))] max-[1199px]:pl-[max(20px,calc((100vw-960px)/2))] max-[991px]:w-full max-[991px]:px-6 max-[991px]:py-[50px] max-[767px]:px-4 max-[767px]:py-10">
          <div className="mb-10 max-[767px]:mb-6">
            <h2 className="mb-2.5 font-montreal-medium text-[35px] font-medium leading-[45px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl">
              {content.formHeading}
            </h2>
            {content.formSubheading ? (
              <p className="text-sm font-normal leading-[24px] text-[#535353]">
                {content.formSubheading}
              </p>
            ) : null}
          </div>
          <BookIntroCallForm />
        </div>

        <div className="flex w-[46%] flex-col items-center justify-center bg-[#F7F5EF]/50 py-[50px] pr-[max(24px,calc((100vw-1140px)/2))] pl-[50px] max-[1199px]:pr-[max(20px,calc((100vw-960px)/2))] max-[991px]:w-full max-[991px]:px-6 max-[991px]:py-[50px] max-[767px]:px-4 max-[767px]:py-10">
          <div className="flex max-w-[460px] flex-col items-center text-center">
            {content.callIconSrc ? (
              <div className="mb-5 flex h-20 w-20 items-center justify-center max-[767px]:h-15 max-[767px]:w-15">
                <Image
                  alt={content.callIconAlt ?? content.callHeading}
                  className="h-full w-full object-contain"
                  height={80}
                  src={content.callIconSrc}
                  width={83}
                />
              </div>
            ) : null}
            <h2 className="mb-2.5 font-montreal-medium text-[35px] font-medium leading-[45px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl">
              {content.callHeading}
            </h2>
            <p className="mb-6 text-sm font-normal leading-[24px] text-[#535353]">
              {content.callDescription}
            </p>
            <ButtonLink
              className="min-w-[206px] px-8 py-3.5"
              href={content.callCtaHref}
              variant="primary"
            >
              {content.callCtaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
