"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Full-bleed image with a subtle vertical parallax as it scrolls through the
 * viewport. The image is oversized so no gaps show. Respects reduced-motion.
 */
export default function Parallax({
  src,
  alt = "",
  className = "",
  strength = 70,
  fill = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  strength?: number;
  fill?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div
      ref={ref}
      className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={reduce ? undefined : { y }}
        className="absolute left-0 top-[-10%] h-[120%] w-full object-cover"
      />
    </div>
  );
}
