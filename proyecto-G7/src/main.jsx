//Entrypoint de la app
//imports
//import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
//import 'bootstrap/dist/css/bootstrap.min.css'


//componente primero (renderiza el componente <App/> declarado en App.jsx)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
