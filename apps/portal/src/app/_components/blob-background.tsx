"use client";

import { usePathname } from "next/navigation";
import { pages } from "../_store/app.state.js";

export default function BlobBackground() {
  const pathname = usePathname();
  const page = pages.find((page) => page.route === pathname);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 ${
        page?.bg ?? "blob-salmon"
      }`}
      style={{
        backgroundColor: "var(--blob-colour)",
        clipPath: "ellipse(40% 70% at 80% 65%)",
        opacity: page?.opacity ?? 0.6,
      }}
    ></div>
  );
}
