//contexto que ofrece acceso a estados y efectos generales de los items
//más sobre contexts en: https://react.dev/reference/react/useContext

//imports
import { llamarGetAll, llamarGetOne, llamarPostOne, llamarPutOne, llamarDeleteOne } from '../api/itemsCalls'
import { createContext, useState, useContext, useEffect } from "react";






//creamos un contexto
export const ItemsContext = createContext();

//luego lo ponemos en uso. Esto permite a otros componentes, acceder al contexto provisto.
export const useItems = () => {
  const context = useContext(ItemsContext)
  if (!context) { //error si falla, si no hay contexto
    throw new Error("useItem debería usarse dentro del context provider");
  }
  return context;
}
//ItemsProvider contendrá 'children' (otros componentes) que podrán acceder al contexto de este, mediante el uso de useItems().
//Cuando se renderice, este componente otorgará a sus hijos acceso a cualquier valor que se le pase como parametro.
//al retornar, devolvemos un componente con nuestras funciones y estados en un parametro
//así: value={{ func1, func1, useState1, useState2, etc.. }}
//los efectos se activarán solos en cada hijo
//children son cualquier otro componente que se encuentre dentro de este. ver app.jsx
export const ItemsProvider = () => {
  // const [items, setItems] = useState([]);
  // const [id, setId] = useState(null);
  

  //la funcion getItems debería checkear la base de datos, acceder al documento(tabla, schema, loquesea) items, y setear algunos items en el estado de items 
  // const getItems = async (values) => {
  //   //  -(?)- podría ser una función general, por ejemplo, preguntando si hay un id en concreto
  //   if (values.length > 1){
  //     // -(?)- llamarGetAll
  //     try {} catch (err) {console.log(err)}
  //   }else {
  //     // -(?)- llamarGetOne
  //     try {
  //       const res = await llamarGetOne(id);
  //       setItems(res.data); // -(?)- should this be a res.data.map((i)=>items.append(i))   
  //       setId(res.data.id);
  //     } catch (err) {
  //       if (Array.isArray(err.response.data)) return setErrors(err.response.data);
  //       console.log(err);
  //       setErrors([err.response.data]);
  //     }
  //   }
  // };
  // //updateItems debería checkear si hay un item con un id especifico y permitirte actualizar datos de ese item
  // const updateItems = async (values, id) => {};
  // //createItems debería permitirte crear un item
  // const createItems = async (values) => {};
  // //deleteItems debería checkear si hay un item con un id especifico y permitirte borrar ese item
  // const deleteItems = async (id) => {};
  // //buyItems debería checkear el stock de un item y llevarte al checkOut (una pagina que no tenemos, que sería exclusiva para usuarios loggeados)
  // // -(?)-  const buyItems = async (values) => {};

  return(
    <ItemsContext.Provider
      value= {{
        // items,
        // id,
      }}>
    </ItemsContext.Provider>
  )
  
}