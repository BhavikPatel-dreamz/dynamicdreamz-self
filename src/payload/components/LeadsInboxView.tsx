"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

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
  isSeen: boolean;
  seenAt?: string;
  isStarred: boolean;
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

/* ======================================================== */
/* CLEAN SVG ICONS                                          */
/* ======================================================== */

function IconMail({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconMailOpen({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function IconStar({ size = 15, filled = false, className = "" }: { size?: number; filled?: boolean; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke={filled ? "#f59e0b" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconPaperclip({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function IconCopy({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function IconTrash({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

function IconX({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function IconRefresh({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}

function IconCheck({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconChevronLeft({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function IconChevronDown({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function IconChevronsLeft({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </svg>
  );
}

function IconChevronsRight({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  );
}

function IconPhone({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconGlobe({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function IconExternalLink({ size = 13, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function IconDownload({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function IconInbox({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

/* ======================================================== */
/* LEAD PARSER                                              */
/* ======================================================== */

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
  const company =
    map["company"] ||
    map["company name"] ||
    map["business name"] ||
    map["company_name"] ||
    "";
  const website =
    map["website"] || map["websiteurl"] || map["website url"] || map["website_url"] || "";
  const budget =
    map["budget"] || map["estimated budget"] || map["estimated_budget"] || "";
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

  // Seen / Read tracking
  const isSeen =
    map["is_seen"] === "true" ||
    map["seen"] === "true" ||
    map["is_read"] === "true" ||
    map["read"] === "true";

  const seenAt = map["seen_at"] || map["read_at"] || undefined;

  // Starred / Priority tracking
  const isStarred =
    map["is_starred"] === "true" ||
    map["starred"] === "true" ||
    map["favorite"] === "true";

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
              `https://media.dynamicdreamz.net/files/${
                sub.relationTo === "documents" ? "documents" : "uploads"
              }/${encodeURIComponent(filename)}`;
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
    isSeen,
    seenAt,
    isStarred,
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

// Generates dual light/dark palettes for initials avatars
function getAvatarPalette(name: string) {
  const palettes = [
    { lightBg: "#fee2e2", lightText: "#b91c1c", darkBg: "rgba(239, 68, 68, 0.22)", darkText: "#fca5a5" },
    { lightBg: "#ffedd5", lightText: "#c2410c", darkBg: "rgba(249, 115, 22, 0.22)", darkText: "#fdba74" },
    { lightBg: "#fef3c7", lightText: "#b45309", darkBg: "rgba(245, 158, 11, 0.22)", darkText: "#fcd34d" },
    { lightBg: "#ecfccb", lightText: "#4d7c0f", darkBg: "rgba(132, 204, 22, 0.22)", darkText: "#bef264" },
    { lightBg: "#dcfce7", lightText: "#15803d", darkBg: "rgba(34, 197, 94, 0.22)", darkText: "#86efac" },
    { lightBg: "#e0e7ff", lightText: "#4338ca", darkBg: "rgba(99, 102, 241, 0.22)", darkText: "#a5b4fc" },
    { lightBg: "#ede9fe", lightText: "#6d28d9", darkBg: "rgba(168, 85, 247, 0.22)", darkText: "#d8b4fe" },
    { lightBg: "#fae8ff", lightText: "#a21caf", darkBg: "rgba(217, 70, 239, 0.22)", darkText: "#f0abfc" },
    { lightBg: "#fce7f3", lightText: "#be185d", darkBg: "rgba(236, 72, 153, 0.22)", darkText: "#f9a8d4" },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % palettes.length;
  return palettes[index] || {
    lightBg: "#e0e7ff",
    lightText: "#4338ca",
    darkBg: "rgba(99, 102, 241, 0.22)",
    darkText: "#a5b4fc",
  };
}

function getInitials(name: string): string {
  if (!name || name === "Anonymous Lead") return "DD";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2 && parts[0] && parts[1]) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

type FilterTab = "all" | "unread" | "starred";

export const LeadsInboxView = (props: { data?: { docs?: SubmissionDoc[] } }) => {
  const initialDocs = props.data?.docs || [];
  const [rawDocs, setRawDocs] = useState<SubmissionDoc[]>(initialDocs);

  // Active Lead ID currently open in the Centered Dialog Box (null = dialog closed)
  const [activeModalLeadId, setActiveModalLeadId] = useState<string | number | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedForm, setSelectedForm] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [showRawFields, setShowRawFields] = useState(false);

  // Pagination State
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(25);

  // Multi-Selection State for Table Rows
  const [selectedLeadIds, setSelectedLeadIds] = useState<Set<string | number>>(new Set());

  // Ref tracking IDs currently undergoing seen updates to avoid duplicate calls
  const markingSeenRef = useRef<Set<string | number>>(new Set());

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  }, []);

  const fetchLeads = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/form-submissions?depth=1&limit=500&sort=-createdAt");
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json.docs)) {
          setRawDocs(json.docs);
          showToast(`Synced ${json.docs.length} lead${json.docs.length === 1 ? "" : "s"}`);
        }
      }
    } catch (err) {
      console.error("Failed to fetch form submissions:", err);
      showToast("Error refreshing leads");
    } finally {
      setIsRefreshing(false);
    }
  }, [showToast]);

  useEffect(() => {
    if (initialDocs.length > 0) return;

    let isMounted = true;
    fetch("/api/form-submissions?depth=1&limit=500&sort=-createdAt")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!isMounted || !json?.docs) return;
        setRawDocs(json.docs);
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

  // Overall counts for tabs
  const unreadCount = useMemo(() => {
    return parsedLeads.filter((l) => !l.isSeen).length;
  }, [parsedLeads]);

  const starredCount = useMemo(() => {
    return parsedLeads.filter((l) => l.isStarred).length;
  }, [parsedLeads]);

  // Available unique form titles
  const formOptions = useMemo(() => {
    const set = new Set<string>();
    for (const lead of parsedLeads) {
      set.add(lead.formTitle);
    }
    return Array.from(set).sort();
  }, [parsedLeads]);

  // Filtered leads based on tab, form, status, and search query
  const filteredLeads = useMemo(() => {
    return parsedLeads.filter((lead) => {
      // Tab filter
      if (activeTab === "unread" && lead.isSeen) {
        return false;
      }
      if (activeTab === "starred" && !lead.isStarred) {
        return false;
      }

      // Form filter
      if (selectedForm !== "all" && lead.formTitle !== selectedForm) {
        return false;
      }

      // Pipeline status filter
      if (selectedStatus !== "all" && lead.status !== selectedStatus) {
        return false;
      }

      // Search query filter
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
  }, [parsedLeads, activeTab, selectedForm, selectedStatus, searchQuery]);

  // Reset page to 1 whenever filters change without cascading render in effect
  const filterKey = `${activeTab}|${selectedForm}|${selectedStatus}|${searchQuery}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);
  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setPage(1);
  }

  // Pagination calculation
  const totalLeads = filteredLeads.length;
  const totalPages = Math.max(1, Math.ceil(totalLeads / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalLeads);
  const paginatedLeads = useMemo(() => {
    return filteredLeads.slice(startIndex, endIndex);
  }, [filteredLeads, startIndex, endIndex]);

  // Active Lead currently shown in the Dialog Box
  const activeModalLead = useMemo(() => {
    if (!activeModalLeadId) return null;
    return parsedLeads.find((l) => String(l.id) === String(activeModalLeadId)) || null;
  }, [parsedLeads, activeModalLeadId]);

  // Position of active lead in the filtered list (for Previous / Next dialog navigation)
  const currentModalIndex = useMemo(() => {
    if (!activeModalLeadId) return -1;
    return filteredLeads.findIndex((l) => String(l.id) === String(activeModalLeadId));
  }, [filteredLeads, activeModalLeadId]);

  const hasPrevModalLead = currentModalIndex > 0;
  const hasNextModalLead =
    currentModalIndex >= 0 && currentModalIndex < filteredLeads.length - 1;

  const handlePrevModalLead = useCallback(() => {
    if (hasPrevModalLead) {
      setActiveModalLeadId(filteredLeads[currentModalIndex - 1].id);
    }
  }, [hasPrevModalLead, filteredLeads, currentModalIndex]);

  const handleNextModalLead = useCallback(() => {
    if (hasNextModalLead) {
      setActiveModalLeadId(filteredLeads[currentModalIndex + 1].id);
    }
  }, [hasNextModalLead, filteredLeads, currentModalIndex]);

  // Lead update helper that merges changes into submissionData and patches Payload
  const updateSubmissionFields = useCallback(
    async (
      leadId: string | number,
      fieldUpdates: Array<{ field: string; value: string }>,
      successMsg?: string,
    ) => {
      const doc = rawDocs.find((d) => String(d.id) === String(leadId));
      if (!doc) return;

      const currentData = Array.isArray(doc.submissionData) ? doc.submissionData : [];
      const updateFieldNames = new Set(fieldUpdates.map((u) => u.field.toLowerCase()));

      const filteredData = currentData.filter(
        (i) => !updateFieldNames.has(i.field.toLowerCase()),
      );
      const updatedSubmissionData = [...filteredData, ...fieldUpdates];

      // Optimistic local state update
      setRawDocs((prev) =>
        prev.map((d) =>
          String(d.id) === String(leadId) ? { ...d, submissionData: updatedSubmissionData } : d,
        ),
      );

      try {
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

        if (successMsg) {
          showToast(successMsg);
        }
      } catch (err) {
        console.error("Failed to update submission field:", err);
        showToast("Error updating submission");
        void fetchLeads();
      }
    },
    [rawDocs, showToast, fetchLeads],
  );

  // Toggle Seen / Unseen (Read / Unread)
  const handleToggleSeen = useCallback(
    async (leadId: string | number, targetSeen?: boolean) => {
      const lead = parsedLeads.find((l) => String(l.id) === String(leadId));
      if (!lead) return;

      const newSeenState = typeof targetSeen === "boolean" ? targetSeen : !lead.isSeen;

      const fieldUpdates = [
        { field: "is_seen", value: newSeenState ? "true" : "false" },
        ...(newSeenState ? [{ field: "seen_at", value: new Date().toISOString() }] : []),
      ];

      await updateSubmissionFields(
        leadId,
        fieldUpdates,
        newSeenState ? "Marked as read" : "Marked as unread",
      );
    },
    [parsedLeads, updateSubmissionFields],
  );

  // Toggle Starred (Priority Bookmark)
  const handleToggleStarred = useCallback(
    async (leadId: string | number, targetStarred?: boolean) => {
      const lead = parsedLeads.find((l) => String(l.id) === String(leadId));
      if (!lead) return;

      const newStarredState =
        typeof targetStarred === "boolean" ? targetStarred : !lead.isStarred;

      const fieldUpdates = [
        { field: "is_starred", value: newStarredState ? "true" : "false" },
      ];

      await updateSubmissionFields(
        leadId,
        fieldUpdates,
        newStarredState ? "Starred lead" : "Unstarred lead",
      );
    },
    [parsedLeads, updateSubmissionFields],
  );

  // Update lead pipeline status
  const handleUpdateStatus = useCallback(
    async (leadId: string | number, newStatus: LeadStatus) => {
      await updateSubmissionFields(
        leadId,
        [{ field: "status", value: newStatus }],
        `Status set to ${statusLabels[newStatus]}`,
      );
    },
    [updateSubmissionFields],
  );

  // Automatic "Seen" Functionality: When a lead is opened in the centered dialog, auto-mark it as seen
  useEffect(() => {
    if (!activeModalLead) return;
    if (activeModalLead.isSeen) return;

    const leadId = activeModalLead.id;
    if (markingSeenRef.current.has(leadId)) return;

    markingSeenRef.current.add(leadId);

    const timer = setTimeout(() => {
      void handleToggleSeen(leadId, true).finally(() => {
        markingSeenRef.current.delete(leadId);
      });
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [activeModalLead, handleToggleSeen]);

  // Bulk operations
  const handleToggleSelectAllCurrentPage = () => {
    const pageIds = paginatedLeads.map((l) => l.id);
    const allSelected = pageIds.every((id) => selectedLeadIds.has(id));

    setSelectedLeadIds((prev) => {
      const next = new Set(prev);
      if (allSelected) {
        pageIds.forEach((id) => next.delete(id));
      } else {
        pageIds.forEach((id) => next.add(id));
      }
      return next;
    });
  };

  const handleSelectLeadRow = (leadId: string | number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLeadIds((prev) => {
      const next = new Set(prev);
      if (next.has(leadId)) {
        next.delete(leadId);
      } else {
        next.add(leadId);
      }
      return next;
    });
  };

  const handleBulkMarkSeen = async (seen: boolean) => {
    if (selectedLeadIds.size === 0) return;
    const ids = Array.from(selectedLeadIds);
    showToast(`Marking ${ids.length} as ${seen ? "read" : "unread"}...`);

    for (const id of ids) {
      await handleToggleSeen(id, seen);
    }
    setSelectedLeadIds(new Set());
    showToast(`Updated ${ids.length} inquiries`);
  };

  const handleBulkDelete = async () => {
    if (selectedLeadIds.size === 0) return;
    if (!window.confirm(`Delete ${selectedLeadIds.size} selected submissions?`)) return;

    const ids = Array.from(selectedLeadIds);
    try {
      for (const id of ids) {
        await fetch(`/api/form-submissions/${id}`, { method: "DELETE" });
      }
      setRawDocs((prev) => prev.filter((d) => !selectedLeadIds.has(d.id)));
      if (activeModalLeadId && selectedLeadIds.has(activeModalLeadId)) {
        setActiveModalLeadId(null);
      }
      setSelectedLeadIds(new Set());
      showToast(`Deleted ${ids.length} submissions`);
    } catch (err) {
      console.error("Bulk delete failed:", err);
      showToast("Error during bulk delete");
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
      if (String(activeModalLeadId) === String(leadId)) {
        setActiveModalLeadId(null);
      }
      showToast("Submission deleted");
    } catch (err) {
      console.error("Failed to delete submission:", err);
      showToast("Failed to delete submission");
    }
  };

  // Keyboard navigation: Escape closes dialog; Left/Right/Up/Down/J/K cycles submissions while dialog is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (activeTag === "input" || activeTag === "textarea" || activeTag === "select") {
        return;
      }

      if (activeModalLeadId !== null) {
        if (e.key === "Escape") {
          e.preventDefault();
          setActiveModalLeadId(null);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "k" || e.key === "K") {
          e.preventDefault();
          handlePrevModalLead();
        } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "j" || e.key === "J") {
          e.preventDefault();
          handleNextModalLead();
        } else if (e.key === "u" || e.key === "U") {
          if (activeModalLead) {
            e.preventDefault();
            void handleToggleSeen(activeModalLead.id, !activeModalLead.isSeen);
          }
        } else if (e.key === "s" || e.key === "S") {
          if (activeModalLead) {
            e.preventDefault();
            void handleToggleStarred(activeModalLead.id, !activeModalLead.isStarred);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    activeModalLeadId,
    activeModalLead,
    handlePrevModalLead,
    handleNextModalLead,
    handleToggleSeen,
    handleToggleStarred,
  ]);

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

  const handleExportCsv = (leadsToExport = filteredLeads) => {
    if (leadsToExport.length === 0) {
      showToast("No leads to export");
      return;
    }

    const headers = [
      "ID",
      "Date",
      "Form",
      "Status",
      "Seen",
      "Starred",
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

    const rows = leadsToExport.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleString(),
      l.formTitle,
      l.status.toUpperCase(),
      l.isSeen ? "YES" : "NO",
      l.isStarred ? "YES" : "NO",
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
    showToast(`Exported ${leadsToExport.length} leads to CSV`);
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
      if (diffMinutes < 60) return `${diffMinutes}m`;
      if (diffHours < 24) return `${diffHours}h`;
      if (diffDays === 1) return "Yesterday";
      if (diffDays < 7) return `${diffDays}d`;
      return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    } catch {
      return isoString;
    }
  };

  // Avatar palette for the active modal lead
  const modalAvatarPalette = useMemo(() => {
    return activeModalLead
      ? getAvatarPalette(activeModalLead.name)
      : { lightBg: "#e0e7ff", lightText: "#4338ca", darkBg: "rgba(99, 102, 241, 0.22)", darkText: "#a5b4fc" };
  }, [activeModalLead]);

  return (
    <div className="table-inbox-root">
      <style>{`
        /* Root Container - Minimal Spacing, Clean Alignment */
        .table-inbox-root {
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 100px);
          padding: 10px 14px;
          font-family: var(--font-body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          color: var(--theme-text);
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .table-inbox-root {
            padding: 14px 20px;
          }
        }

        /* Top Header */
        .inbox-top-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--theme-elevation-150);
        }

        /* Filter Controls Bar */
        .inbox-controls-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 0;
        }
        .inbox-tab-group {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .tab-btn {
          padding: 6px 12px;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: var(--style-radius-s, 4px);
          border: 1px solid var(--theme-elevation-200);
          background-color: var(--theme-elevation-100);
          color: var(--theme-text);
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }
        .tab-btn:hover {
          background-color: var(--theme-elevation-150);
        }
        .tab-btn.active {
          background-color: var(--theme-elevation-900);
          color: var(--theme-elevation-0);
          border-color: var(--theme-elevation-900);
          font-weight: 600;
        }
        [data-theme='dark'] .tab-btn.active {
          background-color: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
        }
        .tab-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 10px;
          background-color: var(--theme-elevation-200);
          color: var(--theme-elevation-800);
        }
        .tab-btn.active .tab-badge {
          background-color: rgba(255, 255, 255, 0.25);
          color: #ffffff;
        }
        .tab-badge.unread {
          background-color: #2563eb !important;
          color: #ffffff !important;
        }

        /* Dropdowns & Search */
        .inbox-secondary-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .inbox-select,
        .inbox-search-input {
          padding: 6px 10px;
          font-size: 0.875rem;
          border-radius: var(--style-radius-s, 4px);
          border: 1px solid var(--theme-elevation-200);
          background-color: var(--theme-elevation-100);
          color: var(--theme-text);
          outline: none;
        }
        .inbox-select {
          cursor: pointer;
        }
        .inbox-select option {
          background-color: var(--theme-elevation-100);
          color: var(--theme-text);
        }
        [data-theme='dark'] .inbox-select option {
          background-color: #18191c;
          color: #f4f4f5;
        }

        /* Table Card Container */
        .inbox-table-card {
          background-color: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-150);
          border-radius: var(--style-radius-m, 6px);
          overflow: hidden;
          margin-top: 6px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        [data-theme='dark'] .inbox-table-card {
          border-color: var(--theme-elevation-200);
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }

        /* Table Structure - High Density & Bigger Readable Typography */
        .submissions-table {
          width: 100%;
          min-width: 960px;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.875rem;
        }
        .submissions-table th {
          background-color: var(--theme-elevation-100);
          border-bottom: 1px solid var(--theme-elevation-150);
          color: var(--theme-elevation-500);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 8px 12px;
          white-space: nowrap;
        }
        .submissions-table td {
          padding: 8px 12px;
          border-bottom: 1px solid var(--theme-elevation-150);
          vertical-align: middle;
        }
        .submission-row {
          cursor: pointer;
          transition: background-color 0.12s ease;
          background-color: transparent;
        }
        .submission-row:hover {
          background-color: var(--theme-elevation-100);
        }
        /* Light mode unread highlight */
        .submission-row.unread {
          background-color: rgba(37, 99, 235, 0.04);
        }
        .submission-row.unread:hover {
          background-color: rgba(37, 99, 235, 0.08);
        }
        /* Dark mode unread highlight: subtle illuminated brand tint, NOT pitch black */
        [data-theme='dark'] .submission-row.unread {
          background-color: rgba(59, 130, 246, 0.12);
        }
        [data-theme='dark'] .submission-row.unread:hover {
          background-color: rgba(59, 130, 246, 0.18);
        }
        .submission-row.unread .sender-text {
          font-weight: 700 !important;
          color: var(--theme-text) !important;
        }
        .submission-row.unread .subject-preview-text {
          font-weight: 600 !important;
          color: var(--theme-text) !important;
        }
        .submission-row.selected {
          background-color: rgba(37, 99, 235, 0.1);
        }
        [data-theme='dark'] .submission-row.selected {
          background-color: rgba(59, 130, 246, 0.22);
        }

        /* Email text (Single clean line) */
        .email-text {
          font-size: 0.875rem;
          color: var(--theme-elevation-600);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
          display: block;
        }
        [data-theme='dark'] .email-text {
          color: var(--theme-elevation-400);
        }

        /* Subject preview text (Single clean line) */
        .subject-preview-text {
          font-size: 0.875rem;
          color: var(--theme-elevation-500);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 440px;
          display: block;
          line-height: 1.35;
        }

        /* Row Delete Button (Single subtle icon button) */
        .row-delete-btn {
          background: transparent;
          border: none;
          color: var(--theme-elevation-400);
          padding: 5px 6px;
          border-radius: var(--style-radius-s, 3px);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.15s ease, background-color 0.15s ease;
        }
        .row-delete-btn:hover {
          color: var(--theme-error-500, #ef4444);
          background-color: rgba(239, 68, 68, 0.1);
        }
        [data-theme='dark'] .row-delete-btn {
          color: var(--theme-elevation-400);
        }
        [data-theme='dark'] .row-delete-btn:hover {
          color: #f87171;
          background-color: rgba(239, 68, 68, 0.18);
        }

        /* Form badge */
        .form-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: var(--style-radius-s, 3px);
          background-color: var(--theme-elevation-150);
          color: var(--theme-elevation-700);
          white-space: nowrap;
          display: inline-block;
          line-height: 1.25;
        }
        [data-theme='dark'] .form-badge {
          background-color: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Date text */
        .date-text {
          white-space: nowrap;
          font-size: 0.8125rem;
          color: var(--theme-elevation-500);
          font-weight: 400;
        }
        .date-text.unread {
          color: #2563eb;
          font-weight: 600;
        }
        [data-theme='dark'] .date-text.unread {
          color: #60a5fa !important;
        }

        /* Seen Dot Indicator */
        .seen-dot-btn {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          padding: 0;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.15s ease, background-color 0.15s ease;
          display: inline-block;
        }
        .seen-dot-btn:hover {
          transform: scale(1.35);
        }
        .seen-dot--unread {
          background-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
        }
        [data-theme='dark'] .seen-dot--unread {
          background-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.35);
        }
        .seen-dot--read {
          background-color: transparent;
          border: 1.5px solid var(--theme-elevation-300);
        }
        [data-theme='dark'] .seen-dot--read {
          border-color: rgba(255, 255, 255, 0.32);
        }
        .seen-dot--read:hover {
          background-color: var(--theme-elevation-400);
        }

        /* Star Button */
        .star-btn {
          background: transparent;
          border: none;
          padding: 0;
          line-height: 1;
          cursor: pointer;
          color: var(--theme-elevation-400);
          transition: color 0.15s ease, transform 0.15s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        [data-theme='dark'] .star-btn {
          color: rgba(255, 255, 255, 0.35);
        }
        .star-btn:hover {
          transform: scale(1.2);
          color: #f59e0b;
        }
        .star-btn.starred {
          color: #f59e0b !important;
        }

        /* Page Navigation Buttons */
        .page-nav-btn {
          border: 1px solid var(--theme-elevation-200);
          background: var(--theme-elevation-100);
          color: var(--theme-text);
          border-radius: var(--style-radius-s, 3px);
          padding: 4px 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, opacity 0.15s ease;
        }
        .page-nav-btn:disabled {
          cursor: not-allowed;
          opacity: 0.35;
        }
        .page-nav-btn:not(:disabled):hover {
          background: var(--theme-elevation-200);
        }

        /* Status Pills */
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 8px;
          border-radius: var(--style-radius-s, 3px);
          font-size: 0.8125rem;
          font-weight: 600;
          line-height: 1.25;
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
        [data-theme='dark'] .status-pill--new {
          background-color: rgba(245, 158, 11, 0.16);
          color: #fbbf24;
          border-color: rgba(245, 158, 11, 0.3);
        }
        [data-theme='dark'] .status-pill--new .status-pill-dot {
          background-color: #fbbf24;
        }

        .status-pill--contacted {
          background-color: var(--theme-success-150, #dbeafe);
          color: var(--theme-success-800, #1e40af);
          border-color: var(--theme-success-250, #bfdbfe);
        }
        .status-pill--contacted .status-pill-dot {
          background-color: var(--theme-success-500, #3b82f6);
        }
        [data-theme='dark'] .status-pill--contacted {
          background-color: rgba(59, 130, 246, 0.16);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
        }
        [data-theme='dark'] .status-pill--contacted .status-pill-dot {
          background-color: #60a5fa;
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

        /* Bulk Actions Floating Bar */
        .bulk-actions-floating-bar {
          background-color: var(--theme-elevation-900);
          color: var(--theme-elevation-0);
          padding: 6px 12px;
          border-radius: var(--style-radius-s, 4px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 6px 0;
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        [data-theme='dark'] .bulk-actions-floating-bar {
          background-color: #27272a;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 4px 14px rgba(0,0,0,0.4);
        }

        /* ======================================================== */
        /* CENTERED DIALOG BOX / MODAL WINDOW                       */
        /* ======================================================== */
        .dialog-backdrop-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(4px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
          animation: dialogFadeIn 0.16s ease-out;
        }
        .centered-dialog-card {
          background-color: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-200);
          border-radius: var(--style-radius-m, 8px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          max-width: 860px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          color: var(--theme-text);
          font-family: inherit;
        }
        [data-theme='dark'] .centered-dialog-card {
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.75);
          border-color: rgba(255, 255, 255, 0.12);
        }
        .dialog-header-toolbar {
          padding: 8px 16px;
          border-bottom: 1px solid var(--theme-elevation-150);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          background-color: var(--theme-elevation-100);
        }
        .dialog-body-scroll {
          padding: 16px 20px;
          overflow-y: auto;
          flex: 1;
        }
        .dialog-message-box {
          background-color: var(--theme-elevation-100);
          border: 1px solid var(--theme-elevation-150);
          border-radius: var(--style-radius-s, 4px);
          padding: 14px 18px;
          font-size: 1rem;
          line-height: 1.65;
          white-space: pre-wrap;
          color: var(--theme-text);
          margin-bottom: 14px;
        }
        [data-theme='dark'] .dialog-message-box {
          border-color: var(--theme-elevation-200);
        }

        .dialog-avatar-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.0625rem;
          flex-shrink: 0;
          letter-spacing: 0.02em;
          background-color: var(--avatar-bg-light);
          color: var(--avatar-text-light);
          transition: all 0.15s ease;
        }
        [data-theme='dark'] .dialog-avatar-circle {
          background-color: var(--avatar-bg-dark);
          color: var(--avatar-text-dark);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .dialog-btn {
          padding: 5px 10px;
          font-size: 0.8125rem;
          font-weight: 500;
          border-radius: var(--style-radius-s, 4px);
          border: 1px solid var(--theme-elevation-200);
          background-color: var(--theme-elevation-50);
          color: var(--theme-text);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }
        .dialog-btn:hover:not(:disabled) {
          background-color: var(--theme-elevation-150);
        }
        .dialog-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .dialog-btn--close {
          background-color: var(--theme-elevation-900);
          color: var(--theme-elevation-0);
          border: none;
          font-weight: 700;
          padding: 5px 10px;
        }
        .dialog-btn--close:hover {
          background-color: var(--theme-elevation-800);
        }
        [data-theme='dark'] .dialog-btn--close {
          background-color: var(--theme-elevation-200);
          color: var(--theme-text);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        [data-theme='dark'] .dialog-btn--close:hover {
          background-color: var(--theme-elevation-300);
        }
        .dialog-btn--delete {
          background-color: transparent;
          color: var(--theme-error-500, #ef4444);
          border-color: var(--theme-elevation-200);
        }
        .dialog-btn--delete:hover {
          background-color: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.3);
        }

        .dialog-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          font-size: 0.875rem;
          font-weight: 600;
          background-color: #2563eb;
          color: #ffffff;
          border-radius: var(--style-radius-s, 4px);
          text-decoration: none;
          transition: background-color 0.15s ease;
        }
        .dialog-cta-primary:hover {
          background-color: #1d4ed8;
        }
        .dialog-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          font-size: 0.875rem;
          font-weight: 500;
          background-color: var(--theme-elevation-100);
          color: var(--theme-text);
          border: 1px solid var(--theme-elevation-200);
          border-radius: var(--style-radius-s, 4px);
          text-decoration: none;
          transition: background-color 0.15s ease;
        }
        .dialog-cta-secondary:hover {
          background-color: var(--theme-elevation-150);
        }

        .meta-label {
          font-size: 0.75rem;
          color: var(--theme-elevation-500);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .meta-value {
          font-size: 0.9375rem;
          font-weight: 600;
          margin-top: 2px;
          color: var(--theme-text);
        }

        @keyframes dialogFadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .dialog-backdrop-overlay {
            padding: 8px;
          }
          .centered-dialog-card {
            max-height: 95vh;
          }
          .dialog-body-scroll {
            padding: 12px 14px;
          }
        }
      `}</style>

      {/* Floating Notification Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 999999,
            backgroundColor: "var(--theme-elevation-900)",
            color: "var(--theme-elevation-0)",
            padding: "8px 16px",
            borderRadius: "var(--style-radius-s, 4px)",
            fontSize: "0.875rem",
            fontWeight: 500,
            boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
            border: "1px solid var(--theme-elevation-700)",
          }}
        >
          {toast}
        </div>
      )}

      {/* Top Application Bar */}
      <div className="inbox-top-bar">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              margin: 0,
              color: "var(--theme-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Form Submissions
          </h1>
          <span
            style={{
              backgroundColor: unreadCount > 0 ? "#2563eb" : "var(--theme-elevation-150)",
              color: unreadCount > 0 ? "#ffffff" : "var(--theme-elevation-600)",
              fontSize: "0.8125rem",
              fontWeight: 700,
              padding: "2px 9px",
              borderRadius: "12px",
            }}
          >
            {unreadCount > 0 ? `${unreadCount} unread` : `${parsedLeads.length} total`}
          </span>
        </div>

        {/* Global Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            type="button"
            onClick={() => handleExportCsv(filteredLeads)}
            className="dialog-btn"
            style={{ fontSize: "0.875rem", padding: "6px 12px" }}
          >
            <IconDownload size={15} />
            <span>Export CSV</span>
          </button>

          <button
            type="button"
            onClick={() => void fetchLeads()}
            disabled={isRefreshing}
            className="dialog-btn"
            style={{
              fontSize: "0.875rem",
              padding: "6px 12px",
              opacity: isRefreshing ? 0.6 : 1,
            }}
            title="Refresh Leads"
          >
            <IconRefresh size={15} />
            <span>Sync</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="inbox-controls-bar">
        {/* Quick Filter Tabs */}
        <div className="inbox-tab-group">
          <button
            type="button"
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <IconInbox size={15} />
            <span>All</span>
            <span className="tab-badge">{parsedLeads.length}</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === "unread" ? "active" : ""}`}
            onClick={() => setActiveTab("unread")}
          >
            <IconMail size={15} />
            <span>Unread</span>
            {unreadCount > 0 && <span className="tab-badge unread">{unreadCount}</span>}
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === "starred" ? "active" : ""}`}
            onClick={() => setActiveTab("starred")}
          >
            <IconStar size={15} filled />
            <span>Starred</span>
            {starredCount > 0 && <span className="tab-badge">{starredCount}</span>}
          </button>
        </div>

        {/* Dropdowns & Search Box */}
        <div className="inbox-secondary-filters">
          {/* Form Filter */}
          <select
            value={selectedForm}
            onChange={(e) => setSelectedForm(e.target.value)}
            className="inbox-select"
          >
            <option value="all">All Forms</option>
            {formOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="inbox-select"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>

          {/* Search Input */}
          <div style={{ position: "relative", minWidth: "240px" }}>
            <input
              type="text"
              placeholder="Search sender, company, message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="inbox-search-input"
              style={{ width: "100%", boxSizing: "border-box", paddingRight: "28px" }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  color: "var(--theme-elevation-500)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                }}
              >
                <IconX size={13} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bulk Actions Banner (When leads are checked) */}
      {selectedLeadIds.size > 0 && (
        <div className="bulk-actions-floating-bar">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{selectedLeadIds.size} submission(s) selected</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button
              type="button"
              onClick={() => void handleBulkMarkSeen(true)}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "3px",
                fontSize: "0.8125rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
              title="Mark selected as read"
            >
              <IconCheck size={14} />
              <span>Mark as Read</span>
            </button>
            <button
              type="button"
              onClick={() => void handleBulkMarkSeen(false)}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "3px",
                fontSize: "0.8125rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
              title="Mark selected as unread"
            >
              <IconMail size={14} />
              <span>Mark as Unread</span>
            </button>
            <button
              type="button"
              onClick={() =>
                handleExportCsv(
                  filteredLeads.filter((l) => selectedLeadIds.has(l.id)),
                )
              }
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "none",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "3px",
                fontSize: "0.8125rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
              title="Export selected to CSV"
            >
              <IconDownload size={14} />
              <span>Export Selected</span>
            </button>
            <button
              type="button"
              onClick={() => void handleBulkDelete()}
              style={{
                background: "rgba(239, 68, 68, 0.85)",
                border: "none",
                color: "#fff",
                padding: "4px 10px",
                borderRadius: "3px",
                fontSize: "0.8125rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
              title="Delete selected"
            >
              <IconTrash size={14} />
              <span>Delete Selected</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedLeadIds(new Set())}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "3px 6px",
                display: "inline-flex",
                alignItems: "center",
              }}
              title="Clear selection"
            >
              <IconX size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Main Full-Width Table Card */}
      <div className="inbox-table-card">
        {/* Table Top Pagination Header */}
        <div
          style={{
            padding: "6px 12px",
            borderBottom: "1px solid var(--theme-elevation-150)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "var(--theme-elevation-50)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--theme-elevation-500)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Submissions ({totalLeads})
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--theme-elevation-500)",
                fontWeight: 500,
                marginRight: "4px",
              }}
            >
              {totalLeads === 0 ? "0 of 0" : `${startIndex + 1}–${endIndex} of ${totalLeads}`}
            </span>

            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="page-nav-btn"
              title="Previous Page"
            >
              <IconChevronLeft size={14} />
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="page-nav-btn"
              title="Next Page"
            >
              <IconChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Scrollable Table View */}
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table className="submissions-table">
            <thead>
              <tr>
                <th style={{ width: "32px", textAlign: "center" }}>
                  <input
                    type="checkbox"
                    checked={
                      paginatedLeads.length > 0 &&
                      paginatedLeads.every((l) => selectedLeadIds.has(l.id))
                    }
                    onChange={handleToggleSelectAllCurrentPage}
                    style={{ cursor: "pointer", margin: 0 }}
                    title="Select all on this page"
                  />
                </th>
                <th style={{ width: "24px", textAlign: "center" }} title="Seen"></th>
                <th style={{ width: "24px", textAlign: "center" }} title="Starred"></th>
                <th style={{ minWidth: "150px" }}>Sender</th>
                <th style={{ minWidth: "180px" }}>Email</th>
                <th style={{ minWidth: "300px" }}>Message</th>
                <th style={{ minWidth: "130px" }}>Form</th>
                <th style={{ width: "110px" }}>Status</th>
                <th style={{ width: "95px" }}>Date</th>
                <th style={{ width: "36px", textAlign: "center" }}></th>
              </tr>
            </thead>
            <tbody>
              {paginatedLeads.length === 0 ? (
                <tr>
                  <td
                    colSpan={10}
                    style={{
                      padding: "36px 14px",
                      textAlign: "center",
                      color: "var(--theme-elevation-400)",
                      fontSize: "0.9375rem",
                    }}
                  >
                    No form submissions found.
                  </td>
                </tr>
              ) : (
                paginatedLeads.map((lead) => {
                  const isChecked = selectedLeadIds.has(lead.id);

                  return (
                    <tr
                      key={lead.id}
                      className={`submission-row ${!lead.isSeen ? "unread" : ""} ${
                        isChecked ? "selected" : ""
                      }`}
                      onClick={() => setActiveModalLeadId(lead.id)}
                    >
                      {/* Checkbox */}
                      <td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => handleSelectLeadRow(lead.id, e as any)}
                          style={{ cursor: "pointer", margin: 0 }}
                        />
                      </td>

                      {/* 1-Click Seen / Unseen Dot */}
                      <td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => void handleToggleSeen(lead.id, !lead.isSeen)}
                          className={`seen-dot-btn ${
                            lead.isSeen ? "seen-dot--read" : "seen-dot--unread"
                          }`}
                          title={lead.isSeen ? "Click to mark as unread" : "Click to mark as read"}
                        />
                      </td>

                      {/* 1-Click Star Icon */}
                      <td style={{ textAlign: "center" }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => void handleToggleStarred(lead.id, !lead.isStarred)}
                          className={`star-btn ${lead.isStarred ? "starred" : ""}`}
                          title={lead.isStarred ? "Starred (click to unstar)" : "Click to star"}
                        >
                          <IconStar size={16} filled={lead.isStarred} />
                        </button>
                      </td>

                      {/* Sender Name (Single clean line) */}
                      <td>
                        <span
                          className="sender-text"
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: lead.isSeen ? 500 : 700,
                            color: "var(--theme-text)",
                            whiteSpace: "nowrap",
                            display: "block",
                            lineHeight: 1.3,
                          }}
                        >
                          {lead.name}
                        </span>
                      </td>

                      {/* Email (Single clean line) */}
                      <td>
                        <span className="email-text">
                          {lead.email || "—"}
                        </span>
                      </td>

                      {/* Message Preview (Single clean line) */}
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          {lead.uploads && lead.uploads.length > 0 && (
                            <span
                              style={{
                                color: "var(--theme-elevation-500)",
                                display: "inline-flex",
                                alignItems: "center",
                                flexShrink: 0,
                              }}
                              title={`${lead.uploads.length} attachment(s)`}
                            >
                              <IconPaperclip size={13} />
                            </span>
                          )}
                          <span className="subject-preview-text">
                            {lead.project || lead.position || lead.budget || "No message body"}
                          </span>
                        </div>
                      </td>

                      {/* Form (Single clean line badge) */}
                      <td>
                        <span className="form-badge">
                          {lead.formTitle}
                        </span>
                      </td>

                      {/* Status (Single clean line pill) */}
                      <td onClick={(e) => e.stopPropagation()}>
                        <span className={`status-pill status-pill--${lead.status}`}>
                          <span className="status-pill-dot" />
                          {statusLabels[lead.status]}
                        </span>
                      </td>

                      {/* Date (Single clean line) */}
                      <td>
                        <span className={`date-text ${!lead.isSeen ? "unread" : ""}`}>
                          {formatRelativeTime(lead.createdAt)}
                        </span>
                      </td>

                      {/* Quick Delete Action */}
                      <td style={{ textAlign: "center", whiteSpace: "nowrap" }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => void handleDeleteLead(lead.id)}
                          className="row-delete-btn"
                          title="Delete submission"
                        >
                          <IconTrash size={14} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Bottom Pagination Toolbar */}
        <div
          style={{
            padding: "6px 12px",
            borderTop: "1px solid var(--theme-elevation-150)",
            backgroundColor: "var(--theme-elevation-50)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {/* Page Size Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "0.8125rem", color: "var(--theme-elevation-500)" }}>
              Show per page:
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="inbox-select"
              style={{ fontSize: "0.8125rem", padding: "3px 8px" }}
            >
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          {/* Page Navigation Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setPage(1)}
              className="page-nav-btn"
              title="First Page"
            >
              <IconChevronsLeft size={14} />
            </button>
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="page-nav-btn"
              title="Previous Page"
            >
              <IconChevronLeft size={14} />
            </button>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                padding: "0 8px",
                color: "var(--theme-text)",
              }}
            >
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="page-nav-btn"
              title="Next Page"
            >
              <IconChevronRight size={14} />
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setPage(totalPages)}
              className="page-nav-btn"
              title="Last Page"
            >
              <IconChevronsRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* CENTERED DIALOG BOX / MODAL WINDOW                       */}
      {/* ======================================================== */}
      {activeModalLead && (
        <div
          className="dialog-backdrop-overlay"
          onClick={() => setActiveModalLeadId(null)}
        >
          <div
            className="centered-dialog-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Toolbar */}
            <div className="dialog-header-toolbar">
              {/* Left group: Status selector & Star */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* Pipeline Status Selector */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span className={`status-pill status-pill--${activeModalLead.status}`}>
                    <span className="status-pill-dot" />
                    {statusLabels[activeModalLead.status]}
                  </span>
                  <select
                    value={activeModalLead.status}
                    onChange={(e) =>
                      void handleUpdateStatus(
                        activeModalLead.id,
                        e.target.value as LeadStatus,
                      )
                    }
                    className="inbox-select"
                    style={{
                      padding: "4px 8px",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                    }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                {/* Star Button */}
                <button
                  type="button"
                  onClick={() =>
                    void handleToggleStarred(
                      activeModalLead.id,
                      !activeModalLead.isStarred,
                    )
                  }
                  className="dialog-btn"
                  style={{
                    backgroundColor: activeModalLead.isStarred
                      ? "rgba(245, 158, 11, 0.15)"
                      : undefined,
                    color: activeModalLead.isStarred ? "#d97706" : undefined,
                  }}
                  title="Toggle star (S)"
                >
                  <IconStar size={15} filled={activeModalLead.isStarred} />
                  <span>{activeModalLead.isStarred ? "Starred" : "Star"}</span>
                </button>
              </div>

              {/* Right group: Prev/Next submission, Unread toggle, Close */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {/* Previous Lead Button */}
                <button
                  type="button"
                  disabled={!hasPrevModalLead}
                  onClick={handlePrevModalLead}
                  className="dialog-btn"
                  title="Previous submission (Left Arrow or Up Arrow)"
                >
                  <IconChevronLeft size={14} />
                  <span>Older</span>
                </button>

                {/* Next Lead Button */}
                <button
                  type="button"
                  disabled={!hasNextModalLead}
                  onClick={handleNextModalLead}
                  className="dialog-btn"
                  title="Next submission (Right Arrow or Down Arrow)"
                >
                  <IconChevronRight size={14} />
                  <span>Newer</span>
                </button>

                {/* Mark as Unread Button */}
                <button
                  type="button"
                  onClick={() =>
                    void handleToggleSeen(activeModalLead.id, !activeModalLead.isSeen)
                  }
                  className="dialog-btn"
                  title="Toggle read status (U)"
                >
                  {activeModalLead.isSeen ? <IconMail size={15} /> : <IconMailOpen size={15} />}
                  <span>{activeModalLead.isSeen ? "Mark as unread" : "Mark as read"}</span>
                </button>

                {/* Copy Summary */}
                <button
                  type="button"
                  onClick={() => handleCopyDetails(activeModalLead)}
                  className="dialog-btn"
                  title="Copy formatted summary"
                >
                  <IconCopy size={14} />
                  <span>Copy</span>
                </button>

                {/* Delete Lead */}
                <button
                  type="button"
                  onClick={() => void handleDeleteLead(activeModalLead.id)}
                  className="dialog-btn dialog-btn--delete"
                  title="Delete submission"
                >
                  <IconTrash size={14} />
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalLeadId(null)}
                  className="dialog-btn dialog-btn--close"
                  title="Close Dialog (Esc)"
                >
                  <IconX size={15} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="dialog-body-scroll">
              {/* Form Title & ID Headline */}
              <div style={{ marginBottom: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <span className="form-badge" style={{ fontSize: "0.8125rem", padding: "2px 8px" }}>
                    {activeModalLead.formTitle}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--theme-elevation-400)",
                    }}
                  >
                    Submission #{activeModalLead.id}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    margin: 0,
                    color: "var(--theme-text)",
                    lineHeight: "1.25",
                  }}
                >
                  {activeModalLead.company
                    ? `${activeModalLead.name} (${activeModalLead.company})`
                    : activeModalLead.name}
                  {activeModalLead.budget
                    ? ` — Budget: ${activeModalLead.budget}`
                    : ""}
                </h2>
              </div>

              {/* Sender Profile Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <div
                  className="dialog-avatar-circle"
                  style={{
                    "--avatar-bg-light": modalAvatarPalette.lightBg,
                    "--avatar-text-light": modalAvatarPalette.lightText,
                    "--avatar-bg-dark": modalAvatarPalette.darkBg,
                    "--avatar-text-dark": modalAvatarPalette.darkText,
                  } as React.CSSProperties}
                >
                  {getInitials(activeModalLead.name)}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "6px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: 700,
                          color: "var(--theme-text)",
                        }}
                      >
                        {activeModalLead.name}
                      </span>
                      {activeModalLead.email && (
                        <a
                          href={`mailto:${activeModalLead.email}`}
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--theme-elevation-500)",
                            textDecoration: "none",
                          }}
                        >
                          &lt;{activeModalLead.email}&gt;
                        </a>
                      )}
                    </div>

                    <span
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--theme-elevation-500)",
                      }}
                    >
                      {new Date(activeModalLead.createdAt).toLocaleString("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--theme-elevation-400)",
                      marginTop: "2px",
                    }}
                  >
                    To: Dynamic Dreamz Team &lt;hello@dynamicdreamz.com&gt;
                  </div>
                </div>
              </div>

              {/* Quick Action Contact CTAs */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                {activeModalLead.email && (
                  <a
                    href={`mailto:${activeModalLead.email}?subject=Re: Inquiry with Dynamic Dreamz`}
                    className="dialog-cta-primary"
                  >
                    <IconMail size={15} />
                    <span>Reply via Email ({activeModalLead.email})</span>
                  </a>
                )}

                {activeModalLead.phone && (
                  <a
                    href={`tel:${activeModalLead.phone}`}
                    className="dialog-cta-secondary"
                  >
                    <IconPhone size={15} />
                    <span>Call ({activeModalLead.phone})</span>
                  </a>
                )}

                {activeModalLead.website && (
                  <a
                    href={
                      activeModalLead.website.startsWith("http")
                        ? activeModalLead.website
                        : `https://${activeModalLead.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dialog-cta-secondary"
                  >
                    <IconGlobe size={15} />
                    <span>Visit Website</span>
                    <IconExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Message Body */}
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--theme-elevation-500)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Message / Project Scope
                </div>
                <div className="dialog-message-box">
                  {activeModalLead.project || (
                    <span
                      style={{
                        color: "var(--theme-elevation-400)",
                        fontStyle: "italic",
                      }}
                    >
                      No written message provided in this submission.
                    </span>
                  )}
                </div>
              </div>

              {/* Structured Metadata Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                  gap: "10px 14px",
                  padding: "12px 14px",
                  backgroundColor: "var(--theme-elevation-100)",
                  borderRadius: "var(--style-radius-s, 4px)",
                  border: "1px solid var(--theme-elevation-150)",
                  marginBottom: "14px",
                }}
              >
                <div>
                  <div className="meta-label">Company</div>
                  <div className="meta-value">{activeModalLead.company || "—"}</div>
                </div>

                <div>
                  <div className="meta-label">Budget</div>
                  <div className="meta-value">{activeModalLead.budget || "—"}</div>
                </div>

                <div>
                  <div className="meta-label">Phone</div>
                  <div className="meta-value">{activeModalLead.phone || "—"}</div>
                </div>

                {activeModalLead.position && (
                  <div>
                    <div className="meta-label">Position</div>
                    <div className="meta-value">{activeModalLead.position}</div>
                  </div>
                )}

                {activeModalLead.experience && (
                  <div>
                    <div className="meta-label">Experience</div>
                    <div className="meta-value">{activeModalLead.experience}</div>
                  </div>
                )}

                {activeModalLead.location && (
                  <div>
                    <div className="meta-label">Location</div>
                    <div className="meta-value">{activeModalLead.location}</div>
                  </div>
                )}
              </div>

              {/* Campaign Attribution (UTM Tracking) */}
              {(activeModalLead.attribution.source ||
                activeModalLead.attribution.medium ||
                activeModalLead.attribution.campaign) && (
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "var(--style-radius-s, 4px)",
                    backgroundColor: "var(--theme-elevation-100)",
                    border: "1px solid var(--theme-elevation-150)",
                    marginBottom: "14px",
                    fontSize: "0.875rem",
                  }}
                >
                  <div className="meta-label" style={{ marginBottom: "4px" }}>
                    Campaign Attribution
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", color: "var(--theme-text)" }}>
                    {activeModalLead.attribution.source && (
                      <span>
                        Source: <strong>{activeModalLead.attribution.source}</strong>
                      </span>
                    )}
                    {activeModalLead.attribution.medium && (
                      <span>
                        Medium: <strong>{activeModalLead.attribution.medium}</strong>
                      </span>
                    )}
                    {activeModalLead.attribution.campaign && (
                      <span>
                        Campaign:{" "}
                        <strong>{activeModalLead.attribution.campaign}</strong>
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Uploaded Documents / Attachments */}
              {activeModalLead.uploads && activeModalLead.uploads.length > 0 && (
                <div
                  style={{
                    marginTop: "14px",
                    borderTop: "1px solid var(--theme-elevation-150)",
                    paddingTop: "12px",
                  }}
                >
                  <div className="meta-label" style={{ marginBottom: "6px" }}>
                    Attachments ({activeModalLead.uploads.length})
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {activeModalLead.uploads.map((up, idx) => (
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
                        <IconPaperclip size={15} />
                        <span style={{ fontWeight: 600 }}>{up.field}:</span>
                        <span style={{ color: "#2563eb", textDecoration: "underline" }}>
                          {up.filename}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Raw JSON Submission Fields Inspector */}
              <div
                style={{
                  marginTop: "14px",
                  borderTop: "1px solid var(--theme-elevation-150)",
                  paddingTop: "12px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowRawFields(!showRawFields)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--theme-elevation-500)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {showRawFields ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
                  <span>
                    {showRawFields
                      ? "Hide raw submission fields"
                      : "View raw submission fields"}
                  </span>
                </button>

                {showRawFields && (
                  <div
                    style={{
                      marginTop: "8px",
                      backgroundColor: "var(--theme-elevation-100)",
                      padding: "10px 14px",
                      borderRadius: "var(--style-radius-s, 4px)",
                      fontSize: "0.8125rem",
                      fontFamily: "monospace",
                      border: "1px solid var(--theme-elevation-150)",
                    }}
                  >
                    {activeModalLead.rawFields.map((f, i) => (
                      <div
                        key={f.id || i}
                        style={{
                          display: "flex",
                          gap: "8px",
                          padding: "3px 0",
                          borderBottom:
                            i < activeModalLead.rawFields.length - 1
                              ? "1px solid var(--theme-elevation-150)"
                              : "none",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 600,
                            minWidth: "130px",
                            color: "var(--theme-text)",
                          }}
                        >
                          {f.field}:
                        </span>
                        <span
                          style={{
                            color: "var(--theme-elevation-600)",
                            wordBreak: "break-all",
                          }}
                        >
                          {f.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
