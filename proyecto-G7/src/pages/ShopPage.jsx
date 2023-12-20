import { useItems } from "../context/ItemsContext";
import { Link } from "react-router-dom";
import { Filter } from "../components/FilterComponent/Filter";
import { useEffect } from "react";

const ShopPage = () => {
  const { items, getAllItems } = useItems();

  useEffect(() => {
    const refresh = async () => {
      await getAllItems();
    };

    refresh();

    if (items.lenth == 0) {
      return "Aún no hay nada aquí.";
    }
  }, []);

  return (
    <>
      <main className="container" id="shop">
        <Filter />

        <section className="shop__content">
          <ul className="shop__items">
            {items.map((item) => (
                          <li className="shop__item" key={item.iid}>
                              <article className='card-item'>
                                  <Link className='card-item__link'>
                                      <picture className="card-item__cover">
                                          <span className="card-item__tag">{item.name}</span>
                                          <img src={`./img/${item.image_front}`} alt={`Figura coleccionable Funko de un ${item.name}`} />
                                          <img src={`./img/${item.image_back}`} alt={`Figura coleccionable Funko de un ${item.name} en caja`} />
                                      </picture>
                                      <div>
                                          <p className="card-item__licence">{item.licence}</p>
                                          <h4 className="card-item__name">{item.name}</h4>
                                          <p className="card-item__price">{item.price}</p>
                                          {/* <p className="card-item__promo">{`${item.discount}%`}</p> */}
                                      </div>
                                  </Link>
                              </article>
                          </li>
            ))
                    }
          </ul>
          <div className="pagination"></div>
        </section>
      </main>
    </>
  );
};
export default ShopPage;
