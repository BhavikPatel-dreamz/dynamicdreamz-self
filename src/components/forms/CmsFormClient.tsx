"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneInput } from "@/components/ui/phone-input";
import { cmsFormCopy, contactFormCopy } from "@/content/forms";
import type { Form as PayloadForm } from "@/types/payload-types";

type FormFieldBlock = NonNullable<PayloadForm["fields"]>[number];

export type CmsFormClientProps = {
  form: PayloadForm | number | string | null | undefined;
  className?: string;
  submitButtonClassName?: string;
  footerNote?: React.ReactNode;
  onSuccess?: () => void;
};

const COMMON_COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Netherlands",
  "Singapore",
  "United Arab Emirates",
  "Other",
] as const;

function renderLexicalNode(node: any, key: number | string): React.ReactNode {
  if (!node) return null;

  if (typeof node === "string") {
    return node;
  }

  if (node.text) {
    let content: React.ReactNode = node.text;
    if (node.format & 1) {
      content = <strong className="font-bold">{content}</strong>;
    }
    if (node.format & 2) {
      content = <em className="italic">{content}</em>;
    }
    if (node.format & 4) {
      content = <s className="line-through">{content}</s>;
    }
    if (node.format & 8) {
      content = <u className="underline">{content}</u>;
    }
    return <React.Fragment key={key}>{content}</React.Fragment>;
  }

  const children = Array.isArray(node.children)
    ? node.children.map((child: any, idx: number) => renderLexicalNode(child, idx))
    : null;

  switch (node.type) {
    case "paragraph":
      return (
        <p key={key} className="mb-2 leading-relaxed text-[#090909] last:mb-0">
          {children}
        </p>
      );
    case "heading": {
      const Tag = (node.tag || "h3") as keyof React.JSX.IntrinsicElements;
      return (
        <Tag key={key} className="mb-3 font-semibold text-[#090909]">
          {children}
        </Tag>
      );
    }
    case "link":
      return (
        <a
          key={key}
          href={node.fields?.url || node.url || "#"}
          target={node.fields?.newTab ? "_blank" : undefined}
          rel={node.fields?.newTab ? "noopener noreferrer" : undefined}
          className="text-[#d92128] underline underline-offset-2 hover:no-underline"
        >
          {children}
        </a>
      );
    case "list": {
      const ListTag = node.listType === "number" ? "ol" : "ul";
      const listStyle = node.listType === "number" ? "list-decimal pl-5 mb-3" : "list-disc pl-5 mb-3";
      return (
        <ListTag key={key} className={listStyle}>
          {children}
        </ListTag>
      );
    }
    case "listitem":
      return (
        <li key={key} className="mb-1 text-[#090909]">
          {children}
        </li>
      );
    default:
      return <React.Fragment key={key}>{children}</React.Fragment>;
  }
}

function renderLexicalRichText(data: any): React.ReactNode {
  if (!data) return null;
  if (typeof data === "string") return data;
  if (data.root && Array.isArray(data.root.children)) {
    return data.root.children.map((child: any, idx: number) => renderLexicalNode(child, idx));
  }
  return null;
}

