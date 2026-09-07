"use client";

import { useActionState, useEffect, useRef } from "react";

import { submitCareerApplication, type CareerApplyFormState } from "@/app/career-apply-now/actions";
import { ButtonLink } from "@/components/ui/button-link";
import { careerApplyNowContent } from "@/content/career-apply-now";
import { careerApplyFormCopy } from "@/content/forms";

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
            <ButtonLink
              type="submit"
              variant="primary"
              disabled={isPending}
              className="min-h-[49px] cursor-pointer px-8 py-[15px] text-center max-[767px]:w-full disabled:cursor-wait disabled:opacity-70"
            >
              {isPending
                ? careerApplyFormCopy.submitting
                : careerApplyFormCopy.submit}
            </ButtonLink>
          </div>
        </div>
      </form>
    </div>
  );
}
