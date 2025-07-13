import express from 'express';

const router = express.Router();

import {
getAllProducts,
getProductById,
createProduct,
deleteProduct
} from '../controllers/products.controller.js';

router.get('/', getAllProducts);

router.get('/:id', getProductById);

router.post('/create', createProduct);

router.delete('/:id', deleteProduct)

export default router;

