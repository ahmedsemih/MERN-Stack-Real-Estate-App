import { Outlet, Navigate } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";

const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (user) return <Outlet />;

  return <Navigate to="/login" />;
};

export default ProtectedRoute;
