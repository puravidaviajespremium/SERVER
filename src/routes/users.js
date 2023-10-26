let { Router } = require("express");
let routerUsers = Router();

let getUsers = require("../handlers/users/getUsers");
let deleteUsers = require("../handlers/users/deleteUsers");
let getUserById = require("../handlers/users/getUserById");
const createUsers = require("../handlers/users/createUsers");
const updateUser = require("../handlers/users/updateUser");

routerUsers.get("/", getUsers); //OK

routerUsers.post("/create", createUsers); //OK

routerUsers.put("/update/:id", updateUser); //OK

routerUsers.delete("/delete/:id", deleteUsers); //OK

routerUsers.get("/:id", getUserById); //OK

module.exports = routerUsers;
