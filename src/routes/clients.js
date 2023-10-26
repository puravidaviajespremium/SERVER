const { Router } = require("express");
const routerClients = Router();
const createClient = require("../handlers/Clients/createClient.js");
const getClient = require("../handlers/Clients/getClients.js");
const updateClientHandler = require("../handlers/Clients/updateClient.js");
const deleteClientHandler = require("../handlers/Clients/deleteClient.js");

routerClients.post("/create", createClient); //GENERAL

routerClients.get("/", getClient); //USO COLABORADORES Y ADMIN

routerClients.put("/update", updateClientHandler); //USO SOLO ADMIN

//ruta por ID

routerClients.delete("/delete", deleteClientHandler); //USO SOLO ADMIN

module.exports = routerClients;
