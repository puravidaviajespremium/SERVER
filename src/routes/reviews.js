const { Router } = require("express");
const getReview = require("../handlers/Countries/getReview");

const routerApp = Router();

routerApp.get("/", getReview);

module.exports = routerApp