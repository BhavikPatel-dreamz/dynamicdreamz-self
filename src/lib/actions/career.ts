"use server";

import { headers } from "next/headers";

import { careerApplyFormCopy } from "@/content/forms";

export type CareerApplyFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const MAX_FIELD_LENGTH = 400;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx", ".txt"];
const WEBHOOK_TIMEOUT_MS = 10_000;

function fieldValue(formData: FormData, name: string, maxLength = MAX_FIELD_LENGTH) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasValidExtension(fileName: string) {
  const lower = fileName.toLowerCase();
  return ALLOWED_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

export async function submitCareerApplication(
  _previousState: CareerApplyFormState,
  formData: FormData,
): Promise<CareerApplyFormState> {
  // Quietly accept bots that complete the visually hidden honeypot field without forwarding data.
  if (fieldValue(formData, "website")) {
    return {
      status: "success",
      message: careerApplyFormCopy.status.success,
    };
  }

  const name = fieldValue(formData, "EnterYourName") || fieldValue(formData, "name");
  const email = fieldValue(formData, "email");
  const position = fieldValue(formData, "PositionAppliedFor") || fieldValue(formData, "position");
  const location = fieldValue(formData, "Location") || fieldValue(formData, "location") || "Surat";
  const phone = fieldValue(formData, "tel") || fieldValue(formData, "phone");
  const experience = fieldValue(formData, "YearsofExp") || fieldValue(formData, "experience");
  const message =
    fieldValue(formData, "EnterYourMessage", MAX_MESSAGE_LENGTH) ||
    fieldValue(formData, "message", MAX_MESSAGE_LENGTH);

  if (!name || !email) {
    return {
      status: "error",
      message: careerApplyFormCopy.status.missingRequired,
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: careerApplyFormCopy.status.invalidEmail,
    };
  }

  const fileEntry = formData.get("File") || formData.get("resume");
  let fileMeta: { name: string; size: number; type: string } | null = null;

  if (fileEntry instanceof File && fileEntry.size > 0) {
    if (fileEntry.size > MAX_FILE_SIZE) {
      return {
        status: "error",
        message: careerApplyFormCopy.status.fileTooLarge,
      };
    }

    if (!hasValidExtension(fileEntry.name)) {
      return {
        status: "error",
        message: careerApplyFormCopy.status.invalidFileType,
      };
    }

    fileMeta = {
      name: fileEntry.name,
      size: fileEntry.size,
      type: fileEntry.type,
    };
  }

  let cmsSubmitted = false;

  let remoteIp = "";
  let cityState = "";
  let pageUrl = "https://www.dynamicdreamz.com/career-apply-now";
  const pageName = "career-apply-now";

  try {
    const headerList = await headers();
    remoteIp =
      headerList.get("cf-connecting-ip") ||
      headerList.get("x-real-ip") ||
      headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "";
    const city = headerList.get("x-vercel-ip-city") || headerList.get("cf-ipcity") || "";
    const region =
      headerList.get("x-vercel-ip-country-region") || headerList.get("cf-region") || "";
    const rawCountry =
      headerList.get("x-vercel-ip-country") || headerList.get("cf-ipcountry") || "";
    let country = rawCountry;
    if (rawCountry && rawCountry.length === 2) {
      try {
        country = new Intl.DisplayNames(["en"], { type: "region" }).of(rawCountry) || rawCountry;
      } catch {
        // fallback to raw
      }
    }
    cityState = [city, region, country].filter(Boolean).join("-");
    const referer = headerList.get("referer");
    if (referer) {
      pageUrl = referer;
    }
  } catch {
    // Graceful fallback if headers() is unavailable
  }

  // Record submission in Payload CMS form-submissions collection
  try {
    const { getPayload } = await import("payload");
    const config = (await import("@payload-config")).default;
    const cmsPayload = await getPayload({ config });
    const forms = await cmsPayload.find({
      collection: "forms",
      where: { title: { equals: "Career Apply Now" } },
      limit: 1,
    });
    const formId = forms.docs[0]?.id;
    if (formId) {
      const submissionData = [
        { field: "name", value: name },
        { field: "email", value: email },
        { field: "position", value: position },
        { field: "location", value: location },
        { field: "phone", value: phone },
        { field: "experience", value: experience },
        { field: "message", value: message },
        { field: "_remote_ip", value: remoteIp },
        { field: "citystate", value: cityState },
        { field: "pagename", value: pageName },
        { field: "_url", value: pageUrl },
        { field: "utm_source", value: fieldValue(formData, "utm_source") || "N/A" },
        { field: "utm_medium", value: fieldValue(formData, "utm_medium") || "N/A" },
        { field: "utm_campaign", value: fieldValue(formData, "utm_campaign") || "N/A" },
        { field: "utm_term", value: fieldValue(formData, "utm_term") || "N/A" },
        { field: "utm_content", value: fieldValue(formData, "utm_content") || "N/A" },
        { field: "first_source", value: fieldValue(formData, "first_source") || fieldValue(formData, "utm_source") || "N/A" },
        { field: "first_medium", value: fieldValue(formData, "first_medium") || fieldValue(formData, "utm_medium") || "N/A" },
        { field: "landing_page", value: fieldValue(formData, "landing_page") || pageUrl },
        { field: "submission_page", value: fieldValue(formData, "submission_page") || pageUrl },
        { field: "referrer", value: fieldValue(formData, "referrer") || "N/A" },
      ];

      let submissionUploads: Array<{
        field: string;
        value: Array<{ relationTo: "documents"; value: number }>;
      }> | undefined;

      if (fileEntry instanceof File && fileEntry.size > 0) {
        try {
          const buffer = Buffer.from(await fileEntry.arrayBuffer());
          const doc = await cmsPayload.create({
            collection: "documents",
            data: {
              description: `Resume of ${name} for ${position || "Career Application"}`,
            },
            file: {
              data: buffer,
              name: fileEntry.name,
              mimetype: fileEntry.type || "application/octet-stream",
              size: fileEntry.size,
            },
          });
          if (doc?.id) {
            submissionData.push({ field: "resume", value: String(doc.id) });
            submissionUploads = [
              {
                field: "resume",
                value: [{ relationTo: "documents", value: doc.id }],
              },
            ];
          }
        } catch (uploadErr) {
          console.warn("Payload CMS document upload notice:", uploadErr);
          submissionData.push({ field: "resume", value: fileEntry.name });
        }
      }

      await cmsPayload.create({
        collection: "form-submissions",
        data: {
          form: formId,
          submissionData,
          ...(submissionUploads ? { submissionUploads } : {}),
        },
      });
      cmsSubmitted = true;
    }
  } catch (cmsErr) {
    console.warn("Payload CMS career application notice:", cmsErr);
  }

  const webhookUrl =
    process.env.CAREER_FORM_WEBHOOK_URL ?? process.env.CONTACT_FORM_WEBHOOK_URL;

  if (!webhookUrl && !cmsSubmitted) {
    return {
      status: "error",
      message: careerApplyFormCopy.status.unavailable,
    };
  }

  if (webhookUrl) {
    const webhookToken =
      process.env.CAREER_FORM_WEBHOOK_TOKEN ?? process.env.CONTACT_FORM_WEBHOOK_TOKEN;
    const payload = {
      source: "career-apply-now",
      submittedAt: new Date().toISOString(),
      name,
      email,
      position,
      location,
      phone,
      experience,
      message,
      remoteIp,
      cityState,
      pageName,
      pageUrl,
      resumeFile: fileMeta,
      attribution: {
        utmSource: fieldValue(formData, "utm_source") || "N/A",
        utmMedium: fieldValue(formData, "utm_medium") || "N/A",
        utmCampaign: fieldValue(formData, "utm_campaign") || "N/A",
        utmTerm: fieldValue(formData, "utm_term") || "N/A",
        utmContent: fieldValue(formData, "utm_content") || "N/A",
      },
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with ${response.status}`);
      }
    } catch {
      return {
        status: "error",
        message: careerApplyFormCopy.status.unavailable,
      };
    }
  }

  return {
    status: "success",
    message: careerApplyFormCopy.status.success,
  };
}
