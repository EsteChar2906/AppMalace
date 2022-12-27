import express from 'express';
import { PORT } from './config';
import morgan from 'morgan';
import prendasRouter from "./routes/prendas.routes";

//Inicializacion de la restAPI
const app = express();

//Settings
app.set("port", PORT);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use("/malace", prendasRouter);

//Static files


export default app; 