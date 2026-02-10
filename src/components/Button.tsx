"use client";

import { Button as ShadButton } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="inline-block"
    >
      <ShadButton>Click Me</ShadButton>
    </motion.div>
  );
}
