"use client";

import { useState } from "react";

import { expertise } from "@/content/home";

export function ExpertiseAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="expertise-list">
      {expertise.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `expertise-panel-${index}`;

        return (
          <div className={`expertise-item${isOpen ? " is-open" : ""}`} key={item.title}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setActiveIndex(isOpen ? null : index)}
              >
                <span>{item.title}</span>
                <span className="expertise-toggle" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="expertise-panel"
              id={panelId}
              aria-hidden={!isOpen}
            >
              <div>
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
