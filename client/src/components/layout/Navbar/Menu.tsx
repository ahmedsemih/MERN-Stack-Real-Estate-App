import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdSettings, MdSpaceDashboard } from "react-icons/md";

import NavButton from "./NavButton";
import Searchbar from "./Searchbar";
import IconButton from "../../ui/IconButton";
import { BasicButton } from "@/components/ui";
import { useAuthStore } from "@/store/authStore";
import { LOGOUT } from "@/graphql/mutations/auths";
import { useThemeStore } from "@/store/themeStore";
import useSystemTheme from "@/hooks/useSystemTheme";
import { THEME_OPTIONS, USER_MENU_LINKS } from "@/utils/constants";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logout] = useMutation(LOGOUT);
  const { systemTheme } = useSystemTheme();
  const { user, logOut } = useAuthStore((state) => state);
  const { theme, setTheme } = useThemeStore((state) => state);

  const [isOpen, setIsOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);

  const handleLogout = () => {
    logOut();
    logout({ variables: { _id: user?._id } });
    closeAll();
    navigate("/");
  };

  const handleClickTheme = (theme: string) => {
    setTheme(theme);
    setIsPreferencesOpen(false);
  };

  const closeAll = () => {
    setIsOpen(false);
    setIsPreferencesOpen(false);
  };

  const handleNavigate = (link: string) => {
    navigate(link);
    closeAll();
  };

  return (
    <div className="md:hidden block relative">
      <IconButton
        onClick={() => setIsOpen((prev) => !prev)}
        text=""
        Icon={IoIosMenu}
        className={
          theme === "dark" ||
          (theme === "system" && systemTheme === "dark") ||
          location.pathname === "/"
            ? "text-white hover:opacity-70"
            : "text-primary hover:text-secondary"
        }
      />
      <div
        className={`absolute w-screen sm:w-[360px] p-4 sm:right-0 -right-4 transition-all duration-500 bg-bgColor-soft sm:rounded-lg ${
          isOpen ? "top-20" : "-top-[1000px]"
        } `}
      >
        <Searchbar onWelcome={false} closeAll={closeAll} />
        <div className="pt-4 flex flex-col gap-2">
          <BasicButton
            onClick={() => handleNavigate("/create-listing")}
            variant="contained"
            radius="small"
          >
            New Listing
          </BasicButton>
          {!user ? (
            <BasicButton
              onClick={() => handleNavigate("/login")}
              variant="outlined"
              radius="small"
            >
              Login
            </BasicButton>
          ) : (
            <div>
              {USER_MENU_LINKS.map((link) => (
                <NavButton
                  key={link.name}
                  Icon={link.icon}
                  name={link.name}
                  onClick={() => {
                    handleNavigate(`/${link.name}`);
                  }}
                />
              ))}
              {user.role === "admin" && (
                <NavButton
                  Icon={MdSpaceDashboard}
                  name="Admin Panel"
                  onClick={() => handleNavigate(`/admin`)}
                />
              )}
              <div className="relative w-full">
                <button
                  onClick={() => setIsPreferencesOpen((prev) => !prev)}
                  className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full"
                >
                  <MdSettings />
                  Theme
                </button>
                {isPreferencesOpen && (
                  <div className="absolute w-full left-0 px-3 top-8">
                    <div className="bg-bgColor-soft rounded-lg p-2">
                      {THEME_OPTIONS.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleClickTheme(option)}
                          className={`flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full capitalize ${
                            theme === option && "bg-borderColor"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <NavButton Icon={MdLogout} name="logout" onClick={handleLogout} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
