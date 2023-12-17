import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

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
      text: "No podes revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminar",

    }).then((result) => {
      if(result.isConfirmed){
        handleDelete(id)
        Swal.fire("Borrado", "Tu Documento ha sido eliminado", "success")
      }
    })
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  //Si no hay items, solo muestra ese mensaje, no cargues la tabla.
  return  (
    <div id="admin" className="container">
      <section className="admin__list">
        <div className="admin__header">
          <h1>LISTADO DE PRODUCTOS</h1>
            {
              <Link className="fa-solid fa-plus btn--primary btn--large" to="/create"/>
            }
        </div>
        {items.length == 0 ? (<h3>No hay items</h3>) : (
        <table className="admin-table">
            <thead>
              <tr className="admin-table__header">
              <th>ID</th>
              <th>Sku</th>
              <th>Nombre del producto</th>
              <th>Categoría</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
          <tbody>
            {Object.values(items).map((item) => (
              <tr key={item._id} className="admin-table__row">
                <th key="item_id">{item.iid}</th>
                <td key="item_sku">{item.sku}</td>
                <td key="item_name">{item.name}</td>
                <td key="item_cat">{item.category}</td>
                <td key="item_upd_button">
                  <button onClick={()=> handleUpdate(item._id)} className="btn--update btn--medium">
                    <i className="fa-solid fa-edit"></i>
                  </button>
                </td>
                <td key="item_del_button">
                  <button onClick={()=> confirmDelete(item._id)} className="btn--primary btn--medium">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        )}</section>
    </div>
  );
};

export default ListaProducto;
