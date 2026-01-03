"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/constant";
import { Timeline } from "../timeline";

const experiences = [
  {
    year: "2025",
    roles: [
      {
        title: "Building Pica Chat",
        organization: "Pico Innovation (Part-Time)",
        dateRange: "Oct - Present",
        description:
          "After nine months full-time at Pico, I moved to a part-time role to focus on Pica Chat, a conversational AI assistant I'm building with Next.js. I've been researching existing AI chat apps and refining the frontend to feel simple, fast, and intuitive.",
      },
      {
        title: "Component Systems & PDF Tools",
        organization: "Pico Innovation",
        dateRange: "Jan - Sep",
        description:
          "Built and documented a shared library of 25+ reusable components, worked on the in-house PDF editor, and shipped features like rich-text editing with Tiptap, all aimed at cleaner code and smoother design workflows.",
      },
    ],
  },
  {
    year: "2024",
    roles: [
      {
        title: "Started as an Intern",
        organization: "Pico Innovation",
        dateRange: "May - Dec",
        description:
          "Started my journey as an intern, researching editor tools like Tiptap and Lexical. That early research and component work helped set the direction for the MijnUI design system that followed.",
      },
    ],
  },
  {
    year: "2023",
    roles: [
      {
        title: "Freelancing",
        organization: "Upwork & Local Clients",
        dateRange: "Aug - Dec",
        description:
          "Took on small frontend projects to learn from real client work. Focused on clean layouts, responsive design, and understanding how people interact with simple interfaces.",
      },
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="min-h-screen w-full pb-32" id="experience">
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
          Experience Timeline
        </motion.h2>

        {/* Timeline */}
        <Timeline data={experiences} />
      </motion.div>
    </section>
  );
};
