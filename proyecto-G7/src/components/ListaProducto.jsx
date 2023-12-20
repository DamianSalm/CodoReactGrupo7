import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const ListaProducto = () => {
  const { items, getAllItems, deleteItem } = useItems();
  const navigate = useNavigate();


  useEffect(() => {
    getAllItems();
    if ((items.lenth == 0)) {
      return "Aún no hay nada aquí.";
    }
  }, []);

  const handleDelete = (id) => {
      deleteItem(id);
      getAllItems();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Deseas eliminar este producto?",
      text: "No puedes revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",

    }).then((result) => {
      if(result.isConfirmed){
        handleDelete(id)
        Swal.fire("Borrado", "El producto ha sido eliminado", "success")
      }
    })
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  //Si no hay items, solo muestra ese mensaje, no cargues la tabla.
  return items.length == 0 ? (
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
  ) : (
    // caso contrario...
    <div id="admin" className="container">
      <section className="admin__list">
        <div className="admin__header">
          <h1>LISTADO DE PRODUCTOS</h1>
            {
              <Link className="fa-solid fa-plus btn--primary btn--medium" to="/create">
                Añadir Item
              </Link>
            }
        </div>
        <table className="admin-table">
            <thead key="table_head">
              <tr key="table_headers" className="admin-table__header">
              <th>ID</th>
              <th>Sku</th>
              <th>Nombre del producto</th>
              <th>Categoría</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
          <tbody key="body">
            {Object.values(items).map((item) => (
              <tr key={item.iid} className="admin-table__row">
                <td key="item_id">{item.iid}</td>
                <td key="item_sku">{item.sku}</td>
                <td key="item_name">{item.name}</td>
                <td key="item_cat">{item.category}</td>
                <td key="item_upd_button">
                  <button onClick={()=> handleUpdate(item._id)} className="btn--update">Update</button>
                </td>
                <td key="item_del_button">
                  <button onClick={()=> confirmDelete(item._id)} className="btn--primary">Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ListaProducto;
