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

    let products = [];
    try {
        products = await productsModel.getAllProducts();
    } catch (err) {
        if (err.message === "No products here.") {
            products = [];
        } else {
            throw err;
        }
    }

    // const lastProductId = products[products.length]
    const maxId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0;

    const newProduct = {
            id: products.length > 0 ? maxId + 1 : 1,
            title: productData.title,
            price: productData.price,
            description: productData.description,
            category: productData.category,
            image: productData.image
        };

    await productsModel.saveProduct(newProduct);

    return newProduct
};

export const deleteProduct = async (id) => {
    return await productsModel.deleteProduct(id);
};

export default router;