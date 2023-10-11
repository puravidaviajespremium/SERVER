const express = require("express");
const server = express();
require("dotenv").config();
const { PORT } = process.env;
const user = require("./src/routes/index");
const { conn } = require("./src/db.js");
const isLogged = require("./src/middlewares/isLogged");

//Middlewares
server.use(isLogged);

//rutas
server.get("/", (req, res) => {
  res.send("Bienvenido");
});
server.use("/users", user);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`);
  });
});
