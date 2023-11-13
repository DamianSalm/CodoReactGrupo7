import { Navigate } from "react-router-dom";
import { llamarLogout } from "../api/authCalls";
import { useAuth } from "../context/AuthContext";

const LogoutComp = () => {
  
  const { isAuth } = useAuth();
  if (isAuth) {
    llamarLogout()
    const fun = async () => {
      await setTimeout(() => {return <Navigate to="/"/>}, 5000)
    }
    
  }
  return (
    <>
      <h1>logging out?</h1>
    </>
  );
};

export default LogoutComp;
