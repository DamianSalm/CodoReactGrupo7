import http from 'http'

export const llamarUno = (req, res) => {
  http.get(`http://localhost:4000/main/${req.params.id}`)
}