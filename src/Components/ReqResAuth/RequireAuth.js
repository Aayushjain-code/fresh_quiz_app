import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RequireAuth = () => {
  const { authData } = useAuth();
  const userId = authData._id;
  const location = useLocation();

  return userId ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
