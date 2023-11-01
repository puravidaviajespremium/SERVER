let { Router } = require("express");
let routerUsers = Router();

let getUsers = require("../handlers/users/getUsers");
let deleteUsers = require("../handlers/users/deleteUsers");
let getUserById = require("../handlers/users/getUserById");
const createUsers = require("../handlers/users/createUsers");
const updateUser = require("../handlers/users/updateUser");
let getFilterUserByUserStatus = require("../handlers/users/getFilterUsersByUserStatus");
let getFilterUserByIsBlocked = require("../handlers/users/getFilterUsersByUserIsBlocked");
let deleteManyUser = require("../handlers/users/deleteManyUsersHandler");
const getMetrics = require("../handlers/users/getMetrics");

routerUsers.get("/", getUsers); //OK

routerUsers.get("/metrics", getMetrics);

routerUsers.post("/create", createUsers); //OK

routerUsers.put("/update/:id", updateUser); //OK

routerUsers.delete("/delete/:id", deleteUsers); //OK

routerUsers.get("/:id", getUserById); //OK

routerUsers.get("/filter/userStatus", getFilterUserByUserStatus); //OK

routerUsers.get("/filter/isBlocked/:isBlocked", getFilterUserByIsBlocked); //OK

routerUsers.delete("/deleteMany", deleteManyUser); //OK

module.exports = routerUsers;
