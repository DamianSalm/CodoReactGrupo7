//contexto que ofrece acceso a estados y efectos generales de los items
//más sobre contexts en: https://react.dev/reference/react/useContext

// imports
import { createContext, useState, useContext, useEffect } from "react";
// API
import {
  llamarGetAll,
  llamarGetOne,
  llamarPostOne,
  llamarPutOne,
  llamarDeleteOne,
} from "../api/itemsCalls";

//creamos un contexto
const ItemsContext = createContext();

//luego lo ponemos en uso. Esto permite a otros componentes, acceder al contexto provisto.
export const useItems = () => {
  const itemsContext = useContext(ItemsContext);
  if (!itemsContext) {
    //error si falla, si no hay contexto
    throw new Error("useItems debería usarse dentro del ItemsContext.Provider");
  }
  return itemsContext;
};

//ItemsProvider contendrá 'children' (otros componentes) que podrán acceder al contexto de este, mediante el uso de useItems().
//Cuando se renderice, este componente otorgará a sus hijos acceso a cualquier valor que se le pase como parametro.
//al retornar, devolvemos un componente con nuestras funciones y estados en un parametro
//así: value={{ func1, func1, useState1, useState2, etc.. }}
//los efectos se activarán solos en cada hijo
//children son cualquier otro componente que se encuentre dentro de este. ver app.jsx

export const ItemsProvider = ({ children }) => {
  const [itemId, setItemId] = useState("");
  const [items, setItems] = useState([]);
  // const [categories, setCategories] = useState("Funko", "Remera");
  // const [licences, setLicences] = useState(["Star Wars", "Pokemon"]);

  //la funcion getItems debería checkear la base de datos, acceder al documento(tabla, schema, loquesea) items, y setear algunos items en el estado de items
  const getAllItems = async () => {
    try {
      const res = await llamarGetAll();
      return setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // -(?)- llamarGetOne
  const getOneItem = async (id) => {
    try {
      const res = await llamarGetOne(id);
      setItems(res.data); 
      setItemId(res.data._id);
      return res
    } catch (err) {
      if (Array.isArray(err.response.data)) return setErrors(err.response.data);
      console.log(err);
      setErrors([err.response.data]);
    }
  };

  // createItem debería permitirte crear un item
  const createItem = async (values) => {
    try {
      const res = await llamarPostOne(values);
      //setItems(res.data);
      // if (res) { setItems(res.data) }
    } catch (err) {
      console.log(err);
    }
  };

  // //updateItems debería checkear si hay un item con un id especifico y permitirte actualizar datos de ese item
  const updateItem = async (id, values) => {
    try {
      const res = await llamarPutOne(id, values);
      //setItems(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  // //deleteItem debería checkear si hay un item con un id especifico y permitirte borrar ese item
  const deleteItem = async (id) => {
    try {
      await llamarDeleteOne(id);
      items.map((item) => {
        if (item._id == id) items.pop(item);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // // -(?)-  buyItems debería checkear el stock de un item y llevarte al checkOut (una pagina que no tenemos, que sería exclusiva para usuarios loggeados)
  // // -(?)-  const buyItems = async (values) => {};


  return (
    <ItemsContext.Provider
      value={{
        itemId,
        items,
        getAllItems,
        getOneItem,
        createItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
