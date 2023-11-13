import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="page-header">
            <nav className="navbar container">
                <picture className="nabvar__logo">
                    <Link to='/'>
                        <img src={"/images/branding/logo_light_horizontal.svg"} alt="Isologotipo de la Marca Funkoshop" />
                    </Link>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to='/shop' className="navbar__link">Shop</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/contact' className="navbar__link">contacto</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/login' className="navbar__link">login</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/logout' className="navbar__link">logout</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/cart' className="navbar__cart">
                            <img src={"/images/icons/cart-icon.svg"} alt="icono de carrito" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header