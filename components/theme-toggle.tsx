"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(
    () => setLight(document.documentElement.dataset.theme === "light"),
    [],
  );
  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
  }
  return (
    <button
      className="icon-button"
      onClick={toggle}
      aria-label="Toggle color theme"
    >
      {light ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
