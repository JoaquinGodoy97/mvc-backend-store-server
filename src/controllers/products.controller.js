import * as productsService from '../services/products.service.js'

export const getAllProducts = async (req, res) => {
    try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
    } catch (error) {
        console.error('Error in controller:', error.message);
        res.status(500).json({ message: 'Server error loading products' });
    }
}

export const getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await productsService.getProductById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
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
        console.log(error)
    }
}
