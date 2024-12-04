"use client";

import { learnPayload } from "@/utils/relationsip";
import React, { useState } from "react";
import EmbedYouTube from "./Embed";

export default function Accordion({ items }: { items: learnPayload[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item) => (
        <div key={item.id}>
          <h2 id={`accordion-collapse-heading-${item.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-collapse-body-${item.id}`}
              aria-expanded={activeId === item.id}
              aria-controls={`accordion-collapse-body-${item.id}`}
              onClick={() => toggleAccordion(item.id)}>
              <span>{item.name}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transform ${
                  activeId === item.id ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${item.id}`}
            className={`${
              activeId === item.id ? "block" : "hidden"
            } p-5 border border-gray-200 dark:border-gray-700`}
            aria-labelledby={`accordion-collapse-heading-${item.id}`}>
            <EmbedYouTube link={`${item.link}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
