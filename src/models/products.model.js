import { getDocs, addDoc, deleteDoc, doc, collection } from "firebase/firestore";
import db from "../../db.js";

const productsCollection = collection(db, "products");

// Método para buscar un producto por su ID
export async function getProductById(id) {
    const products = await getAllProducts();
    const product = products.find(product => product.id == id);
    return product;
};
// Método para obtener todos los productos  
export async function getAllProducts() {

    try {
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products;

    } catch (error) {
    console.error("Error fetching products:", error);
    return [];
    }

};

// // Método para guardar un producto en el archivo JSON
export async function saveProduct(productData) { 
    await addDoc(productsCollection, productData); 
    };

// JSON file Format 
// {
//         "title": "New Striped Shirt for Women",
//         "price": 2,
//         "description": "bla bla bla",
//         "category": "clothes",
//         "image": "http://example.com"
// }

// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
    const products = await getAllProducts();
    const productFound = products.find(product => product.id == id);

    const productRef = doc(db, "products", id)
    console.log(productFound)
    await deleteDoc(productRef);
    return productFound;
};
