"use client";

import { useState } from "react";

/**
 * <img> that hides itself if the file is missing, so the parent's gradient
 * placeholder shows through cleanly until real photos are added.
 */
export default function SmartImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) {
    return (
      <span className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-chalk-dim">
        Foto folgt
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" className={className} onError={() => setOk(false)} />
  );
}
