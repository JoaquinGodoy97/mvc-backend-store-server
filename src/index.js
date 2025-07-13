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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/api/products', authentication, productsRouter);
app.use('/auth', authRouter);


//Not found route
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route Not Found.' });
});

//Json error with traceback or 500
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error.',
    });
});