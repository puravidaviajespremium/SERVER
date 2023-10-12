const { Router } = require("express");
const getCountries = require("../handlers/Countries/getCountries");
const createCountries = require("../handlers/Countries/createCountries");
const deleteCountries = require("../handlers/Countries/deleteCountries");
const updateCountries = require("../handlers/Countries/updateCountries");
const routerCountries = Router();

routerCountries.get("/all", getCountries);

routerCountries.post("/create", createCountries);

routerCountries.get("/update", updateCountries);

routerCountries.get("/delete", deleteCountries);

module.exports = routerCountries;
