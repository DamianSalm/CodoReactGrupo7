

export const llamarGetAll = async () =>  // sin brackets porque es una sola linea (el return de la funcion)
  await fetch(`http://localhost:4000/api/`)

export const llamarGetOne = async (id) =>  // sin brackets porque es una sola linea (el return de la funcion)
  await fetch(`http://localhost:4000/api/:${id}`)

export const llamarPostOne = async (body) =>  // sin brackets porque es una sola linea (el return de la funcion)
  await fetch(input=body,`http://localhost:4000/api/`)

export const llamarPutOne = async (id, body) =>   // sin brackets porque es una sola linea (el return de la funcion)
  await fetch(`http://localhost:4000/api/:${id}`)

export const llamarDeleteOne = async (id) =>   // sin brackets porque es una sola linea (el return de la funcion)
  await fetch(`http://localhost:4000/api/:${id}`)