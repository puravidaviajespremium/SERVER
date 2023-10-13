const express = require("express");
const server = express();
require("dotenv").config();
const { PORT } = process.env;
const user = require("./src/routes/users");
const countries = require("./src/routes/countries");
const clients = require("./src/routes/clients");
const { conn } = require("./src/db.js");
const isLogged = require("./src/middlewares/isLogged");
const {Router} = require("express")
const router = Router();


//Middlewares
server.use(isLogged);

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const errors = require("./src/middlewares/errors");

// require("./db.js");

server.name = "API";

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
server.use("/users", user);

server.use("/countries", countries);

server.use("/clients", clients);

// Error catching endware.
server.use(errors);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`);
  });
});
