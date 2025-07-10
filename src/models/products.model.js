import { getDocs, addDoc, deleteDoc, doc, collection } from "firebase/firestore";
import db from "../../db.js";

const productsCollection = collection(db, "products");

export async function getProductById(id) {
    const products = await getAllProducts();
    const product = products.find(product => product.id == id);
    return product;
};

export async function getAllProducts() {

    const snapshot = await getDocs(productsCollection);

    const products = snapshot.docs.map(doc => ({
        docId: doc.id,
        ...doc.data()
    }));

    if (products.length === 0) {
        throw new Error("No products here.");
    }

    return products;
};

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

export async function deleteProduct(id) {
    const products = await getAllProducts();
    const foundProduct = products.find(product => product.id == id);

    if (!foundProduct) {
        throw new Error(`Product with ID ${id} not found`);
    }
    const productRef = doc(db, "products", foundProduct.docId)

    await deleteDoc(productRef);
    return foundProduct;
};
