import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const onSubmit = handleSubmit((values) => {
    createItem(values);
    navigate(`/admin`);
  });


  return (
    <div id="create" className="container">
      <h1 className="create__title">CREAR NUEVO ITEM</h1>
      <form className="create__form" onSubmit={onSubmit}>
      <div className="form__flex">
          <div className="form__box--flex">
            <div className="col">
              <label className="form__label" htmlFor="category">Categoria:</label>
              <input className="form__input" id="category" {...register("category")} />
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="licence">Licencia:</label>
            <input className="form__input" id="licence"{...register("licence")} />
          </div>
      </div>
      <div className="form__box--flex">
          <label className="form__label" htmlFor="name">Nombre del producto:</label>
          <input
            type="text" id="name"
            className="form__input"
            placeholder="Nombre del producto"
            {...register("name", { required: {value:true, message:"Este campo es requerido"}, minLength: {value:4, message:"Mínimo 4 caracteres"} })}
            />
      </div>
          {/* {errors.name && <span style="display: block; color: tomato; font-size: x-small">{errors.name.message}</span>} */}
      <div>
          <textarea
            placeholder="Descripcion del producto"
            cols="30" rows="10"
            {...register("description")}
          />
      </div>
      
        <div className="form__box--flex">
          <div className="col-3">
            <label className="form__label">iid:</label>
            <input
              name="iid"
              type="text"
              className="form__input"
              placeholder="iid"
              {...register("iid", { required: true })}
            />
          </div>
        </div>

        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" htmlFor="sku">SKU:</label>
            <input type="text" className="form__input" id="sku" placeholder="SSK111AB001" {...register("sku", { required: {value:true, message:"Este campo es requerido"}, minLength: {value:4, message:"Mínimo 4 caracteres"} })} required />
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="price">Precio:</label>
            <div className="form__input--wrapper">
              <input type="number" className="form__input" id="price" data-type="currency" placeholder="0.000,00" {...register("price", {valueAsNumber: true})} />
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="stock">Stock:</label>
            <div className="form__input--wrapper">
              <input type="number" className="form__input" id="stock"placeholder="stock" {...register("stock", {valueAsNumber: true})} />
              
            </div>
          </div>
        </div>      
        <div className="form__flex">
          <button type="submit" className="form__btn btn btn--primary btn--large">
            Agregar Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComp;
