import './App.css';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import  Header  from "./components/partials/HeaderComponent/Header";
import  Footer  from "./components/partials/FooterComponent/Footer";
import { HomePage } from "./pages/HomePage";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      
      <HomePage/>


      <Footer/>
    </BrowserRouter>
  )
}

export default App
