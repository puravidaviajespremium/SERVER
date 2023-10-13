const { Router } = require("express");
const routerClients = Router();
const createClientsHandler = require("../handlers/Clients/createClients.js")

// routerClients.get("/all", (req, res) => {
//   res.send("GET Endpoind que muestra todos los clientes");
// });

routerClients.post("/create", createClientsHandler);

// routerClients.get("/update", (req, res) => {
//   res.send("UPDATE Endpoind para Modificar datos de los  clientes");
// });

// routerClients.get("/delete", (req, res) => {
//   res.send("DELETE Endpoind para Eliminar Clientes");
// });

module.exports = routerClients;
