const { Client } = require("../../db.js");

const createClient = async (
  firstName,
  lastName,
  email,
  telephone,
  countryOrigin,
  destinationCountry
) => {
  const existingClient = await Client.findOne({
    where: { email },
  });

  if (existingClient) {
    // throw new Error("El usuario ya existe!!");
  }

  const newClient = await Client.create({
    firstName,
    lastName,
    email,
    telephone,
    countryOrigin,
    destinationCountry,
  });

  return newClient;
};

module.exports = createClient;
