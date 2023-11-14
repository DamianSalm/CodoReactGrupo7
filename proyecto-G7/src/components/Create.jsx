import "./Create.css"

export const Create = () => {
  return (
    <div className="container">
      <h1>CREAR NUEVO ITEM</h1>
      <form className="form-control formulario">
        <div class="row">
          <div className="col-3">
              <label className="col-form-label">Categoria:</label>
          </div>
          <div className="col-3">
            <select className="form-select col-3">
              <option selected>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
          <div className="col-3">
            <label className="col-form-label">Licencia:</label>
          </div>
          <div className="col-3">  
          <select className="form-select">
            <option selected>Seleccionar</option>
              <option value="">1</option>
            </select>
          </div>
        </div>
        
        
        <div className="row">
          <div className="col-3">  
              <label className="col-form-label">Nombre del producto:</label>
          </div>
          <div className="col-3">    
              <input type="text" className="form-control"/>
          </div>
        </div>
        <textarea  class="form-control" placeholder="Descripcion del producto"></textarea>
        
        <div class="row"> 
          <div className="col-2">    
            <label>SKU:</label>
          </div>
          <div className="col-2">    
            <input type="text" className="form-control"/>
          </div>
          <div className="col-2">    
            <label>Precio:</label>
          </div>
          <div className="col-2">    
          <input type="text" className="form-control"/>
          </div>
          <div className="col-2">
          <label>Stock:</label>
          </div>
          <div className="col-2">
            <input type="text" className="form-control"/>
          </div>
        </div>
          
          
          <div className="row">
            <div className="col-3">
              <label>Descuento:</label>
            </div>
            <div className="col-3">
              <input type="text" className="form-control"/>
            </div>
            <div className="col-3">
              <label>Cuotas:</label>
            </div>
            <div className="col-3">
              <select type="text" className="form-select">
                <option selected>Seleccionar</option>
                <option value="">1</option>
            </select></div>
          </div>
          Imágenes: <input type="file" name="" id="" className="form-control"/>

          <button class="btn btn-danger">Agregar Producto</button>

          <button class="btn btn-danger">Limpiar</button>

      </form>
    
    </div>
  )
}
