import "./ListaProducto.css";
import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const ListaProducto = () => {
  const { itemId, items, getAllItems, deleteItem, setId } = useItems();
    const navigate = useNavigate()

  useEffect(() => {
    const refresh = async () => {
      await getAllItems();
    };
    refresh();
    if ((items.lenth == 0)) {
      return "Aún no hay nada aquí.";
    };
  }, []);

  const handleDelete = (id) => {
      deleteItem(id);
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`)
  };

  //Si no hay items, solo muestra ese mensaje, no cargues la tabla.
  if (items.length == 0) return (
    <>
      <div className="title row">
        <h1>LISTADO DE PRODUCTOS</h1>
        <div>
        <h2>Aún no hay items.</h2>
        </div>
        <div className="agregar">
          {
            <Link className="fa-solid fa-plus btn--primary btn--medium" to="/create">
              Añadir Item
            </Link>
          }
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="lista-producto">
        <div className="title">
          <h1>LISTADO DE PRODUCTOS</h1>
          <div className="agregar">
            {
              <Link className="fa-solid fa-plus btn--primary btn--medium" to="/create">
                Añadir Item
              </Link>
            }
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
            {items.map((item) => (
              <tr key={item._id}>
                <th scope="row">{item._id}</th>
                <td>{item.sku}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={()=>handleUpdate(item._id)} className="btn btn-warning">Update</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button>
                </td>
                <td>
                  <img src={item.img_back} alt="img_back" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListaProducto;
