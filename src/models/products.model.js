// products.model.js
import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;
// Ruta al archivo JSON que simula la "base de datos"
const dataPath = path.join(__dirname, '../../data/products.json');

// Método para buscar un producto por su ID
export function getProductById(id) {
const products = getAllProducts();
const product = products.find(product => product.id == id);
console.log(product)
return product;

};
// Método para obtener todos los productos
export function getAllProducts() {
const data = fs.readFileSync(dataPath, 'utf-8');
return JSON.parse(data);
};

// Método para guardar un producto en el archivo JSON
export function saveProduct(productData) {
const products = getAllProducts();
products.push(productData);
fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
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
