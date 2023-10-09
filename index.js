const express = require("express");
const server = express();
const PORT = 3001;
const user = require("./src/routes/users");

server.listen(PORT, () => {
  console.log(`Listen at port ${PORT}`);
});
