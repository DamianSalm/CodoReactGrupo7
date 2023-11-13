import "./Banner.css"

const Banner = () => {
    return(
        <section className="hero">
            <article className="hero__content container">
                <h3 className="hero__title">Nuevos Ingresos</h3>
                <p className="hero__text">Descubrí el próximo Funko Pop de tu colección</p>
                <a className="hero__link" href="/shop">SHOP</a>
            </article>
        </section>
    )
}

export default Banner