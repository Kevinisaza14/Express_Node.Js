import express from 'express';
import userRoutes from "./routes/crud.user.routes.js";

const server = new express();

// TODO: Desarrollar parte server: APIRest con un CRUD de productos (4 campos incluyendo a PK)


server.use(express.json());

server.use("/api/v1", userRoutes);
server.use(function(req, res){
  res.send("Error 404: Page not found");
});

server.listen(3000, () => {
  console.log(`Server listening at http://localhost:3000`)
})