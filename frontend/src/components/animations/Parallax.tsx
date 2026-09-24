"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxProps = Readonly<{
  children: ReactNode;
  offset?: number;
  className?: string;
}>;

export default function Parallax({
  children,
  offset = 30,
  className = "",
}: ParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 700],
    [0, shouldReduceMotion ? 0 : offset]
  );

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <motion.div
      style={{
        y: isReady ? y : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}