import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as http from 'node:http'
import 'dotenv/config'

import productsRouter from './src/routes/products.routes.js';

const PORT = process.env.PORT || 3000;
const FRONT_END_URL = process.env.FRONT_END_URL;

// Instala jsonwebtoken

//-----------------------------------------------------------------------------------------------------

const app = express();

// Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa pueden consultar al servicio sin problemas.
const corsOptions = {
    origin: [FRONT_END_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

//SERVER STARTS HERE

// const http = require('http')
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, mundo!\n');
});

app.use(cors(corsOptions));
app.use(bodyParser.json());



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.use('/api/products', productsRouter);
// app.use('/api/auth', authRouter);

//400 (Bad Request) para solicitudes mal formadas o con datos inválidos.
// ● 401 (Unauthorized) y 403 (Forbidden) para problemas relacionados con
// autenticación o permisos.
// ● 500 (Internal Server Error) para errores internos del servidor.

// Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada o invalida.' });
});