//contexto que ofrece acceso a variables, estados, funciones y efectos generales de autorización de usuarios
//más sobre contexts en: https://react.dev/reference/react/useContext

//imports
import { createContext, useState, useContext, useEffect } from "react"; //imports de react
import { //llamados a la api (realizan peticiones http a cualquier servidor)
  llamarRegisterUser,
  llamarLoginUser,
  llamarLogout,
  llamarVerifyToken,
} from "../api/authCalls.js";
import Cookies from "js-cookie"; //acceso a las cookies del cliente

//creamos un contexto
const AuthContext = createContext();

//luego lo ponemos en uso. Esto permite a otros componentes, acceder al contexto provisto.
export const useAuth = () => { 
  const authContext = useContext(AuthContext);
  if (!authContext) { //error si falla, si no hay contexto
    throw new Error("useAuth debería usarse dentro del AuthContext.Provider");
  }
  return authContext;
};

//AuthProvider contendrá 'children' (otros componentes) que podrán acceder al contexto de este, mediante el uso de useAuth().
//Cuando se renderice, este componente otorgará a sus hijos acceso a cualquier valor que se le pase como parametro.
//al retornar, devolvemos un componente con nuestras funciones y estados en un parametro
//así: value={{ func1, func1, useState1, useState2, etc.. }}
//los efectos se activarán solos en cada hijo
//children son cualquier otro componente que se encuentre dentro de este. ver app.jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //estado de usuario
  const [isAuth, setIsAuth] = useState(false); //estado de autorizacion de usuario
  const [errors, setErrors] = useState([]); //estado de errores
  const [loading, setLoading] = useState(true); //estado para saber si esta procesando una autorizacion

  //signup & signin. Estas funciones llaman a la api declarada en el backend para que se hagan cargo de registrar comprobar datos de usuario.
  //Luego actualiza los estados user, isAuth y errors
  const signup = async (data) => {
    try {
      await llamarRegisterUser(data);
    } catch (err) {
      if (Array.isArray(err.response.data)){
      console.log(err);
      return setErrors(err.response.data);
      }
    }
  };

  const signin = async (data) => {
    try {
      const res = await llamarLoginUser(data);
      setIsAuth(true);
      setUser(res.data);
    } catch (err) {
      if (Array.isArray(err.response.data)) return setErrors([err.response.data]);
    }
  };
  
  const logout = async () => {
    try {
      await llamarLogout();
      setIsAuth(false)
      setUser(null)
    }catch (err){
      console.log(err)
    }
  }

  //este efecto borra los mensajes de errores en forms luego de 3 segundos.
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  //este efecto verifica un cliente contenga una cookie con un token que fue generado en el backend al loggearse dicho usuario.
  //si existe, comprueba su veracidad, si pasa la prueba settea el estado isAuth a true y carga los datos del usuario en el estado user.
  //si el servidor no devuelve los datos requeridos, tampoco le dará pase.
  useEffect(() => {
    const verifyToken = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuth(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await llamarVerifyToken();
        if (!res.data) {
          setIsAuth(false);
          setLoading(false);
          return setUser(null);
        }

        setIsAuth(true);
        setUser(res.data);
        setLoading(false);
      } catch (err) {
        setIsAuth(false);
        setUser(null);
        setLoading(false);
        console.log(err)
      }
    };
    verifyToken();
  }, []);

  //al retornar, devolvemos un componente con nuestras funciones y estados en un parametro
  //así: value={{ func1, func1, useState1, useState2, etc.. }}
  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
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
