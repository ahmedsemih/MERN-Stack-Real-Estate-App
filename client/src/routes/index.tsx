import { Routes, Route } from "react-router-dom";

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
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";

const RoutesComponent = () => {
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
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
