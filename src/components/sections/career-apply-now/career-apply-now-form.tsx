"use client";

import { useActionState, useEffect, useRef, useState } from "react";

import { submitCareerApplication, type CareerApplyFormState } from "@/lib/actions/career";
import { ButtonLink } from "@/components/ui/button-link";
import { PhoneInput } from "@/components/ui/phone-input";
import { careerApplyNowContent } from "@/content/career-apply-now";
import { careerApplyFormCopy } from "@/content/forms";
import { ATTRIBUTION_FIELDS, populateAttributionInputs } from "@/lib/attribution";

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
      className="mb-4 block text-lg font-semibold leading-[26.19px] text-[#090909] max-[1200px]:mb-2.5 max-[992px]:text-base max-[992px]:leading-normal"
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
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [clearedFields, setClearedFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      populateAttributionInputs(formRef.current);
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

    populateAttributionInputs(formRef.current);
  }, []);

  function clearFieldError(fieldName: string) {
    setClearedFields((prev) => ({ ...prev, [fieldName]: true }));
    setClientErrors((prev) => {
      if (!prev[fieldName]) return prev;
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (fileNameRef.current) {
      fileNameRef.current.textContent =
        file?.name ?? careerApplyFormCopy.upload.noFileChosen;
    }
    clearFieldError("File");
    clearFieldError("resume");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setClearedFields({});
    const form = event.currentTarget;
    populateAttributionInputs(form);
    const formData = new FormData(form);
    const name = ((formData.get("EnterYourName") as string) || "").trim();
    const email = ((formData.get("email") as string) || "").trim();
    const file = formData.get("File") || formData.get("resume");

    const errors: Record<string, string> = {};
    if (!name) {
      errors.EnterYourName = careerApplyFormCopy.validation.required;
    }
    if (!email) {
      errors.email = careerApplyFormCopy.validation.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = careerApplyFormCopy.validation.invalidEmail;
    }

    if (file instanceof File && file.size > 0) {
      if (file.size > 5 * 1024 * 1024) {
        errors.File = careerApplyFormCopy.validation.fileTooLarge;
      } else {
        const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
        if (![".pdf", ".doc", ".docx", ".txt"].includes(ext)) {
          errors.File = careerApplyFormCopy.validation.invalidFileType;
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setClientErrors(errors);
      return;
    }

    setClientErrors({});
  }

  const activeErrors: Record<string, string> = {
    ...(state.status === "error" ? state.fieldErrors : {}),
    ...clientErrors,
  };
  Object.keys(clearedFields).forEach((key) => {
    if (clearedFields[key]) {
      delete activeErrors[key];
    }
  });

  const hasClientErrors = Object.keys(clientErrors).some((k) => !clearedFields[k]);
  const responseMessage =
    state.status === "success"
      ? state.message
      : hasClientErrors
        ? careerApplyFormCopy.validation.validationError
        : state.status === "error" && Object.keys(activeErrors).length > 0
          ? state.message
          : null;

  return (
    <div className="right-col w-[61%] max-[1200px]:w-[55%] max-[992px]:w-full">
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        noValidate
        aria-label={careerApplyFormCopy.ariaLabel}
        className="form-row -mx-[7px] flex flex-wrap max-[768px]:mx-0"
      >
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />
        {ATTRIBUTION_FIELDS.map((name) => (
          <input key={name} type="hidden" name={name} />
        ))}

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-position">
              {careerApplyFormCopy.labels.position}
            </FieldLabel>
            <div className="select_box relative">
              <select
                id="job-position"
                name="PositionAppliedFor"
                defaultValue=""
                className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm max-[992px]:h-[44px]"
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

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-location">
              {careerApplyFormCopy.labels.location}
            </FieldLabel>
            <div className="select_box relative">
              <select
                id="job-location"
                name="Location"
                defaultValue="Surat"
                className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm max-[992px]:h-[44px]"
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

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
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
              aria-required="true"
              aria-invalid={Boolean(activeErrors.EnterYourName || activeErrors.name)}
              maxLength={400}
              placeholder={careerApplyFormCopy.placeholders.name}
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm max-[992px]:h-[44px]"
              onChange={() => {
                clearFieldError("EnterYourName");
                clearFieldError("name");
              }}
            />
            {(activeErrors.EnterYourName || activeErrors.name) && (
              <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
                {activeErrors.EnterYourName || activeErrors.name}
              </span>
            )}
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
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
              aria-required="true"
              aria-invalid={Boolean(activeErrors.email || activeErrors.Email)}
              maxLength={400}
              placeholder={careerApplyFormCopy.placeholders.email}
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm max-[992px]:h-[44px]"
              onChange={() => {
                clearFieldError("email");
                clearFieldError("Email");
              }}
            />
            {(activeErrors.email || activeErrors.Email) && (
              <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
                {activeErrors.email || activeErrors.Email}
              </span>
            )}
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
          <div className="form-group">
            <FieldLabel htmlFor="job-phone">
              {careerApplyFormCopy.labels.phone}
            </FieldLabel>
            <PhoneInput
              id="job-phone"
              name="tel"
              defaultIso2="in"
              selectAriaLabel={careerApplyFormCopy.phoneCountrySelectAriaLabel}
              listAriaLabel={careerApplyFormCopy.phoneCountryListAriaLabel}
              maxLength={400}
            />
          </div>
        </div>

        <div className="col-md-6 mb-7 w-1/2 px-[7px] max-[992px]:mb-5 max-[768px]:w-full max-[768px]:px-0">
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
              className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm max-[992px]:h-[44px]"
            />
          </div>
        </div>

        <div className="col-md-12 mb-7 w-full px-[7px] max-[992px]:mb-5 max-[768px]:px-0">
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
              className="h-[136px] w-full resize-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] px-4 py-3 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1200px]:text-sm"
            />
          </div>
        </div>

        <div className="col-md-12 mb-7 w-full px-[7px] max-[992px]:mb-5 max-[768px]:px-0">
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
                  className="inline-block cursor-pointer rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[url('/assets/career/icons/upload-icon.svg')] bg-[position:6px_center] bg-no-repeat py-5 pr-5 pl-20 text-base font-medium leading-[23.28px] text-[#090909] transition-colors hover:border-[#090909] max-[992px]:py-4 max-[992px]:pl-16 max-[992px]:text-sm"
                >
                  {careerApplyFormCopy.upload.button}
                </label>
                <span className="ml-4 text-xs font-medium leading-[17.46px] text-[#090909] max-[1299px]:ml-2.5 max-[1299px]:text-[11px] max-[1200px]:mt-2.5 max-[1200px]:block max-[1200px]:w-full max-[1200px]:ml-0">
                  {careerApplyFormCopy.upload.helpText}
                </span>
              </div>
              <div className="no_file mt-[5px] text-xs font-medium leading-[17.46px] text-[#090909]">
                <p ref={fileNameRef} className="m-0">
                  {careerApplyFormCopy.upload.noFileChosen}
                </p>
              </div>
              {(activeErrors.File || activeErrors.resume) && (
                <span className="wpcf7-not-valid-tip mt-[7px] block font-montserrat text-[14px] leading-[14px] font-medium text-[#dc3232]" aria-hidden="true">
                  {activeErrors.File || activeErrors.resume}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-12 w-full px-[7px] max-[768px]:px-0">
          <div className="form-group mb-0">
            <ButtonLink
              type="submit"
              variant="primary"
              disabled={isPending}
              className="cursor-pointer px-8 text-center disabled:cursor-wait disabled:opacity-70"
            >
              {isPending
                ? careerApplyFormCopy.submitting
                : careerApplyFormCopy.submit}
            </ButtonLink>
          </div>
        </div>

        {responseMessage && (
          <div className="col-md-12 w-full px-[7px] max-[768px]:px-0">
            <div
              className={
                state.status === "success"
                  ? "wpcf7-response-output mt-7 mb-3.5 block border-2 border-[#46b450] px-[14px] py-[2.8px] font-montserrat text-[14px] leading-normal font-normal text-[#535353]"
                  : "wpcf7-response-output mt-7 mb-3.5 block border-2 border-[#dc3232] px-[14px] py-[2.8px] font-montserrat text-[14px] leading-normal font-medium text-[#535353] text-center"
              }
              aria-hidden="true"
            >
              {responseMessage}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
