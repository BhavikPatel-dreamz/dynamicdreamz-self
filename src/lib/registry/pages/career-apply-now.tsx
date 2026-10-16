"use client";

import React, { useActionState, useEffect, useRef } from "react";
import { HeaderTwo } from "@/components/blocks/MultiStepQuoteRequestBlock";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { careerApplyNowContent } from "@/content/career-apply-now";
import { careerApplyFormCopy } from "@/content/forms";
import { submitCareerApplication, type CareerApplyFormState } from "@/lib/actions/career";

const attributionFields = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const initialFormState: CareerApplyFormState = {
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
      className="mb-4 block text-lg font-semibold leading-[26.19px] text-[#090909] max-[1199px]:mb-2.5 max-[991px]:text-base max-[991px]:leading-normal"
    >
      {children}
      {required ? <em className="ml-1 not-italic text-[#d92128]">*</em> : null}
    </label>
  );
}

export function CareerApplyNowForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileNameRef = useRef<HTMLParagraphElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitCareerApplication,
    initialFormState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      if (fileNameRef.current) {
        fileNameRef.current.textContent = careerApplyFormCopy.upload.noFileChosen;
      }
    }
  }, [state.status]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const positionParam = searchParams.get("PositionAppliedFor");
    if (positionParam && formRef.current) {
      const positionSelect = formRef.current.elements.namedItem(
        "PositionAppliedFor",
      ) as HTMLSelectElement | null;
      if (positionSelect) {
        const optionExists = Array.from(positionSelect.options).some(
          (opt) => opt.value.toLowerCase() === positionParam.toLowerCase(),
        );
        if (optionExists) {
          positionSelect.value = positionParam;
        }
      }
    }

    const locationParam = searchParams.get("Location");
    if (locationParam && formRef.current) {
      const locationSelect = formRef.current.elements.namedItem(
        "Location",
      ) as HTMLSelectElement | null;
      if (locationSelect) {
        const optionExists = Array.from(locationSelect.options).some(
          (opt) => opt.value.toLowerCase() === locationParam.toLowerCase(),
        );
        if (optionExists) {
          locationSelect.value = locationParam;
        }
      }
    }

    for (const name of attributionFields) {
      const field = formRef.current?.elements.namedItem(name);
      if (field instanceof HTMLInputElement) {
        field.value = searchParams.get(name) ?? "";
      }
    }
  }, []);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (fileNameRef.current) {
      fileNameRef.current.textContent =
        file?.name ?? careerApplyFormCopy.upload.noFileChosen;
    }
  }

  return (
    <div className="right-col w-[61%] max-[1199px]:w-[55%] max-[991px]:w-full">
      <form
        ref={formRef}
        action={formAction}
        aria-label={careerApplyFormCopy.ariaLabel}
        className="form-row -mx-[7px] flex flex-wrap max-[767px]:mx-0"
      >
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

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-position">
              {careerApplyFormCopy.labels.position}
            </FieldLabel>
            <div className="select_box relative">
              <select
                id="job-position"
                name="PositionAppliedFor"
                defaultValue=""
                className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[991px]:h-[44px]"
              >
                <option value="">{careerApplyFormCopy.placeholders.position}</option>
                {careerApplyNowContent.positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-location">
              {careerApplyFormCopy.labels.location}
            </FieldLabel>
            <div className="select_box relative">
              <select
                id="job-location"
                name="Location"
                defaultValue="Surat"
                className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[991px]:h-[44px]"
              >
                {careerApplyNowContent.locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-name" required>
              {careerApplyFormCopy.labels.name}
            </FieldLabel>
            <input
              id="job-name"
              name="EnterYourName"
              type="text"
              autoComplete="name"
              required
              maxLength={400}
              placeholder={careerApplyFormCopy.placeholders.name}
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[991px]:h-[44px]"
            />
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-email" required>
              {careerApplyFormCopy.labels.email}
            </FieldLabel>
            <input
              id="job-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={400}
              placeholder={careerApplyFormCopy.placeholders.email}
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[991px]:h-[44px]"
            />
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-phone">
              {careerApplyFormCopy.labels.phone}
            </FieldLabel>
            <div className="flex h-[49px] w-full items-center rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] transition-colors focus-within:border-[#090909] max-[1199px]:text-sm max-[991px]:h-[44px]">
              <span
                className="mr-3 flex shrink-0 items-center gap-1.5 border-r border-[#dfdfdf] pr-3 text-sm text-[#090909]"
                aria-label={careerApplyFormCopy.phoneAriaLabel}
              >
                <svg
                  className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.3)]"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="20" height="14" fill="#FFFFFF" />
                  <rect width="20" height="4.67" fill="#FF9933" />
                  <rect y="9.33" width="20" height="4.67" fill="#128807" />
                  <circle cx="10" cy="7" r="1.8" stroke="#000080" strokeWidth="0.6" />
                  <circle cx="10" cy="7" r="0.6" fill="#000080" />
                </svg>
                <span>{careerApplyFormCopy.phoneCountryCode}</span>
                <span className="text-[10px] text-[#535353]" aria-hidden="true">
                  ▼
                </span>
              </span>
              <input
                id="job-phone"
                name="tel"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={400}
                className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:outline-none max-[1199px]:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[991px]:mb-5 max-[767px]:w-full max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-experience">
              {careerApplyFormCopy.labels.experience}
            </FieldLabel>
            <input
              id="job-experience"
              name="YearsofExp"
              type="text"
              maxLength={400}
              placeholder={careerApplyFormCopy.placeholders.experience}
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[991px]:h-[44px]"
            />
          </div>
        </div>

        <div className="col-md-12 mb-7 w-full px-[7px] max-[991px]:mb-5 max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-message">
              {careerApplyFormCopy.labels.message}
            </FieldLabel>
            <textarea
              id="job-message"
              name="EnterYourMessage"
              rows={10}
              maxLength={2000}
              placeholder={careerApplyFormCopy.placeholders.message}
              className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 py-3 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
            />
          </div>
        </div>

        <div className="col-md-12 mb-7 w-full px-[7px] max-[991px]:mb-5 max-[767px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="file-upload">
              {careerApplyFormCopy.labels.resume}
            </FieldLabel>
            <div className="upload_file">
              <div className="flex flex-wrap items-center">
                <input
                  ref={fileInputRef}
                  id="file-upload"
                  name="File"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="sr-only"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block cursor-pointer rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[url('/assets/career/icons/upload-icon.svg')] bg-[position:6px_center] bg-no-repeat py-5 pr-5 pl-20 text-base font-medium leading-[23.28px] text-[#090909] transition-colors hover:border-[#090909] max-[991px]:py-4 max-[991px]:pl-16 max-[991px]:text-sm"
                >
                  {careerApplyFormCopy.upload.button}
                </label>
                <span className="ml-4 text-xs font-medium leading-[17.46px] text-[#090909] max-[1299px]:ml-2.5 max-[1299px]:text-[11px] max-[1199px]:mt-2.5 max-[1199px]:block max-[1199px]:w-full max-[1199px]:ml-0">
                  {careerApplyFormCopy.upload.helpText}
                </span>
              </div>
              <div className="no_file mt-[5px] text-xs font-medium leading-[17.46px] text-[#090909]">
                <p ref={fileNameRef} className="m-0">
                  {careerApplyFormCopy.upload.noFileChosen}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`col-md-12 w-full px-[7px] max-[767px]:px-0 ${
            state.status === "idle" ? "h-0" : "mb-5 min-h-6"
          }`}
          aria-live="polite"
        >
          {state.status !== "idle" ? (
            <p
              className={`text-sm font-medium ${
                state.status === "error" ? "text-[#b42318]" : "text-brand-green"
              }`}
            >
              {state.message}
            </p>
          ) : null}
        </div>

        <div className="col-md-12 w-full px-[7px] max-[767px]:px-0">
          <div className="form-group mb-0">
            <Button
              type="submit"
              variant="primary"
              disabled={isPending}
              className="min-h-[49px] cursor-pointer px-8 py-[15px] text-center max-[767px]:w-full disabled:cursor-wait disabled:opacity-70"
            >
              {isPending
                ? careerApplyFormCopy.submitting
                : careerApplyFormCopy.submit}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export type CareerApplyNowLeftColumnProps = {
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
};

export function CareerApplyNowLeftColumn({
  heading = careerApplyNowContent.heading,
  phoneLabel = careerApplyNowContent.contact.phone.label,
  phoneNumber = careerApplyNowContent.contact.phone.number,
  phoneHref = careerApplyNowContent.contact.phone.href,
  emailLabel = careerApplyNowContent.contact.email.label,
  emailAddress = careerApplyNowContent.contact.email.address,
  emailHref = careerApplyNowContent.contact.email.href,
}: CareerApplyNowLeftColumnProps = {}) {
  return (
    <div className="left-col w-[31%] max-[1199px]:w-[40%] max-[991px]:mb-[60px] max-[991px]:w-full max-[767px]:mb-10">
      <h1 className="mb-8 border-b border-[#efefef] pb-8 text-[35px] font-normal leading-[46px] tracking-normal text-[#090909] max-[1299px]:text-[30px] max-[1299px]:leading-[40px] max-[991px]:mb-5 max-[991px]:pb-5 max-[991px]:text-center max-[767px]:text-[27px] max-[767px]:leading-[38px] max-[320px]:text-[23px] max-[320px]:leading-[33px]">
        {heading}
      </h1>
      <div className="contact-us">
        <ul className="list-none p-0 max-[991px]:flex max-[991px]:flex-wrap max-[991px]:justify-center max-[991px]:gap-5 max-[767px]:mt-10">
          <li className="mb-12 flex items-center max-[991px]:mb-0 max-[767px]:min-w-[256px]">
            <span
              className="mr-4 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] max-[991px]:mr-3.5 max-[991px]:h-[35px] max-[991px]:w-[35px]"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                className="h-auto w-[26px] max-[991px]:w-5"
                aria-hidden="true"
              >
                <g clipPath="url(#phone-clip-career)">
                  <path
                    d="M16.6364 15.5043L16.0684 16.0444C16.0684 16.0444 14.7164 17.3273 11.0275 13.8244C7.3386 10.3216 8.69057 9.03871 8.69057 9.03871L9.0476 8.69773C9.93019 7.86076 10.0138 6.5159 9.24359 5.53348L7.67067 3.5269C6.71692 2.3108 4.8756 2.14985 3.78329 3.18711L1.82337 5.04703C1.28283 5.56209 0.92081 6.22737 0.964503 6.96657C1.07685 8.85868 1.97317 12.9279 6.97159 17.6754C12.2734 22.7091 17.248 22.9094 19.2816 22.7282C19.9258 22.671 20.485 22.3586 20.9357 21.9294L22.7084 20.2459C23.9068 19.1097 23.5697 17.1604 22.0367 16.3651L19.6524 15.1264C18.6462 14.6042 17.4228 14.758 16.6364 15.5043Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="phone-clip-career">
                    <rect
                      width="25.875"
                      height="26.0129"
                      fill="white"
                      transform="translate(0.0625 0.116211)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text">
              <span className="block text-sm font-semibold leading-[20.37px] text-[#6c6c6c] max-[991px]:text-xs">
                {phoneLabel}
              </span>
              <a
                className="block text-lg font-bold leading-[26.19px] text-[#090909] transition-colors hover:text-[#15c064] max-[991px]:text-base"
                href={phoneHref}
              >
                {phoneNumber}
              </a>
            </span>
          </li>
          <li className="flex items-center max-[767px]:min-w-[256px]">
            <span
              className="mr-4 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(97.18deg,#15c064_28.5%,#00d1ff_91.82%)] max-[991px]:mr-3.5 max-[991px]:h-[35px] max-[991px]:w-[35px]"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                className="h-auto w-[26px] max-[991px]:w-5"
                aria-hidden="true"
              >
                <path
                  d="M21.9375 5.52051H4.0625C2.86875 5.52051 1.88542 6.50384 1.88542 7.69759V19.462C1.88542 20.6557 2.86875 21.6391 4.0625 21.6391H21.9375C23.1312 21.6391 24.1146 20.6557 24.1146 19.462V7.69759C24.1146 6.50384 23.1312 5.52051 21.9375 5.52051Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.38542 6.42578L13 14.1956L23.6146 6.42578"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text">
              <span className="block text-sm font-semibold leading-[20.37px] text-[#6c6c6c] max-[991px]:text-xs">
                {emailLabel}
              </span>
              <a
                className="block text-lg font-bold leading-[26.19px] text-[#090909] transition-colors hover:text-[#15c064] max-[991px]:text-base"
                href={emailHref}
              >
                {emailAddress}
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export type CareerApplyNowPageProps = {
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
};

export function CareerApplyNowPage({
  heading,
  phoneLabel,
  phoneNumber,
  phoneHref,
  emailLabel,
  emailAddress,
  emailHref,
}: CareerApplyNowPageProps = {}) {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="apply-interivew-sec p-[40px_0_10px_0]">
        <Container className="min-[1300px]:!max-w-[1354px]">
          <div className="apply-interivew-main rounded-[30px] p-[2px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.66)_33.98%,rgba(0,209,255,0)_78.28%)]">
            <div className="wrapper flex flex-wrap justify-between rounded-[30px] bg-white p-[78px] max-[1299px]:p-[78px_60px] max-[1199px]:p-[60px_40px] max-[991px]:flex-col max-[991px]:p-10 max-[767px]:p-[40px_20px] max-[320px]:p-[40px_10px]">
              <CareerApplyNowLeftColumn
                heading={heading}
                phoneLabel={phoneLabel}
                phoneNumber={phoneNumber}
                phoneHref={phoneHref}
                emailLabel={emailLabel}
                emailAddress={emailAddress}
                emailHref={emailHref}
              />
              <CareerApplyNowForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
