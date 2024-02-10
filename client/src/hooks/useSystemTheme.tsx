import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark")
      ? setSystemTheme("dark")
      : setSystemTheme("light");
  }, []);

  return { systemTheme };
};

export default useSystemTheme;
