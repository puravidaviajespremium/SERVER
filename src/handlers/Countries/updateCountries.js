const updateCountriesCtlr = require("../../controllers/Countries/updateCountriesCtlr");
const updateCountries = require("../../controllers/Countries/updateCountriesCtlr")


const updateCountriesHandler = async (req, res) => {
  const info = req.body
  const { id } = req.params;

  try {
    if (info.name && info.image && info.description && info.experiences && info.continent) {
      const update = await updateCountries(id, info);
      if (update) {
        res.status(200).json({ data: { id, ...info } }); //editado para el admin
      }

    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = updateCountriesHandler