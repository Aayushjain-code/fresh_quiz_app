import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const RestrictAuth = () => {
  const { authData } = useAuth();
  const userId = authData._id;
  const location = useLocation();

  return userId ? (
    <Navigate
      to={`${
        location?.state?.from?.pathname ? location?.state?.from?.pathname : "/"
      }`}
      replace
    />
  ) : (
    <Outlet />
  );
};
