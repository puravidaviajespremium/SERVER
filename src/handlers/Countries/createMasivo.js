const { Country } = require("../../db.js");

const createCountriesMasivo = async (req, res) => {
  // const {name, image, description, experiences, continents } = req.body

  try {
    const newCountry = await Country.bulkCreate(req.body);
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCountriesMasivo;
