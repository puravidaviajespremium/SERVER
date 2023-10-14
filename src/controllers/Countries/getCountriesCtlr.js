const { response } = require("express");
const { Country } = require("../../db.js");

const allCountries = async () => {
  const countries = await Country.findAll();
  if (countries.length === 0) {
    throw Error("No se registro ningun pais");
  }

  const response = countries.map((c) => {
    return { id: c.id, name: c.name, image: c.image };
  });

  return response;
};

module.exports = { allCountries };
