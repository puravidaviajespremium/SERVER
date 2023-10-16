const fs = require("fs/promises");
const { pathMasivo } = require("../../utils/utils.js");
const { Country, Destiny } = require("../../db.js");
const {
  createCountries,
} = require("../../controllers/Countries/createCountriesCtlr.js");

const createCountriesMasivo = async (req, res) => {
  try {
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
    // {
    //   include: Destiny,
    // });

    res.status(201).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCountriesMasivo;
