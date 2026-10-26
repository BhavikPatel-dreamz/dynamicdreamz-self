"use server";

import { headers } from "next/headers";
import { quoteFormCopy } from "@/content/forms";

export type QuoteFormState = {
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

export async function submitQuoteForm(
  _previousState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  // Quietly accept bots that complete the visually hidden field without forwarding their data.
  if (fieldValue(formData, "website")) {
    return {
      status: "success",
      message: quoteFormCopy.status.success,
    };
  }

  const name = fieldValue(formData, "name");
  const email = fieldValue(formData, "email");
  const phone = fieldValue(formData, "phone");
  const company = fieldValue(formData, "company");
  const websiteUrl = fieldValue(formData, "websiteUrl");
  const budget = fieldValue(formData, "budget");
  const project = fieldValue(formData, "project", MAX_PROJECT_LENGTH);

  if (!name || !email) {
    return {
      status: "error",
      message: quoteFormCopy.status.missingIdentity,
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: quoteFormCopy.status.invalidEmail,
    };
  }

  let cmsSubmitted = false;

  let remoteIp = "";
  let cityState = "";
  let pageUrl = "https://www.dynamicdreamz.com/request-quote";
  const pageName = "request-quote";

  let refererHeader = "";

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
      refererHeader = referer;
      pageUrl = referer;
    }
  } catch {
    // Graceful fallback if headers() is unavailable
  }

  const utmSource = fieldValue(formData, "utm_source") || "N/A";
  const utmMedium = fieldValue(formData, "utm_medium") || "N/A";
  const utmCampaign = fieldValue(formData, "utm_campaign") || "N/A";
  const utmTerm = fieldValue(formData, "utm_term") || "N/A";
  const utmContent = fieldValue(formData, "utm_content") || "N/A";
  const firstSource = fieldValue(formData, "first_source") || "N/A";
  const firstMedium = fieldValue(formData, "first_medium") || "N/A";
  const referrer =
    fieldValue(formData, "referrer") ||
    (refererHeader && !refererHeader.includes("request-quote") ? refererHeader : "N/A");
  const landingPage =
    fieldValue(formData, "landing_page") ||
    (refererHeader && !refererHeader.includes("request-quote") ? refererHeader : "N/A");
  const submissionPage = fieldValue(formData, "submission_page") || pageUrl;

  // Record submission in Payload CMS form-submissions collection
  try {
    const { getPayload } = await import("payload");
    const config = (await import("@payload-config")).default;
    const cmsPayload = await getPayload({ config });
    const forms = await cmsPayload.find({
      collection: "forms",
      where: { title: { equals: "Request a Quote" } },
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
            { field: "websiteUrl", value: websiteUrl },
            { field: "budget", value: budget },
            { field: "project", value: project },
            { field: "_remote_ip", value: remoteIp },
            { field: "citystate", value: cityState },
            { field: "pagename", value: pageName },
            { field: "_url", value: pageUrl },
            { field: "utm_source", value: utmSource },
            { field: "utm_medium", value: utmMedium },
            { field: "utm_campaign", value: utmCampaign },
            { field: "utm_term", value: utmTerm },
            { field: "utm_content", value: utmContent },
            { field: "first_source", value: firstSource },
            { field: "first_medium", value: firstMedium },
            { field: "referrer", value: referrer },
            { field: "landing_page", value: landingPage },
            { field: "submission_page", value: submissionPage },
          ],
        },
      });
      cmsSubmitted = true;
    }
  } catch (cmsErr) {
    console.warn("Payload CMS quote submission notice:", cmsErr);
  }

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;

  if (!webhookUrl && !cmsSubmitted) {
    return {
      status: "error",
      message: quoteFormCopy.status.unavailable,
    };
  }

  if (webhookUrl) {
    const webhookToken = process.env.CONTACT_FORM_WEBHOOK_TOKEN;
    const payload = {
      source: "request-quote",
      submittedAt: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      websiteUrl,
      budget,
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
          message: quoteFormCopy.status.unavailable,
        };
      }
    }
  }

  return {
    status: "success",
    message: quoteFormCopy.status.success,
  };
}
