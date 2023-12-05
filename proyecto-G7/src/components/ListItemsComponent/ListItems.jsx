import './ListItems.css'
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";
import { Filter } from "../FilterComponent/Filter";

const ListItems = () => {
    const { data } = useFetch('http://localhost:3000/products');

    return (
        <main className='container' id='shop'>
            <Filter/>

            <section className="shop__content">
                <ul className="shop__items">
                    {
                        data?.map((item) => {
                            return (<li className="shop__item" key={item.poduct_id}>
                                <article className='card-item'>
                                    <Link className='card-item__link'>
                                        <picture className="card-item__cover">
                                            <span className="card-item__tag">nuevo</span>
                                            <img src={`./img/${item.image_front}`} alt={`Figura coleccionable Funko de un ${item.product_name}`} />
                                            <img src={`./img/${item.image_back}`} alt={`Figura coleccionable Funko de un ${item.product_name} en caja`} />
                                        </picture>
                                        <div>
                                            <p className="card-item__">{item.licence_id}</p>
                                            <h4 className="card-item__name">{item.product_name}</h4>
                                            <p className="card-item__price">{item.price}</p>
                                            <p className="card-item__promo"></p>
                                        </div>
                                    </Link>
                                </article>
                            </li>)
                        })
                    }
                </ul>
                <div className="pagination"></div>
            </section>
        </main>
    )
}

export default ListItems