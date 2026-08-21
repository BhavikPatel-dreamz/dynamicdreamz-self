import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

export type ClosingMessageContent = {
  heading: string;
  firstLine: {
    prefix: string;
    strong: string;
    suffix: string;
  };
  secondLine: {
    linkLabel: string;
    linkHref: string;
    suffix: string;
  };
};

type ClosingMessageSectionProps = {
  content: ClosingMessageContent;
};

export function ClosingMessageSection({ content }: ClosingMessageSectionProps) {
  return (
    <section
      className="relative z-[1] overflow-hidden bg-[linear-gradient(97deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-[58px] text-center"
      aria-labelledby="closing-message-title"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-[1] h-[111px] w-[187px] max-[1199px]:h-[70px] max-[1199px]:w-[120px] max-[767px]:h-[50px] max-[767px]:w-[90px]"
        height={111}
        src="/assets/services/mobile-application-development/backgrounds/cta-circle-left.svg"
        width={187}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 -z-[1] h-[141px] w-[206px] max-[1199px]:h-[80px] max-[1199px]:w-[160px] max-[767px]:h-[55px] max-[767px]:w-[100px]"
        height={141}
        src="/assets/services/mobile-application-development/backgrounds/cta-circle-right.svg"
        width={206}
      />
      <Container>
        <div className="mx-auto max-w-[750px]">
          <h2
            className="mb-[15px] font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-ink max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
            id="closing-message-title"
          >
            {content.heading}
          </h2>
          <p className="mb-[7px] text-base leading-[30px] font-medium text-muted">
            {content.firstLine.prefix}
            <strong className="font-bold">{content.firstLine.strong}</strong>
            {content.firstLine.suffix}
          </p>
          <p className="text-base leading-[30px] font-medium text-muted">
            <Link
              className="font-bold text-brand-red underline transition-colors duration-300 hover:text-brand-red-dark hover:no-underline"
              href={content.secondLine.linkHref}
            >
              {content.secondLine.linkLabel}
            </Link>{" "}
            {content.secondLine.suffix}
          </p>
        </div>
      </Container>
    </section>
  );
}
