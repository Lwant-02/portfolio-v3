"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { MobileDrawer } from "./mobile-drawer";

const navLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Activity",
    link: "/activity",
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
    <nav className="w-full bg-background h-20 top-0 sticky z-50 backdrop-blur-sm layout flex items-center">
      <div className="flex items-center justify-between w-full h-full">
        <Link href="/" className="text-xl font-bold">
          SNM | LWANT
        </Link>
        <div className="hidden lg:flex justify-center items-center gap-8">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                href={link.link}
                key={link.label}
                className={cn(
                  "text-muted-foreground text-lg font-medium hover:text-primary/80",
                  pathName === link.link && "text-primary/80"
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
    </nav>
  );
};
