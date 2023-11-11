import './Header.css'

function Header () {
    return (
        <header className="page-header">
            <nav className="navbar container">
                <picture className="nabvar__logo">
                    <a href="">
                        <img src={"/images/branding/logo_light_horizontal.svg"} alt="Isologotipo de la Marca Funkoshop" />
                    </a>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Shop</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">contacto</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">login</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__cart">
                            <img src={"/images/icons/cart-icon.svg"} alt="icono de carrito" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header