"use client";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

import { containerVariants, github, itemVariants } from "@/constant";

export const Contribution = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const colorScheme = {
    light: ["#f0f4f8", "#93c5fd", "#60a5fa", "#3b82f6", "#1d4ed8"],
    dark: ["#0f1629", "#1e3a8a", "#1d4ed8", "#3b82f6", "#60a5fa"],
  };

  if (!isMounted) return null;

  return (
    <section
      className="min-h-screen w-full flex justify-center items-center"
      id="contribution"
    >
      <motion.div
        className="w-full mx-auto space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-6xl font-bold tracking-tight"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          GitHub Contributions
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-xl font-medium font-jetbrains-mono text-muted-foreground"
        >
          Activity Overview
        </motion.p>

        {/* GitHub Calendar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GitHubCalendar
            username={github.username}
            colorScheme={
              theme === "dark" || theme === "system" ? "dark" : "light"
            }
            theme={
              theme === "dark" || theme === "system"
                ? {
                    dark: colorScheme.dark,
                  }
                : {
                    light: colorScheme.light,
                  }
            }
            blockSize={20}
            blockMargin={8.5}
            fontSize={14}
            showTotalCount={true}
            showWeekdayLabels={true}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl italic text-muted-foreground w-full border-t border-blue-300/30 py-5 font-jetbrains-mono"
          variants={itemVariants}
        >
          "A snapshot of my{" "}
          <span className="text-primary font-medium">coding consistency</span>.
          Full activity available on{" "}
          <Link
            href={github.link}
            target="_blank"
            className="text-primary underline underline-offset-4"
          >
            GitHub
          </Link>
          ."
        </motion.p>
      </motion.div>
    </section>
  );
};
