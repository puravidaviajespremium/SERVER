const { Country } = require("../../db.js")
const { Op } = require("sequelize");

const updateCountries = async (id, countries) => {
  const { name, image, description, experiences, continent } = countries
  const existingCountry = await Country.findByPk(id);

  if (!existingCountry || Object.keys(existingCountry).length === 0) {
    throw new Error("No existe ningún pais con ese ID para poder editarlo.");
  } else {
    countryEdit = await Country.update({
      name,
      image,
      description,
      experiences,
      continent,
    },
      { where: { id } }
    );
    return countryEdit;

  }
}

module.exports = updateCountries