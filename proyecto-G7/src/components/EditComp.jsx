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
    // console.log(errors);
  }, []);

  const onSubmit = handleSubmit((values) => {
    updateItem(params.id, values);
    navigate('/admin')
  });

  return (
    <div className="container">
      <h1>EDITAR ITEM</h1>
      {registerErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))}
      <form className="form-control formulario" onSubmit={onSubmit}>
        <div className="row m-1">
          <div className="col-3">
            <label className="col-form-label">Nombre del producto:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del producto"
              defaultValue={items.name}
              {...register("name", { required: true })}
            />
          </div>
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
          <div className="col-3">
            <label className="col-form-label">Categoria:</label>
            <select className="form-select col-3"
              defaultValue={items.category}
              {...register("category")}>
              <option>Funko</option>
              <option>Remera</option>
            </select>
          </div>
          <div className="col-3">
            <label className="col-form-label">Licencia:</label>
            <select className="form-select"
              defaultValue={items.licence}
              {...register("licence")}>
              <option>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
        </div>
        <div className="row m-1">
          <textarea
            className="form-control"
            placeholder="Descripcion del producto"
            defaultValue={items.description}
            {...register("description")}
          ></textarea>
        </div>
        <div className="row m-1">
          <div className="col-3">
            <label>SKU:</label>
            <input
              type="text"
              className="form-control"
              placeholder="SKU"
              defaultValue={items.sku}
              {...register("sku")}
            />
          </div>
          <div className="col-3">
            <label>Precio:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              defaultValue={items.price}
              {...register("price", {valueAsNumber: true})}
            />
          </div>
          <div className="col-3">
            <label>Stock:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Stock"
              defaultValue={items.stock}
              {...register("stock", {valueAsNumber: true})}
            />
          </div>
        </div>
        <div className="row m-1">
          <div className="col-3">
            <label>Descuento:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Descuento"
              defaultValue={items.discount}
              {...register("discount", {valueAsNumber: true})}
            />
          </div>
          <div className="col-3">
            <label>Cuotas:</label>
            <select
              type="number"
              className="form-select"
              placeholder="Cuotas"
              defaultValue={items.cuotas}
              {...register("cuotas")}
            >
              <option defaultValue={"Seleccionar"}>Seleccionar</option>
              <option value="">1</option>
            </select>
            {/* <input type="file" name="" id="" className="form-control" placeholder="Imagen trasera" {...register("img_back")}/>
          <input type="file" name="" id="" className="form-control" placeholder="Imagen delantera" {...register("img_front")}/> */}
          </div>
        </div>
        <button type="submit" className="btn btn-danger m-1">
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditComp;
