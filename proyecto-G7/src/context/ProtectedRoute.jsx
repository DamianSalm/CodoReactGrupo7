import { Navigate, Outlet } from "react-router-dom"; //navigate permite ir a otra ruta y outlet te permite renderizar un elemento children
import { useAuth } from "./AuthContext";

//este componente tan solo checkeará el estado de isAuth ( en el contexto ) y retornará un loading si se está procesando una autorizacion de usuario
//retornará '''return <Navigate to="/login" replace''' si isAuth es false, sugiriendo que aún debes logearte
const ProtectedRoute = () => {
  const { loading, isAuth } = useAuth(); //llamamos estados del AuthContext
  if (loading) return <h1>Loading...</h1>; //loading
  if (!loading && !isAuth) return <Navigate to="/login" replace />; //you're not prepared
  return <Outlet />; //si llegaste hasta aquí, te has ganado un children. <Outlet /> renderiza un componente children
};

export default ProtectedRoute;
