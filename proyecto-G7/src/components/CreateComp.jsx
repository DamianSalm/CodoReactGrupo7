import "./CreateComp.css";
import { useForm } from "react-hook-form";
import { useItems } from "../context/ItemsContext";
import { useAuth } from "../context/AuthContext";

const CreateComp = () => {

  const { items, createItem } = useItems();
  const { register, handleSubmit } = useForm();
  const { errors } = useAuth()

  const onSubmit = handleSubmit((values) => {
    console.log(values);
    createItem(values);
  });

  return (
    <div className="container">
      <h1>CREAR NUEVO ITEM</h1>
      <form className="form-control formulario" onSubmit={onSubmit}>
        {/* <div className="row">
          <div className="col-3">
            <label className="col-form-label">Categoria:</label>
          </div>
          <div className="col-3">
            <select className="form-select col-3">
              <option defaultValue={"Seleccionar"}>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
          <div className="col-3">
            <label className="col-form-label">Licencia:</label>
          </div>
          <div className="col-3">
            <select className="form-select">
              <option defaultValue={"Seleccionar"}>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
        </div> */}
        <div className="row">
          <div className="col-3">
            <label className="col-form-label">Nombre del producto:</label>
          </div>
          <div className="col-3">
            <input
            type="text"
            className="form-control"
            placeholder="Nombre del producto"
            {...register("name", {required: true}) }/>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label className="col-form-label">iid:</label>
          </div>
          <div className="col-3">
            <input
            type="text"
            className="form-control"
            placeholder="iid"
            {...register("iid", {required: true}) }/>
          </div>
        </div>
        * <div className="col-3">
          <label className="col-form-label">iid:</label>
        </div>
        <textarea
          className="form-control"
          placeholder="Descripcion del producto"
          {...register("description")}
        ></textarea>
        {/*<div className="row">
          <div className="col-2">
            <label>SKU:</label>
          </div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
          <div className="col-2">
            <label>Precio:</label>
          </div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
          <div className="col-2">
            <label>Stock:</label>
          </div>
          <div className="col-2">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Descuento:</label>
          </div>
          <div className="col-3">
            <input type="text" className="form-control" />
          </div>
          <div className="col-3">
            <label>Cuotas:</label>
          </div>
          <div className="col-3">
            <select type="text" className="form-select">
              <option defaultValue={"Seleccionar"}>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
        </div>
        Imágenes: <input type="file" name="" id="" className="form-control" /> */}
        <button type="submit" className="btn btn-danger">Agregar Producto</button>
        <button className="btn btn-danger">Limpiar</button>
      </form>
    </div>
  );
};

export default CreateComp;
