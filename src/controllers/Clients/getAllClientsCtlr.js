const { Client } = require("../../db.js");

const getAllClients = async () => {
  const allClients = await Client.findAll();

  if (allClients.length === 0) {
    throw new Error("No hay ningún cliente en la base de datos!");
  }

  return allClients;
};

module.exports = getAllClients;
