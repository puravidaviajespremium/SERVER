const { Client } = require("../../db.js");
const { Op } = require("sequelize");

const updateClient = async (email, client) => {
  const {
    firstName,
    lastName,
    telephone,
    destinationCountry,
    membershipStatus,
    contactStatus,
  } = client;

  const existingClient = await Client.findOne({
    where: { email }
  });

  if (!existingClient || Object.keys(existingClient).length === 0) {
    throw new Error("No existe ningún cliente con ese EMAIL para poder editarlo.");
  } else {
    clientEdite = await Client.update(
      {
        firstName,
        lastName,
        email,
        telephone,
        destinationCountry,
        membershipStatus,
        contactStatus,
      },
      { where: { email } }
    );
    return clientEdite; //editado para el admin
  }
};

module.exports = updateClient;
