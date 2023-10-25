let { Router } = require("express");
let routerUsers = Router();
let getUsers = require("../handlers/users/getUsers");
let createUsers = require("../handlers/users/createUsers");
let updateUsers = require("../handlers/users/updateUsers");
let deleteUsers = require("../handlers/users/deleteUsers");
let getUserById = require("../handlers/users/getUserById")

routerUsers.get("/all", getUsers); //OK

routerUsers.post("/create", createUsers); //OK

routerUsers.put("/update/:id", updateUsers); //OK

routerUsers.delete("/delete/:id", deleteUsers); //OK

routerUsers.get("/:id", getUserById); //OK

module.exports = routerUsers;
