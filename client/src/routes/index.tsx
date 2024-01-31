import { Routes, Route } from "react-router-dom";

import { Home, Login, Signup, CreateListing, Estate } from "../pages";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/estate/:slug" element={<Estate />} />
    </Routes>
  );
};

export default RoutesComponent;
