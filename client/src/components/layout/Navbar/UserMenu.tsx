import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLogout, MdSettings, MdSpaceDashboard } from "react-icons/md";

import { useAuthStore } from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";
import { LOGOUT } from "@/graphql/mutations/auths";
import useSystemTheme from "@/hooks/useSystemTheme";
import { THEME_OPTIONS, USER_MENU_LINKS } from "@/utils/constants";

const UserMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [logout] = useMutation(LOGOUT);
  const { systemTheme } = useSystemTheme();
  const { user, logOut } = useAuthStore((state) => state);
  const { theme, setTheme } = useThemeStore((state) => state);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState<boolean>(false);

  const handleLogout = () => {
    logOut();
    logout({ variables: { _id: user?._id } });
    setIsOpen(false);
    navigate("/");
  };

  const handleClick = (link: string) => {
    return navigate(`/${link}`);
  };

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="block relative"
    >
      <button
        className={`border-2 px-4 py-2 font-semibold rounded-2xl transition-all duration-200  ${
          theme === "dark" ||
          (theme === "system" && systemTheme === "dark") ||
          location.pathname === "/"
            ? "text-white border-white hover:text-primary hover:bg-white hover:border-white"
            : "text-primary border-primary hover:text-white hover:bg-primary hover:border-primary"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Account
      </button>
      <div
        className={`absolute transition-all duration-500 bg-bgColor-soft p-2 rounded-lg right-0 ${
          isOpen ? "top-12" : "-top-96"
        } `}
      >
        {USER_MENU_LINKS.map((link) => (
          <button
            key={link.name}
            className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full capitalize"
            onClick={() => handleClick(link.name)}
          >
            <link.icon />
            {link.name}
          </button>
        ))}
        {user?.role === "admin" && (
          <button
            className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full capitalize"
            onClick={() => handleClick("admin")}
          >
            <MdSpaceDashboard />
            Admin Panel
          </button>
        )}
        <div
          onMouseEnter={() => setIsPreferencesOpen(true)}
          onMouseLeave={() => setIsPreferencesOpen(false)}
          className="relative w-full"
        >
          <button
            onClick={() => setIsPreferencesOpen((prev) => !prev)}
            className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full"
          >
            <MdSettings />
            Theme
          </button>
          {isPreferencesOpen && (
            <div className="absolute right-44 px-3 top-0">
              <div className="bg-bgColor-soft rounded-lg p-2">
                {THEME_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => setTheme(option)}
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
        <hr className="border-borderColor my-2" />
        <button
          onClick={handleLogout}
          className="flex gap-3 items-center text-xl hover:bg-borderColor py-2 px-4 rounded-lg w-full"
        >
          <MdLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
