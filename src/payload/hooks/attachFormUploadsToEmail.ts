import fs from "node:fs";
import path from "node:path";
import type { FormattedEmail } from "@payloadcms/plugin-form-builder/types";
import type { PayloadRequest } from "payload";

export type EmailAttachment = {
  filename: string;
  content?: Buffer;
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

const MAX_ATTACHMENT_BYTES = 12 * 1024 * 1024; // 12MB limit for safe SMTP delivery

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
  const country =
    req.headers?.get?.("x-vercel-ip-country") ||
    req.headers?.get?.("cf-ipcountry") ||
    "";
  const cityState =
    getVal("citystate") ||
    [city, region, country].filter(Boolean).join(", ") ||
    "N/A";

  const referer =
    getVal("_url") ||
    req.headers?.get?.("referer") ||
    "https://www.dynamicdreamz.com/career-apply-now";

  const pageName = getVal("pagename") || "Career Apply Now";

  return html
    .replace(/(?:\{\{_remote_ip\}\}|_remote_ip)/g, escapeHtml(headerIp))
    .replace(/(?:\{\{citystate\}\}|citystate)/g, escapeHtml(cityState))
    .replace(/(?:\{\{pagename\}\}|pagename)/g, escapeHtml(pageName))
    .replace(/(?:\{\{_url\}\}|_url)/g, escapeHtml(referer));
}

function applyEmailTypography(html: string): string {
  if (!html) return html;
  if (!html.includes('data-styled-wrapper="true"')) {
    return `<div data-styled-wrapper="true" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #1e293b;">${html}</div>`;
  }
  return html;
}

/**
 * Production-ready hook for @payloadcms/plugin-form-builder beforeEmail.
 *
 * Inspects form submission uploads (e.g. CVs, resumes, documents), fetches or reads the file
 * buffer, and attaches them directly to outgoing emails via Nodemailer while embedding a fallback
 * download link in the HTML body.
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
      return emails.map((email) => ({
        ...email,
        html: applyEmailTypography(
          cleanRemainingSystemTags(cleanEmptyParagraphs(email.html || ""), doc?.submissionData, req),
        ),
      }));
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
              content: fileBuffer,
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
      return emails;
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
        emailConfig = formDoc.emails.find(
          (e: any) => e?.emailTo && email.to && e.emailTo.trim() === email.to.trim(),
        );
      }

      // Respect the admin toggle: defaults to true if unset or newly created
      const isAttachEnabled = emailConfig ? emailConfig.attachUploads !== false : true;

      // If admin disabled attachments for this email, leave email untouched except typography & system tag cleanup
      if (!isAttachEnabled) {
        return {
          ...email,
          html: applyEmailTypography(
            cleanRemainingSystemTags(cleanEmptyParagraphs(email.html || ""), doc?.submissionData, req),
          ),
        };
      }

      const existingAttachments = ((email as any).attachments || []) as EmailAttachment[];
      const combinedAttachments = [...existingAttachments, ...physicalAttachments];

      let updatedHtml = cleanRemainingSystemTags(cleanEmptyParagraphs(email.html || ""), doc?.submissionData, req);
      if (updatedHtml.includes("</div>")) {
        // Insert right before the last closing </div> for cleaner document hierarchy
        const lastDivIndex = updatedHtml.lastIndexOf("</div>");
        updatedHtml =
          updatedHtml.slice(0, lastDivIndex) +
          attachmentBoxHtml +
          updatedHtml.slice(lastDivIndex);
      } else {
        updatedHtml += attachmentBoxHtml;
      }

      return {
        ...email,
        html: applyEmailTypography(updatedHtml),
        attachments: combinedAttachments,
      } as unknown as FormattedEmail;
    });
  } catch (err) {
    req.payload.logger.error({
      err,
      msg: "[attachFormUploadsToEmail] Unexpected error in beforeEmail hook",
    });
    return emails;
  }
};
