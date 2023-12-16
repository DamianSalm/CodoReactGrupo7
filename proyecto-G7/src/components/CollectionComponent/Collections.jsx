import "./Collections.css";
import { Link } from "react-router-dom"

const Collections = () => {
    return (
        <main className="main-container">
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">Star Wars & The Mandalorian</h3>
                <p className="collection__text">Disfruta de una saga que sigue agregando personajes a su colección.</p>
                <Link to="/item" className="collection__link">VER COLECCIÓN</Link>
            </article>
            <picture className="collection__cover">
                <img src="./images/star-wars/baby-yoda-1.webp" alt="Figura coleccionable Funko de Grogu de la serie The Mandalorian"/>
            </picture>
        </section>
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">POKEMON INDIGO</h3>
                <p className="collection__text">Atrapa todos los que puedas y disfruta de una colección llena de amigos.</p>
                <Link to="/item" className="collection__link">VER COLECCIÓN</Link>
            </article>
            <picture className="collection__cover">
                <img src="./images/pokemon/vulpix-1.webp" alt="Figura coleccionable Funko de Vulpix de la serie Pokemon"/>
            </picture>
        </section>
        <section className="collection container">
            <article className="collection__content">
                <h3 className="collection__title">HARRY POTTER</h3>
                <p className="collection__text">Revive los recuerdos de una saga llena de magia y encanto.</p>
                <Link to="/item" className="collection__link">VER COLECCIÓN</Link>
            </article>
            <picture className="collection__cover">
                <img src="./images/harry-potter/snape-patronus-1.webp" alt="Figura coleccionable Funko del Patronus de Snape en la película de Harry Potter"/>
            </picture>
        </section>
    </main>
    )
}

export default Collections