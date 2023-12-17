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
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadItem = async (id) => {
      if (params.id) {
        const res = await getOneItem(params.id);
      }
    };
    loadItem();
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
            <label className="form__label" htmlFor="category">Categoria:</label>
            <input className="form__input" id="category" defaultValue={items.category} {...register("category")} />
          </div>
          <div className="form__box--flex">
            <label className="form__label" htmlFor="licence">Licencia:</label>
            <input className="form__input" id="licence" defaultValue={items.licence} {...register("licence")}/>

          </div>
        </div>
        <div className="form__box--flex">
          <label className="form__label" htmlFor="name">
            Nombre del producto:
          </label>
          <input
            type="text"
            id="name"
            className="form__input"
            placeholder="Nombre del producto"
            defaultValue={items.name}
            {...register("name", { required: true })} />
        </div>
        <div>
          <textarea
            className="form-control"
            placeholder="Descripcion del producto"
            id="product_description"
            cols="30"
            rows="10"
            defaultValue={items.description}
            {...register("description")}
          ></textarea>
        </div>
        <div className="form__flex">
          <div className="form__box--flex">
            <label className="form__label" htmlFor="sku">
              SKU:
            </label>
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
            <label className="form__label" htmlFor="price">
              Precio:
            </label>
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
            <label className="form__label" htmlFor="stock">
              Stock:
            </label>
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
        <div className="form__flex">
          <button type="submit" className="form__btn btn btn--primary btn--large" >
            Editar Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditComp;
