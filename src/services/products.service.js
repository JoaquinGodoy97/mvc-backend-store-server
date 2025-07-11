import express from 'express';
import * as productsModel from '../models/products.model.js'

const router = express.Router();

export const getAllProducts = async () => {
    return productsModel.getAllProducts();
};

export const getProductById = async (id) => {
    return productsModel.getProductById(id);
};

export const createProduct = async (productData) => {

    const newProduct = {
            title: productData.title,
            price: productData.price,
            description: productData.description,
            category: productData.category,
            image: productData.image
        };

    return await productsModel.saveProduct(newProduct);
};

export const deleteProduct = async (id) => {
    return await productsModel.deleteProduct(id);
};

export default router;