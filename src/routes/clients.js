const { Router } = require("express");
const routerClients = Router();
const createClient = require("../handlers/Clients/createClient.js");
const getClient = require("../handlers/Clients/getClients.js");
const updateClientHandler = require("../handlers/Clients/updateClient.js");
const deleteClientHandler = require("../handlers/Clients/deleteClient.js");
let getFilteredClientsByContactStatusHandler = require("../handlers/Clients/getFilteredClientsByContactStatusHandler.js");
let getFilteredClientsByMemberShipStatusHandler = require("../handlers/Clients/getFilteredClientsByMemberShipStatusHandler.js");
let deleteManyClientsHandler = require("../handlers/Clients/deleteManyClientsHandler.js");
let getClientByIdHandler = require("../handlers/Clients/getClientByIdHandler.js");
const getClientsByColl = require("../handlers/Clients/getClientsByColl.js");

routerClients.post("/create", createClient); //GENERAL

routerClients.get("/", getClient); //USO COLABORADORES Y ADMIN

routerClients.put("/update/:id", updateClientHandler); //USO SOLO ADMIN //editado para el admin

routerClients.get("/bycoll/", getClientsByColl);

routerClients.delete("/delete/:id", deleteClientHandler); //USO SOLO ADMIN, se cambio a params!

routerClients.get(
  "/filter/contactStatus",
  getFilteredClientsByContactStatusHandler
); //Ok

routerClients.get(
  "/filter/membershipStatus",
  getFilteredClientsByMemberShipStatusHandler
); //OK

routerClients.delete("/deleteMany", deleteManyClientsHandler); //OK

routerClients.get("/:id", getClientByIdHandler);

module.exports = routerClients;
