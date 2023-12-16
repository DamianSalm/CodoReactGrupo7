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
    <div id="create" className="container">
      <h1 className="create__title">CREAR NUEVO ITEM</h1>
      <form className="create__form" onSubmit={onSubmit}>
      <div className="form__flex">
          <div className="form__box--flex">
            <div className="col">
              <label className="form__label" for="category">Categoria:</label>
              <select className="form__select" id="category" {...register("category")}>
                <option value="funko">Funko</option>
                <option value="remera">Remera</option>
              </select>
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" for="licence">Licencia:</label>
            <select className="form__select" id="licence"{...register("licence")}>
              <option value="pokemon">Pokemon</option>
              <option value="star wars">StarWars</option>
              <option value="digimon">Digimon</option>
            </select>
          </div>
      </div>
      <div className="form__box--flex">
          <label className="form__label" for="name">Nombre del producto:</label>
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
      {/*
        <div className="form__box--flex">
          <div className="col-3">
            <label className="form__label">iid:</label>
            <input
              type="text"
              className="form__input"
              placeholder="iid"
              {...register("iid", { required: true })}
              />
          </div>
        </div>
        */}
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" for="sku">SKU:</label>
            <input type="text" className="form__input" id="sku" placeholder="SSK111AB001" {...register("sku")} required />
          </div>
          <div className="form__box--flex">
            <label className="form__label" for="price">Precio:</label>
            <div className="form__input--wrapper">
              <input type="number" className="form__input" id="price" data-type="currency" placeholder="0.000,00" {...register("price", {valueAsNumber: true})} />
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" for="stock">Stock:</label>
            <div className="form__input--wrapper">
              <input type="number" className="form__input" id="stock"placeholder="stock" {...register("stock", {valueAsNumber: true})} />
              
            </div>
          </div>
        </div>
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" for="discount">Descuento:</label>
            <div className="form__input--wrapper">
              <input type="number"
               className="form__input"
                id="discount"
                 placeholder="descuento"
                  {...register("discount", {valueAsNumber: true})} /><span>%</span>
            </div>
            <div className="form__box--flex">
                <label className="form__label" for="dues">Cuotas:</label>
                <select className="form__select" name="dues" id="dues">
                    <option value="0">Sin cuotas</option>
                    <option value="3">3 cuotas s/ interés</option>
                    <option value="6">6 cuotas s/ interés</option>
                    <option value="9">9 cuotas s/ interés</option>
                    <option value="12">12 cuotas s/ interés</option>
                    <option value="18">18 cuotas s/ interés</option>
                    <option value="24">24 cuotas s/ interés</option>
                </select>
            </div>
          </div>
        </div>
        {/*
        <div className="form__box--flex">
          <label className="form__label" for="images">Imagenes:</label>
          <input
            type="file"
            name="img_back"
            className="form__input"
            placeholder="Imagen trasera"
            {...register("img_back")}
          />
          <input
            type="file"
            name="img_front"
            className="form__input"
            placeholder="Imagen delantera"
            {...register("img_front")}
          /> 
        </div>
        */}
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
