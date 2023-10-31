const getAllClients = require("../../controllers/Clients/getAllClientsCtlr.js");
const getClientsByName = require("../../controllers/Clients/getClientsByNameCtlr.js");

const getClient = async (req, res) => {
  const { firstName, lastName, page, perPage } = req.query;

  if (!firstName && !lastName && !page && !perPage) {

    try {
      const allClients = await getAllClients();
      res.status(200).json(allClients);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener todos los usuarios" });
    }

  } else {

    const pageNumber = parseInt(page);
    const rowsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * rowsPerPage;

    try {
      if (firstName || lastName) {
        const clientByName = await getClientsByName(firstName, lastName, offset, rowsPerPage);
        res.status(200).json(clientByName);
      } else {
        const allClients = await getAllClients(offset, rowsPerPage);
        res.status(200).json(allClients);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

};

module.exports = getClient;
