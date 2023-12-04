import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <Link to='/shop' className="navbar__link" >SHOP</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/register' className="navbar__link" >REGISTRARSE</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/login' className="navbar__link" >LOGIN</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to='/contact' className="navbar__link" >CONTACTO</Link>
                    </li>
                </ul>
                <picture>
                    <Link to='/' >
                        <img src={"../img/branding/isotype.svg"} alt="Isotipo de la marca Funkoshop"/>
                    </Link>
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
        </footer>
    )
}

export default Footer