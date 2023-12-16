import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Footer = () => {
    const { isAuth } = useAuth();

    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <Link to='/shop' className="navbar__link" >SHOP</Link>
                    </li>
                    {isAuth ? (
                        <></>
                        ) : 
                        (<>
                            <li className="navbar__item">
                                <Link to='/register' className="navbar__link" >REGISTRARSE</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to='/login' className="navbar__link" >LOGIN</Link>
                            </li>
                        </>)
                    }
                </ul>
                <picture>
                    <Link to='/' >
                        <img src={"../images/branding/isotype.svg"} alt="Isotipo de la marca Funkoshop"/>
                    </Link>
                </picture>
            </nav>
            <p className="footer__copy">All rights reserved 2023 - Funkoshop &copy;</p>
        </footer>
    )
}

export default Footer