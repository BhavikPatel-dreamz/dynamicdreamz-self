"use server";

import { contactFormCopy } from "@/content/forms";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const MAX_FIELD_LENGTH = 400;
const MAX_PROJECT_LENGTH = 2000;
const WEBHOOK_TIMEOUT_MS = 10_000;

function fieldValue(formData: FormData, name: string, maxLength = MAX_FIELD_LENGTH) {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Quietly accept bots that complete the visually hidden field without forwarding their data.
  if (fieldValue(formData, "website")) {
    return {
      status: "success",
      message: contactFormCopy.status.success,
    };
  }

  const name = fieldValue(formData, "name");
  const email = fieldValue(formData, "email");
  const phone = fieldValue(formData, "phone");
  const company = fieldValue(formData, "company");
  const project = fieldValue(formData, "project", MAX_PROJECT_LENGTH);

  if (!name || !email) {
    return {
      status: "error",
      message: contactFormCopy.status.missingIdentity,
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: contactFormCopy.status.invalidEmail,
    };
  }

  let cmsSubmitted = false;

  // Record submission in Payload CMS form-submissions collection
  try {
    const { getPayload } = await import("payload");
    const config = (await import("@payload-config")).default;
    const cmsPayload = await getPayload({ config });
    const forms = await cmsPayload.find({
      collection: "forms",
      where: { title: { equals: "Contact Us" } },
      limit: 1,
    });
    const formId = forms.docs[0]?.id;
    if (formId) {
      await cmsPayload.create({
        collection: "form-submissions",
        data: {
          form: formId,
          submissionData: [
            { field: "name", value: name },
            { field: "email", value: email },
            { field: "phone", value: phone },
            { field: "company", value: company },
            { field: "project", value: project },
            { field: "utm_source", value: fieldValue(formData, "utm_source") },
            { field: "utm_medium", value: fieldValue(formData, "utm_medium") },
            { field: "utm_campaign", value: fieldValue(formData, "utm_campaign") },
            { field: "utm_term", value: fieldValue(formData, "utm_term") },
            { field: "utm_content", value: fieldValue(formData, "utm_content") },
          ],
        },
      });
      cmsSubmitted = true;
    }
  } catch (cmsErr) {
    console.warn("Payload CMS contact submission notice:", cmsErr);
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (!webhookUrl && !cmsSubmitted) {
    return {
      status: "error",
      message: contactFormCopy.status.unavailable,
    };
  }

  if (webhookUrl) {
    const webhookToken = process.env.CONTACT_FORM_WEBHOOK_TOKEN;
    const payload = {
      source: "contact-us",
      submittedAt: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      project,
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
      if (!cmsSubmitted) {
        return {
          status: "error",
          message: contactFormCopy.status.unavailable,
        };
      }
    }
  }

  return {
    status: "success",
    message: contactFormCopy.status.success,
  };
}
