"use client";

import { usePathname } from "next/navigation";
import { pages } from "../_store/app.state";

const classNames = "text-gray-600 tracking-wide";

export default function HeaderTitle() {
  const pathname = usePathname();

  const page = pages.find((page) => page.route === pathname)?.title;

  if (page) {
    return <h4 className={classNames}>{page}</h4>;
  }

  return <h4 className={classNames}>Ivalo Portal</h4>;
}
