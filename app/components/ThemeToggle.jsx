'use client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // avoid hydration errors
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleClick(e) {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <button
        className="border-0 rounded-full text-2xl p-1 mb-2 transition hover:animate-pulse"
        onClick={(e) => handleClick(e)}
      >
        {theme === "light" ? "🌞" : "🌚"}
      </button>
    </div>
  );
}
