import { Routes, Route, Link } from "react-router-dom"
import { LoginComp } from './LoginComp.jsx'
import { ListaProducto } from './ListaProducto.jsx'
import { Create } from "./Create"
import "./NavbarComp.css"

export const NavbarComp = () => {
  return(
    <>
      <nav className="nav">
        <Link to="/">
          <img className="logo" src="./img/branding/logo_light_horizontal.svg" alt="logo-funkoshop" />
        </Link>
        <ul className="algo">
          <Link to="/shop">SHOP</Link>
          <Link to="/contacto" >CONTACTO</Link>
          <Link to="/login">LOGIN</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/shop" element={<ListaProducto />} />
        <Route path="/contacto" />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/create" element={<Create />} />
      </Routes>
  </>
  )
}
