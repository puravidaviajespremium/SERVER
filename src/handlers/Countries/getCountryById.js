const getCountriesByIdctlr = require("../../controllers/Countries/getCountryByIdCtlr");

const getCountriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await getCountriesByIdctlr(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCountriesById;
