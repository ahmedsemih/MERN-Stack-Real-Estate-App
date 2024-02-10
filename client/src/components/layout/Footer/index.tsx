import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";

import { Type } from "@/types";
import { Logo } from "@/components/common";
import { useThemeStore } from "@/store/themeStore";
import { GET_TYPES } from "@/graphql/queries/types";
import useSystemTheme from "@/hooks/useSystemTheme";

const Footer = () => {
  const location = useLocation();
  const { data } = useQuery(GET_TYPES);
  const { systemTheme } = useSystemTheme();
  const theme = useThemeStore((state) => state.theme);

  if (location.pathname === "/login" || location.pathname === "/signup")
    return null;

  return (
    <footer
      className={`flex flex-col border-t border-borderColor pt-8 ${
        theme === "dark" || (theme === "system" && systemTheme === "dark")
          ? "bg-bgColor "
          : "bg-bgColor-soft"
      }`}
    >
      <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xl:gap-16 gap-8 md:py-8 xl:w-2/3 lg:w-4/5 w-full py-4 lg:px-0 lg:mx-auto md:px-8 px-4 ">
        <div className="flex flex-col xl:col-span-3 sm:col-span-2 col-span-1 sm:items-start items-center">
          <Logo
            width={160}
            fixedTheme={
              theme === "dark" || (theme === "system" && systemTheme === "dark")
                ? "dark"
                : "light"
            }
          />
          <p className="text-lg mt-4 text-textColor-soft sm:text-start text-center">
            EstateHub is a MERN-Stack real estate application. Built with React,
            Nodejs, Express, Mongodb and Graphql.
          </p>
        </div>
        <div className="flex justify-between sm:col-span-2 col-span-1 sm:flex-row flex-col gap-8">
          <div className="flex flex-col sm:items-start items-center">
            <h3 className="text-2xl font-semibold">Privacy and Use</h3>
            <p className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer">
              Terms of Use
            </p>
            <p className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer">
              Cookie Management
            </p>
            <p className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer">
              Membership Agreement
            </p>
            <p className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer">
              Agreements and Rules
            </p>
          </div>
          <div className="flex flex-col sm:items-start items-center">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <Link
              to={"/search?category=sale"}
              className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer"
            >
              Sale
            </Link>
            <Link
              to={"/search?category=rent"}
              className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer"
            >
              Rent
            </Link>
            {data?.types.map((type: Type) => (
              <Link
                className="text-lg hover:text-textColor text-textColor-soft transition-all duration-200 cursor-pointer capitalize"
                key={type._id}
                to={`/search?category=sale&type=${type._id}`}
              >
                {type.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor">
        <div className="xl:w-2/3 lg:w-4/5 w-full py-4 lg:px-0 lg:mx-auto md:px-8 px-4 flex sm:flex-row flex-col gap-4 justify-between items-center md:text-xl text-sm ">
          <p>© 2023 EstateHub, Inc.</p>
          <p>
            Created by{" "}
            <Link
              className="italic transition-all duration-200 hover:text-primary"
              to="https://github.com/ahmedsemih"
              target="_blank"
            >
              Ahmed Semih Erkan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
