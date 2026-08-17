"use server";

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
      message: "Thank you. Your inquiry has been received.",
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
      message: "Please provide your name and a valid email address.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please provide a valid email address.",
    };
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      status: "error",
      message: "We couldn't send your inquiry right now. Please use the sales email above.",
    };
  }

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
    return {
      status: "error",
      message: "We couldn't send your inquiry right now. Please use the sales email above.",
    };
  }

  return {
    status: "success",
    message: "Thank you. Your inquiry has been received.",
  };
}
