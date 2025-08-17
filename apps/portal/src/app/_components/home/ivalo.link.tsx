"use client";

import { ExternalLink } from "lucide-react";

export function IvaloLink() {
  return (
    <ExternalLink
      className="cursor-pointer text-primary"
      onClick={() => {
        window.open("https://ivalo.com/pages/ivalo-360", "_blank");
      }}
    />
  );
}
