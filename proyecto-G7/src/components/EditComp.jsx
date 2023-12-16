import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useItems } from "../context/ItemsContext";
import { useAuth } from "../context/AuthContext";


const EditComp = () => {
  const { itemId, items, categories, licences, updateItem, getOneItem } = useItems();
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
    if (params.id){
        const res = await getOneItem(params.id);
    }
      }
      loadItem()
  }, []);

  const onSubmit = handleSubmit((values) => {
    updateItem(params.id, values);
    navigate('/admin')
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
              <label class="form__label" for="category">Categoria:</label>
              <select className="form__select"
                id="category"
                defaultValue={items.category}
                {...register("category")}>
                <option>Funko</option>
                <option>Remera</option>
              </select>
            </div>
            <div className="form__box--flex">
              <label className="form__label" for="licence">Licencia:</label>
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
            <label className="form__label" for="name">Nombre del producto:</label>
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
          */}
        <div>
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
            <label className="form__label" for="sku">SKU:</label>
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
            <label className="form__label" for="price">Precio:</label>
            <input
              type="number"
              id="price"
              className="form__input"
              placeholder="Precio"
              defaultValue={items.price}
              {...register("price", {valueAsNumber: true})}
            />
          </div>
          <div className="form__box--flex">
            <label className="form__label" for="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              className="form__input"
              placeholder="Stock"
              defaultValue={items.stock}
              {...register("stock", {valueAsNumber: true})}
            />
          </div>
        </div>
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" for="discount">Descuento:</label>
            <div class="form__input--wrapper">
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
          </div>
          <div className="form__box--flex">
            <label className="form__label" for="dues">Cuotas:</label>
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
      </form>
    </div>
  );
};

export default EditComp;
