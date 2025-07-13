import * as productsService from '../services/products.service.js'

export const getAllProducts = async (req, res) => {
    try {
        const products = await productsService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await productsService.getProductById(id);
        res.status(200).json(product);

    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message });
    }
    
};

export const createProduct = async (req, res) => {

    const newProduct = await productsService.createProduct( req.body );
    res.status(201).json(newProduct);
    
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await productsService.deleteProduct(id);
        res.status(200).json(product);
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({ message: error.message})
    }
}
