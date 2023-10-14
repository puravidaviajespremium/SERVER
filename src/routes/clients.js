const { Router } = require("express");
const routerClients = Router();
const createClientsHandler = require("../handlers/Clients/createClients.js");
const getClientsHandler = require("../handlers/Clients/getClients.js");
const updateClientHandler = require("../handlers/Clients/updateClient.js");
const deleteClientHandler = require("../handlers/Clients/deleteClient.js");


routerClients.post("/create", createClientsHandler);  //GENERAL

routerClients.get("/", getClientsHandler);            //USO COLABORADORES Y ADMIN 

routerClients.put("/update", updateClientHandler);    //USO SOLO ADMIN

//ruta por ID
 
routerClients.delete("/delete", deleteClientHandler);    //USO SOLO ADMIN
 

module.exports = routerClients;
