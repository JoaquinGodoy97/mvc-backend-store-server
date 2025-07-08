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

    const productLength = await productsModel.getAllProducts();

    const newProduct = {
        id: productLength.length + 1,
        title: productData.title,
        price: productData.price,
        description: productData.description,
        category: productData.category,
        image: productData.image
    };

    // products.push(newProduct);
    await productsModel.saveProduct(newProduct);

    return newProduct;
};

export const deleteProduct = async (id) => {
    return await productsModel.deleteProduct(id); // add a message that it was deleted successfully

};

export default router;