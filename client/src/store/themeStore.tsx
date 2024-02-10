import { create } from "zustand";

type State = {
  theme: "system" | "dark" | "light" | string;
};

type Actions = {
  setTheme(theme: State["theme"]): void;
};

export const useThemeStore = create<State & Actions>((set) => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const currentTheme =
    storedTheme === "light"
      ? "light"
      : storedTheme === "system"
      ? "system"
      : "dark";
  const htmlEl = document.querySelector("html");

  if (currentTheme !== "system") {
    htmlEl?.setAttribute("data-theme", currentTheme);
  }

  return {
    theme: currentTheme,
    setTheme: (theme: State["theme"]) =>
      set((state) => {
        htmlEl?.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        return { ...state, theme };
      }),
  };
});
