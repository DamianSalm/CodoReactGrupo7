import "./NavBar.css"
import { Link } from "react-router-dom"
export const NavBar = () => {
  return(
    <nav className="nav">
      <img className="logo" src="../img/branding/logo_light_horizontal.svg"/>
      <Link>SALIR</Link>
    </nav>
  )
}