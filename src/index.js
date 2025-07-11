import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config'

import productsRouter from './routes/products.routes.js';
import authRouter from './routes/auth.routes.js';

import { authentication } from './middleware/authentication.js'

const PORT = process.env.PORT || 3000;
const FRONT_END_URL = process.env.FRONT_END_URL;

const app = express();

const corsOptions = {
    origin: [FRONT_END_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.use('/api/products', authentication, productsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada o invalida.' });
});