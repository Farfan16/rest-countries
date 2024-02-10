"use client";

import React, { useEffect } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>Loading...</p>;
  if (resolvedTheme === "dark") {
    return (
      <div
        id="DarkModeSwitch"
        className="flex flex-row items-center justify-center gap-2 cursor-pointer group"
        onClick={() => setTheme("light")}
      >
        <FaMoon
          size={14}
          className="animate-spin-appear group-active:animate-spin-dissolve"
        />
        <p className="text-xs font-semibold animate-appear group-active:animate-dissolve">
          Dark Mode
        </p>
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div
        id="DarkModeSwitch"
        className="flex flex-row items-center justify-center gap-2 cursor-pointer group"
        onClick={() => setTheme("dark")}
      >
        <FaRegSun
          size={14}
          className="animate-spin-appear group-active:animate-spin-dissolve"
        />
        <p className="text-xs font-semibold animate-appear group-active:animate-dissolve">
          Light Mode
        </p>
      </div>
    );
  }
};

export default ThemeSwitcher;
