const { Client } = require("../../db.js");

const updateClient = async (id, client) => {
  const {
    firstName,
    lastName,
    telephone,
    email,
    countryOrigin,
    membershipStatus,
    contactStatus,
  } = client;

  const existingClient = await Client.findOne({
    where: { id },
  });

  if (!existingClient || Object.keys(existingClient).length === 0) {
    throw new Error("No existe ningún cliente con ese Id para poder editarlo.");
  } else {
    clientEdite = await Client.update(
      {
        firstName,
        lastName,
        email,
        telephone,
        countryOrigin,
        membershipStatus,
        contactStatus,
      },
      { where: { id } }
    );
    return clientEdite; //editado para el admin
  }
};

module.exports = updateClient;
