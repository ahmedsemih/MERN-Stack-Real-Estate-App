import { Link, useLocation } from "react-router-dom";
import { useThemeStore } from "../../store/themeStore";

const Logo = ({ width = 160 }: { width: number }) => {
  const location = useLocation();
  const theme = useThemeStore((state) => state.theme);

  if (
    location.pathname === "/" ||
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
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
