"use client";

import { PanelLeft } from "lucide-react";
import { usePathname } from "next/navigation.js";
import { useState } from "react";
import { pages } from "../_store/app.state.js";

const COLLAPSED_WIDTH = "w-14";
const EXPANDED_WIDTH = "w-64";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <aside
      className={`h-full bg-white border-r border-gray-200 transition-all duration-150 ease-in-out flex flex-col ${
        open ? EXPANDED_WIDTH : COLLAPSED_WIDTH
      }`}
    >
      <div
        className={`h-14 shrink-0 flex items-center px-3 ${
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
          className="p-2 rounded-sm hover:bg-gray-100 focus:outline-hidden"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="text-gray-600 w-5 h-5 cursor-pointer" />
        </button>
      </div>

      <nav
        className={`mt-4 px-2 grow transition-opacity duration-300 ease-in-out ${
          open ? "px-2" : "px-1"
        }`}
      >
        {pages.map(({ route, title, Icon }) => (
          <a
            key={route}
            href={route}
            className={`flex tooltip items-center py-2 text-gray-900 hover:bg-gray-100 rounded-sm cursor-pointer mb-2 ${
              open ? "px-4" : "px-2 justify-center"
            } ${
              pathname === route ? "bg-blue-50 border-l-2 border-blue-500" : ""
            }`}
            data-tip={title}
          >
            <Icon className="w-5 h-5 text-gray-500" />
            <span
              className={`text-sm font-medium truncate transition-opacity duration-300 ease-in-out ${
                open ? "opacity-100 ml-3" : "opacity-0 w-0 ml-0"
              }`}
            >
              {title}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
