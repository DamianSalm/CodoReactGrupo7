//Entrypoint de la app
//imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

=======
//import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> express

//componente primero (renderiza el componente <App/> declarado en App.jsx)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
