import { Link } from "react-router-dom"

export const NavbarComp = () => {
  return(
    <>
    <nav className="nav">
      <Link to={'/'}>
      <img src="./img/branding/logo_light_horizontal.svg" alt="logo-funkoshop" />
      </Link>
      <ul>
        <Link to={'/shop'}>SHOP</Link>
        <Link to={'/contacto'}>CONTACTO</Link>
        <Link to={'/login'}>LOGIN</Link>
      </ul>
    </nav>
  </>
  )
}
