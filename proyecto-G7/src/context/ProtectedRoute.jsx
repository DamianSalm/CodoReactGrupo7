import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { loading, isAuth } = useAuth();
  console.log(loading, isAuth);

  if (loading) return <h1>Loading...</h1>
  if (!loading && !isAuth) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
