import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import Menu from "./Menu";
import UserMenu from "./UserMenu";
import Searchbar from "./Searchbar";
import { Logo } from "@/components/common";
import { BasicButton } from "@/components/ui";
import { useAuthStore } from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import useSystemTheme from "@/hooks/useSystemTheme";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { systemTheme } = useSystemTheme();
  const user = useAuthStore((state) => state.user);
  const theme = useThemeStore((state) => state.theme);

  const [y, setY] = useState(document.scrollingElement?.scrollHeight || 0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (y > scrollPosition) {
      navRef.current?.classList.remove("-top-96");
      navRef.current?.classList.add("top-0");
    } else {
      navRef.current?.classList.add("-top-96");
      navRef.current?.classList.remove("top-0");
    }

    setY(scrollPosition);

    if (location.pathname !== "/") return;

    if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
      if (scrollPosition > 160)
        return navRef.current?.classList.add("bg-bgColor", "shadow-md");

      return navRef.current?.classList.remove("bg-bgColor", "shadow-md");
    }

    if (scrollPosition > 160)
      return navRef.current?.classList.add("bg-secondary");

    navRef.current?.classList.remove("bg-secondary");
  }, [y, location.pathname, theme, systemTheme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (location.pathname === "/login" || location.pathname === "/signup")
    return null;

  return (
    <header
      ref={navRef}
      className={`w-full sticky top-0 transition-all duration-500 z-50  border-borderColor ${
        location.pathname !== "/" &&
        (theme === "dark" || (theme === "system" && systemTheme === "dark")
          ? "bg-bgColor border-b"
          : "bg-bgColor-soft border-b")
      }`}
    >
      <nav className="flex justify-between items-center xl:w-2/3 lg:w-4/5 w-full py-4 lg:px-0 lg:mx-auto md:px-8 px-4">
        <Logo width={160} />
        <div className="md:block hidden">
          {location.pathname !== "/" && <Searchbar onWelcome={false} />}
        </div>
        <Menu />
        <div className="md:flex hidden gap-2">
          {user ? (
            <UserMenu />
          ) : (
            <BasicButton
              onClick={() => {
                navigate("/login");
              }}
              variant="outlined"
              className={
                theme === "dark" ||
                (theme === "system" && systemTheme === "dark") ||
                location.pathname === "/"
                  ? "border-2 text-white border-white hover:text-primary hover:bg-white hover:border-white bg-transparent"
                  : "border-2 text-primary bg-transparent border-primary hover:text-white hover:bg-primary hover:border-primary"
              }
            >
              Login
            </BasicButton>
          )}
          <BasicButton
            onClick={() => {
              navigate("/create-listing");
            }}
            variant="contained"
          >
            New Listing
          </BasicButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
