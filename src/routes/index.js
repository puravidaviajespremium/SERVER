const { Router } = require("express");
const server = require("../server");
const router = Router();

server.get("/", (req, res) => {
  res.send("Bienvenido");
});

server.use("/users", user);

module.exports = router;
