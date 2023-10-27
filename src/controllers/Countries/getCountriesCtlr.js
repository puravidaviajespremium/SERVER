const { response } = require("express");
const { Country } = require("../../db.js");

const allCountries = async () => {
  const countries = await Country.findAll();
  if (countries.length === 0) {
    throw Error("No se registro ningun pais");
  }

  const response = countries.map((c) => {
    return { id: c.id, name: c.name, image: c.image, description: c.description, experiences: c.experiences, continent: c.continent };
  });

  return response;
};

module.exports = { allCountries };
