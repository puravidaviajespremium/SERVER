const { Client } = require("../../db.js");
const { Op } = require("sequelize");

const updateClient = async (id, client) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    destinationCountry,
    membershipStatus,
    contactStatus,
  } = client;

  const existingClient = await Client.findByPk(id);

  if (!existingClient || Object.keys(existingClient).length === 0) {
    throw new Error("No existe ningún cliente con ese ID para poder editarlo.");
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
      { where: { id } }
    );
    return true;
  }
};

module.exports = updateClient;
