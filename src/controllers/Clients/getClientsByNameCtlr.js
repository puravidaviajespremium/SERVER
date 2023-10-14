const { Client } = require("../../db.js");
const { Op } = require("sequelize");

const getClientsByName = async (firstName, lastName) => {
  const clientsByName = await Client.findAll({
    where: {
      [Op.or]: {
        firstName: {
          [Op.like]: `%${firstName}%`,
        },
        lastName: {
          [Op.like]: `%${lastName}%`,
        },
      },
    },
  });

  if (!clientsByName || Object.keys(clientsByName).length === 0) {
    throw new Error("No existe ningun cliente con ese nombre o apellido");
  }

  return clientsByName;
};

module.exports = getClientsByName;
