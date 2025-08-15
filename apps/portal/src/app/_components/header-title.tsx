"use client";

import { usePathname } from "next/navigation";
import { pages } from "../_store/app-store";

export default function HeaderTitle() {
  const pathname = usePathname();

  const page = pages.find((page) => page.route === pathname)?.title;

  if (page) {
    return <h1>{page}</h1>;
  }

  return <h1>Ivalo Portal</h1>;
}
