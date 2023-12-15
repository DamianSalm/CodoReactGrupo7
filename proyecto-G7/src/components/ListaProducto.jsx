import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

const ListaProducto = () => {
  const { itemId, items, getAllItems, deleteItem, setId } = useItems();
    const navigate = useNavigate()

  const refresh = async () => {
    await getAllItems();
  };
  useEffect(() => {
    refresh();
    if ((items.lenth == 0)) {
      return "Aún no hay nada aquí.";
    };
  }, []);

  const handleDelete = (id) => {
      deleteItem(id);
      
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
            <tr className="admin-table__header">
              <th>ID</th>
              <th>Sku</th>
              <th>Nombre del producto</th>
              <th>Categoría</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="admin-table__row">
                <th>{item.iid}</th>
                <td>{item.sku}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={()=>handleUpdate(item._id)} className="btn--update btn--medium">Update</button>
                </td>
                <td>
                  <button onClick={()=> confirmDelete(item._id)} className="btn--primary btn--medium">Delete</button>
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
