const { Router } = require("express");
const reciboPaypal = require("../handlers/nodeMailers/reciboPaypal");
const contacto = require("../handlers/nodeMailers/contacto");

const nodemailerRoute = Router();

nodemailerRoute.post("/", contacto);

nodemailerRoute.post("/recibo", reciboPaypal);

module.exports = nodemailerRoute;
