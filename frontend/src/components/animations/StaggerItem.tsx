"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type StaggerItemProps = Readonly<{
  children: ReactNode;
  delay?: number;
  className?: string;
}>;

export default function StaggerItem({
  children,
  delay = 0,
  className = "",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}