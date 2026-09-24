"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = Readonly<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}>;

export default function Reveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 24,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}