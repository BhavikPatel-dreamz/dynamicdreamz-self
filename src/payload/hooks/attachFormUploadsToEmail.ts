import fs from "node:fs";
import path from "node:path";
import type { FormattedEmail } from "@payloadcms/plugin-form-builder/types";
import type { PayloadRequest } from "payload";
import { resolveServerAttribution } from "@/lib/attribution";

export type EmailAttachment = {
  filename: string;
  content?: string | Buffer;
  path?: string;
  contentType?: string;
};

export type FormattedEmailWithAttachments = FormattedEmail & {
  attachments?: EmailAttachment[];
};

interface FormSubmissionLike {
  id?: number | string;
  form?: number | string | { id: number | string; title?: string };
  submissionData?: Array<{ field: string; value: unknown }> | null;
  submissionUploads?: Array<{
    field: string;
    value: Array<{
      relationTo: string;
      value: number | string | Record<string, unknown>;
    }>;
  }> | null;
}

const MAX_ATTACHMENT_BYTES = 12 * 1024 * 1024; // 12MB raw limit (stays within Resend's 40MB total payload cap)

function formatBytes(bytes?: number | null): string {
  if (!bytes || isNaN(bytes)) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanEmptyParagraphs(html: string): string {
  if (!html) return html;
  return html.replace(/<p>\s*(?:&nbsp;)*\s*<\/p>/gi, "");
}

function cleanRemainingSystemTags(
  html: string,
  submissionData: Array<{ field: string; value: unknown }> | null | undefined,
  req: PayloadRequest,
): string {
  const getVal = (name: string) => {
    const item = submissionData?.find((s) => s.field === name);
    return item && typeof item.value === "string" ? item.value : "";
  };

  const headerIp =
    getVal("_remote_ip") ||
    req.headers?.get?.("cf-connecting-ip") ||
    req.headers?.get?.("x-forwarded-for")?.split(",")?.[0]?.trim() ||
    req.headers?.get?.("x-real-ip") ||
    (req as any).ip ||
    "127.0.0.1";

  const city =
    req.headers?.get?.("x-vercel-ip-city") ||
    req.headers?.get?.("cf-ipcity") ||
    "";
  const region =
    req.headers?.get?.("x-vercel-ip-country-region") ||
    req.headers?.get?.("cf-region") ||
    "";
  const rawCountry =
    req.headers?.get?.("x-vercel-ip-country") ||
    req.headers?.get?.("cf-ipcountry") ||
    "";
  let country = rawCountry;
  if (rawCountry && rawCountry.length === 2) {
    try {
      country = new Intl.DisplayNames(["en"], { type: "region" }).of(rawCountry) || rawCountry;
    } catch {}
  }
  const cityState =
    getVal("citystate") ||
    [city, region, country].filter(Boolean).join("-") ||
    "";

  const referer =
    getVal("_url") ||
    req.headers?.get?.("referer") ||
    "https://www.dynamicdreamz.com";

  const defaultPageName = referer.includes("quote")
    ? "Request a Quote"
    : referer.includes("career")
      ? "Career Apply Now"
      : "Dynamic Dreamz";

  const pageName = getVal("pagename") || defaultPageName;

  const attr = resolveServerAttribution((name) => getVal(name), {
    fallbackLandingPage: "",
    fallbackSubmissionPage: referer || "",
  });

  let cleaned = html
    .replace(/(?:\{\{_remote_ip\}\}|_remote_ip)/g, escapeHtml(headerIp))
    .replace(/(?:\{\{citystate\}\}|citystate)/g, escapeHtml(cityState))
    .replace(/(?:\{\{pagename\}\}|pagename)/g, escapeHtml(pageName))
    .replace(/(?:\{\{_url\}\}|_url)/g, escapeHtml(referer))
    .replace(/(?:\{\{utm_source\}\}|utm_source)/g, escapeHtml(attr.utm_source))
    .replace(/(?:\{\{utm_medium\}\}|utm_medium)/g, escapeHtml(attr.utm_medium))
    .replace(/(?:\{\{utm_campaign\}\}|utm_campaign)/g, escapeHtml(getVal("utm_campaign")))
    .replace(/(?:\{\{utm_term\}\}|utm_term)/g, escapeHtml(getVal("utm_term")))
    .replace(/(?:\{\{utm_content\}\}|utm_content)/g, escapeHtml(getVal("utm_content")))
    .replace(/(?:\{\{first_source\}\}|first_source)/g, escapeHtml(attr.first_source))
    .replace(/(?:\{\{first_medium\}\}|first_medium)/g, escapeHtml(attr.first_medium))
    .replace(/(?:\{\{referrer\}\}|referrer)/g, escapeHtml(attr.referrer))
    .replace(/(?:\{\{landing_page\}\}|landing_page)/g, escapeHtml(attr.landing_page))
    .replace(/(?:\{\{submission_page\}\}|submission_page)/g, escapeHtml(attr.submission_page));

  // WP CF7 "Exclude a line from output if all of its mail-tags are blank"
  // Removes empty paragraphs or paragraphs that only have a label like "City : " or "Phone   :  "
  cleaned = cleaned.replace(/<p>\s*[^<>\n:]+\s*:\s*<\/p>/gi, "");
  cleaned = cleaned.replace(/<p>\s*<strong>[^<>\n:]+\s*:\s*<\/strong>\s*<\/p>/gi, "");

  // Format Quote autoresponder paragraphs if present to match WP CF7 inline styling
  if (cleaned.includes("Details Submited:")) {
    cleaned = cleaned
      .replace(/<p>Hello /g, '<p style="margin:0;">Hello ')
      .replace(/<p>We have received /g, '<p style="margin:10px 0;">We have received ')
      .replace(/<p><strong>Details Submited:<\/strong><\/p>/g, '<p style="margin:0 0 10px 0;"><strong>Details Submited:</strong></p>')
      .replace(/<p><strong>Name:<\/strong>/g, '<p style="margin:0;"><strong>Name:</strong>')
      .replace(/<p><strong>Email:<\/strong>/g, '<p style="margin:0;"><strong>Email:</strong>')
      .replace(/<p><strong>Mobile Phone:<\/strong>/g, '<p style="margin:0;"><strong>Mobile Phone:</strong>')
      .replace(/<p><strong>Company Name:<\/strong>/g, '<p style="margin:0;"><strong>Company Name:</strong>')
      .replace(/<p><strong>Website URL:<\/strong>/g, '<p style="margin:0;"><strong>Website URL:</strong>')
      .replace(/<p><strong>Budget:<\/strong>/g, '<p style="margin:0;"><strong>Budget:</strong>')
      .replace(/<p><strong>Brief about the project:<\/strong>/g, '<p style="margin:0 0 10px 0;"><strong>Brief about the project:</strong>')
      .replace(/<p>Talk to you soon,<\/p>/g, '<p style="margin:0;">Talk to you soon,</p>')
      .replace(/<p><strong>Dynamic Dreamz<\/strong><\/p>/g, '<p style="margin:0;"><strong>Dynamic Dreamz</strong></p>');
  }

  return cleaned;
}

function applyEmailTypography(html: string): string {
  if (!html) return html;
  if (!html.includes('data-styled-wrapper="true"')) {
    return `<div data-styled-wrapper="true" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #1e293b;">${html}</div>`;
  }
  return html;
}

/**
 * Splits a comma-separated recipient string without breaking quoted display names.
 */
function splitEmailAddressList(raw: string): string[] {
  const parts: string[] = [];
  let current = "";
  let inQuotes = false;
  let angleDepth = 0;

  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    if (ch === '"' && raw[i - 1] !== "\\") {
      inQuotes = !inQuotes;
      current += ch;
    } else if (!inQuotes && ch === "<") {
      angleDepth += 1;
      current += ch;
    } else if (!inQuotes && ch === ">" && angleDepth > 0) {
      angleDepth -= 1;
      current += ch;
    } else if (!inQuotes && angleDepth === 0 && ch === ",") {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = "";
    } else {
      current += ch;
    }
  }

  const last = current.trim();
  if (last) parts.push(last);
  return parts;
}

