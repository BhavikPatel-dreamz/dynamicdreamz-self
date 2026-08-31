import { SplitSectionHeading } from "@/components/sections/shopify-certified-developers/split-section-heading";
import { Container } from "@/components/ui/container";
import { certifiedAgencySupport } from "@/content/shopify-certified-developers";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#35F3A3" height="24" rx="6" width="24" />
      <path
        d="m16.667 8.5-6.417 6.417L7.333 12"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

type CertifiedAgencySupportSectionProps = {
  content?: typeof certifiedAgencySupport;
};

export function CertifiedAgencySupportSection({
  content = certifiedAgencySupport,
}: CertifiedAgencySupportSectionProps) {
  return (
    <section
      className="bg-[#171e16] py-[60px] max-[992px]:py-10"
      aria-labelledby="certified-agency-support-title"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] items-start max-[1199px]:mb-[30px]"
          dark
          heading={content.heading}
          headingId="certified-agency-support-title"
          paragraphs={content.paragraphs}
          textClassName="w-[50%] max-[1199px]:w-[55%]"
          titleClassName="w-[46%] max-[1199px]:w-[40%]"
        />
        <div className="grid grid-cols-2 gap-3 max-[389px]:grid-cols-1">
          {content.items.map((item) => (
            <article
              className="h-full rounded-[20px] bg-white/5 p-[32px_32px_32px_52px] max-[992px]:p-[30px_20px] max-[389px]:rounded-2xl"
              key={item.title}
            >
              <div className="relative pl-10 max-[992px]:pl-[35px]">
                <span className="absolute top-0 left-0">
                  <CheckIcon />
                </span>
                <h3 className="mb-2.5 text-base leading-[20.5px] font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-[26.6px] font-medium text-white">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
