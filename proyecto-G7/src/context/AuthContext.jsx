import { createContext, useState, useContext, useEffect } from "react";
import {
  llamarRegisterUser,
  llamarLoginUser,
  llamarVerifyToken,
} from "../api/authCalls.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debería usarse dentro de context provider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (values) => {
    try {
      const res = await llamarRegisterUser(values);
      setUser(res.data);
      setIsAuth(true);
    } catch (err) {
      if (Array.isArray(err.response.data)) return setErrors(err.response.data);
      console.log(err);
      setErrors([err.response.data]);
    }
  };
  const signin = async (user) => {
    try {
      const res = await llamarLoginUser(user);
      setIsAuth(true);
      setUser(res.data);
    } catch (err) {
      console.log(err);
      if (Array.isArray(err.response.data)) return setErrors(err.response.data);
      setErrors([err.response.data]);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const verifyToken = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuth(false);
        setLoading(false)
        return setUser(null);
      }
        try {
          const res = await llamarVerifyToken();
          if (!res.data) {
            setIsAuth(false);
            setLoading(false);
            return;
          }

          setIsAuth(true);
          setUser(res.data);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setIsAuth(false);
          setUser(null);
          setLoading(false);
        }
      }
    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        loading,
        user,
        isAuth,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
