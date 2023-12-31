import './Filter.css'

export const Filter = () => {
    return (
        <aside className="shop__filters filters">
            <div className="filters__search">
                <label className="filters__title" htmlFor="search">BUSCAR</label>
                <input type="text" name="search" id="search" placeholder="item o categoría"/>
            </div>
            <div className="filters__order">
                <label className="filters__title" htmlFor="orderby">ORDERNAR POR</label>
                <select name="orderby" id="orderby">
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="desc">Mayor precio</option>
                    <option value="asc">Menor precio</option>
                </select>
            </div>
            <div className="filters__price">
                <span className="filters__title" >PRECIO</span>
                <div>
                    <label htmlFor="min">MIN</label>
                    <input type="text" name="min" id="min" placeholder="0"/>
                        <label htmlFor="max">- MAX</label>
                        <input type="text" name="max" id="max" placeholder="0"/>
                        </div>
                </div>
                <div className="filters__checks">
                    <span className="filters__title" htmlFor="filter">FILTRAR</span>
                    <div>
                        <input type="checkbox" name="filter" id="news" value="news"/>
                            <label htmlFor="">NUEVOS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="offers" value="offers"/>
                            <label htmlFor="">OFERTAS</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="specials" value="specials"/>
                            <label htmlFor="">EDICIÓN ESPECIAL</label>
                    </div>
                    <div>
                        <input type="checkbox" name="filter" id="favs" value="favs"/>
                            <label htmlFor="">FAVORITOS</label>
                    </div>
                </div>
        </aside>
    )
}



