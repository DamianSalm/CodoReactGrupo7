import './App.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { ListaProducto } from './components/ListaProducto.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ListaProducto />
      <Footer/>
        {/* <Routes>
        <Route path='/' element={<Show/>}></Route>
        <Route path='/new' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes> */}

    </BrowserRouter>
  )
}

export default App
