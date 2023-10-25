const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const routerUsers = require("./routes/users");
const routerClients = require("./routes/clients");
const routerCountries = require("./routes/countries");
const routerAuthentication = require("./routes/authentication.js"); //Auth0
const { auth } = require('express-openid-connect');  //Auth0
const routerReviews = require("./routes/reviews");
const isLogged = require("./middlewares/isLogged");
const errors = require("./middlewares/errors");
const sequelize = require("./db");
const nodemailerRoute = require("./routes/nodemailer");
const paypalRoute = require("./routes/paypal");
require("dotenv").config();
const {
  AUTH0_ISSUER_BASE_URL, 
  BASE_URL, 
  AUTH0_CLIENT_ID,
  SESSION_SECRET} = process.env;

const configAuth0 = {
  authRequired: false, 
  auth0Logout: true,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  baseURL: BASE_URL,
  clientID: AUTH0_CLIENT_ID,
  secret: SESSION_SECRET,
};

//Middlewares
server.use(isLogged);

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//     throw new Error(error);
//   }
// })();

//rutas
server.get("/", (req, res) => {
  res.send("Bienvenido");
});

server.use("/users", routerUsers);

server.use("/countries", routerCountries);

server.use("/clients", routerClients);

server.use("/review", routerReviews);

server.use("/nodemailer", nodemailerRoute);

server.use("/paypal", paypalRoute);

//Auth0
server.use(auth(configAuth0));

server.use("/authentication", routerAuthentication); //rutas Auth0

// // Error catching endware.
server.use(errors);

// Errors Auth0
server.use((req, res, next) => {
  const error = new Error("No encontrado");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Error interno del servidor";
  res.status(status).send(message);
});

module.exports = server;