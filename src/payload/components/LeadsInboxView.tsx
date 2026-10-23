"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";

export type SubmissionDoc = {
  id: string | number;
  form?: { id: string | number; title?: string } | string | number | null;
  submissionData?: Array<{ id?: string; field: string; value: string }> | null;
  submissionUploads?: Array<{
    field: string;
    value?: Array<{
      relationTo: string;
      value: any;
    }>;
  }> | null;
  createdAt: string;
  updatedAt: string;
};

export type LeadStatus = "new" | "contacted" | "in_progress" | "closed";

export type ParsedLead = {
  id: string | number;
  formId?: string | number;
  formTitle: string;
  createdAt: string;
  updatedAt: string;
  status: LeadStatus;
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  budget: string;
  project: string;
  position?: string;
  location?: string;
  experience?: string;
  rawFields: Array<{ id?: string; field: string; value: string }>;
  uploads: Array<{ field: string; filename: string; url: string }>;
  attribution: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
};

function parseSubmission(doc: SubmissionDoc): ParsedLead {
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
    map["enteryourname"] ||
    "";

  const email = map["email"] || map["email address"] || map["email_address"] || "";
  const phone =
    map["phone"] ||
    map["mobile"] ||
    map["mobile phone"] ||
    map["phone_number"] ||
    map["tel"] ||
    "";
  const company = map["company"] || map["company name"] || map["business name"] || map["company_name"] || "";
  const website = map["website"] || map["websiteurl"] || map["website url"] || map["website_url"] || "";
  const budget = map["budget"] || map["estimated budget"] || map["estimated_budget"] || "";
  const project =
    map["project"] ||
    map["message"] ||
    map["comments"] ||
    map["brief"] ||
    map["inquiry"] ||
    map["notes"] ||
    map["enteryourmessage"] ||
    "";
  const position =
    map["position"] ||
    map["role"] ||
    map["positionappliedfor"] ||
    map["position applied for"] ||
    "";
  const location = map["location"] || "";
  const experience =
    map["experience"] ||
    map["yearsofexp"] ||
    map["years of exp"] ||
    "";

  const statusRaw = (map["status"] || "new").toLowerCase();
  const validStatus: LeadStatus =
    statusRaw === "contacted" || statusRaw === "in_progress" || statusRaw === "closed"
      ? statusRaw
      : "new";

  const formTitle =
    typeof doc.form === "object" && doc.form?.title
      ? doc.form.title
      : typeof doc.form === "string" || typeof doc.form === "number"
      ? `Form #${doc.form}`
      : "Inquiry Form";

  const uploads: Array<{ field: string; filename: string; url: string }> = [];
  if (Array.isArray(doc.submissionUploads)) {
    for (const item of doc.submissionUploads) {
      if (Array.isArray(item.value)) {
        for (const sub of item.value) {
          const val = sub?.value;
          if (val && typeof val === "object") {
            const filename = (val as any).filename || (val as any).name || "Document";
            const url =
              (val as any).url ||
              `https://media.dynamicdreamz.net/files/${sub.relationTo === "documents" ? "documents" : "uploads"}/${encodeURIComponent(filename)}`;
            uploads.push({
              field: item.field,
              filename,
              url,
            });
          }
        }
      }
    }
  }

  return {
    id: doc.id,
    formId: typeof doc.form === "object" ? doc.form?.id : doc.form ?? undefined,
    formTitle,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    status: validStatus,
    name: name || "Anonymous Lead",
    email,
    phone,
    company,
    website,
    budget,
    project,
    position,
    location,
    experience,
    rawFields: submissionData,
    uploads,
    attribution: {
      source: map["utm_source"] || map["source"],
      medium: map["utm_medium"],
      campaign: map["utm_campaign"],
      term: map["utm_term"],
      content: map["utm_content"],
    },
  };
}

const statusLabels: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  in_progress: "In Progress",
  closed: "Closed",
};

