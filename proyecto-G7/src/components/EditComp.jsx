import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useItems } from "../context/ItemsContext";
import { useAuth } from "../context/AuthContext";


const EditComp = () => {
  const { itemId, items, categories, licences, updateItem, getOneItem } =
    useItems();
  const { errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadItem = async (id) => {
      if (params.id) {
        const res = await getOneItem(params.id);
      }
<<<<<<< HEAD
    };
    loadItem();
=======
      loadItem()
>>>>>>> G7/a
  }, []);

  const onSubmit = handleSubmit((values) => {
    updateItem(params.id, values);
<<<<<<< HEAD
    navigate("/admin");
=======
    /*if (isAuth) navigate('/admin')*/
>>>>>>> G7/a
  });

  return (
    <div id="edit" className="container">
      <h2 className="edit__title">EDITAR ITEM</h2>
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <form className="create__form" onSubmit={onSubmit}>
        <div className="form__flex">
          <div className="form__box--flex">
              <label className="form__label" htmlFor="category">Categoria:</label>
              <select className="form__select"
                id="category"
                defaultValue={items.category}
                {...register("category")}>
                <option>Funko</option>
                <option>Remera</option>
              </select>
            </div>
            <div className="form__box--flex">
              <label className="form__label" htmlFor="licence">Licencia:</label>
              <select className="form__select"
                id="licence"
                defaultValue={items.licence}
                {...register("licence")}>
                <option>Seleccionar</option>
                <option value="">1</option>
              </select>
            </div>
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="name">Nombre del producto:</label>
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder="Nombre del producto"
              defaultValue={items.name}
              {...register("name", { required: true })}
            />
          </div>
          {/*
          <div className="col-3">
            <label className="col-form-label">iid:</label>
            <input
              type="text"
              className="form-control"
              placeholder="iid"
              defaultValue={items.iid}
              {...register("iid", { required: true })}
            />
          </div>
<<<<<<< HEAD
          <div className="col-3">
            <label className="col-form-label">Categoria:</label>
            <select
              className="form-select col-3"
              defaultValue={items.category}
              {...register("category")}
            >
              <option>Funko</option>
              <option>Remera</option>
            </select>
          </div>
          <div className="col-3">
            <label className="col-form-label">Licencia:</label>
            <select
              className="form-select"
              defaultValue={items.licence}
              {...register("licence")}
            >
              <option>Pokemon</option>
              <option>StarWars</option>
              <option>Digimon</option>
            </select>
          </div>
        </div>
        <div className="row m-1">
=======
          */}
        <div>
>>>>>>> G7/a
          <textarea
            className="form-control"
            placeholder="Descripcion del producto"
            id="product_description"
            cols="30" rows="10"
            defaultValue={items.description}
            {...register("description")}
          ></textarea>
        </div>
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              className="form__input"
              placeholder="SKU"
              defaultValue={items.sku}
              {...register("sku")}
            />
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="price">Precio:</label>
            <input
              type="number"
              id="price"
              className="form__input"
              placeholder="Precio"
              defaultValue={items.price}
              {...register("price", { valueAsNumber: true })}
            />
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              className="form__input"
              placeholder="Stock"
              defaultValue={items.stock}
              {...register("stock", { valueAsNumber: true })}
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="row m-1">
          <div className="col-3">
            <label>Descuento:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Descuento"
              defaultValue={items.discount}
              {...register("discount", { valueAsNumber: true })}
            />
=======
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" htmlFor="discount">Descuento:</label>
            <div className="form__input--wrapper">
              <input
                type="number"
                id="discount"
                className="form__input"
                placeholder="Descuento"
                defaultValue={items.discount}
                {...register("discount", {valueAsNumber: true})}
              />
              <span>%</span>
            </div>
>>>>>>> G7/a
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="dues">Cuotas:</label>
            <select
              type="number"
              id="dues"
              className="form__select"
              placeholder="Cuotas"
              defaultValue={items.cuotas}
              {...register("cuotas")}
            >
              <option defaultValue={"Seleccionar"}>Seleccionar</option>
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
<<<<<<< HEAD
        <button type="submit" className="btn btn-success m-1">
          Editar
        </button>
        <button type="reset" className="btn btn-warning">
          Reset
        </button>
        <button type="cancel" className="btn btn-info m-1">
          Cancelar
        </button>
=======
        {/*
        <div className="form__box--flex">
            <input 
            type="file" 
            name="" 
            id=""
            className="form__input" 
            placeholder="Imagen trasera" 
            {...register("img_back")}
          />
          <input 
            type="file" 
            name="" 
            id="" 
            className="form__input" 
            placeholder="Imagen delantera" 
            {...register("img_front")}
          />
          </div>
        */}

        <div className="form__flex">
          <button type="submit" className="form__btn btn btn--primary btn--large">
            Editar Producto
          </button>
        </div>
>>>>>>> G7/a
      </form>
    </div>
  );
};

export default EditComp;
