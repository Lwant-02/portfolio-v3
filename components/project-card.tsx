import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconWorldShare } from "@tabler/icons-react";

import { itemVariants } from "@/constant";
import { Button } from "./ui/button";
import { ProjectCardProps } from "@/type";

export const ProjectCard = ({
  image,
  title,
  description,
  link,
  extraLink,
  date,
}: ProjectCardProps) => {
  return (
    <div className="space-y-10">
      {/* Project Mockup */}
      <motion.div
        className="relative w-full aspect-4/2 rounded-md overflow-hidden border border-foreground group shadow-sm"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="relative cursor-pointer w-full h-full rounded-md overflow-hidden">
          <Image
            src={image}
            alt="Pica AI Assistant Project Mockup"
            fill
            loading="eager"
            className="object-center hover:scale-105 transition-transform duration-700"
          />

          {/* Date overlay - always visible on mobile, shows on hover on desktop */}
          <div className="absolute bottom-0 right-0 w-full xl:p-6 p-3 sm:p-5 bg-linear-to-t from-black/80 to-transparent opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-base md:text-lg text-white font-medium text-right">
              {date}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="space-y-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-2xl md:text-4xl font-medium "
        >
          {title}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground w-full leading-relaxed font-jetbrains-mono"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-4 sm:flex-row flex-col items-start"
        >
          {extraLink && (
            <Button asChild size="lg" className="primary-btn group">
              <Link href={extraLink} className="flex items-center gap-2 ">
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          )}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="outline-btn group"
          >
            <Link href={link} className="flex items-center gap-2 max-w-full">
              <span className="truncate">{title}</span>
              <IconWorldShare className="size-5 shrink-0" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
