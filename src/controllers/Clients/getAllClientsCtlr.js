const { Client } = require("../../db.js");

const getAllClients = async (offset, rowsPerPage) => {

  if (!offset && !rowsPerPage) {
    const allClients = await Client.findAll();
    if (allClients.length === 0) {
      throw new Error("No hay ningún cliente en la base de datos!");
    }

    return allClients

  } else {
    const allClients = await Client.findAndCountAll({
      offset: offset,
      limit: rowsPerPage
    });

    if (allClients.length === 0) {
      throw new Error("No hay ningún cliente en la base de datos!");
    }

    const hasPreviousPage = offset > 0;
    const hasNextPage = allClients.rows.length === rowsPerPage;

    return {
      clients: allClients.rows,
      total: allClients.count,
      pageInfo: {
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage
      }
    };
  }
};

module.exports = getAllClients;
