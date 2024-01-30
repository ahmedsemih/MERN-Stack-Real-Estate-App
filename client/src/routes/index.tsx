import { Routes, Route } from "react-router-dom";

import { Home, Login, Signup, CreateListing } from "../pages";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-listing" element={<CreateListing />} />
    </Routes>
  );
};

export default RoutesComponent;
