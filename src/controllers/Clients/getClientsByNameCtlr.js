const { Client } = require("../../db.js");
const { Op } = require("sequelize");

const getClientsByName = async (firstName, lastName, offset, rowsPerPage) => {
  const clientsByName = await Client.findAndCountAll({
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
    offset: offset,
    limit: rowsPerPage
  });

  if (!clientsByName || Object.keys(clientsByName).length === 0) {
    throw new Error("No existe ningun cliente con ese nombre o apellido");
  }

  const hasPreviousPage = offset > 0;
  const hasNextPage = clientsByName.rows.length === rowsPerPage;

  return {
    clients: clientsByName.rows,
    total: clientsByName.count,
    pageInfo:{
      hasPreviousPage: hasPreviousPage,
      hasNextPage: hasNextPage
    }
  }
};

module.exports = getClientsByName;
