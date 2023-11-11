import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/shop/shop.html">SHOP</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/register.html">REGISTRARSE</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/admin/login.html">LOGIN</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/contact.html">CONTACTO</a>
                    </li>
                </ul>
                <picture>
                    <img src={"../images/branding/isotype.svg"} alt="Isotipo de la marca Funkoshop"/>
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
        </footer>
    )
}

export default Footer