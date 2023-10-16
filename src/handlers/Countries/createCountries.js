const {
  createCountries,
} = require("../../controllers/Countries/createCountriesCtlr");

const createnewCountry = async (req, res) => {
  const { name, image, description, experiences, continent, destinies } =
    req.body;

  try {
    const newCountry = await createCountries(
      name,
      image,
      description,
      experiences,
      continent,
      destinies
    );
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createnewCountry;
