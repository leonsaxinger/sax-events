"use client";

import { useEffect, useState } from "react";

/**
 * Renders a partner logo, falling back to a clean wordmark of the name if the
 * image is missing/unusable.
 * - mode "white": force the logo to pure white (works for any mono logo on a dark strip)
 * - mode "natural": render as-is (for logos that already read white on dark, e.g. knockout)
 */
export default function PartnerItem({
  name,
  logo,
  mode = "white",
}: {
  name: string;
  logo?: string;
  mode?: "white" | "natural";
}) {
  const [hasLogo, setHasLogo] = useState(false);

  useEffect(() => {
    if (!logo) return;
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      if (img.naturalWidth > 1) setHasLogo(true);
    };
  }, [logo]);

  if (hasLogo && logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logo}
        alt={name}
        style={mode === "white" ? { filter: "brightness(0) invert(1)" } : undefined}
        className="h-7 w-auto max-w-[150px] object-contain opacity-80 transition-opacity duration-200 hover:opacity-100 sm:h-8"
      />
    );
  }

  return (
    <span className="font-display whitespace-nowrap text-2xl uppercase tracking-wide text-white/85 sm:text-[1.7rem]">
      {name}
    </span>
  );
}
