import Image from "next/image";

import { Container } from "@/components/ui/container";
import { WebsiteQuoteForm } from "@/components/ui/website-quote-form";

export type WebsiteQuoteHeroContent = {
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  description: {
    text: string;
    strong: string;
  };
  features: readonly string[];
  form: {
    buttonLabel: string;
    inputAriaLabel: string;
    placeholder: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type WebsiteQuoteHeroSectionProps = {
  content: WebsiteQuoteHeroContent;
};

export function WebsiteQuoteHeroSection({ content }: WebsiteQuoteHeroSectionProps) {
  return (
    <section className="overflow-hidden pt-20" aria-labelledby="mobile-application-title">
      <div className="mx-[45px] overflow-hidden rounded-[34px] bg-[#f7f5ef] max-[991px]:mx-[30px] max-[575px]:mx-[15px]">
        <Container className="min-[1300px]:max-w-[1275px]">
          <div className="-mx-5 flex flex-wrap">
            <div className="flex w-1/2 flex-col items-start justify-center px-5 py-[85px] pr-[70px] max-[1199px]:pr-[35px] max-[991px]:w-full max-[991px]:px-5 max-[991px]:pt-[50px] max-[991px]:pb-5 max-[767px]:px-4">
              <h1
                className="mb-6 font-sans text-[32px] leading-[42px] font-bold tracking-[-1px] text-ink max-[1199px]:mb-5 max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
                id="mobile-application-title"
              >
                {content.title.prefix}{" "}
                <span className="relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:h-[11px] after:w-full after:bg-[url('/assets/services/mobile-application-development/hero/title-underline.svg')] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] max-[575px]:after:hidden">
                  {content.title.highlight}
                </span>{" "}
                {content.title.suffix}
              </h1>

              <p className="mb-[30px] max-w-[495px] text-base leading-[30px] font-medium text-muted max-[1199px]:mb-5 max-[1199px]:leading-[27px]">
                {content.description.text}{" "}
                <strong className="font-bold text-black">{content.description.strong}</strong>
              </p>

              <ul className="mb-[35px] space-y-[15px] max-[1199px]:mb-5">
                {content.features.map((feature) => (
                  <li
                    className="flex items-start text-base leading-[30px] font-medium text-muted max-[1199px]:leading-[27px]"
                    key={feature}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="mr-[5px] mt-1 size-[21px] shrink-0"
                      height={21}
                      src="/assets/services/mobile-application-development/hero/flash-bullet.svg"
                      width={21}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <WebsiteQuoteForm
                buttonLabel={content.form.buttonLabel}
                className="mb-6 max-[991px]:mt-5"
                inputAriaLabel={content.form.inputAriaLabel}
                placeholder={content.form.placeholder}
              />
            </div>

            <div className="flex w-1/2 items-end px-5 max-[991px]:w-full max-[767px]:px-4">
              <Image
                alt={content.image.alt}
                className="h-auto w-full object-contain object-bottom"
                height={content.image.height}
                priority
                sizes="(max-width: 991px) calc(100vw - 92px), 50vw"
                src={content.image.src}
                width={content.image.width}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
