// products.model.js
import { getDocs, collection } from "firebase/firestore";
import db from "./db.js"; // your Firestore instance

const productsCollection = doc(db, "products");

// Método para buscar un producto por su ID
export function getProductById(id) {
    const products = getAllProducts();
    const product = products.find(product => product.id == id);
    console.log(product)
    return product;
};
// Método para obtener todos los productos
export async function getAllProducts() {

    try {
    const snapshot = await getDocs(collection(db, "products"));
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    return products;

    } catch (error) {
    console.error("Error fetching products:", error);
    }

};

// Método para guardar un producto en el archivo JSON
export async function saveProduct(productData) { 
    await setDoc(productsCollection, productData ); 
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
export function deleteProduct(id) {
const products = getAllProducts();
const productFound = products.find(product => product.id == id);
const filteredProducts = products.filter(product => product.id != id);
fs.writeFileSync(dataPath, JSON.stringify(filteredProducts, null, 2));
return `${productFound.title} deleted sucessfully.`;
};
