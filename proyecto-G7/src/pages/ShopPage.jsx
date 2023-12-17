import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";

const ShopPage = () => {
    const { items, getAllItems } = useItems();
    useEffect(() => {
        const refresh = async () => {
          await getAllItems();
        };
        refresh();
        if ((items.lenth == 0)) {
          return "Aún no hay nada aquí.";
        };
      }, []);
  return (
      <main className='container' id='shop'>
          <section className="shop__content">
              <ul className="shop__items">
                  {
                      items?.map((item) => {
                          return (
                          <li className="shop__item" key={item.iid}>
                              <article className='card-item'>
                                      <picture className="card-item__cover">
                                          <span className="card-item__tag">{item.name}</span>
                                          <img src={"/images/problemas.jpg"} alt={`Figura coleccionable Funko de un ${item.name}`} />
                                        </picture>
                                      <div>
                                          <p className="card-item__">{item.licence}</p>
                                          <h4 className="card-item__name">{item.name}</h4>
                                          <p className="card-item__price">${item.price}</p>
                                      </div>
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
export default ShopPage;
