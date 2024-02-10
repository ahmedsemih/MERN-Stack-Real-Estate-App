import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import useSystemTheme from "@/hooks/useSystemTheme";
import { useThemeStore } from "../../store/themeStore";

type Props = {
  width: number;
  fixedTheme?: "dark" | "light";
};

const Logo: FC<Props> = ({ width, fixedTheme }) => {
  const location = useLocation();
  const { systemTheme } = useSystemTheme();
  const theme = useThemeStore((state) => state.theme);

  if (fixedTheme === "light")
    return (
      <Link to="/">
        <img src="/assets/logo-light.png" alt="estate-hub" width={width} />
      </Link>
    );
  else if (fixedTheme === "dark")
    return (
      <Link to="/">
        <img src="/assets/logo-dark.png" alt="estate-hub" width={width} />
      </Link>
    );

  if (
    location.pathname === "/" ||
    theme === "dark" ||
    (theme === "system" && systemTheme === "dark")
  )
    return (
      <Link to="/">
        <img src="/assets/logo-dark.png" alt="estate-hub" width={width} />
      </Link>
    );

  return (
    <Link to="/">
      <img src="/assets/logo-light.png" alt="estate-hub" width={width} />
    </Link>
  );
};

export default Logo;
