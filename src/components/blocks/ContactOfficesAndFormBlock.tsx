"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { PhoneInputClient } from "@/components/ui/PhoneInputClient";
import { CmsFormClient } from "@/components/forms/CmsFormClient";
import { contactPageContent } from "@/content/contact";
import { contactFormCopy } from "@/content/forms";
import { type ContactFormState, submitContactForm } from "@/lib/actions/contact";
import type { Form as PayloadForm } from "@/types/payload-types";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32" fill="none">
      <path
        d="M31.3304 16C31.3304 24.5629 24.4262 31.5 15.9152 31.5C7.40411 31.5 0.5 24.5629 0.5 16C0.5 7.43708 7.40411 0.5 15.9152 0.5C24.4262 0.5 31.3304 7.43708 31.3304 16Z"
        fill="white"
        stroke="#EFEFEF"
      />
      <path
        d="M18.5296 17.7422L18.1345 18.1179C18.1345 18.1179 17.194 19.0103 14.6278 16.5735C12.0616 14.1368 13.0021 13.2443 13.0021 13.2443L13.2505 13.0071C13.8645 12.4249 13.9227 11.4893 13.3868 10.8059L12.2926 9.41004C11.6292 8.56406 10.3482 8.45209 9.58837 9.17366L8.22495 10.4675C7.84893 10.8258 7.59709 11.2886 7.62748 11.8029C7.70564 13.1191 8.32916 15.9498 11.8063 19.2525C15.4945 22.7542 18.9552 22.8935 20.3698 22.7675C20.8179 22.7277 21.207 22.5104 21.5205 22.2118L22.7536 21.0407C23.5873 20.2503 23.3528 18.8942 22.2864 18.341L20.6277 17.4792C19.9278 17.116 19.0767 17.223 18.5296 17.7422Z"
        fill="#090909"
      />
    </svg>
  );
}

