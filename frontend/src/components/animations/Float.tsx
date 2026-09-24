"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FloatProps = Readonly<{
  children: ReactNode;
  duration?: number;
  distance?: number;
  delay?: number;
  className?: string;
}>;

export default function Float({
  children,
  duration = 5,
  distance = 8,
  delay = 0,
  className = "",
}: FloatProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? { y: 0 }
          : {
              y: [0, -distance, 0],
            }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration,
              delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}