export function CmsFormClient({
  form,
  className = "",
  submitButtonClassName = "",
  footerNote,
  onSuccess,
}: CmsFormClientProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const parsedForm = typeof form === "object" && form !== null ? form : null;
  const formId = parsedForm?.id;
  const fields = parsedForm?.fields || [];
  const submitLabel = parsedForm?.submitButtonLabel || cmsFormCopy.defaultSubmit;

  useEffect(() => {
    if (isSubmitted) {
      onSuccess?.();
    }
  }, [isSubmitted, onSuccess]);

  useEffect(() => {
    if (typeof window === "undefined" || !formRef.current) return;
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, val] of searchParams.entries()) {
      if (!val) continue;
      const elements = Array.from(formRef.current.elements);
      const match = elements.find((el) => {
        const name = (el as HTMLInputElement).name;
        if (!name) return false;
        const normKey = key.toLowerCase().replace(/[^a-z0-9]/g, "");
        const normName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
        return normKey === normName || normName.includes(normKey) || normKey.includes(normName);
      }) as HTMLInputElement | HTMLSelectElement | undefined;

      if (match) {
        if (match.tagName === "SELECT") {
          const select = match as HTMLSelectElement;
          const option = Array.from(select.options).find(
            (opt) =>
              opt.value.toLowerCase() === val.toLowerCase() ||
              opt.text.toLowerCase() === val.toLowerCase(),
          );
          if (option) {
            select.value = option.value;
          }
        } else if (match.tagName === "INPUT" && (match as HTMLInputElement).type !== "file") {
          match.value = val;
        }
      }
    }
  }, [parsedForm]);

  if (!parsedForm || !formId) {
    return null;
  }

  if (isSubmitted && parsedForm.confirmationType === "message") {
    return (
      <div
        role="status"
        className="rounded-[8px] border border-[#2e7d32] bg-[#edf7ed] p-6 text-[#1e4620]"
      >
        {parsedForm.confirmationMessage ? (
          renderLexicalRichText(parsedForm.confirmationMessage)
        ) : (
          <p className="text-base font-medium">{cmsFormCopy.defaultSuccess}</p>
        )}
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData(formRef.current);

      // Honeypot check
      const website = formData.get("website");
      if (website && typeof website === "string" && website.trim() !== "") {
        // Pretend success for spam bots
        setIsSubmitted(true);
        setIsSubmitting(false);
        return;
      }

      const submissionData: Array<{ field: string; value: string }> = [];

      const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
      if (searchParams) {
        for (const attr of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
          const val = searchParams.get(attr);
          if (val) {
            submissionData.push({ field: attr, value: val });
          }
        }
      }

      for (const field of fields) {
        if ("name" in field && field.name) {
          if (field.blockType === "upload") {
            const files = formData.getAll(field.name);
            const validFiles = files.filter(
              (f): f is File => f instanceof File && f.size > 0,
            );
            if (validFiles.length > 0) {
              const uploadCollection = (field as any).uploadCollection || "documents";
              const uploadedIds: string[] = [];
              for (const file of validFiles) {
                const fileFormData = new FormData();
                fileFormData.append("file", file);
                const upRes = await fetch(`/api/${uploadCollection}`, {
                  method: "POST",
                  body: fileFormData,
                });
                if (!upRes.ok) {
                  const upErr = await upRes.json().catch(() => null);
                  throw new Error(
                    upErr?.errors?.[0]?.message || cmsFormCopy.uploadError,
                  );
                }
                const upDoc = await upRes.json();
                if (upDoc?.doc?.id) {
                  uploadedIds.push(String(upDoc.doc.id));
                }
              }
              if (uploadedIds.length > 0) {
                submissionData.push({
                  field: field.name,
                  value: uploadedIds.join(","),
                });
              }
            }
          } else {
            const rawValue = formData.get(field.name);
            if (rawValue !== null) {
              const dialCode = formData.get(`${field.name}_dial_code`);
              const finalValue =
                dialCode && typeof dialCode === "string" && typeof rawValue === "string" && rawValue.trim() !== ""
                  ? `${dialCode} ${rawValue}`
                  : String(rawValue);
              submissionData.push({
                field: field.name,
                value: finalValue,
              });
            }
          }
        }
      }

      // Add attribution fields if present
      const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      for (const key of attributionKeys) {
        const val = formData.get(key);
        if (val && typeof val === "string") {
          submissionData.push({ field: key, value: val });
        }
      }

      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: formId,
          submissionData,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => null);
        const serverError = errJson?.errors?.[0]?.message || cmsFormCopy.defaultError;
        throw new Error(serverError);
      }

      setIsSubmitted(true);

      // Handle redirect confirmation
      if (parsedForm.confirmationType === "redirect" && parsedForm.redirect) {
        const { redirect } = parsedForm;
        if (redirect.type === "custom" && redirect.url) {
          if (redirect.url.startsWith("http://") || redirect.url.startsWith("https://")) {
            window.location.href = redirect.url;
          } else {
            router.push(redirect.url);
          }
        } else if (redirect.type === "reference" && redirect.reference?.value) {
          const ref = redirect.reference.value;
          const targetSlug = typeof ref === "object" && "slug" in ref ? String(ref.slug) : "";
          const targetPath = targetSlug && targetSlug !== "home" ? `/${targetSlug}` : "/";
          router.push(targetPath);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || cmsFormCopy.defaultError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      aria-label={parsedForm.title || cmsFormCopy.ariaLabel}
      className={className}
    >
      {/* Honeypot field for anti-spam */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="-mx-[7px] flex flex-wrap max-[767px]:mx-0">
        {fields.map((field: FormFieldBlock, index: number) => {
          if (!field) return null;

          if (field.blockType === "message") {
            return (
              <div key={field.id || index} className="mb-5 w-full px-[7px] max-[767px]:px-0">
                <div className="rounded-[5px] bg-[#f8f8f8] p-4 text-sm text-[#090909]">
                  {renderLexicalRichText(field.message)}
                </div>
              </div>
            );
          }

          const fieldWidth = (field as any).width || 100;
          const isHalfWidth = fieldWidth <= 50 && field.blockType !== "textarea";
          const colClass = isHalfWidth
            ? "mb-7 w-1/2 px-[7px] max-[1199px]:mb-5 max-[992px]:mb-[15px] max-[767px]:mb-5 max-[767px]:w-full max-[767px]:px-0"
            : "mb-7 w-full px-[7px] max-[1199px]:mb-5 max-[992px]:mb-[15px] max-[767px]:mb-5 max-[767px]:px-0";

          const fieldId = `form-${formId}-${(field as any).name}-${index}`;
          const isRequired = Boolean((field as any).required);
          const fieldLabel = (field as any).label || (field as any).name;
          const fieldPlaceholder =
            (field as any).placeholder ||
            cmsFormCopy.placeholders[
              (field as any).name as keyof typeof cmsFormCopy.placeholders
            ] ||
            "";

          return (
            <div key={field.id || index} className={colClass}>
              {field.blockType === "checkbox" ? (
                <div className="flex items-center gap-2 pt-2">
                  <input
                    id={fieldId}
                    name={(field as any).name}
                    type="checkbox"
                    required={isRequired}
                    defaultChecked={Boolean((field as any).defaultValue)}
                    className="h-4 w-4 rounded border-[#dfdfdf] text-[#090909] focus:ring-black"
                  />
                  <label
                    htmlFor={fieldId}
                    className="text-sm font-semibold text-[#090909]"
                  >
                    {fieldLabel}
                    {isRequired && (
                      <em className="ml-1 not-italic text-[#d92128] text-lg font-semibold leading-none">
                        {cmsFormCopy.requiredMarker}
                      </em>
                    )}
                  </label>
                </div>
              ) : (
                <>
                  <label
                    htmlFor={fieldId}
                    className="mb-2.5 block text-base leading-normal font-semibold text-[#090909] max-[991px]:text-sm"
                  >
                    {fieldLabel}
                    {isRequired && (
                      <em className="ml-1 not-italic text-[#d92128] text-lg font-semibold leading-none">
                        {cmsFormCopy.requiredMarker}
                      </em>
                    )}
                  </label>

                  {field.blockType === "textarea" ? (
                    <textarea
                      id={fieldId}
                      name={(field as any).name}
                      required={isRequired}
                      defaultValue={(field as any).defaultValue || ""}
                      placeholder={fieldPlaceholder}
                      rows={4}
                      className="w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] p-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm"
                    />
                  ) : field.blockType === "select" ? (
                    <div className="relative">
                      <select
                        id={fieldId}
                        name={(field as any).name}
                        required={isRequired}
                        defaultValue={(field as any).defaultValue || ""}
                        className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
                      >
                        <option value="">
                          {(field as any).placeholder || cmsFormCopy.selectPlaceholder}
                        </option>
                        {Array.isArray((field as any).options) &&
                          (field as any).options.map((opt: any, optIdx: number) => (
                            <option key={opt.id || opt.value || optIdx} value={opt.value}>
                              {opt.label || opt.value}
                            </option>
                          ))}
                      </select>
                    </div>
                  ) : field.blockType === "country" ? (
                    <div className="relative">
                      <select
                        id={fieldId}
                        name={(field as any).name}
                        required={isRequired}
                        defaultValue={(field as any).defaultValue || ""}
                        className="h-[49px] w-full cursor-pointer appearance-none rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[rgba(254,254,254,0.93)] bg-[url('/assets/request-quote/icons/select-arrow.svg')] bg-[position:calc(100%-16px)_center] bg-no-repeat px-4 pr-9 text-base font-medium text-[#090909] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
                      >
                        <option value="">{cmsFormCopy.countryPlaceholder}</option>
                        {COMMON_COUNTRIES.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : field.blockType === "upload" ? (
                    <div className="upload_file">
                      <div className="flex flex-wrap items-center">
                        <input
                          id={fieldId}
                          name={(field as any).name}
                          type="file"
                          required={isRequired}
                          multiple={Boolean((field as any).multiple)}
                          accept={
                            Array.isArray((field as any).mimeTypes)
                              ? (field as any).mimeTypes
                                  .map((m: any) => m.mimeType || m)
                                  .join(",")
                              : undefined
                          }
                          className="sr-only"
                          onChange={(e) => {
                            const fileName = e.target.files?.[0]?.name;
                            const labelEl = document.getElementById(`${fieldId}-filename`);
                            if (labelEl) {
                              labelEl.textContent = fileName || cmsFormCopy.uploadNoFileChosen;
                            }
                          }}
                        />
                        <label
                          htmlFor={fieldId}
                          className="inline-block cursor-pointer rounded-[5px] border-[1.5px] border-[#dfdfdf] bg-[url('/assets/career/icons/upload-icon.svg')] bg-[position:6px_center] bg-no-repeat py-5 pr-5 pl-20 text-base font-medium leading-[23.28px] text-[#090909] transition-colors hover:border-[#090909] max-[991px]:py-4 max-[991px]:pl-16 max-[991px]:text-sm"
                        >
                          {cmsFormCopy.uploadButton}
                        </label>
                        <span className="ml-4 text-xs font-medium leading-[17.46px] text-[#090909] max-[1299px]:ml-2.5 max-[1299px]:text-[11px] max-[1199px]:mt-2.5 max-[1199px]:block max-[1199px]:w-full max-[1199px]:ml-0">
                          {cmsFormCopy.uploadHelpText}
                        </span>
                      </div>
                      <div className="no_file mt-[5px] text-xs font-medium leading-[17.46px] text-[#090909]">
                        <p id={`${fieldId}-filename`} className="m-0">
                          {cmsFormCopy.uploadNoFileChosen}
                        </p>
                      </div>
                    </div>
                  ) : (field as any).name === "phone" || (field as any).name?.toLowerCase().includes("phone") ? (
                    <PhoneInput
                      id={fieldId}
                      name={(field as any).name}
                      required={isRequired}
                      placeholder={fieldPlaceholder}
                      defaultIso2="in"
                      searchPlaceholder={contactFormCopy.phoneSearchPlaceholder}
                      selectAriaLabel={contactFormCopy.phoneCountrySelectAriaLabel}
                    />
                  ) : (
                    <input
                      id={fieldId}
                      name={(field as any).name}
                      type={
                        field.blockType === "email"
                          ? "email"
                          : field.blockType === "number"
                            ? "number"
                            : "text"
                      }
                      required={isRequired}
                      defaultValue={(field as any).defaultValue || ""}
                      placeholder={fieldPlaceholder}
                      className="h-[49px] w-full rounded-[5px] border-[1.5px] border-[#dfdfdf] px-4 text-base font-medium text-[#090909] placeholder:text-[#9a9a9a] focus:border-[#090909] focus:outline-none max-[1199px]:text-sm max-[992px]:h-[44px]"
                    />
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mb-5 rounded-[5px] border border-[#d32f2f] bg-[#fdecea] p-4 text-sm font-medium text-[#d32f2f]"
        >
          {errorMessage}
        </div>
      )}

      <div
        className={
          footerNote
            ? "flex items-center justify-between gap-5 pt-2 max-[767px]:flex-col-reverse max-[767px]:items-center [&_button]:max-[767px]:w-full"
            : "pt-2"
        }
      >
        {footerNote && (
          <div className="text-xs font-normal text-muted max-[767px]:text-center">
            {footerNote}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            submitButtonClassName ||
            "inline-flex h-[52px] min-w-[180px] cursor-pointer items-center justify-center rounded-[5px] bg-[#090909] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d92128] disabled:cursor-not-allowed disabled:opacity-60 max-[767px]:w-full"
          }
        >
          {isSubmitting ? cmsFormCopy.submitting : submitLabel}
        </button>
      </div>
    </form>
  );
}
