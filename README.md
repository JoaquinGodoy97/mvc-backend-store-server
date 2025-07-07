Requerimiento #4: Rutas

*Establece las rutas necesarias para atender las peticiones que interactúan con productos, así como también la ruta de login para autenticar usuarios:*

**products.routes.js:**
- GET /api/products devuelve todos los productos.
- GET /api/products/:id devuelve el producto con el ID indicado.
- POST /api/products/create recibe en el cuerpo (body) de la petición la información sobre el nuevo producto
- para ser guardado en el servicio de datos en la nube.
- DELETE /api/products/:id elimina el producto con el ID indicado.

**auth.routes.js:**
- POST /auth/login recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario.