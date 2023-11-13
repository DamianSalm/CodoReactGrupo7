import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import itemRoutes from './routes/item.routes.js'

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/user', authRoutes)
app.use('/', itemRoutes)

export default app;
