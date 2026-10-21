import React from "react";
import Link from "next/link";
import type { Payload } from "payload";

type SubmissionDoc = {
  id: string | number;
  form?: { id: string | number; title?: string } | string | number | null;
  submissionData?: Array<{ id?: string; field: string; value: string }> | null;
  createdAt: string;
  updatedAt: string;
};

function extractLeadDetails(doc: SubmissionDoc) {
  const submissionData = Array.isArray(doc.submissionData) ? doc.submissionData : [];
  const map: Record<string, string> = {};

  for (const item of submissionData) {
    if (item && item.field) {
      map[item.field.trim().toLowerCase()] = String(item.value ?? "").trim();
    }
  }

  const name =
    map["name"] ||
    map["fullname"] ||
    map["full name"] ||
    map["full_name"] ||
    map["applicant_name"] ||
    map["first_name"] ||
    "";

  const email = map["email"] || map["email address"] || "";
  const company = map["company"] || map["company name"] || map["business name"] || "";
  const status = (map["status"] || "new").toLowerCase();

  const formTitle =
    typeof doc.form === "object" && doc.form?.title
      ? doc.form.title
      : typeof doc.form === "string" || typeof doc.form === "number"
        ? `Form #${doc.form}`
        : "Inquiry Form";

  return {
    id: doc.id,
    name: name || "Anonymous Lead",
    email,
    company,
    status: ["new", "contacted", "in_progress", "closed"].includes(status) ? status : "new",
    formTitle,
    createdAt: doc.createdAt,
  };
}

async function getDashboardData(p: Payload) {
  const res = await p.find({
    collection: "form-submissions",
    depth: 1,
    limit: 100,
    sort: "-createdAt",
  });

  const docs = res.docs as unknown as SubmissionDoc[];
  const parsed = docs.map(extractLeadDetails);

  const newCount = parsed.filter((l) => l.status === "new").length;

  const now = Date.now();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const thisWeekCount = parsed.filter(
    (l) => new Date(l.createdAt).getTime() >= oneWeekAgo,
  ).length;

  const formCounts: Record<string, number> = {};
  for (const l of parsed) {
    formCounts[l.formTitle] = (formCounts[l.formTitle] || 0) + 1;
  }
  const topFormEntry = Object.entries(formCounts).sort((a, b) => b[1] - a[1])[0];
  const topFormName = topFormEntry ? topFormEntry[0] : "None yet";
  const topFormCount = topFormEntry ? topFormEntry[1] : 0;

  return {
    totalDocs: res.totalDocs,
    newCount,
    thisWeekCount,
    topFormName,
    topFormCount,
    recentLeads: parsed.slice(0, 3),
  };
}

