// importa el paquete express de "node_modules"
import express from 'express';
// import routes
import ejemplosRoutes from "./routes/ejemplos.routes.js";
import userRoutes from "./routes/crud.user.routes.js";

// creamos un objeto "server" a traves de la clase "express"
const server = new express();
// rutas / endpoints
// use(): Método para asignar middlewares
// gestion de req "json"
server.use(express.json());
// "/api/v1": parte incial de la URL antes de los endpoints
server.use("/api/v1", ejemplosRoutes, userRoutes); 
// crear servidor
server.listen(3000, () => {
    console.log(`Servidor escuchando por el puerto 3000`)
});