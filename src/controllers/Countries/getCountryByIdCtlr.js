const { Country } = require("../../db.js");

const getCountriesByIdctlr = async (id) => {
  const countriesByName = await Country.findAll({
    where: {
      id: id,
    },
  });

  if (!countriesByName || Object.keys(countriesByName).length === 0) {
    throw new Error("No existe el destino buscado.");
  }

  return countriesByName;
};

module.exports = getCountriesByIdctlr;
