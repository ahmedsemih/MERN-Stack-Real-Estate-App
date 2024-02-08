import { useQuery } from "@apollo/client";
import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";
import { GET_USER } from "@/graphql/queries/users";

const AdminRoute = () => {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { _id: user?._id },
  });

  if (!loading) {
    if (data?.user.role !== "admin" || error) return <Navigate to="/" />;

    return <Outlet />;
  }
};
export default AdminRoute;
