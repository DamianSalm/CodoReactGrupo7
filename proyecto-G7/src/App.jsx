import './App.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavbarComp } from './components/NavbarComp.jsx'
import { LoginComp } from './components/LoginComp.jsx'
import { LandingPage } from './pages/LandingPage.jsx'
import { ShopPage } from './pages/ShopPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'

function App() {
  return (
    <BrowserRouter>
    <NavbarComp/>
      {<Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/contacto' element={<ContactPage/>}></Route>
        <Route path='/login' element={<LoginComp/>}></Route>
      </Routes>}
    </BrowserRouter>
  )
}

export default App
