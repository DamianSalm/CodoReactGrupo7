const ItemPage = () => {
  return (
    <div className="container">
        <section className="item">
            <picture className="item__img card-item__cover">
                <img className="card-item__img--front" src="../../img/laimagen"
                    alt="Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga"/>
                <img className="card-item__img--back" src="../../im/laimagen"
                    alt="Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga"/>
            </picture>
            <article className="item__info">
                <p className="item__licence">licencia</p>
                <h3 className="item__name">nombre</h3>
                <p className="item__description">descripcion</p>
                <p className="item__price">$ precio</p>
                <form className="item__cart" action="#" method="POST" enctype="application/x-www-form-urlencoded">
                    <button id="subtract" className="item__quantity" type="button">-</button>
                    <input id="quantity" className="item__input" type="text" name="quantity" placeholder="0"/>
                    <button id="add" className="item__quantity" type="button">+</button>
                    <button className="item__submit btn btn--primary btn--medium" type="submit">Agregar al
                        carrito</button>
                </form>
                <p className="item__promo"><a href="">Ver métodos de pago</a> - dues CUOTAS SIN INTERÉS</p>
            </article>
        </section>
    {/*<section className="glide slider container">
        <h2 className="slider__title">Productos Relacionados</h2>
        <div className="glide__track" data-glide-el="track">
            <ul className="slider__items glide__slides">
                <li className="slider__item glide__slide">
                    <article className="card-item">
                        <a className="card-item__link" href="">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/star-wars/trooper-1.webp"
                                    alt="Figura coleccionable Funko de un Stormtrooper">
                                <img className="card-item__img--back" src="../../img/star-wars/trooper-box.webp"
                                    alt="Figura coleccionable Funko de un Stormtrooper en caja">
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">STAR WARS</p>
                                <h4 className="card-item__name">STORMTROOPER LIGHTSABER</h4>
                                <p className="card-item__price">$ 1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERÉS</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item glide__slide">
                    <article className="card-item">
                        <a className="card-item__link" href="">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/pokemon/pidgeotto-1.webp"
                                    alt="Figura coleccionable Funko de Pidgeotto">
                                <img className="card-item__img--back" src="../../img/pokemon/pidgeotto-box.webp"
                                    alt="Figura coleccionable Funko de Pidgeotto en caja">
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">POKEMON</p>
                                <h4 className="card-item__name">PIDGEOTTO</h4>
                                <p className="card-item__price">$ 1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERÉS</p>
                            </div>
                        </a>
                    </article>
                </li>
                <li className="slider__item glide__slide">
                    <article className="card-item">
                        <a className="card-item__link" href="">
                            <picture className="card-item__cover">
                                <span className="card-item__tag">Nuevo</span>
                                <img className="card-item__img--front" src="../../img/harry-potter/luna-1.webp"
                                    alt="Figura coleccionable Funko de Luna Lovegood">
                                <img className="card-item__img--back" src="../../img/harry-potter/luna-box.webp"
                                    alt="Figura coleccionable Funko de Luna Lovegood en caja">
                            </picture>
                            <div className="card-item__content">
                                <p className="card-item__licence">HARRY POTTER</p>
                                <h4 className="card-item__name">LUNA LOVEGOOD LION MASK</h4>
                                <p className="card-item__price">$ 1799,99.-</p>
                                <p className="card-item__promo">3 CUOTAS SIN INTERÉS</p>
                            </div>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><iconify-icon
                    icon="tabler:chevron-left"></iconify-icon></button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><iconify-icon
                    icon="tabler:chevron-right"></iconify-icon></button>
        </div>
    </section>*/}
    </div>
  )
}

export default ItemPage