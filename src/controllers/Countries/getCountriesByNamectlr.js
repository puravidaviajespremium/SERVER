const { Country } = require("../../db.js");
const { Op } = require("sequelize");

const getCountriesByNamectlr = async (country) => {
  const countriesByName = await Country.findAll({
    where: {
      name: {
        [Op.like]: `%${country}%`,
      },
    },
  });

  if (!countriesByName || Object.keys(countriesByName).length === 0) {
    throw new Error("No existe el destino buscado.");
  }

  return countriesByName;
};

module.exports = getCountriesByNamectlr;
