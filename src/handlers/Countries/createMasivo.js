const fs = require("fs/promises");
const { pathMasivo, pathMasivoUsers } = require("../../utils/utils.js");
const { Country, Destiny, User } = require("../../db.js");
const {
  createCountries,
} = require("../../controllers/Countries/createCountriesCtlr.js");

const createCountriesMasivo = async (req, res) => {
  try {
    const responseUsers = await fs.readFile(pathMasivoUsers());
    const datausers = JSON.parse(responseUsers);

    const newUsers = await User.bulkCreate(datausers);

    const response = await fs.readFile(pathMasivo());
    const data = JSON.parse(response);

    data.forEach(async (pais) => {
      const { name, image, description, experiences, continent, destinies } =
        pais;

      const newCreatepais = await createCountries(
        name,
        image,
        description,
        experiences,
        continent,
        destinies
      );
    });

    const countries = await Country.findAll();

    res.status(201).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCountriesMasivo;
