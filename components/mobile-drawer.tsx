"use client";

import { Monitor, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMenu } from "@tabler/icons-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  navLinks: { label: string; link: string }[];
  currentPath: string;
}

export const MobileDrawer = ({ navLinks, currentPath }: MobileDrawerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <IconMenu className="size-7 md:size-8 text-muted-foreground" />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85vw] md:w-[400px] bg-foreground p-0 top-4 bottom-4 right-2 h-[calc(100vh-32px)] rounded-md"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        {/* Header */}
        <div className="flex items-center justify-end pt-3 md:pt-5 px-2 border-b-2 border-border">
          <SheetClose asChild>
            <X className="size-7 md:size-8 text-muted-foreground" />
          </SheetClose>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.link}>
              <Link
                href={link.link}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl text-base md:text-lg font-medium transition-colors",
                  currentPath === link.link
                    ? "text-primary/80 bg-background"
                    : "text-muted-foreground hover:text-primary/80 hover:bg-background/5",
                )}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-border">
          <h2 className="text-base md:text-lg text-muted-foreground">
            Theme Toggle
          </h2>

          {/* Theme Toggle */}
          {mounted && (
            <div className="flex items-center gap-1 bg-background/10 rounded-md p-1">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => setTheme(option.value)}
                    className={cn(
                      "size-9 md:size-10 rounded-xl flex items-center justify-center transition-colors",
                      theme === option.value
                        ? "bg-background text-primary/80"
                        : "text-muted-foreground hover:text-primary/80",
                    )}
                    aria-label={`Set ${option.value} theme`}
                  >
                    <Icon className="size-5 md:size-6" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </SheetContent>
      <SheetDescription className="sr-only">Open mobile menu</SheetDescription>
    </Sheet>
  );
};
