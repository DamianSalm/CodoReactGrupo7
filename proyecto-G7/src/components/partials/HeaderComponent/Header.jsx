import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { isAuth } = useAuth();

  return (
    <header className="page-header">
      <nav className="navbar container">
        <picture className="nabvar__logo">
          <Link to="/">
            <img
              src={"/images/branding/logo_light_horizontal.svg"}
              alt="Isologotipo de la Marca Funkoshop"
            />
          </Link>
        </picture>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/shop" className="navbar__link">
              Shop
            </Link>
          </li>
          {isAuth ? (
            <>
              <li className="navbar__item">
                <Link to="/logout" className="navbar__link">
                  Logout
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/admin" className="navbar__link">
                  Lista Productos
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar__item">
                <Link to="/register" className="navbar__link">
                  Register
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/login" className="navbar__link">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
