const { Router } = require("express");
const createPayment = require("../handlers/paypal/createPayment");
const captureOrder = require("../handlers/paypal/captureOrder");
const cancelOrder = require("../handlers/paypal/cancelOrder");

const paypalRoute = Router();

paypalRoute.get("/create-payment", createPayment);

paypalRoute.get("/capture-order", captureOrder);

paypalRoute.get("/cancel-order", cancelOrder);

module.exports = paypalRoute;