function DiagonalArrowIcon({ className = "ml-2.5 size-3" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <path
        d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-[18px]">
      <path
        fill="currentColor"
        d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-[18px]">
      <path
        fill="currentColor"
        d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
      />
    </svg>
  );
}

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "first_source",
  "first_medium",
  "landing_page",
  "submission_page",
  "referrer",
] as const;

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function FieldLabel({
  children,
  htmlFor,
  required = false,
}: {
  children: string;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2.5 block text-base leading-normal font-semibold text-[#090909] max-[991px]:text-sm"
    >
      {children}
      {required ? <em className="ml-1 not-italic text-[#d92128] text-lg font-semibold leading-none">*</em> : null}
    </label>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    for (const name of attributionFields) {
      const field = formRef.current?.elements.namedItem(name);

      if (field instanceof HTMLInputElement) {
        if (name === "referrer") {
          field.value = document.referrer || sessionStorage.getItem("dd_initial_referrer") || "N/A";
        } else if (name === "submission_page") {
          field.value = window.location.href;
        } else if (name === "landing_page") {
          field.value =
            sessionStorage.getItem("dd_referring_page") ||
            sessionStorage.getItem("dd_initial_landing_page") ||
            window.location.href;
        } else if (name === "first_source") {
          field.value =
            sessionStorage.getItem("dd_first_source") ||
            sessionStorage.getItem("dd_utm_source") ||
            searchParams.get("utm_source") ||
            "N/A";
        } else if (name === "first_medium") {
          field.value =
            sessionStorage.getItem("dd_first_medium") ||
            sessionStorage.getItem("dd_utm_medium") ||
            searchParams.get("utm_medium") ||
            "N/A";
        } else {
          field.value =
            searchParams.get(name) || sessionStorage.getItem(`dd_${name}`) || "";
        }
      }
    }
  }, []);

  return (
    <form ref={formRef} action={formAction} aria-label={contactFormCopy.ariaLabel}>
      <input name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      {attributionFields.map((name) => (
        <input key={name} type="hidden" name={name} />
      ))}

      <div className="grid grid-cols-2 gap-x-[30px] max-[767px]:grid-cols-1 max-[767px]:gap-x-0">
        <div className="mb-5">
          <FieldLabel htmlFor="contact-name" required>
            {contactFormCopy.labels.name}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[991px]:text-sm"
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={contactFormCopy.placeholders.name}
            maxLength={400}
            required
          />
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-email" required>
            {contactFormCopy.labels.email}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[991px]:text-sm"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={contactFormCopy.placeholders.email}
            maxLength={400}
            required
          />
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-phone">
            {contactFormCopy.labels.phone}
          </FieldLabel>
          <PhoneInputClient
            className="h-[49px]"
            id="contact-phone"
            name="phone"
            placeholder={contactFormCopy.placeholders.phone}
            searchPlaceholder={contactFormCopy.phoneSearchPlaceholder}
            selectAriaLabel={contactFormCopy.phoneCountrySelectAriaLabel}
            defaultIso2="in"
            maxLength={400}
          />
        </div>
        <div className="mb-5">
          <FieldLabel htmlFor="contact-company">
            {contactFormCopy.labels.company}
          </FieldLabel>
          <input
            className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[991px]:text-sm"
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder={contactFormCopy.placeholders.company}
            maxLength={400}
          />
        </div>
        <div className="col-span-2 mb-5 max-[767px]:col-span-1">
          <FieldLabel htmlFor="contact-project">
            {contactFormCopy.labels.project}
          </FieldLabel>
          <textarea
            className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 py-3 text-base leading-[23px] font-medium text-[#090909] placeholder:text-[#9a9a9a] outline-none focus:border-[#090909] max-[991px]:text-sm"
            id="contact-project"
            name="project"
            placeholder={contactFormCopy.placeholders.project}
            maxLength={2000}
          />
        </div>
      </div>

      <div className="min-h-6" aria-live="polite">
        {state.status !== "idle" ? (
          <p
            className={
              state.status === "error"
                ? "mb-3 text-sm font-medium text-[#b42318]"
                : "mb-3 text-sm font-medium text-brand-green"
            }
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-5 max-[767px]:flex-col-reverse max-[767px]:items-center [&_button]:max-[767px]:w-full">
        <div className="text-xs font-normal text-muted max-[767px]:text-center">
          <p>{contactFormCopy.note}</p>
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          
        >
          {isPending ? contactFormCopy.sending : contactFormCopy.submit}
        </Button>
      </div>
    </form>
  );
}

export type ContactHeroSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  quickLinks?: readonly { label: string; href: string }[];
};

export function ContactHeroSection({
  eyebrow = contactPageContent.hero.eyebrow,
  title = contactPageContent.hero.title,
  description = contactPageContent.hero.description,
  quickLinks = contactPageContent.hero.quickLinks,
}: ContactHeroSectionProps = {}) {
  return (
    <section
      className="overflow-hidden bg-[#fbeed5] pt-[160px] pb-10 text-center max-[1199px]:pt-[120px] max-[991px]:pt-[110px] max-[991px]:pb-8"
      aria-labelledby="contact-page-title"
    >
      <Container>
        <div data-aos="fade-up" className="mx-auto max-w-[810px]">
          {eyebrow && (
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-brand-red" />
              <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            id="contact-page-title"
            className="font-montreal-medium text-[50px] leading-[60px] font-normal tracking-[-1px] text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-[40px]"
          >
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-[810px] text-base leading-7 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold uppercase max-[767px]:flex-nowrap max-[767px]:justify-start max-[767px]:overflow-x-auto max-[767px]:whitespace-nowrap max-[767px]:pb-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-[#252c15] pb-[3px] text-[#252c15] transition-colors duration-300 hover:border-brand-red hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export type ContactFormSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  form?: PayloadForm | number | string | null;
};

export function ContactFormSection({
  eyebrow = contactPageContent.formSection.eyebrow,
  title = contactPageContent.formSection.title,
  description = contactPageContent.formSection.description,
  form,
}: ContactFormSectionProps = {}) {
  return (
    <section
      id="message"
      className="bg-[#fbeed5] pb-20 max-[991px]:pb-[60px] max-[767px]:pb-10"
      aria-labelledby="inquiry-title"
    >
      <Container>
        <div
          data-aos="fade-up"
          className="mx-auto max-w-[920px] overflow-hidden rounded-[30px] border border-[rgba(40,40,40,0.11)] bg-white shadow-[0_28px_70px_rgba(72,52,35,0.08)]"
        >
          <div className="border-b border-[rgba(40,40,40,0.11)] p-10 text-center max-[1199px]:p-[30px] max-[767px]:px-5 max-[767px]:py-[30px]">
            {eyebrow && (
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="h-[2px] w-6 bg-brand-red" />
                <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">
                  {eyebrow}
                </span>
              </div>
            )}
            <h2
              id="inquiry-title"
              className="mt-2 mb-2 font-montreal-medium text-[32px] leading-[42px] font-normal text-ink max-[991px]:text-[26px] max-[991px]:leading-[34px] max-[767px]:text-[22px] max-[767px]:leading-[30px]"
            >
              {title}
            </h2>
            <p className="text-base leading-7 font-medium text-muted max-[767px]:text-sm max-[767px]:leading-6">
              {description}
            </p>
          </div>
          <div className="p-10 max-[1199px]:p-[30px] max-[767px]:px-5 max-[767px]:py-[30px]">
            {form ? (
              <CmsFormClient
                form={form}
                submitButtonClassName="relative inline-flex min-h-[49px] shrink-0 cursor-pointer overflow-hidden rounded-[30px] border-2 border-brand-red bg-brand-red px-8 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-300 hover:border-[#4f4f4f] hover:bg-transparent hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70 max-[767px]:w-full max-[767px]:justify-center"
                footerNote={<p>{contactFormCopy.note}</p>}
              />
            ) : (
              <ContactForm />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export type ContactOfficesSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  directionsLabel?: string;
  offices?: readonly {
    city: string;
    address: string;
    phone: string;
    phoneHref: string;
    directionsHref: string;
  }[];
};

export function ContactOfficesSection({
  eyebrow = contactPageContent.officesSection.eyebrow,
  title = contactPageContent.officesSection.title,
  description = contactPageContent.officesSection.description,
  directionsLabel = contactPageContent.officesSection.directionsLabel,
  offices: customOffices,
}: ContactOfficesSectionProps = {}) {
  const activeOffices =
    customOffices && customOffices.length > 0
      ? customOffices
      : contactPageContent.officesSection.offices;

  return (
    <section
      id="offices"
      className="bg-[#eff4ef] py-20 max-[991px]:py-[60px] max-[767px]:py-10"
      aria-labelledby="offices-title"
    >
      <Container>
        <SplitSectionHeading
          description={description}
          eyebrow={eyebrow}
          heading={title}
          headingId="offices-title"
          textColumnClassName="w-full md:w-[48%] md:text-right max-[991px]:mt-3"
          titleColumnClassName="w-full md:w-[48%]"
        />
        <div className="grid grid-cols-2 gap-[30px] max-[991px]:gap-5 max-[767px]:grid-cols-1">
          {activeOffices.map((office) => (
            <article
              key={office.city}
              data-aos="fade-up"
              className="rounded-[20px] border-[1.5px] border-[#e4e4e4] bg-white p-8 max-[1199px]:p-5 max-[991px]:rounded-[12px]"
            >
              <h3 className="font-montreal-medium text-2xl leading-normal font-normal text-ink max-[991px]:text-lg">
                {office.city}
              </h3>
              <address className="my-5 text-base leading-[26px] font-medium not-italic text-muted max-[991px]:my-3.5 max-[991px]:text-sm max-[991px]:leading-6">
                {office.address}
              </address>
              <ul className="space-y-5 max-[991px]:space-y-3.5">
                <li>
                  <a
                    href={office.phoneHref}
                    className="flex items-center text-base font-medium text-muted transition-colors duration-300 hover:text-ink max-[991px]:text-sm"
                  >
                    <span className="mr-2.5 shrink-0">
                      <PhoneIcon />
                    </span>
                    {office.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={office.directionsHref}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group inline-flex items-center text-sm font-bold uppercase text-brand-red transition-colors duration-300 hover:text-ink"
                  >
                    {directionsLabel}
                    <DiagonalArrowIcon className="ml-2.5 size-3 text-brand-red transition-colors group-hover:text-ink" />
                  </a>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export type ContactDetailsSectionProps = {
  eyebrow?: string;
  title?: string;
};

export function ContactDetailsSection({
  eyebrow = contactPageContent.contactDetailsSection.eyebrow,
  title = contactPageContent.contactDetailsSection.title,
}: ContactDetailsSectionProps = {}) {
  const { contactDetailsSection } = contactPageContent;

  return (
    <section
      id="contact-details"
      className="bg-white py-20 max-[991px]:py-[60px] max-[767px]:py-10"
      aria-labelledby="contact-details-title"
    >
      <Container>
        <div data-aos="fade-up" className="mb-10 text-center">
          {eyebrow && (
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-brand-red" />
              <span className="text-xs font-bold tracking-widest text-[#535353] uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          <h2
            id="contact-details-title"
            className="font-montreal-medium text-[32px] leading-[42px] font-normal text-ink max-[991px]:text-[28px] max-[767px]:text-2xl"
          >
            {title}
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-[1.35fr_1.05fr_1fr_0.75fr] border-y border-[rgba(40,40,40,0.11)] max-[1199px]:grid-cols-2 max-[767px]:grid-cols-1"
        >
          {/* Item 1: Sales */}
          <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-b max-[767px]:min-h-0 max-[767px]:border-r-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
            <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
              {contactDetailsSection.sales.label}
            </span>
            <a
              href={`mailto:${contactDetailsSection.sales.email}`}
              className="text-base leading-7 font-semibold text-ink break-words transition-colors hover:text-brand-red"
            >
              {contactDetailsSection.sales.email}
            </a>
            <a
              href={contactDetailsSection.sales.phoneHref}
              className="mt-[5px] text-sm leading-[22px] font-medium text-muted transition-colors hover:text-brand-red"
            >
              {contactDetailsSection.sales.phone}
            </a>
          </div>

          {/* Item 2: HR */}
          <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-r-0 max-[1199px]:border-b max-[767px]:min-h-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
            <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
              {contactDetailsSection.hr.label}
            </span>
            <a
              href={`mailto:${contactDetailsSection.hr.email}`}
              className="text-base leading-7 font-semibold text-ink break-words transition-colors hover:text-brand-red"
            >
              {contactDetailsSection.hr.email}
            </a>
            <a
              href={contactDetailsSection.hr.phoneHref}
              className="mt-[5px] text-sm leading-[22px] font-medium text-muted transition-colors hover:text-brand-red"
            >
              {contactDetailsSection.hr.phone}
            </a>
            <div className="mt-3">
              <Link
                href={contactDetailsSection.hr.actionHref}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group inline-flex items-center text-xs font-semibold uppercase text-brand-red transition-colors hover:text-ink"
              >
                {contactDetailsSection.hr.actionLabel}
                <DiagonalArrowIcon className="ml-2.5 size-2.5 text-brand-red transition-colors group-hover:text-ink" />
              </Link>
            </div>
          </div>

          {/* Item 3: Discovery Call */}
          <div className="flex min-h-[138px] flex-col justify-start border-r border-[rgba(40,40,40,0.11)] p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[1199px]:border-b-0 max-[767px]:min-h-0 max-[767px]:border-r-0 max-[767px]:border-b max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
            <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
              {contactDetailsSection.discoveryCall.label}
            </span>
            <Link
              href={contactDetailsSection.discoveryCall.actionHref}
              className="text-base leading-7 font-semibold text-ink transition-colors hover:text-brand-red"
            >
              {contactDetailsSection.discoveryCall.actionLabel}
            </Link>
            <span className="mt-[5px] text-sm leading-[22px] font-medium text-muted">
              {contactDetailsSection.discoveryCall.description}
            </span>
          </div>

          {/* Item 4: Social */}
          <div className="flex min-h-[138px] flex-col justify-start p-[22px_20px] transition-colors duration-300 hover:bg-[#f7f4e9] max-[767px]:min-h-0 max-[767px]:px-0 max-[767px]:py-5 max-[767px]:hover:bg-transparent">
            <span className="mb-2.5 font-sans text-[10px] leading-[1.4] font-bold uppercase tracking-[0.8px] text-brand-red">
              {contactDetailsSection.social.label}
            </span>
            <div className="mt-1 flex items-center gap-2.5">
              {contactDetailsSection.social.profiles.map((profile) => (
                <div key={profile.href} className="text-center">
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={profile.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-[rgba(40,40,40,0.11)] text-ink transition-colors duration-300 hover:border-brand-red hover:text-brand-red"
                  >
                    {profile.name === "LinkedIn" ? <LinkedInIcon /> : <InstagramIcon />}
                  </a>
                  <span className="mt-[7px] block text-xs leading-normal font-medium text-muted">
                    {profile.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactOfficesAndFormBlock({ form }: { form?: any } = {}) {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection form={form} />
      <ContactOfficesSection />
      <ContactDetailsSection />
    </>
  );
}

export const ContactPage = ContactOfficesAndFormBlock;
