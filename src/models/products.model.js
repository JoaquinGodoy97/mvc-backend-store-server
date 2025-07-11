import { getDocs, addDoc, deleteDoc, doc, collection } from "firebase/firestore";
import db from "../db.js";

const productsCollection = collection(db, "products");

export async function getProductById(id) {
    const products = await getAllProducts();

    const product = products.find(product => product.id == id);
    return product;
};

export async function getAllProducts() {
    const snapshot = await getDocs(productsCollection);

    if (snapshot.empty) {
        const error = new Error('No products available yet.');
        error.statusCode = 404;
        throw error;
    }

    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products
};

export async function saveProduct(productData) { 
    const addedProduct = await addDoc(productsCollection, productData);
    const productId = addedProduct.path.split("/")[1];
    return `Added product ${productData.title} with ID ${productId}`;
    };

export async function deleteProduct(id) {
    const products = await getAllProducts();

    const foundProduct = products.find(product => product.id === id);

    if (!foundProduct) {
        const error = new Error(`Product with ID ${id} not found`);
        error.statusCode = 404;
        throw error;
    }

    const productRef = doc(db, "products", foundProduct.id)
    
    await deleteDoc(productRef);
    return foundProduct;
};
