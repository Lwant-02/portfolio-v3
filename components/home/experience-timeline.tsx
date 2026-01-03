"use client";

import { motion } from "motion/react";

import { containerVariants, itemVariants } from "@/constant";

const experiences = [
  {
    year: "2025",
    roles: [
      {
        title: "Building Pica Chat",
        company: "Pico Innovation (Part-Time)",
        dateRange: "Oct - Present",
        description:
          "After nine months full-time at Pico, I moved to a part-time role to focus on Pica Chat, a conversational AI assistant I'm building with Next.js. I've been researching existing AI chat apps and refining the frontend to feel simple, fast, and intuitive.",
      },
      {
        title: "Component Systems & PDF Tools",
        company: "Pico Innovation",
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
        company: "Pico Innovation",
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
        company: "Upwork & Local Clients",
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
        className="w-full mx-auto space-y-16"
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
        <div className="relative space-y-8">
          {experiences.map((yearGroup, yearIndex) => (
            <motion.div
              key={yearGroup.year}
              className="relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Year - Top on mobile, Left on desktop */}
              <h3 className="text-4xl md:text-5xl font-bold text-muted-foreground mb-2 top-0 md:mb-0 md:absolute md:left-0 md:top-1 md:w-24">
                {yearGroup.year}
              </h3>

              {/* Timeline Content */}
              <div className="md:ml-32">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-32 top-6 md:top-2 bottom-0 w-px bg-muted-foreground" />

                {/* Roles */}
                <div className="space-y-8 md:space-y-12">
                  {yearGroup.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative pl-6 md:pl-8">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 md:left-0 top-1.5 w-2 h-2 rounded-full bg-muted-foreground -translate-x-[3.5px]" />

                      {/* Role Content */}
                      <div className="space-y-2 md:space-y-3">
                        {/* Title & Date */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg md:text-2xl font-semibold">
                              {role.title}
                            </h4>
                            <p className="text-sm md:text-base text-muted-foreground mt-1 font-jetbrains-mono">
                              {role.company}
                            </p>
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground shrink-0 text-right font-jetbrains-mono">
                            {role.dateRange}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-jetbrains-mono">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacing between year groups */}
              {yearIndex < experiences.length - 1 && (
                <div className="h-8 md:h-12" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
