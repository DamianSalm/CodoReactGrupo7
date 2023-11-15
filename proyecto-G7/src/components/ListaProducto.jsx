import "./ListaProducto.css"
import { useItems } from '../context/ItemsContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ListaProducto = () => {
    const { items, getAllItems } = useItems()

useEffect(()=>{
    const fun = async () => {
        await getAllItems()
    }
    fun()
    if (items.lenth = 0) {return "Aún no hay items."}
},[])

  return (<>
  
    <div className="lista-producto">
        <div className="title">
            <h1>LISTADO DE PRODUCTOS</h1>
            <div className="agregar">
                {
                    <Link className="fa-solid fa-plus" to="/create">Agregar</Link>
                
                }
                <i className="fa-solid fa-plus">asd</i>
            </div>
        </div>
        <table className="table table-light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Nombre del producto</th>
                    <th>Categoría</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item)=> <tr key={item._id}>
                <th scope="row">{item._id}</th>
                    <td>{item.sku}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td><i className="fa-solid fa-pencil"></i></td>
                    <td><i className="fa-solid fa-trash"></i></td>
                    <td><img src={item.img_front} alt="img_front" /></td>
                </tr>)}
            </tbody>
        </table>
    </div></>
  )
}

export default ListaProducto