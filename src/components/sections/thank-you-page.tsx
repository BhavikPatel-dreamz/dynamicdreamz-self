import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/class-names";

export type ThankYouPageContent = {
  heading: string;
  descriptionLine1: string;
  descriptionLine2: string;
  homeCta: {
    label: string;
    href: string;
  };
  contact: {
    phone: {
      label: string;
      href: string;
      icon: string;
      iconAlt: string;
    };
    email: {
      label: string;
      href: string;
      icon: string;
      iconAlt: string;
    };
  };
};

export type ThankYouPageProps = {
  content: ThankYouPageContent;
  buttonPlacement?: "above-contact" | "below-contact";
  className?: string;
};

export function ThankYouPage({
  content,
  buttonPlacement = "above-contact",
  className,
}: ThankYouPageProps) {
  const { heading, descriptionLine1, descriptionLine2, homeCta, contact } = content;
  const isBelowContact = buttonPlacement === "below-contact";

  return (
    <section
      className={cn(
        "thankyou-sec flex min-h-screen items-center justify-center bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-[90px] pb-10 max-[992px]:pt-[70px]",
        className,
      )}
      aria-labelledby="thank-you-title"
    >
      <Container>
        <div className="thankyou-content mx-auto max-w-[800px] text-center">
          <h1
            id="thank-you-title"
            className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-black max-[767px]:text-[28px] max-[767px]:leading-tight"
          >
            {heading}
          </h1>
          <p
            className={cn(
              "mt-4 text-base font-medium leading-[27.68px] text-[#535353] max-[767px]:mt-3",
              isBelowContact ? "mb-0" : "mb-6 max-[767px]:mb-5",
            )}
          >
            {descriptionLine1} <br className="max-[767px]:hidden" />
            {descriptionLine2}
          </p>

          {!isBelowContact && (
            <ButtonLink
              variant="primary"
              href={homeCta.href}
              className="min-w-[170px]"
            >
              {homeCta.label}
            </ButtonLink>
          )}

          <div
            className={cn(
              "get-in-touch-wrap mx-auto max-w-[552px]",
              isBelowContact
                ? "mt-8 border-t border-[rgba(0,0,0,0.13)] pt-8"
                : "mt-[27px]",
            )}
          >
            <ul className="flex flex-wrap items-center justify-center rounded-[20px] border border-[rgba(0,0,0,0.12)] py-[23px] max-[767px]:py-4 max-[767px]:px-4">
              <li className="mr-[38px] max-[767px]:mr-0 max-[767px]:mb-2.5 max-[767px]:min-w-[268px] max-[320px]:min-w-[250px]">
                <a
                  href={contact.phone.href}
                  className="flex items-center justify-center font-sans text-base font-bold leading-[23.28px] text-black transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[320px]:text-sm"
                >
                  <Image
                    src={contact.phone.icon}
                    alt={contact.phone.iconAlt}
                    width={33}
                    height={32}
                    className="mr-2.5 shrink-0"
                  />
                  {contact.phone.label}
                </a>
              </li>
              <li className="max-[767px]:min-w-[268px] max-[320px]:min-w-[250px]">
                <a
                  href={contact.email.href}
                  className="flex items-center justify-center font-sans text-base font-bold leading-[23.28px] text-black transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[320px]:text-sm"
                >
                  <Image
                    src={contact.email.icon}
                    alt={contact.email.iconAlt}
                    width={33}
                    height={32}
                    className="mr-2.5 shrink-0"
                  />
                  {contact.email.label}
                </a>
              </li>
            </ul>

            {isBelowContact && (
              <ButtonLink
                variant="primary"
                href={homeCta.href}
                className="mt-8 min-w-[170px]"
              >
                {homeCta.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
