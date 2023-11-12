import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import  Header  from "./components/partials/HeaderComponent/Header";
import  Footer  from "./components/partials/FooterComponent/Footer";
import  HomePage   from "./pages/HomePage";
import  AdminPage  from './pages/AdminPage';
import  ContactPage  from './pages/ContactPage';
import  ShopPage   from './pages/ShopPage';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/contact' element= {<ContactPage/>} />
        <Route path='/admin' element= {<AdminPage/>} />
        <Route path='/shop' element= {<ShopPage/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