export const LeadsInboxView = (props: { data?: { docs?: SubmissionDoc[] } }) => {
  const initialDocs = props.data?.docs || [];
  const [rawDocs, setRawDocs] = useState<SubmissionDoc[]>(initialDocs);
  const [selectedId, setSelectedId] = useState<string | number | null>(
    initialDocs[0]?.id ?? null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedForm, setSelectedForm] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"inbox" | "table">("inbox");
  const [mobileActiveView, setMobileActiveView] = useState<"list" | "detail">("list");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [statusUpdatingId, setStatusUpdatingId] = useState<string | number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [showRawFields, setShowRawFields] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const fetchLeads = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/form-submissions?depth=1&limit=200&sort=-createdAt");
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.docs)) {
          setRawDocs(json.docs);
          if (json.docs.length > 0 && selectedId === null) {
            setSelectedId(json.docs[0].id);
          }
          showToast(`Synced ${json.docs.length} lead${json.docs.length === 1 ? "" : "s"}`);
        }
      }
    } catch (err) {
      console.error("Failed to fetch form submissions:", err);
      showToast("Error refreshing leads");
    } finally {
      setIsRefreshing(false);
    }
  }, [selectedId, showToast]);

  useEffect(() => {
    if (initialDocs.length > 0) return;

    let isMounted = true;
    fetch("/api/form-submissions?depth=1&limit=200&sort=-createdAt")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!isMounted || !json?.docs) return;
        setRawDocs(json.docs);
        if (json.docs.length > 0) {
          setSelectedId(json.docs[0].id);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch form submissions:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [initialDocs.length]);

  const parsedLeads = useMemo(() => {
    return rawDocs.map(parseSubmission);
  }, [rawDocs]);

  // Available forms for tabs
  const formOptions = useMemo(() => {
    const map = new Map<string, number>();
    for (const lead of parsedLeads) {
      const title = lead.formTitle;
      map.set(title, (map.get(title) || 0) + 1);
    }
    return Array.from(map.entries()).map(([title, count]) => ({ title, count }));
  }, [parsedLeads]);

  // Filtered leads
  const filteredLeads = useMemo(() => {
    return parsedLeads.filter((lead) => {
      if (selectedForm !== "all" && lead.formTitle !== selectedForm) {
        return false;
      }
      if (selectedStatus !== "all" && lead.status !== selectedStatus) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const haystack = [
          lead.name,
          lead.email,
          lead.phone,
          lead.company,
          lead.project,
          lead.website,
          lead.budget,
          lead.position || "",
          lead.formTitle,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [parsedLeads, selectedForm, selectedStatus, searchQuery]);

  const selectedLead = useMemo(() => {
    if (!selectedId) return filteredLeads[0] || null;
    return parsedLeads.find((l) => String(l.id) === String(selectedId)) || filteredLeads[0] || null;
  }, [parsedLeads, filteredLeads, selectedId]);

  const handleUpdateStatus = async (leadId: string | number, newStatus: LeadStatus) => {
    setStatusUpdatingId(leadId);
    try {
      const doc = rawDocs.find((d) => String(d.id) === String(leadId));
      if (!doc) return;

      const currentData = Array.isArray(doc.submissionData) ? doc.submissionData : [];
      const filteredData = currentData.filter((i) => i.field.toLowerCase() !== "status");
      const updatedSubmissionData = [...filteredData, { field: "status", value: newStatus }];

      // Optimistic update
      setRawDocs((prev) =>
        prev.map((d) =>
          String(d.id) === String(leadId) ? { ...d, submissionData: updatedSubmissionData } : d,
        ),
      );

      const res = await fetch(`/api/form-submissions/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionData: updatedSubmissionData,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      showToast(`Status updated to ${statusLabels[newStatus]}`);
    } catch (err) {
      console.error("Failed to update status:", err);
      showToast("Failed to update status");
      void fetchLeads();
    } finally {
      setStatusUpdatingId(null);
    }
  };

  const handleDeleteLead = async (leadId: string | number) => {
    if (!window.confirm("Delete this submission?")) {
      return;
    }

    try {
      const res = await fetch(`/api/form-submissions/${leadId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setRawDocs((prev) => prev.filter((d) => String(d.id) !== String(leadId)));
      if (String(selectedId) === String(leadId)) {
        const remaining = filteredLeads.filter((l) => String(l.id) !== String(leadId));
        setSelectedId(remaining[0]?.id ?? null);
      }
      showToast("Submission deleted");
    } catch (err) {
      console.error("Failed to delete submission:", err);
      showToast("Failed to delete submission");
    }
  };

  const handleCopyDetails = (lead: ParsedLead) => {
    const text = [
      `INQUIRY #${lead.id}`,
      `Date: ${new Date(lead.createdAt).toLocaleString()}`,
      `Form: ${lead.formTitle}`,
      `Status: ${lead.status.toUpperCase()}`,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone}`,
      `Company: ${lead.company}`,
      lead.website ? `Website: ${lead.website}` : "",
      lead.budget ? `Budget: ${lead.budget}` : "",
      lead.position ? `Position: ${lead.position}` : "",
      lead.experience ? `Experience: ${lead.experience}` : "",
      `\nMessage:\n${lead.project}`,
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Copied to clipboard"))
      .catch(() => showToast("Failed to copy"));
  };

  const handleExportCsv = () => {
    if (parsedLeads.length === 0) {
      showToast("No leads to export");
      return;
    }

    const headers = [
      "ID",
      "Date",
      "Form",
      "Status",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Website",
      "Budget",
      "Role / Position",
      "Project / Message",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
    ];

    const rows = filteredLeads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleString(),
      l.formTitle,
      l.status.toUpperCase(),
      l.name,
      l.email,
      l.phone,
      l.company,
      l.website,
      l.budget,
      l.position || "",
      l.project.replace(/\r?\n/g, " "),
      l.attribution.source || "",
      l.attribution.medium || "",
      l.attribution.campaign || "",
    ]);

    const escapeCell = (v: unknown) => {
      const s = String(v ?? "").replace(/"/g, '""');
      return `"${s}"`;
    };

    const csv = [
      headers.map(escapeCell).join(","),
      ...rows.map((row) => row.map(escapeCell).join(",")),
    ].join("\r\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Exported ${filteredLeads.length} leads to CSV`);
  };

  const formatRelativeTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMinutes = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffMinutes < 1) return "Just now";
      if (diffMinutes < 60) return `${diffMinutes}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } catch {
      return isoString;
    }
  };

  return (
    <div className="inbox-page-container">
      <style>{`
        /* Responsive Page Container */
        .inbox-page-container {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 120px);
          padding: 12px 14px;
          font-family: var(--font-body, inherit);
          color: var(--theme-text);
        }
        @media (min-width: 640px) {
          .inbox-page-container {
            padding: 16px 20px;
          }
        }
        @media (min-width: 1024px) {
          .inbox-page-container {
            padding: 24px 32px;
          }
        }

        /* Responsive Header Bar */
        .inbox-header-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--theme-elevation-150);
        }
        .inbox-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        @media (max-width: 639px) {
          .inbox-header-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .inbox-header-actions {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .inbox-view-toggle {
            flex: 1;
            display: flex;
          }
          .inbox-view-toggle button {
            flex: 1;
            text-align: center;
          }
        }

        /* Responsive Filter Toolbar */
        .inbox-filter-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
        }
        .inbox-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .inbox-filter-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }
        .inbox-search-container {
          position: relative;
          min-width: 220px;
        }
        @media (max-width: 767px) {
          .inbox-filter-bar {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .inbox-filter-tabs {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            flex-wrap: nowrap;
            padding-bottom: 4px;
            width: 100%;
          }
          .inbox-filter-controls {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .inbox-search-container {
            width: 100%;
            min-width: 0;
          }
          .inbox-search-input {
            width: 100% !important;
          }
        }

        /* Split Grid - Desktop, Tablet, Mobile Master-Detail */
        .inbox-split-grid {
          display: grid;
          grid-template-columns: minmax(320px, 380px) 1fr;
          gap: 16px;
          flex: 1;
          min-height: 560px;
          margin-top: 8px;
        }
        .inbox-list-col {
          background-color: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-150);
          border-radius: var(--style-radius-m, 6px);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          max-height: calc(100vh - 240px);
        }
        .inbox-detail-col {
          background-color: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-150);
          border-radius: var(--style-radius-m, 6px);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          max-height: calc(100vh - 240px);
        }
        .mobile-back-bar {
          display: none;
        }
        .detail-header-row {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--theme-elevation-150);
        }
        .detail-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .detail-quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 14px 0;
        }
        .detail-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          padding: 14px 16px;
          background-color: var(--theme-elevation-100);
          border-radius: var(--style-radius-s, 4px);
          border: 1px solid var(--theme-elevation-150);
          margin-bottom: 18px;
        }

        /* Tablet View (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .inbox-split-grid {
            grid-template-columns: minmax(280px, 320px) 1fr;
            gap: 12px;
          }
          .inbox-detail-col {
            padding: 16px 18px;
          }
        }

        /* Mobile View (< 768px) */
        @media (max-width: 767px) {
          .inbox-split-grid {
            display: flex;
            flex-direction: column;
            gap: 0;
            min-height: 0;
          }
          .inbox-split-grid.mobile-view-list .inbox-detail-col {
            display: none !important;
          }
          .inbox-split-grid.mobile-view-list .inbox-list-col {
            display: flex !important;
            width: 100% !important;
            max-height: none;
            min-height: 480px;
          }
          .inbox-split-grid.mobile-view-detail .inbox-list-col {
            display: none !important;
          }
          .inbox-split-grid.mobile-view-detail .inbox-detail-col {
            display: flex !important;
            width: 100% !important;
            max-height: none;
            padding: 14px 16px;
          }
          .mobile-back-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 14px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--theme-elevation-150);
          }
          .mobile-back-btn {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            font-size: 0.8125rem;
            font-weight: 600;
            background-color: var(--theme-elevation-100);
            color: var(--theme-text);
            border: 1px solid var(--theme-elevation-200);
            border-radius: var(--style-radius-s, 4px);
            cursor: pointer;
          }
          .detail-quick-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .detail-quick-actions a {
            justify-content: center;
            width: 100%;
          }
          .detail-meta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
            padding: 12px !important;
          }
          .detail-header-row {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .detail-header-actions {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
        }
        @media (max-width: 480px) {
          .detail-meta-grid {
            grid-template-columns: 1fr !important;
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

      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            backgroundColor: "var(--theme-elevation-900)",
            color: "var(--theme-elevation-0)",
            padding: "10px 18px",
            borderRadius: "var(--style-radius-s, 4px)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            border: "1px solid var(--theme-elevation-700)",
          }}
        >
          {toast}
        </div>
      )}

      {/* Top Header Bar */}
      <div className="inbox-header-bar">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h1 style={{ fontSize: "1.375rem", fontWeight: 600, margin: 0, color: "var(--theme-text)" }}>
              Leads & Inquiries
            </h1>
            <span
              style={{
                backgroundColor: "var(--theme-elevation-150)",
                color: "var(--theme-elevation-500)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "var(--style-radius-s, 4px)",
              }}
            >
              {parsedLeads.length}
            </span>
          </div>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "0.875rem",
              color: "var(--theme-elevation-500)",
            }}
          >
            Manage and respond to website form submissions
          </p>
        </div>

        {/* Action Controls */}
        <div className="inbox-header-actions">
          {/* View Mode Toggle */}
          <div
            className="inbox-view-toggle"
            style={{
              display: "flex",
              backgroundColor: "var(--theme-elevation-100)",
              padding: "2px",
              borderRadius: "var(--style-radius-s, 4px)",
              border: "1px solid var(--theme-elevation-200)",
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode("inbox")}
              style={{
                padding: "6px 12px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                border: "none",
                borderRadius: "var(--style-radius-s, 3px)",
                cursor: "pointer",
                backgroundColor:
                  viewMode === "inbox" ? "var(--theme-elevation-0)" : "transparent",
                color:
                  viewMode === "inbox"
                    ? "var(--theme-text)"
                    : "var(--theme-elevation-500)",
              }}
            >
              Inbox View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              style={{
                padding: "6px 12px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                border: "none",
                borderRadius: "var(--style-radius-s, 3px)",
                cursor: "pointer",
                backgroundColor:
                  viewMode === "table" ? "var(--theme-elevation-0)" : "transparent",
                color:
                  viewMode === "table"
                    ? "var(--theme-text)"
                    : "var(--theme-elevation-500)",
              }}
            >
              Table View
            </button>
          </div>

          {/* Export to CSV */}
          <button
            type="button"
            onClick={handleExportCsv}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              fontSize: "0.875rem",
              fontWeight: 500,
              backgroundColor: "var(--theme-elevation-100)",
              color: "var(--theme-text)",
              border: "1px solid var(--theme-elevation-200)",
              borderRadius: "var(--style-radius-s, 4px)",
              cursor: "pointer",
            }}
          >
            Export CSV
          </button>

          {/* Refresh Button */}
          <button
            type="button"
            onClick={() => void fetchLeads()}
            disabled={isRefreshing}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "7px 12px",
              fontSize: "0.875rem",
              backgroundColor: "var(--theme-elevation-100)",
              color: "var(--theme-text)",
              border: "1px solid var(--theme-elevation-200)",
              borderRadius: "var(--style-radius-s, 4px)",
              cursor: isRefreshing ? "not-allowed" : "pointer",
              opacity: isRefreshing ? 0.5 : 1,
            }}
            title="Refresh"
          >
            ↻
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="inbox-filter-bar">
        {/* Form Type Tabs */}
        <div className="inbox-filter-tabs">
          <button
            type="button"
            onClick={() => setSelectedForm("all")}
            style={{
              padding: "6px 14px",
              fontSize: "0.8125rem",
              fontWeight: 500,
              borderRadius: "var(--style-radius-s, 4px)",
              border: "1px solid",
              cursor: "pointer",
              borderColor:
                selectedForm === "all"
                  ? "var(--theme-elevation-900)"
                  : "var(--theme-elevation-200)",
              backgroundColor:
                selectedForm === "all"
                  ? "var(--theme-elevation-900)"
                  : "var(--theme-elevation-100)",
              color:
                selectedForm === "all"
                  ? "var(--theme-elevation-0)"
                  : "var(--theme-text)",
            }}
          >
            All ({parsedLeads.length})
          </button>
          {formOptions.map(({ title, count }) => (
            <button
              key={title}
              type="button"
              onClick={() => setSelectedForm(title)}
              style={{
                padding: "6px 14px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                borderRadius: "var(--style-radius-s, 4px)",
                border: "1px solid",
                cursor: "pointer",
                borderColor:
                  selectedForm === title
                    ? "var(--theme-elevation-900)"
                    : "var(--theme-elevation-200)",
                backgroundColor:
                  selectedForm === title
                    ? "var(--theme-elevation-900)"
                    : "var(--theme-elevation-100)",
                color:
                  selectedForm === title
                    ? "var(--theme-elevation-0)"
                    : "var(--theme-text)",
              }}
            >
              {title} ({count})
            </button>
          ))}
        </div>

        {/* Right side: Search & Status Filters */}
        <div className="inbox-filter-controls">
          {/* Status Filter */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--theme-elevation-500)", fontWeight: 500 }}>
              Status:
            </span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                padding: "6px 10px",
                fontSize: "0.8125rem",
                borderRadius: "var(--style-radius-s, 4px)",
                border: "1px solid var(--theme-elevation-200)",
                backgroundColor: "var(--theme-input-bg, var(--theme-elevation-50))",
                color: "var(--theme-text)",
                cursor: "pointer",
              }}
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="inbox-search-container">
            <input
              type="text"
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="inbox-search-input"
              style={{
                width: "100%",
                padding: "7px 28px 7px 12px",
                fontSize: "0.8125rem",
                borderRadius: "var(--style-radius-s, 4px)",
                border: "1px solid var(--theme-elevation-200)",
                backgroundColor: "var(--theme-input-bg, var(--theme-elevation-50))",
                color: "var(--theme-text)",
                outline: "none",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  color: "var(--theme-elevation-500)",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "inbox" ? (
        /* Split Layout Inbox */
        <div
          className={`inbox-split-grid ${
            mobileActiveView === "detail" ? "mobile-view-detail" : "mobile-view-list"
          }`}
        >
          {/* Left Column: List of Leads */}
          <div className="inbox-list-col">
            <div
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid var(--theme-elevation-150)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--theme-elevation-500)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <span>Inquiries ({filteredLeads.length})</span>
              <span>Newest</span>
            </div>

            <div style={{ overflowY: "auto", flex: 1, padding: "8px" }}>
              {filteredLeads.length === 0 ? (
                <div
                  style={{
                    padding: "40px 16px",
                    textAlign: "center",
                    color: "var(--theme-elevation-500)",
                    fontSize: "0.875rem",
                  }}
                >
                  No submissions found
                </div>
              ) : (
                filteredLeads.map((lead) => {
                  const isSelected = selectedLead && String(selectedLead.id) === String(lead.id);

                  return (
                    <div
                      key={lead.id}
                      onClick={() => {
                        setSelectedId(lead.id);
                        setMobileActiveView("detail");
                      }}
                      style={{
                        padding: "13px 15px",
                        marginBottom: "5px",
                        borderRadius: "var(--style-radius-s, 4px)",
                        cursor: "pointer",
                        backgroundColor: isSelected
                          ? "var(--theme-elevation-150)"
                          : "transparent",
                        border: isSelected
                          ? "1px solid var(--theme-elevation-300)"
                          : "1px solid transparent",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: isSelected ? 600 : 500,
                            fontSize: "0.9375rem",
                            color: "var(--theme-text)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "190px",
                          }}
                        >
                          {lead.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--theme-elevation-500)",
                          }}
                        >
                          {formatRelativeTime(lead.createdAt)}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--theme-elevation-500)",
                          marginBottom: "6px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {lead.email || lead.phone || lead.company || "No contact info"}
                      </div>

                      {lead.project && (
                        <div
                          style={{
                            fontSize: "0.8125rem",
                            color: "var(--theme-elevation-800)",
                            marginBottom: "8px",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            lineHeight: "1.45",
                          }}
                        >
                          {lead.project}
                        </div>
                      )}

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.75rem",
                            padding: "2px 8px",
                            borderRadius: "var(--style-radius-s, 3px)",
                            backgroundColor: "var(--theme-elevation-100)",
                            color: "var(--theme-elevation-500)",
                            fontWeight: 500,
                          }}
                        >
                          {lead.formTitle}
                        </span>

                        <span className={`status-pill status-pill--${lead.status}`}>
                          <span className="status-pill-dot" />
                          {statusLabels[lead.status]}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Full Submission Detail Card */}
          <div className="inbox-detail-col">
            {/* Mobile Back Button Bar */}
            <div className="mobile-back-bar">
              <button
                type="button"
                onClick={() => setMobileActiveView("list")}
                className="mobile-back-btn"
              >
                <span>← Back to inquiries ({filteredLeads.length})</span>
              </button>
              {selectedLead && (
                <span style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 500 }}>
                  #{selectedLead.id}
                </span>
              )}
            </div>

            {selectedLead ? (
              <div>
                {/* Header Section */}
                <div className="detail-header-row">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <h2 style={{ fontSize: "1.375rem", fontWeight: 600, margin: 0, color: "var(--theme-text)" }}>
                        {selectedLead.name}
                      </h2>
                      <span
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          padding: "3px 10px",
                          borderRadius: "var(--style-radius-s, 3px)",
                          backgroundColor: "var(--theme-elevation-100)",
                          color: "var(--theme-elevation-500)",
                          border: "1px solid var(--theme-elevation-200)",
                        }}
                      >
                        {selectedLead.formTitle}
                      </span>
                    </div>

                    <div
                      style={{
                        marginTop: "5px",
                        fontSize: "0.8125rem",
                        color: "var(--theme-elevation-500)",
                      }}
                    >
                      {new Date(selectedLead.createdAt).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}{" "}
                      • #{selectedLead.id}
                    </div>
                  </div>

                  {/* Status Dropdown & Action Buttons */}
                  <div className="detail-header-actions">
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span className={`status-pill status-pill--${selectedLead.status}`}>
                        <span className="status-pill-dot" />
                        {statusLabels[selectedLead.status]}
                      </span>
                      <select
                        value={selectedLead.status}
                        onChange={(e) =>
                          void handleUpdateStatus(selectedLead.id, e.target.value as LeadStatus)
                        }
                        disabled={statusUpdatingId === selectedLead.id}
                        style={{
                          padding: "6px 10px",
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          borderRadius: "var(--style-radius-s, 4px)",
                          border: "1px solid var(--theme-elevation-200)",
                          backgroundColor: "var(--theme-input-bg, var(--theme-elevation-50))",
                          color: "var(--theme-text)",
                          cursor: "pointer",
                          outline: "none",
                        }}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Progress</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyDetails(selectedLead)}
                      style={{
                        padding: "6px 12px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        backgroundColor: "var(--theme-elevation-100)",
                        color: "var(--theme-text)",
                        border: "1px solid var(--theme-elevation-200)",
                        borderRadius: "var(--style-radius-s, 4px)",
                        cursor: "pointer",
                      }}
                      title="Copy summary"
                    >
                      Copy
                    </button>

                    <button
                      type="button"
                      onClick={() => void handleDeleteLead(selectedLead.id)}
                      style={{
                        padding: "6px 12px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        backgroundColor: "transparent",
                        color: "var(--theme-error-500, #ef4444)",
                        border: "1px solid var(--theme-elevation-200)",
                        borderRadius: "var(--style-radius-s, 4px)",
                        cursor: "pointer",
                      }}
                      title="Delete submission"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* Quick Action Links */}
                <div className="detail-quick-actions">
                  {selectedLead.email && (
                    <a
                      href={`mailto:${selectedLead.email}?subject=Re: Inquiry with Dynamic Dreamz`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 14px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        backgroundColor: "var(--theme-elevation-900)",
                        color: "var(--theme-elevation-0)",
                        borderRadius: "var(--style-radius-s, 4px)",
                        textDecoration: "none",
                      }}
                    >
                      Send Email ({selectedLead.email})
                    </a>
                  )}

                  {selectedLead.phone && (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 14px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        backgroundColor: "var(--theme-elevation-100)",
                        color: "var(--theme-text)",
                        border: "1px solid var(--theme-elevation-200)",
                        borderRadius: "var(--style-radius-s, 4px)",
                        textDecoration: "none",
                      }}
                    >
                      Call ({selectedLead.phone})
                    </a>
                  )}

                  {selectedLead.website && (
                    <a
                      href={
                        selectedLead.website.startsWith("http")
                          ? selectedLead.website
                          : `https://${selectedLead.website}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "7px 14px",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        backgroundColor: "var(--theme-elevation-100)",
                        color: "var(--theme-text)",
                        border: "1px solid var(--theme-elevation-200)",
                        borderRadius: "var(--style-radius-s, 4px)",
                        textDecoration: "none",
                      }}
                    >
                      Visit Website ↗
                    </a>
                  )}
                </div>

                {/* Submitter Details Grid */}
                <div className="detail-meta-grid">
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Email
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)", wordBreak: "break-all" }}>
                      {selectedLead.email || "—"}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Phone
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)" }}>
                      {selectedLead.phone || "—"}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Company
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)" }}>
                      {selectedLead.company || "—"}
                    </div>
                  </div>

                  {selectedLead.budget && (
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Budget
                      </div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)" }}>
                        {selectedLead.budget}
                      </div>
                    </div>
                  )}

                  {selectedLead.position && (
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Role
                      </div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)" }}>
                        {selectedLead.position}
                      </div>
                    </div>
                  )}

                  {selectedLead.experience && (
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Experience
                      </div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 500, marginTop: "3px", color: "var(--theme-text)" }}>
                        {selectedLead.experience}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project / Message Body */}
                <div style={{ marginBottom: "22px" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--theme-elevation-500)",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Message / Project Brief
                  </div>
                  <div
                    style={{
                      padding: "16px 18px",
                      backgroundColor: "var(--theme-elevation-100)",
                      border: "1px solid var(--theme-elevation-150)",
                      borderRadius: "var(--style-radius-s, 4px)",
                      fontSize: "0.9375rem",
                      lineHeight: "1.6",
                      whiteSpace: "pre-wrap",
                      color: "var(--theme-text)",
                    }}
                  >
                    {selectedLead.project || (
                      <span style={{ color: "var(--theme-elevation-400)", fontStyle: "italic" }}>
                        No written message provided.
                      </span>
                    )}
                  </div>
                </div>

                {/* Attribution (UTM tracking) */}
                {(selectedLead.attribution.source ||
                  selectedLead.attribution.medium ||
                  selectedLead.attribution.campaign) && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: "var(--style-radius-s, 4px)",
                      backgroundColor: "var(--theme-elevation-100)",
                      border: "1px solid var(--theme-elevation-150)",
                      marginBottom: "18px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "var(--theme-elevation-500)",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Attribution
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.8125rem", color: "var(--theme-text)" }}>
                      {selectedLead.attribution.source && (
                        <span>
                          Source: <strong>{selectedLead.attribution.source}</strong>
                        </span>
                      )}
                      {selectedLead.attribution.medium && (
                        <span>
                          Medium: <strong>{selectedLead.attribution.medium}</strong>
                        </span>
                      )}
                      {selectedLead.attribution.campaign && (
                        <span>
                          Campaign: <strong>{selectedLead.attribution.campaign}</strong>
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Attached Documents / Resumes */}
                {selectedLead.uploads && selectedLead.uploads.length > 0 && (
                  <div style={{ marginTop: "16px", borderTop: "1px solid var(--theme-elevation-150)", paddingTop: "14px" }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        color: "var(--theme-elevation-500)",
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      Attachments ({selectedLead.uploads.length})
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {selectedLead.uploads.map((up, idx) => (
                        <a
                          key={idx}
                          href={up.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 12px",
                            backgroundColor: "var(--theme-elevation-100)",
                            border: "1px solid var(--theme-elevation-200)",
                            borderRadius: "var(--style-radius-s, 4px)",
                            color: "var(--theme-text)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                          }}
                        >
                          <span>📎</span>
                          <span style={{ fontWeight: 600 }}>{up.field}:</span>
                          <span style={{ color: "#d92128", textDecoration: "underline" }}>
                            {up.filename}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Raw Fields Expander */}
                <div style={{ marginTop: "16px", borderTop: "1px solid var(--theme-elevation-150)", paddingTop: "14px" }}>
                  <button
                    type="button"
                    onClick={() => setShowRawFields(!showRawFields)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--theme-elevation-500)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>{showRawFields ? "▼" : "▶"}</span>
                    <span>{showRawFields ? "Hide raw submission data" : "View raw submission data"}</span>
                  </button>

                  {showRawFields && (
                    <div
                      style={{
                        marginTop: "10px",
                        backgroundColor: "var(--theme-elevation-100)",
                        padding: "12px 14px",
                        borderRadius: "var(--style-radius-s, 4px)",
                        fontSize: "0.8125rem",
                        fontFamily: "monospace",
                        border: "1px solid var(--theme-elevation-150)",
                      }}
                    >
                      {selectedLead.rawFields.map((f, i) => (
                        <div
                          key={f.id || i}
                          style={{
                            display: "flex",
                            gap: "8px",
                            padding: "4px 0",
                            borderBottom:
                              i < selectedLead.rawFields.length - 1
                                ? "1px solid var(--theme-elevation-150)"
                                : "none",
                          }}
                        >
                          <span style={{ fontWeight: 600, minWidth: "120px", color: "var(--theme-text)" }}>
                            {f.field}:
                          </span>
                          <span style={{ color: "var(--theme-elevation-500)", wordBreak: "break-all" }}>
                            {f.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: "var(--theme-elevation-400)",
                  fontSize: "0.8125rem",
                }}
              >
                Select a lead to view details
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Full Table View Mode */
        <div
          style={{
            backgroundColor: "var(--theme-elevation-50)",
            border: "1px solid var(--theme-elevation-150)",
            borderRadius: "var(--style-radius-m, 6px)",
            overflow: "hidden",
            marginTop: "8px",
          }}
        >
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table
              style={{
                width: "100%",
                minWidth: "780px",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.875rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "var(--theme-elevation-100)",
                    borderBottom: "1px solid var(--theme-elevation-150)",
                    color: "var(--theme-elevation-500)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  <th style={{ padding: "12px 14px" }}>ID</th>
                  <th style={{ padding: "12px 14px" }}>Status</th>
                  <th style={{ padding: "12px 14px" }}>Name</th>
                  <th style={{ padding: "12px 14px" }}>Contact</th>
                  <th style={{ padding: "12px 14px" }}>Company</th>
                  <th style={{ padding: "12px 14px" }}>Form</th>
                  <th style={{ padding: "12px 14px" }}>Message Preview</th>
                  <th style={{ padding: "12px 14px" }}>Date</th>
                  <th style={{ padding: "12px 14px", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      style={{
                        padding: "40px 14px",
                        textAlign: "center",
                        color: "var(--theme-elevation-400)",
                        fontSize: "0.9375rem",
                      }}
                    >
                      No submissions found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    return (
                      <tr
                        key={lead.id}
                        style={{
                          borderBottom: "1px solid var(--theme-elevation-150)",
                        }}
                      >
                        <td style={{ padding: "12px 14px", fontWeight: 600, color: "var(--theme-text)", fontSize: "0.875rem" }}>
                          #{lead.id}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                            <span className={`status-pill status-pill--${lead.status}`}>
                              <span className="status-pill-dot" />
                              {statusLabels[lead.status]}
                            </span>
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                void handleUpdateStatus(lead.id, e.target.value as LeadStatus)
                              }
                              disabled={statusUpdatingId === lead.id}
                              style={{
                                padding: "4px 8px",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                borderRadius: "var(--style-radius-s, 3px)",
                                border: "1px solid var(--theme-elevation-200)",
                                backgroundColor: "var(--theme-input-bg, var(--theme-elevation-50))",
                                color: "var(--theme-text)",
                                cursor: "pointer",
                                outline: "none",
                              }}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_progress">In Progress</option>
                              <option value="closed">Closed</option>
                            </select>
                          </div>
                        </td>
                        <td style={{ padding: "12px 14px", fontWeight: 500, color: "var(--theme-text)", fontSize: "0.9375rem" }}>
                          {lead.name}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <div style={{ fontSize: "0.875rem", color: "var(--theme-text)" }}>
                            {lead.email || "—"}
                          </div>
                          {lead.phone && (
                            <div style={{ fontSize: "0.75rem", color: "var(--theme-elevation-500)", marginTop: "2px" }}>
                              {lead.phone}
                            </div>
                          )}
                        </td>
                        <td style={{ padding: "12px 14px", color: "var(--theme-text)", fontSize: "0.875rem" }}>
                          {lead.company || "—"}
                        </td>
                        <td style={{ padding: "12px 14px" }}>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              padding: "3px 8px",
                              borderRadius: "var(--style-radius-s, 3px)",
                              backgroundColor: "var(--theme-elevation-100)",
                              color: "var(--theme-elevation-500)",
                              fontWeight: 500,
                            }}
                          >
                            {lead.formTitle}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "12px 14px",
                            maxWidth: "240px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "var(--theme-elevation-500)",
                            fontSize: "0.8125rem",
                          }}
                        >
                          {lead.project || "—"}
                        </td>
                        <td style={{ padding: "12px 14px", whiteSpace: "nowrap", fontSize: "0.8125rem", color: "var(--theme-elevation-500)" }}>
                          {new Date(lead.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </td>
                        <td style={{ padding: "12px 14px", textAlign: "right", whiteSpace: "nowrap" }}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedId(lead.id);
                              setViewMode("inbox");
                            }}
                            style={{
                              padding: "6px 12px",
                              fontSize: "0.8125rem",
                              fontWeight: 500,
                              borderRadius: "var(--style-radius-s, 3px)",
                              backgroundColor: "var(--theme-elevation-100)",
                              border: "1px solid var(--theme-elevation-200)",
                              color: "var(--theme-text)",
                              cursor: "pointer",
                              marginRight: "6px",
                            }}
                          >
                            View
                          </button>
                          <button
                            type="button"
                            onClick={() => void handleDeleteLead(lead.id)}
                            style={{
                              padding: "6px 12px",
                              fontSize: "0.8125rem",
                              fontWeight: 500,
                              borderRadius: "var(--style-radius-s, 3px)",
                              backgroundColor: "transparent",
                              color: "var(--theme-error-500, #ef4444)",
                              border: "1px solid var(--theme-elevation-200)",
                              cursor: "pointer",
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
