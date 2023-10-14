const { Router } = require("express");
const routerUsers = Router();
const getUsers = require("../handlers/users/getUsers");
const createUsers = require("../handlers/users/createUsers");
const updateUsers = require("../handlers/users/updateUsers");
const deleteUsers = require("../handlers/users/deleteUsers");

routerUsers.get("/all", getUsers);

routerUsers.get("/create", createUsers);

routerUsers.get("/update", updateUsers);

routerUsers.get("/delete", deleteUsers);

module.exports = routerUsers;
