import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";
import { REAUTHENTICATE } from "@/graphql/queries/users";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuthStore((state) => state);
  const [reauthenticate] = useLazyQuery(REAUTHENTICATE, {
    onCompleted: ({ reauthenticate }) => {
      if (!reauthenticate) {
        logOut();
        navigate("/login");
      }
    },
    fetchPolicy: "no-cache",
  });

  const userCookie = Cookies.get("user");

  useEffect(() => {
    if (!userCookie) reauthenticate();
  }, [userCookie]);

  if (user) return <Outlet />;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
