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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
