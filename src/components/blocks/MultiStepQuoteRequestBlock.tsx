"use client";

import { useActionState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import { Container } from "@/components/ui/container";
import { PhoneInputClient } from "@/components/ui/PhoneInputClient";
import { CmsFormClient } from "@/components/forms/CmsFormClient";
import type { Form as PayloadForm } from "@/types/payload-types";
import { sharedUiCopy } from "@/content/common";
import { quoteFormCopy } from "@/content/forms";
import { requestQuoteContent } from "@/content/request-quote";
import { siteConfig } from "@/data/site";
import { type QuoteFormState, submitQuoteForm } from "@/lib/actions/quote";

export type QuoteBadgeItem = {
  href: string;
  ariaLabel?: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
};

export type QuoteCounterItem = {
  label: string;
  count: string;
  unit?: string;
};

export type QuoteTestimonialItem = {
  name: string;
  avatar: string;
  quote: string;
};

export type QuoteLeftColumnProps = {
  hero?: {
    title: string;
    description: string;
  };
  counters?: readonly QuoteCounterItem[];
  badges?: readonly QuoteBadgeItem[];
  testimonials?: readonly QuoteTestimonialItem[];
};

export type QuoteFormProps = {
  title?: string;
  showTitle?: boolean;
  className?: string;
  phonePlaceholder?: string | null;
  submitLabel?: string;
  submitButtonClassName?: string;
  budgetOptions?: readonly string[];
  form?: PayloadForm | number | string | null;
};

export type MultiStepQuoteRequestBlockProps = {
  hero?: {
    title: string;
    description: string;
  };
  counters?: readonly QuoteCounterItem[];
  badges?: readonly QuoteBadgeItem[];
  testimonials?: readonly QuoteTestimonialItem[];
  budgetOptions?: readonly string[];
  form?: PayloadForm | number | string | null;
};

export type RequestQuotePageProps = MultiStepQuoteRequestBlockProps;

function GoBackButton() {
  const router = useRouter();

  function handleGoBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <button
      type="button"
      className="group flex cursor-pointer items-center border-0 bg-transparent p-0 text-base font-bold text-[#404040] transition-colors duration-300 hover:text-[#AD5151] focus-visible:text-[#AD5151]"
      onClick={handleGoBack}
      aria-label="Go back to previous page"
    >
      <svg
        className="mr-2 h-3 w-5 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19 6.75C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25V6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z"
          fill="currentColor"
        />
      </svg>
      {sharedUiCopy.goBack}
    </button>
  );
}

export function HeaderTwo() {
  return (
    <header className="header-two relative z-10 w-full py-[30px] max-[992px]:py-[26.5px]">
      <Container variant="form">
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex shrink-0 -translate-y-[2.5px] max-[992px]:translate-y-0"
            href="/"
            aria-label="Dynamic Dreamz home"
          >
            <Image
              className="h-auto w-[225px] max-[1199px]:w-[180px] max-[992px]:w-[225px] max-[767px]:w-[170px] max-[379px]:w-[150px]"
              src={siteConfig.logo}
              alt="Dynamic Dreamz - Shopify Platinum Partner"
              width={257}
              height={39}
              priority
            />
          </Link>
          <div className="go-back-btn">
            <GoBackButton />
          </div>
        </div>
      </Container>
    </header>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute -bottom-[52px] right-[61px] z-10 flex size-10 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-white shadow-sm transition-opacity hover:opacity-80 max-[767px]:right-[55px]"
      onClick={onClick}
      aria-label="Previous testimonial"
    >
      <Image
        className="-scale-x-100"
        src="/assets/request-quote/icons/right-arrow.svg"
        alt=""
        width={7}
        height={12}
      />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      className="absolute -bottom-[52px] right-[5px] z-10 flex size-10 cursor-pointer items-center justify-center rounded-[5px] border-0 bg-white shadow-sm transition-opacity hover:opacity-80"
      onClick={onClick}
      aria-label="Next testimonial"
    >
      <Image
        src="/assets/request-quote/icons/right-arrow.svg"
        alt=""
        width={7}
        height={12}
      />
    </button>
  );
}