/**
 * Resend rejects comma-separated recipient strings and empty strings on optional fields;
 * normalize to a single string, a string[], or `[]` when empty.
 */
function normalizeRecipientField(value: unknown, useEmptyArrayWhenBlank: boolean): string | string[] {
  const list: string[] = [];

  if (typeof value === "string") {
    list.push(...splitEmailAddressList(value));
  } else if (Array.isArray(value)) {
    for (const item of value) {
      if (typeof item === "string") {
        list.push(...splitEmailAddressList(item));
      } else if (item && typeof item === "object" && "address" in item && typeof item.address === "string") {
        const trimmed = item.address.trim();
        if (trimmed) list.push(trimmed);
      }
    }
  }

  if (list.length === 0) {
    return useEmptyArrayWhenBlank ? [] : "";
  }
  return list.length === 1 ? list[0] : list;
}

function extractEmailDomain(address: string): string {
  const atIdx = address.lastIndexOf("@");
  return atIdx >= 0 ? address.slice(atIdx + 1).trim().toLowerCase() : "";
}

/**
 * Formats RFC 5322 sender strings (e.g. `Name<a@b.com>` or unquoted commas in display names)
 * and aligns unverified sender domains with `defaultFromAddress` when testing on another domain.
 */
function normalizeFromAddress(from?: string, defaultFromAddress?: string): string {
  const fallbackAddress = (defaultFromAddress || "").trim();
  const trimmed = (from || "").trim();
  if (!trimmed) return "";

  const match = trimmed.match(/^(.*?)<([^<>@\s]+@[^<>@\s]+)>$/);
  const rawName = match ? match[1].trim() : "";
  let address = match ? match[2].trim() : trimmed;

  if (
    fallbackAddress &&
    fallbackAddress.includes("@") &&
    process.env.EMAIL_ALLOW_CUSTOM_FROM_DOMAINS !== "true"
  ) {
    const fromDomain = extractEmailDomain(address);
    const defaultDomain = extractEmailDomain(fallbackAddress);
    if (fromDomain && defaultDomain && fromDomain !== defaultDomain) {
      address = fallbackAddress;
    }
  }

  if (!rawName) return address;

  const unquoted =
    rawName.startsWith('"') && rawName.endsWith('"') && rawName.length >= 2
      ? rawName.slice(1, -1)
      : rawName;

  const needsQuotes = /[",;<>()[\]\\:@]/.test(unquoted);
  const formattedName = needsQuotes
    ? `"${unquoted.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
    : unquoted;

  return `${formattedName} <${address}>`;
}

/**
 * `@payloadcms/email-resend` serializes payloads with `JSON.stringify`, so raw `Buffer`
 * attachment contents must be encoded as base64 strings beforehand.
 */
function normalizeAttachmentForResend(attachment: EmailAttachment): EmailAttachment {
  if (Buffer.isBuffer(attachment.content)) {
    return {
      ...attachment,
      content: attachment.content.toString("base64"),
    };
  }
  return attachment;
}

function finalizeEmailForDelivery(
  email: FormattedEmail,
  submissionData: Array<{ field: string; value: unknown }> | null | undefined,
  req: PayloadRequest,
  attachmentBoxHtml?: string,
  extraAttachments?: EmailAttachment[],
): FormattedEmail {
  let html = cleanRemainingSystemTags(
    cleanEmptyParagraphs(email.html || ""),
    submissionData,
    req,
  );

  if (attachmentBoxHtml) {
    if (html.includes("</div>")) {
      const lastDivIndex = html.lastIndexOf("</div>");
      html = html.slice(0, lastDivIndex) + attachmentBoxHtml + html.slice(lastDivIndex);
    } else {
      html += attachmentBoxHtml;
    }
  }

  const existingAttachments = (((email as any).attachments || []) as EmailAttachment[]).map(
    normalizeAttachmentForResend,
  );
  const combinedAttachments = extraAttachments
    ? [...existingAttachments, ...extraAttachments.map(normalizeAttachmentForResend)]
    : existingAttachments;

  const defaultFromAddress = req?.payload?.email?.defaultFromAddress;

  return {
    ...email,
    from: normalizeFromAddress(email.from, defaultFromAddress),
    to: normalizeRecipientField(email.to, false) as string,
    cc: normalizeRecipientField(email.cc, true) as string,
    bcc: normalizeRecipientField(email.bcc, true) as string,
    replyTo: normalizeRecipientField(email.replyTo, true) as string,
    html: applyEmailTypography(html),
    ...(combinedAttachments.length > 0 ? { attachments: combinedAttachments } : {}),
  } as FormattedEmail;
}

/**
 * Production-ready hook for @payloadcms/plugin-form-builder beforeEmail.
 *
 * Normalizes form email headers/recipients for Resend, cleans system template tags,
 * and attaches form submission uploads (e.g. CVs, resumes, documents) as base64
 * attachments while embedding clickable fallback download links in the HTML body.
 */
export const attachFormUploadsToEmail = async (
  emails: FormattedEmail[],
  afterChangeParams: {
    doc?: FormSubmissionLike;
    data?: FormSubmissionLike;
    req: PayloadRequest;
    operation?: string;
  },
): Promise<FormattedEmail[]> => {
  if (!emails || emails.length === 0) {
    return emails;
  }

  const { req } = afterChangeParams;
  const doc = afterChangeParams.doc || afterChangeParams.data;
  if (!doc) {
    return emails;
  }

  try {
    // 0. Fetch form doc to check admin per-email attachment settings
    const formId =
      typeof doc.form === "object" && doc.form !== null && "id" in doc.form
        ? (doc.form as any).id
        : doc.form;

    let formDoc: any = typeof doc.form === "object" ? doc.form : null;
    if (!formDoc && formId) {
      try {
        formDoc = await req.payload.findByID({
          collection: "forms",
          id: formId,
          req,
          depth: 0,
        });
      } catch {
        // ignore form fetch error
      }
    }

    // 1. Collect all upload references from submissionUploads and fallback submissionData
    type UploadRef = {
      relationTo: string;
      id: number | string;
      docObj?: Record<string, unknown>;
    };

    const uploadRefs: UploadRef[] = [];
    const seenIds = new Set<string>();

    if (Array.isArray(doc.submissionUploads)) {
      for (const entry of doc.submissionUploads) {
        if (!entry || !entry.value) continue;
        const items = Array.isArray(entry.value) ? entry.value : [entry.value];
        for (const item of items) {
          if (!item) continue;
          const rel = item.relationTo || "documents";
          const rawVal = item.value;
          if (typeof rawVal === "object" && rawVal !== null && "id" in rawVal) {
            const idKey = `${rel}:${(rawVal as any).id}`;
            if (!seenIds.has(idKey)) {
              seenIds.add(idKey);
              uploadRefs.push({
                relationTo: rel,
                id: (rawVal as any).id,
                docObj: rawVal as Record<string, unknown>,
              });
            }
          } else if (typeof rawVal === "number" || typeof rawVal === "string") {
            const idKey = `${rel}:${rawVal}`;
            if (!seenIds.has(idKey)) {
              seenIds.add(idKey);
              uploadRefs.push({
                relationTo: rel,
                id: rawVal,
              });
            }
          }
        }
      }
    }

    // Secondary fallback: check submissionData for uploaded file IDs
    if (uploadRefs.length === 0 && Array.isArray(doc.submissionData)) {
      for (const item of doc.submissionData) {
        if (!item || !item.value) continue;
        const fieldName = (item.field || "").toLowerCase();
        const isUploadField =
          fieldName.includes("resume") ||
          fieldName.includes("cv") ||
          fieldName.includes("file") ||
          fieldName.includes("document") ||
          fieldName.includes("upload") ||
          fieldName.includes("attachment");

        if (isUploadField && typeof item.value === "string") {
          const parts = item.value.split(",").map((s) => s.trim());
          for (const part of parts) {
            if (/^\d+$/.test(part)) {
              const idKey = `documents:${part}`;
              if (!seenIds.has(idKey)) {
                seenIds.add(idKey);
                uploadRefs.push({
                  relationTo: "documents",
                  id: Number(part),
                });
              }
            }
          }
        }
      }
    }

    if (uploadRefs.length === 0) {
      return emails.map((email) =>
        finalizeEmailForDelivery(email, doc?.submissionData, req),
      );
    }

    // 2. Resolve document records and build attachments
    const mediaBaseURL = (
      process.env.MEDIA_SERVER_URL || "https://media.dynamicdreamz.net"
    ).replace(/\/+$/, "");

    type ResolvedFile = {
      filename: string;
      url: string;
      sizeText: string;
      mimeType: string;
      attachment?: EmailAttachment;
    };

    const resolvedFiles: ResolvedFile[] = [];

    for (const ref of uploadRefs) {
      try {
        let docData: any = ref.docObj;
        if (!docData || !docData.filename) {
          docData = await req.payload.findByID({
            collection: (ref.relationTo as any) || "documents",
            id: ref.id,
            req,
            depth: 0,
          });
        }

        if (!docData || !docData.filename) {
          continue;
        }

        const filename: string = docData.filename;
        const mimeType: string = docData.mimeType || "application/octet-stream";
        const filesize: number | null = docData.filesize || null;

        // Resolve absolute public URL for direct downloading
        let publicUrl: string = docData.url || "";
        if (publicUrl && !publicUrl.startsWith("http://") && !publicUrl.startsWith("https://")) {
          publicUrl = `${mediaBaseURL}${publicUrl.startsWith("/") ? "" : "/"}${publicUrl}`;
        } else if (!publicUrl) {
          const prefix = ref.relationTo === "media" ? "uploads" : "documents";
          publicUrl = `${mediaBaseURL}/files/${prefix}/${encodeURIComponent(filename)}`;
        }

        // Try reading file buffer (Local disk first, then remote fetch)
        let fileBuffer: Buffer | null = null;

        const candidateLocalPaths = [
          path.resolve(process.cwd(), "public", ref.relationTo, filename),
          path.resolve(process.cwd(), "public/documents", filename),
          path.resolve(process.cwd(), "public/uploads", filename),
        ];

        for (const localPath of candidateLocalPaths) {
          if (fs.existsSync(localPath)) {
            try {
              fileBuffer = await fs.promises.readFile(localPath);
              break;
            } catch {
              // ignore and try next source
            }
          }
        }

        if (!fileBuffer && publicUrl && (publicUrl.startsWith("http://") || publicUrl.startsWith("https://"))) {
          try {
            const res = await fetch(publicUrl, {
              headers: process.env.MEDIA_SERVER_API_KEY
                ? { Authorization: `Bearer ${process.env.MEDIA_SERVER_API_KEY}` }
                : undefined,
              signal: AbortSignal.timeout(8000),
            });
            if (res.ok) {
              const arrayBuf = await res.arrayBuffer();
              fileBuffer = Buffer.from(arrayBuf);
            }
          } catch (fetchErr) {
            req.payload.logger.warn({
              err: fetchErr,
              msg: `[attachFormUploadsToEmail] Could not fetch buffer for ${filename} from ${publicUrl}`,
            });
          }
        }

        let attachment: EmailAttachment | undefined;

        if (fileBuffer) {
          if (fileBuffer.byteLength <= MAX_ATTACHMENT_BYTES) {
            attachment = {
              filename,
              content: fileBuffer.toString("base64"),
              contentType: mimeType,
            };
          } else {
            req.payload.logger.info(
              `[attachFormUploadsToEmail] File ${filename} (${(fileBuffer.byteLength / 1024 / 1024).toFixed(1)}MB) exceeds ${MAX_ATTACHMENT_BYTES / 1024 / 1024}MB email limit. Download link provided in email body instead.`,
            );
          }
        } else if (publicUrl) {
          attachment = {
            filename,
            path: publicUrl,
            contentType: mimeType,
          };
        }

        resolvedFiles.push({
          filename,
          url: publicUrl,
          sizeText: formatBytes(filesize || fileBuffer?.byteLength),
          mimeType,
          attachment,
        });
      } catch (itemErr) {
        req.payload.logger.warn({
          err: itemErr,
          msg: `[attachFormUploadsToEmail] Failed to process upload ref: ${JSON.stringify(ref)}`,
        });
      }
    }

    if (resolvedFiles.length === 0) {
      return emails.map((email) =>
        finalizeEmailForDelivery(email, doc?.submissionData, req),
      );
    }

    // 3. Build email HTML section with clean clickable download links
    const fileItemsHtml = resolvedFiles
      .map(
        (f) =>
          `<li style="margin-bottom: 6px;">` +
          `<a href="${escapeHtml(f.url)}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 500;">` +
          `${escapeHtml(f.filename)}` +
          `</a>` +
          (f.sizeText ? ` <span style="color: #64748b; font-size: 12px;">(${escapeHtml(f.sizeText)})</span>` : "") +
          `</li>`,
      )
      .join("");

    const attachmentBoxHtml =
      `<div style="margin-top: 24px; padding: 14px 18px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">` +
      `<p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #0f172a; text-transform: uppercase; letter-spacing: 0.04em;">` +
      `Uploaded Attachment${resolvedFiles.length > 1 ? "s" : ""} (${resolvedFiles.length}):` +
      `</p>` +
      `<ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #334155;">` +
      fileItemsHtml +
      `</ul>` +
      `</div>`;

    const physicalAttachments = resolvedFiles
      .map((f) => f.attachment)
      .filter((a): a is EmailAttachment => Boolean(a));

    // 4. Attach to emails where attachUploads is enabled (respects admin toggle)
    return emails.map((email, idx) => {
      let emailConfig = formDoc?.emails?.[idx];
      if (!emailConfig && Array.isArray(formDoc?.emails)) {
        const rawTo = typeof email.to === "string" ? email.to.trim() : "";
        emailConfig = formDoc.emails.find(
          (e: any) => e?.emailTo && rawTo && e.emailTo.trim() === rawTo,
        );
      }

      // Respect the admin toggle: defaults to true if unset or newly created
      const isAttachEnabled = emailConfig ? emailConfig.attachUploads !== false : true;

      if (!isAttachEnabled) {
        return finalizeEmailForDelivery(email, doc?.submissionData, req);
      }

      return finalizeEmailForDelivery(
        email,
        doc?.submissionData,
        req,
        attachmentBoxHtml,
        physicalAttachments,
      );
    });
  } catch (err) {
    req.payload.logger.error({
      err,
      msg: "[attachFormUploadsToEmail] Unexpected error in beforeEmail hook",
    });
    return emails;
  }
};
