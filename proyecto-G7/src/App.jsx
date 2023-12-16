//Componente principal de app //El entrypoint es main.jsx
//imports
import "./App.css"; //estilos generales
import { Routes, Route, BrowserRouter } from "react-router-dom"; //componentes de react-router-dom para enrutar la app
import Header from "./components/partials/HeaderComponent/Header";
import Footer from "./components/partials/FooterComponent/Footer";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ShopPage from "./pages/ShopPage";
import RegisterComp from "./components/RegisterComp";
import LoginComp from "./components/LoginComp";
import LogoutComp from "./components/LogoutComp";
import CreateComp from "./components/CreateComp";
import EditComp from "./components/EditComp";
import ItemPage from "./pages/ItemPage";
import { AuthProvider } from "./context/AuthContext"; //contexto para usuarios autorizados/no autorizados
import { ItemsProvider } from "./context/ItemsContext"; //contexto para estados y efectos generales de items
import ProtectedRoute from "./context/ProtectedRoute"; //componente protector de rutas // accede al estado del authcontext para validar el estado de validación de un usuario

//componente principal de la app
function App() {
  return (
    <ItemsProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/item" element={<ItemPage />} />
            <Route path="/register" element={<RegisterComp />} />
            <Route path="/login" element={<LoginComp />} />
            {/* AUTH ROUTES */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/logout" element={<LogoutComp />} />
              <Route path="/create" element={<CreateComp />} />
              <Route path="/update/:id" element={<EditComp />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ItemsProvider>
  );
}

export default App;
