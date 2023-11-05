import express from 'express'
import cors from 'express'
import { PORT } from "./config.js"
import { getOne } from './routes/mainRoutes.js'

const app = express();

// MIDDLEWARE
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use(express.json())

// ROUTES
app.use(mainRoutes)

// LOOP

app.listen(PORT)
console.log(`servidor corriendo en el puerto ${PORT}`)
