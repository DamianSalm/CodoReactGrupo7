import { useItems } from "../context/ItemsContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

const ListaProducto = () => {
<<<<<<< HEAD
  const { items, getAllItems, deleteItem, setId } = useItems();
  const navigate = useNavigate();

  const refresh = async () => {
    await getAllItems();
  };

  useEffect(() => {
    refresh();
    if (items.lenth == 0) {
=======
  const { items, getAllItems, deleteItem } = useItems();
  const navigate = useNavigate();


  useEffect(() => {
    getAllItems();
    if ((items.lenth == 0)) {
>>>>>>> G7/a
      return "Aún no hay nada aquí.";
    }
  }, []);

  const handleDelete = (id) => {
<<<<<<< HEAD
    deleteItem(id);
=======
      deleteItem(id);
      getAllItems();
>>>>>>> G7/a
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
  return items.length == 0 ? (
    <>
      <div className="title row">
        <h1>LISTADO DE PRODUCTOS</h1>
        <div>
          <h2>Aún no hay items.</h2>
        </div>
        <div className="agregar">
          {
<<<<<<< HEAD
            <Link to="/create">
              AGREGAR
              <img src="../../public/images/icons/agregar.svg" alt="AGREGAR" />
=======
            <Link className="fa-solid fa-plus btn--primary btn--medium" to="/create">
              Añadir Item
>>>>>>> G7/a
            </Link>
          }
        </div>
      </div>
    </>
<<<<<<< HEAD
  ) : (
    <>
      <div className="lista-producto">
        <div className="title">
=======
  );
  return (
    <div id="admin" className="container">
      <section className="admin__list">
        <div className="admin__header">
>>>>>>> G7/a
          <h1>LISTADO DE PRODUCTOS</h1>
            {
<<<<<<< HEAD
              <Link to="/create">
                <img
                  src="../../public/images/icons/agregar.svg"
                  alt="AGREGAR"
                />
=======
              <Link className="fa-solid fa-plus btn--primary btn--medium" to="/create">
                Añadir Item
>>>>>>> G7/a
              </Link>
            }
        </div>
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
<<<<<<< HEAD
          </thead>
          <tbody key="Items table">
            {Object.values(items).map((item) => (
              <tr key={item._id}>
                <th key={item._id} scope="row">{item._id}</th>
=======
            </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="admin-table__row">
                <th>{item.iid}</th>
>>>>>>> G7/a
                <td>{item.sku}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
<<<<<<< HEAD
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <img src={item.img_back} alt="img_back" />
=======
                  <button onClick={()=>handleUpdate(item._id)} className="btn--update btn--medium">Update</button>
                </td>
                <td>
                  <button onClick={()=> confirmDelete(item._id)} className="btn--primary btn--medium">Delete</button>
>>>>>>> G7/a
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
