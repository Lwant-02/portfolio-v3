import { motion } from "motion/react";

import { itemVariants } from "@/constant";
import { TimelineProps } from "@/type";

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="relative space-y-8">
      {data.map((yearData) => (
        <motion.div
          key={yearData.year}
          className="relative"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Year - Top on mobile, Left on desktop */}
          <h3 className="text-2xl md:text-4xl font-bold text-muted-foreground md:mb-0 md:absolute md:left-0 md:top-1 md:w-24">
            {yearData.year}
          </h3>

          {/* Timeline Content */}
          <div className="md:ml-32">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-32 top-10 md:top-2 bottom-0 w-px bg-muted-foreground" />

            {/* Roles */}
            <div className="space-y-8 md:space-y-12">
              {yearData.roles.map((role, roleIndex) => (
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
                          {role.organization}
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
                    {/* View Link if available */}
                    {role.link && (
                      <div className="pt-2">
                        <a
                          href={role.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group text-blue-400 hover:text-blue-300 font-jetbrains-mono transition-colors"
                        >
                          <span className="text-sm md:text-base border-b border-blue-400/30 group-hover:border-blue-300 pb-0.5">
                            View Certificate
                          </span>
                          <span className="text-lg group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
