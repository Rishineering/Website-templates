"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type LuxuryTheme = "dark" | "light";

interface ThemeContextValue {
  theme: LuxuryTheme;
  toggleTheme: () => void;
  setTheme: (theme: LuxuryTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<LuxuryTheme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("vedic-luxury-theme") as LuxuryTheme | null;
    const initial: LuxuryTheme = saved === "light" ? "light" : "dark";
    setThemeState(initial);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(initial);
  }, []);

  const setTheme = (nextTheme: LuxuryTheme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem("vedic-luxury-theme", nextTheme);
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(nextTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
