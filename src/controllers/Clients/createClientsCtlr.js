const { Client, User, Config, HistoryClient } = require("../../db.js");
const contactoClient = require("../nodemailers/contactoClient.js");
const contactoColaborador = require("../nodemailers/contactoColaborador.js");
let client;
let UserId;

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

module.exports = createClientsCtlr;
