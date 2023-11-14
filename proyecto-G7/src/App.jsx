import './App.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavbarComp } from './components/NavbarComp.jsx'
import { LoginComp } from './components/LoginComp.jsx'
import { LandingPage } from './pages/LandingPage.jsx'
import { ShopPage } from './pages/ShopPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { ListaProducto } from './components/ListaProducto.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter className="principal">
      <NavbarComp/>
      {/* <Routes>
        <Route path='/' element={<Show/>}></Route>
        <Route path='/new' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