export function QuoteTestimonials({
  testimonials = requestQuoteContent.testimonials,
}: {
  testimonials?: readonly QuoteTestimonialItem[];
} = {}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="testimonial-slider relative -mx-[5px] pb-[52px] [&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full [&_.slick-track]:flex [&_.slick-track]:items-stretch max-[575px]:[&_.slick-list]:w-[calc(100%_-_25px)] max-[575px]:[&_.slick-list]:!overflow-visible max-[575px]:[&_.slick-list]:[clip-path:inset(0_-100vw_0_5px)]">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="h-full px-[5px]">
            <div className="flex h-full rounded-[10px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] p-[1px] max-[575px]:min-h-[285px]">
              <div className="flex min-h-0 flex-1 flex-col justify-between rounded-[10px] bg-white p-[32px_45px_32px_32px] max-[1199px]:p-5">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        className="size-12 rounded-full object-cover"
                        src={testimonial.avatar}
                        alt={`${testimonial.name} avatar`}
                        width={48}
                        height={48}
                      />
                      <h3 className="m-0 font-montreal-medium text-lg leading-[23px] font-normal text-ink max-[767px]:text-base">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <Image
                      className="mb-[15px] h-5 w-[118px]"
                      src="/assets/request-quote/icons/request-star.svg"
                      alt="5 star rating"
                      width={118}
                      height={20}
                    />
                    <p className="m-0 text-sm leading-6 font-normal text-[#535353]">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function QuoteLeftColumn({
  hero = requestQuoteContent.hero,
  counters = requestQuoteContent.counters,
  badges = requestQuoteContent.badges,
  testimonials,
}: QuoteLeftColumnProps = {}) {
  return (
    <div className="left-col relative w-full py-[150px] pr-[46px] pb-[140px] max-[1199px]:pr-[30px] max-[992px]:pt-[50px] max-[992px]:pr-0 max-[992px]:pb-[100px]">
      <h1 className="font-display text-[35px] leading-[48.475px] font-normal tracking-normal text-ink max-[1199px]:text-[29px] max-[359px]:text-2xl">
        {hero.title}
      </h1>
      <p className="mt-2 text-base leading-7 font-medium text-[#535353] min-[768px]:mt-5 min-[992px]:mt-6 max-[1199px]:leading-[30.4px] max-[992px]:text-sm max-[992px]:leading-6">
        {hero.description}
      </p>

      <div className="deliver-wrapper mt-[50px] flex items-center max-[1199px]:mt-[30px] max-[767px]:mt-5">
        {counters.map((counter, index) => (
          <div
            key={counter.label}
            className={
              index === 0
                ? "deliver-counter"
                : "deliver-counter ml-[52px] border-l border-[rgba(0,0,0,0.08)] pl-[52px] max-[1299px]:ml-10 max-[1299px]:pl-10 max-[1199px]:ml-[25px] max-[1199px]:pl-[25px] max-[767px]:ml-[15px] max-[767px]:pl-[15px]"
            }
          >
            <div className="text-counter mb-1 text-left text-sm leading-[20.7px] font-semibold text-[rgba(9,9,9,0.63)] uppercase max-[575px]:text-xs">
              {counter.label}
            </div>
            <div className="counter-text flex items-center text-left text-[35px] leading-[43.925px] font-bold text-black max-[1199px]:text-[30px] max-[767px]:text-[26px] max-[359px]:text-2xl">
              <div>{counter.count}</div>
              {"unit" in counter && counter.unit ? (
                <span className="ml-2 text-base font-semibold">{counter.unit}</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="review-wraper my-[50px] flex flex-wrap items-center justify-between gap-y-2.5 max-[1199px]:my-[30px] max-[767px]:flex-col max-[767px]:gap-y-0 max-[767px]:[&>div:not(:last-child)]:mb-2.5">
        {badges.map((badge) => (
          <div
            key={badge.alt}
            className="review-col w-[calc(25%-5px)] max-[1199px]:w-[calc(50%-5px)] max-[767px]:w-full"
          >
            <div className="review-link relative rounded-[9px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] p-[1px] after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-black/10 after:blur-[9px] after:content-['']">
              <a
                className="flex lg:h-21 h-19 w-full items-center justify-center rounded-[9px] bg-white px-2.5 py-[19.5px] transition-opacity hover:opacity-90 max-[1199px]:py-[15px]"
                href={badge.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={badge.ariaLabel}
              >
                <Image
                  className="w-auto object-contain max-h-full"
                  src={badge.image}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      <QuoteTestimonials testimonials={testimonials} />
    </div>
  );
}

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const initialQuoteFormState: QuoteFormState = {
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
      className="mb-2.5 block text-base leading-6 font-semibold text-[#090909] max-[1199px]:text-sm max-[992px]:text-base"
    >
      {children}
      {required ? <em className="not-italic text-[#d92128]">*</em> : null}
    </label>
  );
}

export function QuoteForm({
  title = requestQuoteContent.form.title,
  showTitle = true,
  className = "right-col w-1/2 py-[150px] pl-[46px] pb-[110px] max-[1199px]:pl-[30px] max-[992px]:w-full max-[992px]:pt-[150px] max-[992px]:pl-0 max-[992px]:pb-[50px] max-[767px]:pt-[145px] max-[767px]:pb-[50px]",
  phonePlaceholder = quoteFormCopy.placeholders.phone,
  submitLabel = quoteFormCopy.submit,
  submitButtonClassName,
  budgetOptions = requestQuoteContent.form.budgetOptions,
}: QuoteFormProps = {}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitQuoteForm,
    initialQuoteFormState,
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
        field.value = searchParams.get(name) ?? "";
      }
    }
  }, []);

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="mb-6 font-display text-[35px] leading-[48.475px] font-medium tracking-[-0.7px] text-ink max-[1199px]:text-[29px] max-[767px]:leading-[33.24px] max-[767px]:tracking-[-.48px] max-[992px]:mb-10 max-[359px]:text-2xl">
          {title}
        </h2>
      )}

      <form ref={formRef} action={formAction} aria-label={quoteFormCopy.ariaLabel} className="max-[767px]:relative max-[767px]:-top-0.5">
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
        {attributionFields.map((name) => (
          <input key={name} type="hidden" name={name} />
        ))}

        <div className="-mx-[7px] flex flex-wrap max-[767px]:mx-0">
          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-[15px] max-[767px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-name" required>
              {quoteFormCopy.labels.name}
            </FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={quoteFormCopy.placeholders.name}
              maxLength={400}
              required
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-email" required>
              {quoteFormCopy.labels.email}
            </FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
              id="quote-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={quoteFormCopy.placeholders.email}
              maxLength={400}
              required
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-phone">{quoteFormCopy.labels.phone}</FieldLabel>
            <PhoneInputClient
              
              id="quote-phone"
              name="phone"
              placeholder={phonePlaceholder ?? undefined}
              searchPlaceholder={quoteFormCopy.phoneSearchPlaceholder}
              selectAriaLabel={quoteFormCopy.phoneCountrySelectAriaLabel}
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-company">{quoteFormCopy.labels.company}</FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
              id="quote-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder={quoteFormCopy.placeholders.company}
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-website">{quoteFormCopy.labels.website}</FieldLabel>
            <input
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
              id="quote-website"
              name="websiteUrl"
              type="text"
              autoComplete="url"
              placeholder={quoteFormCopy.placeholders.website}
              maxLength={400}
            />
          </div>

          <div className="mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
            <FieldLabel htmlFor="quote-budget">{quoteFormCopy.labels.budget}</FieldLabel>
            <select
              className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-white bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
              id="quote-budget"
              name="budget"
              defaultValue=""
            >
              <option value="">{quoteFormCopy.placeholders.budget}</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-7 w-full px-[7px] max-[1199px]:mb-5 max-[992px]:mb-[15px] max-[767px]:mb-5 max-[767px]:px-0">
            <FieldLabel htmlFor="quote-project">{quoteFormCopy.labels.project}</FieldLabel>
            <textarea
              className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 py-3 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
              id="quote-project"
              name="project"
              placeholder={quoteFormCopy.placeholders.project}
              maxLength={2000}
            />
          </div>
        </div>

        <div className={state.status === "idle" ? "h-0" : "min-h-6"} aria-live="polite">
          {state.status !== "idle" ? (
            <p
              className={
                state.status === "error"
                  ? "text-sm font-medium text-[#b42318]"
                  : "text-sm font-medium text-brand-green"
              }
            >
              {state.message}
            </p>
          ) : null}
        </div>

        <div>
          <button
            className={
              submitButtonClassName ??
              "group/quote-submit relative inline-flex min-h-[49px] cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red lg:px-8 px-6 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-600 hover:border-[#4f4f4f] hover:text-[#4f4f4f] disabled:cursor-wait disabled:opacity-70"
            }
            type="submit"
            disabled={isPending}
          >
            <span
              className="absolute inset-0 bg-brand-red transition-transform duration-600 group-hover/quote-submit:translate-x-full"
              aria-hidden="true"
            />
            <span className="relative z-1">
              {isPending ? quoteFormCopy.sending : submitLabel}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export function MultiStepQuoteRequestBlock({
  hero,
  counters,
  badges,
  testimonials,
  budgetOptions,
  form,
}: MultiStepQuoteRequestBlockProps = {}) {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="request-quote-sec relative -mt-[111px] overflow-hidden p-0">
        <Container variant="form">
          <div className="request-quote-main">
            <div className="wrapper flex max-[992px]:flex-col-reverse">
              <div className="left-col-wrapper relative w-1/2 before:absolute before:top-0 before:right-0 before:-z-10 before:h-full before:w-[100vw] before:bg-[#fbf7ed] before:content-[''] max-[992px]:w-full max-[992px]:before:left-1/2 max-[992px]:before:right-1/2 max-[992px]:before:-ml-[50vw] max-[992px]:before:-mr-[50vw]">
                <QuoteLeftColumn
                  badges={badges}
                  counters={counters}
                  hero={hero}
                  testimonials={testimonials}
                />
              </div>
              {form && typeof form === "object" ? (
                <div className="right-col w-1/2 py-[150px] pl-[46px] pb-[110px] max-[1199px]:pl-[30px] max-[992px]:w-full max-[992px]:pt-[150px] max-[992px]:pl-0 max-[992px]:pb-[50px] max-[767px]:pt-[145px] max-[767px]:pb-[50px]">
                  <h2 className="mb-6 font-display text-[35px] leading-[48.475px] font-medium tracking-[-0.7px] text-ink max-[1199px]:text-[29px] max-[767px]:leading-[33.24px] max-[767px]:tracking-[-.48px] max-[992px]:mb-10 max-[359px]:text-2xl">
                    {hero?.title || (typeof form === "object" && form !== null && "title" in form && form.title ? form.title : requestQuoteContent.form.title)}
                  </h2>
                  <CmsFormClient
                    form={form}
                    submitButtonClassName="group/quote-submit relative inline-flex min-h-[49px] cursor-pointer items-center justify-center overflow-hidden rounded-[30px] border-2 border-brand-red bg-brand-red px-8 py-[15px] text-center text-base leading-none font-bold text-white uppercase transition-colors duration-300 hover:bg-black hover:border-black disabled:cursor-wait disabled:opacity-70"
                  />
                </div>
              ) : (
                <QuoteForm budgetOptions={budgetOptions} />
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export const RequestQuotePage = MultiStepQuoteRequestBlock;
