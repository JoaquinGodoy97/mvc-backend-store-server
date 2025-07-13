
Test user

default_user = {
id: 1,
email: "user@email.com",
password: "strongPass123"
}

**products.routes.js:**
- GET /api/products brings all products.
- GET /api/products/:id brings a selected product by ID.
- POST /api/products/create sends an object (body) with the new product information to be stored in DB.
- DELETE /api/products/:id deletes the selected product by ID.

**auth.routes.js:**
- POST /auth/login sends credentials (body) and brings Bearer token if they are valid else authentication error.