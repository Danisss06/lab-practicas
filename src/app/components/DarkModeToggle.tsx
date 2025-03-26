"use client";

import { useDarkMode } from "@/app/hooks/useDarkMode";

export default function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg transition-colors w-36 border"
      style={{
        backgroundColor: "var(--darkmode-btn-bg)",
        color: "var(--darkmode-btn-text)",
        borderColor: "var(--darkmode-btn-border)",
      }}
    >
      {isDarkMode ? '☀️ Tema Claro' : '🌙 Tema Oscuro'}
    </button>
  );
}
