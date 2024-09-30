import express from "express";
import ejemplosroutes from "./routes/ejemplos.routes.js";
import connetion from "./database/connection.js";
// para crear una instancia de express
const server = new express();
const port = 3000;

// Rutas / EndPoints
// Use: Metodo para asignar Middlelware
// /api/v1 es lo que inicia o continua el endpoint principal antes de continuar con las rutas de ejemplos.routes
server.use("/api/v1", ejemplosroutes);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
