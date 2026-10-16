"use server";

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

  const name = fieldValue(formData, "EnterYourName");
  const email = fieldValue(formData, "email");
  const position = fieldValue(formData, "PositionAppliedFor");
  const location = fieldValue(formData, "Location");
  const phone = fieldValue(formData, "tel");
  const experience = fieldValue(formData, "YearsofExp");
  const message = fieldValue(formData, "EnterYourMessage", MAX_MESSAGE_LENGTH);

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

  const fileEntry = formData.get("File");
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

  const webhookUrl =
    process.env.CAREER_FORM_WEBHOOK_URL ?? process.env.CONTACT_FORM_WEBHOOK_URL;

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
      resumeFile: fileMeta,
      attribution: {
        utmSource: fieldValue(formData, "utm_source"),
        utmMedium: fieldValue(formData, "utm_medium"),
        utmCampaign: fieldValue(formData, "utm_campaign"),
        utmTerm: fieldValue(formData, "utm_term"),
        utmContent: fieldValue(formData, "utm_content"),
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
