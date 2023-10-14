const getCountriesByNamectlr = require("../../controllers/Countries/getCountriesByNamectlr");
const {
  allCountries,
} = require("../../controllers/Countries/getCountriesCtlr");

const getCountries = async (req, res) => {
  const { country } = req.query;
  try {
    if (!country) {
      const countries = await allCountries();
      res.status(200).json(countries);
    } else {
      const countriesByName = await getCountriesByNamectlr(country);
      res.status(200).json(countriesByName);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountries;
