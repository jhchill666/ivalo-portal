"use client";

import { PanelLeft, SquareChevronRight } from "lucide-react";
import { useState } from "react";

const COLLAPSED_WIDTH = "w-14";
const EXPANDED_WIDTH = "w-64";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`h-full bg-white border-r border-gray-200 transition-all duration-150 ease-in-out flex flex-col ${
        open ? EXPANDED_WIDTH : COLLAPSED_WIDTH
      }`}
    >
      <div
        className={`h-14 flex-shrink-0 flex items-center px-3 ${
          open ? "justify-between" : "justify-center"
        }`}
      >
        <span
          className={`text-lg font-semibold text-gray-900 truncate transition-opacity duration-300 ease-in-out ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none w-0"
          }`}
        >
          Menu
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="text-gray-900 w-6 h-6" />
        </button>
      </div>
      <nav
        className={`mt-4 px-2 flex-grow transition-opacity duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="/prompts"
          className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 rounded cursor-pointer"
        >
          <SquareChevronRight className="w-5 h-5 mr-3 text-gray-500" />
          <span className="text-sm font-medium truncate">Prompt Explorer</span>
        </a>
      </nav>
    </aside>
  );
}
