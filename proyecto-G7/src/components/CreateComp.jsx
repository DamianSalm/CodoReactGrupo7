import "./CreateComp.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useItems } from "../context/ItemsContext";
import { useAuth } from "../context/AuthContext";

const CreateComp = () => {
  const { categories, licences, createItem } = useItems();
  const { errors: registerErrors } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = handleSubmit((values) => {
    createItem(values);
    navigate(`/admin`)
  });

  useEffect(() => {
    // console.log(errors);
  }, [errors]);

  return (
    <div className="container">
      <h1>CREAR NUEVO ITEM</h1>
      <form className="form-control m-2" onSubmit={onSubmit}>
        <div className="row my-3">
          <div className="col">
            <label className="col-form-label">Categoria:</label>
            <select className="form-select col-3" {...register("category")}>
              <option>Funko</option>
              <option>Remera</option>
            </select>
          </div>
          <div className="col">
            <label className="col-form-label">Licencia:</label>
            <select className="form-select" {...register("licence")}>
              <option value="">Pokemon</option>
              <option value="">StarWars</option>
              <option value="">Digimon</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label className="col-form-label">Nombre del producto:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              {...register("name", { required: {value:true, message:"Este campo es requerido"}, minLength: {value:4, message:"Mínimo 4 caracteres"} })}
              />
          {/* {errors.name && <span style="display: block; color: tomato; font-size: x-small">{errors.name.message}</span>} */}
          </div>
          <div className="col-3">
            <label className="col-form-label">iid:</label>
            <input
              type="text"
              className="form-control"
              placeholder="iid"
              {...register("iid", { required: true })}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <textarea
              className="form-control"
              placeholder="Descripcion del producto"
              {...register("description")}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label>SKU:</label>
            <input type="text" className="form-control" placeholder="sku" {...register("sku")} />
          </div>
          <div className="col-2">
            <label>Precio:</label>
            <input type="number" className="form-control" placeholder="precio" {...register("price", {valueAsNumber: true})} />
          </div>
          <div className="col-2">
            <label>Stock:</label>
            <input type="number" className="form-control" placeholder="stock" {...register("stock", {valueAsNumber: true})} />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label>Descuento:</label>
            <input type="number" className="form-control" placeholder="descuento" {...register("discount", {valueAsNumber: true})} />
          </div>
          {/* <input
            type="file"
            name="img_back"
            className="form-control"
            placeholder="Imagen trasera"
            {...register("img_back")}
          />
          <input
            type="file"
            name="img_front"
            className="form-control"
            placeholder="Imagen delantera"
            {...register("img_front")}
          /> */}
        </div>
        <div>
        <button type="submit" className="btn btn-danger">
          Agregar Producto
        </button>
        <button className="btn btn-danger">Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateComp;
