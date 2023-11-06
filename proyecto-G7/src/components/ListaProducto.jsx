import "./ListaProducto.css"

export const ListaProducto = () => {
  return (
    <div className="lista-producto">
        <div className="title">
            <h1>LISTADO DE PRODUCTOS</h1>
            <div className="agregar">
                <h2>AGREGAR</h2>
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
        <table className="table table-light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Nombre del producto</th>
                    <th>Categoría</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">EL ID o LA ID o LE ID?</th>
                    <td>EL CODIGO</td>
                    <td>EL NOMBRE</td>
                    <td>LA CATEGORIA</td>
                    <td><i className="fa-solid fa-pencil"></i></td>
                    <td><i className="fa-solid fa-trash"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}