"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      w-11
      h-11
      rounded-full
      border
      border-slate-700
      flex
      items-center
      justify-center
      hover:border-cyan-400
      transition
      "
    >
      {theme === "dark" ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </button>
  );
}