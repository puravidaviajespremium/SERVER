const createClientsCtlr = require("../../controllers/Clients/createClientsCtlr.js");

const createClient = async (req, res) => {

  try {
    const {
      firstName,
      lastName,
      email,
      telephone,
      countryOrigin,
      destinationCountry,
      comment,
    } = req.body;

    if (!firstName || !lastName || !email || !telephone || !countryOrigin) {
      throw new Error("Faltan Datos!!");
    }

    newClient = await createClientsCtlr(
      firstName,
      lastName,
      email,
      telephone,
      countryOrigin,
      destinationCountry,
      comment
    );

    res.status(201).send(newClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createClient;
