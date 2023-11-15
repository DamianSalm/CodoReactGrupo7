//
//imports
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListaProducto from "../components/ListaProducto";
import CreateComp from "../components/CreateComp";
// import Edit from "../components/Edit";

const AdminPage = () => {
  return (
    <>
      <h1>Hey! This is the admin page!</h1>
      <ListaProducto />
      <CreateComp />
    </>
  );
};

export default AdminPage;
