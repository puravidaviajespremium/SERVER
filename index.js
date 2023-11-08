const server = require("./src/server");
require("dotenv").config();
const { PORT } = process.env;
const { conn } = require("./src/db.js");

conn.sync({ forse: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listen at port ${PORT}`);
  });
});
