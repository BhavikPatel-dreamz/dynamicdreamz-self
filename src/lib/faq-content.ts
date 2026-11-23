import type { FaqAccordionItem, FaqAccordionListItem } from "@/components/ui/faq-accordion";

/**
 * Normalizes an FAQ item.
 * If structured `listItems` already exist on the item, returns it cleanly.
 * If `listItems` is missing or empty, automatically parses Markdown list items
 * (e.g. lines starting with `- `, `* `, `+ `, or `• `) from the answer string.
 * Extracts bold labels (e.g. `**Label:**` or `Label:`) and bullet text, mapping them
 * to the checkmark bullet items styled identically to the reference design.
 */
export function normalizeFaqItem(item: FaqAccordionItem): FaqAccordionItem {
  // If structured listItems already exist, keep them
  if (item.listItems && item.listItems.length > 0) {
    return {
      ...item,
      listItems: item.listItems
        .filter((li) => li && (li.text || li.label))
        .map((li) => ({
          label: li.label?.trim() || undefined,
          text: (li.text || "").trim(),
        })),
    };
  }

  const rawAnswer = item.answer;
  if (!rawAnswer) return item;

  // Check for JSON string (legacy CMS input support)
  let answerStr = "";
  if (typeof rawAnswer === "string") {
    const trimmed = rawAnswer.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && typeof parsed === "object") {
          if (Array.isArray(parsed)) {
            return {
              ...item,
              answer: parsed,
            };
          }
          if (parsed.listItems && Array.isArray(parsed.listItems)) {
            return {
              ...item,
              answer: parsed.answer ?? "",
              listItems: parsed.listItems.map((li: any) => ({
                label: li?.label?.trim() || undefined,
                text: (li?.text || "").trim(),
              })),
              secondaryAnswer: parsed.secondaryAnswer ?? item.secondaryAnswer,
              listPosition: parsed.listPosition ?? item.listPosition ?? "after",
            };
          }
          if (parsed.answer) {
            answerStr = parsed.answer;
          }
        }
      } catch {
        answerStr = rawAnswer;
      }
    } else {
      answerStr = rawAnswer;
    }
  } else if (Array.isArray(rawAnswer)) {
    answerStr = rawAnswer.join("\n\n");
  }

  if (!answerStr) return item;

  // Check for HTML <li> tags (e.g. copied from WordPress or rich text)
  if (/<li[^>]*>/i.test(answerStr)) {
    const liMatches = [...answerStr.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)];
    if (liMatches.length > 0) {
      const extractedList: FaqAccordionListItem[] = [];
      for (const m of liMatches) {
        let content = m[1].trim();
        let label: string | undefined = undefined;

        const strongMatch = content.match(/^<(strong|b)[^>]*>([\s\S]*?)<\/\1>:?\s*(.*)$/i);
        if (strongMatch) {
          const rawLabel = strongMatch[2].replace(/<[^>]+>/g, "").trim();
          label = rawLabel.endsWith(":") ? rawLabel : `${rawLabel}:`;
          content = strongMatch[3].trim();
        } else {
          const colonIndex = content.indexOf(":");
          if (colonIndex > 1 && colonIndex < 40 && !content.slice(0, colonIndex).includes("<")) {
            label = content.slice(0, colonIndex + 1).replace(/<[^>]+>/g, "").trim();
            content = content.slice(colonIndex + 1).trim();
          }
        }

        content = content.replace(/<[^>]+>/g, "").trim();
        if (content || label) {
          extractedList.push({ label, text: content });
        }
      }

      if (extractedList.length > 0) {
        const beforeUl = answerStr.split(/<(ul|ol|li)[^>]*>/i)[0].replace(/<[^>]+>/g, "").trim();
        const lastTagIndex = Math.max(
          answerStr.lastIndexOf("</ul>"),
          answerStr.lastIndexOf("</ol>"),
          answerStr.lastIndexOf("</li>"),
        );
        const afterUl =
          lastTagIndex !== -1
            ? answerStr.substring(lastTagIndex + 5).replace(/<[^>]+>/g, "").trim()
            : "";

        return {
          ...item,
          answer: beforeUl || (afterUl ? "" : rawAnswer),
          listItems: extractedList,
          secondaryAnswer: afterUl || item.secondaryAnswer,
          listPosition: beforeUl ? "after" : "before",
        };
      }
    }
  }

  // Check for Markdown bullets: lines starting with -, *, +, •, or numbered items (1.)
  const lines = answerStr.split(/\r?\n/);
  const bulletRegex = /^[\s]*([-*+•]|\d+\.)\s+(.*)$/;
  const hasBullets = lines.some((l) => bulletRegex.test(l));

  if (!hasBullets) {
    return item;
  }

  const beforeLines: string[] = [];
  const bulletItems: FaqAccordionListItem[] = [];
  const afterLines: string[] = [];
  let inBullets = false;
  let finishedBullets = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(bulletRegex);

    if (match && !finishedBullets) {
      inBullets = true;
      const raw = match[2].trim();
      let label: string | undefined = undefined;
      let text = raw;

      // Match **Label:** Text or **Label**: Text
      const boldMatch = raw.match(/^\*\*([^*]+)\*\*:?\s*(.*)$/);
      if (boldMatch) {
        const rawLabel = boldMatch[1].trim();
        label = rawLabel.endsWith(":") ? rawLabel : `${rawLabel}:`;
        text = boldMatch[2].trim();
      } else {
        // Match concise Label: Text
        const colonIndex = raw.indexOf(":");
        if (colonIndex > 1 && colonIndex < 40 && !raw.slice(0, colonIndex).includes("\n")) {
          label = raw.slice(0, colonIndex + 1).trim();
          text = raw.slice(colonIndex + 1).trim();
        }
      }

      bulletItems.push({ label, text });
    } else if (inBullets) {
      if (!line.trim()) {
        const nextHasBullet = lines.slice(i + 1).some((l) => bulletRegex.test(l));
        if (nextHasBullet) {
          continue;
        } else {
          finishedBullets = true;
        }
      } else {
        finishedBullets = true;
        afterLines.push(line);
      }
    } else {
      beforeLines.push(line);
    }
  }

  const cleanBefore = beforeLines.join("\n").trim();
  const cleanAfter = afterLines.join("\n").trim();

  return {
    ...item,
    answer: cleanBefore || (cleanAfter ? "" : rawAnswer),
    listItems: bulletItems.length > 0 ? bulletItems : undefined,
    secondaryAnswer: cleanAfter || item.secondaryAnswer,
    listPosition: cleanBefore ? "after" : "before",
  };
}
