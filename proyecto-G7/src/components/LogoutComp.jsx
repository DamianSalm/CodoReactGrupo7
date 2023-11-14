import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogoutComp = () => {
  const { isAuth, logout } = useAuth();
  if (isAuth) {
    try {
      logout();
      const fun = () => {
        setTimeout(() => {
          return <Navigate to="/" />;
        }, 5000);
      };
      fun();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h1>logging out?</h1>
    </>
  );
};

export default LogoutComp;
