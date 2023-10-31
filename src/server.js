const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
require("dotenv").config();
const { AUTH0_ISSUER_BASE_URL, URL_BASE, AUTH0_CLIENT_ID, SESSION_SECRET } =
  process.env;

const routerUsers = require("./routes/users");
const routerClients = require("./routes/clients");
const routerCountries = require("./routes/countries");
const routerAuthentication = require("./routes/authentication.js"); //Auth0
const { auth } = require("express-openid-connect"); //Auth0
const routerReviews = require("./routes/reviews");
const isLogged = require("./middlewares/isLogged");
const errors = require("./middlewares/errors");
const sequelize = require("./db");
const nodemailerRoute = require("./routes/nodemailer");
const paypalRoute = require("./routes/paypal");
require("dotenv").config();

const configAuth0 = {
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  baseURL: URL_BASE,
  clientID: AUTH0_CLIENT_ID,
  secret: SESSION_SECRET,
  authRequired: false,
  auth0Logout: true,
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

// Errors Auth0
server.use((req, res, next) => {
  const error = new Error("No encontrado");
  error.status = 404;
  next(error);
});

// // Error catching endware.
server.use((error, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = error.status || 500;
  const message = error.message || error;
  console.error(error);
  res.status(status).send(message);
});

module.exports = server;
