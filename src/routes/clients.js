const { Router } = require("express");
const routerClients = Router();

routerClients.get("/all", (req, res) => {
  res.send("GET Endpoind que muestra todos los clientes");
});

routerClients.get("/create", (req, res) => {
  res.send("POST Endpoind para Crear Nuevos Clientes");
});

routerClients.get("/update", (req, res) => {
  res.send("UPDATE Endpoind para Modificar datos de los  clientes");
});

routerClients.get("/delete", (req, res) => {
  res.send("DELETE Endpoind para Eliminar Clientes");
});

module.exports = routerClients;
