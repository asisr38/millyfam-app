"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      variant="outline"
      className="relative h-9 w-9 rounded-full border border-primary bg-background hover:bg-accent hover:text-accent-foreground"
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Sun
        size={18}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-primary dark:-rotate-90 dark:scale-0"
        strokeWidth={2.5}
      />
      <Moon
        size={18}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-primary dark:rotate-0 dark:scale-100"
        strokeWidth={2.5}
      />
    </Toggle>
  );
} 