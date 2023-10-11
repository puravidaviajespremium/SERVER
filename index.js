const express = require("express");
const server = express();
require("dotenv").config();
const { PORT } = process.env;
const user = require("./src/routes/index");

//rutas
server.get("/", (req, res) => {
  res.send("Bienvenido");
});
server.use("/users", user);

server.listen(PORT, () => {
  console.log(`Listen at port ${PORT}`);
});
