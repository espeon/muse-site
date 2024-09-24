"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun, LuSunMoon } from "react-icons/lu";
import { IconButton } from "./iconButton";

const other = (theme: string | undefined) => {
  if (theme === "dark") {
    return "light";
  } else {
    if (theme === "system" || theme === undefined) {
      console.log("Setting theme to system");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
      console.log("System matched", systemTheme.matches ? "light" : "dark")
      return systemTheme.matches ? "light" : "dark";
    } else {
      return "dark";
    }
  }
};

export const ColorToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  let isDark: boolean;
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    isDark = systemTheme.matches;
  } else {
    isDark = theme === "dark";
  }
  const DarkLightIcon = mounted ? (isDark ? LuMoon : LuSun) : LuSunMoon;
  return (
    // tailwindcss button
    <IconButton
      className="flex justify-center items-center p-3 w-10 h-10 bg-gray-200 rounded-full cursor-pointer dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="button"
      Icon={DarkLightIcon}
      onClick={() => {
        let o = other(theme)
        console.log("Setgting tgheme -", theme, o)
        setTheme(o);
      }}
    />
  );
};