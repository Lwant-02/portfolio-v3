"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/constant";

export const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full text-sm text-muted-foreground font-inter text-center py-7 border-t border-foreground">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        © {year} Sai Naw Main | Lwant. All rights reserved.
      </motion.div>
    </div>
  );
};
