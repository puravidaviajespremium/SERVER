const { Country, Destiny } = require("../../db.js");

const getCountriesByIdctlr = async (id) => {
  const countriesById = await Country.findOne({
    where: { id },
    include: [{
      model: Destiny,
      attributes: ["id","name", "image", "description"], // editado para el admin
    }],
  });

  if (!countriesById) {
    throw new Error("Destino no encontrado");
  }

  return countriesById;
};

module.exports = getCountriesByIdctlr;
