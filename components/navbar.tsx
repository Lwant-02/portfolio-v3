"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./mobile-drawer";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Achievements",
    link: "/achievements",
  },
  {
    label: "Ask Me",
    link: "/ask-me",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full bg-background h-20 top-0 sticky z-50 backdrop-blur-sm layout flex items-center"
    >
      <div className="flex items-center justify-between w-full h-full">
        <Link href="/" className="text-xl font-bold">
          SNM | LWANT
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-7">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.label}
                className={cn(
                  "text-lg font-medium hover-effect",
                  pathName === link.link && "text-primary/80!"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
        <div className="lg:hidden">
          <MobileDrawer navLinks={navLinks} currentPath={pathName} />
        </div>
      </div>
    </motion.nav>
  );
};
