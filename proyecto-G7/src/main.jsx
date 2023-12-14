//Entrypoint de la app
//imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


//componente primero (renderiza el componente <App/> declarado en App.jsx)
ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
