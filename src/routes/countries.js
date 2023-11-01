const { Router } = require("express");
const getCountries = require("../handlers/Countries/getCountries");
const createnewCountries = require("../handlers/Countries/createCountries");
const deleteCountries = require("../handlers/Countries/deleteCountries");
const updateCountries = require("../handlers/Countries/updateCountries");
const createCountriesMasivo = require("../handlers/Countries/createMasivo");
const getCountriesById = require("../handlers/Countries/getCountryById");
let getCountriesByContinentHandler = require("../handlers/Countries/getCountriesByContinentHandler");

const routerCountries = Router();

routerCountries.get("/", getCountries); // terminada

routerCountries.post("/create", createnewCountries); // terminada

routerCountries.post("/createmasivo", createCountriesMasivo);

routerCountries.get("/country/:id", getCountriesById);

routerCountries.put("/update/:id", updateCountries);

routerCountries.delete("/delete/:id", deleteCountries); // terminada - MIRAR con el grupo /

routerCountries.get("/filter/continent", getCountriesByContinentHandler); //Ok

module.exports = routerCountries;
