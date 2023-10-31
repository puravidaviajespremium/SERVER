const getCountriesByNamectlr = require("../../controllers/Countries/getCountriesByNamectlr");
const {
  allCountries,
} = require("../../controllers/Countries/getCountriesCtlr");

const getCountries = async (req, res) => {
  const { country, page, perPage } = req.query;

  const pageNumber = parseInt(page);
  const rowsPerPage = parseInt(perPage);

  const offset = (pageNumber - 1) * rowsPerPage;

  try {
    if (!country) {
      const countries = await allCountries(offset, rowsPerPage);
      res.status(200).json(countries);
    } else {
      const countriesByName = await getCountriesByNamectlr(country, offset, rowsPerPage);
      res.status(200).json(countriesByName);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountries;
