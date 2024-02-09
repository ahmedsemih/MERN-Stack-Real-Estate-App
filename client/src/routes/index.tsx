import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  CreateListing,
  Estate,
  Listigns,
  Favorites,
  Account,
  Seller,
  EditListing,
  Notifications,
  Search,
  Admin,
} from "../pages";
import AdminRoute from "./AdminRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useAuthStore } from "@/store/authStore";
import { REAUTHENTICATE } from "@/graphql/queries/users";

const RoutesComponent = () => {
  const navigate = useNavigate();
  const logOut = useAuthStore((state) => state.logOut);

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
    if (!userCookie || userCookie === undefined) reauthenticate();
  }, [userCookie]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Search />} />
      <Route path="/estate/:slug/:id" element={<Estate />} />
      <Route path="/seller/:slug/:id" element={<Seller />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<Account />} />
        <Route path="/listings" element={<Listigns />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/edit" element={<EditListing />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