export const DashboardLeadsWidget = async ({ payload }: { payload?: Payload }) => {
  let p = payload;

  if (!p) {
    try {
      const { getPayload } = await import("payload");
      const config = (await import("@payload-config")).default;
      p = await getPayload({ config });
    } catch (err) {
      console.error("DashboardLeadsWidget failed to resolve payload instance:", err);
      return null;
    }
  }

  let data;
  try {
    data = await getDashboardData(p);
  } catch (err) {
    console.error("DashboardLeadsWidget failed to query form submissions:", err);
    return null;
  }

  const {
    totalDocs,
    newCount,
    thisWeekCount,
    topFormName,
    topFormCount,
    recentLeads,
  } = data;

  const formatStatus = (st: string) => {
    switch (st) {
      case "contacted":
        return "Contacted";
      case "in_progress":
        return "In Progress";
      case "closed":
        return "Closed";
      case "new":
      default:
        return "New";
    }
  };

  return (
    <div className="leads-widget">
      <style>{`
        .leads-widget {
          margin-bottom: 24px;
          padding: 20px 24px;
          border-radius: var(--style-radius-m, 6px);
          background-color: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-150);
          color: var(--theme-text);
          font-family: var(--font-body, inherit);
        }
        .leads-widget-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--theme-elevation-150);
        }
        .leads-widget-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          background-color: var(--theme-elevation-900);
          color: var(--theme-elevation-0);
          border-radius: var(--style-radius-s, 4px);
          text-decoration: none;
          border: none;
        }
        .leads-widget-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }
        .leads-widget-recent-item {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 14px;
        }
        .leads-widget-recent-badges {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Mobile Responsive Adjustments (< 640px) */
        @media (max-width: 639px) {
          .leads-widget {
            padding: 14px 16px;
          }
          .leads-widget-header {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .leads-widget-btn {
            justify-content: center;
            width: 100%;
            padding: 8px 14px;
          }
          .leads-widget-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .leads-widget-recent-item {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .leads-widget-recent-badges {
            width: 100%;
            justify-content: space-between;
          }
        }
        @media (max-width: 360px) {
          .leads-widget-stats {
            grid-template-columns: 1fr;
          }
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 9px;
          border-radius: var(--style-radius-s, 3px);
          font-size: 0.75rem;
          font-weight: 600;
          line-height: 1.3;
          text-transform: capitalize;
          white-space: nowrap;
          border-width: 1px;
          border-style: solid;
        }
        .status-pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .status-pill--new {
          background-color: var(--theme-warning-150, #fef3c7);
          color: var(--theme-warning-800, #92400e);
          border-color: var(--theme-warning-250, #fde68a);
        }
        .status-pill--new .status-pill-dot {
          background-color: var(--theme-warning-500, #f59e0b);
        }
        .status-pill--contacted {
          background-color: var(--theme-success-150, #dbeafe);
          color: var(--theme-success-800, #1e40af);
          border-color: var(--theme-success-250, #bfdbfe);
        }
        .status-pill--contacted .status-pill-dot {
          background-color: var(--theme-success-500, #3b82f6);
        }
        .status-pill--in_progress {
          background-color: rgba(147, 51, 234, 0.1);
          color: #7e22ce;
          border-color: rgba(147, 51, 234, 0.22);
        }
        .status-pill--in_progress .status-pill-dot {
          background-color: #9333ea;
        }
        [data-theme='dark'] .status-pill--in_progress {
          background-color: rgba(168, 85, 247, 0.16);
          color: #c084fc;
          border-color: rgba(168, 85, 247, 0.3);
        }
        [data-theme='dark'] .status-pill--in_progress .status-pill-dot {
          background-color: #c084fc;
        }
        .status-pill--closed {
          background-color: rgba(34, 197, 94, 0.1);
          color: #15803d;
          border-color: rgba(34, 197, 94, 0.22);
        }
        .status-pill--closed .status-pill-dot {
          background-color: #22c55e;
        }
        [data-theme='dark'] .status-pill--closed {
          background-color: rgba(34, 197, 94, 0.16);
          color: #4ade80;
          border-color: rgba(34, 197, 94, 0.3);
        }
        [data-theme='dark'] .status-pill--closed .status-pill-dot {
          background-color: #4ade80;
        }
      `}</style>

      {/* Header bar */}
      <div className="leads-widget-header">
        <div>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              margin: 0,
              color: "var(--theme-text)",
              lineHeight: 1.3,
            }}
          >
            Leads & Inquiries
          </h2>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "0.875rem",
              color: "var(--theme-elevation-500)",
            }}
          >
            Summary of website form submissions
          </p>
        </div>

        <Link
          href="/admin/collections/form-submissions"
          className="leads-widget-btn"
        >
          <span>Open Leads Inbox</span>
        </Link>
      </div>

      {/* Stats Counter Cards Grid */}
      <div
        className="leads-widget-stats"
        style={{
          marginBottom: recentLeads.length > 0 ? "16px" : "0",
        }}
      >
        {/* Total Card */}
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "var(--style-radius-s, 4px)",
            backgroundColor: "var(--theme-elevation-100)",
            border: "1px solid var(--theme-elevation-150)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--theme-elevation-500)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Total Submissions
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginTop: "4px",
              color: "var(--theme-text)",
              lineHeight: 1.1,
            }}
          >
            {totalDocs}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--theme-elevation-500)",
              marginTop: "4px",
            }}
          >
            All-time entries
          </div>
        </div>

        {/* New Leads Card */}
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "var(--style-radius-s, 4px)",
            backgroundColor: "var(--theme-elevation-100)",
            border: "1px solid var(--theme-elevation-150)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--theme-elevation-500)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            New Leads
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginTop: "4px",
              color: "var(--theme-text)",
              lineHeight: 1.1,
            }}
          >
            {newCount}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--theme-elevation-500)",
              marginTop: "4px",
            }}
          >
            Pending review
          </div>
        </div>

        {/* This Week Card */}
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "var(--style-radius-s, 4px)",
            backgroundColor: "var(--theme-elevation-100)",
            border: "1px solid var(--theme-elevation-150)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--theme-elevation-500)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Last 7 Days
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              marginTop: "4px",
              color: "var(--theme-text)",
              lineHeight: 1.1,
            }}
          >
            {thisWeekCount}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--theme-elevation-500)",
              marginTop: "4px",
            }}
          >
            Recent velocity
          </div>
        </div>

        {/* Primary Form Card */}
        <div
          style={{
            padding: "16px 18px",
            borderRadius: "var(--style-radius-s, 4px)",
            backgroundColor: "var(--theme-elevation-100)",
            border: "1px solid var(--theme-elevation-150)",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--theme-elevation-500)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Primary Form
          </div>
          <div
            style={{
              fontSize: "1.0625rem",
              fontWeight: 600,
              marginTop: "8px",
              color: "var(--theme-text)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            title={topFormName}
          >
            {topFormName}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--theme-elevation-500)",
              marginTop: "4px",
            }}
          >
            {topFormCount} submission{topFormCount === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      {/* Recent submissions snippet */}
      {recentLeads.length > 0 && (
        <div
          style={{
            backgroundColor: "var(--theme-elevation-100)",
            borderRadius: "var(--style-radius-s, 4px)",
            border: "1px solid var(--theme-elevation-150)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "10px 16px",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--theme-elevation-500)",
              borderBottom: "1px solid var(--theme-elevation-150)",
            }}
          >
            Latest Submissions
          </div>

          <div>
            {recentLeads.map((lead, idx) => {
              return (
                <div
                  key={lead.id}
                  className="leads-widget-recent-item"
                  style={{
                    borderBottom:
                      idx < recentLeads.length - 1
                        ? "1px solid var(--theme-elevation-150)"
                        : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "var(--theme-elevation-200)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        fontSize: "0.8125rem",
                        color: "var(--theme-text)",
                        flexShrink: 0,
                      }}
                    >
                      {lead.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.9375rem",
                          fontWeight: 600,
                          color: "var(--theme-text)",
                        }}
                      >
                        {lead.name}
                        {lead.company ? ` • ${lead.company}` : ""}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--theme-elevation-500)",
                          wordBreak: "break-all",
                          marginTop: "1px",
                        }}
                      >
                        {lead.email}
                      </div>
                    </div>
                  </div>

                  <div className="leads-widget-recent-badges">
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 8px",
                        borderRadius: "var(--style-radius-s, 3px)",
                        backgroundColor: "var(--theme-elevation-150)",
                        color: "var(--theme-text)",
                        fontWeight: 500,
                      }}
                    >
                      {lead.formTitle}
                    </span>

                    <span className={`status-pill status-pill--${lead.status}`}>
                      <span className="status-pill-dot" />
                      {formatStatus(lead.status)}
                    </span>

                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--theme-elevation-500)",
                        minWidth: "65px",
                        textAlign: "right",
                      }}
                    >
                      {new Date(lead.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
