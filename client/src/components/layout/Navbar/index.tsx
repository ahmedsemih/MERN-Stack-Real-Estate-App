import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";

import { BasicButton } from "@/components/ui";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import Searchbar from "./Searchbar";
import { Logo } from "@/components/common";
import { useAuthStore } from "@/store/authStore";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
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

    if(location.pathname === '/'){
      if (scrollPosition > 160)
        return navRef.current?.classList.add(
          "bg-bgColor",
          "shadow-md",
        );
  
      navRef.current?.classList.remove("bg-bgColor", "shadow-md");
    }
  }, [y, location.pathname]);

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
      className={`w-full sticky top-0 transition-all duration-500 z-50  border-borderColor ${ location.pathname !== '/' && 'bg-bgColor shadow-md border-b'}`}
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
              variant="contained"
              className="border-2 border-white bg-transparent hover:bg-white hover:text-primary"
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
