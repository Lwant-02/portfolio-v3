"use client";
import { Monitor, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-10 rounded-md animate-pulse bg-foreground" />;
  }

  const isDark = resolvedTheme === "dark";

  const themes = [
    {
      value: "light",
      label: "Light",
      icon: SunIcon,
    },
    {
      value: "dark",
      label: "Dark",
      icon: MoonIcon,
    },
    {
      value: "system",
      label: "System",
      icon: Monitor,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="size-10 cursor-pointer rounded-md flex items-center justify-center
                     hover:bg-foreground transition-colors duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <MoonIcon className="size-6 text-muted-foreground" />
          ) : (
            <SunIcon className="size-6 text-muted-foreground" />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-36 rounded-md p-1.5 border border-blue-300/30 bg-background"
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isActive = theme === themeOption.value;

          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={cn(
                "flex items-center gap-2 p-2 rounded-md cursor-pointer text-muted-foreground hover:bg-foreground hover:text-primary/80 transition-colors duration-150",
                isActive && "text-primary/80"
              )}
            >
              <Icon className="size-5 hover:text-primary/80" />
              <span className="text-base">{themeOption.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
