"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Translation distance in px before reveal */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Reveals children with a fade + upward motion when scrolled into view.
 * Uses only transform/opacity (GPU-friendly) and fully disables motion
 * when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1], // ease-out
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
