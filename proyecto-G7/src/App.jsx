import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/partials/HeaderComponent/Header";
import Footer from "./components/partials/FooterComponent/Footer";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import RegisterComp from "./components/RegisterComp";
import LoginComp from "./components/LoginComp";
import LogoutComp from "./components/LogoutComp";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/register" element={<RegisterComp />} />
          <Route path="/login" element={<LoginComp />} />
          {/* AUTH ROUTES */}
        <Route element={<ProtectedRoute />} >
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/logout" element={<LogoutComp />} />
        </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
