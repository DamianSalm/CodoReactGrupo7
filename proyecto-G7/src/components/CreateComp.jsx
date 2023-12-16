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
    console.log(values);
    createItem(values);
    navigate(`/admin`);
  });


  return (
<<<<<<< HEAD
    <div className="container">
      <h1>CREAR NUEVO ITEM</h1>
      <form className="form-control m-2" encType="multipart/form-data" onSubmit={onSubmit}>
        <div className="row my-3">
          <div className="col">
            <label htmlFor="category" className="col-form-label">
              Categoria:
            </label>
            <select
              name="category"
              className="form-select col-3"
              {...register("category")}
            >
              <option>Funko</option>
              <option>Remera</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="licence" className="col-form-label">
              Licencia:
            </label>
            <select
              name="licence"
              className="form-select"
              {...register("licence")}
            >
              <option>Pokemon</option>
              <option>StarWars</option>
              <option>Digimon</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-3">
            <label htmlFor="name" className="col-form-label">
              Nombre del producto:
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              {...register("name", {
                required: { value: true, message: "Este campo es requerido" },
                minLength: { value: 4, message: "Mínimo 4 caracteres" },
              })}
            />
            {/* {errors.name && <span style="display: block; color: tomato; font-size: x-small">{errors.name.message}</span>} */}
          </div>
          <div className="col-3">
            <label htmlFor="iid" className="col-form-label">
              iid:
            </label>
=======
    <div id="create" className="container">
      <h1 className="create__title">CREAR NUEVO ITEM</h1>
      <form className="create__form" onSubmit={onSubmit}>
      <div className="form__flex">
          <div className="form__box--flex">
            <div className="col">
              <label className="form__label" htmlFor="category">Categoria:</label>
              <select className="form__select" id="category" {...register("category")}>
                <option value="funko">Funko</option>
                <option value="remera">Remera</option>
              </select>
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="licence">Licencia:</label>
            <select className="form__select" id="licence"{...register("licence")}>
              <option value="pokemon">Pokemon</option>
              <option value="star wars">StarWars</option>
              <option value="digimon">Digimon</option>
            </select>
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
>>>>>>> G7/a
            <input
              name="iid"
              type="text"
              className="form__input"
              placeholder="iid"
              {...register("iid", { required: true })}
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="row">
          <div className="col-6">
            <textarea
              name="description"
              className="form-control"
              placeholder="Descripcion del producto"
              {...register("description")}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <label htmlFor="sku">SKU:</label>
            <input
              name="sku"
              type="text"
              className="form-control"
              placeholder="sku"
              {...register("sku")}
            />
          </div>
          <div className="col-2">
            <label htmlFor="price">Precio:</label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="precio"
              {...register("price", { valueAsNumber: true })}
            />
          </div>
          <div className="col-2">
            <label htmlFor="stock">Stock:</label>
            <input
              name="stock"
              type="number"
              className="form-control"
              placeholder="stock"
              {...register("stock", { valueAsNumber: true })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <label htmlFor="discount">Descuento:</label>
            <input
              name="discount"
              type="number"
              className="form-control"
              placeholder="descuento"
              {...register("discount", { valueAsNumber: true })}
            />
          </div>
          <input
            type="file"
            name="images"
            className="form-control-file"
            placeholder="Imagen delantera"
            {...register("images")}
          />
          {/* <input
            type="file"
            name="img_back"
            className="form-control-file"
            placeholder="Imagen trasera"
            {...register("img_back")}
          /> */}
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Agregar Producto
          </button>
          <button type="reset" className="btn btn-warning">
            Reset
          </button>
          <button type="cancel" className="btn btn-info m-1">
            Cancelar
          </button>
=======

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
          <div className="form__box--flex">
            <label className="form__label" htmlFor="discount">Descuento:</label>
            <div className="form__input--wrapper">
              <input type="number"
               className="form__input"
                id="discount"
                 placeholder="descuento"
                  {...register("discount", {valueAsNumber: true})} /><span>%</span>
            </div>
            <div className="form__box--flex">
                <label className="form__label" htmlFor="dues">Cuotas:</label>
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
          <label className="form__label" htmlFor="images">Imagenes:</label>
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
>>>>>>> G7/a
        </div>
      </form>
    </div>
  );
};

export default CreateComp;
